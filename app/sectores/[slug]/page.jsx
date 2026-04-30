import { notFound } from "next/navigation";
import { sectorsData } from "@/lib/sectorsData";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import CTASection from "@/components/sections/CTASection";
import SectorHeroSection from "@/components/sections/SectorHeroSection";
import SectorPainPointsSection from "@/components/sections/SectorPainPointsSection";
import SectorServicesSection from "@/components/sections/SectorServicesSection";
import SectorWorkflowSection from "@/components/sections/SectorWorkflowSection";
import LandingAtmosphere from "@/components/effects/LandingAtmosphere";

// Next.js 15+ requiere que params sea tratado como una promesa
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const sector = sectorsData.find((s) => s.slug === resolvedParams.slug);
  
  if (!sector) {
    return {
      title: "Sector no encontrado | KHIDO",
    };
  }

  return {
    title: `Soluciones para ${sector.title} | KHIDO`,
    description: sector.heroDescription,
  };
}

export default async function SectorPage({ params }) {
  const resolvedParams = await params;
  const sector = sectorsData.find((s) => s.slug === resolvedParams.slug);

  if (!sector) {
    notFound();
  }

  return (
    <main className="relative min-h-screen overflow-x-clip bg-[#030712] text-white">
      <LandingAtmosphere />
      <Header />
      <SectorHeroSection slug={resolvedParams.slug} />
      <SectorPainPointsSection slug={resolvedParams.slug} />
      <SectorServicesSection slug={resolvedParams.slug} />
      <SectorWorkflowSection slug={resolvedParams.slug} />
      <CTASection />
      <Footer />
    </main>
  );
}
