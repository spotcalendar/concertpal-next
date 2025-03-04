import { prisma } from "@/lib/db";
import { fetchArtistInfo } from "./fetch-artist-info";
import { fetchAndSaveEventsInfo } from "./fetch-and-save-event-info";

type ArtistData = {
  id: string;
  name: string;
  genres: string[];
};

const fetchArtistsInBatches = async (batchSize: number) => {
  let offset = 0;
  let hasMore = true;

  while (hasMore) {
    console.log(`Fetching artists from offset: ${offset}`);

    const artists = await prisma.artist.findMany({
      take: batchSize, // Fetch 20-30 artists at a time
      skip: offset,
      orderBy: { name: "asc" }, // Ensure stable pagination
    });

    if (artists.length === 0) {
      hasMore = false;
      break;
    }

    const artistNames = artists.map((artist) => artist.name);
    let artistData: ArtistData[] = [];

    console.log("Fetching artist data...");
    await fetchArtistInfo(artistNames, artistData);

    if (artistData.length > 0) {
      console.log("Saving event info...");
      await fetchAndSaveEventsInfo(artistData);
    }

    offset += batchSize;
  }
};

export default fetchArtistsInBatches;
