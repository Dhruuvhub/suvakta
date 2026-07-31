import { ExpectationList } from "@/sections/ExpectationsSection/components/ExpectationList";

export const ExpectationsSection = () => {
  return (
    <section
      id="expectations"
      className="section-copy relative -my-[46.1538px] overflow-hidden bg-suvakta-800 py-[46.1538px] text-white md:-my-[42.6667px] md:py-[42.6667px]"
    >
      <div className="section-container">
        <div className="flex min-h-[min(430.769px,70vh)] w-full flex-col md:min-h-[398.222px] md:flex-row">
          <div className="flex w-full items-center justify-center py-[clamp(2.5rem,10vw,5.75rem)] pr-0 md:w-1/5 md:py-0 md:pr-[56.8889px]">
            <h2 className="text-center font-sugar_peachy text-[clamp(2rem,8vw,3.375rem)] leading-[1.1] md:text-[56.8889px] md:leading-[51.2px] md:max-h-[227.556px]">
              What to Expect
            </h2>
          </div>
          <ExpectationList />
        </div>
      </div>
    </section>
  );
};
