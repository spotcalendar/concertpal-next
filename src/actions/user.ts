"use server";

import { auth, signIn, signOut } from "@/auth";
import { prisma } from "@/lib/db";
import { getConcertCalendarId } from "@/utils/get-concert-calendar-id";
import { getGoogleAccessToken } from "@/utils/get-google-access-token";
import getSpotifyAccessToken from "@/utils/get-spotify-access-token";
import Agenda from "agenda";
import { google } from "googleapis";
import { revalidatePath } from "next/cache";
// @ts-ignore
import zippy from "zipcode-city-distance";

export const getUser = async () => {
  try {
    const session = await auth();

    if (!session || !session.user) return null;

    const user = await prisma.user.findFirst({
      where: {
        email: session.user.email,
      },
    });

    if (!user) return null;

    return user;
  } catch (error) {
    return null;
  }
};

export const getUserId = async () => {
  try {
    const session = await auth();

    if (!session || !session.user || !session.user.email) return null;

    const data = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
      select: {
        id: true,
      },
    });

    if (!data) return null;

    return data.id;
  } catch (error) {
    return null;
  }
};

export const googleLogin = async () => {
  await signIn("google", {
    redirectTo: "/auth/spotify",
  });
};

export const googleLogout = async () => {
  try {
    await signOut({
      redirect: false,
    });

    return { status: "success" };
  } catch (error) {
    console.log("Google logout error", error);
    return { status: "error" };
  }
};

export const updateOnboardingStatus = async (userId: string) => {
  try {
    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        isOnboarded: true,
        onboardingStatus: "COMPLETED",
      },
    });

    return { status: "success" };
  } catch (error) {
    return { staus: "error" };
  }
};

export const createEvent = async ({
  id,
  email,
  zipcode,
}: {
  id: string;
  email: string | null;
  zipcode: string | null;
}) => {
  try {
    const token = await getGoogleAccessToken(id);

    console.log("Google Access Token", token);

    if (!token) return;

    const config = new google.auth.OAuth2();
    config.setCredentials({ access_token: token });

    const calendar = google.calendar({ version: "v3", auth: config });

    const userArtists = await prisma.user.findFirst({
      where: {
        email,
      },
      select: {
        followingArtists: true,
      },
    });

    if (!userArtists?.followingArtists || userArtists.followingArtists.length == 0) return;

    const zipcodesInUsersRange = zippy.getRadius(zipcode, process.env.NEXT_PUBIC_EVENT_RADIUS, "M");

    console.log(zipcodesInUsersRange);

    const events = await prisma.event.findMany({
      where: {
        artistId: {
          in: userArtists.followingArtists.map((data) => data.artistId),
        },
        zipcode: {
          in: [...zipcodesInUsersRange.map((data: any) => data.zipcode), zipcode],
        },
      },
      take: 2,
    });

    console.log("Events for the artists", events);

    if (events.length == 0) return;

    const calendarData = events.map((event) => {
      return {
        summary: event.title,
        location: `${event.venue}, ${event.state}, ${event.country}`,
        description: `
        Event Link - ${event.url}
        `,
        start: {
          dateTime: event.dateTime.toISOString(),
          timeZone: "America/New_York",
        },
        end: {
          dateTime: event.dateTime.toISOString(),
          timeZone: "America/New_York",
        },
      };
    });

    const calendarId = await getConcertCalendarId(calendar);

    if (!calendarId) return;

    const response = await calendar.events.insert({
      calendarId: calendarId,
      requestBody: calendarData[0],
    });

    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const updateUserDetails = async (zipcode: string) => {
  try {
    const userId = await getUserId();

    if (!userId) return { status: "error", message: "User Data not Found" };

    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        zipcode,
        isOnboarded: true,
        onboardingStatus: "COMPLETED",
      },
    });

    return { status: "success", message: "Address Details Updated successfully" };
  } catch (error) {
    return { status: "error", message: "Internal Server Error" };
  }
};

export const getUserArtistData = async () => {
  const userId = await getUserId();

  if (!userId) return;

  const token = await getSpotifyAccessToken();

  if (!token) return;

  try {
    const agenda = new Agenda({
      db: {
        address: process.env.DATABASE_URL as string,
      },
    });

    await agenda.start();
    await agenda.now("get-artist-data", { userId, token });
    await agenda.close();
  } catch (error) {
    console.log("Agenda Error", error);
  }
};

export const revalidate = async () => {
  revalidatePath("/calendar", "page");
};
