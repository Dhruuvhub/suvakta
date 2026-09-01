import { SectionIntro } from "@/components/SectionIntro";
import { SpeakerCard } from "./components/SpeakerCard";

export const SpeakersSection = () => {
  return (
    <section
      id="speakers"
      className="section-copy relative bg-suvakta-50 py-[clamp(3.5rem,12vw,5.75rem)] md:py-[142.222px]"
    >
      <div className="section-container">
        {/*
          FlowFest staggered columns on desktop:
          Col1 — intro (dropped) + Cassie
          Col2 — Vlad (high) + Stephanie
          Col3 — Ilja (mid) + Ross (lower)
          Mobile keeps a natural reading order via flex order.
        */}
        <div className="flex flex-col gap-y-[clamp(2.5rem,8vw,4.8rem)] md:grid md:grid-cols-3 md:items-start md:gap-x-[56.8889px] md:gap-y-0">
          {/* Column 1 */}
          <div className="contents md:flex md:flex-col md:gap-y-[56.8889px] md:pt-[88.8889px]">
            <div className="order-1 md:order-none">
              <SectionIntro />
            </div>
            <div className="order-4 md:order-none">
              <SpeakerCard
                category="Treasurer"
                imageUrl="https://i.ibb.co/5NH4xb4/Chat-GPT-Image-Aug-31-2026-02-41-25-PM.png"
                speakerName="Ms. Eliza Sneh"
                description={
                  <>
                    Pretty like a fairy. Often faces an existential crisis while dealing with sponsors but well- shes gets the job done.
                  </>
                }
              />
            </div>
          </div>

          {/* Column 2 */}
          <div className="contents md:flex md:flex-col md:gap-y-[56.8889px]">
            <div className="order-2 md:order-none">
              <SpeakerCard
                category="President"
                imageUrl="https://i.ibb.co/1f4YkgWv/Chat-GPT-Image-Aug-31-2026-02-09-00-PM.png"
                speakerName="Ms. Kritika Suhani"
                description={
                  <>
                    The woman who has made it her mission to lead the club in a visionary manner while also collecting sponsors like pokemons ;)
                  </>
                }
              />
            </div>
            <div className="order-5 md:order-none">
              <SpeakerCard
                category="Joint Secretary"
                imageUrl="https://i.ibb.co/NgrW6sth/Chat-GPT-Image-Aug-31-2026-02-15-00-PM.png"
                speakerName="Ms. Radhika Bathla"
                description={
                  <>
                    Fashionable, free spirited and laughing her way through life. She's someone who would understand you and definitely get the Administrative work done in seconds!
                  </>
                }
              />
            </div>
          </div>

          {/* Column 3 */}
          <div className="contents md:flex md:flex-col md:gap-y-[56.8889px] md:pt-[71.1111px]">
            <div className="order-3 md:order-none">
              <SpeakerCard
                category="Vice president"
                imageUrl="https://i.ibb.co/4nbYJcKX/Chat-GPT-Image-Aug-31-2026-02-18-01-PM.png"
                speakerName="Ms. Aarya Lakhera"
                description={
                  <>
                    The one who leads and loves with her whole heart. She's the one you go to when you need lowkey any advice and last minute crisis &lt;3
                  </>
                }
              />
            </div>
            <div className="order-6 md:order-none md:mt-[71.1111px]">
              <SpeakerCard
                category="MUN Co Ordinator"
                imageUrl="https://i.ibb.co/ksxVVC4C/Chat-GPT-Image-Aug-31-2026-02-43-58-PM.png"
                speakerName="Ms. Aishee Majumdar"
                description={
                  <>
                    Aims to make MUNs appear non-intimidating for beginners, provide quality training and geopolitics sessions and also believes she has an amazing music taste.
                  </>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
