import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const email = searchParams.get("email");

    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
      include: {
        accounts: true,
      },
    });

    const account = user?.accounts.filter((acc) => acc.provider == "spotify")[0];

    if (!account || !account.refresh_token) {
      return NextResponse.json({ error: "No refresh token found" }, { status: 400 });
    }

    const bodyParams = new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: account.refresh_token,
    });

    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString("base64")}`,
      },
      body: bodyParams.toString(),
    });

    const data = await response.json();

    if (!data.access_token) {
      return NextResponse.json({ error: "Failed to refresh token" }, { status: 400 });
    }

    // Update the database with the new tokens
    await prisma.account.update({
      where: {
        userId: user.id,
        provider_providerAccountId: {
          providerAccountId: account.providerAccountId,
          provider: "spotify",
        },
      },
      data: {
        access_token: data.access_token,
        refresh_token: data.refresh_token ?? account.refresh_token, // Keep the old one if not returned
        expires_at: Math.floor(Date.now() / 1000) + data.expires_in,
      },
    });

    return NextResponse.json({ access_token: data.access_token });
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}