"use client";

import { ArrowUpRight } from "lucide-react";
import ParticleMorphScene from "@/components/three/ParticleMorphScene";

export default function HeroSection() {
  return (
    <>
      <section
        id="top"
        className="landing-section relative min-h-screen overflow-hidden px-5 pb-36 pt-36 md:px-8 md:pb-40 md:pt-40"
      >
        <div className="noise-bg" />
        <div className="section-veil" />
        <div className="absolute inset-0 grid-background opacity-[0.08] z-0" />
        
        <div className="hero-sphere absolute right-[-18%] top-[7%] md:top-[16%] md:right-[-7%] h-[70vw] max-h-[800px] min-h-[400px] w-[70vw] min-w-[400px] max-w-[800px] opacity-[0.11] mix-blend-screen pointer-events-none z-0 md:opacity-[0.18]">
          <ParticleMorphScene shape="sphere" className="relative h-full w-full" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-10rem)] max-w-7xl flex-col justify-center">
          <div className="max-w-4xl relative z-10">
            

            <h1 className="hero-reveal text-5xl sm:text-6xl md:text-7xl lg:text-[5.7rem] font-semibold leading-[1.04] tracking-tight text-white mb-8 drop-shadow-sm">
              Escala tu empresa con
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-calipso-300/90 via-white to-white/62">
                Sistemas Inteligentes.
              </span>
            </h1>
            
            <p className="hero-reveal max-w-2xl text-base md:text-xl leading-8 md:leading-9 text-white/[0.58] mb-12">
              Transformamos el caos operativo en eficiencia pura. 
              Desarrollamos <strong className="text-white font-medium">Automatizaciones</strong>, <strong className="text-white font-medium">Agentes de IA</strong> <strong className="text-white font-medium"></strong> 
              para que respondas más rápido, reduzcas tareas manuales y escales sin límites.
            </p>

            <div className="hero-reveal flex flex-wrap items-center gap-4 md:gap-6">
              <a
                href="#contact"
                className="button-glow flex h-14 items-center justify-center gap-3 rounded-full bg-calipso-500/90 px-8 text-sm font-semibold text-background transition-all hover:bg-calipso-400"
              >
                Inicia tu transformación
                <ArrowUpRight size={18} strokeWidth={2.5} />
              </a>
              
              <a
                href="#services"
                className="flex h-14 items-center justify-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.018] px-8 text-sm font-medium text-white/72 backdrop-blur-xl transition-colors hover:bg-white/[0.035] hover:border-white/[0.16] hover:text-white"
              >
                Ver Soluciones
              </a>
            </div>
          </div>

          <div className="hero-reveal mt-24 md:mt-36 grid grid-cols-2 gap-y-8 gap-x-4 md:grid-cols-4 border-t border-white/10 pt-12 relative z-10">
            {[
              ["24/7", "Atención Autónoma"],
              ["-60%", "Trabajo Manual"],
              ["10x", "Conversión Ágil"],
              ["100%", "Data Centralizada"],
            ].map(([value, label]) => (
              <div key={value} className="flex flex-col border-l border-white/10 pl-6 first:border-0 first:pl-0 hover:border-calipso-500/25 transition-colors duration-500">
                <span className="text-3xl md:text-[2.55rem] font-light tracking-tight text-white mb-2">{value}</span>
                <span className="text-sm text-white/40 font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
