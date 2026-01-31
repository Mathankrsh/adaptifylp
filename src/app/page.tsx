import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ProcessSection } from "@/components/process-section";
import { GrowthSection } from "@/components/growth-section";
import { ProposalsSection } from "@/components/proposals-section";
import { Testimonials } from "@/components/testimonials";
import { CTASection, Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProcessSection />
      <GrowthSection />
      <ProposalsSection />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  );
}
