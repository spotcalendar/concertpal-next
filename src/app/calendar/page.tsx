import { auth } from "@/auth";
import { redirect } from "next/navigation";
import SpotifyLogo from "@/assets/spotify-logo";
import { getUserId } from "@/actions/user";
import GoogleCalendar from "@/assets/google-calendar";
import GreenCheck from "@/assets/green-check";
import UpcomingEvents from "@/components/upcoming-events";
import TopArtists from "@/components/top-artists";
import { Suspense } from "react";
import TopArtistLoading from "@/components/top-artists-loading";
import getSpotifyAccessToken from "@/utils/get-spotify-access-token";
import Agenda from "agenda";

const CalendarPage = async () => {
  const session = await auth();
  const userId = await getUserId();

  if (!session || !session.user || !userId) redirect("htpp://localhost:3000/auth/login");

  const token = await getSpotifyAccessToken();

  if (!token) redirect("http://localhost:3000/auth/spotify");

  const agenda = new Agenda({
    db: {
      address: process.env.DATABASE_URL as string,
    },
  });

  await agenda.start();
  await agenda.now("get-artist-data", { userId, token });
  await agenda.close();

  const userProfile = session.user.image ? session.user.image : "public/bg3.png";

  return (
    <main className="w-full min-h-screen bg-gray-200 flex flex-col justify-start items-center gap-5 p-10">
      <div className="w-2/4 bg-white flex items-start gap-5 p-4 rounded">
        <img className="w-24 h-24 rounded-full" src={userProfile} alt="image" />
        <div className="h-full flex flex-col justify-around">
          <h3 className="text-lg capitalize font-medium">{session.user.name}</h3>
          <p className="text-sm text-gray-400">{session.user.email}</p>

          <span className="flex items-center gap-2">
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

      <Suspense fallback={<TopArtistLoading />}>
        <TopArtists userId={userId} />
      </Suspense>

      <UpcomingEvents />
    </main>
  );
};

export default CalendarPage;
