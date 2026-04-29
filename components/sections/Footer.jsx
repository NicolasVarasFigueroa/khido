"use client";

const columns = {
  Servicios: ["Desarrollo Web", "Sistemas y Plataformas", "Automatización de Procesos", "Business Intelligence"],
  Compañía: ["Sobre Nosotros", "Cómo Trabajamos", "Contacto"],
  Legal: ["Términos de Servicio", "Privacidad"]
};

export default function Footer() {

  return (
    <footer className="footer-aura relative bg-background px-5 pb-10 pt-32 md:px-8 md:pt-36">
      <div className="mx-auto grid max-w-[96rem] gap-14 md:grid-cols-[1.25fr_2fr] md:gap-16">
        <div>
          <a href="mailto:ventas@khido.cl" className="text-2xl font-light tracking-tight text-white/90 transition-colors hover:text-calipso-300 md:text-3xl">ventas@khido.cl</a>
          <a href="#" className="mt-4 block w-max border-b border-white/20 pb-1 text-base text-white/60 transition-colors hover:border-calipso-300/50 hover:text-white md:text-lg">LinkedIn ↗</a>

          <p className="mt-12 text-base text-white/45 md:text-lg">
            Santiago, Chile
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {Object.entries(columns).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-5 text-sm font-medium uppercase tracking-[0.16em] text-white/45">{title}</h3>
              <ul className="space-y-3 text-base text-white/62 md:text-lg">
                {links.map((link) => (
                  <li key={link}><a href="#" className="transition-colors hover:text-calipso-200">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <p className="mx-auto mt-20 max-w-[96rem] border-t border-white/[0.06] pt-8 text-sm text-white/30">© 2026 KHIDO. Todos los derechos reservados.</p>
    </footer>
  );
}
