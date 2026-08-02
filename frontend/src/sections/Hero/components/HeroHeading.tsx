const phraseImgClass =
  "relative box-border h-[clamp(48px,9vw,92px)] w-auto max-w-full cursor-pointer object-contain outline-none select-none transition-[transform,filter] duration-150 ease-out " +
  "[filter:drop-shadow(0_7px_0_rgba(0,0,0,0.22))] " +
  "hover:translate-y-[3px] hover:[filter:drop-shadow(0_2px_0_rgba(0,0,0,0.45))] " +
  "active:translate-y-[4px] active:[filter:drop-shadow(0_1px_0_rgba(0,0,0,0.55))]";

export const HeroHeading = () => {
  return (
    <div className="section-copy flex w-full max-w-[1100px] flex-col items-center">
      <h1
        data-intro="phrase"
        className="relative z-[1] flex w-full flex-wrap items-center justify-center will-change-transform"
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
        className="relative mt-1 w-max max-w-[min(100%,48rem)] origin-center rotate-[-3.5deg] will-change-transform"
      >
        <div className="rounded-[5.76923px] border border-solid border-suvakta-900 bg-suvakta-500 px-2.5 py-1.5 shadow-[rgba(0,0,0,0.15)_0px_7.69231px_0px_0px] md:rounded-[5.33333px] md:px-5 md:py-3 md:shadow-[rgba(0,0,0,0.15)_0px_7.11111px_0px_0px]">
          <h2 className="whitespace-nowrap text-center font-sugar_peachy text-[clamp(1.05rem,4.6vw,2.75rem)] leading-none text-white md:text-[56px] md:leading-[1]">
            Debate and Discourse
          </h2>
        </div>
      </div>
    </div>
  );
};
