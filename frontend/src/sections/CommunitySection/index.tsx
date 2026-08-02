import { CommunityIntro } from "@/sections/CommunitySection/components/CommunityIntro";
import { CommunityMemberGrid } from "@/sections/CommunitySection/components/CommunityMemberGrid";

export const CommunitySection = () => {
  return (
    <section className="section-copy relative z-[2] overflow-hidden rounded-t-[46.1538px] bg-suvakta-50 pt-[clamp(3.5rem,12vw,5.75rem)] md:rounded-t-[42.6667px] md:pt-[142.222px]">
      <div className="pointer-events-none absolute left-[-1.92308px] top-[-1.92308px] h-[48.0769px] w-[calc(100%_+_3.84615px)] rounded-t-[92.3077px] border border-b-transparent border-l-suvakta-900 border-r-suvakta-900 border-t-suvakta-900 md:left-[-1.77778px] md:top-[-1.77778px] md:h-[44.4444px] md:w-[calc(100%_+_3.55556px)] md:rounded-t-[85.3333px]" />
      <div className="w-full overflow-hidden py-[7.69231px] md:py-[7.11111px]">
        <div className="section-container">
          <div className="relative flex flex-col gap-y-[clamp(2.5rem,8vw,4.8rem)] md:flex-row md:gap-x-[56.8889px] md:gap-y-[56.8889px]">
            <CommunityIntro />
            <CommunityMemberGrid />
          </div>
        </div>
      </div>
    </section>
  );
};
