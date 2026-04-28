"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Zap, TrendingUp, PieChart, Laptop } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const useCases = [
  {
    title: "Reducir carga operativa",
    description: "Automatizamos tareas repetitivas y procesos internos.",
    icon: Zap,
  },
  {
    title: "Aumentar ventas",
    description: "Sistemas inteligentes que capturan, responden y convierten clientes.",
    icon: TrendingUp,
  },
  {
    title: "Tomar mejores decisiones",
    description: "Datos claros y en tiempo real para gestionar tu negocio.",
    icon: PieChart,
  },
  {
    title: "Digitalizar tu empresa",
    description: "Creamos plataformas, sistemas y flujos a medida.",
    icon: Laptop,
  },
];

export default function UseCasesSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".use-header", 
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(".use-card", 
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
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
    <section id="use-cases" ref={sectionRef} className="relative bg-ink px-5 py-32 md:px-8">
      <div className="absolute left-0 top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="mx-auto max-w-[96rem]">
        <div className="use-header mb-16 max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-calipso-300">
            Casos de Uso
          </p>
          <h2 className="text-3xl font-light leading-tight tracking-[-0.04em] text-white md:text-5xl">
            Soluciones con <span className="font-semibold italic">impacto real.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {useCases.map((useCase, idx) => {
            const Icon = useCase.icon;
            return (
              <div
                key={idx}
                className="use-card group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/5 bg-white/[0.01] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-calipso-500/30 hover:bg-white/[0.03]"
              >
                {/* Glow effect inside card */}
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-calipso-500/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                <div>
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-colors duration-500 group-hover:border-calipso-500/30 group-hover:bg-calipso-500/10 group-hover:text-calipso-300">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="mb-3 text-xl font-medium tracking-tight text-white">
                    {useCase.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/50 group-hover:text-white/70 transition-colors duration-500">
                    {useCase.description}
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
