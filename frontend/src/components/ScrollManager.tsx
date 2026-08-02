import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Scroll to hash targets or top on route changes (works with Lenis). */
export function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const id = hash.replace(/^#/, "");

    if (id) {
      const frame = requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
      return () => cancelAnimationFrame(frame);
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
}
