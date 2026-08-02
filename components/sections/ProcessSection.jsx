"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Search, PenTool, Code2, Rocket, Network, Cpu, Blocks } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    title: "Descubrimiento & Estrategia",
    description: "Entendemos el negocio, los usuarios y el desafío técnico para definir una solución con objetivos y alcance claros.",
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
    description: "Definimos la arquitectura, experiencia, datos, integraciones, seguridad e infraestructura que sostendrán el proyecto.",
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
    title: "Desarrollo & Integración",
    description: "Construimos, conectamos y desplegamos la solución con código mantenible, pruebas y entregas iterativas.",
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
    title: "Evolución & Soporte",
    description: "Monitoreamos, mantenemos y mejoramos la solución para acompañar nuevas necesidades, usuarios y volúmenes.",
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
    <section id="process" ref={sectionRef} className="landing-section relative px-5 pb-28 pt-20 md:px-8 md:pb-36 md:pt-24">
      <div className="section-veil" />
      <div className="absolute inset-0 grid-background opacity-[0.08] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="process-header mb-14 max-w-2xl md:mb-20">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.26em] text-calipso-300/[0.82]">
            METODOLOGÍA KHIDO
          </p>
          <h2 className="mb-5 text-4xl font-semibold leading-[1.12] tracking-tight text-white md:text-5xl">
            Cómo lo <span className="text-transparent bg-clip-text bg-gradient-to-r from-calipso-300 to-white/70">hacemos.</span>
          </h2>
          <p className="text-base leading-8 text-white/[0.6] md:text-lg">
            Un proceso completo para convertir una necesidad de negocio en tecnología confiable, útil y preparada para crecer.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3 md:gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx} 
                className={`bento-item bento-card group relative flex min-h-[17rem] cursor-default flex-col justify-between overflow-hidden rounded-lg p-6 md:min-h-0 md:p-7 ${step.span}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-calipso-500/0 via-calipso-500/0 to-calipso-500/[0.026] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {step.graphic}

                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-lg bg-white/[0.026] border border-white/[0.09] group-hover:border-calipso-500/[0.24] transition-colors duration-500">
                  <Icon size={20} className="text-white/75 group-hover:text-calipso-300 transition-colors duration-500" />
                </div>
                
                <div className="relative z-10 mt-auto">
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <span className="text-xs font-mono font-medium px-2 py-1 bg-white/[0.04] rounded text-white/40">
                      {step.num}
                    </span>
                    <h3 className="text-xl font-semibold leading-snug tracking-tight text-white/[0.92] md:text-[1.45rem]">
                      {step.title}
                    </h3>
                  </div>
                  <p className="max-w-md text-sm leading-7 text-white/[0.58] md:text-base">
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
