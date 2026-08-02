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
      className={`section-copy relative w-full min-w-0 ${props.className ?? ""}`}
    >
      <div className="relative flex w-full flex-col items-center">
        <div className="relative z-[2] mb-[-21.1538px] flex h-[42.3077px] items-center justify-center rounded-[7.69231px] border border-suvakta-900 bg-white px-[15.3846px] md:mb-[-19.5556px] md:h-[39.1111px] md:px-[14.2222px] md:rounded-[7.11111px]">
          <span className="text-center font-bold">{props.category}</span>
        </div>
        <div className="relative w-full">
          <div className="absolute left-0 top-0 z-[1] h-[17.3077px] w-[17.3077px] -translate-x-1/2 -translate-y-1/2 border border-suvakta-900 bg-white md:h-4 md:w-4" />
          <div className="absolute left-full top-0 z-[1] h-[17.3077px] w-[17.3077px] -translate-x-1/2 -translate-y-1/2 border border-suvakta-900 bg-white md:h-4 md:w-4" />
          <div className="absolute left-0 top-full z-[1] h-[17.3077px] w-[17.3077px] -translate-x-1/2 -translate-y-1/2 border border-suvakta-900 bg-white md:h-4 md:w-4" />
          <div className="absolute left-full top-full z-[1] h-[17.3077px] w-[17.3077px] -translate-x-1/2 -translate-y-1/2 border border-suvakta-900 bg-white md:h-4 md:w-4" />
          <div className="relative overflow-hidden border border-suvakta-900 bg-white shadow-[rgba(0,0,0,0.15)_5.76923px_5.76923px_0px_0px] md:shadow-[rgba(0,0,0,0.15)_5.33333px_5.33333px_0px_0px]">
            <div className="pt-[112.5%]" />
            <img
              src={props.imageUrl}
              alt={props.speakerName}
              className="pointer-events-none absolute left-0 top-0 h-full w-full max-w-full object-cover"
            />
          </div>
          <div className="absolute inset-[15.3846px] flex flex-col items-center justify-end md:inset-[14.2222px]">
            <div className="pointer-events-none relative z-[5] flex h-[34.6154px] items-center justify-center rounded-[19.2308px] border border-solid bg-suvakta-600 px-[11.5385px] text-white md:h-8 md:px-[10.6667px] md:rounded-[17.7778px]">
              <img
                src="https://c.animaapp.com/mrxuckkzwKTRkk/assets/icon-28.svg"
                alt=""
                className="absolute left-0 top-0 w-[21.1538px] -translate-x-3/4 -translate-y-3/4 md:w-[19.5556px]"
              />
              <span className="font-bold">{props.speakerName}</span>
            </div>
          </div>
        </div>
        <div className="mt-[-1.92308px] w-[calc(100%_-_46.1538px)] border border-suvakta-900 bg-white px-[15.3846px] py-[19.2308px] text-center md:mt-[-1.77778px] md:w-[calc(100%_-_42.6667px)] md:px-[14.2222px] md:py-[17.7778px]">
          <p className="text-[clamp(0.9375rem,2.8vw,1.02rem)] leading-relaxed md:text-[15.1111px] md:leading-[19.6444px]">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
};
