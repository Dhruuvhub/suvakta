import { FaqImage } from "@/sections/FaqSection/components/FaqImage";
import { FaqList } from "@/sections/FaqSection/components/FaqList";

export const FaqSection = () => {
  return (
    <section className="relative text-[15.3846px] bg-orange-100 box-border caret-transparent leading-5 outline-[3px] pb-[15.3846px] md:text-[14.2222px] md:leading-[18.4889px] md:pb-[142.222px]">
      <div className="text-[15.3846px] box-border caret-transparent leading-5 max-w-[375px] outline-[3px] mx-auto px-[15.3846px] md:text-[14.2222px] md:leading-[18.4889px] md:max-w-screen-xl md:px-[56.8889px]">
        <div className="text-[15.3846px] items-center box-border caret-transparent flex justify-center leading-5 outline-[3px] pb-[61.5385px] md:text-[14.2222px] md:leading-[18.4889px] md:pb-[56.8889px]">
          <h2 className="text-[48.0769px] items-center box-border caret-transparent flex flex-col leading-[43.2692px] max-w-[480.769px] min-h-[auto] min-w-[auto] outline-[3px] text-center font-sugar_peachy md:text-[57.7778px] md:leading-[52px] md:max-w-[577.778px]">
            Frequently Asked{" "}
            <span className="relative text-white text-[48.0769px] bg-orange-500 shadow-[rgba(0,0,0,0.15)_0px_4.80769px_0px_0px] box-border caret-transparent flex leading-[38.4615px] max-w-[269.231px] min-h-[auto] min-w-[auto] outline-[3px] rotate-[1.999999842926156deg] border border-neutral-900 mt-[6.00962px] px-[12.0192px] py-[9.61539px] rounded-[3.00481px] border-solid md:text-[52px] md:shadow-[rgba(0,0,0,0.15)_0px_5.2px_0px_0px] md:leading-[46.8px] md:max-w-none md:rotate-[3.0000011085596214deg] md:mt-[3.25px] md:pt-[7.8px] md:pb-[2.6px] md:px-[13px] md:rounded-[3.25px]">
              Questions
            </span>
          </h2>
        </div>
        <div className="text-[15.3846px] items-center box-border caret-transparent gap-x-[46.1538px] flex flex-col justify-center leading-5 outline-[3px] gap-y-[46.1538px] md:text-[14.2222px] md:[align-items:normal] md:gap-x-[56.8889px] md:flex-row md:leading-[18.4889px] md:gap-y-[56.8889px]">
          <FaqImage />
          <FaqList />
        </div>
      </div>
    </section>
  );
};
