export type SponsorGroupProps = {
  text?: string;
};

export const SponsorGroup = ({ text = "SUVAKTA - MUN CLUB" }: SponsorGroupProps) => {
  return (
    <div className="section-copy flex shrink-0 items-center gap-x-[clamp(1rem,3vw,1.5rem)] pr-[clamp(1rem,3vw,1.5rem)] md:gap-x-8 md:pr-8">
      <span className="font-sans font-semibold uppercase tracking-widest text-[clamp(1rem,3vw,1.25rem)] leading-none md:text-[22px] md:leading-[22px] whitespace-nowrap select-none">
        {text}
      </span>
      <div className="h-[6px] w-[6px] shrink-0 rounded-full bg-white/90 md:h-[6px] md:w-[6px]" />
    </div>
  );
};

