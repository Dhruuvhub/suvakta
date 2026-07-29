import { CommunityMemberCard } from "@/sections/CommunitySection/components/CommunityMemberCard";

export const CommunityMemberGrid = () => {
  return (
    <div className="relative text-[15.3846px] items-center box-border caret-transparent gap-x-[15.3846px] flex flex-wrap leading-5 min-h-[auto] min-w-[auto] outline-[3px] gap-y-[15.3846px] w-full md:text-[14.2222px] md:gap-x-[14.2222px] md:leading-[18.4889px] md:gap-y-[14.2222px] md:w-6/12">
      <div className="absolute text-[15.3846px] box-border caret-transparent gap-x-[15.3846px] flex flex-col h-full justify-between left-[-375px] leading-5 opacity-15 outline-[3px] pointer-events-none gap-y-[15.3846px] w-[1125px] top-0 md:text-[14.2222px] md:gap-x-[14.2222px] md:left-[-1280px] md:leading-[18.4889px] md:gap-y-[14.2222px] md:w-[3840px]">
        <div className="relative text-[15.3846px] box-border caret-transparent flex flex-col h-[calc(49.995%_-_7.69231px)] justify-between leading-5 min-h-[auto] min-w-[auto] outline-[3px] w-full md:text-[14.2222px] md:h-[calc(49.995%_-_7.11111px)] md:leading-[18.4889px]">
          <div className="relative text-[15.3846px] bg-neutral-900 box-border caret-transparent h-[1.92308px] leading-5 min-h-[auto] min-w-[auto] outline-[3px] w-full md:text-[14.2222px] md:h-[1.77778px] md:leading-[18.4889px]"></div>
          <div className="relative text-[15.3846px] bg-neutral-900 box-border caret-transparent h-[1.92308px] leading-5 min-h-[auto] min-w-[auto] outline-[3px] w-full md:text-[14.2222px] md:h-[1.77778px] md:leading-[18.4889px]"></div>
        </div>
        <div className="relative text-[15.3846px] box-border caret-transparent flex flex-col h-[calc(49.995%_-_7.69231px)] justify-between leading-5 min-h-[auto] min-w-[auto] outline-[3px] w-full md:text-[14.2222px] md:h-[calc(49.995%_-_7.11111px)] md:leading-[18.4889px]">
          <div className="relative text-[15.3846px] bg-neutral-900 box-border caret-transparent h-[1.92308px] leading-5 min-h-[auto] min-w-[auto] outline-[3px] w-full md:text-[14.2222px] md:h-[1.77778px] md:leading-[18.4889px]"></div>
          <div className="relative text-[15.3846px] bg-neutral-900 box-border caret-transparent h-[1.92308px] leading-5 min-h-[auto] min-w-[auto] outline-[3px] w-full md:text-[14.2222px] md:h-[1.77778px] md:leading-[18.4889px]"></div>
        </div>
        <div className="relative text-[15.3846px] box-border caret-transparent flex flex-col h-[calc(49.995%_-_7.69231px)] justify-between leading-5 min-h-[auto] min-w-[auto] outline-[3px] w-full md:text-[14.2222px] md:hidden md:h-[calc(49.995%_-_7.11111px)] md:leading-[18.4889px] md:min-h-0 md:min-w-0">
          <div className="relative text-[15.3846px] bg-neutral-900 box-border caret-transparent h-[1.92308px] leading-5 min-h-[auto] min-w-[auto] outline-[3px] w-full md:text-[14.2222px] md:h-[1.77778px] md:leading-[18.4889px] md:min-h-0 md:min-w-0"></div>
          <div className="relative text-[15.3846px] bg-neutral-900 box-border caret-transparent h-[1.92308px] leading-5 min-h-[auto] min-w-[auto] outline-[3px] w-full md:text-[14.2222px] md:h-[1.77778px] md:leading-[18.4889px] md:min-h-0 md:min-w-0"></div>
        </div>
      </div>
      <CommunityMemberCard
        imageUrl="https://c.animaapp.com/mrxuckkzwKTRkk/assets/682c8b372a58a085d771d7ef_isabel-adwards.avif"
        name="Isabel Edwards"
      />
      <CommunityMemberCard
        imageUrl="https://c.animaapp.com/mrxuckkzwKTRkk/assets/682c8b4353290cb0e6475221_josh-fry.avif"
        name="Josh Fry"
      />
      <CommunityMemberCard
        imageUrl="https://c.animaapp.com/mrxuckkzwKTRkk/assets/682c8b37993d2c764032cfd9_benn-raistrick.avif"
        name="Benn Raistrick"
      />
      <CommunityMemberCard
        imageUrl="https://c.animaapp.com/mrxuckkzwKTRkk/assets/682c8b37d5ee1f02cd6d1e51_scott-humphrey.avif"
        name="Scott Humphrey"
      />
      <CommunityMemberCard
        imageUrl="https://c.animaapp.com/mrxuckkzwKTRkk/assets/682c8b372d28c1d2ba84fed6_rachael-ward.avif"
        name="Rachael Ward"
      />
      <CommunityMemberCard
        imageUrl="https://c.animaapp.com/mrxuckkzwKTRkk/assets/682c8b375c636519ba78e184_john-ostler.avif"
        name="John Ostler"
      />
    </div>
  );
};
