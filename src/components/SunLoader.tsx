import { forwardRef } from "react";
import { SmilingSun } from "@/components/SmilingSun";
import { SpeechBubble } from "@/components/SpeechBubble";

type SunLoaderProps = {
  className?: string;
};

/**
 * Outer node is the GSAP fly target.
 * Inner layout keeps the sun centered; the bubble only grows to the right.
 */
export const SunLoader = forwardRef<HTMLDivElement, SunLoaderProps>(
  function SunLoader({ className }, ref) {
    return (
      <div
        ref={ref}
        id="sun-loader"
        data-sun-loader=""
        className={`pointer-events-none fixed left-1/2 top-[46%] z-[920] will-change-transform ${className ?? ""}`}
        aria-hidden="true"
      >
        <div className="flex -translate-x-[36px] -translate-y-1/2 items-center gap-3 md:-translate-x-[44px] md:gap-4">
          <div data-sun-anchor="" className="shrink-0">
            <SmilingSun className="h-[72px] w-[72px] md:h-[88px] md:w-[88px]" />
          </div>

          <SpeechBubble
            data-sun-bubble=""
            className="overflow-hidden will-change-[width]"
          >
            <p className="relative m-0 whitespace-nowrap font-quicksand text-[13px] font-bold leading-none tracking-tight text-white md:text-[14px]">
              <span data-sun-text="" />
              <span
                data-sun-caret=""
                className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[0.1em] bg-white align-baseline"
              />
            </p>
          </SpeechBubble>
        </div>
      </div>
    );
  },
);

export default SunLoader;
