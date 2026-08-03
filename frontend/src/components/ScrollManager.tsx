import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLenis } from "lenis/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

/**
 * On every route change:
 * - clear intro overlays / body locks
 * - kill home ScrollTriggers so they can't pin stale DOM
 * - reset Lenis + window scroll (fixes blank leaderboard after SPA nav)
 */
export function ScrollManager() {
  const { pathname, hash } = useLocation();
  const lenis = useLenis();

  useLayoutEffect(() => {
    document.body.style.overflow = "";
    document.getElementById("page-intro-veil")?.remove();
    document.getElementById("sun-loader")?.remove();

    // Drop triggers from the page we just left (home strips / scrub timelines)
    ScrollTrigger.getAll().forEach((t) => t.kill());

    const id = hash.replace(/^#/, "");

    const goTop = () => {
      lenis?.resize();
      lenis?.scrollTo(0, { immediate: true });
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      ScrollTrigger.refresh();
    };

    if (id && pathname === "/") {
      // Hash links on home — wait a frame for the section to exist
      goTop();
      const frame = requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) {
          if (lenis) {
            lenis.scrollTo(el, { immediate: false, offset: -80 });
          } else {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
      });
      return () => cancelAnimationFrame(frame);
    }

    goTop();
    // Second pass after layout so Lenis picks up the new page height
    const frame = requestAnimationFrame(() => {
      lenis?.resize();
      lenis?.scrollTo(0, { immediate: true });
      ScrollTrigger.refresh();
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash, lenis]);

  return null;
}
