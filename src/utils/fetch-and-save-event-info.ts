import { getEventInfo } from "@/actions/seatgeek";
import { prisma } from "@/lib/db";

type ArtistData = {
  id: string;
  name: string;
};

export const fetchAndSaveEventsInfo = async (artistData: ArtistData[]) => {
  try {
    const artistIds = await prisma.artist.findMany({
      where: {
        name: { in: artistData.map((artist) => artist.name) },
      },
      select: {
        id: true,
        name: true,
      },
    });

    const artistIdMap = Object.fromEntries(artistIds.map((a) => [a.name, a.id]));

    for (const artist of artistData) {
      if (!artistIdMap[artist.name]) {
        console.log("Artist not found in the db", artist.name);
        continue;
      }

      const eventData = await getEventInfo(artist.id);

      if (!eventData || eventData.length == 0) {
        console.log("No events found for the artist", artist.name);
        continue;
      }

      await prisma.event.createMany({
        data: eventData.map((event) => ({
          ...event,
          artistId: artistIdMap[artist.name],
        })),
      });

      console.log("Added events for the artist in the database");
    }
  } catch (error) {
    console.log(error);
  }
};
