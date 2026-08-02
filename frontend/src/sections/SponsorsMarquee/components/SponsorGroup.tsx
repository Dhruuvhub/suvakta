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
    <div className="section-copy flex shrink-0 items-center gap-x-[clamp(1rem,4vw,1.45rem)] pr-[clamp(1.5rem,6vw,2.7rem)] md:gap-x-10 md:pr-10">
      <p className="mt-px font-sugar_peachy text-[clamp(1rem,4vw,1.5625rem)] leading-none md:text-[26.6667px] md:leading-[26.6667px]">
        {props.label}
      </p>
      <div className="h-[5.76923px] w-[5.76923px] shrink-0 rounded-full bg-white md:h-[5.33333px] md:w-[5.33333px]" />
      <a href={props.firstSponsorHref} className="relative block max-w-full">
        <img
          src={props.firstSponsorImageSrc}
          alt={props.firstSponsorImageAlt}
          className="inline h-[clamp(1.1rem,4vw,1.44rem)] md:h-6"
        />
      </a>
      <div className="h-[5.76923px] w-[5.76923px] shrink-0 rounded-full bg-white md:h-[5.33333px] md:w-[5.33333px]" />
      <a href={props.secondSponsorHref} className="relative block max-w-full">
        <img
          src={props.secondSponsorImageSrc}
          alt={props.secondSponsorImageAlt}
          className="inline h-[clamp(1rem,3.8vw,1.32rem)] md:h-[21.3333px]"
        />
      </a>
      <div className="h-[5.76923px] w-[5.76923px] shrink-0 rounded-full bg-white md:h-[5.33333px] md:w-[5.33333px]" />
    </div>
  );
};
