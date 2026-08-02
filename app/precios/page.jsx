import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import PricingSection from "@/components/sections/Pricing";
import LandingAtmosphere from "@/components/effects/LandingAtmosphere";

export const metadata = {
  title: "Planes y Soluciones | KHIDO",
  description: "Alternativas de desarrollo, datos, Power BI, integración, cloud, automatización e IA adaptadas a cada proyecto."
};

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
