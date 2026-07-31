import { FaqItem } from "@/sections/FaqSection/components/FaqItem";

export const FaqList = () => {
  return (
    <div className="section-copy order-2 w-full min-w-0 md:order-none md:w-[min(540.444px,100%)]">
      <ul className="flex list-none flex-col gap-y-[15.3846px] pl-0 md:gap-y-[14.2222px]">
        <FaqItem
          question="Can I have a discount?"
          answer={
            <p className="text-[clamp(0.8125rem,2.5vw,0.84rem)] leading-relaxed md:text-[12.4444px] md:leading-[18.6667px]">
              FlowFest is a <strong>non-profit</strong> event, and our goal is to
              make FlowFest as affordable as we possibly can whilst delivering a
              quality day that you&apos;ll never forget. Due to last year&apos;s
              feedback we are investing more in comfort and quality this year. To
              keep ticket prices as low as we can for everyone, we are unable to
              offer discounts and appreciate your support for this community
              event.
            </p>
          }
        />
        <FaqItem
          question="How do I get there?"
          answer={
            <p className="text-[clamp(0.8125rem,2.5vw,0.84rem)] leading-relaxed md:text-[12.4444px] md:leading-[18.6667px]">
              FlowFest is hosted in <strong>Media City Gardens</strong> (you&apos;ll
              find it by searching the Blue Peter Garden on Google Maps), which is
              an outdoor venue. It&apos;s directly in front of Media City tram
              stop, which is a great way to get to the venue if you&apos;re
              travelling from the city centre or other parts of Manchester. There
              is also a multi-story car park just round the corner for those
              driving.
            </p>
          }
        />
        <FaqItem
          question="Is there food included?"
          answer={
            <p className="text-[clamp(0.8125rem,2.5vw,0.84rem)] leading-relaxed md:text-[12.4444px] md:leading-[18.6667px]">
              Yes, a banging <strong>lunch</strong> courtesy of Kargo on the Docks
              is <strong>included</strong> in your ticket, as well as{" "}
              <strong>drinks</strong> tokens.
            </p>
          }
        />
        <FaqItem
          question="What should I bring?"
          answer={
            <p className="text-[clamp(0.8125rem,2.5vw,0.84rem)] leading-relaxed md:text-[12.4444px] md:leading-[18.6667px]">
              Good vibes and <strong>layers</strong>. This is an all day{" "}
              <strong>outdoor</strong> event in <strong>Manchester</strong>, so
              check the weather closer to the time and{" "}
              <strong>dress accordingly.</strong> Also, we&apos;ve taken your
              feedback onboard and there are no hands on workshops, so{" "}
              <strong>no need</strong> to bring a <strong>laptop</strong>.
            </p>
          }
        />
        <FaqItem
          question="Will there be an afterparty?"
          answer={
            <p className="text-[clamp(0.8125rem,2.5vw,0.84rem)] leading-relaxed md:text-[12.4444px] md:leading-[18.6667px]">
              As it was last year, there isn&apos;t an <strong>official</strong> or
              planned afterparty, but FlowFest folks know the party{" "}
              <strong>never stops.</strong> We usually have the venue until 6 or
              7pm, and last year we headed to Kargo Food Market to get some{" "}
              <strong>dinner</strong> and headed into town for{" "}
              <strong>karaoke</strong>. After party <strong>planners</strong>{" "}
              welcome, FlowFest is on a Friday after all so it would be rude not to
              get a bit <strong>lairy</strong>.
            </p>
          }
        />
      </ul>
    </div>
  );
};
