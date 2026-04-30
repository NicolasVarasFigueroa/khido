"use client";
import { Linkedin, Instagram, Mail, MessageCircle } from "lucide-react";

const columns = {
  Servicios: ["Desarrollo Web", "Sistemas y Plataformas", "Automatización de Procesos", "Business Intelligence"],
  Compañía: ["Sobre Nosotros", "Cómo Trabajamos", "Contacto"],
  Legal: ["Términos de Servicio", "Privacidad"]
};

export default function Footer() {

  return (
    <footer className="footer-aura relative bg-background px-5 pb-10 pt-32 md:px-8 md:pt-36">
      <div className="mx-auto grid max-w-[96rem] gap-14 md:grid-cols-[1.25fr_2fr] md:gap-16">
        
        <div className="space-y-8">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="KHIDO Logo"
              className="h-16 sm:h-20 md:h-24 w-auto object-contain opacity-90 transition-all duration-300 hover:opacity-100 hover:scale-105"
            />
          </div>

          {/* Redes */}
          <div className="flex flex-col gap-4">
            {/* LinkedIn */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-white/60 transition-all duration-300 hover:text-white"
            >
              <Linkedin size={18} className="transition-colors group-hover:text-calipso-300" />
              <span className="border-b border-white/20 pb-1 transition-all group-hover:border-calipso-300/60">
                LinkedIn
              </span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/56973011954"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-white/60 transition-all duration-300 hover:text-white"
            >
              <MessageCircle size={18} className="transition-colors group-hover:text-green-400" />
              <span className="border-b border-white/20 pb-1 transition-all group-hover:border-green-400/60">
                WhatsApp
              </span>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/tuusuario"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-white/60 transition-all duration-300 hover:text-white"
            >
              <Instagram size={18} className="transition-colors group-hover:text-pink-400" />
              <span className="border-b border-white/20 pb-1 transition-all group-hover:border-pink-400/60">
                Instagram
              </span>
            </a>
          </div>

          {/* Email */}
          <a
            href="mailto:ventas@khido.cl"
            className="group flex items-center gap-3 text-white/80 transition-all duration-300 hover:text-calipso-300"
          >
            <Mail size={18} className="transition-colors group-hover:text-calipso-300" />
            <span className="hover:tracking-wide">ventas@khido.cl</span>
          </a>

          {/* Ubicación */}
          <p className="text-base text-white/40 md:text-lg">
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
