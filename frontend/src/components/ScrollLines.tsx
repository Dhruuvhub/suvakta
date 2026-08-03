import { useScrollLines } from "@/hooks/useScrollLines";
import { RainbowSides } from "@/components/RainbowSides";

/**
 * Drop-in replacement for Anima icon-5 / icon-6 imgs.
 * Same layout classes — paths are separate so GSAP can stagger them.
 */
export const ScrollLines = () => {
  useScrollLines();

  return (
    <div
      data-scroll-lines
      className="pointer-events-none absolute inset-0 hidden h-full min-h-[512.769px] w-full overflow-hidden md:fixed md:block md:h-dvh md:min-h-dvh"
    >
      <RainbowSides
        side="right"
        className="absolute right-[-48.7131px] top-0 w-[205.749px] md:right-[-67.5556px] md:w-[285.333px]"
      />
      <RainbowSides
        side="left"
        className="absolute bottom-0 left-[-48.7131px] w-[205.749px] -scale-100 md:left-[-67.5556px] md:w-[285.333px]"
      />
    </div>
  );
};
