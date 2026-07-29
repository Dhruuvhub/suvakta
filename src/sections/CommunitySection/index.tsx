import { CommunityIntro } from "@/sections/CommunitySection/components/CommunityIntro";
import { CommunityMemberGrid } from "@/sections/CommunitySection/components/CommunityMemberGrid";

export const CommunitySection = () => {
  return (
    <section className="relative text-[15.3846px] bg-orange-100 box-border caret-transparent leading-5 outline-[3px] z-[2] pt-[92.3077px] rounded-t-[46.1538px] md:text-[14.2222px] md:leading-[18.4889px] md:pt-[142.222px] md:rounded-t-[42.6667px]">
      <div className="absolute text-[15.3846px] border-l-neutral-900 border-r-neutral-900 border-t-neutral-900 box-border caret-transparent h-[48.0769px] left-[-1.92308px] leading-5 outline-[3px] pointer-events-none top-[-1.92308px] w-[calc(100%_+_3.84615px)] rounded-t-[92.3077px] border-b-transparent border-l border-r border-t md:text-[14.2222px] md:h-[44.4444px] md:left-[-1.77778px] md:leading-[18.4889px] md:top-[-1.77778px] md:w-[calc(100%_+_3.55556px)] md:rounded-t-[85.3333px]"></div>
      <div className="text-[15.3846px] box-border caret-transparent leading-5 mb-[-7.69231px] mt-[-7.69231px] outline-[3px] w-full overflow-hidden py-[7.69231px] md:text-[14.2222px] md:leading-[18.4889px] md:mb-[-7.11111px] md:mt-[-7.11111px] md:py-[7.11111px]">
        <div className="text-[15.3846px] box-border caret-transparent leading-5 max-w-[375px] outline-[3px] mx-auto px-[15.3846px] md:text-[14.2222px] md:leading-[18.4889px] md:max-w-screen-xl md:px-[56.8889px]">
          <div className="relative text-[15.3846px] box-border caret-transparent gap-x-[76.9231px] flex flex-col leading-5 outline-[3px] gap-y-[76.9231px] md:text-[14.2222px] md:gap-x-[56.8889px] md:flex-row md:leading-[18.4889px] md:gap-y-[56.8889px]">
            <CommunityIntro />
            <CommunityMemberGrid />
          </div>
        </div>
      </div>
    </section>
  );
};
