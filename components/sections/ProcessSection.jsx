"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Search, PenTool, Code2, Rocket, Network, Cpu, Blocks } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    title: "Auditoría & Análisis",
    description: "Mapeamos tus procesos actuales e identificamos los cuellos de botella exactos donde pierdes tiempo y dinero.",
    icon: Search,
    graphic: (
      <div className="absolute right-4 top-4 opacity-20 flex gap-2">
        <div className="w-16 h-16 rounded-xl border border-white border-dashed flex items-center justify-center animate-[spin_10s_linear_infinite]"><Network size={24}/></div>
      </div>
    ),
    span: "md:col-span-2"
  },
  {
    num: "02",
    title: "Arquitectura de Solución",
    description: "Diseñamos la estructura tecnológica: bases de datos, integraciones de API y modelos de IA.",
    icon: PenTool,
    graphic: (
      <div className="absolute -right-4 -bottom-4 opacity-10">
        <Blocks size={120} strokeWidth={1} />
      </div>
    ),
    span: "md:col-span-1"
  },
  {
    num: "03",
    title: "Desarrollo & Deploy",
    description: "Construimos tu infraestructura. Código limpio, automatizaciones robustas y pruebas de estrés.",
    icon: Code2,
    graphic: (
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-20 flex flex-col gap-2 p-4">
        <div className="w-24 h-2 bg-calipso-500 rounded-full" />
        <div className="w-16 h-2 bg-white/50 rounded-full" />
        <div className="w-32 h-2 bg-white/30 rounded-full" />
      </div>
    ),
    span: "md:col-span-1"
  },
  {
    num: "04",
    title: "Escalabilidad Continua",
    description: "Monitoreamos el rendimiento, aplicamos analítica de datos y escalamos los servidores según demanda.",
    icon: Rocket,
    graphic: (
      <div className="absolute right-8 bottom-8 opacity-20">
        <Cpu size={80} strokeWidth={1} />
      </div>
    ),
    span: "md:col-span-2"
  }
];

export default function ProcessSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".process-header", {
        y: 20,
        opacity: 0,
        duration: 0.95,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".bento-item", {
        y: 24,
        opacity: 0,
        duration: 0.78,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={sectionRef} className="relative bg-background px-5 pb-36 pt-20 md:px-8 md:pt-24 border-b border-white/[0.06]">
      <div className="absolute inset-0 grid-background opacity-[0.18] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="process-header mb-16 max-w-2xl md:mb-20">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.26em] text-calipso-300/80">
            METODOLOGÍA KHIDO
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl mb-5">
            Cómo lo <span className="text-transparent bg-clip-text bg-gradient-to-r from-calipso-300 to-white/70">hacemos.</span>
          </h2>
          <p className="text-white/[0.54] text-lg leading-8">
            Un proceso iterativo diseñado para desplegar sistemas corporativos rápidos, seguros y escalables.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[280px]">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx} 
                className={`bento-item bento-card relative overflow-hidden rounded-2xl p-7 md:p-8 flex flex-col justify-between group cursor-default ${step.span}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-calipso-500/0 via-calipso-500/0 to-calipso-500/[0.035] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {step.graphic}

                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.03] border border-white/10 group-hover:border-calipso-500/25 transition-colors duration-500">
                  <Icon size={20} className="text-white/75 group-hover:text-calipso-300 transition-colors duration-500" />
                </div>
                
                <div className="relative z-10 mt-auto">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-mono font-medium px-2 py-1 bg-white/[0.04] rounded text-white/40">
                      {step.num}
                    </span>
                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-white/90">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm md:text-base leading-relaxed text-white/50 max-w-md">
                    {step.description}
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
