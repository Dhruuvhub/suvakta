import { RainbowVertical } from "@/components/RainbowVertical";
import ExpandableGallery from "@/components/ui/expandable-gallery";

export const HeroImageShuffle = () => {
  return (
    <div
      data-intro="gallery"
      className="relative mt-[-15.3846px] flex flex-col items-center pt-[clamp(3rem,10vw,4.5rem)] pb-[clamp(5rem,18vw,7.8rem)] will-change-transform md:mt-[-14.2222px] md:pt-[56px] md:pb-[250px]"
    >
      <div
        id="hero-rainbow-wrap"
        className="absolute top-0 z-0 overflow-hidden"
        style={{ height: "100%" }}
      >
        <RainbowVertical
          variant="hero"
          className="inline h-[200vh] max-h-none w-[min(289.743px,78vw)] md:w-[401.778px]"
        />
      </div>

      <div className="relative z-[2] mt-2 w-full max-w-full md:mt-4">
        <ExpandableGallery />
      </div>
    </div>
  );
};
