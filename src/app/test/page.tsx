import { getUserId } from "@/actions/user";
import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";
import Agenda from "agenda";
import getSpotifyAccessToken from "@/utils/get-spotify-access-token";

const TestPage = async () => {
  const userId = await getUserId();

  if (!userId) redirect("http://localhost:3000/auth/login");

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

  return (
    <main className="w-full h-screen flex justify-center items-center">
      <h2>Hello World</h2>
    </main>
  );
};

export default TestPage;
