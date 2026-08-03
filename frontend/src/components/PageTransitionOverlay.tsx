const BAR_COUNT = 15;
const TICK_COUNT = 11;

/**
 * Clean Accordion bellows loader — black field, white bars, corner pluses.
 * Mid-state matches the pinched “accordion” silhouette from accordion.net.au.
 */
export function PageTransitionOverlay() {
  return (
    <div
      id="page-transition"
      className="pointer-events-none fixed inset-0 z-[9998] hidden items-center justify-center overflow-hidden bg-black"
      aria-hidden="true"
    >
      {/* Top-center hash mark */}
      <div
        data-pt-ticks
        className="absolute left-1/2 top-5 z-[2] flex -translate-x-1/2 items-end gap-[3px] md:top-7"
      >
        {Array.from({ length: TICK_COUNT }, (_, i) => (
          <span
            key={i}
            className="block w-px bg-white"
            style={{ height: `${6 + (i % 3) * 2}px` }}
          />
        ))}
      </div>

      {/* Corner pluses — crisp geometric, not font glyphs */}
      {(
        [
          "left-5 top-5 md:left-8 md:top-8",
          "right-5 top-5 md:right-8 md:top-8",
          "bottom-5 left-5 md:bottom-8 md:left-8",
          "bottom-5 right-5 md:bottom-8 md:right-8",
        ] as const
      ).map((pos) => (
        <span
          key={pos}
          data-pt-plus
          className={`absolute z-[2] ${pos}`}
          aria-hidden
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M9 1.5V16.5M1.5 9H16.5"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="square"
            />
          </svg>
        </span>
      ))}

      {/* Bellows bars — vertically centered; height driven by GSAP */}
      <div
        data-pt-bellows
        className="relative z-[1] flex h-full w-full max-w-[min(920px,92vw)] items-center justify-center gap-[0.55vw] px-4 md:gap-[0.65vw]"
      >
        {Array.from({ length: BAR_COUNT }, (_, i) => (
          <div
            key={i}
            data-pt-bar
            data-pt-index={i}
            className="h-full w-[3.2vw] max-w-[28px] min-w-[8px] shrink-0 bg-white will-change-transform origin-center md:w-[2.4vw]"
          />
        ))}
      </div>
    </div>
  );
}
