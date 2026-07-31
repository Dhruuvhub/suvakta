export const FloatingBadge = () => {
  return (
    <div className="pointer-events-none fixed bottom-4 left-4 z-[100] h-[61.5385px] w-[61.5385px] -translate-x-[200%] md:bottom-[28.4444px] md:left-[18.4444px] md:h-[56.8889px] md:w-[56.8889px]">
      <div className="absolute left-0 top-0 flex items-center">
        <div className="relative flex h-[53.8462px] w-[53.8462px] shrink-0 items-center justify-center md:h-[56.8889px] md:w-[56.8889px]">
          <img
            src="https://c.animaapp.com/mvsuckzw8TRk/assets/icon-2.svg"
            alt=""
            className="w-full"
          />
          <img
            src="https://c.animaapp.com/mvsuckzw8TRk/assets/icon-3.svg"
            alt=""
            className="absolute left-1/2 top-1/2 w-1/12 -translate-x-[8.43289px] -translate-y-[13.5682px] md:-translate-x-[8.88716px] md:-translate-y-[12.798px]"
          />
        </div>
      </div>
      <div className="invisible relative rounded-[11.7788px] border border-solid bg-suvakta-600 px-[10.4962px] py-[6.73077px] text-white opacity-0 md:rounded-[12.4444px] md:px-[10.6667px] md:py-[7.11111px]">
        <p className="font-bold tracking-[-0.334615px] md:tracking-[-0.355556px]">
          ...
        </p>
      </div>
    </div>
  );
};
