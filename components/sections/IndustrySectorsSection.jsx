"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, ArrowRight } from "lucide-react";
import { sectorsData } from "@/lib/sectorsData";

gsap.registerPlugin(ScrollTrigger);

export default function IndustrySectorsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".sector-header",
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        ".sector-card",
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="landing-section relative overflow-hidden px-5 py-28 md:px-8 md:py-36 lg:py-40">
      <div className="noise-bg" />
      <div className="section-veil" />
      {/* Background glow */}
      <div className="absolute left-1/2 top-0 h-[520px] w-full max-w-[1000px] -translate-x-1/2 bg-calipso-500/[0.024] blur-[140px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="sector-header mb-16 text-center md:mb-20">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.26em] text-calipso-300/[0.82]">
            TECNOLOGÍA APLICADA POR INDUSTRIA
          </p>
          <h2 className="mb-5 text-4xl font-semibold leading-[1.12] tracking-tight text-white md:text-5xl lg:text-[3.25rem]">
            Entendemos los desafíos <span className="text-calipso-300 drop-shadow-[0_0_18px_rgba(0,191,203,0.16)]">de tu sector</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-7 text-white/[0.58] md:text-base">
            Explora cómo combinamos software, datos, integraciones, automatización e IA según las necesidades de cada industria.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {sectorsData.map((sector) => {
            const Icon = sector.icon;
            const tags = sector.solutions.map(s => s.tags[0]);
            // Take unique tags up to 3
            const uniqueTags = [...new Set(tags)].slice(0, 3);
            
            return (
              <Link href={`/sectores/${sector.slug}`} key={sector.id} className="block h-full">
                <div
                  className={`sector-card premium-float group relative flex h-full min-h-[21rem] cursor-pointer flex-col justify-between overflow-hidden rounded-lg border border-white/[0.088] bg-white/[0.02] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.034] md:p-7 ${sector.hoverBorder}`}
                >
                {/* Radial gradient inside card based on sector color */}
                <div 
                  className="absolute -left-20 -top-20 h-56 w-56 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-45"
                  style={{ backgroundColor: sector.glowColor }}
                />
                
                {/* Subtle static glow */}
                <div 
                  className="absolute -left-10 -top-10 h-32 w-32 rounded-full opacity-[0.14] blur-2xl"
                  style={{ backgroundColor: sector.glowColor }}
                />

                <div className="relative z-10 flex flex-col h-full">
                  <div className={`mb-7 flex h-12 w-12 items-center justify-center rounded-lg border ${sector.borderColor} ${sector.bgColor} ${sector.color} shadow-[inset_0_1px_1px_rgba(255,255,255,0.055)]`}>
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="mb-3 text-xl font-semibold leading-snug tracking-tight text-white/[0.92]">
                    {sector.title}
                  </h3>
                  
                  <p className="mb-6 min-h-[4.65rem] text-sm leading-7 text-white/[0.56] transition-colors duration-300 group-hover:text-white/[0.72]">
                    {sector.heroDescription.substring(0, 95)}...
                  </p>

                  <div className="mb-7 flex min-h-[4.25rem] flex-wrap content-start gap-2">
                    {uniqueTags.map((tag, idx) => (
                      <span key={idx} className={`rounded-full border border-white/[0.09] bg-white/[0.022] px-2.5 py-1 text-[11px] font-medium leading-none text-white/[0.62] transition-colors duration-300 group-hover:border-white/[0.16] group-hover:text-white/[0.78]`}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className={`mt-auto flex items-center justify-between rounded-lg border border-white/[0.09] bg-white/[0.02] px-4 py-3 transition-colors duration-300 ${sector.color} group-hover:bg-white/[0.038]`}>
                    <div className="flex items-center gap-2 text-[13px] font-medium">
                      <Sparkles size={14} />
                      Ver soluciones
                    </div>
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
        </div>
      </div>
    </section>
  );
}
