import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollManager } from "@/components/ScrollManager";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { HomePage } from "@/pages/HomePage";
import { LeaderboardPage } from "@/pages/LeaderboardPage";

export const App = () => {
  const { pathname } = useLocation();

  return (
    // Remount Lenis per route so home scroll state never leaks into /leaderboard
    <SmoothScroll key={pathname}>
      <div className="section-copy relative min-h-full w-full overflow-x-clip bg-suvakta-50 font-quicksand font-medium text-suvakta-900">
        <ScrollManager />
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/leaderboard" element={<LeaderboardPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </ErrorBoundary>
      </div>
    </SmoothScroll>
  );
};
