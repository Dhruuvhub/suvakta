import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * On every route change: wipe home-page GSAP/Lenis leftovers so client
 * navigations (e.g. Home → Leaderboard) render a clean page.
 * Direct loads never hit this bug because those triggers never exist.
 */
export function ScrollManager() {
  const { pathname, hash } = useLocation();
  const lenis = useLenis();

  useLayoutEffect(() => {
    // Kill every ScrollTrigger (pins, scrubs, spacers) from the previous page
    ScrollTrigger.getAll().forEach((t) => t.kill());
    ScrollTrigger.clearScrollMemory?.();

    // Clear intro / body locks
    document.body.style.overflow = "";
    document.body.style.height = "";
    document.body.style.position = "";
    document.documentElement.style.overflow = "";
    document.documentElement.style.height = "";
    document.getElementById("page-intro-veil")?.remove();
    document.getElementById("sun-loader")?.remove();

    // Drop any orphaned fixed scroll-line wrappers left behind mid-unmount
    document.querySelectorAll("[data-scroll-lines]").forEach((el) => el.remove());

    lenis?.start();
    lenis?.resize();
    lenis?.scrollTo(0, { immediate: true });
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    const id = hash.replace(/^#/, "");
    if (id) {
      const frame = requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        ScrollTrigger.refresh();
      });
      return () => cancelAnimationFrame(frame);
    }

    requestAnimationFrame(() => ScrollTrigger.refresh());
  }, [pathname, hash, lenis]);

  return null;
}
