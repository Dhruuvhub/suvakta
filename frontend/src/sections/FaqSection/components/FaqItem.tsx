import { useState } from "react";

export type FaqItemProps = {
  question: string;
  answer: React.ReactNode;
};

export const FaqItem = (props: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleToggle = () => {
    if (isOpen) {
      setIsClosing(true);
      setIsOpen(false);
      setTimeout(() => setIsClosing(false), 500);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <li
      className={`group section-copy relative rounded-[7.69231px] bg-transparent pt-[13.4615px] md:rounded-[7.11111px] md:pt-[12.4444px] cursor-pointer ${isOpen ? "" : "overflow-hidden"}`}
      onClick={handleToggle}
    >
      {/* White Stripe — hover peek effect (only when closed) */}
      {!isOpen && !isClosing && (
        <div className="absolute left-[3%] right-[3%] top-0 h-10 rounded-t-[10px] bg-[#fdfdfd] border border-suvakta-900 transition-transform duration-300 translate-y-full group-hover:translate-y-[2px] z-10" />
      )}

      {/* Folder background SVG */}
      <div
        className={`absolute left-0 top-0 w-full overflow-hidden z-0 pointer-events-none ${
          isOpen ? "h-full" : "h-[calc(100%_-_23.0769px)] md:h-[calc(100%_-_21.3333px)]"
        }`}
      >
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

      {/* Expandable answer content */}
      <div
        className={`relative grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.625,0.05,0,1)] overflow-hidden z-20 ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="flex h-[100000%] flex-col overflow-hidden pt-[7.69231px] md:pt-[7.11111px]">
          <div className="px-[23.0769px] pb-[23.0769px] md:px-[21.3333px] md:pb-[21.3333px]">
            <div className="relative mt-[7.69231px] rounded-[15.3846px] border border-solid border-suvakta-900 bg-white px-[15.3846px] pb-[23.0769px] pt-[15.3846px] shadow-[rgba(0,0,0,0.15)_5.76923px_5.76923px_0px_0px] md:mt-[7.11111px] md:rounded-[14.2222px] md:px-[14.2222px] md:pb-[21.3333px] md:pt-[14.2222px] md:shadow-[rgba(0,0,0,0.15)_5.33333px_5.33333px_0px_0px]">
              {props.answer}
            </div>
          </div>
        </div>
      </div>

      {/* Question bar — always at the bottom */}
      <div className="relative z-20 flex items-center justify-between gap-4 rounded-[12.5px] border border-suvakta-900 bg-[#FFAE1C] py-[15.3846px] pl-[23.0769px] pr-[15.3846px] md:rounded-[7.11111px] md:py-[14.2222px] md:pl-[21.3333px] md:pr-[14.2222px]">
        <h3 className="min-w-0 flex-1 text-left font-bold leading-snug">
          <strong>{props.question}</strong>
        </h3>
        <div className="flex h-11 w-11 shrink-0 items-center justify-center md:h-[28.4444px] md:w-[28.4444px]">
          {isOpen ? (
            <span className="text-2xl font-bold leading-none text-suvakta-900 md:text-xl">✕</span>
          ) : (
            <img
              src="https://c.animaapp.com/mrxuckkzwKTRkk/assets/icon-31.svg"
              alt=""
              className="w-[15.3846px] md:w-[14.2222px]"
            />
          )}
        </div>
      </div>
    </li>
  );
};
