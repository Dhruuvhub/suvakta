import { STRIP_COLORS, SUVAKTA } from "@/lib/colors";

const COLUMNS = [
  SUVAKTA[800],
  STRIP_COLORS[0],
  STRIP_COLORS[1],
  STRIP_COLORS[2],
  STRIP_COLORS[3],
  SUVAKTA[700],
  SUVAKTA[900],
] as const;

/**
 * Accordion-style transition chrome — iris slit, teal columns, curves, mark.
 * Driven imperatively by `runPageTransition` (display:none when idle).
 */
export function PageTransitionOverlay() {
  return (
    <div
      id="page-transition"
      className="pointer-events-none fixed inset-0 z-[9998] hidden items-center justify-center overflow-hidden"
      aria-hidden="true"
    >
      <div
        data-pt-overlay
        className="absolute inset-0 bg-suvakta-900"
      />

      {/* Top / bottom squeeze curves — position driven by GSAP `y` */}
      <div
        data-pt-curve-top
        className="pointer-events-none absolute left-1/2 top-0 aspect-square w-[250vh] -translate-x-1/2 rounded-full bg-suvakta-800 will-change-transform"
      />
      <div
        data-pt-curve-bot
        className="pointer-events-none absolute bottom-0 left-1/2 aspect-square w-[250vh] -translate-x-1/2 rounded-full bg-suvakta-800 will-change-transform"
      />

      <div
        data-pt-inner
        className="relative z-[1] flex h-screen w-screen items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 flex items-center justify-center gap-0">
          {COLUMNS.map((color, i) => (
            <div
              key={i}
              data-pt-col
              className="h-full w-[6vw] shrink-0 border-x border-suvakta-950/40"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        {/* Corner plus marks */}
        <span
          data-pt-plus
          className="absolute left-6 top-6 font-sugar_peachy text-3xl leading-none text-suvakta-50 md:left-10 md:top-10"
        >
          +
        </span>
        <span
          data-pt-plus
          className="absolute right-6 top-6 font-sugar_peachy text-3xl leading-none text-suvakta-50 md:right-10 md:top-10"
        >
          +
        </span>
        <span
          data-pt-plus
          className="absolute bottom-6 left-6 font-sugar_peachy text-3xl leading-none text-suvakta-50 md:bottom-10 md:left-10"
        >
          +
        </span>
        <span
          data-pt-plus
          className="absolute bottom-6 right-6 font-sugar_peachy text-3xl leading-none text-suvakta-50 md:bottom-10 md:right-10"
        >
          +
        </span>

        <img
          data-pt-mark
          src="/suvakta-wordmark.png"
          alt=""
          className="relative z-[2] w-[min(200px,42vw)] object-contain brightness-0 invert"
          draggable={false}
        />
      </div>
    </div>
  );
}
