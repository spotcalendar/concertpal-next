import { getArtistImages, getFollowedArtists, getSavedTracks } from "@/actions/spotify";
import { prisma } from "@/lib/db";
import { FinalArtistData, SpotifyArtistData } from "@/types";
import { addArtistsForUser } from "@/utils/add-artists-for-user";
import fetchArtistsInBatches from "@/utils/fetch-artists-in-batch";
import fetchUsersInBatches from "@/utils/fetch-user-in-batch";
import Agenda, { Job } from "agenda";

type ArtistData = {
  id: string;
  name: string;
  genres: string[];
};

type GetArtistData = {
  userId: string;
  token: string;
};

const agenda = new Agenda({
  db: {
    address: process.env.DATABASE_URL as string,
  },
});

agenda.define("get-artist-data", async (job: Job<GetArtistData>) => {
  try {
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
      return { id: artist.id, name: artist.name, genres: artist.genres };
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

    await getArtistImages(token, userId, missingArtists, finalData);

    console.log("Final Artist Data", finalData);

    // await fetchArtistImages(token, userId, missingArtists, finalData);

    await addArtistsForUser(userId, finalData);

    console.log("Saved artist for the user");
  } catch (error) {
    console.log(error);
  }
});

agenda.define("get-artist-events", async (job: Job) => {
  try {
    await fetchArtistsInBatches(20);
  } catch (error) {
    console.log("Error while getting artist events", error);
  }
});

agenda.define("set-events-in-calendar", async (job: Job) => {
  try {
    console.log("Job Received");
    await fetchUsersInBatches(5);
  } catch (error) {
    console.log("Error while creating events", error);
  }
});

(async function () {
  await agenda.start();
  console.log("Agenda worker started, listening for jobs...");
  //await agenda.every("every 1 week", "get-artist-events", {});
  await agenda.now("set-events-in-calendar", {});
})();
