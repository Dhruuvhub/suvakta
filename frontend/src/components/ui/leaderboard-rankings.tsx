import * as React from "react";
import { ChevronLeft, ChevronRight, Crown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export interface LeaderboardRankingItem {
  userId: string;
  userName: string | null;
  rank: number;
  value: number;
  byline?: string | null;
  avatarUrl?: string | null;
  rankChange?: number;
  displayed?: boolean;
}

interface LeaderboardRankingsProps extends React.HTMLAttributes<HTMLDivElement> {
  rankings: LeaderboardRankingItem[];
  onUserClick?: (ranking: LeaderboardRankingItem) => void;
  currentUserId?: string;
  showPagination?: boolean;
  defaultPageSize?: 10 | 25 | 50 | 100;
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

const PAGE_SIZES = [10, 25, 50, 100] as const;

const LeaderboardRankings = React.forwardRef<
  HTMLDivElement,
  LeaderboardRankingsProps
>(
  (
    {
      className,
      rankings,
      onUserClick,
      currentUserId,
      showPagination = false,
      defaultPageSize = 10,
      ...props
    },
    ref,
  ) => {
    const visible = rankings.filter((r) => r.displayed !== false);
    const [pageSize, setPageSize] = React.useState(defaultPageSize);
    const [page, setPage] = React.useState(0);

    React.useEffect(() => {
      setPage(0);
    }, [pageSize, rankings]);

    const totalPages = Math.max(1, Math.ceil(visible.length / pageSize));
    const safePage = Math.min(page, totalPages - 1);
    const pageRows = showPagination
      ? visible.slice(safePage * pageSize, safePage * pageSize + pageSize)
      : visible;

    return (
      <div ref={ref} className={cn("space-y-3", className)} {...props}>
        <ul className="m-0 flex list-none flex-col gap-2 p-0">
          {pageRows.map((row) => {
            const isCurrent = currentUserId === row.userId;
            const isTop3 = row.rank <= 3;
            const clickable = Boolean(onUserClick);

            return (
              <li key={row.userId}>
                <button
                  type="button"
                  disabled={!clickable}
                  onClick={() => onUserClick?.(row)}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-xl border bg-background px-3 py-2.5 text-left transition-colors",
                    isCurrent
                      ? "border-suvakta-900 bg-suvakta-100 shadow-[rgba(0,0,0,0.12)_0px_3px_0px_0px]"
                      : "border-border hover:bg-muted/60",
                    !clickable && "cursor-default",
                  )}
                >
                  <span
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold tabular-nums",
                      isTop3
                        ? "bg-suvakta-accent text-suvakta-900"
                        : "bg-muted text-muted-foreground",
                    )}
                  >
                    {isTop3 ? (
                      <Crown className="h-3.5 w-3.5" aria-hidden />
                    ) : (
                      row.rank
                    )}
                  </span>

                  <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-border bg-muted">
                    {row.avatarUrl ? (
                      <img
                        src={row.avatarUrl}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-xs font-semibold text-muted-foreground">
                        {initials(row.userName)}
                      </div>
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-foreground">
                      {row.userName ?? "Anonymous"}
                      {isCurrent ? (
                        <span className="text-muted-foreground ml-1.5 font-medium">
                          (you)
                        </span>
                      ) : null}
                    </p>
                    {row.byline ? (
                      <p className="text-muted-foreground truncate text-xs">
                        {row.byline}
                      </p>
                    ) : null}
                  </div>

                  <div className="shrink-0 text-right">
                    <p className="text-sm font-semibold tabular-nums text-foreground">
                      {formatValue(row.value)}
                    </p>
                    {typeof row.rankChange === "number" && row.rankChange !== 0 ? (
                      <p
                        className={cn(
                          "text-xs font-medium tabular-nums",
                          row.rankChange > 0
                            ? "text-emerald-600"
                            : "text-rose-600",
                        )}
                      >
                        {row.rankChange > 0 ? "+" : ""}
                        {row.rankChange}
                      </p>
                    ) : null}
                  </div>
                </button>
              </li>
            );
          })}
        </ul>

        {showPagination && visible.length > 0 ? (
          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            <label className="text-muted-foreground flex items-center gap-2 text-sm">
              Rows
              <select
                value={pageSize}
                onChange={(e) =>
                  setPageSize(Number(e.target.value) as typeof pageSize)
                }
                className="bg-background text-foreground rounded-md border px-2 py-1 text-sm"
              >
                {PAGE_SIZES.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </label>

            <div className="flex items-center gap-2">
              <Button
                type="button"
                variant="outline"
                size="icon"
                disabled={safePage <= 0}
                onClick={() => setPage((p) => Math.max(0, p - 1))}
                aria-label="Previous page"
              >
                <ChevronLeft />
              </Button>
              <span className="text-muted-foreground min-w-[4.5rem] text-center text-sm tabular-nums">
                {safePage + 1} / {totalPages}
              </span>
              <Button
                type="button"
                variant="outline"
                size="icon"
                disabled={safePage >= totalPages - 1}
                onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                aria-label="Next page"
              >
                <ChevronRight />
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    );
  },
);

LeaderboardRankings.displayName = "LeaderboardRankings";

export { LeaderboardRankings };
export type { LeaderboardRankingsProps };
