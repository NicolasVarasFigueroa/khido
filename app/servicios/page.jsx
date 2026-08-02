import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import CTASection from "@/components/sections/CTASection";
import DetailedServicesSection from "@/components/sections/DetailedServicesSection";
import LandingAtmosphere from "@/components/effects/LandingAtmosphere";

export const metadata = {
  title: "Servicios | KHIDO",
  description: "Software a medida, web y apps, data engineering, ETL, Power BI, integraciones, cloud, automatización e IA en un solo equipo.",
};

export default function ServiciosPage() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-[#030712] text-white">
      <LandingAtmosphere />
      <Header />
      <DetailedServicesSection />
      <CTASection />
      <Footer />
    </main>
  );
}
