"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";

export default function ContactPageSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in title and left side
      gsap.fromTo(".contact-left > *", 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" }
      );

      // Fade in form on right side
      gsap.fromTo(".contact-form", 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.3 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative bg-background pt-36 pb-24 md:pt-48 md:pb-40 min-h-[90vh]">
      <div className="mx-auto max-w-[96rem] px-5 md:px-8 flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Lado Izquierdo: Info Directa */}
        <div className="contact-left w-full lg:w-5/12 flex flex-col justify-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-calipso-300">Contacto</p>
          <h1 className="text-5xl md:text-7xl font-light leading-tight tracking-[-0.04em] text-white mb-6">
            Hablemos de tu <br className="hidden md:block"/> <span className="font-semibold italic">negocio.</span>
          </h1>
          <p className="text-white/70 text-lg mb-12 max-w-md leading-relaxed">
            Ya sea que necesites automatizar procesos, integrar IA o desarrollar una plataforma a medida, estamos listos para construir la infraestructura que necesitas.
          </p>

          <div className="flex flex-col gap-5">
            {/* WhatsApp Card */}
            <a href="https://wa.me/56979872033" target="_blank" rel="noreferrer" className="group flex items-center gap-6 p-6 rounded-[1.5rem] border border-white/5 bg-white/[0.02] transition-colors hover:border-[#25D366]/50 hover:bg-[#25D366]/5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366] transition-transform group-hover:scale-110">
                <MessageCircle size={28} />
              </div>
              <div>
                <p className="text-white font-medium text-lg mb-1">WhatsApp</p>
                <p className="text-white/50 text-sm">Escríbenos para una respuesta rápida</p>
              </div>
              <ArrowRight className="ml-auto text-white/20 transition-transform group-hover:translate-x-2 group-hover:text-[#25D366]" />
            </a>

            {/* Correo Card */}
            <a href="mailto:ventas@khido.cl" className="group flex items-center gap-6 p-6 rounded-[1.5rem] border border-white/5 bg-white/[0.02] transition-colors hover:border-calipso-500/50 hover:bg-calipso-500/5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-calipso-500/10 text-calipso-400 transition-transform group-hover:scale-110">
                <Mail size={28} />
              </div>
              <div>
                <p className="text-white font-medium text-lg mb-1">Correo Electrónico</p>
                <p className="text-white/50 text-sm">ventas@khido.cl</p>
              </div>
              <ArrowRight className="ml-auto text-white/20 transition-transform group-hover:translate-x-2 group-hover:text-calipso-400" />
            </a>
          </div>
        </div>

        {/* Lado Derecho: Formulario */}
        <div className="w-full lg:w-7/12 flex items-center">
          <div className="contact-form relative w-full rounded-[2.5rem] border border-white/10 bg-black/50 p-8 md:p-14 backdrop-blur-xl shadow-[0_0_50px_rgba(0,191,203,0.03)] overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-calipsoGlow/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
            
            <form className="relative z-10 flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm text-white/50 font-medium pl-1">Nombre completo</label>
                  <input type="text" id="name" placeholder="Ej. Juan Pérez" className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white placeholder-white/20 outline-none transition-all focus:border-calipso-400/50 focus:bg-white/[0.05]" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm text-white/50 font-medium pl-1">Correo electrónico</label>
                  <input type="email" id="email" placeholder="juan@empresa.com" className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white placeholder-white/20 outline-none transition-all focus:border-calipso-400/50 focus:bg-white/[0.05]" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="service" className="text-sm text-white/50 font-medium pl-1">Servicio de interés</label>
                <div className="relative">
                  <select id="service" defaultValue="" className="w-full appearance-none rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none transition-all focus:border-calipso-400/50 focus:bg-white/[0.05] cursor-pointer">
                    <option value="" disabled className="text-black">Selecciona un servicio...</option>
                    <option value="automatizacion" className="text-black">Automatización Inteligente</option>
                    <option value="bi" className="text-black">Business Intelligence</option>
                    <option value="data" className="text-black">Data & Machine Learning</option>
                    <option value="ia" className="text-black">Inteligencia Artificial</option>
                    <option value="web" className="text-black">Desarrollo Web y Plataformas</option>
                    <option value="otro" className="text-black">Otro / No estoy seguro</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-5 flex items-center text-white/30">
                    ▼
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm text-white/50 font-medium pl-1">Háblanos de tu proyecto</label>
                <textarea id="message" rows="4" placeholder="¿Qué te gustaría construir o mejorar?" className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white placeholder-white/20 outline-none transition-all focus:border-calipso-400/50 focus:bg-white/[0.05]" />
              </div>

              <button className="button-glow mt-4 w-full rounded-2xl bg-calipsoGlow py-5 text-lg font-semibold text-black transition-all hover:scale-[1.02]">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
