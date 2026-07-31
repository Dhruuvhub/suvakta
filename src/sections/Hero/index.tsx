import { EventBadge } from "@/sections/Hero/components/EventBadge";
import { HeroHeading } from "@/sections/Hero/components/HeroHeading";
import { HeroImageShuffle } from "@/sections/Hero/components/HeroImageShuffle";

export const Hero = () => {
  return (
    <section className="section-copy relative z-[1] pt-[clamp(7.5rem,22vw,13.5rem)] md:pt-[215.778px]">
      <div className="section-container">
        <div className="relative z-[2] flex flex-col items-center justify-center gap-y-[clamp(1.75rem,6vw,2.4rem)] md:gap-y-[35.5556px]">
          <div className="relative w-full">
            <EventBadge />
          </div>
          <HeroHeading />
        </div>
        <HeroImageShuffle />
      </div>
    </section>
  );
};
