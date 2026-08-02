import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CARDS = [
  {
    border: "border-suvakta-accent",
    item: "rotate-[155deg] md:rotate-[-65deg]",
    wrap: "rotate-[-155deg] md:rotate-[65deg]",
  },
  {
    border: "border-suvakta-300",
    item: "rotate-[109deg] md:rotate-[-19deg]",
    wrap: "rotate-[-109deg] md:rotate-[19deg]",
  },
  {
    border: "border-suvakta-200",
    item: "rotate-[71deg] md:rotate-[19deg]",
    wrap: "rotate-[-71deg] md:rotate-[-19deg]",
  },
  {
    border: "border-suvakta-400",
    item: "rotate-[25deg] md:rotate-[65deg]",
    wrap: "rotate-[-25deg] md:rotate-[-65deg]",
  },
] as const;

export type DecorativeImageBurstProps = {
  /** Mirror to the right — FlowFest `.rotate.is--flipped` (rotate 180°, not scale) */
  flipped?: boolean;
  images: [string, string, string, string];
};

/**
 * Exact FlowFest about photo wheel: 4 upright cards on a clipped circular arc.
 * Scroll: list +15→−15, frames −15→+15 so photos stay upright while orbiting.
 */
export const DecorativeImageBurst = ({
  flipped = false,
  images,
}: DecorativeImageBurstProps) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const list = listRef.current;
    const root = rootRef.current;
    if (!list || !root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const trigger =
      document.getElementById("about-blue-card") ??
      document.getElementById("about");
    if (!trigger) return;

    const frames = root.querySelectorAll<HTMLElement>("[data-orbit-frame]");

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger,
          start: "0% 100%",
          end: "100% 0%",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      tl.fromTo(
        list,
        { rotation: 15 },
        { rotation: -15, ease: "none", immediateRender: false },
      );
      tl.fromTo(
        frames,
        { rotation: -15 },
        { rotation: 15, ease: "none", immediateRender: false },
        "<",
      );
    }, root);

    const refresh = () => ScrollTrigger.refresh();
    requestAnimationFrame(refresh);
    window.addEventListener("page-intro-complete", refresh);

    return () => {
      window.removeEventListener("page-intro-complete", refresh);
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className={`pointer-events-none absolute top-0 flex aspect-[3/2] w-full items-center overflow-hidden md:aspect-[2/3] md:h-full md:w-auto ${
        flipped
          ? "bottom-0 left-auto right-0 top-auto rotate-180 md:bottom-auto md:top-0"
          : "left-0"
      }`}
      aria-hidden="true"
    >
      <div className="absolute right-[-12.5%] top-[-120%] flex w-[125%] items-center justify-center md:right-1/4 md:top-auto md:w-[200%]">
        <div className="pt-[100%]" />
        <div ref={listRef} className="absolute inset-0 will-change-transform">
          {CARDS.map((card, i) => (
            <div
              key={i}
              className={`absolute left-0 top-0 flex h-full w-full items-center ${card.item}`}
            >
              <div
                className={`absolute right-0 w-24 md:w-[8.5em] ${card.wrap}`}
              >
                <div
                  data-orbit-frame
                  className={`relative w-full overflow-hidden rounded-[0.75em] border-2 border-solid bg-suvakta-200 will-change-transform ${card.border}`}
                >
                  <div className="pt-[100%]" />
                  <img
                    src={images[i]}
                    alt=""
                    className={`absolute left-0 top-0 h-full w-full max-w-full object-cover ${
                      flipped ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
