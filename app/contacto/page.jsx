import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ContactPageSection from "@/components/sections/ContactPageSection";
import LandingAtmosphere from "@/components/effects/LandingAtmosphere";

export const metadata = {
  title: "Contacto | KHIDO",
  description: "Hablemos de tu negocio. Estamos listos para construir la infraestructura que necesitas.",
};

export default function ContactoPage() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-[#030712] text-white">
      <LandingAtmosphere />
      <Header />
      <ContactPageSection />
      <Footer />
    </main>
  );
}
