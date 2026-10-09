"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    label: "Innovación",
    description:
      "Adoptamos las tecnologías más avanzadas para mantenerte siempre un paso adelante de la competencia.",
  },
  {
    label: "Impacto Real",
    description:
      "Cada proyecto está medido por resultados tangibles y ROI demostrable desde el primer entregable.",
  },
  {
    label: "Transparencia",
    description:
      "Comunicación directa y honesta en cada etapa del proceso, sin sorpresas ni letra pequeña.",
  },
  {
    label: "Escalabilidad",
    description:
      "Construimos soluciones que crecen con tu negocio sin límites técnicos ni fricciones operativas.",
  },
];

export default function CompanySection() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero banner
      gsap.from(".co-badge, .co-h1, .co-hr, .co-p1, .co-p2", {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.9,
        ease: "power3.out",
        delay: 0.15,
      });

      // Stats
      gsap.from(".co-stat", {
        y: 28,
        opacity: 0,
        stagger: 0.1,
        duration: 0.75,
        ease: "power3.out",
        delay: 0.4,
      });

      // Pillars
      gsap.from(".co-pillar", {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".co-pillars",
          start: "top 85%",
        },
      });

    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="landing-section relative overflow-hidden">
      <div className="noise-bg" />
      <div className="section-veil" />
      <div className="absolute inset-0 grid-background opacity-[0.075]" />

      {/* ── HERO BANNER ────────────────────────────────────────── */}
      <div className="relative px-5 pb-24 pt-36 md:px-8 md:pt-44">
        {/* Ambient top glow */}
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-[0.085]"
          style={{ background: "radial-gradient(circle, #00BFCB 0%, transparent 65%)" }}
        />

        <div className="mx-auto max-w-[96rem]">
          <p className="co-badge mb-5 text-sm font-semibold uppercase tracking-[0.42em] text-calipso-200/80">
            Compañía
          </p>

          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <h1 className="co-h1 max-w-[10ch] text-[clamp(4.2rem,17vw,8.5rem)] font-semibold leading-[0.98] tracking-[-0.035em] text-white md:text-[7rem] xl:text-[8.5rem]">
              Somos
              <br />
              <span className="inline-block bg-gradient-to-r from-calipso-300/95 via-white to-white/70 bg-clip-text pb-2 pr-3 font-light italic text-transparent">Khido</span>
            </h1>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pb-2 sm:gap-8 lg:grid-cols-1 lg:gap-5 lg:text-right">
              {[
                ["50+", "Proyectos Entregados"],
                ["100%", "Clientes Satisfechos"],
                ["24/7", "Soporte Disponible"],
              ].map(([value, label]) => (
                <div key={value} className="co-stat">
                  <p className="text-4xl font-semibold tracking-[-0.05em] md:text-5xl">{value}</p>
                  <p className="mt-1 text-sm leading-4 text-white/60">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="co-hr mt-10 h-px w-full bg-gradient-to-r from-calipso-400/60 via-white/10 to-transparent" />

          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
            <p className="co-p1 text-lg leading-8 text-white/72">
              Khido nació para resolver desafíos de negocio con tecnología bien construida. Somos un equipo
              multidisciplinario que convierte ideas, procesos y datos en productos digitales, sistemas e
              infraestructura capaces de mejorar la operación y abrir nuevas oportunidades.
            </p>
            <p className="co-p2 text-lg leading-8 text-white/72">
              Combinamos estrategia, diseño, desarrollo de software, web y apps, data engineering, Power BI,
              integraciones, cloud, automatización e IA para entregar soluciones completas de principio a fin.
            </p>
          </div>
        </div>
      </div>

      {/* ── PILLARS ─────────────────────────────────────────────── */}
      <div className="relative z-10 co-pillars border-y border-white/[0.075] bg-white/[0.012] px-5 py-16 backdrop-blur-sm md:px-8">
        <div className="mx-auto grid max-w-[96rem] gap-0 md:grid-cols-4">
          {pillars.map(({ label, description }, i) => (
            <div
              key={label}
              className={`co-pillar group px-6 py-8 transition-colors hover:bg-white/[0.03] ${i < pillars.length - 1 ? "border-b border-white/[0.08] md:border-b-0 md:border-r" : ""
                }`}
            >
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.32em] text-calipso-300/80">
                {label}
              </p>
              <p className="text-sm leading-6 text-white/60">{description}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
