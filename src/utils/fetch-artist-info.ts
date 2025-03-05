// import { getArtistInfo } from "@/actions/seatgeek";
// import { logger } from "@/lib/winston-loggger";

// type ArtistData = {
//   id: string;
//   name: string;
// };

// export const fetchArtistInfo = async (artistNames: string[], artistData: ArtistData[]) => {
//   try {
//     for (const artistName of artistNames) {
//       const response = await getArtistInfo(artistName);

//       if (response !== null) {
//         artistData.push({ ...response });
//       }
//     }
//   } catch (error) {
//     logger.error(error);
//   }
// };
