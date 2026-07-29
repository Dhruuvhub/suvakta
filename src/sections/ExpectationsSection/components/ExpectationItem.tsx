export type ExpectationItemProps = {
  markerClassName: string;
  children: React.ReactNode;
};

export const ExpectationItem = (props: ExpectationItemProps) => {
  return (
    <div className="relative text-[15.3846px] items-center border-b-neutral-900 box-border caret-transparent flex h-[92.3077px] justify-center leading-5 outline-[3px] border-t-white border-x-white border-b md:text-[14.2222px] md:h-[85.3333px] md:leading-[18.4889px]">
      <div
        className={`absolute text-[15.3846px] shadow-[rgba(0,0,0,0.15)_0px_-7.69231px_0px_0px] box-border caret-transparent leading-5 outline-[3px] pointer-events-none md:text-[14.2222px] md:shadow-[rgba(0,0,0,0.15)_0px_-7.11111px_0px_0px] md:leading-[18.4889px] md:w-[2560px] md:left-0 ${props.markerClassName}`}
      ></div>
      <p className="relative text-[38.4615px] box-border caret-transparent leading-[34.6154px] min-h-[auto] min-w-[auto] outline-[3px] mt-[4.80769px] font-sugar_peachy md:text-[42.6667px] md:leading-[38.4px] md:mt-[5.33333px]">
        {props.children}
      </p>
    </div>
  );
};
