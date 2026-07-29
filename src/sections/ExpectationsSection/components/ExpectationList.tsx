import { ExpectationItem } from "@/sections/ExpectationsSection/components/ExpectationItem";

export const ExpectationList = () => {
  return (
    <div className="relative text-[15.3846px] box-border caret-transparent leading-5 min-h-[auto] min-w-[auto] outline-[3px] w-full md:text-[14.2222px] md:leading-[18.4889px] md:w-4/5">
      <ExpectationItem markerClassName="bg-orange-500 h-full translate-x-[-50.0%] w-screen rounded-t-[46.1538px] left-2/4 top-[0%] md:h-[calc(100%_+_42.6667px)] md:top-[-42.6667px] md:transform-none md:rounded-t-none">
        Expert Talks
      </ExpectationItem>
      <ExpectationItem markerClassName="bg-red-300 h-full left-[-187.5px] w-[750px] top-0">
        Fun + Games
      </ExpectationItem>
      <ExpectationItem markerClassName="bg-amber-500 h-full left-[-187.5px] w-[750px] top-0">
        Food + Drink
      </ExpectationItem>
      <ExpectationItem markerClassName="bg-yellow-500 h-full left-[-187.5px] w-[750px] top-0">
        Live Music
        <br className="text-[38.4615px] box-border caret-transparent leading-[34.6154px] outline-[3px] md:text-[42.6667px] md:leading-[38.4px]" />
      </ExpectationItem>
      <ExpectationItem markerClassName="bg-orange-500 h-[calc(100%_+_46.1538px)] left-[-187.5px] w-[750px] top-0 md:h-[calc(100%_+_42.6667px)]">
        Community
      </ExpectationItem>
    </div>
  );
};