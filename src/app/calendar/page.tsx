import { auth } from "@/auth";
import { redirect } from "next/navigation";
import SpotifyLogo from "@/assets/spotify-logo";
import GoogleCalendar from "@/assets/google-calendar";
import GreenCheck from "@/assets/green-check";
import UpcomingEvents from "@/components/upcoming-events";
import TopArtists from "@/components/top-artists";
import { Suspense } from "react";
import TopArtistLoading from "@/components/top-artists-loading";
import getSpotifyAccessToken from "@/utils/get-spotify-access-token";
import { prisma } from "@/lib/db";
import UpcomingEventsLoading from "@/components/upcoming-events-loading";

const CalendarPage = async () => {
  const session = await auth();

  if (!session || !session.user || !session.user.email)
    redirect(`${process.env.NEXT_PUBLIC_URL}/auth/login`);

  const data = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  if (!data) redirect(`${process.env.NEXT_PUBLIC_URL}/auth/login`);

  const token = await getSpotifyAccessToken();

  if (!token) redirect(`${process.env.NEXT_PUBLIC_URL}/auth/spotify`);

  const userProfile = session.user.image ? session.user.image : "public/bg3.png";

  return (
    <main className="w-full min-h-screen bg-gray-200 flex flex-col justify-start items-center gap-5 p-10">
      <div className="h-full w-2/4 bg-white flex items-center gap-5 p-4 rounded">
        <img className="w-24 h-24 rounded-full" src={userProfile} alt="image" />

        <div className="h-24 flex flex-col justify-around">
          <h3 className="text-lg capitalize font-medium">{session.user.name}</h3>
          <p className="text-sm text-gray-400">{session.user.email}</p>

          <span className="flex items-center gap-3">
            <SpotifyLogo width="20" height="20" />
            <GoogleCalendar />
          </span>
        </div>
      </div>

      <div className="w-2/4 h-fit bg-white flex flex-col items-start gap-10 p-4 rounded">
        <div className="flex flex-col">
          <span className="flex items-center gap-2">
            <h4 className="text-lg tracking-tight font-semibold text-gray-900">Google Calendar</h4>
            <GreenCheck />
          </span>

          <p className="text-sm text-gray-400">
            Your top 50 artists' concerts will be automatically synced to your Google Calendar.
          </p>
        </div>
      </div>

      <Suspense fallback={<UpcomingEventsLoading />}>
        <UpcomingEvents
          state={data.state}
          city={data.city}
          userId={data.id}
          eventStatus={data.eventStatus}
          zipcode={data.zipcode}
        />
      </Suspense>

      <Suspense fallback={<TopArtistLoading />}>
        <TopArtists userId={data.id} />
      </Suspense>
    </main>
  );
};

export default CalendarPage;
