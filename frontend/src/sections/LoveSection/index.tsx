import { LoveHeading } from "./components/LoveHeading";
import { LoveImageCard } from "./components/LoveImageCard";

const cards: Array<{
  imageUrl: string;
  containerVariant: string;
  withHeading?: boolean;
}> = [
  {
    imageUrl:
      "https://c.animaapp.com/mrxuckkzwKTRkk/assets/682da3d70976507f75f107b1_tweet-cassie.avif",
    containerVariant: "rotate-[4deg] md:rotate-[4.000001701562398deg]",
    withHeading: true,
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
] ;

export const LoveSection = () => {
  return (
    <section className="section-copy relative z-[1] overflow-x-clip bg-suvakta-50 pb-[clamp(5rem,18vw,8.6rem)] md:overflow-visible md:pb-[177.778px]">
      <div className="section-container">
        {cards.map((card, index) => (
          <div
            key={card.imageUrl}
            className="sticky top-0 flex w-full flex-col items-center justify-center pt-[clamp(7rem,28vw,14.4rem)] md:pt-[177.778px]"
          >
            {card.withHeading && <LoveHeading />}
            <LoveImageCard
              imageUrl={card.imageUrl}
              containerVariant={card.containerVariant}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
