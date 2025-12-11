import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Speakers } from "@/components/Speakers";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-brand-purple/30">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Speakers />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
