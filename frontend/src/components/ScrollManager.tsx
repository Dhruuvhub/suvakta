import { useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useLenis } from "lenis/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

/**
 * On route changes:
 * - when leaving home, clear intro overlays + kill home ScrollTriggers
 * - always reset Lenis/window scroll for the new page
 * Never touch the sun/veil on a fresh home load — PageIntro owns those.
 */
export function ScrollManager() {
  const { pathname, hash } = useLocation();
  const lenis = useLenis();
  const prevPathRef = useRef(pathname);

  useLayoutEffect(() => {
    const prevPath = prevPathRef.current;
    const leftHome = prevPath === "/" && pathname !== "/";
    prevPathRef.current = pathname;

    // Only strip intro DOM when navigating away from home (SPA).
    // On reload of `/`, PageIntro must keep the sun/veil to animate.
    if (leftHome) {
      document.body.style.overflow = "";
      document.getElementById("page-intro-veil")?.remove();
      document.getElementById("sun-loader")?.remove();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    }

    // Non-home routes: ensure no leftover body lock / intro nodes
    if (pathname !== "/") {
      document.body.style.overflow = "";
      document.getElementById("page-intro-veil")?.remove();
      document.getElementById("sun-loader")?.remove();
    }

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

    // Don't yank scroll on first home paint — intro handles that
    if (pathname === "/" && prevPath === "/") {
      return;
    }

    goTop();
    const frame = requestAnimationFrame(() => {
      lenis?.resize();
      lenis?.scrollTo(0, { immediate: true });
      ScrollTrigger.refresh();
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash, lenis]);

  return null;
}
