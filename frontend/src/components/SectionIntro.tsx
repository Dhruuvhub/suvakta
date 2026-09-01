export const SectionIntro = () => {
  return (
    <div className="section-copy relative w-full">
      <div className="flex flex-col items-center gap-y-[clamp(1.25rem,4vw,1.45rem)] px-2 md:items-start md:gap-y-[28.4444px] md:px-[28.4444px]">
        <h2 className="flex flex-col items-center uppercase font-bold text-suvakta-900 md:items-start">
          <span className="mb-2 text-[clamp(1.5rem,6vw,2.2rem)] md:mb-2 md:text-[36px] tracking-wide">
            Our Core
          </span>
          <span className="relative z-[2] rounded-[6px] border border-suvakta-900 bg-suvakta-600 px-4 py-1.5 text-[clamp(2.5rem,8vw,3.5rem)] leading-none text-white shadow-[rgba(0,0,0,0.15)_0px_4px_0px_0px] md:rounded-[8px] md:px-6 md:py-2 md:text-[60px] md:shadow-[rgba(0,0,0,0.15)_0px_5px_0px_0px]">
            Union
          </span>
        </h2>
        <p className="max-w-full text-center md:max-w-[227.556px] md:text-start">
          The close knit group of elected leaders who are the backbone of the club and all its undertakings. These are the pillars of Suvakta, and along with their secretariat accomplish goals like a well oiled machinery.
        </p>
      </div>
    </div>
  );
};
