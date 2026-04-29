"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { sectorsData } from "@/lib/sectorsData";

gsap.registerPlugin(ScrollTrigger);

export default function SectorWorkflowSection({ slug }) {
  const sectionRef = useRef(null);
  const sector = sectorsData.find(s => s.slug === slug);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".workflow-step",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
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

  if (!sector || !sector.workflow) return null;

  return (
    <section ref={sectionRef} className="relative py-24 px-5 md:px-8 bg-background border-t border-white/5">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
            Cómo operará tu empresa <span className={`${sector.color} drop-shadow-md`}>con nosotros.</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            Un ejemplo real del flujo de trabajo automatizado y conectado que construiremos para tu negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-8 left-0 w-full h-[1px] bg-white/10 z-0" />
          
          {sector.workflow.map((step, idx) => (
            <div key={idx} className="workflow-step relative z-10 flex flex-col items-center text-center md:items-start md:text-left">
              <div className={`w-16 h-16 rounded-2xl border border-white/10 flex items-center justify-center text-2xl font-semibold mb-6 bg-[#0a0a0a] shadow-lg ${sector.color}`}>
                {step.step}
              </div>
              <h4 className="text-lg font-medium text-white/90 mb-3">
                {step.title}
              </h4>
              <p className="text-sm text-white/50 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
