import { auth } from "@/auth";
import { prisma } from "@/lib/db";

const getSpotifyAccessToken = async () => {
  const session = await auth();

  if (!session || !session.user) return null;

  const user = await prisma.user.findFirst({
    where: {
      email: session.user.email,
    },
    include: {
      accounts: true,
    },
  });

  const account = user?.accounts.filter((acc) => acc.provider == "spotify")[0];

  if (!account || !account.access_token) return null;

  const isExpired = account.expires_at && Date.now() / 1000 >= account.expires_at;

  if (isExpired) {
    console.log("Access Token Expired, fetching again...");
    const response = await fetch(`http://localhost:3000/api/refresh?email=${user.email}`);
    const data = await response.json();

    console.log("Response from route", data);

    if (!data.access_token) return null;

    return data.access_token as string;
  }

  return account.access_token;
};

export default getSpotifyAccessToken;
