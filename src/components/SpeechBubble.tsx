import type { ReactNode } from "react";

type SpeechBubbleProps = {
  children: ReactNode;
  className?: string;
  "data-sun-bubble"?: string;
};

/**
 * Date pill — clean rounded message box.
 * Width follows content (expands while typing, shrinks on backspace).
 */
export function SpeechBubble({
  children,
  className,
  ...rest
}: SpeechBubbleProps) {
  return (
    <div
      className={`relative inline-flex max-w-full shrink-0 overflow-hidden rounded-[11.7788px] border border-solid border-suvakta-900 bg-suvakta-600 text-white md:rounded-[12.4444px] ${className ?? ""}`}
      {...rest}
    >
      <div className="relative z-[1] px-[10.0962px] py-[6.73077px] md:px-[10.6667px] md:py-[7.11111px]">
        {children}
      </div>
    </div>
  );
}

export default SpeechBubble;
