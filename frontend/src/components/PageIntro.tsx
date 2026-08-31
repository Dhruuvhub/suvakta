import { useState, useLayoutEffect } from "react";
import { useLenis } from "lenis/react";
import { hasPageIntroPlayed, usePageIntro } from "@/hooks/usePageIntro";
import { SunLoader } from "@/components/SunLoader";

/** Mounts the page-load intro veil + centered sun loader. */
export function PageIntro() {
  const lenis = useLenis();
  // Skip the veil on remounts (e.g. back from leaderboard) — the complete
  // event can fire in a layout effect before a useEffect listener attaches.
  const [isComplete, setIsComplete] = useState(() => {
    if (typeof window === "undefined") return false;
    if (hasPageIntroPlayed()) return true;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useLayoutEffect(() => {
    const onComplete = () => setIsComplete(true);
    window.addEventListener("page-intro-complete", onComplete);

    // Cover the race if the skip path already fired before this subscribed.
    if (hasPageIntroPlayed()) setIsComplete(true);

    return () => window.removeEventListener("page-intro-complete", onComplete);
  }, []);

  usePageIntro(lenis);

  if (isComplete) return null;

  return (
    <>
      <div
        id="page-intro-veil"
        className="pointer-events-auto fixed inset-0 z-[900] bg-suvakta-50"
        aria-hidden="true"
      />
      <SunLoader />
    </>
  );
}
