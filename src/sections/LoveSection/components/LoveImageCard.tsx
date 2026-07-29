export type LoveImageCardProps = {
  imageUrl: string;
  containerVariant: string;
};

export const LoveImageCard = (props: LoveImageCardProps) => {
  return (
    <div
      className={`relative text-[15.3846px] bg-white shadow-[rgba(0,0,0,0.15)_0px_7.69231px_0px_0px] box-border caret-transparent leading-5 min-h-[auto] min-w-[auto] outline-[3px] w-[min(430.769px,100%)] border border-neutral-900 overflow-hidden rounded-[46.1538px] border-solid md:text-[14.2222px] md:shadow-[rgba(0,0,0,0.15)_0px_7.11111px_0px_0px] md:leading-[18.4889px] md:w-[min(540.444px,100%)] md:rounded-[42.6667px] ${props.containerVariant}`}
    >
      <div className="text-[15.3846px] box-border caret-transparent leading-5 outline-[3px] pt-[59.25%] md:text-[14.2222px] md:leading-[18.4889px]"></div>
      <img
        src={props.imageUrl}
        sizes="(max-width: 991px) 100vw, 912px"
        alt=""
        className="absolute text-[15.3846px] box-border caret-transparent h-full leading-5 max-w-full object-cover outline-[3px] pointer-events-none w-full left-0 top-0 md:text-[14.2222px] md:leading-[18.4889px]"
      />
    </div>
  );
};
