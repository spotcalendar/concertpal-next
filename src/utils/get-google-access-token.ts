import { getUser } from "@/actions/user";
import { auth } from "@/auth";
import { prisma } from "@/lib/db";

export const getGoogleAccessToken = async () => {
  try {
    const session = await auth();

    if (!session || !session.refreshToken || !session.user) return null;

    const user = await getUser();

    if (!user) return null;

    const account = await prisma.account.findFirst({
      where: {
        userId: user.id,
        provider: "google",
      },
      select: {
        id: true,
      },
    });

    if (!account) return;

    const isExpired = session.expiresAt && Date.now() / 1000 >= session.expiresAt;

    if (isExpired) {
      console.log("Fetching a new refresh token");

      const response = await fetch("https://oauth2.googleapis.com/token", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          client_id: process.env.AUTH_GOOGLE_ID!,
          client_secret: process.env.AUTH_GOOGLE_SECRET!,
          refresh_token: session.refreshToken,
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
          expires_at: refreshedTokens.expires_in.Date.now() + refreshedTokens.expires_in * 1000,
        },
      });

      return refreshedTokens.access_token as string;
    }

    return session.accessToken;
  } catch (error) {
    console.log(error);
  }
};
