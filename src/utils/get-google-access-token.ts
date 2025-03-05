import { getUser } from "@/actions/user";
import { auth } from "@/auth";
import { prisma } from "@/lib/db";

export const getGoogleAccessToken = async (id: string) => {
  try {
    const account = await prisma.account.findFirst({
      where: {
        userId: id,
        provider: "google",
      },
      select: {
        id: true,
        expires_at: true,
        refresh_token: true,
        access_token: true,
      },
    });

    if (!account || !account.refresh_token) return;

    const isExpired = account.expires_at && Date.now() / 1000 >= account.expires_at;

    if (isExpired) {
      console.log("Fetching a new refresh token");

      const response = await fetch("https://oauth2.googleapis.com/token", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          client_id: process.env.AUTH_GOOGLE_ID!,
          client_secret: process.env.AUTH_GOOGLE_SECRET!,
          refresh_token: account.refresh_token,
          grant_type: "refresh_token",
        }),
      });

      const refreshedTokens = await response.json();

      if (!response.ok) throw refreshedTokens;

      console.log(refreshedTokens);

      await prisma.account.update({
        where: {
          id: account.id,
        },
        data: {
          access_token: refreshedTokens.access_token,
          expires_at: Date.now() + refreshedTokens.expires_in * 1000,
        },
      });

      return refreshedTokens.access_token as string;
    }

    return account.access_token;
  } catch (error) {
    console.log(error);
  }
};
