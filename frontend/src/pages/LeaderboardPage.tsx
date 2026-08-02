import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/sections/Navbar";
import { LeaderboardCard } from "@/components/ui/leaderboard-card";

const PODIUM = [
  {
    userId: "u-1",
    userName: "Ava Elizabeth Turner",
    rank: 1,
    value: 289400,
    avatarUrl: "https://i.pravatar.cc/96?img=32",
  },
  {
    userId: "u-2",
    userName: "Leo Harrison",
    rank: 2,
    value: 251800,
    avatarUrl: "https://i.pravatar.cc/96?img=12",
  },
  {
    userId: "u-3",
    userName: "Rowan Elijah",
    rank: 3,
    value: 238300,
    avatarUrl: "https://i.pravatar.cc/96?img=15",
  },
] as const;

const RANKINGS = [
  {
    userId: "u-1",
    rank: 1,
    userName: "Ava Elizabeth Turner",
    byline: "Level 42 – Diamond",
    value: 289400,
    avatarUrl: "https://i.pravatar.cc/96?img=32",
    displayed: true,
  },
  {
    userId: "u-2",
    rank: 2,
    userName: "Leo Harrison",
    byline: "Level 39 – Platinum",
    value: 251800,
    avatarUrl: "https://i.pravatar.cc/96?img=12",
    displayed: true,
  },
  {
    userId: "u-3",
    rank: 3,
    userName: "Rowan Elijah",
    byline: "Level 35 – Gold",
    value: 238300,
    avatarUrl: "https://i.pravatar.cc/96?img=15",
    displayed: true,
  },
  {
    userId: "u-4",
    rank: 4,
    userName: "Maya Chen",
    byline: "Level 31 – Silver",
    value: 198700,
    avatarUrl: "https://i.pravatar.cc/96?img=47",
    displayed: true,
  },
  {
    userId: "u-5",
    rank: 5,
    userName: "You",
    byline: "Level 28 – Bronze",
    value: 156200,
    avatarUrl: "https://i.pravatar.cc/96?img=68",
    displayed: true,
  },
  {
    userId: "u-6",
    rank: 6,
    userName: "Noah Patel",
    byline: "Level 26 – Bronze",
    value: 142100,
    avatarUrl: "https://i.pravatar.cc/96?img=11",
    displayed: true,
  },
  {
    userId: "u-7",
    rank: 7,
    userName: "Sofia Reyes",
    byline: "Level 24 – Bronze",
    value: 128900,
    avatarUrl: "https://i.pravatar.cc/96?img=25",
    displayed: true,
  },
  {
    userId: "u-8",
    rank: 8,
    userName: "Ethan Brooks",
    byline: "Level 22 – Bronze",
    value: 115400,
    avatarUrl: "https://i.pravatar.cc/96?img=14",
    displayed: true,
  },
] as const;

export const LeaderboardPage = () => {
  return (
    <div className="section-copy relative min-h-screen w-full overflow-x-clip bg-suvakta-50 font-quicksand font-medium text-suvakta-900">
      <Navbar />
      <main className="section-container px-4 pb-16 pt-[calc(71px+1.5rem)] md:pt-[calc(66px+2rem)]">
        <div className="mb-6 flex flex-col gap-4 md:mb-8">
          <Link
            to="/"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-suvakta-900 bg-white px-4 py-2 text-sm font-bold shadow-[rgba(0,0,0,0.15)_0px_3px_0px_0px] transition hover:translate-y-px hover:shadow-none"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Back home
          </Link>
          <div>
            <h1 className="font-sugar_peachy text-[clamp(2rem,8vw,3.25rem)] leading-[1.05]">
              <span className="inline-block rotate-[-2deg] rounded-md border-2 border-suvakta-900 bg-suvakta-600 px-4 py-2 text-white shadow-[rgba(0,0,0,0.2)_0px_4px_0px_0px]">
                Leaderboard
              </span>
            </h1>
            <p className="mt-4 max-w-xl text-suvakta-800">
              See who&apos;s leading the pack this season — speak up, score points,
              climb the ranks.
            </p>
          </div>
        </div>

        <LeaderboardCard
          title="Weekly Leaderboard"
          fromDate="2026-05-01"
          toDate="2026-05-07"
          currentUserId="u-5"
          className="border-2 border-suvakta-900 bg-white shadow-[rgba(0,0,0,0.15)_0px_8px_0px_0px]"
          runOptions={[
            { id: "week-1", label: "Week of May 1" },
            { id: "week-2", label: "Week of May 8" },
          ]}
          podiumRankings={[...PODIUM]}
          rankings={[...RANKINGS]}
        />
      </main>
    </div>
  );
};
