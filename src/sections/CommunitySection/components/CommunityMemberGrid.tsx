import { CommunityMemberCard } from "@/sections/CommunitySection/components/CommunityMemberCard";

const members = [
  {
    imageUrl:
      "https://c.animaapp.com/mrxuckkzwKTRkk/assets/682c8b372a58a085d771d7ef_isabel-adwards.avif",
    name: "Isabel Edwards",
  },
  {
    imageUrl:
      "https://c.animaapp.com/mrxuckkzwKTRkk/assets/682c8b4353290cb0e6475221_josh-fry.avif",
    name: "Josh Fry",
  },
  {
    imageUrl:
      "https://c.animaapp.com/mrxuckkzwKTRkk/assets/682c8b37993d2c764032cfd9_benn-raistrick.avif",
    name: "Benn Raistrick",
  },
  {
    imageUrl:
      "https://c.animaapp.com/mrxuckkzwKTRkk/assets/682c8b37d5ee1f02cd6d1e51_scott-humphrey.avif",
    name: "Scott Humphrey",
  },
  {
    imageUrl:
      "https://c.animaapp.com/mrxuckkzwKTRkk/assets/682c8b372d28c1d2ba84fed6_rachael-ward.avif",
    name: "Rachael Ward",
  },
  {
    imageUrl:
      "https://c.animaapp.com/mrxuckkzwKTRkk/assets/682c8b375c636519ba78e184_john-ostler.avif",
    name: "John Ostler",
  },
] as const;

export const CommunityMemberGrid = () => {
  return (
    <div className="section-copy relative flex w-full flex-wrap gap-[15.3846px] overflow-hidden md:w-6/12 md:gap-[14.2222px]">
      <div className="pointer-events-none absolute inset-0 hidden opacity-15 md:block">
        <div className="absolute left-[-1280px] top-0 flex h-full w-[3840px] flex-col justify-between gap-[14.2222px]" />
      </div>
      {members.map((member) => (
        <CommunityMemberCard key={member.name} {...member} />
      ))}
    </div>
  );
};
