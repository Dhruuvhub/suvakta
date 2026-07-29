export type SponsorGroupProps = {
  label: string;
  firstSponsorHref: string;
  firstSponsorImageSrc: string;
  firstSponsorImageAlt: string;
  secondSponsorHref: string;
  secondSponsorImageSrc: string;
  secondSponsorImageAlt: string;
};

export const SponsorGroup = (props: SponsorGroupProps) => {
  return (
    <div className="text-[15.3846px] items-center box-border caret-transparent gap-x-[23.0769px] flex basis-[0%] leading-5 min-h-[auto] min-w-[auto] outline-[3px] gap-y-[23.0769px] pr-[43.2692px] md:text-[14.2222px] md:gap-x-10 md:leading-[18.4889px] md:gap-y-10 md:pr-10">
      <p className="text-[25px] box-border caret-transparent leading-[25px] min-h-[auto] min-w-[auto] outline-[3px] text-nowrap mt-[1.5625px] font-sugar_peachy md:text-[26.6667px] md:leading-[26.6667px] md:mt-[1.66667px]">
        {props.label}
      </p>
      <div className="text-[15.3846px] bg-white box-border caret-transparent shrink-0 h-[5.76923px] leading-5 min-h-[auto] min-w-[auto] outline-[3px] w-[5.76923px] rounded-[50%] md:text-[14.2222px] md:h-[5.33333px] md:leading-[18.4889px] md:w-[5.33333px]"></div>
      <a
        href={props.firstSponsorHref}
        className="relative text-[15.3846px] box-border caret-transparent block leading-5 max-w-full min-h-[auto] min-w-[auto] outline-[3px] md:text-[14.2222px] md:leading-[18.4889px] hover:outline-0"
      >
        <img
          src={props.firstSponsorImageSrc}
          alt={props.firstSponsorImageAlt}
          className="text-[15.3846px] box-border caret-transparent inline h-[23.0769px] leading-5 outline-[3px] md:text-[14.2222px] md:h-6 md:leading-[18.4889px]"
        />
      </a>
      <div className="text-[15.3846px] bg-white box-border caret-transparent shrink-0 h-[5.76923px] leading-5 min-h-[auto] min-w-[auto] outline-[3px] w-[5.76923px] rounded-[50%] md:text-[14.2222px] md:h-[5.33333px] md:leading-[18.4889px] md:w-[5.33333px]"></div>
      <a
        href={props.secondSponsorHref}
        className="relative text-[15.3846px] box-border caret-transparent block leading-5 max-w-full min-h-[auto] min-w-[auto] outline-[3px] md:text-[14.2222px] md:leading-[18.4889px] hover:outline-0"
      >
        <img
          src={props.secondSponsorImageSrc}
          alt={props.secondSponsorImageAlt}
          className="text-[15.3846px] box-border caret-transparent inline h-[21.1538px] leading-5 outline-[3px] md:text-[14.2222px] md:h-[21.3333px] md:leading-[18.4889px]"
        />
      </a>
      <div className="text-[15.3846px] bg-white box-border caret-transparent shrink-0 h-[5.76923px] leading-5 min-h-[auto] min-w-[auto] outline-[3px] w-[5.76923px] rounded-[50%] md:text-[14.2222px] md:h-[5.33333px] md:leading-[18.4889px] md:w-[5.33333px]"></div>
    </div>
  );
};