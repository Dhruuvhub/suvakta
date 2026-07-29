import { EventBadge } from "@/sections/Hero/components/EventBadge";
import { HeroHeading } from "@/sections/Hero/components/HeroHeading";
import { HeroImageShuffle } from "@/sections/Hero/components/HeroImageShuffle";

export const Hero = () => {
  return (
    <section className="relative text-[15.3846px] box-border caret-transparent leading-5 outline-[3px] z-[1] pt-[146.154px] md:text-[14.2222px] md:leading-[18.4889px] md:pt-[215.778px]">
      <div className="text-[15.3846px] box-border caret-transparent leading-5 max-w-[375px] outline-[3px] mx-auto px-[15.3846px] md:text-[14.2222px] md:leading-[18.4889px] md:max-w-screen-xl md:px-[56.8889px]">
        <div className="relative text-[15.3846px] items-center box-border caret-transparent gap-x-[38.4615px] flex flex-col justify-center leading-5 outline-[3px] gap-y-[38.4615px] z-[2] md:text-[14.2222px] md:gap-x-[35.5556px] md:leading-[18.4889px] md:gap-y-[35.5556px]">
          <div className="relative text-[15.3846px] box-border caret-transparent leading-5 min-h-[auto] min-w-[auto] outline-[3px] w-full md:text-[14.2222px] md:leading-[18.4889px]">
            <EventBadge />
          </div>
          <HeroHeading />
        </div>
        <HeroImageShuffle />
      </div>
    </section>
  );
};
