import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollManager } from "@/components/ScrollManager";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { HomePage } from "@/pages/HomePage";
import { LeaderboardPage } from "@/pages/LeaderboardPage";

function AppRoutes() {
  const { pathname } = useLocation();

  return (
    // Remount page tree on path change so Lenis/GSAP never keep home state
    <div key={pathname} className="min-h-full w-full">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export const App = () => {
  return (
    <SmoothScroll>
      <div className="section-copy relative min-h-full w-full overflow-x-clip bg-suvakta-50 font-quicksand font-medium text-suvakta-900">
        <ScrollManager />
        <ErrorBoundary>
          <AppRoutes />
        </ErrorBoundary>
      </div>
    </SmoothScroll>
  );
};
