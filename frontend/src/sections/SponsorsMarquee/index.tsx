import { SponsorGroup } from "@/sections/SponsorsMarquee/components/SponsorGroup";

const MARQUEE_ITEMS = Array(8).fill("SUVAKTA - MUN CLUB");

export const SponsorsMarquee = () => {
  return (
    <section className="section-copy relative z-[2] h-[clamp(4.5rem,14vw,5.75rem)] overflow-hidden border-x-white border-b border-b-suvakta-900 border-t border-t-suvakta-900 bg-suvakta-500 text-white shadow-[rgba(0,0,0,0.15)_0px_7.69231px_0px_0px] md:h-[85.3333px] md:shadow-[rgba(0,0,0,0.15)_0px_7.11111px_0px_0px]">
      <div className="flex h-full w-max animate-marquee items-center will-change-transform motion-reduce:animate-none">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
            {MARQUEE_ITEMS.map((text, idx) => (
              <SponsorGroup key={`${copy}-${idx}`} text={text} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};


