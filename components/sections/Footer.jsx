"use client";
import { Linkedin, Instagram, Mail } from "lucide-react";

const columns = {
  Servicios: [
    { label: "Software y Plataformas", href: "/servicios" },
    { label: "Web, Apps y E-commerce", href: "/servicios" },
    { label: "Data, ETL y Power BI", href: "/servicios" },
    { label: "Cloud, Automatización e IA", href: "/servicios" }
  ],
  Compañía: [
    { label: "Sobre Nosotros", href: "/compania" },
    { label: "Cómo Trabajamos", href: "/compania" },
    { label: "Contacto", href: "/contacto" }
  ],
  Legal: [
    { label: "Términos de Servicio", href: "/terminos" },
    { label: "Privacidad", href: "/privacidad" }
  ]
};

export default function Footer() {

  return (
    <footer className="footer-aura relative border-t border-white/[0.075] px-5 pb-8 pt-14 md:px-8 md:pb-10 md:pt-16">
      <div className="mx-auto max-w-[80rem]">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:gap-x-12 lg:grid-cols-[1.25fr_repeat(3,minmax(0,1fr))] lg:gap-x-14">
        
        <div className="col-span-2 max-w-sm space-y-5 lg:col-span-1">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="KHIDO Logo"
              className="h-12 w-auto object-contain opacity-[0.92] transition-opacity duration-300 hover:opacity-100 sm:h-14"
            />
          </div>

          {/* Redes */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/khidochile/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-11 items-center gap-2.5 text-sm text-white/[0.58] transition-colors duration-300 hover:text-white"
            >
              <Linkedin size={17} className="transition-colors group-hover:text-calipso-300" />
              <span className="border-b border-white/[0.14] pb-0.5 transition-colors group-hover:border-calipso-300/60">
                LinkedIn
              </span>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/khido.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-11 items-center gap-2.5 text-sm text-white/[0.58] transition-colors duration-300 hover:text-white"
            >
              <Instagram size={17} className="transition-colors group-hover:text-pink-400" />
              <span className="border-b border-white/[0.14] pb-0.5 transition-colors group-hover:border-pink-400/60">
                Instagram
              </span>
            </a>
          </div>

          {/* Email */}
          <a
            href="mailto:contacto@khido.cl"
            className="group flex min-h-11 w-fit items-center gap-2.5 text-sm font-medium text-white/[0.82] transition-colors duration-300 hover:text-calipso-300"
          >
            <Mail size={17} className="transition-colors group-hover:text-calipso-300" />
            <span>contacto@khido.cl</span>
          </a>

          {/* Ubicación */}
          <p className="text-sm text-white/[0.4]">
            Santiago, Chile
          </p>
        </div>
          {Object.entries(columns).map(([title, links]) => (
            <nav key={title} aria-label={title} className="min-w-0 lg:pt-1">
              <h3 className="mb-5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/[0.46]">{title}</h3>
              <ul className="space-y-3 text-sm leading-6 text-white/[0.62]">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="inline-block py-0.5 transition-colors hover:text-calipso-200 focus-visible:text-calipso-200">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <p className="mt-12 border-t border-white/[0.07] pt-6 text-xs leading-6 text-white/[0.38] md:mt-14 md:text-sm">
          © 2026 KHIDO. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
