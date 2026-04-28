"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    title: "Entendemos tu negocio",
    description: "Analizamos tus procesos actuales, identificamos cuellos de botella y definimos los objetivos clave a lograr."
  },
  {
    num: "02",
    title: "Diseñamos la solución",
    description: "Creamos la arquitectura tecnológica, seleccionamos las herramientas adecuadas y diseñamos flujos optimizados."
  },
  {
    num: "03",
    title: "Construimos el sistema",
    description: "Desarrollamos la automatización, plataforma o IA con metodologías ágiles, asegurando calidad y rapidez."
  },
  {
    num: "04",
    title: "Escalamos contigo",
    description: "Lanzamos la solución, monitoreamos los resultados y ajustamos para garantizar el máximo rendimiento continuo."
  }
];

export default function ProcessSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".process-header", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".process-step", {
        x: -40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
      });
      
      gsap.from(".process-line", {
        scaleX: 0,
        transformOrigin: "left",
        duration: 1.5,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={sectionRef} className="relative bg-ink px-5 pb-24 pt-4 md:px-8">
      <div className="mx-auto max-w-[96rem]">
        <div className="process-header mb-12 max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-calipso-300">
            Paso a Paso
          </p>
          <h2 className="text-3xl font-light leading-tight tracking-[-0.04em] text-white md:text-5xl">
            Te acompañamos en <span className="font-semibold italic">cada etapa.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => (
            <div key={idx} className="process-step relative flex flex-col gap-4">
              {idx !== steps.length - 1 && (
                <div className="process-line absolute left-14 top-6 hidden h-[1px] w-[calc(100%-2rem)] bg-gradient-to-r from-calipso-500/50 via-white/10 to-transparent lg:block" />
              )}
              
              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-calipso-500/30 bg-ink shadow-[0_0_15px_rgba(0,191,203,0.15)]">
                <span className="text-sm font-semibold text-calipso-300">{step.num}</span>
              </div>
              
              <div className="mt-2 pr-4">
                <h3 className="mb-2 text-xl font-medium tracking-tight text-white">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/60">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
