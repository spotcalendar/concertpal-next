// import { createEvent } from "@/actions/user";
// import { prisma } from "@/lib/db";
// import { logger } from "@/lib/winston-loggger";

// const fetchUsersInBatches = async (batchSize: number) => {
//   try {
//     let offset = 0;
//     let hasMore = true;

//     while (hasMore) {
//       const users = await prisma.user.findMany({
//         take: batchSize,
//         skip: offset,
//         orderBy: { name: "asc" },
//       });

//       if (users.length == 0) {
//         hasMore = false;
//         break;
//       }

//       const userData = users.map((user) => ({
//         id: user.id,
//         email: user.email,
//         zipcode: user.zipcode,
//       }));

//       for (const user of userData) {
//         await createEvent(user);
//       }

//       offset += batchSize;
//     }
//   } catch (error) {
//     logger.error(error);
//   }
// };

// export default fetchUsersInBatches;
