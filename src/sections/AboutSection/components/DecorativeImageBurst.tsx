export type DecorativeImageBurstProps = {
  variantClass: string;
  imageClass: string;
  firstImageSrc: string;
  secondImageSrc: string;
  thirdImageSrc: string;
  fourthImageSrc: string;
};

export const DecorativeImageBurst = (props: DecorativeImageBurstProps) => {
  return (
    <div
      className={`pointer-events-none absolute hidden aspect-[3/2] w-full overflow-hidden sm:flex md:aspect-[2/3] md:h-full md:w-auto ${props.variantClass}`}
    >
      <div className="absolute text-[15.3846px] items-center box-border caret-transparent flex justify-center leading-5 outline-[3px] right-[-12.5%] top-[-120%] w-[125%] md:text-[14.2222px] md:leading-[18.4889px] md:w-[200%] md:right-1/4 md:top-auto">
        <div className="text-[15.3846px] box-border caret-transparent leading-5 min-h-[auto] min-w-[auto] outline-[3px] pt-[100%] md:text-[14.2222px] md:leading-[18.4889px]"></div>
        <div className="absolute text-[15.3846px] box-border caret-transparent h-full leading-5 outline-[3px] rotate-[14.99999492786973deg] w-full md:text-[14.2222px] md:leading-[18.4889px]">
          <div className="absolute text-[15.3846px] items-center box-border caret-transparent flex h-full leading-5 outline-[3px] rotate-[155.00001874831398deg] w-full left-0 top-0 md:text-[14.2222px] md:leading-[18.4889px] md:rotate-[-65.00001874831396deg]">
            <div className="absolute right-0 w-[min(92.3077px,22vw)] rotate-[-155deg] md:w-[120.889px] md:rotate-[65deg]">
              <div className="relative text-[15.3846px] bg-white box-border caret-transparent leading-5 outline-[3px] rotate-[-14.99999492786973deg] w-full border border-suvakta-600 overflow-hidden rounded-[11.5385px] border-solid md:text-[14.2222px] md:leading-[18.4889px] md:rounded-[10.6667px]">
                <div className="text-[15.3846px] box-border caret-transparent leading-5 outline-[3px] pt-[100%] md:text-[14.2222px] md:leading-[18.4889px]"></div>
                <img
                  src={props.firstImageSrc}
                  alt=""
                  className={`absolute text-[15.3846px] box-border caret-transparent h-full leading-5 max-w-full object-cover outline-[3px] w-full left-0 top-0 md:text-[14.2222px] md:leading-[18.4889px] ${props.imageClass}`}
                />
              </div>
            </div>
          </div>
          <div className="absolute text-[15.3846px] items-center box-border caret-transparent flex h-full leading-5 outline-[3px] rotate-[108.9999837157741deg] w-full left-0 top-0 md:text-[14.2222px] md:leading-[18.4889px] md:rotate-[-18.999983715774096deg]">
            <div className="absolute text-[15.3846px] box-border caret-transparent leading-5 outline-[3px] rotate-[-108.9999837157741deg] w-[92.3077px] right-[0%] md:text-[14.2222px] md:leading-[18.4889px] md:rotate-[18.999983715774096deg] md:w-[120.889px]">
              <div className="relative text-[15.3846px] bg-white box-border caret-transparent leading-5 outline-[3px] rotate-[-14.99999492786973deg] w-full border border-suvakta-500 overflow-hidden rounded-[11.5385px] border-solid md:text-[14.2222px] md:leading-[18.4889px] md:rounded-[10.6667px]">
                <div className="text-[15.3846px] box-border caret-transparent leading-5 outline-[3px] pt-[100%] md:text-[14.2222px] md:leading-[18.4889px]"></div>
                <img
                  src={props.secondImageSrc}
                  alt=""
                  className={`absolute text-[15.3846px] box-border caret-transparent h-full leading-5 max-w-full object-cover outline-[3px] w-full left-0 top-0 md:text-[14.2222px] md:leading-[18.4889px] ${props.imageClass}`}
                />
              </div>
            </div>
          </div>
          <div className="absolute text-[15.3846px] items-center box-border caret-transparent flex h-full leading-5 outline-[3px] rotate-[71.00001628422591deg] w-full left-0 top-0 md:text-[14.2222px] md:leading-[18.4889px] md:rotate-[18.999983715774096deg]">
            <div className="absolute text-[15.3846px] box-border caret-transparent leading-5 outline-[3px] rotate-[-71.00001628422591deg] w-[92.3077px] right-[0%] md:text-[14.2222px] md:leading-[18.4889px] md:rotate-[-18.999983715774096deg] md:w-[120.889px]">
              <div className="relative text-[15.3846px] bg-white box-border caret-transparent leading-5 outline-[3px] rotate-[-14.99999492786973deg] w-full border border-suvakta-accent overflow-hidden rounded-[11.5385px] border-solid md:text-[14.2222px] md:leading-[18.4889px] md:rounded-[10.6667px]">
                <div className="text-[15.3846px] box-border caret-transparent leading-5 outline-[3px] pt-[100%] md:text-[14.2222px] md:leading-[18.4889px]"></div>
                <img
                  src={props.thirdImageSrc}
                  alt=""
                  className={`absolute text-[15.3846px] box-border caret-transparent h-full leading-5 max-w-full object-cover outline-[3px] w-full left-0 top-0 md:text-[14.2222px] md:leading-[18.4889px] ${props.imageClass}`}
                />
              </div>
            </div>
          </div>
          <div className="absolute text-[15.3846px] items-center box-border caret-transparent flex h-full leading-5 outline-[3px] rotate-[24.999981251686034deg] w-full left-0 top-0 md:text-[14.2222px] md:leading-[18.4889px] md:rotate-[65.00001874831396deg]">
            <div className="absolute text-[15.3846px] box-border caret-transparent leading-5 outline-[3px] rotate-[-24.999981251686034deg] w-[92.3077px] right-[0%] md:text-[14.2222px] md:leading-[18.4889px] md:rotate-[-65.00001874831396deg] md:w-[120.889px]">
              <div className="relative text-[15.3846px] bg-white box-border caret-transparent leading-5 outline-[3px] rotate-[-14.99999492786973deg] w-full border border-suvakta-300 overflow-hidden rounded-[11.5385px] border-solid md:text-[14.2222px] md:leading-[18.4889px] md:rounded-[10.6667px]">
                <div className="text-[15.3846px] box-border caret-transparent leading-5 outline-[3px] pt-[100%] md:text-[14.2222px] md:leading-[18.4889px]"></div>
                <img
                  src={props.fourthImageSrc}
                  alt=""
                  className={`absolute text-[15.3846px] box-border caret-transparent h-full leading-5 max-w-full object-cover outline-[3px] w-full left-0 top-0 md:text-[14.2222px] md:leading-[18.4889px] ${props.imageClass}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
