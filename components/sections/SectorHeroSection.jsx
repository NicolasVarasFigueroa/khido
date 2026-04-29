"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { sectorsData } from "@/lib/sectorsData";

export default function SectorHeroSection({ slug }) {
  const sectionRef = useRef(null);
  const sector = sectorsData.find(s => s.slug === slug);
  const Icon = sector?.icon;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-element",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          delay: 0.2,
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [slug]);

  if (!sector) return null;

  return (
    <section ref={sectionRef} className="relative pt-40 pb-20 px-5 md:px-8 overflow-hidden">
      {/* Background Glow */}
      <div 
        className="absolute left-1/2 top-0 h-[600px] w-full max-w-[1200px] -translate-x-1/2 blur-[120px] pointer-events-none opacity-40"
        style={{ backgroundColor: sector.glowColor }}
      />
      
      {/* Subtle Grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="relative z-10 mx-auto max-w-4xl text-center flex flex-col items-center">
        <div className={`hero-element mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border ${sector.borderColor} ${sector.bgColor} ${sector.color} shadow-lg`}>
          <Icon size={36} strokeWidth={1.5} />
        </div>
        
        <p className={`hero-element mb-4 text-xs font-semibold uppercase tracking-[0.3em] ${sector.color}`}>
          SOLUCIONES PARA {sector.title}
        </p>
        
        <h1 className="hero-element mb-8 text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.1]">
          {sector.heroTitle}
        </h1>
        
        <p className="hero-element mb-12 text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed">
          {sector.heroDescription}
        </p>

        {/* Metrics Grid */}
        <div className="hero-element flex flex-wrap justify-center gap-6 md:gap-12 mt-4">
          {sector.metrics?.map((metric, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className={`text-4xl md:text-5xl font-light mb-2 tracking-tighter ${sector.color} drop-shadow-md`}>
                {metric.value}
              </span>
              <span className="text-xs md:text-sm text-white/50 max-w-[140px] leading-tight">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
