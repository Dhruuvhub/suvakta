import { LoveHeading } from "./components/LoveHeading";
import { LoveImageCard } from "./components/LoveImageCard";

const cards: Array<{
  imageUrl: string;
  containerVariant: string;
}> = [
  {
    imageUrl:
      "https://c.animaapp.com/mrxuckkzwKTRkk/assets/682da3d70976507f75f107b1_tweet-cassie.avif",
    containerVariant: "rotate-[4deg] md:rotate-[4.000001701562398deg]",
  },
  {
    imageUrl:
      "https://c.animaapp.com/mrxuckkzwKTRkk/assets/682da3d7ade85d239ef2a283_tweet-kieran.avif",
    containerVariant: "rotate-[2deg] md:rotate-[1.999999842926156deg]",
  },
  {
    imageUrl:
      "https://c.animaapp.com/mrxuckkzwKTRkk/assets/682da3d708169e2e0833b6ef_tweet-eugene.avif",
    containerVariant: "",
  },
  {
    imageUrl:
      "https://c.animaapp.com/mrxuckkzwKTRkk/assets/682da3d73b4032ccbf606b3a_tweet-isabelle.avif",
    containerVariant: "rotate-[-2deg] md:rotate-[-1.999999842926156deg]",
  },
  {
    imageUrl:
      "https://c.animaapp.com/mrxuckkzwKTRkk/assets/682da3d8201a67c59ca71dea_tweet-rahul.avif",
    containerVariant: "rotate-[-4deg] md:rotate-[-4.000001701562398deg]",
  },
];

export const LoveSection = () => {
  return (
    <section className="section-copy relative z-[1] overflow-x-clip bg-suvakta-50 pb-[clamp(5rem,18vw,8.6rem)] md:overflow-visible md:pb-[177.778px]">
      <div className="section-container relative">
        <div className="sticky top-0 z-[0] flex w-full flex-col items-center justify-center pt-[clamp(4rem,18vw,7.2rem)] md:pt-[100px] pointer-events-none">
          <LoveHeading />
        </div>
        <div className="relative z-[1] -mt-[clamp(8rem,25vw,14rem)] md:-mt-[220px]">
          {cards.map((card, index) => (
            <div
              key={card.imageUrl}
              className="sticky top-0 flex w-full flex-col items-center justify-center pt-[clamp(12rem,35vw,18rem)] md:pt-[277.778px]"
            >
              <LoveImageCard
                imageUrl={card.imageUrl}
                containerVariant={card.containerVariant}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
