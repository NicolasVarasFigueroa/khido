import Header from "@/components/sections/Header";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import UseCasesSection from "@/components/sections/UseCasesSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-ink">
      <Header />
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <UseCasesSection />
      <CTASection />
      <Footer />
    </main>
  );
}
