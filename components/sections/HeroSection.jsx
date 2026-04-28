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
        y: 42,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.08,
        delay: 0.35,
      });

      gsap.to(".hero-sphere", {
        yPercent: -12,
        scale: 0.86,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".ghost-word", {
        opacity: 0.08,
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
      <div className="ghost-word pointer-events-none fixed left-1/2 top-[26vh] z-0 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[1400px] opacity-[0.055]">
        <img src="/logo.png" alt="KHIDO Background" className="w-full h-auto object-contain" />
      </div>

      <section
        id="top"
        ref={sectionRef}
        className="relative min-h-screen overflow-hidden px-5 pb-48 pt-28 md:px-8"
      >
        <div className="light-ray absolute -left-28 -top-24 h-[520px] w-[520px] opacity-90" />

        <div className="hero-sphere absolute left-1/2 top-[12vh] md:top-[28vh] h-[42vw] max-h-[700px] min-h-[280px] md:min-h-[360px] w-[42vw] min-w-[280px] md:min-w-[360px] max-w-[700px] -translate-x-1/2">
          <ParticleMorphScene shape="sphere" className="relative h-full w-full" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-7rem)] max-w-[96rem] flex-col justify-end">
          <div className="mx-auto max-w-6xl text-center">
           

            <h1 className="hero-reveal text-5xl sm:text-6xl md:text-[5.8rem] xl:text-[7rem] font-light leading-[1.1] md:leading-[0.94] tracking-[-0.06em] text-white">
              Ecosistemas digitales
              <br />
              para <span className="font-semibold italic">escalar negocios.</span>
            </h1>
          </div>

          <div className="hero-reveal mt-16 grid items-end gap-8 md:grid-cols-[0.9fr_1fr]">
            <div>
              <p className="max-w-xl text-sm leading-relaxed text-white/82 md:text-base">
                Diseñamos y construimos la infraestructura que tu empresa necesita para operar más rápido, reducir costos y multiplicar su rentabilidad de forma predecible.
              </p>

              <a
                href="#contact"
                className="button-glow mt-6 inline-flex items-center gap-3 rounded-full bg-calipsoGlow px-7 py-3 text-sm font-medium"
              >
                Agenda una reunión
                <ArrowUpRight size={18} />
              </a>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-5 text-center md:text-right mt-10 md:mt-0 border-t border-white/10 pt-8 md:border-none md:pt-0">
              {[
                ["+100%", "Eficiencia", "Operativa"],
                ["-40%", "Costos", "Ocultos"],
                ["10x", "Velocidad", "de Ejecución"],
              ].map(([value, a, b]) => (
                <div key={value}>
                  <p className="text-3xl sm:text-4xl font-semibold tracking-[-0.05em] md:text-3xl text-calipso-300 md:text-white">
                    {value}
                  </p>
                  <p className="mt-2 text-[10px] sm:text-[11px] uppercase tracking-widest leading-[1.3] text-white/60">
                    {a} <span className="md:hidden"> </span>
                    <br className="hidden md:block" />
                    {b}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}