export type ExpectationItemProps = {
  markerClassName: string;
  children: React.ReactNode;
};

export const ExpectationItem = (props: ExpectationItemProps) => {
  return (
    <div className="section-copy relative flex h-[clamp(4.5rem,14vw,5.75rem)] items-center justify-center overflow-hidden border-b border-b-suvakta-900 md:h-[85.3333px]">
      <div
        className={`pointer-events-none absolute shadow-[rgba(0,0,0,0.15)_0px_-7.69231px_0px_0px] md:shadow-[rgba(0,0,0,0.15)_0px_-7.11111px_0px_0px] ${props.markerClassName}`}
      />
      <p className="relative mt-1 text-center font-sugar_peachy text-[clamp(1.5rem,6vw,2.4rem)] leading-[1.1] md:text-[42.6667px] md:leading-[38.4px] md:mt-[5.33333px]">
        {props.children}
      </p>
    </div>
  );
};
