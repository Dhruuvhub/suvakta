import { FloatingBadge } from "@/components/FloatingBadge";
import { ScrollLines } from "@/components/ScrollLines";
import { PageIntro } from "@/components/PageIntro";
import { Navbar } from "@/sections/Navbar";
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

export const HomePage = () => {
  return (
    <>
      <PageIntro />
      <main className="overflow-x-clip bg-suvakta-50">
        <Navbar />
        <div className="relative overflow-x-clip">
          <FloatingBadge />
          <div id="scroll-lines-range" className="relative">
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
    </>
  );
};
