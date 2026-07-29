export type FaqItemProps = {
  question: string;
  answer: React.ReactNode;
};

export const FaqItem = (props: FaqItemProps) => {
  return (
    <li className="relative text-[15.3846px] bg-zinc-100 box-border caret-transparent leading-5 min-h-[auto] min-w-[auto] outline-[3px] pt-[13.4615px] rounded-[7.69231px] md:text-[14.2222px] md:leading-[18.4889px] md:pt-[12.4444px] md:rounded-[7.11111px]">
      <div className="absolute text-[15.3846px] box-border caret-transparent h-[calc(100%_-_23.0769px)] leading-5 outline-[3px] w-full overflow-hidden left-0 top-0 md:text-[14.2222px] md:h-[calc(100%_-_21.3333px)] md:leading-[18.4889px]">
        <img
          src="https://c.animaapp.com/mrxuckkzwKTRkk/assets/icon-29.svg"
          alt="Icon"
          className="absolute text-[15.3846px] box-border caret-transparent hidden leading-5 outline-[3px] w-full left-0 top-0 md:text-[14.2222px] md:block md:leading-[18.4889px]"
        />
        <img
          src="https://c.animaapp.com/mrxuckkzwKTRkk/assets/icon-30.svg"
          alt="Icon"
          className="absolute text-[15.3846px] box-border caret-transparent block leading-5 outline-[3px] w-full left-0 top-0 md:text-[14.2222px] md:hidden md:leading-[18.4889px]"
        />
      </div>
      <div className="relative text-[15.3846px] box-border caret-transparent grid grid-rows-[0fr] leading-5 outline-[3px] overflow-hidden md:text-[14.2222px] md:leading-[18.4889px]">
        <div className="relative text-[15.3846px] box-border caret-transparent flex flex-col h-[100000%] leading-5 min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden pt-[7.69231px] md:text-[14.2222px] md:leading-[18.4889px] md:pt-[7.11111px]">
          <div className="relative text-[15.3846px] box-border caret-transparent leading-5 min-h-[auto] min-w-[auto] outline-[3px] pb-[23.0769px] px-[23.0769px] md:text-[14.2222px] md:leading-[18.4889px] md:pb-[21.3333px] md:px-[21.3333px]">
            <div className="relative text-[15.3846px] bg-white shadow-[rgba(0,0,0,0.15)_5.76923px_5.76923px_0px_0px] box-border caret-transparent leading-5 mb-[-53.8462px] outline-[3px] rotate-[-0.9999993263990709deg] border mt-[7.69231px] pt-[15.3846px] pb-[46.1538px] px-[15.3846px] rounded-[15.3846px] border-solid md:text-[14.2222px] md:shadow-[rgba(0,0,0,0.15)_5.33333px_5.33333px_0px_0px] md:leading-[18.4889px] md:mb-[-49.7778px] md:mt-[7.11111px] md:pt-[14.2222px] md:pb-[42.6667px] md:px-[14.2222px] md:rounded-[14.2222px]">
              {props.answer}
            </div>
          </div>
        </div>
      </div>
      <div className="relative text-[15.3846px] items-center bg-amber-500 box-border caret-transparent gap-x-[15.3846px] flex justify-between leading-5 outline-[3px] gap-y-[15.3846px] border border-neutral-900 pl-[23.0769px] pr-[15.3846px] py-[15.3846px] rounded-[12.5px] border-solid md:text-[14.2222px] md:gap-x-[14.2222px] md:leading-[18.4889px] md:gap-y-[14.2222px] md:pl-[21.3333px] md:pr-[14.2222px] md:py-[14.2222px] md:rounded-[7.11111px]">
        <h3 className="text-[15.3846px] font-bold box-border caret-transparent leading-5 min-h-[auto] min-w-[auto] outline-[3px] md:text-[14.2222px] md:leading-[18.4889px]">
          <strong className="text-[15.3846px] box-border caret-transparent leading-5 outline-[3px] md:text-[14.2222px] md:leading-[18.4889px]">
            {props.question}
          </strong>
        </h3>
        <div className="text-[15.3846px] items-center box-border caret-transparent flex shrink-0 h-[30.7692px] justify-center leading-5 min-h-[auto] min-w-[auto] outline-[3px] w-[30.7692px] rounded-[50%] md:text-[14.2222px] md:h-[28.4444px] md:leading-[18.4889px] md:w-[28.4444px]">
          <img
            src="https://c.animaapp.com/mrxuckkzwKTRkk/assets/icon-31.svg"
            alt="Icon"
            className="relative text-[15.3846px] box-border caret-transparent leading-5 outline-[3px] w-[15.3846px] md:text-[14.2222px] md:leading-[18.4889px] md:w-[14.2222px]"
          />
        </div>
      </div>
    </li>
  );
};
