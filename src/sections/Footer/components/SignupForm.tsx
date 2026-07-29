export const SignupForm = () => {
  return (
    <form
      name="email-form"
      aria-label="Email Form"
      className="text-[15.3846px] box-border caret-transparent gap-x-[11.5385px] flex flex-col leading-5 min-h-[auto] min-w-[auto] outline-[3px] gap-y-[11.5385px] text-center md:text-[14.2222px] md:gap-x-[10.6667px] md:leading-[18.4889px] md:gap-y-[10.6667px] md:text-start"
    >
      <div className="text-[15.3846px] box-border caret-transparent gap-x-[11.5385px] flex flex-col leading-5 min-h-[auto] min-w-[auto] outline-[3px] gap-y-[11.5385px] text-center md:text-[14.2222px] md:gap-x-[10.6667px] md:flex-row md:leading-[18.4889px] md:gap-y-[10.6667px] md:text-start">
        <input
          name="name"
          placeholder="First Name"
          type="text"
          className="text-[15.3846px] font-bold bg-white box-border caret-transparent block h-[50px] leading-[15.3846px] min-h-[auto] min-w-[auto] outline-[3px] align-middle w-full border border-neutral-900 px-[19.2308px] py-0 rounded-[7.69231px] border-solid md:text-[14.2222px] md:h-[46.2222px] md:leading-[14.2222px] md:px-[17.7778px] md:rounded-[7.11111px]"
        />
        <input
          name="email"
          placeholder="Email"
          type="email"
          className="text-[15.3846px] font-bold bg-white box-border caret-transparent block h-[50px] leading-[15.3846px] min-h-[auto] min-w-[auto] outline-[3px] align-middle w-full border border-neutral-900 px-[19.2308px] py-0 rounded-[7.69231px] border-solid md:text-[14.2222px] md:h-[46.2222px] md:leading-[14.2222px] md:px-[17.7778px] md:rounded-[7.11111px]"
        />
      </div>
      <div className="text-[15.3846px] box-border caret-transparent leading-5 min-h-[auto] min-w-[auto] outline-[3px] text-center md:text-[14.2222px] md:leading-[18.4889px] md:text-start">
        <input
          type="submit"
          value="Get updates"
          className="text-[15.3846px] font-bold bg-orange-500 shadow-[rgba(0,0,0,0.15)_0px_3.84615px_0px_0px] box-border caret-transparent h-[50px] leading-[15.3846px] text-center text-nowrap w-full border border-neutral-900 px-[15px] py-[9px] rounded-[7.69231px] border-solid md:text-[14.2222px] md:shadow-[rgba(0,0,0,0.15)_0px_3.55556px_0px_0px] md:h-[46.2222px] md:leading-[14.2222px] md:rounded-[7.11111px]"
        />
      </div>
    </form>
  );
};
