import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { PhotoGallery } from "@/components/PhotoGallery";
import { Stats } from "@/components/Stats";
import { PainPoints } from "@/components/PainPoints";
import { Features } from "@/components/Features";
import { EventDetails } from "@/components/EventDetails";
import { Speakers } from "@/components/Speakers";
import { CaseStudy } from "@/components/CaseStudy";
import { Prizes } from "@/components/Prizes";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-brand-purple/30">
      <Navbar />
      <main>
        <Hero />
        <AnimatedSection>
          <Marquee />
        </AnimatedSection>
        <AnimatedSection>
          <PainPoints />
        </AnimatedSection>
        <AnimatedSection>
          <PhotoGallery />
        </AnimatedSection>
        <AnimatedSection>
          <Stats />
        </AnimatedSection>
        <AnimatedSection>
          <Features />
        </AnimatedSection>
        <AnimatedSection>
          <EventDetails />
        </AnimatedSection>
        <AnimatedSection>
          <Speakers />
        </AnimatedSection>
        <AnimatedSection>
          <CaseStudy />
        </AnimatedSection>
        <AnimatedSection>
          <Prizes />
        </AnimatedSection>
        <AnimatedSection>
          <Testimonials />
        </AnimatedSection>
        <AnimatedSection>
          <Pricing />
        </AnimatedSection>
        <AnimatedSection>
          <FAQ />
        </AnimatedSection>
      </main>
      <AnimatedSection>
        <Footer />
      </AnimatedSection>
    </div>
  );
}
