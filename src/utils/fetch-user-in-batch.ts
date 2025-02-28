import { createEvent } from "@/actions/user";
import { prisma } from "@/lib/db";

const fetchUsersInBatches = async (batchSize: number) => {
  try {
    let offset = 0;
    let hasMore = true;

    while (hasMore) {
      const users = await prisma.user.findMany({
        take: batchSize,
        skip: offset,
        orderBy: { name: "asc" },
      });

      if (users.length == 0) {
        hasMore = false;
        break;
      }

      const userData = users.map((user) => ({ id: user.id, email: user.email }));

      console.log("User data", userData);

      for (const user of userData) {
        await createEvent(user);
      }

      offset += batchSize;
    }
  } catch (error) {
    console.log("Error while fetching users from db", error);
  }
};

export default fetchUsersInBatches;
