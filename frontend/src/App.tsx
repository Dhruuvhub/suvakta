import { Routes, Route, Navigate } from "react-router-dom";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollManager } from "@/components/ScrollManager";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { HomePage } from "@/pages/HomePage";
import { LeaderboardPage } from "@/pages/LeaderboardPage";

export const App = () => {
  return (
    <SmoothScroll>
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
