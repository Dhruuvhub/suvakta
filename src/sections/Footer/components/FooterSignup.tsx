import { SignupForm } from "@/sections/Footer/components/SignupForm";

export const FooterSignup = () => {
  return (
    <div className="text-[15.3846px] items-center box-border caret-transparent gap-x-[46.1538px] flex flex-col justify-between leading-5 outline-[3px] gap-y-[46.1538px] text-center pb-[46.1538px] px-0 md:text-[14.2222px] md:[align-items:normal] md:gap-x-[42.6667px] md:flex-row md:leading-[18.4889px] md:gap-y-[42.6667px] md:text-start md:pb-[71.1111px] md:px-[78.2222px]">
      <div className="text-[15.3846px] items-center box-border caret-transparent gap-x-[15.3846px] flex flex-col leading-5 max-w-[384.615px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-[15.3846px] text-center md:text-[14.2222px] md:items-start md:gap-x-[14.2222px] md:leading-[18.4889px] md:max-w-[355.556px] md:gap-y-[14.2222px] md:text-start">
        <h2 className="text-[48.0769px] items-center box-border caret-transparent flex flex-col leading-[43.2692px] max-w-[480.769px] min-h-[auto] min-w-[auto] outline-[3px] text-center font-sugar_peachy md:text-[57.7778px] md:leading-[52px] md:max-w-[577.778px] md:text-left">
          See you there!
        </h2>
        <p className="text-[15.3846px] box-border caret-transparent leading-5 min-h-[auto] min-w-[auto] outline-[3px] text-center md:text-[14.2222px] md:leading-[18.4889px] md:text-start">
          Reach out to Isabel at isabel@designsie.co.uk if you have any
          questions.
        </p>
      </div>
      <div className="text-[15.3846px] box-border caret-transparent flex flex-col leading-5 min-h-[auto] min-w-[auto] outline-[3px] text-center w-[min(461.538px,100%)] md:text-[14.2222px] md:leading-[18.4889px] md:text-start md:w-[min(426.667px,100%)]">
        <div className="text-[15.3846px] box-border caret-transparent gap-x-[11.5385px] flex flex-col leading-5 min-h-[auto] min-w-[auto] outline-[3px] gap-y-[11.5385px] text-center w-full mb-[15px] md:text-[14.2222px] md:gap-x-[10.6667px] md:leading-[18.4889px] md:gap-y-[10.6667px] md:text-start">
          <SignupForm />
          <div
            role="region"
            aria-label="Email Form success"
            className="relative text-[15.3846px] bg-white shadow-[rgba(0,0,0,0.15)_0px_5.76923px_0px_0px] box-border caret-transparent hidden leading-5 outline-[3px] text-center w-full border border-neutral-900 px-[23.0769px] py-[46.1538px] rounded-[7.69231px] border-solid md:text-[14.2222px] md:shadow-[rgba(0,0,0,0.15)_0px_5.33333px_0px_0px] md:leading-[18.4889px] md:px-[21.3333px] md:py-[42.6667px] md:rounded-[7.11111px]"
          >
            <div className="text-[15.3846px] font-bold box-border caret-transparent leading-5 outline-[3px] md:text-[14.2222px] md:leading-[18.4889px]">
              Thank you! Your submission has been received!
            </div>
          </div>
          <div
            role="region"
            aria-label="Email Form failure"
            className="relative text-[15.3846px] bg-rose-900 shadow-[rgba(0,0,0,0.15)_0px_5.76923px_0px_0px] box-border caret-transparent hidden leading-5 outline-[3px] text-center w-full border border-neutral-900 px-[23.0769px] py-[15.3846px] rounded-[7.69231px] border-solid md:text-[14.2222px] md:shadow-[rgba(0,0,0,0.15)_0px_5.33333px_0px_0px] md:leading-[18.4889px] md:text-start md:px-[21.3333px] md:py-[14.2222px] md:rounded-[7.11111px]"
          >
            <div className="text-white text-[13.4615px] font-bold box-border caret-transparent leading-[17.5px] outline-[3px] text-center md:text-[12.4444px] md:leading-[16.1778px]">
              Oops! Something went wrong while submitting the form.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};