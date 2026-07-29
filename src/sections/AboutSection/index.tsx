import { DecorativeImageBurst } from "@/sections/AboutSection/components/DecorativeImageBurst";
import { AboutContent } from "@/sections/AboutSection/components/AboutContent";
import { RainbowVertical } from "@/components/RainbowVertical";
import { useAboutStripes } from "@/hooks/useAboutStripes";

export const AboutSection = () => {
  useAboutStripes();

  return (
    <section className="relative text-[15.3846px] bg-neutral-900 box-border caret-transparent leading-5 outline-[3px] border-neutral-900 overflow-hidden border-b-2 md:text-[14.2222px] md:leading-[18.4889px]">
      <div className="text-[15.3846px] box-border caret-transparent leading-5 max-w-[375px] outline-[3px] mx-auto px-[15.3846px] md:text-[14.2222px] md:leading-[18.4889px] md:max-w-screen-xl md:px-[56.8889px]">
        <div className="relative box-border flex h-[100px] justify-center outline-[3px] md:h-[80px]" />
        <div
          id="about-blue-card"
          className="relative text-white text-[15.3846px] items-center shadow-[rgba(0,0,0,0.15)_0px_7.69231px_0px_0px] box-border caret-transparent flex flex-col justify-center leading-5 outline-[3px] w-full z-[1] bg-neutral-900 py-[100px] md:text-[14.2222px] md:shadow-[rgba(0,0,0,0.15)_0px_7.11111px_0px_0px] md:leading-[18.4889px] md:py-[48px]"
        >
          <DecorativeImageBurst
            variantClass="left-0 top-0"
            imageClass=""
            firstImageSrc="https://c.animaapp.com/mrxuckkzwKTRkk/assets/682ed523a929671dd06fa82a_about-3.avif"
            secondImageSrc="https://c.animaapp.com/mrxuckkzwKTRkk/assets/682ed523372605b32799121d_about-4.avif"
            thirdImageSrc="https://c.animaapp.com/mrxuckkzwKTRkk/assets/682ed523589745e7ab7d19e6_about-5.avif"
            fourthImageSrc="https://c.animaapp.com/mrxuckkzwKTRkk/assets/682ed523a929671dd06fa82a_about-3.avif"
          />
          <DecorativeImageBurst
            variantClass="-scale-100 right-0 top-auto bottom-0 md:top-0 md:bottom-auto"
            imageClass="-scale-100"
            firstImageSrc="https://c.animaapp.com/mrxuckkzwKTRkk/assets/682ed523a929671dd06fa82d_about-6.avif"
            secondImageSrc="https://c.animaapp.com/mrxuckkzwKTRkk/assets/682ed523055e1b8f349b28d1_c49152d8c588c19b6d48252716aad7ee_about-1.avif"
            thirdImageSrc="https://c.animaapp.com/mrxuckkzwKTRkk/assets/682ed52338c367abcc5b39ef_about-2.avif"
            fourthImageSrc="https://c.animaapp.com/mrxuckkzwKTRkk/assets/682ed523a929671dd06fa82d_about-6.avif"
          />
          <div className="absolute text-[15.3846px] box-border caret-transparent h-full leading-5 outline-[3px] pointer-events-none w-full border border-blue-500 border-solid left-0 top-0 md:text-[14.2222px] md:leading-[18.4889px]" />
          <div className="absolute text-[15.3846px] items-center bg-blue-500 bottom-[calc(100%_-_0.961538px)] box-border caret-transparent gap-x-[3.84615px] flex justify-start leading-5 outline-[3px] gap-y-[3.84615px] pl-[5.76923px] pr-[7.69231px] py-[3.84615px] rounded-t-[1.92308px] left-0 md:text-[14.2222px] md:bottom-[calc(100%_-_0.888889px)] md:gap-x-[3.55556px] md:leading-[18.4889px] md:gap-y-[3.55556px] md:pl-[5.33333px] md:pr-[7.11111px] md:py-[3.55556px] md:rounded-t-[1.77778px]">
            <img
              src="https://c.animaapp.com/mrxuckkzwKTRkk/assets/icon-25.svg"
              alt="Icon"
              className="text-[15.3846px] box-border caret-transparent leading-5 outline-[3px] w-[9.61538px] mt-[1.53846px] md:text-[14.2222px] md:leading-[18.4889px] md:w-[8.88889px] md:mt-[1.42222px]"
            />
            <span className="text-[10.5769px] box-border caret-transparent block leading-[9.51923px] min-h-[auto] min-w-[auto] outline-[3px] mt-[1.05769px] font-arial md:text-[9.77778px] md:leading-[8.8px] md:mt-[0.977778px]">
              What is FlowFest?
            </span>
          </div>
          <AboutContent />
        </div>
      </div>

      {/* Same strip style as hero — synced in useScrollLines */}
      <div
        id="about-stripes-zone"
        className="relative box-border flex h-[160px] w-full justify-center overflow-hidden outline-[3px] md:h-[180px]"
      >
        <RainbowVertical
          variant="about"
          className="h-full w-[289.743px] md:w-[401.778px]"
        />
      </div>
    </section>
  );
};
