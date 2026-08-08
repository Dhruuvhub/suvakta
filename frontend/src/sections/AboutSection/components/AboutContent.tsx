import { useState } from "react";
import { RecapGalleryOverlay } from "@/components/RecapGalleryOverlay";

export const AboutContent = () => {
  const [recapOpen, setRecapOpen] = useState(false);

  return (
    <div className="section-copy relative z-10 flex w-full max-w-[min(100%,19.4rem)] flex-col items-center gap-y-[clamp(1.25rem,5vw,1.9rem)] px-2 pt-4 text-center md:max-w-[520px] md:gap-y-[28.4444px] md:pt-[14.2222px]">
      <h2 className="flex flex-col items-center font-sugar_peachy text-[clamp(1.75rem,8vw,2.625rem)] leading-[1.1] md:block md:text-[57.7778px] md:leading-[52px]">
        The No.1 Fest for:{" "}
        <br className="md:hidden" />
        <span className="relative mt-2 flex max-w-[min(100%,18rem)] rotate-[-3deg] rounded-[5.28846px] border border-suvakta-900 bg-suvakta-500 px-[10.5769px] py-2 text-white shadow-[rgba(255,255,255,0.15)_0px_3.17308px_0px_0px] md:mt-0 md:inline md:max-w-none md:rotate-[-0.9999993263990709deg] md:px-[13.7222px] md:py-[8.23333px] md:text-[54.8889px] md:leading-[49.4px] md:shadow-[rgba(255,255,255,0.15)_0px_4.11667px_0px_0px] md:rounded-[3.43056px]">
          Web Designers &amp; Devs
        </span>
      </h2>
      <div className="flex w-full max-w-[24rem] flex-col items-center justify-center md:max-w-[355.556px]">
        <p>
          It&apos;s like a conference, but it&apos;s outside, with steel drums, pints
          and way cooler vibes. Listen to web design &amp; dev talks whilst
          having a belting time.
        </p>
      </div>
      <button
        type="button"
        onClick={() => setRecapOpen(true)}
        className="relative mt-4 flex h-11 min-h-11 items-center justify-center rounded-[153.846px] border border-suvakta-900 bg-white px-6 text-suvakta-900 shadow-[rgba(0,0,0,0.15)_0px_3.84615px_0px_0px] hover:shadow-[rgba(0,0,0,0.5)_0px_0px_0px_0px] md:mt-6 md:h-[42.6667px] md:rounded-[142.222px] md:shadow-[rgba(0,0,0,0.15)_0px_3.55556px_0px_0px]"
      >
        <img
          src="https://c.animaapp.com/mrxuckkzwKTRkk/assets/icon-26.svg"
          alt=""
          className="mr-2 w-[15.3846px] md:w-[14.2222px]"
        />
        <span className="text-[clamp(0.875rem,2.5vw,1.08rem)] font-bold tracking-[-0.173077px] md:text-[14.2222px] md:tracking-[-0.142222px]">
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
