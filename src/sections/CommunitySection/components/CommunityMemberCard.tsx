export type CommunityMemberCardProps = {
  imageUrl: string;
  name: string;
};

export const CommunityMemberCard = (props: CommunityMemberCardProps) => {
  return (
    <div className="text-[15.3846px] box-border caret-transparent flex leading-5 min-h-[auto] min-w-[auto] outline-[3px] w-[calc(49.995%_-_7.69231px)] md:text-[14.2222px] md:leading-[18.4889px] md:w-[calc(33.33%_-_9.48149px)]">
      <div className="relative text-[15.3846px] bg-white box-border caret-transparent leading-5 min-h-[auto] min-w-[auto] outline-[3px] w-full border border-neutral-900 overflow-hidden rounded-[23.0769px] border-solid md:text-[14.2222px] md:leading-[18.4889px] md:rounded-[21.3333px]">
        <div className="text-[15.3846px] box-border caret-transparent leading-5 outline-[3px] pt-[110%] md:text-[14.2222px] md:leading-[18.4889px]"></div>
        <img
          src={props.imageUrl}
          alt=""
          sizes="(max-width: 479px) 100vw, 256.5px"
          className="absolute text-[15.3846px] box-border caret-transparent h-full leading-5 max-w-full object-cover outline-[3px] pointer-events-none w-full left-0 top-0 md:text-[14.2222px] md:leading-[18.4889px]"
        />
        <div className="absolute text-[15.3846px] items-center bg-white box-border caret-transparent flex justify-center leading-5 outline-[3px] w-[calc(100%_-_23.0769px)] border border-neutral-900 px-0 py-[7.69231px] rounded-[61.5385px] border-solid left-[11.5385px] bottom-[11.5385px] md:text-[14.2222px] md:leading-[18.4889px] md:w-[calc(100%_-_28.4444px)] md:p-[7.11111px] md:rounded-[56.8889px] md:left-[14.2222px] md:bottom-[14.2222px]">
          <span className="text-[14.4231px] font-bold box-border caret-transparent block leading-[14.4231px] min-h-[auto] min-w-[auto] outline-[3px] text-center md:text-[13.3333px] md:leading-[13.3333px]">
            {props.name}
          </span>
        </div>
      </div>
    </div>
  );
};