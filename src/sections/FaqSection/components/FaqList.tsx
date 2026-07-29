import { FaqItem } from "@/sections/FaqSection/components/FaqItem";

export const FaqList = () => {
  return (
    <div className="relative text-[15.3846px] box-border caret-transparent leading-5 min-h-[auto] min-w-[auto] order-2 outline-[3px] w-full md:text-[14.2222px] md:leading-[18.4889px] md:order-none md:w-[min(540.444px,100%)]">
      <ul className="text-[15.3846px] box-border caret-transparent gap-x-[15.3846px] flex flex-col leading-5 list-none outline-[3px] gap-y-[15.3846px] pl-0 md:text-[14.2222px] md:gap-x-[14.2222px] md:leading-[18.4889px] md:gap-y-[14.2222px]">
        <FaqItem
          question="Can I have a discount?"
          answer={
            <p className="text-[13.4615px] box-border caret-transparent leading-[20.1923px] outline-[3px] md:text-[12.4444px] md:leading-[18.6667px]">
              FlowFest is a{" "}
              <strong className="text-[13.4615px] font-bold box-border caret-transparent leading-[20.1923px] outline-[3px] md:text-[12.4444px] md:leading-[18.6667px]">
                non-profit
              </strong>{" "}
              event, and our goal is to make FlowFest as affordable as we possibly can whilst delivering a quality day that you&apos;ll never forget. Due to last year&apos;s feedback we are investing more in comfort and quality this year. To keep ticket prices as low as we can for everyone, we are unable to offer discounts and appreciate your support for this community event.
            </p>
          }
        />
        <FaqItem
          question="How do I get there?"
          answer={
            <p className="text-[13.4615px] box-border caret-transparent leading-[20.1923px] outline-[3px] md:text-[12.4444px] md:leading-[18.6667px]">
              FlowFest is hosted in{" "}
              <strong className="text-[13.4615px] font-bold box-border caret-transparent leading-[20.1923px] outline-[3px] md:text-[12.4444px] md:leading-[18.6667px]">
                Media City Gardens
              </strong>{" "}
              (you&apos;ll find it by searching the Blue Peter Garden on Google Maps), which is an outdoor venue. It&apos;s directly in front of Media City tram stop, which is a great way to get to the venue if you&apos;re travelling from the city centre or other parts of Manchester. There is also a multi-story car park just round the corner for those driving.
            </p>
          }
        />
        <FaqItem
          question="Is there food included?"
          answer={
            <p className="text-[13.4615px] box-border caret-transparent leading-[20.1923px] outline-[3px] md:text-[12.4444px] md:leading-[18.6667px]">
              Yes, a banging{" "}
              <strong className="text-[13.4615px] font-bold box-border caret-transparent leading-[20.1923px] outline-[3px] md:text-[12.4444px] md:leading-[18.6667px]">
                lunch
              </strong>{" "}
              courtesy of Kargo on the Docks is{" "}
              <strong className="text-[13.4615px] font-bold box-border caret-transparent leading-[20.1923px] outline-[3px] md:text-[12.4444px] md:leading-[18.6667px]">
                included
              </strong>{" "}
              in your ticket, as well as{" "}
              <strong className="text-[13.4615px] font-bold box-border caret-transparent leading-[20.1923px] outline-[3px] md:text-[12.4444px] md:leading-[18.6667px]">
                drinks
              </strong>{" "}
              tokens.
            </p>
          }
        />
        <FaqItem
          question="What should I bring?"
          answer={
            <p className="text-[13.4615px] box-border caret-transparent leading-[20.1923px] outline-[3px] md:text-[12.4444px] md:leading-[18.6667px]">
              Good vibes and{" "}
              <strong className="text-[13.4615px] font-bold box-border caret-transparent leading-[20.1923px] outline-[3px] md:text-[12.4444px] md:leading-[18.6667px]">
                layers
              </strong>
              . This is an all day{" "}
              <strong className="text-[13.4615px] font-bold box-border caret-transparent leading-[20.1923px] outline-[3px] md:text-[12.4444px] md:leading-[18.6667px]">
                outdoor
              </strong>{" "}
              event in{" "}
              <strong className="text-[13.4615px] font-bold box-border caret-transparent leading-[20.1923px] outline-[3px] md:text-[12.4444px] md:leading-[18.6667px]">
                Manchester
              </strong>
              , so check the weather closer to the time and{" "}
              <strong className="text-[13.4615px] font-bold box-border caret-transparent leading-[20.1923px] outline-[3px] md:text-[12.4444px] md:leading-[18.6667px]">
                dress accordingly.
              </strong>{" "}
              Also, we&apos;ve taken your feedback onboard and there are no hands on workshops, so{" "}
              <strong className="text-[13.4615px] font-bold box-border caret-transparent leading-[20.1923px] outline-[3px] md:text-[12.4444px] md:leading-[18.6667px]">
                no need
              </strong>{" "}
              to bring a{" "}
              <strong className="text-[13.4615px] font-bold box-border caret-transparent leading-[20.1923px] outline-[3px] md:text-[12.4444px] md:leading-[18.6667px]">
                laptop
              </strong>
              .
            </p>
          }
        />
        <FaqItem
          question="Will there be an afterparty?"
          answer={
            <p className="text-[13.4615px] box-border caret-transparent leading-[20.1923px] outline-[3px] md:text-[12.4444px] md:leading-[18.6667px]">
              As it was last year, there isn&apos;t an{" "}
              <strong className="text-[13.4615px] font-bold box-border caret-transparent leading-[20.1923px] outline-[3px] md:text-[12.4444px] md:leading-[18.6667px]">
                official
              </strong>{" "}
              or planned afterparty, but FlowFest folks know the party{" "}
              <strong className="text-[13.4615px] font-bold box-border caret-transparent leading-[20.1923px] outline-[3px] md:text-[12.4444px] md:leading-[18.6667px]">
                never stops.
              </strong>{" "}
              We usually have the venue until 6 or 7pm, and last year we headed to Kargo Food Market to get some{" "}
              <strong className="text-[13.4615px] font-bold box-border caret-transparent leading-[20.1923px] outline-[3px] md:text-[12.4444px] md:leading-[18.6667px]">
                dinner
              </strong>{" "}
              and headed into town for{" "}
              <strong className="text-[13.4615px] font-bold box-border caret-transparent leading-[20.1923px] outline-[3px] md:text-[12.4444px] md:leading-[18.6667px]">
                karaoke
              </strong>
              . After party{" "}
              <strong className="text-[13.4615px] font-bold box-border caret-transparent leading-[20.1923px] outline-[3px] md:text-[12.4444px] md:leading-[18.6667px]">
                planners
              </strong>{" "}
              welcome, FlowFest is on a Friday after all so it would be rude not to get a bit{" "}
              <strong className="text-[13.4615px] font-bold box-border caret-transparent leading-[20.1923px] outline-[3px] md:text-[12.4444px] md:leading-[18.6667px]">
                lairy
              </strong>
              .
            </p>
          }
        />
      </ul>
    </div>
  );
};
