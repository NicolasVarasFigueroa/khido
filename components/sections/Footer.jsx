"use client";

const columns = {
  Servicios: ["Desarrollo Web", "Sistemas y Plataformas", "Automatización de Procesos", "Business Intelligence"],
  Compañía: ["Sobre Nosotros", "Cómo Trabajamos", "Contacto"],
  Legal: ["Términos de Servicio", "Privacidad"]
};

export default function Footer() {

  return (
    <footer className="footer-aura relative bg-ink px-5 pb-12 pt-36 md:px-8">
      <div className="mx-auto grid max-w-[96rem] gap-16 md:grid-cols-[1.25fr_2fr]">
        <div>
          <a href="mailto:ventas@khido.cl" className="text-3xl font-light hover:text-calipso-300 transition-colors">ventas@khido.cl</a>
          <a href="#" className="mt-4 block w-max border-b border-white/30 pb-1 text-xl text-white/70 hover:text-white transition-colors">LinkedIn ↗</a>

          <p className="mt-12 text-lg text-white/50">
            Santiago, Chile
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {Object.entries(columns).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-5 text-lg text-white/48">{title}</h3>
              <ul className="space-y-3 text-lg">
                {links.map((link) => (
                  <li key={link}><a href="#" className="hover:text-calipso-200">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <p className="mx-auto mt-20 max-w-[96rem] text-sm text-white/30">© 2026 KHIDO. Todos los derechos reservados.</p>
    </footer>
  );
}
