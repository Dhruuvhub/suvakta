export type FaqItemProps = {
  question: string;
  answer: React.ReactNode;
};

export const FaqItem = (props: FaqItemProps) => {
  return (
    <li className="section-copy relative overflow-hidden rounded-[7.69231px] bg-suvakta-100 pt-[13.4615px] md:rounded-[7.11111px] md:pt-[12.4444px]">
      <div className="absolute left-0 top-0 h-[calc(100%_-_23.0769px)] w-full overflow-hidden md:h-[calc(100%_-_21.3333px)]">
        <img
          src="https://c.animaapp.com/mrxuckkzwKTRkk/assets/icon-29.svg"
          alt=""
          className="absolute left-0 top-0 hidden w-full md:block"
        />
        <img
          src="https://c.animaapp.com/mrxuckkzwKTRkk/assets/icon-30.svg"
          alt=""
          className="absolute left-0 top-0 block w-full md:hidden"
        />
      </div>
      <div className="relative grid grid-rows-[0fr] overflow-hidden">
        <div className="flex h-[100000%] flex-col overflow-hidden pt-[7.69231px] md:pt-[7.11111px]">
          <div className="px-[23.0769px] pb-[23.0769px] md:px-[21.3333px] md:pb-[21.3333px]">
            <div className="relative mt-[7.69231px] rotate-[-1deg] rounded-[15.3846px] border border-solid bg-white px-[15.3846px] pb-[46.1538px] pt-[15.3846px] shadow-[rgba(0,0,0,0.15)_5.76923px_5.76923px_0px_0px] md:mt-[7.11111px] md:rounded-[14.2222px] md:px-[14.2222px] md:pb-[42.6667px] md:pt-[14.2222px] md:shadow-[rgba(0,0,0,0.15)_5.33333px_5.33333px_0px_0px]">
              {props.answer}
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex items-center justify-between gap-4 rounded-[12.5px] border border-suvakta-900 bg-suvakta-500 py-[15.3846px] pl-[23.0769px] pr-[15.3846px] md:rounded-[7.11111px] md:py-[14.2222px] md:pl-[21.3333px] md:pr-[14.2222px]">
        <h3 className="min-w-0 flex-1 text-left font-bold leading-snug">
          <strong>{props.question}</strong>
        </h3>
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full md:h-[28.4444px] md:w-[28.4444px]">
          <img
            src="https://c.animaapp.com/mrxuckkzwKTRkk/assets/icon-31.svg"
            alt=""
            className="w-[15.3846px] md:w-[14.2222px]"
          />
        </div>
      </div>
    </li>
  );
};
