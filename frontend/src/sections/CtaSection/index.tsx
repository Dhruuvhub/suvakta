export const CtaSection = () => {
  return (
    <section className="section-copy relative -mt-[clamp(2rem,12vw,3.8rem)] bg-suvakta-50 pb-[clamp(3.5rem,12vw,5.75rem)] md:mt-0 md:pb-[142.222px]">
      <div className="section-container">
        <div className="relative flex flex-col items-center justify-center gap-y-[clamp(1.25rem,4vw,1.45rem)] overflow-hidden rounded-[46.1538px] border-suvakta-900 bg-suvakta-600 pt-[clamp(5rem,22vw,9.6rem)] pb-[clamp(3.5rem,14vw,6.7rem)] text-white shadow-[rgba(0,0,0,0.15)_0px_7.69231px_0px_0px] md:gap-y-[21.3333px] md:rounded-[64px] md:pt-[156.444px] md:pb-[71.1111px] md:shadow-[rgba(0,0,0,0.15)_0px_7.11111px_0px_0px]">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <img
              src="https://c.animaapp.com/mrxuckkzwKTRkk/assets/icon-32.svg"
              alt=""
              className="absolute bottom-0 left-0 w-[min(140%,100vw)] -translate-x-[10%] translate-y-[21%] md:w-[70%] md:-translate-x-[13%]"
            />
          </div>
          <div className="pointer-events-none absolute inset-0 -scale-100 overflow-hidden">
            <img
              src="https://c.animaapp.com/mrxuckkzwKTRkk/assets/icon-32.svg"
              alt=""
              className="absolute bottom-0 left-0 w-[min(140%,100vw)] -translate-x-[10%] translate-y-[21%] md:w-[70%] md:-translate-x-[13%]"
            />
          </div>
          <div className="relative flex w-full max-w-[707.692px] flex-col items-center justify-center gap-y-[clamp(1.25rem,4vw,1.45rem)] px-4 text-center md:max-w-[654.222px] md:gap-y-[35.5556px] md:px-[56.8889px]">
            <h2 className="font-sugar_peachy text-[clamp(1.75rem,7vw,3.125rem)] leading-[1.1] md:text-[57.7778px] md:leading-[52px]">
              Get Your Ticket for the Community-Led Event of the Year
            </h2>
            <p className="max-w-[40rem]">
              As web designers and developers, this is the kind of event we
              desperately wanted, so we created it. No stuffy conference rooms,
              no dull corporate halls, just a lovely community sharing knowledge
              with a pint and a burger in hand.
            </p>
            <div className="flex w-full justify-center md:justify-start">
              <a
                href="#"
                className="relative flex h-11 min-h-11 w-full max-w-[18rem] items-center justify-center rounded-[153.846px] border border-suvakta-900 bg-white px-6 text-suvakta-900 shadow-[rgba(0,0,0,0.15)_0px_3.84615px_0px_0px] hover:shadow-[rgba(0,0,0,0.5)_0px_0px_0px_0px] md:h-[39.1111px] md:max-w-none md:rounded-[142.222px] md:shadow-[rgba(0,0,0,0.15)_0px_3.55556px_0px_0px]"
              >
                <span className="text-[clamp(0.875rem,2.5vw,1.08rem)] font-bold tracking-[-0.173077px] md:text-[14.2222px] md:tracking-[-0.142222px]">
                  Buy Tickets
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
