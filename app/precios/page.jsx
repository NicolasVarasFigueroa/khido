import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import PricingSection from "@/components/sections/Pricing";
import LandingAtmosphere from "@/components/effects/LandingAtmosphere";

export default function PreciosPage() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-[#030712] text-white">
      <LandingAtmosphere />
      <Header />
      <PricingSection />
      <Footer />
    </main>
  );
}
