import { useRef, useEffect } from "react";
import gsap from "gsap";

export type SpeakerCardProps = {
  className?: string;
  category: string;
  imageUrl: string;
  speakerName: string;
  description: React.ReactNode;
};

export const SpeakerCard = (props: SpeakerCardProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const tag = tagRef.current;
    if (!container || !tag) return;

    // Use quickTo for performant tracking
    const xTo = gsap.quickTo(tag, "x", { duration: 0.4, ease: "power3.out" });
    const yTo = gsap.quickTo(tag, "y", { duration: 0.4, ease: "power3.out" });

    // Base centering is handled by CSS left: 50% and GSAP xPercent: -50
    gsap.set(tag, { xPercent: -50, x: 0, y: 0 });

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      // tag.offsetLeft/Top give the base un-transformed CSS position
      const originX = tag.offsetLeft - (tag.offsetWidth / 2);
      const originY = tag.offsetTop;

      // Target position: cursor + slight offset to bottom-right
      const x = (mouseX + 16) - originX;
      const y = (mouseY + 24) - originY;

      xTo(x);
      yTo(y);
    };

    const handleMouseLeave = () => {
      // Release magnetic pull, return to CSS base position
      xTo(0);
      yTo(0);
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      className={`section-copy relative w-full min-w-0 ${props.className ?? ""}`}
    >
      <div className="relative flex w-full flex-col items-center">
        <div className="relative z-[2] mb-[-21.1538px] flex h-[42.3077px] items-center justify-center rounded-[7.69231px] border border-suvakta-900 bg-white px-[15.3846px] md:mb-[-19.5556px] md:h-[39.1111px] md:px-[14.2222px] md:rounded-[7.11111px]">
          <span className="text-center font-bold">{props.category}</span>
        </div>
        <div className="relative w-full">
          {/* Hanging strings */}
          <div className="absolute bottom-full left-0 z-0 h-[150vh] w-[1px] bg-suvakta-900/15" />
          <div className="absolute bottom-full right-0 z-0 h-[150vh] w-[1px] bg-suvakta-900/15" />
          <div className="absolute top-full left-0 z-0 h-[150vh] w-[1px] bg-suvakta-900/15" />
          <div className="absolute top-full right-0 z-0 h-[150vh] w-[1px] bg-suvakta-900/15" />
          <div className="absolute left-0 top-0 z-[1] h-[17.3077px] w-[17.3077px] -translate-x-1/2 -translate-y-1/2 border border-suvakta-900 bg-white md:h-4 md:w-4" />
          <div className="absolute left-full top-0 z-[1] h-[17.3077px] w-[17.3077px] -translate-x-1/2 -translate-y-1/2 border border-suvakta-900 bg-white md:h-4 md:w-4" />
          <div className="absolute left-0 top-full z-[1] h-[17.3077px] w-[17.3077px] -translate-x-1/2 -translate-y-1/2 border border-suvakta-900 bg-white md:h-4 md:w-4" />
          <div className="absolute left-full top-full z-[1] h-[17.3077px] w-[17.3077px] -translate-x-1/2 -translate-y-1/2 border border-suvakta-900 bg-white md:h-4 md:w-4" />
          
          <div
            ref={containerRef}
            className="relative border border-suvakta-900 bg-white shadow-[rgba(0,0,0,0.15)_5.76923px_5.76923px_0px_0px] md:shadow-[rgba(0,0,0,0.15)_5.33333px_5.33333px_0px_0px]"
            style={{ cursor: "url('https://c.animaapp.com/mrxuckkzwKTRkk/assets/icon-28.svg'), pointer" }}
          >
            <div className="pt-[112.5%]" />
            <img
              src={props.imageUrl}
              alt={props.speakerName}
              className="pointer-events-none absolute left-0 top-0 h-full w-full max-w-full object-cover"
            />
            
            {/* The single magnetic tag */}
            <div
              ref={tagRef}
              className="pointer-events-none absolute bottom-[15.3846px] left-1/2 z-[10] flex h-[34.6154px] items-center justify-center rounded-[19.2308px] border-2 border-solid border-suvakta-900 bg-[#EE7A43] px-[11.5385px] text-white md:bottom-[14.2222px] md:h-8 md:px-[10.6667px] md:rounded-[17.7778px]"
            >
              <span className="font-bold">{props.speakerName}</span>
            </div>
          </div>
        </div>
        <div className="mt-[-1.92308px] w-[calc(100%_-_46.1538px)] border border-suvakta-900 bg-white px-[15.3846px] py-[19.2308px] text-center md:mt-[-1.77778px] md:w-[calc(100%_-_42.6667px)] md:px-[14.2222px] md:py-[17.7778px]">
          <p className="text-[clamp(0.9375rem,2.8vw,1.02rem)] leading-relaxed md:text-[15.1111px] md:leading-[19.6444px]">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
};
