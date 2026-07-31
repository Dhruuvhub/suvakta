export const SectionIntro = () => {
  return (
    <div className="section-copy relative w-full transform-none md:w-[calc(33.33%_-_35.5556px)] md:translate-y-[88.8889px]">
      <div className="flex flex-col items-center gap-y-[clamp(1.25rem,4vw,1.45rem)] px-2 md:items-start md:gap-y-[28.4444px] md:px-[28.4444px]">
        <h2 className="flex flex-col items-center font-sugar-peachy text-[clamp(1.75rem,8vw,3.375rem)] leading-[1.1] md:items-start md:text-[57.7778px] md:leading-[52px]">
          Our 2025{" "}
          <span className="relative z-[2] rotate-[-1deg] rounded-[3.19712px] border border-suvakta-900 bg-suvakta-500 px-3 py-2 text-white shadow-[rgba(0,0,0,0.15)_0px_5.11538px_0px_0px] md:rotate-[-0.9999993263990709deg] md:px-[13.7222px] md:py-[8.23333px] md:text-[54.8889px] md:leading-[49.4px] md:shadow-[rgba(0,0,0,0.15)_0px_5.48889px_0px_0px] md:rounded-[3.43056px]">
            Speaker
          </span>
          <span className="relative -ml-1 rotate-[3deg] rounded-[3.19712px] border border-suvakta-900 bg-suvakta-600 px-3 py-2 text-white md:ml-[6.86111px] md:rotate-[3.0000011085596214deg] md:px-[13.7222px] md:py-[8.23333px] md:text-[54.8889px] md:leading-[49.4px] md:rounded-[3.43056px]">
            lineup
          </span>
        </h2>
        <p className="max-w-full text-center md:max-w-[227.556px] md:text-start">
          Yep, we got <strong>Vladdy Daddy</strong> for the keynote. Plus some absolute{" "}
          <strong>legends</strong> that will also be sharing the stage. (More speaker{" "}
          <strong>announcements</strong> to come!)
        </p>
        <div className="flex justify-center md:justify-start">
          <a
            href="https://lu.ma/aq1a429h"
            className="relative flex h-11 min-h-11 items-center justify-center rounded-[153.846px] border border-suvakta-900 bg-suvakta-accent text-suvakta-900 px-6 shadow-[rgba(0,0,0,0.15)_0px_3.84615px_0px_0px] hover:shadow-[rgba(0,0,0,0.5)_0px_0px_0px_0px] md:h-[39.1111px] md:rounded-[142.222px] md:shadow-[rgba(0,0,0,0.15)_0px_3.55556px_0px_0px]"
          >
            <span className="text-[clamp(0.875rem,2.5vw,1.08rem)] font-bold tracking-[-0.173077px] md:text-[14.2222px] md:tracking-[-0.142222px]">
              Buy Tickets
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
