export type CommunityMemberCardProps = {
  imageUrl: string;
  name: string;
};

export const CommunityMemberCard = (props: CommunityMemberCardProps) => {
  return (
    <div className="section-copy w-[calc(50%_-_7.69231px)] min-w-[9.5rem] md:w-[calc(33.33%_-_9.48149px)]">
      <div className="relative w-full overflow-hidden rounded-[23.0769px] border border-suvakta-900 bg-white md:rounded-[21.3333px]">
        <div className="pt-[110%]" />
        <img
          src={props.imageUrl}
          alt={props.name}
          sizes="(max-width: 479px) 50vw, 256.5px"
          className="pointer-events-none absolute left-0 top-0 h-full w-full max-w-full object-cover"
        />
        <div className="absolute bottom-[11.5385px] left-[11.5385px] flex w-[calc(100%_-_23.0769px)] items-center justify-center rounded-[61.5385px] border border-suvakta-900 bg-white py-[7.69231px] md:bottom-[14.2222px] md:left-[14.2222px] md:w-[calc(100%_-_28.4444px)] md:rounded-[56.8889px] md:p-[7.11111px]">
          <span className="text-center text-[clamp(0.8125rem,2.5vw,0.9rem)] font-bold md:text-[13.3333px] md:leading-[13.3333px]">
            {props.name}
          </span>
        </div>
      </div>
    </div>
  );
};
