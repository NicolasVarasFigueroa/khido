"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ParticleMorphScene from "@/components/three/ParticleMorphScene";
import { services } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

// Componente helper para envolver la escena 3D (renderizado inmediato)
function LazyParticleScene({ shape, className }) {
  return (
    <div className={className}>
      <ParticleMorphScene shape={shape} className="w-full h-full" scale={0.8} interactive={true} />
    </div>
  );
}

export default function DetailedServicesSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animar entrada del titulo
      gsap.fromTo(".services-hero-title",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 }
      );

      // Animar cada sección de servicio
      const sections = gsap.utils.toArray(".service-block");
      
      sections.forEach((section) => {
        gsap.fromTo(section, 
          { y: 60, opacity: 0 },
          { 
            y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
            }
          }
        );
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="landing-section relative overflow-hidden pt-32 pb-24 md:pt-48 md:pb-40">
      <div className="noise-bg" />
      <div className="section-veil" />
      <div className="absolute inset-0 grid-background opacity-[0.08]" />
      <div className="absolute right-0 top-28 h-[36rem] w-px bg-gradient-to-b from-transparent via-calipso-300/[0.16] to-transparent opacity-50 md:right-12" />
      
      {/* Title */}
      <div className="relative z-10 px-5 mb-24 md:mb-32 services-hero-title max-w-[96rem] mx-auto text-center md:text-left">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-calipso-300">Nuestras Soluciones</p>
        <h1 className="text-4xl md:text-6xl font-light leading-[1.1] tracking-[-0.04em] text-white">
          Sistemas construidos <br className="hidden md:block" /> para <span className="bg-gradient-to-r from-calipso-300/95 via-white to-white/70 bg-clip-text font-semibold italic text-transparent">escalar.</span>
        </h1>
      </div>

      <div className="relative z-10 mx-auto max-w-[96rem] px-5 md:px-8">
        <div className="flex flex-col gap-24 md:gap-40">
          {services.map((service, idx) => {
            // Alternar dirección en pantallas grandes
            const isEven = idx % 2 === 0;

            return (
              <div key={service.title} className={`service-block flex flex-col md:flex-row gap-10 md:gap-16 items-center ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                
                {/* 3D Visual Box */}
                <div className="w-full md:w-1/2">
                  <div className="premium-float relative w-full aspect-[4/3] md:aspect-square max-h-[600px] rounded-[2rem] overflow-hidden border border-white/[0.08] bg-white/[0.026] shadow-[0_22px_80px_-64px_rgba(0,0,0,0.95)] backdrop-blur-xl group">
                    <LazyParticleScene shape={service.shape} className="w-full h-full transition-transform duration-700 group-hover:scale-105" />
                    
                    {/* Inner glows and gradients */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/90 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-calipso-300/[0.055] rounded-full blur-[80px] pointer-events-none transition-opacity duration-700 group-hover:opacity-100 opacity-60" />
                  </div>
                </div>

                {/* Content Box */}
                <div className="w-full md:w-1/2">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-calipso-500/30 bg-calipso-500/10 text-calipso-200 font-semibold text-sm">
                      {service.number}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.05em] text-white">
                      {service.title}
                    </h2>
                  </div>
                  
                  <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-xl">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Capacidades */}
                    <div className="premium-float p-7 rounded-[1.5rem] border border-white/[0.08] bg-white/[0.026] backdrop-blur-xl transition-colors hover:border-calipso-300/[0.22] hover:bg-white/[0.04]">
                      <h3 className="text-white font-medium mb-5 text-xs uppercase tracking-widest opacity-50">Capacidades</h3>
                      <ul className="flex flex-col gap-4">
                        {service.bullets.map(b => (
                          <li key={b} className="flex items-start gap-3 text-white/90 text-sm font-medium">
                            <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-calipso-400 shadow-[0_0_10px_rgba(0,191,203,0.45)] mt-1.5" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Casos de Uso */}
                    <div className="premium-float p-7 rounded-[1.5rem] border border-white/[0.08] bg-white/[0.026] backdrop-blur-xl transition-colors hover:border-calipso-300/[0.22] hover:bg-white/[0.04]">
                      <h3 className="text-white font-medium mb-5 text-xs uppercase tracking-widest opacity-50">Casos de Uso</h3>
                      <ul className="flex flex-col gap-4">
                        {service.useCases.map(uc => (
                          <li key={uc} className="flex items-start gap-3 text-white/80 text-sm">
                            <span className="shrink-0 mt-0.5 text-calipso-400 text-base leading-none">✓</span>
                            <span>{uc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
