import type { ReactNode } from "react";

type SpeechBubbleProps = {
  children: ReactNode;
  className?: string;
  "data-sun-bubble"?: string;
};

const TAIL_SRC = "https://c.animaapp.com/mrxuckkzwKTRkk/assets/icon-8.svg";

/**
 * Original FlowFest date pill — rounded orange box + icon-8 tail.
 * Width follows content (expands while typing, shrinks on backspace).
 */
export function SpeechBubble({
  children,
  className,
  ...rest
}: SpeechBubbleProps) {
  return (
    <div
      className={`relative inline-flex w-max max-w-full shrink-0 rounded-[11.7788px] border border-solid border-neutral-900 bg-orange-500 text-white md:rounded-[12.4444px] ${className ?? ""}`}
      {...rest}
    >
      <img
        src={TAIL_SRC}
        alt=""
        className="pointer-events-none absolute bottom-0 left-0 h-[10.9375px] -translate-x-[44%] translate-y-[17%] md:h-[11.5556px]"
        draggable={false}
      />
      <div className="relative z-[1] px-[10.0962px] py-[6.73077px] md:px-[10.6667px] md:py-[7.11111px]">
        {children}
      </div>
    </div>
  );
}

export default SpeechBubble;
