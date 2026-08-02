import { FaqImage } from "@/sections/FaqSection/components/FaqImage";
import { FaqList } from "@/sections/FaqSection/components/FaqList";

export const FaqSection = () => {
  return (
    <section className="section-copy relative bg-suvakta-50 pb-4 md:pb-[142.222px]">
      <div className="section-container">
        <div className="flex justify-center pb-[clamp(2rem,8vw,3.8rem)] md:pb-[56.8889px]">
          <h2 className="flex max-w-[min(100%,30rem)] flex-col items-center text-center font-sugar_peachy text-[clamp(1.75rem,8vw,3rem)] leading-[1.1] md:max-w-[577.778px] md:text-[57.7778px] md:leading-[52px]">
            Frequently Asked{" "}
            <span className="relative mt-2 rotate-[2deg] rounded-[3.00481px] border border-suvakta-900 bg-suvakta-600 px-3 py-2 text-white shadow-[rgba(0,0,0,0.15)_0px_4.80769px_0px_0px] md:mt-[3.25px] md:rotate-[3.0000011085596214deg] md:px-[13px] md:py-[7.8px] md:text-[52px] md:leading-[46.8px] md:shadow-[rgba(0,0,0,0.15)_0px_5.2px_0px_0px] md:rounded-[3.25px]">
              Questions
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
