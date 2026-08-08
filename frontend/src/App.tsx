import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollManager } from "@/components/ScrollManager";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { AuthProvider } from "@/context/AuthContext";
import { TransitionProvider } from "@/context/TransitionContext";
import { HomePage } from "@/pages/HomePage";
import { LoginPage } from "@/pages/LoginPage";
import { LeaderboardPage } from "@/pages/LeaderboardPage";

function AppRoutes() {
  return (
    <div className="min-h-full w-full">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/leaderboard"
          element={
            <ProtectedRoute>
              <LeaderboardPage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export const App = () => {
  return (
    <AuthProvider>
      <TransitionProvider>
        <SmoothScroll>
          <div className="section-copy relative min-h-full w-full overflow-x-clip bg-suvakta-50 font-quicksand font-medium text-suvakta-900">
            <ScrollManager />
            <ErrorBoundary>
              <AppRoutes />
            </ErrorBoundary>
          </div>
        </SmoothScroll>
      </TransitionProvider>
    </AuthProvider>
  );
};
