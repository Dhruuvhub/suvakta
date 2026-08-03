import { forwardRef } from "react";
import { SmilingSun } from "@/components/SmilingSun";
import { SpeechBubble } from "@/components/SpeechBubble";

type SunLoaderProps = {
  className?: string;
};

/**
 * Outer node is the GSAP fly target.
 * Viewport center sits in the gap between sun and message box
 * (sun to the left of center, bubble grows to the right).
 */
export const SunLoader = forwardRef<HTMLDivElement, SunLoaderProps>(
  function SunLoader({ className }, ref) {
    return (
      <div
        ref={ref}
        id="sun-loader"
        data-sun-loader=""
        className={`pointer-events-none fixed left-1/2 top-[46%] z-[920] -translate-y-1/2 will-change-transform ${className ?? ""}`}
        aria-hidden="true"
      >
        <div className="relative flex items-center">
          {/* Half of gap-3 / gap-4 so the gap straddles the center line */}
          <div
            data-sun-anchor=""
            className="absolute right-full mr-1.5 shrink-0 md:mr-2"
          >
            <SmilingSun className="h-[72px] w-[72px] md:h-[88px] md:w-[88px]" />
          </div>

          <SpeechBubble
            data-sun-bubble=""
            className="absolute left-full ml-1.5 overflow-hidden will-change-[width] md:ml-2"
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
