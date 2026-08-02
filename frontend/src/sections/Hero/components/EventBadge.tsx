import { SmilingSun } from "@/components/SmilingSun";
import { SpeechBubble } from "@/components/SpeechBubble";

export const EventBadge = () => {
  return (
    <div
      data-intro="badge"
      className="section-copy pointer-events-none relative z-[5] flex w-full justify-center will-change-transform"
    >
      <div className="pointer-events-auto flex max-w-full flex-wrap items-center justify-center gap-x-[10.0962px] gap-y-2 text-[13.4615px] leading-[17.5px] md:gap-x-[10.6667px] md:text-[14.2222px] md:leading-[18.4889px]">
        <div data-sun-anchor="" className="shrink-0">
          <SmilingSun className="h-[53.8462px] w-[53.8462px] md:h-[56.8889px] md:w-[56.8889px]" />
        </div>

        <SpeechBubble>
          <p className="m-0 max-w-[min(16rem,72vw)] text-center text-[clamp(0.75rem,3.2vw,0.875rem)] font-bold leading-tight tracking-[-0.336538px] md:max-w-none md:text-left md:text-[14.2222px] md:tracking-[-0.355556px] md:leading-[12.8px]">
            9&10 October 2026 , Miranda House
          </p>
        </SpeechBubble>
      </div>
    </div>
  );
};
