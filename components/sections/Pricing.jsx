"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  Check,
  CircleDot,
  LayoutDashboard,
  MonitorCog,
  Network,
  PanelsTopLeft,
  Settings2,
  Smartphone,
  Sparkles,
  Workflow
} from "lucide-react";

const planGroups = {
  ia: {
    label: "Datos & Operación",
    eyebrow: "Capacidades incluidas",
    capabilityTitle: "Datos y procesos",
    plans: [
      {
        name: "Power BI & Analytics",
        tags: [
          { label: "Avanzado", tone: "blue" },
          { label: "Popular", tone: "gold" }
        ],
        icon: LayoutDashboard,
        features: [
          { icon: LayoutDashboard, text: "Centraliza indicadores clave del negocio" },
          { icon: Network, text: "Conecta ERP, CRM, planillas y otras fuentes" },
          { icon: CircleDot, text: "Modela métricas y reglas de negocio confiables" },
          { icon: BadgeCheck, text: "Entrega dashboards ejecutivos y operativos" }
        ],
        implementation: {
          title: "Implementación de analítica",
          text: "Levantamiento, modelado, diseño y publicación"
        },
        capabilities: [
          { title: "Power BI", text: "Visualización clara" },
          { title: "KPIs", text: "Métricas correctas" },
          { title: "Fuentes", text: "Datos conectados" },
          { title: "Soporte", text: "Mejoras continuas" }
        ],
        cta: "Solicitar presupuesto"
      },
      {
        name: "Data Platform & ETL",
        tags: [
          { label: "Recomendado", tone: "blue" }
        ],
        icon: Network,
        features: [
          { icon: Network, text: "Integra datos desde múltiples sistemas" },
          { icon: Settings2, text: "Limpia, valida y transforma información" },
          { icon: CircleDot, text: "Centraliza datos listos para consumo" },
          { icon: BadgeCheck, text: "Monitorea calidad y ejecución de pipelines" }
        ],
        implementation: {
          title: "Arquitectura por etapas",
          text: "Fuentes, pipelines, almacenamiento y monitoreo"
        },
        capabilities: [
          { title: "ETL / ELT", text: "Flujos robustos" },
          { title: "Integración", text: "Con tus sistemas" },
          { title: "Calidad", text: "Datos confiables" },
          { title: "Escala", text: "Preparado para crecer" }
        ],
        cta: "Agendar reunión"
      },
      {
        name: "Integración & Automatización",
        tags: [
          { label: "Avanzado", tone: "blue" }
        ],
        icon: Workflow,
        features: [
          { icon: Network, text: "Conecta plataformas mediante APIs y webhooks" },
          { icon: Check, text: "Reduce tareas manuales y errores operativos" },
          { icon: Settings2, text: "Orquesta reglas, aprobaciones y alertas" },
          { icon: BrainCircuit, text: "Incorpora IA cuando genera valor real" }
        ],
        implementation: {
          title: "Integración completa",
          text: "Diseño, desarrollo, puesta en marcha y mejoras"
        },
        capabilities: [
          { title: "APIs", text: "Sistemas conectados" },
          { title: "Workflows", text: "Procesos fluidos" },
          { title: "IA aplicada", text: "Donde aporta valor" },
          { title: "Soporte", text: "Ajustes continuos" }
        ],
        cta: "Cotizar solución"
      }
    ]
  },
  tech: {
    label: "Desarrollo & Cloud",
    eyebrow: "Capacidades incluidas",
    capabilityTitle: "Producto y tecnología",
    plans: [
      {
        name: "Web & E-commerce",
        tags: [
          { label: "Inicial", tone: "blue" }
        ],
        icon: PanelsTopLeft,
        features: [
          { icon: Check, text: "Diseño alineado a tu marca y objetivos" },
          { icon: PanelsTopLeft, text: "Experiencia rápida, clara y responsive" },
          { icon: Smartphone, text: "Optimizado para computador y celular" },
          { icon: Network, text: "Integrado con pagos, CRM, inventario o analítica" }
        ],
        implementation: {
          title: "Diseño y desarrollo",
          text: "Producto listo para publicar, medir y evolucionar"
        },
        capabilities: [
          { title: "Diseño", text: "A medida de tu marca" },
          { title: "Integración", text: "Pagos y sistemas" },
          { title: "Rendimiento", text: "Carga rápida" },
          { title: "Soporte", text: "Evolución continua" }
        ],
        cta: "Solicitar presupuesto"
      },
      {
        name: "Software a Medida",
        tags: [
          { label: "Recomendado", tone: "blue" },
          { label: "Popular", tone: "gold" }
        ],
        icon: MonitorCog,
        features: [
          { icon: Check, text: "Resuelve procesos específicos de tu negocio" },
          { icon: LayoutDashboard, text: "Centraliza operación, usuarios e información" },
          { icon: Settings2, text: "Define roles, reglas y flujos propios" },
          { icon: BadgeCheck, text: "Crece sobre una base mantenible y segura" }
        ],
        implementation: {
          title: "Proyecto de punta a punta",
          text: "Descubrimiento, UX, desarrollo y despliegue"
        },
        capabilities: [
          { title: "Producto", text: "Hecho a medida" },
          { title: "Equipo", text: "Roles y permisos" },
          { title: "Datos", text: "Modelo propio" },
          { title: "Soporte", text: "Mejoras continuas" }
        ],
        cta: "Agendar reunión"
      },
      {
        name: "Apps, Cloud & Escala",
        tags: [
          { label: "Avanzado", tone: "blue" }
        ],
        icon: LayoutDashboard,
        features: [
          { icon: Smartphone, text: "Desarrolla aplicaciones web, PWA o móviles" },
          { icon: Network, text: "Integra servicios, datos y procesos clave" },
          { icon: Settings2, text: "Despliega con seguridad y observabilidad" },
          { icon: Sparkles, text: "Escala infraestructura y producto con demanda real" }
        ],
        implementation: {
          title: "Producto e infraestructura",
          text: "Arquitectura, desarrollo, cloud y soporte"
        },
        capabilities: [
          { title: "Apps", text: "Web y móvil" },
          { title: "Cloud", text: "Infraestructura segura" },
          { title: "Escala", text: "Preparado para crecer" },
          { title: "DevOps", text: "Entrega y monitoreo" }
        ],
        cta: "Cotizar solución"
      }
    ]
  }
};

function Tag({ label, tone }) {
  const styles =
    tone === "gold"
      ? "border-amber-300/[0.22] bg-amber-300/[0.035] text-amber-100/80"
      : "border-calipso-300/[0.26] bg-calipso-300/[0.055] text-calipso-100/85";

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-semibold ${styles}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {label}
    </span>
  );
}

function PlanCard({ plan, group }) {
  const Icon = plan.icon;

  return (
    <article className="premium-float group relative mx-auto flex min-h-full w-full max-w-[23rem] flex-col overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.028] p-5 text-white shadow-[0_22px_80px_-64px_rgba(0,0,0,0.95)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:border-calipso-300/[0.22] hover:bg-white/[0.04] hover:shadow-[0_28px_96px_-68px_rgba(0,191,203,0.32)] sm:p-6">
      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-calipso-200/[0.28] to-transparent opacity-75" />
      <div className="absolute -right-20 top-8 h-36 w-36 rounded-full bg-calipso-300/[0.045] blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <h2 className="max-w-[11rem] text-2xl font-semibold leading-tight tracking-tight text-white">
            {plan.name}
          </h2>
          <div className="flex flex-wrap justify-end gap-2">
            {plan.tags.map((tag) => (
              <Tag key={tag.label} {...tag} />
            ))}
          </div>
        </div>

        <div className="mt-8">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.12em] text-calipso-100/55">
            {group.eyebrow}
          </p>
          <ul className="space-y-3">
            {plan.features.map((feature) => {
              const FeatureIcon = feature.icon;

              return (
                <li key={feature.text} className="flex gap-3 text-[13px] font-medium leading-5 text-white/90">
                  <FeatureIcon size={14} className="mt-0.5 shrink-0 text-calipso-300/80" />
                  <span>{feature.text}</span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mt-7">
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.12em] text-calipso-100/55">
            Implementación y soporte
          </p>
          <div className="rounded-xl border border-white/[0.09] bg-white/[0.024] p-4">
            <p className="text-sm font-semibold text-white">{plan.implementation.title}</p>
            <p className="mt-1 text-xs leading-5 text-white/45">{plan.implementation.text}</p>
          </div>
        </div>

        <div className="mt-7">
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.12em] text-calipso-100/55">
            {group.capabilityTitle}
          </p>
          <div className="grid grid-cols-2 gap-2">
            {plan.capabilities.map((capability, index) => (
              <div
                key={capability.title}
                className={`rounded-lg border border-white/[0.09] bg-white/[0.024] px-3 py-3 ${
                  index === 0 ? "min-h-[4.35rem]" : ""
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-calipso-300 shadow-[0_0_10px_rgba(0,191,203,0.34)]" />
                  <p className="text-[11px] font-semibold uppercase leading-4 text-white">
                    {capability.title}
                  </p>
                </div>
                <p className="mt-1 text-[10px] leading-4 text-white/42">{capability.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="my-7 h-px bg-white/[0.07]" />

        <div className="rounded-xl border border-white/[0.08] bg-white/[0.024] px-5 py-6 text-center">
          <div className="mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-lg text-calipso-300/85">
            <BadgeCheck size={28} />
          </div>
          <p className="text-sm font-bold uppercase tracking-[0.08em] text-white">Un plan</p>
          <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.16em] text-white/42">
            Diseñado a la medida
          </p>
        </div>

        <Link
          href="/contacto"
          className="button-glow mt-5 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-lg bg-calipso-500/90 px-5 text-sm font-bold text-background shadow-[0_14px_34px_-24px_rgba(0,191,203,0.95)] transition-all hover:bg-calipso-400"
          aria-label={`${plan.cta} para ${plan.name}`}
        >
          {plan.cta}
          <ArrowRight size={17} />
        </Link>

        <div className="mt-6 border-t border-white/[0.07] pt-4">
          <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.14em] text-calipso-100/45">
            Términos y condiciones
          </p>
          <p className="text-xs leading-5 text-white/50">
            Cada presupuesto se define según alcance, canales, equipo y objetivos del negocio.
          </p>
        </div>
      </div>
    </article>
  );
}

export default function PricingSection() {
  const [activeGroup, setActiveGroup] = useState("tech");
  const group = planGroups[activeGroup];

  return (
    <section className="landing-section relative overflow-hidden px-5 pb-24 pt-32 text-white md:px-8 md:pb-36 md:pt-40">
      <div className="noise-bg" />
      <div className="section-veil" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_6%,rgba(0,191,203,0.075),transparent_34%),radial-gradient(circle_at_8%_38%,rgba(0,191,203,0.045),transparent_28%),linear-gradient(to_bottom,rgba(3,7,18,0.08),rgba(3,7,18,0.72)_92%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.014)_1px,transparent_1px)] bg-[size:64px_64px] opacity-[0.18] [mask-image:radial-gradient(ellipse_64%_48%_at_50%_18%,#000_42%,transparent_100%)]" />
      <div className="absolute left-0 top-28 h-[42rem] w-px bg-gradient-to-b from-transparent via-calipso-300/[0.22] to-transparent opacity-60 md:left-12" />
      <div className="absolute right-0 top-52 hidden h-[38rem] w-px bg-gradient-to-b from-transparent via-calipso-300/[0.14] to-transparent opacity-50 md:right-12 md:block" />

      <div className="relative z-10 mx-auto max-w-[78rem]">
        <div className="text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-calipso-300/85">
            TIPOS DE SOLUCIÓN
          </p>
          <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl">
            Diseñados a la <span className="bg-gradient-to-r from-calipso-300/95 via-white to-white/70 bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(0,191,203,0.16)]">medida de tu desafío</span>
          </h1>
        </div>

        <div className="premium-float mx-auto mt-12 flex w-fit rounded-full border border-white/[0.08] bg-white/[0.026] p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl">
          {Object.entries(planGroups).map(([key, item]) => {
            const isActive = key === activeGroup;

            return (
              <button
                key={key}
                type="button"
                onClick={() => setActiveGroup(key)}
                className={`min-h-10 rounded-full px-5 text-xs font-semibold transition-all sm:px-6 ${
                  isActive
                    ? "bg-calipso-500/90 text-background shadow-[0_12px_28px_-22px_rgba(0,191,203,0.95)]"
                    : "text-white/45 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {group.plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
}
