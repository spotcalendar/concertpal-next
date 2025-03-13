"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/db";

const getSpotifyAccessToken = async () => {
  try {
    const session = await auth();

    if (!session || !session.user) return null;

    console.log("User session", session);

    const user = await prisma.user.findFirst({
      where: {
        email: session.user.email,
      },
      include: {
        accounts: true,
      },
    });

    console.log("User data", user);

    const account = user?.accounts.filter((acc) => acc.provider == "spotify")[0];

    console.log("User account", account);

    if (!account || !account.access_token) return null;

    const isExpired = account.expires_at && Date.now() / 1000 >= account.expires_at;

    console.log("Access Token Expired", isExpired);

    console.log("next public url", process.env.NEXT_PUBLIC_URL);

    if (isExpired) {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/refresh?email=${user.email}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      console.log("Response from route", response);

      const data = await response.json();

      console.log("Response from route", data);

      if (!data.access_token) return null;

      return data.access_token as string;
    }

    return account.access_token;
  } catch (error) {
    console.log("Error", error);
    return null;
  }
};

export default getSpotifyAccessToken;
