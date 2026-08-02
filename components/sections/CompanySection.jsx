"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const team = [
  {
    name: "Nicolás Varas",
    role: "CEO",
    career: "Ingeniero Informático",
    image: "/team/nicolas-varas.jpeg",
  },
  {
    name: "Giancarlos Ricci",
    role: "CTO",
    career: "Ingeniero Civil Telemática",
    image: "/team/giancarlos-ricci.jpeg",
  },
  {
    name: "Jerson Lienlaf",
    role: "CMO",
    career: "Ingeniero Informático",
    image: "/team/jerson-lienlaf.jpeg",
  },
  {
    name: "Gonzalo Yañez",
    role: "Tech Lead Dev",
    career: "Ingeniero Informático",
    image: "/team/gonzalo-yanez.jpeg",
  },
];

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

      // Team heading
      gsap.from(".team-h", {
        y: 38,
        opacity: 0,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".team-h",
          start: "top 88%",
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

      {/* ── TEAM GRID ───────────────────────────────────────────── */}
      <div className="relative z-10 px-5 pb-24 pt-28 md:px-8 md:pb-28 md:pt-36">
        <div className="mx-auto max-w-[96rem]">

          {/* Heading */}
          <div className="team-h mb-14">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.42em] text-calipso-200/80">
              El Equipo
            </p>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <h2 className="text-5xl font-semibold leading-[1.04] tracking-[-0.06em] text-white md:text-6xl">
                Las personas detrás
                <br />
                <span className="font-light italic">de cada solución</span>
              </h2>
              <p className="max-w-sm text-base leading-7 text-white/55 md:text-right">
                Un equipo multidisciplinario comprometido con la excelencia técnica y el éxito de cada cliente.
              </p>
            </div>
          </div>

          {/* Grilla compacta de equipo */}
          <div className="team-grid mx-auto grid max-w-[82rem] grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
            {team.map(({ name, role, career, image }, index) => (
              <article
                key={name}
                className="team-card-anim group relative flex min-h-[14.5rem] flex-col items-center overflow-hidden rounded-lg border border-white/[0.075] bg-white/[0.018] px-3 py-6 text-center backdrop-blur-xl transition-[border-color,background,transform] duration-500 hover:-translate-y-0.5 hover:border-calipso-300/[0.2] hover:bg-white/[0.03] sm:min-h-[16rem] sm:px-5 sm:py-7"
                style={{ animationDelay: `${index * 0.05 + 0.1}s` }}
              >
                <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.16] to-transparent" />

                <div className="relative z-10 h-20 w-20 shrink-0 overflow-hidden rounded-full border border-white/[0.12] bg-white/[0.025] p-0.5 shadow-[0_14px_40px_-28px_rgba(0,0,0,0.9)] sm:h-24 sm:w-24">
                  <img
                    src={image}
                    alt={name}
                    className="h-full w-full rounded-full object-cover saturate-[0.82] transition-[filter,transform] duration-500 group-hover:scale-[1.025] group-hover:saturate-100"
                  />
                </div>

                <div className="relative z-10 flex w-full flex-1 flex-col items-center pt-5 sm:pt-6">
                  <h3 className="text-sm font-semibold leading-tight text-white sm:text-base">
                    {name}
                  </h3>
                  
                  <p className="mt-2 text-[0.62rem] font-bold uppercase leading-snug tracking-[0.18em] text-calipso-300/75">
                    {role}
                  </p>
                  
                  <p className="mt-3 max-w-[11rem] text-[0.7rem] font-medium leading-5 text-white/40 sm:text-xs">
                    {career}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
