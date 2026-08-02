import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import CompanySection from "@/components/sections/CompanySection";
import LandingAtmosphere from "@/components/effects/LandingAtmosphere";

export const metadata = {
  title: "Compañía — Khido",
  description: "Conoce al equipo de KHIDO: estrategia, diseño, software, productos digitales, datos, Power BI, cloud, automatización e IA.",
};

export default function CompanyPage() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-[#030712] text-white">
      <LandingAtmosphere />
      <Header />
      <CompanySection />
      <Footer />
    </main>
  );
}
