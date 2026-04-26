import Header from "@/components/sections/Header";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import TrustedSection from "@/components/sections/TrustedSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-ink">
      <Header />
      <HeroSection />
      <ServicesSection />
      <CaseStudiesSection />
      <TrustedSection />
      <CTASection />
      <Footer />
    </main>
  );
}
