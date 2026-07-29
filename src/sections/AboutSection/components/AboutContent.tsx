import { useState } from "react";
import { RecapGalleryOverlay } from "@/components/RecapGalleryOverlay";

export const AboutContent = () => {
  const [recapOpen, setRecapOpen] = useState(false);

  return (
    <div className="text-[15.3846px] items-center box-border caret-transparent gap-x-[30.7692px] flex flex-col leading-5 max-w-[310.769px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-[30.7692px] text-center pt-[15.3846px] md:text-[14.2222px] md:gap-x-[28.4444px] md:leading-[18.4889px] md:max-w-[597.333px] md:gap-y-[28.4444px] md:pt-[14.2222px]">
      <h2 className="text-[42.3077px] items-center box-border caret-transparent flex flex-col leading-[38.0769px] min-h-[auto] min-w-[auto] outline-[3px] font-sugar_peachy md:text-[57.7778px] md:[align-items:normal] md:block md:flex-row md:leading-[52px]">
        The No.1 Fest for:{" "}
        <br className="text-[42.3077px] box-border caret-transparent block leading-[38.0769px] min-h-[auto] min-w-[auto] outline-[3px] md:text-[57.7778px] md:inline md:leading-[52px] md:min-h-0 md:min-w-0" />
        <span className="relative text-white text-[42.3077px] bg-amber-500 shadow-[rgba(255,255,255,0.15)_0px_3.17308px_0px_0px] box-border caret-transparent flex leading-[38.0769px] max-w-[287.692px] min-h-[auto] min-w-[auto] outline-[3px] rotate-[-3.0000011085596214deg] border border-neutral-900 mt-[5.28846px] pt-[8.46154px] pb-[6.34615px] px-[10.5769px] rounded-[5.28846px] border-solid md:text-[54.8889px] md:shadow-[rgba(255,255,255,0.15)_0px_4.11667px_0px_0px] md:leading-[49.4px] md:max-w-none md:min-h-0 md:min-w-0 md:rotate-[-0.9999993263990709deg] md:mt-0 md:pt-[8.23333px] md:pb-[2.74444px] md:px-[13.7222px] md:rounded-[3.43056px]">
          Web Designers &amp; Devs
        </span>
      </h2>
      <div className="text-[15.3846px] items-center box-border caret-transparent flex flex-col justify-center leading-5 max-w-[384.615px] min-h-[auto] min-w-[auto] outline-[3px] md:text-[14.2222px] md:leading-[18.4889px] md:max-w-[355.556px]">
        <p className="text-[15.3846px] box-border caret-transparent leading-5 min-h-[auto] min-w-[auto] outline-[3px] md:text-[14.2222px] md:leading-[18.4889px]">
          It’s like a conference, but it&#39;s outside, with steel drums, pints
          and way cooler vibes. Listen to web design &amp; dev talks whilst
          having a belting time.
        </p>
      </div>
      <button
        type="button"
        onClick={() => setRecapOpen(true)}
        className="relative text-neutral-900 text-[15.3846px] font-normal items-center bg-white shadow-[rgba(0,0,0,0.15)_0px_3.84615px_0px_0px] caret-transparent flex auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto_auto] h-[52.8846px] justify-center leading-[15.3846px] min-h-[auto] min-w-[auto] outline-[3px] border border-neutral-900 pb-[1.53846px] px-[26.9231px] rounded-[153.846px] md:text-[14.2222px] md:shadow-[rgba(0,0,0,0.15)_0px_3.55556px_0px_0px] md:h-[42.6667px] md:leading-[14.2222px] md:pb-[1.42222px] md:px-[17.7778px] md:rounded-[142.222px] hover:shadow-[rgba(0,0,0,0.5)_0px_0px_0px_0px]"
      >
        <img
          src="https://c.animaapp.com/mrxuckkzwKTRkk/assets/icon-26.svg"
          alt=""
          className="text-[15.3846px] box-border caret-transparent leading-[15.3846px] outline-[3px] w-[15.3846px] mr-[5.76923px] md:text-[14.2222px] md:leading-[14.2222px] md:w-[14.2222px] md:mr-[5.33333px]"
        />
        <span className="text-[17.3077px] font-bold box-border caret-transparent block tracking-[-0.173077px] leading-[17.3077px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap mt-[1.08173px] md:text-[14.2222px] md:tracking-[-0.142222px] md:leading-[14.2222px] md:mt-[0.888889px]">
          Watch the 2024 Recap
        </span>
      </button>

      <RecapGalleryOverlay
        open={recapOpen}
        onClose={() => setRecapOpen(false)}
      />
    </div>
  );
};
