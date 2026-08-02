"use client";

import { ArrowUpRight } from "lucide-react";
import ParticleMorphScene from "@/components/three/ParticleMorphScene";

export default function HeroSection() {
  return (
    <>
      <section
        id="top"
        className="landing-section relative min-h-[100svh] overflow-hidden px-5 pb-8 pt-28 sm:pt-30 md:px-8 md:pb-10 md:pt-32"
      >
        <div className="noise-bg" />
        <div className="section-veil" />
        <div className="absolute inset-0 grid-background opacity-[0.08] z-0" />
        
        <div className="hero-sphere absolute right-[-44%] top-[9%] h-[34rem] w-[34rem] opacity-[0.12] mix-blend-screen pointer-events-none z-0 sm:right-[-24%] md:right-[-8%] md:top-[15%] md:h-[44rem] md:w-[44rem] md:opacity-[0.16] lg:h-[50rem] lg:w-[50rem]">
          <ParticleMorphScene shape="sphere" className="relative h-full w-full" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[calc(100svh-9.5rem)] max-w-7xl flex-col justify-center md:min-h-[calc(100svh-10.5rem)]">
          <div className="max-w-5xl relative z-10">
            

            <h1 className="hero-reveal mb-7 text-[2.85rem] font-semibold leading-[1.02] tracking-tight text-white drop-shadow-sm sm:text-6xl md:text-7xl lg:text-[5.35rem]">
              Impulsa tu empresa con
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-calipso-300/90 via-white to-white/[0.62]">
                Soluciones Tecnológicas.
              </span>
            </h1>
            
            <p className="hero-reveal mb-8 max-w-2xl text-[1.02rem] leading-7 text-white/[0.66] md:mb-10 md:text-lg md:leading-8">
              Diseñamos y construimos tu <strong className="font-medium text-white">solución a medida.</strong>
            </p>

            <div className="hero-reveal flex flex-col items-stretch gap-3 sm:flex-row sm:items-center md:gap-5">
              <a
                href="#contact"
                className="button-glow flex min-h-[3.25rem] items-center justify-center gap-3 rounded-full bg-calipso-500/95 px-7 py-3.5 text-sm font-semibold text-background transition-all hover:bg-calipso-400 sm:px-8"
              >
                Hablemos de tu proyecto
                <ArrowUpRight size={18} strokeWidth={2.5} />
              </a>
              
              <a
                href="#services"
                className="flex min-h-[3.25rem] items-center justify-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.026] px-7 py-3.5 text-sm font-medium text-white/[0.78] backdrop-blur-xl transition-colors hover:bg-white/[0.05] hover:border-white/[0.18] hover:text-white sm:px-8"
              >
                Ver Soluciones
              </a>
            </div>
          </div>

          <div className="hero-reveal relative z-10 mt-12 grid grid-cols-2 gap-x-5 gap-y-6 border-t border-white/10 pt-7 sm:mt-14 md:mt-16 md:grid-cols-4 md:gap-x-4 md:gap-y-0 md:pt-8">
            {[
              ["360°", "Tecnología Integral"],
              ["A medida", "Sin Soluciones Genéricas"],
              ["End-to-end", "De la Idea a Producción"],
              ["Escalable", "Preparado para Crecer"],
            ].map(([value, label]) => (
              <div key={value} className="flex flex-col border-l border-white/10 pl-5 transition-colors duration-500 first:border-0 first:pl-0 odd:border-l-0 odd:pl-0 hover:border-calipso-500/30 md:pl-6 md:odd:border-l md:odd:pl-6 md:first:border-0 md:first:pl-0">
                <span className="mb-1.5 text-3xl font-light tracking-tight text-white md:text-[2.25rem]">{value}</span>
                <span className="text-xs font-medium uppercase tracking-[0.12em] text-white/[0.46] md:text-sm md:normal-case md:tracking-normal">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
