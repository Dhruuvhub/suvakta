import { Navbar } from "@/sections/Navbar";
import { FloatingBadge } from "@/components/FloatingBadge";
import { ScrollLines } from "@/components/ScrollLines";
import { SmoothScroll } from "@/components/SmoothScroll";
import { PageIntro } from "@/components/PageIntro";
import { Hero } from "@/sections/Hero";
import { SponsorsMarquee } from "@/sections/SponsorsMarquee";
import { AboutSection } from "@/sections/AboutSection";
import { SpeakersSection } from "@/sections/SpeakersSection";
import { ExpectationsSection } from "@/sections/ExpectationsSection";
import { CommunitySection } from "@/sections/CommunitySection";
import { LoveSection } from "@/sections/LoveSection";
import { FaqSection } from "@/sections/FaqSection";
import { CtaSection } from "@/sections/CtaSection";
import { Footer } from "@/sections/Footer";

export const App = () => {
  return (
    <SmoothScroll>
    <body className="relative text-neutral-900 text-[15.3846px] not-italic normal-nums font-medium accent-auto bg-orange-100 box-border caret-transparent block tracking-[normal] leading-5 list-outside list-disc min-h-full outline-[3px] overscroll-x-none overscroll-y-none pointer-events-auto text-start indent-[0px] normal-case visible w-full border-separate font-quicksand md:text-[14.2222px] md:leading-[18.4889px]">
      <PageIntro />
      <div className="fixed text-[15.3846px] box-border caret-transparent h-0 leading-5 outline-[3px] w-0 left-[0%] top-[0%] md:text-[14.2222px] md:leading-[18.4889px] before:accent-auto before:box-border before:caret-transparent before:text-neutral-900 before:table before:text-[15.3846px] before:not-italic before:normal-nums before:font-medium before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-quicksand before:md:text-[14.2222px] before:md:leading-[18.4889px] after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-neutral-900 after:table after:text-[15.3846px] after:not-italic after:normal-nums after:font-medium after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-quicksand after:md:text-[14.2222px] after:md:leading-[18.4889px]"></div>
      <div className="text-[15.3846px] box-border caret-transparent leading-5 outline-[3px] pointer-events-none z-[500] md:text-[14.2222px] md:leading-[18.4889px]">
        <div className="fixed text-[15.3846px] box-border caret-transparent leading-5 outline-[3px] z-[600] inset-0 md:text-[14.2222px] md:leading-[18.4889px]"></div>
      </div>
      <main className="text-[15.3846px] bg-orange-100 box-border caret-transparent leading-5 outline-[3px] overscroll-x-none overscroll-y-none md:text-[14.2222px] md:leading-[18.4889px]">
        <Navbar />
        <div className="fixed text-[15.3846px] box-border caret-transparent leading-5 outline-[3px] pointer-events-none z-[400] inset-0 md:text-[14.2222px] md:leading-[18.4889px]">
          <div className="absolute text-[15.3846px] items-center box-border caret-transparent flex h-full justify-center leading-5 outline-[3px] w-full p-[15.3846px] md:text-[14.2222px] md:leading-[18.4889px] md:p-[56.8889px]">
            <div className="relative text-[15.3846px] items-center aspect-video bg-neutral-900 shadow-[rgba(0,0,0,0.15)_0px_7.69231px_0px_0px] box-border caret-transparent flex h-[min(100%,193.63px)] justify-center leading-5 min-h-[auto] min-w-[auto] opacity-0 outline-[3px] pointer-events-auto rotate-[-5.000006753869806deg] invisible border border-neutral-900 overflow-hidden rounded-[19.2308px] border-solid scale-[0.49999965477729086] md:text-[14.2222px] md:shadow-[rgba(0,0,0,0.15)_0px_7.11111px_0px_0px] md:h-[min(100%,592px)] md:leading-[18.4889px] md:rounded-[21.3333px]"></div>
          </div>
        </div>
        <div className="relative text-[15.3846px] box-border caret-transparent leading-5 outline-[3px] overflow-clip md:text-[14.2222px] md:leading-[18.4889px]">
          <FloatingBadge />
          <div
            id="scroll-lines-range"
            className="relative text-[15.3846px] box-border caret-transparent leading-5 outline-[3px] md:text-[14.2222px] md:leading-[18.4889px]"
          >
            <ScrollLines />
            <div className="relative z-[2]">
              <Hero />
              <SponsorsMarquee />
              <AboutSection />
            </div>
          </div>
          <SpeakersSection />
          <ExpectationsSection />
          <CommunitySection />
          <LoveSection />
          <FaqSection />
          <CtaSection />
          <Footer />
        </div>
      </main>
    </body>
    </SmoothScroll>
  );
};
