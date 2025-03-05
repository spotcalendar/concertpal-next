import { getArtistImage } from "@/actions/spotify";

type ArtistData = {
  id: string;
  name: string;
};

type FinalArtistData = {
  userIDs: string[];
  artistId: string;
  name: string;
  image: string;
};

export const fetchArtistImages = async (token: string, userId: string, missingArtists: ArtistData[], finalArtistData: FinalArtistData[]) => {
  try {
    for (const artist of missingArtists) {
      const response = await getArtistImage(token, artist.id);

      if (response.imageUrl) {
        finalArtistData.push({ userIDs: [userId], artistId: artist.id, name: artist.name, image: response.imageUrl });
      }
    }
  } catch (error) {
    console.log(error);
  }
};
