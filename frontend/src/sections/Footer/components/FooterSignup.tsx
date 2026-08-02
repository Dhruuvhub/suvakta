import { SignupForm } from "@/sections/Footer/components/SignupForm";

export const FooterSignup = () => {
  return (
    <div className="section-copy flex flex-col items-center justify-between gap-y-[clamp(1.75rem,6vw,2.9rem)] pb-[clamp(2rem,8vw,2.9rem)] text-center md:flex-row md:items-start md:gap-x-[42.6667px] md:gap-y-[42.6667px] md:pb-[71.1111px] md:px-[78.2222px] md:text-start">
      <div className="flex max-w-[min(100%,24rem)] flex-col items-center gap-y-4 text-center md:max-w-[355.556px] md:items-start md:gap-y-[14.2222px] md:text-start">
        <h2 className="font-sugar_peachy text-[clamp(1.75rem,8vw,3rem)] leading-[1.1] md:text-[57.7778px] md:leading-[52px]">
          See you there!
        </h2>
        <p>
          Reach out to Isabel at isabel@designsie.co.uk if you have any
          questions.
        </p>
      </div>
      <div className="flex w-full min-w-0 max-w-[min(100%,28.8rem)] flex-col text-center md:max-w-[426.667px] md:text-start">
        <SignupForm />
      </div>
    </div>
  );
};
