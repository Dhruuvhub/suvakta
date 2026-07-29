import { SmilingSun } from "@/components/SmilingSun";
import { SpeechBubble } from "@/components/SpeechBubble";

export const EventBadge = () => {
  return (
    <div
      data-intro="badge"
      className="relative z-[5] flex w-full justify-center text-[15.3846px] leading-5 outline-[3px] pointer-events-none will-change-transform md:text-[14.2222px] md:leading-[18.4889px]"
    >
      <div className="flex items-center gap-x-[10.0962px] text-[13.4615px] leading-[17.5px] outline-[3px] pointer-events-auto md:gap-x-[10.6667px] md:text-[14.2222px] md:leading-[18.4889px]">
        <div data-sun-anchor="" className="shrink-0">
          <SmilingSun className="h-[53.8462px] w-[53.8462px] md:h-[56.8889px] md:w-[56.8889px]" />
        </div>

        <SpeechBubble>
          <p className="m-0 text-[13.4615px] font-bold tracking-[-0.336538px] leading-[12.1154px] text-nowrap outline-[3px] md:text-[14.2222px] md:tracking-[-0.355556px] md:leading-[12.8px]">
            9&10 October 2026 , Miranda House
          </p>
        </SpeechBubble>
      </div>
    </div>
  );
};
