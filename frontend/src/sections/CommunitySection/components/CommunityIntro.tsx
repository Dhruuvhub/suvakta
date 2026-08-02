export const CommunityIntro = () => {
  return (
    <div className="section-copy relative z-[2] flex w-full flex-col items-center gap-y-[clamp(1.25rem,5vw,1.9rem)] text-center md:w-6/12 md:items-start md:gap-y-[28.4444px] md:text-start">
      <h2 className="flex max-w-[min(100%,27rem)] flex-col items-center text-center font-sugar_peachy text-[clamp(1.75rem,8vw,3rem)] leading-[1.1] md:max-w-[520px] md:items-start md:text-[57.7778px] md:leading-[52px] md:text-start">
        An Event Ran by{" "}
        <span className="block">The Community, </span>
        <span className="relative mt-2 rotate-[2deg] rounded-[3.00481px] border border-suvakta-900 bg-suvakta-500 px-3 py-2 text-white shadow-[rgba(0,0,0,0.15)_0px_4.80769px_0px_0px] md:mt-0 md:rotate-[0.9999993263990709deg] md:px-[13px] md:py-[7.8px] md:text-[52px] md:leading-[46.8px] md:shadow-[rgba(0,0,0,0.15)_0px_5.2px_0px_0px] md:rounded-[3.25px]">
          For The Community
        </span>
      </h2>
      <p className="max-w-[min(100%,24.9rem)] md:max-w-[398.222px]">
        This is a <strong>non-profit</strong> event run by <strong>volunteer</strong>{" "}
        community members. At FlowFest our motivation is to lead with kindness,
        inclusivity, support and <strong>FUN</strong>, obvs.
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
  );
};
