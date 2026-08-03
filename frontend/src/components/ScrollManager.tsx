import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Route transitions: reset scroll/locks. Destructive cleanup (kill triggers /
 * remove fixed rainbow strips) only runs when LEAVING home — never on `/`,
 * or the home strips get deleted right after React mounts them.
 */
export function ScrollManager() {
  const { pathname, hash } = useLocation();
  const lenis = useLenis();

  useLayoutEffect(() => {
    const onHome = pathname === "/";

    if (!onHome) {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      ScrollTrigger.clearScrollMemory?.();
      document
        .querySelectorAll("[data-scroll-lines]")
        .forEach((el) => el.remove());
    }

    // Clear intro / body locks on every route
    document.body.style.overflow = "";
    document.body.style.height = "";
    document.body.style.position = "";
    document.documentElement.style.overflow = "";
    document.documentElement.style.height = "";
    document.getElementById("page-intro-veil")?.remove();
    document.getElementById("sun-loader")?.remove();

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
