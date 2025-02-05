import { auth } from "@/auth";
import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  const state = searchParams.get("state");

  if (!code || !state) {
    return NextResponse.json({ error: "Missing authorization code" }, { status: 400 });
  }

  try {
    const bodyParams = new URLSearchParams({
      grant_type: "authorization_code",
      code: code,
      redirect_uri: process.env.SPOTIFY_REDIRECT_URI!,
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
      return NextResponse.json({ error: "Failed to get access token" }, { status: 400 });
    }

    const session = await auth();

    if (!session?.user?.email) return;

    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    });

    if (!user) return;

    await prisma.account.upsert({
      where: {
        provider_providerAccountId: {
          provider: "spotify",
          providerAccountId: data.access_token,
        },
      },
      update: {
        access_token: data.access_token,
        refresh_token: data.refresh_token ?? null,
        expires_at: Math.floor(Date.now() / 1000) + data.expires_in,
      },
      create: {
        userId: user.id,
        provider: "spotify",
        type: "oauth",
        providerAccountId: data.access_token,
        access_token: data.access_token,
        refresh_token: data.refresh_token ?? null,
        expires_at: Math.floor(Date.now() / 1000) + data.expires_in,
      },
    });

    return NextResponse.redirect("http://localhost:3000/test/dashboard");
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
