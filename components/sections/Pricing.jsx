"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Bot,
  BrainCircuit,
  Check,
  CircleDot,
  LayoutDashboard,
  MessageCircle,
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
    label: "Planes IA",
    eyebrow: "Funciones base",
    capabilityTitle: "IA y automatización",
    plans: [
      {
        name: "Agente Inteligente",
        tags: [
          { label: "Avanzado", tone: "blue" },
          { label: "Popular", tone: "gold" }
        ],
        icon: Bot,
        features: [
          { icon: BrainCircuit, text: "Atiende a tus clientes todos los días, las 24 horas" },
          { icon: MessageCircle, text: "Responde dudas, agenda citas o toma pedidos" },
          { icon: Smartphone, text: "Funciona en WhatsApp, Instagram y Facebook" },
          { icon: Network, text: "Se conecta a tus sistemas para no perder datos" }
        ],
        implementation: {
          title: "Instalación y mantención",
          text: "A cargo de ingeniero experto"
        },
        capabilities: [
          { title: "Inteligencia artificial", text: "Aprende de tu negocio" },
          { title: "Omnicanal", text: "Unifica tus canales" },
          { title: "Seguimiento", text: "Ordena cada solicitud" },
          { title: "Soporte", text: "Mejoras continuas" }
        ],
        cta: "Solicitar presupuesto"
      },
      {
        name: "Sistema Automatizado",
        tags: [
          { label: "Recomendado", tone: "blue" }
        ],
        icon: Workflow,
        features: [
          { icon: Check, text: "Reduce tareas manuales del equipo" },
          { icon: Settings2, text: "Organiza pasos, aprobaciones y avisos" },
          { icon: LayoutDashboard, text: "Centraliza solicitudes y seguimiento" },
          { icon: Network, text: "Conecta áreas para trabajar con más orden" }
        ],
        implementation: {
          title: "Implementación por etapas",
          text: "Revisión, configuración y soporte"
        },
        capabilities: [
          { title: "Automatización", text: "Menos trabajo repetido" },
          { title: "Integración", text: "Con tus sistemas" },
          { title: "Control", text: "Procesos claros" },
          { title: "Escala", text: "Preparado para crecer" }
        ],
        cta: "Agendar reunión"
      },
      {
        name: "Operación Inteligente",
        tags: [
          { label: "Avanzado", tone: "blue" }
        ],
        icon: Network,
        features: [
          { icon: Check, text: "Conecta atención, ventas y operación" },
          { icon: CircleDot, text: "Prioriza solicitudes importantes" },
          { icon: LayoutDashboard, text: "Unifica información del negocio" },
          { icon: BadgeCheck, text: "Acompaña procesos de mayor volumen" }
        ],
        implementation: {
          title: "Solución completa",
          text: "Diseño, puesta en marcha y mejoras"
        },
        capabilities: [
          { title: "IA aplicada", text: "Para operar mejor" },
          { title: "Canales", text: "Todo conectado" },
          { title: "Equipo", text: "Trabajo coordinado" },
          { title: "Soporte", text: "Ajustes continuos" }
        ],
        cta: "Cotizar solución"
      }
    ]
  },
  tech: {
    label: "Otras Tecnologías",
    eyebrow: "Soluciones digitales",
    capabilityTitle: "Sistemas y operación",
    plans: [
      {
        name: "Web Profesional",
        tags: [
          { label: "Inicial", tone: "blue" }
        ],
        icon: PanelsTopLeft,
        features: [
          { icon: Check, text: "Presenta tu empresa con una imagen profesional" },
          { icon: MessageCircle, text: "Convierte visitas en contactos reales" },
          { icon: Smartphone, text: "Se ve bien en computador y celular" },
          { icon: Network, text: "Conecta formularios, WhatsApp y seguimiento" }
        ],
        implementation: {
          title: "Diseño e instalación",
          text: "Sitio listo para captar clientes"
        },
        capabilities: [
          { title: "Diseño", text: "A medida de tu marca" },
          { title: "Contacto", text: "Botones y formularios" },
          { title: "Contenido", text: "Ordenado y claro" },
          { title: "Soporte", text: "Ajustes iniciales" }
        ],
        cta: "Solicitar presupuesto"
      },
      {
        name: "Sistema de Gestión",
        tags: [
          { label: "Recomendado", tone: "blue" },
          { label: "Popular", tone: "gold" }
        ],
        icon: MonitorCog,
        features: [
          { icon: Check, text: "Ordena clientes, tareas y solicitudes" },
          { icon: LayoutDashboard, text: "Deja la información importante en un solo lugar" },
          { icon: Settings2, text: "Define flujos de trabajo para tu equipo" },
          { icon: BadgeCheck, text: "Ayuda a tomar decisiones con más claridad" }
        ],
        implementation: {
          title: "Configuración guiada",
          text: "Adaptado a tus procesos internos"
        },
        capabilities: [
          { title: "Gestión", text: "Todo más ordenado" },
          { title: "Equipo", text: "Roles y seguimiento" },
          { title: "Datos", text: "Información clara" },
          { title: "Soporte", text: "Mejoras continuas" }
        ],
        cta: "Agendar reunión"
      },
      {
        name: "Plataforma a Medida",
        tags: [
          { label: "Avanzado", tone: "blue" }
        ],
        icon: LayoutDashboard,
        features: [
          { icon: Check, text: "Construye una solución propia para tu operación" },
          { icon: Network, text: "Integra áreas, clientes y procesos clave" },
          { icon: Settings2, text: "Automatiza pasos importantes del negocio" },
          { icon: Sparkles, text: "Escala sin depender de soluciones genéricas" }
        ],
        implementation: {
          title: "Proyecto completo",
          text: "Diagnóstico, desarrollo y soporte"
        },
        capabilities: [
          { title: "Sistema", text: "Hecho a medida" },
          { title: "Integración", text: "Con tus herramientas" },
          { title: "Escala", text: "Preparado para crecer" },
          { title: "Soporte", text: "Acompañamiento" }
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
  const [activeGroup, setActiveGroup] = useState("ia");
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
            Nuestros planes
          </p>
          <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl">
            Diseñados para <span className="bg-gradient-to-r from-calipso-300/95 via-white to-white/70 bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(0,191,203,0.16)]">escalar</span>
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
