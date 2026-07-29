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

/**
 * Bottom About stripes — same draw/stagger as hero mid,
 * but scrubbed when #about-stripes-zone enters view so the animation is visible.
 */
export function useAboutStripes() {
  useLayoutEffect(() => {
    const zone = document.getElementById("about-stripes-zone");
    if (!zone) return;

    const outlines = gsap.utils.toArray<SVGPathElement>(
      zone.querySelectorAll(".rainbow-band--outline"),
    );
    const colors = gsap.utils.toArray<SVGPathElement>(
      zone.querySelectorAll(".rainbow-band--color"),
    );

    if (!outlines.length) return;

    setPathLengths([...outlines, ...colors], "full");

    const STAGGER = 0.08;
    const BAND_DUR = 1;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: zone,
          start: "top 85%",
          end: "bottom 40%",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      outlines.forEach((outline, i) => {
        const t = i * STAGGER;
        const color = colors[i];
        tl.to(outline, { strokeDashoffset: 0, duration: BAND_DUR }, t);
        if (color) {
          tl.to(color, { strokeDashoffset: 0, duration: BAND_DUR }, t);
        }
      });
    }, zone);

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);
}
