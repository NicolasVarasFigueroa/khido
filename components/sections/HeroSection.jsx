"use client";

import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ParticleMorphScene from "@/components/three/ParticleMorphScene";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-reveal", {
        y: 24,
        opacity: 0,
        duration: 1.15,
        ease: "power3.out",
        stagger: 0.1,
        delay: 0.18,
      });

      gsap.to(".hero-sphere", {
        yPercent: -6,
        rotateZ: 4,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.8,
        },
      });

      gsap.to(".floating-card-1", {
        y: -8,
        rotation: 1.2,
        duration: 5.5,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut"
      });
      
      gsap.to(".floating-card-2", {
        y: 8,
        rotation: -1.2,
        duration: 6,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        delay: 1
      });

      gsap.to(".ghost-logo", {
        opacity: 0.02,
        scale: 1.05,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="ghost-logo pointer-events-none fixed left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[1200px] opacity-[0.03]">
        <img src="/logo.png" alt="KHIDO Background" className="w-full h-auto object-contain blur-md" />
      </div>

      <section
        id="top"
        ref={sectionRef}
        className="relative min-h-screen overflow-hidden bg-background px-5 pb-36 pt-36 md:px-8 md:pb-40 md:pt-40 border-b border-white/[0.06]"
      >
        <div className="noise-bg" />
        <div className="absolute inset-0 grid-background opacity-[0.18] z-0" />
        
        <div className="light-ray absolute -left-[12%] top-[8%] h-[760px] w-[760px] opacity-[0.12] pointer-events-none bg-calipso-500 blur-[160px] rounded-full" />

        <div className="hero-sphere absolute right-[-18%] top-[7%] md:top-[16%] md:right-[-7%] h-[70vw] max-h-[800px] min-h-[400px] w-[70vw] min-w-[400px] max-w-[800px] opacity-[0.22] mix-blend-screen pointer-events-none z-0">
          <ParticleMorphScene shape="sphere" className="relative h-full w-full" />
        </div>

        <div className="floating-card-1 absolute right-[15%] top-[25%] hidden lg:flex flex-col gap-2 p-5 rounded-2xl bg-white/[0.025] border border-white/10 shadow-[0_18px_70px_-45px_rgba(0,0,0,0.9)] backdrop-blur-xl w-48 opacity-55 z-0 transform rotate-6">
          <div className="w-full h-2 bg-calipso-500/45 rounded-full mb-2"></div>
          <div className="w-3/4 h-2 bg-white/[0.14] rounded-full"></div>
          <div className="w-1/2 h-2 bg-white/10 rounded-full"></div>
        </div>

        <div className="floating-card-2 absolute right-[35%] bottom-[30%] hidden lg:flex items-center gap-3 p-4 rounded-xl bg-white/[0.025] border border-white/10 shadow-[0_18px_70px_-45px_rgba(0,0,0,0.9)] backdrop-blur-xl opacity-[0.48] z-0 transform -rotate-3">
          <div className="w-8 h-8 rounded-full border-2 border-calipso-500/55 border-t-transparent animate-spin"></div>
          <div className="flex flex-col gap-1">
            <div className="w-16 h-1.5 bg-white/40 rounded-full"></div>
            <div className="w-10 h-1.5 bg-white/20 rounded-full"></div>
          </div>
        </div>

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-10rem)] max-w-7xl flex-col justify-center">
          <div className="max-w-4xl relative z-10">
            <div className="hero-reveal mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.025] px-4 py-2 backdrop-blur-xl shadow-[0_16px_50px_-38px_rgba(0,0,0,0.9)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-calipso-400 opacity-45"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-calipso-400"></span>
              </span>
              <span className="text-xs font-medium tracking-wider text-white/70 uppercase">Optimizando operaciones B2B</span>
            </div>

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
                className="flex h-14 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-8 text-sm font-medium text-white/72 backdrop-blur-xl transition-colors hover:bg-white/[0.04] hover:border-white/20 hover:text-white"
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
