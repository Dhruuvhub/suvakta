import { LoveHeading } from "./components/LoveHeading";
import { LoveImageCard } from "./components/LoveImageCard";

export const LoveSection = () => {
    return (
        <section className="relative text-[15.3846px] bg-orange-100 box-border caret-transparent leading-5 outline-[3px] z-[1] overflow-clip pb-[138.462px] md:text-[14.2222px] md:leading-[18.4889px] md:overflow-visible md:pb-[177.778px]">
            <div className="text-[15.3846px] box-border caret-transparent leading-5 max-w-[375px] outline-[3px] mx-auto px-[15.3846px] md:text-[14.2222px] md:leading-[18.4889px] md:max-w-screen-xl md:px-[56.8889px]">
                <div className="text-[15.3846px] box-border caret-transparent leading-5 outline-[3px] md:text-[14.2222px] md:leading-[18.4889px]">
                    <div className="sticky text-[15.3846px] items-center box-border caret-transparent flex justify-center leading-5 outline-[3px] w-full pt-[230.769px] top-0 md:text-[14.2222px] md:leading-[18.4889px] md:pt-[177.778px]">
                        <LoveHeading />
                        <LoveImageCard
                            imageUrl="https://c.animaapp.com/mrxuckkzwKTRkk/assets/682da3d70976507f75f107b1_tweet-cassie.avif"
                            containerVariant="rotate-[4.000001701562398deg]"
                        />
                    </div>
                    <div className="sticky text-[15.3846px] items-center box-border caret-transparent flex justify-center leading-5 outline-[3px] w-full pt-[230.769px] top-0 md:text-[14.2222px] md:leading-[18.4889px] md:pt-[177.778px]">
                        <LoveImageCard
                            imageUrl="https://c.animaapp.com/mrxuckkzwKTRkk/assets/682da3d7ade85d239ef2a283_tweet-kieran.avif"
                            containerVariant="rotate-[1.999999842926156deg]"
                        />
                    </div>
                    <div className="sticky text-[15.3846px] items-center box-border caret-transparent flex justify-center leading-5 outline-[3px] w-full pt-[230.769px] top-0 md:text-[14.2222px] md:leading-[18.4889px] md:pt-[177.778px]">
                        <LoveImageCard
                            imageUrl="https://c.animaapp.com/mrxuckkzwKTRkk/assets/682da3d708169e2e0833b6ef_tweet-eugene.avif"
                            containerVariant=""
                        />
                    </div>
                    <div className="sticky text-[15.3846px] items-center box-border caret-transparent flex justify-center leading-5 outline-[3px] w-full pt-[230.769px] top-0 md:text-[14.2222px] md:leading-[18.4889px] md:pt-[177.778px]">
                        <LoveImageCard
                            imageUrl="https://c.animaapp.com/mrxuckkzwKTRkk/assets/682da3d73b4032ccbf606b3a_tweet-isabelle.avif"
                            containerVariant="rotate-[-1.999999842926156deg]"
                        />
                    </div>
                    <div className="sticky text-[15.3846px] items-center box-border caret-transparent flex justify-center leading-5 outline-[3px] w-full pt-[230.769px] top-0 md:text-[14.2222px] md:leading-[18.4889px] md:pt-[177.778px]">
                        <LoveImageCard
                            imageUrl="https://c.animaapp.com/mrxuckkzwKTRkk/assets/682da3d8201a67c59ca71dea_tweet-rahul.avif"
                            containerVariant="rotate-[-4.000001701562398deg]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};