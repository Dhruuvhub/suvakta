import { SectionIntro } from "@/components/SectionIntro";
import { SpeakerCard } from "./components/SpeakerCard";

export const SpeakersSection = () => {
  return (
    <section className="relative text-[15.3846px] bg-orange-100 box-border caret-transparent leading-5 outline-[3px] py-[92.3077px] md:text-[14.2222px] md:leading-[18.4889px] md:py-[142.222px]">
      <div className="text-[15.3846px] box-border caret-transparent leading-5 max-w-[375px] outline-[3px] mx-auto px-[15.3846px] md:text-[14.2222px] md:leading-[18.4889px] md:max-w-screen-xl md:px-[56.8889px]">
        <div className="text-[15.3846px] box-border caret-transparent gap-x-[76.9231px] flex flex-col flex-wrap leading-5 outline-[3px] gap-y-[76.9231px] md:text-[14.2222px] md:gap-x-[56.8889px] md:flex-row md:leading-[18.4889px] md:gap-y-[56.8889px]">
          <SectionIntro />
          <SpeakerCard
            category="Keynote"
            imageUrl="https://c.animaapp.com/mrxuckkzwKTRkk/assets/682b70ae8f2a1c3d4e5f6a7b_vlad-magdalin.avif"
            speakerName="Vlad Magdalin"
            description={
              <>
                Our founding Webflow father. Our dad joke aficionado. He puts the{" "}
                <strong className="text-[16.3462px] font-bold box-border caret-transparent leading-[21.25px] outline-[3px] md:text-[15.1111px] md:leading-[19.6444px]">
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
                <strong className="text-[16.3462px] font-bold box-border caret-transparent leading-[21.25px] outline-[3px] md:text-[15.1111px] md:leading-[19.6444px]">
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
                <strong className="text-[16.3462px] font-bold box-border caret-transparent leading-[21.25px] outline-[3px] md:text-[15.1111px] md:leading-[19.6444px]">
                  fairy codemother
                </strong>{" "}
                is here to sprinkle some{" "}
                <strong className="text-[16.3462px] font-bold box-border caret-transparent leading-[21.25px] outline-[3px] md:text-[15.1111px] md:leading-[19.6444px]">
                  tween
                </strong>{" "}
                magic,{" "}
                <strong className="text-[16.3462px] font-bold box-border caret-transparent leading-[21.25px] outline-[3px] md:text-[15.1111px] md:leading-[19.6444px]">
                  animation
                </strong>{" "}
                goodness &amp; Webflow&apos;s deepest darkest{" "}
                <strong className="text-[16.3462px] font-bold box-border caret-transparent leading-[21.25px] outline-[3px] md:text-[15.1111px] md:leading-[19.6444px]">
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
                <strong className="text-[16.3462px] font-bold box-border caret-transparent leading-[21.25px] outline-[3px] md:text-[15.1111px] md:leading-[19.6444px]">
                  work
                </strong>{" "}
                with her, designers want to{" "}
                <strong className="text-[16.3462px] font-bold box-border caret-transparent leading-[21.25px] outline-[3px] md:text-[15.1111px] md:leading-[19.6444px]">
                  be
                </strong>{" "}
                her. Steph has hit the ground running with her{" "}
                <strong className="text-[16.3462px] font-bold box-border caret-transparent leading-[21.25px] outline-[3px] md:text-[15.1111px] md:leading-[19.6444px]">
                  stunning
                </strong>{" "}
                web work and will be sharing her expert{" "}
                <strong className="text-[16.3462px] font-bold box-border caret-transparent leading-[21.25px] outline-[3px] md:text-[15.1111px] md:leading-[19.6444px]">
                  freelancer
                </strong>{" "}
                growth{" "}
                <strong className="text-[16.3462px] font-bold box-border caret-transparent leading-[21.25px] outline-[3px] md:text-[15.1111px] md:leading-[19.6444px]">
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
                <strong className="text-[16.3462px] font-bold box-border caret-transparent leading-[21.25px] outline-[3px] md:text-[15.1111px] md:leading-[19.6444px]">
                  animate
                </strong>{" "}
                something cool with{" "}
                <strong className="text-[16.3462px] font-bold box-border caret-transparent leading-[21.25px] outline-[3px] md:text-[15.1111px] md:leading-[19.6444px]">
                  Rive
                </strong>
                , and Ross is here to{" "}
                <strong className="text-[16.3462px] font-bold box-border caret-transparent leading-[21.25px] outline-[3px] md:text-[15.1111px] md:leading-[19.6444px]">
                  show
                </strong>{" "}
                us how with his ridiculously{" "}
                <strong className="text-[16.3462px] font-bold box-border caret-transparent leading-[21.25px] outline-[3px] md:text-[15.1111px] md:leading-[19.6444px]">
                  fun
                </strong>{" "}
                and{" "}
                <strong className="text-[16.3462px] font-bold box-border caret-transparent leading-[21.25px] outline-[3px] md:text-[15.1111px] md:leading-[19.6444px]">
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
