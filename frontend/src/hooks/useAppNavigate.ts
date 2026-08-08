import { useNavigate } from "react-router-dom";
import { useLenis } from "lenis/react";
import {
  LEADERBOARD_PATH,
  LOGIN_PATH,
  hasStoredUser,
} from "@/context/AuthContext";
import { usePageTransition } from "@/context/TransitionContext";

function isHashOnlyHomeLink(to: string) {
  return to.startsWith("/#") || (to.startsWith("#") && !to.startsWith("/"));
}

/** Navigate with auth middleware — protected routes redirect to login first. */
export function useAppNavigate() {
  const navigate = useNavigate();
  const lenis = useLenis();
  const { startTransition } = usePageTransition();

  return (to: string, from?: string) => {
    if (isHashOnlyHomeLink(to) || !to.startsWith("/")) return;

    startTransition(() => {
      document.body.style.overflow = "";
      lenis?.stop();
      lenis?.scrollTo(0, { immediate: true });
      window.scrollTo(0, 0);

      // Check auth at execution time (the transition delays this callback,
      // so context values captured at render time could be stale).
      if (to === LEADERBOARD_PATH && !hasStoredUser()) {
        navigate(LOGIN_PATH, {
          state: { from: from ?? LEADERBOARD_PATH },
        });
      } else if (to === LOGIN_PATH) {
        navigate(LOGIN_PATH, {
          state: { from: from ?? LEADERBOARD_PATH },
        });
      } else {
        navigate(to);
      }

      requestAnimationFrame(() => {
        lenis?.resize();
        lenis?.scrollTo(0, { immediate: true });
        lenis?.start();
      });
    });
  };
}
