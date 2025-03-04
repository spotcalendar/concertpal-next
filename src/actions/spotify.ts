"use server";

import { logger } from "@/lib/winston-loggger";
import { SpotifyArtistData } from "@/types";
import { randomBytes } from "crypto";
import { redirect } from "next/navigation";

interface SpotifyActionResponse {
  status: "success" | "error";
}

interface TracksResponse extends SpotifyActionResponse {
  data?: SpotifyArtistData[];
}

interface ArtistImageResponse extends SpotifyActionResponse {
  imageUrl?: string;
}

interface MissingArtist {
  id: string;
  name: string;
  genres: string[];
}

interface FinalArtistData {
  userIDs: string[];
  artistId: string;
  name: string;
  image: string;
  genres: string[];
}

export const spotifyLogin = async () => {
  let state = randomBytes(16).toString("hex");
  let scope = "user-read-private user-read-email user-library-read user-follow-read";

  const params = new URLSearchParams({
    response_type: "code",
    client_id: process.env.SPOTIFY_CLIENT_ID!,
    scope: scope,
    redirect_uri: process.env.SPOTIFY_REDIRECT_URI!,
    state: state,
  });

  redirect(`https://accounts.spotify.com/authorize?${params.toString()}`);
};

export const getTopTracks = async (token: string): Promise<TracksResponse> => {
  try {
    const response = await fetch("https://api.spotify.com/v1/me/top/tracks?limit=30", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status !== 200)
      throw new Error(`No response from spotify api ${response.statusText}`);

    const data = await response.json();

    if (!data) throw new Error("No data fetched from spotify api");

    const artistData = data.items.map((item: any) => item.artists).flat() as SpotifyArtistData[];

    return { status: "success", data: artistData };
  } catch (error) {
    logger.error(`Error occured while fetching top tracks | ${error}`);
    return { status: "error" };
  }
};

export const getSavedTracks = async (token: string): Promise<TracksResponse> => {
  try {
    const response = await fetch(
      "https://api.spotify.com/v1/me/tracks?market=US&limit=30&offset=0",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (response.status !== 200) throw new Error("No response from spotify api");

    const data = await response.json();

    if (!data) throw new Error("No data fetched from spotify api");

    const artistData = data.items
      .map((item: any) => item.track.artists)
      .flat() as SpotifyArtistData[];

    return { status: "success", data: artistData };
  } catch (error) {
    logger.error(`Error occured while fetching saved tracks | ${error}`);
    return { status: "error" };
  }
};

export const getFollowedArtists = async (token: string): Promise<TracksResponse> => {
  try {
    const response = await fetch("https://api.spotify.com/v1/me/following?type=artist&limit=30", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status !== 200) throw new Error("No response from spotify api");

    const data = await response.json();

    if (!data) throw new Error("No data fetched from spotify api");

    const artistData = data.artists.items
      .map((item: any) => {
        return {
          external_urls: {
            spotify: item.external_urls.spotify,
          },
          href: item.href,
          id: item.id,
          name: item.name,
          type: item.type,
          uri: item.uri,
          genres: item.genres,
        } as SpotifyArtistData;
      })
      .flat() as SpotifyArtistData[];

    return { status: "success", data: artistData };
  } catch (error) {
    logger.error(`Error occured while fetching followed artists | ${error}`);
    return { status: "error" };
  }
};

export const getArtistImage = async (
  token: string,
  artistId: string,
): Promise<ArtistImageResponse> => {
  try {
    const response = await fetch(`https://api.spotify.com/v1/artists/${artistId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status !== 200) throw new Error("No response from spotify api");

    const data = await response.json();

    console.log("Data From Spotify Api", data);

    if (!data) throw new Error("No data fetched from spotify api");

    return { status: "success", imageUrl: data.images[0].url as string };
  } catch (error) {
    console.log(error);
    return { status: "error" };
  }
};

export const getArtistImages = async (
  token: string,
  userId: string,
  missingArtists: MissingArtist[],
  finalArtistData: FinalArtistData[],
) => {
  try {
    const artistIds = missingArtists.map((artist) => artist.id);

    const response = await fetch(`https://api.spotify.com/v1/artists?ids=${artistIds.join(",")}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status !== 200) throw new Error("No response from spotify api");

    const data = await response.json();

    if (!data) throw new Error("No data fetched from spotify api");

    await data.artists.forEach((artist: any) => {
      if (artist.images.length > 0) {
        const genre = missingArtists.find((item) => item.id == artist.id);

        finalArtistData.push({
          userIDs: [userId],
          artistId: artist.id as string,
          name: artist.name as string,
          image: artist.images[0].url,
          genres: genre ? genre.genres : [""],
        });
      }
    });
  } catch (error) {
    console.log(error);
    return { status: error };
  }
};
