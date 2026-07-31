import { SectionIntro } from "@/components/SectionIntro";
import { SpeakerCard } from "./components/SpeakerCard";

export const SpeakersSection = () => {
  return (
    <section
      id="speakers"
      className="section-copy relative bg-suvakta-50 py-[clamp(3.5rem,12vw,5.75rem)] md:py-[142.222px]"
    >
      <div className="section-container">
        <div className="flex flex-col flex-wrap gap-y-[clamp(2.5rem,8vw,4.8rem)] md:flex-row md:gap-x-[56.8889px] md:gap-y-[56.8889px]">
          <SectionIntro />
          <SpeakerCard
            category="Keynote"
            imageUrl="https://c.animaapp.com/mrxuckkzwKTRkk/assets/682b70ae8f2a1c3d4e5f6a7b_vlad-magdalin.avif"
            speakerName="Vlad Magdalin"
            description={
              <>
                Our founding Webflow father. Our dad joke aficionado. He puts the{" "}
                <strong className="font-bold md:text-[15.1111px] md:leading-[19.6444px]">
                  mad
                </strong>{" "}
                into Magdalin and will be kicking off FlowFest &apos;25 as our keynote speaker!
              </>
            }
          />
          <SpeakerCard
            category="Development"
            imageUrl="https://c.animaapp.com/mrxuckkzwKTRkk/assets/682b70ae9a3b2c1d0e5f4a6b_ilja-van-eck.avif"
            speakerName="Ilja van Eck"
            description={
              <>
                Oh &apos;Eck, we&apos;ve only gone and secured the web wizard himself. Co-founder of{" "}
                <strong className="font-bold md:text-[15.1111px] md:leading-[19.6444px]">
                  Osmo
                </strong>{" "}
                &amp; Webflow superstar, we can&apos;t wait to learn from Ilja!
              </>
            }
          />
          <SpeakerCard
            category="Animation"
            imageUrl="https://c.animaapp.com/mrxuckkzwKTRkk/assets/682b70ae1a2b3c4d5e6f7a8b_cassie-evans.avif"
            speakerName="Cassie Evans"
            description={
              <>
                Our GSAP{" "}
                <strong className="font-bold md:text-[15.1111px] md:leading-[19.6444px]">
                  fairy codemother
                </strong>{" "}
                is here to sprinkle some{" "}
                <strong className="font-bold md:text-[15.1111px] md:leading-[19.6444px]">
                  tween
                </strong>{" "}
                magic,{" "}
                <strong className="font-bold md:text-[15.1111px] md:leading-[19.6444px]">
                  animation
                </strong>{" "}
                goodness &amp; Webflow&apos;s deepest darkest{" "}
                <strong className="font-bold md:text-[15.1111px] md:leading-[19.6444px]">
                  secrets
                </strong>{" "}
                now she&apos;s on the inside.
              </>
            }
          />
          <SpeakerCard
            category="Design"
            imageUrl="https://c.animaapp.com/mrxuckkzwKTRkk/assets/682b70aed8628a9e8a7f6acf_stephanie-bruce.avif"
            speakerName="Stephanie Bruce"
            description={
              <>
                Devs want to{" "}
                <strong className="font-bold md:text-[15.1111px] md:leading-[19.6444px]">
                  work
                </strong>{" "}
                with her, designers want to{" "}
                <strong className="font-bold md:text-[15.1111px] md:leading-[19.6444px]">
                  be
                </strong>{" "}
                her. Steph has hit the ground running with her{" "}
                <strong className="font-bold md:text-[15.1111px] md:leading-[19.6444px]">
                  stunning
                </strong>{" "}
                web work and will be sharing her expert{" "}
                <strong className="font-bold md:text-[15.1111px] md:leading-[19.6444px]">
                  freelancer
                </strong>{" "}
                growth{" "}
                <strong className="font-bold md:text-[15.1111px] md:leading-[19.6444px]">
                  tips
                </strong>
                .
              </>
            }
          />
          <SpeakerCard
            className="transform-none md:translate-y-[142.222px]"
            category="Animation"
            imageUrl="https://c.animaapp.com/mrxuckkzwKTRkk/assets/682b70ae1856b5e46b946d48_ross-plaskow.avif"
            speakerName="Ross Plaskow"
            description={
              <>
                We&apos;ve all wanted to{" "}
                <strong className="font-bold md:text-[15.1111px] md:leading-[19.6444px]">
                  animate
                </strong>{" "}
                something cool with{" "}
                <strong className="font-bold md:text-[15.1111px] md:leading-[19.6444px]">
                  Rive
                </strong>
                , and Ross is here to{" "}
                <strong className="font-bold md:text-[15.1111px] md:leading-[19.6444px]">
                  show
                </strong>{" "}
                us how with his ridiculously{" "}
                <strong className="font-bold md:text-[15.1111px] md:leading-[19.6444px]">
                  fun
                </strong>{" "}
                and{" "}
                <strong className="font-bold md:text-[15.1111px] md:leading-[19.6444px]">
                  slick
                </strong>{" "}
                style.
              </>
            }
          />
        </div>
      </div>
    </section>
  );
};
