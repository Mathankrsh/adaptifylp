import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { HowItWorks } from "@/components/how-it-works";
import { AudioDemo } from "@/components/audio-demo";
import { VoiceGallery } from "@/components/voice-gallery";
import { Testimonials } from "@/components/testimonials";
import { CTASection, Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <AudioDemo />
      <VoiceGallery />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  );
}
