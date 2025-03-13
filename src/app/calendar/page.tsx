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
import Image from "next/image";
import { FullLogo } from "@/assets/logo";
import { Mail, MapPin } from "lucide-react";

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

  console.log("Spotify Access Token", token);

  if (!token) redirect(`${process.env.NEXT_PUBLIC_URL}/auth/spotify`);

  const userProfile = session.user.image ? session.user.image : "public/bg3.png";

  return (
    <main className="w-full min-h-screen bg-gray-200 flex gap-10 p-6">
      <div className="w-1/4 flex flex-col items-center gap-4">
        <FullLogo />
        <div className="w-[340px] bg-white rounded-lg flex flex-col gap-4 items-center pt-4">
          <div className="flex flex-col gap-2 items-center p-5">
            <Image
              width={500}
              height={500}
              className="w-24 h-24 rounded-full"
              src={userProfile}
              alt="image"
            />
            <h3 className="font-bold text-2xl capitalize">{session?.user?.name}</h3>
            <span className="flex justify-center items-center gap-2">
              <SpotifyLogo width="20" height="20" />
              <GoogleCalendar />
            </span>
          </div>

          <div className="w-full flex flex-col bg-[#2FB59F33] rounded-b-lg py-2">
            <div className="w-full flex justify-center items-center gap-1">
              <Mail className="text-[#777980]" size={24} />
              <p className="text-[#777980] text-xl font-medium p-2 text-center">
                {session?.user?.email}
              </p>
            </div>

            <span className="px-4">
              <div className="bg-[#C7EBE4] h-[2px]"></div>
            </span>

            <div className="w-full flex justify-center items-center gap-1">
              <MapPin className="text-[#777980]" size={24} />
              <p className="text-[#777980] text-xl font-medium p-2 text-center">{data.zipcode}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-3/4 flex flex-col gap-4 p-2">
        <div className="w-full h-fit bg-white flex flex-col items-start gap-10 p-2 rounded-lg">
          <div className="flex justify-center items-center gap-4">
            <GoogleCalendar width="88" height="88" />
            <div className="flex flex-col">
              <span className="flex items-center gap-2">
                <h4 className="text-lg tracking-tight font-semibold text-gray-900">
                  Google Calendar
                </h4>
                <GreenCheck />
              </span>

              <p className="text-sm text-gray-400">
                Your top 50 artists&apos; concerts will be automatically synced to your Google
                Calendar.
              </p>
            </div>
          </div>
        </div>

        {/* <Suspense fallback={<UpcomingEventsLoading />}>
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
        </Suspense> */}
      </div>
    </main>
  );
};

export default CalendarPage;
