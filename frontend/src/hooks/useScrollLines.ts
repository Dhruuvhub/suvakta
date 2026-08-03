import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function setPathLengths(paths: SVGPathElement[], offset: "full" | "zero") {
  paths.forEach((path) => {
    const length = path.getTotalLength();
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = offset === "full" ? `${length}` : "0";
  });
}

function pairBand(
  outline: SVGPathElement | undefined,
  color: SVGPathElement | undefined,
) {
  return [outline, color].filter(Boolean) as SVGPathElement[];
}

/** Hero mid strips stop at the About blue card top edge */
function clipHeroRainbowToBlueBorder() {
  const wrap = document.getElementById("hero-rainbow-wrap");
  const card = document.getElementById("about-blue-card");
  if (!wrap || !card) return;

  const wrapTop = wrap.getBoundingClientRect().top + window.scrollY;
  const cardTop = card.getBoundingClientRect().top + window.scrollY;
  wrap.style.height = `${Math.max(0, cardTop - wrapTop)}px`;
  wrap.style.overflow = "hidden";
}

/**
 * Corners undraw ↔ hero mid strips draw (synced, from the right).
 * Waits for page intro so load animation can own the first side-strip draw.
 */
export function useScrollLines() {
  useLayoutEffect(() => {
    const range =
      document.getElementById("scroll-lines-range") ??
      document.querySelector("main");
    if (!range) return;

    let cleaned = false;
    let resizeHandler: (() => void) | null = null;
    let ctx: gsap.Context | null = null;

    const setup = () => {
      if (cleaned) return;

      const rightBands = gsap.utils.toArray<SVGPathElement>(
        ".rainbow-sides--right .rainbow-band--color",
      );
      const leftBands = gsap.utils.toArray<SVGPathElement>(
        ".rainbow-sides--left .rainbow-band--color",
      );
      const rightOutlines = gsap.utils.toArray<SVGPathElement>(
        ".rainbow-sides--right .rainbow-band--outline",
      );
      const leftOutlines = gsap.utils.toArray<SVGPathElement>(
        ".rainbow-sides--left .rainbow-band--outline",
      );

      const heroBands = gsap.utils.toArray<SVGPathElement>(
        ".rainbow-vertical--hero .rainbow-band--color",
      );
      const heroOutlines = gsap.utils.toArray<SVGPathElement>(
        ".rainbow-vertical--hero .rainbow-band--outline",
      );

      const sidePaths = [
        ...rightOutlines,
        ...rightBands,
        ...leftOutlines,
        ...leftBands,
      ];
      const heroPaths = [...heroOutlines, ...heroBands];

      if (!sidePaths.length && !heroPaths.length) return;

      // Intro leaves sides drawn; scroll timeline undraws them from here
      setPathLengths(sidePaths, "zero");
      setPathLengths(heroPaths, "full");

      clipHeroRainbowToBlueBorder();
      resizeHandler = () => {
        clipHeroRainbowToBlueBorder();
        ScrollTrigger.refresh();
      };
      window.addEventListener("resize", resizeHandler);

      const STAGGER = 0.08;
      const BAND_DUR = 1;

      ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: range,
          start: "top top",
          end: "bottom bottom",
          onUpdate: clipHeroRainbowToBlueBorder,
          onRefresh: clipHeroRainbowToBlueBorder,
        });

        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: range,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            invalidateOnRefresh: true,
          },
        });

        const bandCount = Math.max(
          rightOutlines.length,
          leftOutlines.length,
          heroOutlines.length,
        );

        for (let i = 0; i < bandCount; i++) {
          const t = i * STAGGER;

          pairBand(rightOutlines[i], rightBands[i]).forEach((path) => {
            tl.to(
              path,
              { strokeDashoffset: path.getTotalLength(), duration: BAND_DUR },
              t,
            );
          });

          pairBand(leftOutlines[i], leftBands[i]).forEach((path) => {
            tl.to(
              path,
              { strokeDashoffset: -path.getTotalLength(), duration: BAND_DUR },
              t,
            );
          });

          pairBand(heroOutlines[i], heroBands[i]).forEach((path) => {
            tl.to(path, { strokeDashoffset: 0, duration: BAND_DUR }, t);
          });
        }
      });
    };

    const onIntroComplete = () => setup();
    window.addEventListener("page-intro-complete", onIntroComplete);

    // Fallback if intro never fires (e.g. HMR mid-session)
    const fallback = window.setTimeout(() => {
      if (!ctx) setup();
    }, 4000);

    return () => {
      cleaned = true;
      window.clearTimeout(fallback);
      window.removeEventListener("page-intro-complete", onIntroComplete);
      if (resizeHandler) window.removeEventListener("resize", resizeHandler);
      ctx?.revert();
      // Extra safety: kill any triggers still attached to this range
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === range) t.kill();
      });
    };
  }, []);
}
