import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import CTASection from "@/components/sections/CTASection";
import DetailedServicesSection from "@/components/sections/DetailedServicesSection";

export const metadata = {
  title: "Servicios | KHIDO",
  description: "Descubre cómo construimos la infraestructura que tu empresa necesita para operar más rápido y multiplicar su rentabilidad.",
};

export default function ServiciosPage() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-background">
      <Header />
      <DetailedServicesSection />
      <CTASection />
      <Footer />
    </main>
  );
}
