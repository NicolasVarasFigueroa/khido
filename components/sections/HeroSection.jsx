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
    <section
      id="top"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden px-5 pb-12 pt-28 md:px-8"
    >
      <div className="light-ray absolute -left-28 -top-24 h-[520px] w-[520px] opacity-90" />

      <div className="ghost-word pointer-events-none fixed left-1/2 top-[20vh] -translate-x-1/2 text-[18vw] font-black uppercase leading-none tracking-[-0.08em] text-white/[0.055]">
        KHIDO
      </div>

      <div className="hero-sphere absolute left-1/2 top-[28vh] h-[42vw] max-h-[700px] min-h-[360px] w-[42vw] min-w-[360px] max-w-[700px] -translate-x-1/2">
        <ParticleMorphScene shape="sphere" className="relative h-full w-full" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-7rem)] max-w-[96rem] flex-col justify-end">
        <div className="mx-auto max-w-6xl text-center">
          <p className="hero-reveal mb-7 text-sm font-semibold uppercase tracking-[0.42em] text-white/85">
            KHIDO
          </p>

          <h1 className="hero-reveal text-[10vw] font-light leading-[0.94] tracking-[-0.06em] text-white md:text-[5.8rem] xl:text-[7rem]">
            Inteligencia <span className="font-semibold italic">Artificial</span>
            <br />
            <span className="font-semibold italic">Automatización</span> & Data
          </h1>
        </div>

        <div className="hero-reveal mt-20 grid items-end gap-8 md:grid-cols-[0.9fr_1fr]">
          <div>
            <p className="max-w-xl text-lg leading-7 text-white/82">
              Creamos soluciones digitales con IA, automatización, Business Intelligence y desarrollo web para optimizar procesos, reducir tareas repetitivas y escalar negocios.
            </p>

            <a
              href="#contact"
              className="button-glow mt-10 inline-flex items-center gap-8 rounded-full bg-violetGlow px-10 py-4 text-lg font-medium"
            >
              Agenda una reunión
              <ArrowUpRight size={26} />
            </a>
          </div>

          <div className="grid grid-cols-3 gap-5 text-right">
            {[
              ["50+", "Proyectos", "Entregados"],
              ["100%", "Clientes", "Satisfechos"],
              ["24/7", "Soporte", "Disponible"],
            ].map(([value, a, b]) => (
              <div key={value}>
                <p className="text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
                  {value}
                </p>
                <p className="mt-1 text-sm leading-4 text-white/82">
                  {a}
                  <br />
                  {b}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}