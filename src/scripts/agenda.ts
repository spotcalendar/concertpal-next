import { getEventInfo } from "@/actions/seatgeek";
import { getFollowedArtists, getSavedTracks } from "@/actions/spotify";
import { prisma } from "@/lib/db";
import { SpotifyArtistData } from "@/types";
import { fetchAndSaveEventsInfo } from "@/utils/fetch-and-save-event-info";
import { fetchArtistImages } from "@/utils/fetch-artist-images";
import { fetchArtistInfo } from "@/utils/fetch-artist-info";
import Agenda, { Job } from "agenda";

type ArtistData = {
  id: string;
  name: string;
};

type GetArtistData = {
  userId: string;
  token: string;
};

type FinalArtistData = {
  userIDs: string[];
  artistId: string;
  name: string;
  image: string;
};

const agenda = new Agenda({
  db: {
    address: process.env.DATABASE_URL as string,
  },
});

const addArtistsForUser = async (userId: string, artistData: FinalArtistData[]) => {
  try {
    await prisma.artist.createMany({
      data: artistData.map((artist) => ({
        artistId: artist.artistId,
        name: artist.name,
        image: artist.image,
      })),
    });

    const insertedArtists = await prisma.artist.findMany({
      where: {
        artistId: {
          in: artistData.map((artist) => artist.artistId),
        },
      },
      select: {
        id: true,
        artistId: true,
      },
    });

    const artistIdMap = new Map(insertedArtists.map((a) => [a.artistId, a.id]));

    const userArtistLinks = artistData
      .map((artist) => {
        const mongoArtistId = artistIdMap.get(artist.artistId);
        if (!mongoArtistId) return null;
        return {
          userId,
          artistId: mongoArtistId,
        };
      })
      .filter(Boolean);

    const finaData = userArtistLinks.filter((data) => data !== null);

    if (finaData.length > 0) {
      await prisma.userToArtist.createMany({
        data: finaData,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

agenda.define("get-artist-data", async (job: Job<GetArtistData>) => {
  console.log("Started fetching artist info from user's spotify");

  const { userId, token } = job.attrs.data;

  let rawArtistsData: SpotifyArtistData[] = [];

  const savedTracksRes = await getSavedTracks(token);
  const followedTracksRes = await getFollowedArtists(token);

  if (savedTracksRes.data) rawArtistsData = [...savedTracksRes.data];
  if (followedTracksRes.data) rawArtistsData = [...followedTracksRes.data];

  if (rawArtistsData.length == 0) return;

  console.log("Artist found from user's spotify", rawArtistsData.length);

  const uniqueArtists = rawArtistsData.reduce<ArtistData[]>((acc, artist) => {
    if (!acc.some((a) => a.id === artist.id)) {
      acc.push(artist);
    }
    return acc;
  }, []);

  const artistData = uniqueArtists.map((artist) => {
    return { id: artist.id, name: artist.name };
  });

  if (artistData.length == 0) return;

  const artistIds = artistData.map((data) => data.id);

  const existingArtistIds = await prisma.artist.findMany({
    where: {
      artistId: {
        in: artistIds,
      },
    },
    select: {
      artistId: true,
    },
  });

  const existingIds = new Set(existingArtistIds.map((artist) => artist.artistId));

  const missingArtists = artistData.filter((data) => !existingIds.has(data.id));

  if (missingArtists.length == 0) return;

  let finalData: FinalArtistData[] = [];

  await fetchArtistImages(token, userId, missingArtists, finalData);

  await addArtistsForUser(userId, finalData);

  console.log("Saved artist for the user");
});

agenda.define("get-artist-events", async (job: Job) => {
  console.log("Started Job");
  const existingArtists = await prisma.artist.findMany({});

  const artistNames = existingArtists.map((artist) => artist.name);

  let artistData: ArtistData[] = [];

  console.log("started fetching artist data");

  await fetchArtistInfo(artistNames, artistData);

  if (artistData.length == 0) return;

  console.log("got artist events", artistData.length);

  await fetchAndSaveEventsInfo(artistData);

  console.log("Completed Job");
});

(async function () {
  await agenda.start();
  console.log("Agenda worker started, listening for jobs...");
  await agenda.now("get-artist-events", {});
})();


