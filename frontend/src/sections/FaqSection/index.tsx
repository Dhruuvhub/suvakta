import { FaqImage } from "@/sections/FaqSection/components/FaqImage";
import { FaqList } from "@/sections/FaqSection/components/FaqList";

export const FaqSection = () => {
  return (
    <section className="section-copy relative bg-suvakta-50 pb-4 md:pb-[142.222px]">
      <div className="section-container">
        <div className="flex justify-center pb-[clamp(2rem,8vw,3.8rem)] md:pb-[56.8889px]">
          <h2 className="flex max-w-[min(100%,30rem)] flex-col items-center gap-2 text-center font-quicksand text-[clamp(2rem,8vw,3.5rem)] font-bold leading-[1.1] text-suvakta-900 md:max-w-none md:flex-row md:gap-x-4 md:gap-y-4 md:text-start md:text-[72px] md:leading-[1.1]">
            Frequently Asked
            <span className="relative rotate-[-1deg] rounded-[3.88px] border border-suvakta-900 bg-suvakta-500 px-[10.87px] py-1 text-white shadow-[rgba(0,0,0,0.15)_0px_4.66px_0px_0px] md:rotate-[-1deg] md:px-[18px] md:py-[6px] md:text-[68px] md:leading-[1.1] md:shadow-[rgba(0,0,0,0.15)_0px_6px_0px_0px] md:rounded-[6px]">
              QUESTIONS
            </span>
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-[clamp(1.75rem,6vw,2.9rem)] md:flex-row md:items-start md:gap-x-[56.8889px] md:gap-y-[56.8889px]">
          <FaqImage />
          <FaqList />
        </div>
      </div>
    </section>
  );
};
