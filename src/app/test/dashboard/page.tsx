import { getUser, updateOnboardingStatus } from "@/actions/user";
import getSpotifyAccessToken from "@/utils/get-spotify-access-token";
import Agenda from "agenda";
import { Clock, MapPin } from "lucide-react";
import Image from "next/image";

const TestDashboardPage = async () => {
  const user = await getUser();

  if (!user) return;

  if (user.isOnboarded)
    return (
      <div className="w-full h-screen flex justify-center items-center gap-2">
        <h2 className="text-2xl">We have all your artist data.</h2>
      </div>
    );

  const token = await getSpotifyAccessToken();

  if (!token) return JSON.stringify({ error: "No token Found" });

  const agenda = new Agenda({
    db: {
      address: process.env.DATABASE_URL as string,
    },
  });

  await agenda.start();
  await agenda.now("get-artist-data", { userId: user.id, token });
  await agenda.close();

  return (
    <div className="w-full h-screen flex flex-col p-10 gap-10">
      <div className="header flex flex-col gap-3">
        <h2 className="text-3xl font-semibold">Your Events</h2>
        <h6 className="text-md font-light text-gray-500 tracking-tight">
          Find events from your favorite artists performing in the calendar.
        </h6>
      </div>
      <div className="content flex flex-col gap-3">
        <div className="w-fit bg-gray-100 p-2 flex justify-center items-center gap-5 rounded">
          <button className="bg-white rounded-md shadow px-2 py-1 text-gray-900 font-light text-sm">
            Upcoming
          </button>
          <button className="rounded-md px-2 py-1 text-gray-600 font-light text-sm">Recent</button>
        </div>

        <div className="w-full calendar flex flex-col gap-1">
          <div className="w-full h-fit flex items-center gap-10 border border-gray-200 rounded-xl px-6 py-4">
            <div className="w-fit flex flex-col text-green-500 font-semibold text-center">
              <h3 className="text-lg font-medium tracking-wide">Wed</h3>
              <p className="text-3xl">28</p>
            </div>

            <div className="w-[1px] h-full bg-gray-200"></div>

            <div className="w-fit flex flex-col items-start gap-2">
              <h4 className="text-gray-600 font-medium text-lg">Taylor Swift</h4>
              <Image
                className="w-6 h-6 rounded-full"
                src="https://seatgeekimages.com/performers-landscape/gracie-abrams-79de1f/786104/1500x2000.jpg?auto=webp&width=3840&quality=75"
                alt="blah"
              />
            </div>

            <div className="w-fit flex flex-col items-start gap-2 text-sm text-gray-600">
              <span className="flex justify-center items-center gap-2">
                <Clock size={18} color="white" fill="#9ca3af" />
                <p>7:00 - 9:00 p.m, 18 Feb</p>
              </span>

              <span className="flex justify-center items-center gap-2">
                <MapPin size={18} color="white" fill="#9ca3af" />
                <p>State Farm Stadium, Glendale, AZ</p>
              </span>
            </div>
          </div>

          <div className="w-full h-fit flex items-center gap-10 border border-gray-200 rounded-xl px-6 py-4">
            <div className="w-fit flex flex-col text-green-500 font-semibold text-center">
              <h3 className="text-lg font-medium tracking-wide">Thu</h3>
              <p className="text-3xl">29</p>
            </div>

            <div className="w-[1px] h-full bg-gray-200"></div>

            <div className="w-fit flex flex-col items-start gap-2 text-sm text-gray-600">
              <span className="flex justify-center items-center gap-2">
                <Clock size={18} color="white" fill="#9ca3af" />
                <p>7:00 - 9:00 p.m, 18 Feb</p>
              </span>

              <span className="flex justify-center items-center gap-2">
                <MapPin size={18} color="white" fill="#9ca3af" />
                <p>State Farm Stadium, Glendale, AZ</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestDashboardPage;
