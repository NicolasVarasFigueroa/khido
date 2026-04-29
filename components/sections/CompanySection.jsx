"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ACCENT = "from-calipso-500 to-calipso-600";

const team = [
  {
    name: "Nicolás Varas",
    role: "CEO & Fundador",
    career: "Ingeniero Informático",
    description: "Visionario en automatización e inteligencia de negocios. Lidera la estrategia tecnológica para transformar operaciones y escalar negocios.",
    initials: "NV",
    tags: ["Automatización", "BI", "Liderazgo"],
  },
  {
    name: "Giancarlos Ricci",
    role: "CTO & Fundador",
    career: "Ingeniero Civil Telemática",
    description: "Especialista en inteligencia artificial y arquitecturas de datos. Diseña modelos predictivos que convierten información cruda en ventajas competitivas.",
    initials: "GR",
    tags: ["IA", "Machine Learning", "Data"],
  },
  {
    name: "Jerson Leinlaf",
    role: "CMO & Fundador",
    career: "Ingeniero Informático",
    description: "Lidera la estrategia comercial, conectando soluciones tecnológicas con necesidades reales para impulsar el crecimiento y ROI de cada cliente.",
    initials: "JL",
    tags: ["Comercial", "Estrategia", "Ventas"],
  },
  {
    name: "Gonzalo Yañez",
    role: "Tech Lead Dev",
    career: "Ingeniero Informático",
    description: "Arquitecto de software full-stack. Construye plataformas de alto rendimiento, integrando sistemas complejos de manera fluida y altamente escalable.",
    initials: "GY",
    tags: ["Frontend", "Backend", "APIs"],
  },
  {
    name: "Catalina Galdames",
    role: "Diseño Gráfico & Marketing",
    career: "Diseñadora Gráfica",
    description: "Responsable de la identidad visual y estrategias de marketing. Genera experiencias de marca memorables y diseños altamente intuitivos.",
    initials: "CG",
    tags: ["Diseño", "Marketing", "Branding"],
  },
  {
    name: "José Vergara",
    role: "Analista BI",
    career: "Ingeniero Informático",
    description: "Especialista en análisis y visualización de datos. Desarrolla dashboards ejecutivos en tiempo real para acelerar la toma de decisiones estratégicas.",
    initials: "JV",
    tags: ["Power BI", "Data", "Dashboards"],
  },
  {
    name: "Fabián Montenegro",
    role: "AI Engineer",
    career: "Ingeniero Informático",
    description: "Experto en RPA y flujos de trabajo inteligentes. Elimina la carga operativa conectando plataformas para que los equipos ganen velocidad.",
    initials: "FM",
    tags: ["RPA", "n8n", "Workflows"],
  },
  {
    name: "Manuel Ardiles",
    role: "AI Engineer",
    career: "Ingeniero Informático",
    description: "Desarrollador enfocado en modelos fundacionales. Implementa soluciones de IA y machine learning que potencian los sistemas y herramientas.",
    initials: "MA",
    tags: ["Machine Learning", "APIs", "IA"],
  },
  {
    name: "Diego Meynard",
    role: "AI Engineer",
    career: "Ingeniero Informático",
    description: "Especialista en agentes autónomos. Crea ecosistemas digitales donde la IA opera flujos completos sin intervención manual.",
    initials: "DM",
    tags: ["Agentes", "n8n", "Automatización"],
  },
  {
    name: "Benjamin Urrutia",
    role: "Developer",
    career: "Ingeniero Informático",
    description: "Desarrollador de software enfocado en crear código robusto y mantenible, asegurando la máxima calidad técnica en entornos de producción.",
    initials: "BU",
    tags: ["Desarrollo", "Software", "Web"],
  },
  {
    name: "Leandro Burgos",
    role: "Developer",
    career: "Ingeniero Informático",
    description: "Programador de aplicaciones modernas. Construye interfaces y experiencias digitales fluidas, optimizando el rendimiento de principio a fin.",
    initials: "LB",
    tags: ["Web", "Frontend", "UI"],
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
    <section ref={ref} className="relative bg-background overflow-hidden">

      {/* ── HERO BANNER ────────────────────────────────────────── */}
      <div className="relative px-5 pb-24 pt-36 md:px-8 md:pt-44">
        {/* Ambient top glow */}
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #00BFCB 0%, transparent 65%)" }}
        />

        <div className="mx-auto max-w-[96rem]">
          <p className="co-badge mb-5 text-sm font-semibold uppercase tracking-[0.42em] text-calipso-200/80">
            Compañía
          </p>

          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <h1 className="co-h1 text-[13vw] font-semibold leading-[0.94] tracking-[-0.06em] text-white md:text-[7rem] xl:text-[8.5rem]">
              Somos
              <br />
              <span className="font-light italic">Khido</span>
            </h1>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pb-2 lg:grid-cols-1 lg:gap-5 lg:text-right">
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
              Khido nació con una misión clara: democratizar el acceso a la inteligencia artificial y la
              automatización para empresas de todos los tamaños. Somos un equipo apasionado por la tecnología,
              convencidos de que los datos bien aprovechados son la mayor ventaja competitiva del siglo XXI.
            </p>
            <p className="co-p2 text-lg leading-8 text-white/72">
              Combinamos expertise en IA, Business Intelligence, desarrollo web y automatización de procesos
              para entregar soluciones integrales que generan resultados medibles desde el primer día.
            </p>
          </div>
        </div>
      </div>

      {/* ── PILLARS ─────────────────────────────────────────────── */}
      <div className="co-pillars border-y border-white/10 px-5 py-16 md:px-8">
        <div className="mx-auto grid max-w-[96rem] gap-0 md:grid-cols-4">
          {pillars.map(({ label, description }, i) => (
            <div
              key={label}
              className={`co-pillar group px-6 py-8 transition-colors hover:bg-white/[0.03] ${i < pillars.length - 1 ? "border-b border-white/10 md:border-b-0 md:border-r" : ""
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

      {/* ── TEAM GRID (2 rows × 3 cols) ─────────────────────────── */}
      <div className="px-5 py-28 md:px-8 md:py-36">
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
          <div className="team-grid grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {team.map(({ name, role, career }, index) => (
              <article
                key={name}
                className="team-card-anim group relative overflow-hidden rounded-[1.2rem] border border-white/10 bg-white/[0.02] px-4 py-8 text-center transition-[border-color,background,box-shadow] duration-500 hover:border-calipso-300/40 hover:bg-white/[0.05] hover:shadow-[0_0_30px_rgba(0,191,203,0.1)] flex flex-col justify-center items-center min-h-[140px]"
                style={{ animationDelay: `${index * 0.05 + 0.1}s` }}
              >
                <div className="card-dots absolute inset-0 opacity-20 pointer-events-none" />

                <div className="relative z-10 flex w-full flex-col items-center">
                  <h3 className="text-base font-semibold tracking-[-0.02em] text-white leading-tight">
                    {name}
                  </h3>
                  
                  <p className="mt-2.5 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-calipso-300/80 leading-snug">
                    {role}
                  </p>
                  
                  <p className="mt-3 text-xs font-medium text-white/40 leading-snug">
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
