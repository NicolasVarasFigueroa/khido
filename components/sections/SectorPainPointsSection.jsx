"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { XCircle, CheckCircle2 } from "lucide-react";
import { sectorsData } from "@/lib/sectorsData";

gsap.registerPlugin(ScrollTrigger);

export default function SectorPainPointsSection({ slug }) {
  const sectionRef = useRef(null);
  const sector = sectorsData.find(s => s.slug === slug);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".pain-point-row",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
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

  if (!sector || !sector.painPoints) return null;

  return (
    <section ref={sectionRef} className="landing-section relative overflow-hidden py-24 px-5 md:px-8">
      <div className="section-veil" />
      <div className="mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
            El problema de operar <span className="text-white/40">como siempre.</span>
          </h2>
          <p className="text-white/50">Por qué el modelo tradicional ya no escala y cómo lo transformamos.</p>
        </div>

        <div className="flex flex-col gap-6">
          {sector.painPoints.map((point, idx) => (
            <div key={idx} className="pain-point-row grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* BEFORE */}
              <div className="premium-float flex items-start gap-4 p-6 md:p-8 rounded-2xl border border-red-500/[0.12] bg-white/[0.022] backdrop-blur-xl">
                <XCircle className="text-red-500/60 mt-1 shrink-0" size={24} />
                <div>
                  <h4 className="text-red-500/80 font-medium mb-2 text-sm uppercase tracking-wider">Dolor Actual</h4>
                  <p className="text-white/60 leading-relaxed text-sm md:text-base">
                    {point.before}
                  </p>
                </div>
              </div>

              {/* AFTER */}
              <div className="premium-float flex items-start gap-4 p-6 md:p-8 rounded-2xl border border-white/[0.08] bg-white/[0.026] relative overflow-hidden group backdrop-blur-xl hover:border-calipso-300/[0.18] transition-colors">
                <div 
                  className="absolute -right-10 -bottom-10 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20"
                  style={{ backgroundColor: sector.glowColor }}
                />
                <CheckCircle2 className={`${sector.color} mt-1 shrink-0`} size={24} />
                <div className="relative z-10">
                  <h4 className={`font-medium mb-2 text-sm uppercase tracking-wider ${sector.color}`}>Solución KHIDO</h4>
                  <p className="text-white/80 leading-relaxed text-sm md:text-base">
                    {point.after}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
