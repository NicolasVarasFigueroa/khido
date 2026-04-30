"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";

const initialForm = {
  name: "",
  email: "",
  service: "",
  message: "",
  website: ""
};

export default function ContactPageSection() {
  const containerRef = useRef(null);
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({
      ...current,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });
      const data = await response.json();

      if (!response.ok || !data.ok) {
        throw new Error(data.message || "No pudimos enviar el mensaje.");
      }

      setForm(initialForm);
      setStatus("success");
      setFeedback("Mensaje enviado. Te contactaremos pronto para revisar tu solución.");
    } catch (error) {
      setStatus("error");
      setFeedback(error.message || "No pudimos enviar el mensaje. Inténtalo nuevamente.");
    }
  };

  return (
    <section ref={containerRef} className="landing-section relative min-h-[90vh] overflow-hidden pt-36 pb-24 md:pt-48 md:pb-40">
      <div className="noise-bg" />
      <div className="section-veil" />
      <div className="absolute inset-0 grid-background opacity-[0.08]" />
      <div className="absolute left-0 top-32 h-[38rem] w-px bg-gradient-to-b from-transparent via-calipso-300/[0.18] to-transparent opacity-50 md:left-12" />
      <div className="mx-auto max-w-[96rem] px-5 md:px-8 flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10">
        
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
            <a href="https://wa.me/56979872033" target="_blank" rel="noreferrer" className="premium-float group flex items-center gap-6 p-6 rounded-[1.5rem] border border-white/[0.08] bg-white/[0.026] backdrop-blur-xl transition-colors hover:border-[#25D366]/40 hover:bg-[#25D366]/[0.045]">
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
            <a href="mailto:ventas@khido.cl" className="premium-float group flex items-center gap-6 p-6 rounded-[1.5rem] border border-white/[0.08] bg-white/[0.026] backdrop-blur-xl transition-colors hover:border-calipso-300/[0.24] hover:bg-calipso-500/[0.045]">
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
          <div className="contact-form premium-float relative w-full rounded-[2.5rem] border border-white/[0.08] bg-white/[0.028] p-8 md:p-14 backdrop-blur-2xl shadow-[0_24px_90px_-68px_rgba(0,0,0,0.95)] overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-calipso-300/[0.06] rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
            
            <form className="relative z-10 flex flex-col gap-6" onSubmit={handleSubmit}>
              <input
                type="text"
                name="website"
                value={form.website}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm text-white/50 font-medium pl-1">Nombre completo</label>
                  <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required placeholder="Ej. Juan Pérez" className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white placeholder-white/20 outline-none transition-all focus:border-calipso-400/50 focus:bg-white/[0.05]" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm text-white/50 font-medium pl-1">Correo electrónico</label>
                  <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required placeholder="juan@empresa.com" className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white placeholder-white/20 outline-none transition-all focus:border-calipso-400/50 focus:bg-white/[0.05]" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="service" className="text-sm text-white/50 font-medium pl-1">Servicio de interés</label>
                <div className="relative">
                  <select id="service" name="service" value={form.service} onChange={handleChange} required className="w-full appearance-none rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none transition-all focus:border-calipso-400/50 focus:bg-white/[0.05] cursor-pointer">
                    <option value="" disabled className="text-black">Selecciona un servicio...</option>
                    <option value="Automatización Inteligente" className="text-black">Automatización Inteligente</option>
                    <option value="bi" className="text-black">Business Intelligence</option>
                    <option value="data" className="text-black">Data & Machine Learning</option>
                    <option value="Inteligencia Artificial" className="text-black">Inteligencia Artificial</option>
                    <option value="Desarrollo Web y Plataformas" className="text-black">Desarrollo Web y Plataformas</option>
                    <option value="Otro / No estoy seguro" className="text-black">Otro / No estoy seguro</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-5 flex items-center text-white/30">
                    ▼
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm text-white/50 font-medium pl-1">Háblanos de tu proyecto</label>
                <textarea id="message" name="message" value={form.message} onChange={handleChange} required rows="4" placeholder="¿Qué te gustaría construir o mejorar?" className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white placeholder-white/20 outline-none transition-all focus:border-calipso-400/50 focus:bg-white/[0.05]" />
              </div>

              {feedback ? (
                <p className={`rounded-2xl border px-5 py-4 text-sm leading-6 ${
                  status === "success"
                    ? "border-calipso-300/[0.22] bg-calipso-300/[0.055] text-calipso-100"
                    : "border-red-400/[0.22] bg-red-500/[0.055] text-red-100"
                }`}>
                  {feedback}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={status === "loading"}
                className="button-glow mt-4 w-full rounded-2xl bg-calipso-500/90 py-5 text-lg font-semibold text-background transition-all hover:scale-[1.02] hover:bg-calipso-400 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
              >
                {status === "loading" ? "Enviando..." : "Enviar Mensaje"}
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
