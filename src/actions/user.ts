"use server";

import { auth, signIn, signOut } from "@/auth";
import { prisma } from "@/lib/db";
import { getGoogleAccessToken } from "@/utils/get-google-access-token";
import { google } from "googleapis";

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

export const createEvent = async () => {
  try {
    const session = await auth();

    // console.log(session);

    if (!session || !session.user) return;

    const token = await getGoogleAccessToken();

    if (!token) return;

    const config = new google.auth.OAuth2();
    config.setCredentials({ access_token: token });

    const calendar = google.calendar({ version: "v3", auth: config });

    const userArtists = await prisma.user.findFirst({
      where: {
        email: session.user.email,
      },
      select: {
        followingArtists: true,
      },
    });

    // console.log("User Artists", userArtists);

    if (!userArtists?.followingArtists || userArtists.followingArtists.length == 0) return;

    const events = await prisma.event.findMany({
      where: {
        artistId: userArtists.followingArtists[0].artistId,
      },
      take: 2,
    });

    // console.log("Events", events);

    if (events.length == 0) return;

    const calendarData = events.map((event) => {
      return {
        summary: event.title,
        description: `
        Venue - ${event.venue},
        Country - ${event.country} 
        `,
        start: {
          dateTime: event.dateTime.toISOString(),
          timeZone: "America/New_York",
        },
        end: {
          dateTime: event.dateTime.toISOString(),
          timeZone: "",
        },
      };
    });

    const response = await calendar.events.insert({
      calendarId: "primary",
      requestBody: calendarData[0],
    });

    console.log(response);

    // for (const event of calendarData) {
    //   const response = await calendar.events.insert({
    //     calendarId: "primary",
    //     requestBody: event,
    //   });

    //   console.log(response);
    // }

    // const event = {
    //   summary: "Next.js Meeting",
    //   description: "Discuss Next.js authentication and Google Calendar integration",
    //   start: {
    //     dateTime: "2025-02-15T10:00:00-05:00", // Adjust timezone
    //     timeZone: "America/New_York",
    //   },
    //   end: {
    //     dateTime: "2025-02-15T11:00:00-05:00",
    //     timeZone: "America/New_York",
    //   },
    // };

    // const res = await calendar.events.insert({
    //   calendarId: "primary",
    //   requestBody: event,
    // });

    // console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};

export const updateUserDetails = async (city: string, state: string, zipcode: number) => {
  try {
    const userId = await getUserId();

    if (!userId) return { status: "error", message: "User Data not Found" };

    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        city,
        state,
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
