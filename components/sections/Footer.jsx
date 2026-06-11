"use client";
import { Linkedin, Instagram, Mail } from "lucide-react";

const columns = {
  Servicios: [
    { label: "Desarrollo Web", href: "/servicios" },
    { label: "Sistemas y Plataformas", href: "/servicios" },
    { label: "Automatización de Procesos", href: "/servicios" },
    { label: "Business Intelligence", href: "/servicios" }
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
    <footer className="footer-aura landing-section relative px-5 pb-10 pt-24 md:px-8 md:pt-32">
      <div className="mx-auto grid max-w-[90rem] gap-12 md:grid-cols-[1.15fr_2fr] md:gap-16">
        
        <div className="space-y-7">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="KHIDO Logo"
              className="h-14 w-auto object-contain opacity-[0.92] transition-all duration-300 hover:opacity-100 sm:h-16 md:h-[4.5rem]"
            />
          </div>

          {/* Redes */}
          <div className="flex flex-col gap-4">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/khidochile/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-sm text-white/[0.62] transition-all duration-300 hover:text-white md:text-base"
            >
              <Linkedin size={18} className="transition-colors group-hover:text-calipso-300" />
              <span className="border-b border-white/[0.18] pb-1 transition-all group-hover:border-calipso-300/60">
                LinkedIn
              </span>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/khido.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-sm text-white/[0.62] transition-all duration-300 hover:text-white md:text-base"
            >
              <Instagram size={18} className="transition-colors group-hover:text-pink-400" />
              <span className="border-b border-white/[0.18] pb-1 transition-all group-hover:border-pink-400/60">
                Instagram
              </span>
            </a>
          </div>

          {/* Email */}
          <a
            href="mailto:contacto@khido.cl"
            className="group flex items-center gap-3 text-sm font-medium text-white/[0.82] transition-colors duration-300 hover:text-calipso-300 md:text-base"
          >
            <Mail size={18} className="transition-colors group-hover:text-calipso-300" />
            <span>contacto@khido.cl</span>
          </a>

          {/* Ubicación */}
          <p className="text-sm text-white/[0.42] md:text-base">
            Santiago, Chile
          </p>
        </div>
        <div className="grid grid-cols-1 gap-9 sm:grid-cols-3 md:gap-10">
          {Object.entries(columns).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-white/[0.46]">{title}</h3>
              <ul className="space-y-3 text-sm leading-7 text-white/[0.64] md:text-base">
                {links.map((link) => (
                  <li key={link.label}><a href={link.href} className="transition-colors hover:text-calipso-200">{link.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <p className="mx-auto mt-16 max-w-[90rem] border-t border-white/[0.07] pt-7 text-sm text-white/[0.36] md:mt-20">© 2026 KHIDO. Todos los derechos reservados.</p>
    </footer>
  );
}
