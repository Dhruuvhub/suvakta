import * as React from "react";
import { Crown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface LeaderboardRanking {
  userId: string;
  userName: string | null;
  rank: number;
  value: number;
  avatarUrl?: string | null;
}

interface LeaderboardPodiumProps extends React.HTMLAttributes<HTMLDivElement> {
  rankings: LeaderboardRanking[];
  size?: "sm" | "default" | "lg";
  showValue?: boolean;
  showAvatar?: boolean;
  medalStyle?: "classic" | "modern" | "minimal";
}

function formatValue(value: number) {
  return value.toLocaleString();
}

function initials(name: string | null) {
  if (!name) return "?";
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

const SIZE = {
  sm: {
    avatar: "h-12 w-12",
    pedestal: "h-16",
    firstPedestal: "h-24",
    name: "text-xs",
  },
  default: {
    avatar: "h-16 w-16 md:h-20 md:w-20",
    pedestal: "h-20 md:h-24",
    firstPedestal: "h-28 md:h-36",
    name: "text-sm",
  },
  lg: {
    avatar: "h-20 w-20 md:h-24 md:w-24",
    pedestal: "h-24 md:h-28",
    firstPedestal: "h-36 md:h-44",
    name: "text-base",
  },
} as const;

const MEDAL: Record<number, string> = {
  1: "bg-amber-300 text-amber-950 border-amber-500",
  2: "bg-slate-200 text-slate-800 border-slate-400",
  3: "bg-orange-200 text-orange-950 border-orange-400",
};

const LeaderboardPodium = React.forwardRef<HTMLDivElement, LeaderboardPodiumProps>(
  (
    {
      className,
      rankings,
      size = "default",
      showValue = true,
      showAvatar = true,
      medalStyle = "classic",
      ...props
    },
    ref,
  ) => {
    const sorted = [...rankings]
      .sort((a, b) => a.rank - b.rank)
      .slice(0, 3);

    const byRank = (rank: number) => sorted.find((r) => r.rank === rank);
    const first = byRank(1) ?? sorted[0];
    const second = byRank(2) ?? sorted[1];
    const third = byRank(3) ?? sorted[2];
    const order = [second, first, third].filter(Boolean) as LeaderboardRanking[];
    const tokens = SIZE[size];

    return (
      <div
        ref={ref}
        className={cn(
          "flex items-end justify-center gap-2 md:gap-4",
          className,
        )}
        {...props}
      >
        {order.map((entry) => {
          const isFirst = entry.rank === 1;
          return (
            <div
              key={entry.userId}
              className={cn(
                "flex min-w-0 flex-1 flex-col items-center gap-2",
                isFirst && "z-[1]",
              )}
            >
              <div className="relative flex flex-col items-center gap-1">
                {medalStyle !== "minimal" && isFirst ? (
                  <Crown
                    className="mb-0.5 h-5 w-5 fill-amber-400 text-amber-500"
                    aria-hidden
                  />
                ) : (
                  <span className="mb-0.5 h-5" aria-hidden />
                )}

                {showAvatar ? (
                  <div
                    className={cn(
                      "relative overflow-hidden rounded-full border-2 border-suvakta-900 bg-suvakta-100 shadow-[rgba(0,0,0,0.15)_0px_3px_0px_0px]",
                      tokens.avatar,
                    )}
                  >
                    {entry.avatarUrl ? (
                      <img
                        src={entry.avatarUrl}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center font-bold text-suvakta-700">
                        {initials(entry.userName)}
                      </div>
                    )}
                  </div>
                ) : null}

                <span
                  className={cn(
                    "inline-flex h-6 min-w-6 items-center justify-center rounded-full border px-1.5 text-xs font-bold",
                    MEDAL[entry.rank] ?? "bg-muted border-border",
                    medalStyle === "modern" && "rounded-md",
                    medalStyle === "minimal" && "border-transparent bg-transparent",
                  )}
                >
                  #{entry.rank}
                </span>
              </div>

              <div className="w-full px-1 text-center">
                <p
                  className={cn(
                    "truncate font-semibold text-foreground",
                    tokens.name,
                  )}
                >
                  {entry.userName ?? "Anonymous"}
                </p>
                {showValue ? (
                  <p className="text-muted-foreground text-xs tabular-nums md:text-sm">
                    {formatValue(entry.value)}
                  </p>
                ) : null}
              </div>

              <div
                className={cn(
                  "w-full rounded-t-xl border-x-2 border-t-2 border-suvakta-900 bg-suvakta-100",
                  isFirst ? tokens.firstPedestal : tokens.pedestal,
                  isFirst && "bg-suvakta-accent/40",
                  entry.rank === 2 && "bg-suvakta-200/80",
                  entry.rank === 3 && "bg-suvakta-300/50",
                )}
                aria-hidden
              />
            </div>
          );
        })}
      </div>
    );
  },
);

LeaderboardPodium.displayName = "LeaderboardPodium";

export { LeaderboardPodium };
export type { LeaderboardPodiumProps };
