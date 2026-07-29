const phraseImgClass =
  "relative box-border h-[clamp(48px,9vw,92px)] w-auto max-w-full cursor-pointer object-contain outline-none select-none transition-[transform,filter] duration-150 ease-out " +
  "[filter:drop-shadow(0_7px_0_rgba(0,0,0,0.22))] " +
  "hover:translate-y-[3px] hover:[filter:drop-shadow(0_2px_0_rgba(0,0,0,0.45))] " +
  "active:translate-y-[4px] active:[filter:drop-shadow(0_1px_0_rgba(0,0,0,0.55))]";

export const HeroHeading = () => {
  return (
    <div className="flex w-full max-w-[1100px] flex-col items-center text-[15.3846px] leading-5 outline-[3px] md:text-[14.2222px] md:leading-[18.4889px]">
      <h1
        data-intro="phrase"
        className="relative z-[1] flex w-full flex-nowrap items-center justify-center outline-[3px] will-change-transform"
      >
        <button
          type="button"
          className="m-0 max-w-full border-0 bg-transparent p-0"
          aria-label="Home of Euridite Sirens"
        >
          <img
            src="https://i.ibb.co/TDJ8g6V6/Picsart-26-07-28-13-11-24-526.png"
            alt="Home of Euridite Sirens"
            className={phraseImgClass}
            draggable={false}
          />
        </button>
      </h1>
      <div
        data-intro="banner"
        className="relative mt-1 origin-center text-[15.3846px] leading-5 outline-[3px] will-change-transform md:text-[14.2222px] md:leading-[18.4889px]"
      >
        <div className="rounded-[5.76923px] border border-solid border-neutral-900 bg-amber-500 shadow-[rgba(0,0,0,0.15)_0px_7.69231px_0px_0px] outline-[3px] md:rounded-[5.33333px] md:shadow-[rgba(0,0,0,0.15)_0px_7.11111px_0px_0px]">
          <h2 className="mx-[11.5385px] mt-[4.61538px] text-center font-sugar_peachy text-[46.1538px] leading-[41.5385px] text-white text-nowrap outline-[3px] md:mx-[17.7778px] md:mt-[7.11111px] md:text-[71.1111px] md:leading-[64px] md:text-wrap">
            FlowFest is back.
          </h2>
        </div>
      </div>
    </div>
  );
};
