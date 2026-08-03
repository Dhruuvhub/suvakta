import { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useLenis } from "lenis/react";
import {
  isPageTransitionRunning,
  runPageTransition,
} from "@/lib/pageTransition";

/** Navigate with Accordion-style iris transition for home ↔ leaderboard */
export function useTransitionNavigate() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const lenis = useLenis();

  return useCallback(
    (to: string) => {
      if (isPageTransitionRunning()) return;

      const isCross =
        (pathname === "/" && to === "/leaderboard") ||
        (pathname === "/leaderboard" && to === "/");

      if (!isCross) {
        navigate(to);
        return;
      }

      void runPageTransition({
        navigate,
        to,
        direction: to === "/leaderboard" ? "to-leaderboard" : "to-home",
        lenis,
      });
    },
    [navigate, pathname, lenis],
  );
}
