"use client";

import { Check, Bot, Brain, Workflow, Code } from "lucide-react";
import { useState } from "react";

// 🔹 Categorías
const categories = [
  "Desarrollo Web",
  "Automatización",
  "Business Intelligence",
  "Data & Machine Learning",
];

// 🔹 Planes por categoría
const plans = {
  "Desarrollo Web": [
    {
      name: "LANDING PAGE",
      price: "$200.000 + IVA",
      highlight: true,
      description: "Ideal para captar clientes rápidamente.",
      features: [
        "Diseño personalizado",
        "Responsive",
        "Formulario",
        "WhatsApp",
      ],
      cta: "Solicitar Landing",
    },
    {
      name: "SITIO WEB",
      price: "Desde $350.000 + IVA",
      description: "Presencia profesional y escalable.",
      features: [
        "Múltiples páginas",
        "Panel admin",
        "SEO básico",
      ],
      cta: "Quiero mi sitio web",
    },
  ],

  "Automatización": [
    {
      name: "AUTOMATIZACIÓN",
      price: "Desde $250.000",
      description: "Optimiza procesos repetitivos.",
      features: [
        "Integraciones",
        "Workflows",
        "Ahorro de tiempo",
      ],
      cta: "Automatizar mi negocio",
    },
  ],

  "Business Intelligence": [
    {
      name: "DASHBOARDS BI",
      price: "Desde $300.000",
      description: "Visualiza tus datos y toma decisiones.",
      features: [
        "Dashboards",
        "KPIs",
        "Conexión a datos",
      ],
      cta: "Ver mis datos",
    },
  ],

  "Data & Machine Learning": [
    {
      name: "MODELOS ML",
      price: "Cotización",
      description: "Predicción y análisis avanzado.",
      features: [
        "Modelos predictivos",
        "Segmentación",
        "Scoring",
      ],
      cta: "Cotizar ML",
    },
  ],
};

// 🔹 Servicios
const services = [
  {
    icon: Workflow,
    title: "Automatización Inteligente",
    desc: "Eliminamos tareas repetitivas y conectamos tus sistemas con workflows e integraciones.",
  },
  {
    icon: Brain,
    title: "Data & Machine Learning",
    desc: "Pipelines de datos y modelos predictivos para decisiones basadas en datos reales.",
  },
  {
    icon: Bot,
    title: "Inteligencia Artificial",
    desc: "IA generativa, chatbots y agentes autónomos listos para producción.",
  },
  {
    icon: Code,
    title: "Desarrollo Web",
    desc: "Landing pages, sistemas y plataformas integradas con IA y automatización.",
  },
];

// 🔹 Capacidades
const capabilities = [
  "IA Generativa",
  "Chatbots Avanzados",
  "APIs de IA",
  "Agentes Autónomos",
];

export default function PricingSection() {

  const [activeCategory, setActiveCategory] = useState("Desarrollo Web");

  return (
    <section className="bg-black text-white px-6 py-24 mt-14">
      <div className="mx-auto max-w-6xl">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Planes y Precios
          </h2>

        </div>

        {/* 🔥 BOTONES DE CATEGORÍA */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm transition-all duration-300
              ${
                activeCategory === cat
                  ? "bg-calipso-400 text-black"
                  : "border border-white/20 text-white/70 hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 🔥 CARDS */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {plans[activeCategory]?.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border p-8 backdrop-blur-xl transition-all duration-300
              ${
                plan.highlight
                  ? "border-calipso-400 bg-white/[0.05] scale-105"
                  : "border-white/10 bg-white/[0.02] hover:bg-white/[0.04]"
              }`}
            >
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <p className="mt-4 text-3xl font-bold">{plan.price}</p>
              <p className="mt-2 text-white/60 text-sm">{plan.description}</p>

              <ul className="mt-6 space-y-3">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-white/80">
                    <Check size={16} className="text-calipso-300" />
                    {f}
                  </li>
                ))}
              </ul>

              <button className="mt-8 w-full rounded-full py-3 text-sm font-semibold border border-white/20 hover:bg-white/10">
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-white/40 mb-24">
          Proyectos más complejos como plataformas, automatización avanzada o inteligencia artificial requieren evaluación y cotización personalizada.
        </p>



      </div>
    </section>
  );
}