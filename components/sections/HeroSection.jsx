"use client";

import { ArrowUpRight } from "lucide-react";
import ParticleMorphScene from "@/components/three/ParticleMorphScene";

export default function HeroSection() {
  return (
    <>
      <section
        id="top"
        className="landing-section relative min-h-screen overflow-hidden px-5 pb-24 pt-28 sm:pt-32 md:px-8 md:pb-36 md:pt-36 lg:pb-40 lg:pt-40"
      >
        <div className="noise-bg" />
        <div className="section-veil" />
        <div className="absolute inset-0 grid-background opacity-[0.08] z-0" />
        
        <div className="hero-sphere absolute right-[-44%] top-[9%] h-[34rem] w-[34rem] opacity-[0.12] mix-blend-screen pointer-events-none z-0 sm:right-[-24%] md:right-[-8%] md:top-[15%] md:h-[44rem] md:w-[44rem] md:opacity-[0.16] lg:h-[50rem] lg:w-[50rem]">
          <ParticleMorphScene shape="sphere" className="relative h-full w-full" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[calc(100svh-8rem)] max-w-7xl flex-col justify-center">
          <div className="max-w-5xl relative z-10">
            

            <h1 className="hero-reveal mb-7 text-[2.85rem] font-semibold leading-[1.02] tracking-tight text-white drop-shadow-sm sm:text-6xl md:text-7xl lg:text-[5.35rem]">
              Escala tu empresa con
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-calipso-300/90 via-white to-white/[0.62]">
                Sistemas Inteligentes.
              </span>
            </h1>
            
            <p className="hero-reveal mb-10 max-w-2xl text-[1.02rem] leading-7 text-white/[0.66] md:mb-12 md:text-lg md:leading-8">
              Transformamos el caos operativo en eficiencia pura. 
              Desarrollamos <strong className="text-white font-medium">Automatizaciones</strong> y <strong className="text-white font-medium">Agentes de IA</strong> 
              para que respondas más rápido, reduzcas tareas manuales y escales sin límites.
            </p>

            <div className="hero-reveal flex flex-col items-stretch gap-3 sm:flex-row sm:items-center md:gap-5">
              <a
                href="#contact"
                className="button-glow flex min-h-[3.25rem] items-center justify-center gap-3 rounded-full bg-calipso-500/95 px-7 py-3.5 text-sm font-semibold text-background transition-all hover:bg-calipso-400 sm:px-8"
              >
                Inicia tu transformación
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

          <div className="hero-reveal relative z-10 mt-20 grid grid-cols-2 gap-x-5 gap-y-8 border-t border-white/10 pt-9 md:mt-28 md:grid-cols-4 md:gap-x-4 md:pt-11">
            {[
              ["24/7", "Atención Autónoma"],
              ["-60%", "Trabajo Manual"],
              ["10x", "Conversión Ágil"],
              ["100%", "Data Centralizada"],
            ].map(([value, label]) => (
              <div key={value} className="flex flex-col border-l border-white/10 pl-5 transition-colors duration-500 first:border-0 first:pl-0 odd:border-l-0 odd:pl-0 hover:border-calipso-500/30 md:pl-6 md:odd:border-l md:odd:pl-6 md:first:border-0 md:first:pl-0">
                <span className="mb-2 text-3xl font-light tracking-tight text-white md:text-[2.45rem]">{value}</span>
                <span className="text-xs font-medium uppercase tracking-[0.12em] text-white/[0.46] md:text-sm md:normal-case md:tracking-normal">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
