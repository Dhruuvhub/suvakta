export const SignupForm = () => {
  return (
    <form
      name="email-form"
      aria-label="Email Form"
      className="section-copy flex w-full flex-col gap-y-[11.5385px] md:gap-y-[10.6667px]"
    >
      <div className="flex w-full flex-col gap-y-[11.5385px] md:flex-row md:gap-x-[10.6667px] md:gap-y-[10.6667px]">
        <input
          name="name"
          placeholder="First Name"
          type="text"
          className="block h-12 w-full rounded-[7.69231px] border border-suvakta-900 bg-white px-5 text-[15.3846px] font-bold leading-[15.3846px] md:h-[46.2222px] md:rounded-[7.11111px] md:px-[17.7778px] md:text-[14.2222px] md:leading-[14.2222px]"
        />
        <input
          name="email"
          placeholder="Email"
          type="email"
          className="block h-12 w-full rounded-[7.69231px] border border-suvakta-900 bg-white px-5 text-[15.3846px] font-bold leading-[15.3846px] md:h-[46.2222px] md:rounded-[7.11111px] md:px-[17.7778px] md:text-[14.2222px] md:leading-[14.2222px]"
        />
      </div>
      <div className="w-full">
        <input
          type="submit"
          value="Get updates"
          className="h-12 w-full cursor-pointer rounded-[7.69231px] border border-suvakta-900 bg-suvakta-600 px-[15px] py-[9px] text-[15.3846px] font-bold leading-[15.3846px] shadow-[rgba(0,0,0,0.15)_0px_3.84615px_0px_0px] md:h-[46.2222px] md:rounded-[7.11111px] md:text-[14.2222px] md:leading-[14.2222px] md:shadow-[rgba(0,0,0,0.15)_0px_3.55556px_0px_0px]"
        />
      </div>
    </form>
  );
};
