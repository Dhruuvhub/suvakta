import { RainbowVertical } from "@/components/RainbowVertical";
import ExpandableGallery from "@/components/ui/expandable-gallery";

export const HeroImageShuffle = () => {
  return (
    <div
      data-intro="gallery"
      className="relative mt-[-15.3846px] flex flex-col items-center pt-[72px] pb-[125px] will-change-transform md:mt-[-14.2222px] md:pt-[56px] md:pb-[250px]"
    >
      {/* Clipped to About blue border via useScrollLines — keep strips unchanged */}
      <div
        id="hero-rainbow-wrap"
        className="absolute top-0 z-0 overflow-hidden"
        style={{ height: "100%" }}
      >
        <RainbowVertical
          variant="hero"
          className="inline h-[200vh] max-h-none w-[289.743px] md:w-[401.778px]"
        />
      </div>

      <div className="relative z-[2] w-full mt-2 md:mt-4">
        <ExpandableGallery />
      </div>
    </div>
  );
};
