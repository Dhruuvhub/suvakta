import { ExpectationList } from "@/sections/ExpectationsSection/components/ExpectationList";

export const ExpectationsSection = () => {
  return (
    <section className="relative text-white text-[15.3846px] bg-neutral-900 box-border caret-transparent leading-5 mb-[-46.1538px] mt-[-46.1538px] outline-[3px] py-[46.1538px] md:text-[14.2222px] md:leading-[18.4889px] md:mb-[-42.6667px] md:mt-[-42.6667px] md:py-[42.6667px]">
      <div className="text-[15.3846px] box-border caret-transparent leading-5 max-w-[375px] outline-[3px] mx-auto px-[15.3846px] md:text-[14.2222px] md:leading-[18.4889px] md:max-w-screen-xl md:px-[56.8889px]">
        <div className="text-[15.3846px] box-border caret-transparent flex flex-col leading-5 min-h-[430.769px] outline-[3px] w-full md:text-[14.2222px] md:flex-row md:leading-[18.4889px] md:min-h-[398.222px]">
          <div className="text-[15.3846px] items-center box-border caret-transparent flex justify-center leading-5 min-h-[auto] min-w-[auto] outline-[3px] w-full pr-[15.3846px] py-[92.3077px] md:text-[14.2222px] md:leading-[18.4889px] md:w-1/5 md:pr-[56.8889px] md:py-0">
            <h2 className="relative text-[53.8462px] items-center box-border caret-transparent leading-[48.4615px] max-h-[215.385px] min-h-[auto] min-w-[auto] outline-[3px] text-center font-sugar_peachy md:text-[56.8889px] md:[align-items:normal] md:leading-[51.2px] md:max-h-[227.556px]">
              What to Expect
            </h2>
          </div>
          <ExpectationList />
        </div>
      </div>
    </section>
  );
};
