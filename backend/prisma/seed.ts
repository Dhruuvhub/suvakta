import "dotenv/config";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../generated/prisma/client";

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL ?? "file:./prisma/dev.db",
});
const prisma = new PrismaClient({ adapter });

const USERS = [
  {
    email: "ava@suvakta.app",
    name: "Ava Elizabeth Turner",
    avatarUrl: "https://i.pravatar.cc/96?img=32",
    rank: 1,
    value: 289400,
    byline: "Level 42 – Diamond",
  },
  {
    email: "leo@suvakta.app",
    name: "Leo Harrison",
    avatarUrl: "https://i.pravatar.cc/96?img=12",
    rank: 2,
    value: 251800,
    byline: "Level 39 – Platinum",
  },
  {
    email: "rowan@suvakta.app",
    name: "Rowan Elijah",
    avatarUrl: "https://i.pravatar.cc/96?img=15",
    rank: 3,
    value: 238300,
    byline: "Level 35 – Gold",
  },
  {
    email: "maya@suvakta.app",
    name: "Maya Chen",
    avatarUrl: "https://i.pravatar.cc/96?img=47",
    rank: 4,
    value: 198700,
    byline: "Level 31 – Silver",
  },
  {
    email: "you@suvakta.app",
    name: "You",
    avatarUrl: "https://i.pravatar.cc/96?img=68",
    rank: 5,
    value: 156200,
    byline: "Level 28 – Bronze",
  },
  {
    email: "noah@suvakta.app",
    name: "Noah Patel",
    avatarUrl: "https://i.pravatar.cc/96?img=11",
    rank: 6,
    value: 142100,
    byline: "Level 26 – Bronze",
  },
  {
    email: "sofia@suvakta.app",
    name: "Sofia Reyes",
    avatarUrl: "https://i.pravatar.cc/96?img=25",
    rank: 7,
    value: 128900,
    byline: "Level 24 – Bronze",
  },
  {
    email: "ethan@suvakta.app",
    name: "Ethan Brooks",
    avatarUrl: "https://i.pravatar.cc/96?img=14",
    rank: 8,
    value: 115400,
    byline: "Level 22 – Bronze",
  },
] as const;

async function main() {
  // Clear existing demo data (order matters for FKs)
  await prisma.leaderboardRanking.deleteMany();
  await prisma.leaderboardRun.deleteMany();
  await prisma.user.deleteMany();

  const run = await prisma.leaderboardRun.create({
    data: {
      label: "Week of May 1",
      fromDate: new Date("2026-05-01"),
      toDate: new Date("2026-05-07"),
    },
  });

  for (const entry of USERS) {
    const user = await prisma.user.create({
      data: {
        email: entry.email,
        name: entry.name,
        avatarUrl: entry.avatarUrl,
      },
    });

    await prisma.leaderboardRanking.create({
      data: {
        runId: run.id,
        userId: user.id,
        rank: entry.rank,
        value: entry.value,
        byline: entry.byline,
        displayed: true,
      },
    });
  }

  console.log(`Seeded ${USERS.length} users + 1 leaderboard run.`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
