// import { getArtistImages, getFollowedArtists, getSavedTracks } from "@/actions/spotify";
// import { prisma } from "@/lib/db";
// import { logger } from "@/lib/winston-loggger";
// import { FinalArtistData, SpotifyArtistData } from "@/types";
// import { addArtistsForUser } from "@/utils/add-artists-for-user";
// import fetchArtistsInBatches from "@/utils/fetch-artists-in-batch";
// import fetchUsersInBatches from "@/utils/fetch-user-in-batch";
// import Agenda, { Job } from "agenda";

// type ArtistData = {
//   id: string;
//   name: string;
//   genres: string[];
// };

// type GetArtistData = {
//   userId: string;
//   token: string;
// };

// const agenda = new Agenda({
//   db: {
//     address: process.env.DATABASE_URL as string,
//   },
// });

// agenda.define("get-artist-data", async (job: Job<GetArtistData>) => {
//   try {
//     const { userId, token } = job.attrs.data;

//     logger.info(`Fetching Artist Data for the User Id - ${userId}`);

//     let rawArtistsData: SpotifyArtistData[] = [];

//     const savedTracksRes = await getSavedTracks(token);
//     const followedTracksRes = await getFollowedArtists(token);

//     if (savedTracksRes.data) rawArtistsData = [...savedTracksRes.data];
//     if (followedTracksRes.data) rawArtistsData = [...followedTracksRes.data];

//     if (rawArtistsData.length == 0) {
//       logger.warn(`No Artist Data found |  User Id - ${userId}`);
//       return;
//     }

//     const uniqueArtists = rawArtistsData.reduce<ArtistData[]>((acc, artist) => {
//       if (!acc.some((a) => a.id === artist.id)) {
//         acc.push(artist);
//       }
//       return acc;
//     }, []);

//     const artistData = uniqueArtists.map((artist) => {
//       return { id: artist.id, name: artist.name, genres: artist.genres };
//     });

//     if (artistData.length == 0) {
//       logger.warn(`No Artist Data found |  User Id - ${userId}`);
//       return;
//     }

//     const artistIds = artistData.map((data) => data.id);

//     const existingArtistIds = await prisma.artist.findMany({
//       where: {
//         artistId: {
//           in: artistIds,
//         },
//       },
//       select: {
//         artistId: true,
//       },
//     });

//     const existingIds = new Set(existingArtistIds.map((artist) => artist.artistId));

//     const missingArtists = artistData.filter((data) => !existingIds.has(data.id));

//     if (missingArtists.length == 0) {
//       logger.warn(`No new artist found | User Id - ${userId}`);
//       return;
//     }

//     let finalData: FinalArtistData[] = [];

//     await getArtistImages(token, userId, missingArtists, finalData);

//     logger.info(
//       `Final Data for the Artist | User Id - ${userId} | Data Length - ${finalData.length}`,
//     );

//     await addArtistsForUser(userId, finalData);

//     logger.info(`Saved Artist Data for the User | User Id = ${userId}`);
//   } catch (error) {
//     console.log(error);
//   }
// });

// agenda.define("get-artist-events", async (job: Job) => {
//   try {
//     logger.info("Job Scheduled | Fetching events for the artists");
//     await fetchArtistsInBatches(20);
//   } catch (error) {
//     logger.error("Error occurred while fetching artist events");
//   }
// });

// agenda.define("set-events-in-calendar", async (job: Job) => {
//   try {
//     logger.info("Job Scheduled | Adding events data to the calendar");
//     await fetchUsersInBatches(5);
//   } catch (error) {
//     console.log("Error while creating events", error);
//   }
// });

// (async function () {
//   await agenda.start();
//   logger.info("Service Worker Started!");
//   // await agenda.now("get-artist-events", {});
//   // await agenda.now("set-events-in-calendar", {});
//   // await agenda.every("every 1 week", "get-artist-events", {});
//   // await agenda.schedule("every 1 week", "set-events-in-calendar", {});
// })();

//"dev": "concurrently \"next dev\" \"bun run src/scripts/agenda.ts\" --names \"next,worker\" --prefix-colors \"blue,yellow\" --kill-others",
