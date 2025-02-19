import { prisma } from "@/lib/db";
import { FinalArtistData } from "@/types";

export const addArtistsForUser = async (userId: string, artistData: FinalArtistData[]) => {
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