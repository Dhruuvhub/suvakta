export type SpeakerCardProps = {
  className?: string;
  category: string;
  imageUrl: string;
  speakerName: string;
  description: React.ReactNode;
};

export const SpeakerCard = (props: SpeakerCardProps) => {
  return (
    <div
      className={`relative text-[15.3846px] box-border caret-transparent leading-5 min-h-[auto] min-w-[auto] outline-[3px] w-full md:text-[14.2222px] md:leading-[18.4889px] md:w-[calc(33.33%_-_35.5556px)] ${props.className ?? ""}`}
    >
      <div className="relative text-[15.3846px] items-center box-border caret-transparent flex flex-col leading-5 outline-[3px] w-full md:text-[14.2222px] md:leading-[18.4889px]">
        <div className="relative text-[15.3846px] items-center bg-white box-border caret-transparent flex h-[42.3077px] justify-center leading-5 mb-[-21.1538px] min-h-[auto] min-w-[auto] outline-[3px] z-[2] border border-neutral-900 px-[15.3846px] rounded-[7.69231px] border-solid md:text-[14.2222px] md:h-[39.1111px] md:leading-[18.4889px] md:mb-[-19.5556px] md:px-[14.2222px] md:rounded-[7.11111px]">
          <span className="text-[15.3846px] font-bold box-border caret-transparent block leading-5 min-h-[auto] min-w-[auto] outline-[3px] text-center md:text-[14.2222px] md:leading-[18.4889px]">
            {props.category}
          </span>
        </div>
        <div className="relative text-[15.3846px] box-border caret-transparent leading-5 min-h-[auto] min-w-[auto] outline-[3px] w-full md:text-[14.2222px] md:leading-[18.4889px]">
          <div className="absolute text-[15.3846px] bg-white box-border caret-transparent h-[17.3077px] leading-5 outline-[3px] pointer-events-none translate-x-[-50.0%] translate-y-[-50.0%] w-[17.3077px] z-[1] border border-neutral-900 border-solid left-0 top-0 md:text-[14.2222px] md:h-4 md:leading-[18.4889px] md:w-4"></div>
          <div className="absolute text-[15.3846px] bg-white box-border caret-transparent h-[17.3077px] leading-5 outline-[3px] pointer-events-none translate-x-[-50.0%] translate-y-[-50.0%] w-[17.3077px] z-[1] border border-neutral-900 border-solid left-full top-0 md:text-[14.2222px] md:h-4 md:leading-[18.4889px] md:w-4"></div>
          <div className="absolute text-[15.3846px] bg-white box-border caret-transparent h-[17.3077px] leading-5 outline-[3px] pointer-events-none translate-x-[-50.0%] translate-y-[-50.0%] w-[17.3077px] z-[1] border border-neutral-900 border-solid left-0 top-full md:text-[14.2222px] md:h-4 md:leading-[18.4889px] md:w-4"></div>
          <div className="absolute text-[15.3846px] bg-white box-border caret-transparent h-[17.3077px] leading-5 outline-[3px] pointer-events-none translate-x-[-50.0%] translate-y-[-50.0%] w-[17.3077px] z-[1] border border-neutral-900 border-solid left-full top-full md:text-[14.2222px] md:h-4 md:leading-[18.4889px] md:w-4"></div>
          <div className="relative text-[15.3846px] bg-white shadow-[rgba(0,0,0,0.15)_5.76923px_5.76923px_0px_0px] box-border caret-transparent leading-5 outline-[3px] border border-neutral-900 overflow-hidden border-solid md:text-[14.2222px] md:shadow-[rgba(0,0,0,0.15)_5.33333px_5.33333px_0px_0px] md:leading-[18.4889px]">
            <div className="text-[15.3846px] box-border caret-transparent leading-5 outline-[3px] pt-[112.5%] md:text-[14.2222px] md:leading-[18.4889px]"></div>
            <img
              src={props.imageUrl}
              alt=""
              sizes="70px"
              className="absolute text-[15.3846px] box-border caret-transparent h-full leading-5 max-w-full object-cover outline-[3px] pointer-events-none w-full left-0 top-0 md:text-[14.2222px] md:leading-[18.4889px]"
            />
          </div>
          <div className="absolute text-[15.3846px] items-center box-border caret-transparent flex flex-col justify-end leading-5 outline-[3px] inset-[15.3846px] md:text-[14.2222px] md:leading-[18.4889px] md:inset-[14.2222px]">
            <div className="absolute text-white text-[15.3846px] items-center bg-orange-500 box-border caret-transparent flex h-[34.6154px] justify-center leading-5 outline-[3px] pointer-events-none z-[5] border px-[11.5385px] rounded-[19.2308px] border-solid md:text-[14.2222px] md:h-8 md:leading-[18.4889px] md:px-[10.6667px] md:rounded-[17.7778px]">
              <img
                src="https://c.animaapp.com/mrxuckkzwKTRkk/assets/icon-28.svg"
                alt="Icon"
                className="absolute text-[15.3846px] box-border caret-transparent leading-5 outline-[3px] translate-x-[-75.0%] translate-y-[-75.0%] w-[21.1538px] left-0 top-0 md:text-[14.2222px] md:leading-[18.4889px] md:w-[19.5556px]"
              />
              <span className="text-[15.3846px] font-bold box-border caret-transparent block leading-5 min-h-[auto] min-w-[auto] outline-[3px] md:text-[14.2222px] md:leading-[18.4889px]">
                {props.speakerName}
              </span>
            </div>
          </div>
        </div>
        <div className="text-[15.3846px] bg-white box-border caret-transparent leading-5 mt-[-1.92308px] min-h-[auto] min-w-[auto] outline-[3px] text-center w-[calc(100%_-_46.1538px)] border border-neutral-900 px-[15.3846px] py-[19.2308px] border-solid md:text-[14.2222px] md:leading-[18.4889px] md:mt-[-1.77778px] md:w-[calc(100%_-_42.6667px)] md:px-[14.2222px] md:py-[17.7778px]">
          <p className="text-[16.3462px] box-border caret-transparent leading-[21.25px] outline-[3px] md:text-[15.1111px] md:leading-[19.6444px]">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
};
