import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import LandingAtmosphere from "@/components/effects/LandingAtmosphere";

export const metadata = {
  title: "Términos de Servicio | KHIDO",
  description: "Condiciones generales para trabajar con KHIDO."
};

export default function TerminosPage() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-[#030712] text-white">
      <LandingAtmosphere />
      <Header />
      <section className="landing-section relative px-5 pb-24 pt-36 md:px-8 md:pb-32 md:pt-44">
        <div className="section-veil" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.26em] text-calipso-300/[0.82]">
            Legal
          </p>
          <h1 className="mb-6 text-4xl font-semibold leading-[1.12] tracking-tight text-white md:text-5xl">
            Términos de Servicio
          </h1>
          <div className="bento-card rounded-lg p-6 md:p-8">
            <p className="text-base leading-8 text-white/[0.64] md:text-lg">
              Estos términos describen las condiciones generales bajo las que KHIDO presta servicios de software,
              productos digitales, datos, Power BI, integraciones, cloud, automatización e inteligencia artificial. Para detalles contractuales específicos,
              escríbenos a contacto@khido.cl.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
