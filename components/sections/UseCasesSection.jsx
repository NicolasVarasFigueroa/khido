"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Zap, TrendingUp, PieChart, Laptop } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    title: "Cero Tareas Manuales",
    description: "Elimina el trabajo repetitivo de tu equipo. Automatizamos la carga de datos, correos y sincronización entre sistemas.",
    icon: Zap,
  },
  {
    title: "Aumento de Ventas",
    description: "Implementamos agentes inteligentes que califican leads 24/7 y recuperan carritos abandonados automáticamente.",
    icon: TrendingUp,
  },
  {
    title: "Decisiones Basadas en Data",
    description: "Conectamos todas tus fuentes de información a dashboards en tiempo real para que dejes de adivinar.",
    icon: PieChart,
  },
  {
    title: "Sistemas Propios",
    description: "Desarrollamos la infraestructura web que necesitas (LMS, Portales B2B, E-commerce) para dejar de pagar software externo.",
    icon: Laptop,
  },
];

export default function UseCasesSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".use-header", 
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(".use-card", 
        { y: 34, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.78,
          stagger: 0.09,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="use-cases" ref={sectionRef} className="landing-section relative px-5 py-28 md:px-8 md:py-36 lg:py-40">
      <div className="section-veil" />
      <div className="absolute inset-0 grid-background opacity-[0.075] pointer-events-none" />
      <div className="noise-bg" />

      <div className="absolute left-0 top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="use-header mb-14 max-w-3xl md:mb-20">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.26em] text-calipso-300/[0.82]">
            Beneficios Directos
          </p>
          <h2 className="mb-5 text-4xl font-semibold leading-[1.12] tracking-tight text-white md:text-5xl">
            El impacto de operar <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-calipso-300 to-white/70">con inteligencia.</span>
          </h2>
          <p className="max-w-2xl text-base leading-8 text-white/[0.6] md:text-lg">
            Sistemas diseñados no solo para verse bien, sino para afectar directamente la última línea de tu estado de resultados.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={idx}
                className="use-card bento-card group relative flex min-h-[18rem] flex-col justify-between overflow-hidden rounded-lg p-6 md:p-7"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-calipso-500/[0.045] opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />

                <div>
                  <div className="mb-6 flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-lg bg-white/[0.024] border border-white/[0.09] text-white/[0.62] transition-all duration-500 group-hover:border-calipso-500/[0.24] group-hover:bg-calipso-500/[0.07] group-hover:text-calipso-300 group-hover:scale-[1.04]">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="mb-4 text-xl font-semibold leading-snug tracking-tight text-white/[0.92]">
                    {benefit.title}
                  </h3>
                  <p className="text-sm leading-7 text-white/[0.58] transition-colors duration-500 group-hover:text-white/[0.72] md:text-[0.95rem]">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
