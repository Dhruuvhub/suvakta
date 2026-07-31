import { ExpectationItem } from "@/sections/ExpectationsSection/components/ExpectationItem";

const mobileMarker =
  "left-1/2 h-full w-[120%] max-w-none -translate-x-1/2 md:left-0 md:w-[2560px] md:translate-x-0";

export const ExpectationList = () => {
  return (
    <div className="section-copy relative w-full md:w-4/5">
      <ExpectationItem markerClassName={`bg-suvakta-600 ${mobileMarker} rounded-t-[46.1538px] top-0 md:top-[-42.6667px] md:h-[calc(100%_+_42.6667px)] md:rounded-t-none`}>
        Expert Talks
      </ExpectationItem>
      <ExpectationItem markerClassName={`bg-suvakta-accent ${mobileMarker} top-0`}>
        Fun + Games
      </ExpectationItem>
      <ExpectationItem markerClassName={`bg-suvakta-500 ${mobileMarker} top-0`}>
        Food + Drink
      </ExpectationItem>
      <ExpectationItem markerClassName={`bg-suvakta-300 ${mobileMarker} top-0`}>
        Live Music
        <br className="md:hidden" />
      </ExpectationItem>
      <ExpectationItem markerClassName={`bg-suvakta-600 ${mobileMarker} top-0 h-[calc(100%_+_46.1538px)] md:h-[calc(100%_+_42.6667px)]`}>
        Community
      </ExpectationItem>
    </div>
  );
};
