"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { sectorsData } from "@/lib/sectorsData";

gsap.registerPlugin(ScrollTrigger);

export default function SectorServicesSection({ slug }) {
  const sectionRef = useRef(null);
  const sector = sectorsData.find(s => s.slug === slug);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".solution-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [slug]);

  if (!sector) return null;

  return (
    <section ref={sectionRef} className="relative py-24 px-5 md:px-8 bg-background">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {sector.solutions.map((solution, idx) => {
            const Icon = solution.icon;
            return (
              <div 
                key={idx} 
                className="solution-card group relative flex flex-col p-8 md:p-10 rounded-3xl border border-white/5 bg-[#0a0a0a] overflow-hidden transition-all duration-500 hover:border-white/10 hover:bg-[#0f0f0f]"
              >
                {/* Subtle Hover Glow inside card */}
                <div 
                  className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20"
                  style={{ backgroundColor: sector.glowColor }}
                />

                <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border ${sector.borderColor} ${sector.bgColor} ${sector.color} shadow-sm`}>
                  <Icon size={24} strokeWidth={1.5} />
                </div>

                <h3 className="mb-4 text-2xl font-medium tracking-tight text-white/90">
                  {solution.title}
                </h3>
                
                <p className="mb-8 text-base leading-relaxed text-white/50 group-hover:text-white/70 transition-colors duration-300">
                  {solution.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-2">
                  {solution.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className={`text-[12px] font-medium px-3 py-1.5 rounded-full border ${sector.borderColor} bg-white/[0.02] ${sector.color} opacity-80`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
