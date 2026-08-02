"use client";

import { useEffect, useState, useRef } from "react";
import {
  BarChart3,
  Bot,
  CheckCircle,
  Cloud,
  Code2,
  Database,
  FileText,
  Globe,
  LayoutDashboard,
  Network,
  Server,
  ShoppingCart,
  Smartphone,
  Workflow,
  Zap,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const scenarios = [
  {
    id: 0,
    leftIcon: FileText,
    leftLabel: "Necesidad",
    leftColor: "text-white/80",
    rightIcon: Code2,
    rightLabel: "Software a Medida",
    rightColor: "text-calipso-300",
    text: "Sistemas propios diseñados alrededor de tu operación y tus objetivos.",
  },
  {
    id: 1,
    leftIcon: Globe,
    leftLabel: "Experiencia Digital",
    leftColor: "text-cyan-300",
    rightIcon: ShoppingCart,
    rightLabel: "Web & E-commerce",
    rightColor: "text-emerald-300",
    text: "Sitios, portales y comercios digitales rápidos, claros y listos para vender.",
  },
  {
    id: 2,
    leftIcon: Database,
    leftLabel: "Fuentes de Datos",
    leftColor: "text-blue-300",
    rightIcon: Workflow,
    rightLabel: "ETL Confiable",
    rightColor: "text-calipso-300",
    text: "Pipelines que ordenan, validan y centralizan la información del negocio.",
  },
  {
    id: 3,
    leftIcon: BarChart3,
    leftLabel: "Datos Operativos",
    leftColor: "text-amber-200",
    rightIcon: LayoutDashboard,
    rightLabel: "Power BI",
    rightColor: "text-calipso-300",
    text: "Dashboards ejecutivos con indicadores confiables y actualizados.",
  },
  {
    id: 4,
    leftIcon: Smartphone,
    leftLabel: "Idea de Producto",
    leftColor: "text-indigo-300",
    rightIcon: CheckCircle,
    rightLabel: "App en Producción",
    rightColor: "text-emerald-300",
    text: "Diseño, desarrollo y despliegue de aplicaciones web y móviles.",
  },
  {
    id: 5,
    leftIcon: Network,
    leftLabel: "Sistemas Aislados",
    leftColor: "text-white/70",
    rightIcon: Zap,
    rightLabel: "Integración API",
    rightColor: "text-cyan-200",
    text: "Conectamos plataformas, procesos y equipos para que la información fluya.",
  },
  {
    id: 6,
    leftIcon: Server,
    leftLabel: "Infraestructura",
    leftColor: "text-white/75",
    rightIcon: Cloud,
    rightLabel: "Cloud Escalable",
    rightColor: "text-sky-300",
    text: "Arquitecturas seguras, observables y preparadas para crecer.",
  },
  {
    id: 7,
    leftIcon: Bot,
    leftLabel: "Procesos & Datos",
    leftColor: "text-violet-300",
    rightIcon: Zap,
    rightLabel: "IA Aplicada",
    rightColor: "text-calipso-300",
    text: "Implementamos IA donde aporta valor medible, integrada a sistemas reales.",
  },
];

export default function SolutionsCarouselSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % scenarios.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".solutions-header",
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.95,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const activeScenario = scenarios[activeIdx];
  const LeftIcon = activeScenario.leftIcon;
  const RightIcon = activeScenario.rightIcon;

  return (
    <section id="services" ref={sectionRef} className="landing-section relative overflow-hidden px-5 py-28 md:px-8 md:py-36 lg:py-40">
      <div className="noise-bg" />
      <div className="section-veil" />
      {/* Background Grid & Glow Patterns */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:64px_64px] opacity-70 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_46%,transparent_100%)]" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[520px] w-[520px] rounded-full bg-calipso-500/[0.024] blur-[140px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <div className="solutions-header mb-16 md:mb-24">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-calipso-300/[0.82]">
            TECNOLOGÍA DE PUNTA A PUNTA
          </p>
          <h2 className="text-4xl font-light leading-[1.1] tracking-tight text-white md:text-5xl lg:text-[3.45rem]">
            Desde la idea hasta producción, <br className="hidden md:block" />
            <span className="font-semibold text-calipso-300 drop-shadow-[0_0_18px_rgba(0,191,203,0.18)]">KHIDO</span> construye la solución completa.
          </h2>
        </div>

        <div className="relative flex min-h-[320px] flex-col items-center justify-center md:min-h-[340px]">
          
          <div className="flex w-full max-w-4xl items-center justify-center gap-2 sm:gap-3 md:gap-6">
            
            {/* Left Box */}
            <div key={`left-${activeIdx}`} className="flex w-24 animate-slide-up flex-col items-center gap-4 sm:w-28 md:w-36 md:gap-5">
              <div className="premium-float group flex h-20 w-20 items-center justify-center rounded-lg border border-white/[0.09] bg-white/[0.018] backdrop-blur-xl transition-all duration-500 hover:border-calipso-300/[0.22] hover:bg-white/[0.034] sm:h-24 sm:w-24 md:h-28 md:w-28">
                <LeftIcon className={`h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 ${activeScenario.leftColor} opacity-90 filter drop-shadow-sm`} strokeWidth={1.5} />
              </div>
              <span className="text-center text-xs font-medium tracking-wide text-white/[0.72] sm:text-sm">
                {activeScenario.leftLabel}
              </span>
            </div>

            {/* Connecting Line Left */}
            <div className="relative flex-1 h-px bg-white/[0.08] rounded-full overflow-hidden hidden md:block mx-2">
              <div className="absolute top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-calipso-200 to-transparent opacity-35 animate-[slideRight_3.8s_ease-in-out_infinite]" />
            </div>

            {/* Center Box (KHIDO) */}
            <div className="relative z-20 flex w-28 flex-col items-center sm:w-36 md:w-48">
              <div className="premium-float relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-lg border border-calipso-300/[0.18] bg-white/[0.022] backdrop-blur-xl sm:h-28 sm:w-28 md:h-36 md:w-36">
                {/* Rotating Glow Ring */}
                <div className="absolute inset-0 rounded-lg animate-[spin_16s_linear_infinite] before:absolute before:inset-[-50%] before:bg-[conic-gradient(from_0deg,transparent_0_342deg,rgba(0,191,203,0.24)_360deg)] opacity-35" />
                <div className="absolute inset-[1px] rounded-[7px] bg-surface" />
                {/* Inner Glow */}
                <div className="absolute inset-0 bg-calipso-500/[0.035] blur-xl" />
                
                <img src="/logo.png" alt="KHIDO" className="relative z-10 w-14 object-contain drop-shadow-[0_0_12px_rgba(255,255,255,0.14)] sm:w-16 md:w-24" />
              </div>
            </div>

            {/* Connecting Line Right */}
            <div className="relative flex-1 h-px bg-white/[0.08] rounded-full overflow-hidden hidden md:block mx-2">
              <div className="absolute top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-calipso-200 to-transparent opacity-32 animate-[slideRight_3.8s_ease-in-out_infinite_0.5s]" />
            </div>

            {/* Right Box */}
            <div key={`right-${activeIdx}`} className="flex w-24 animate-slide-up-delayed flex-col items-center gap-4 sm:w-28 md:w-36 md:gap-5">
              <div className="premium-float group flex h-20 w-20 items-center justify-center rounded-lg border border-white/[0.09] bg-white/[0.018] backdrop-blur-xl transition-all duration-500 hover:border-calipso-300/[0.22] hover:bg-white/[0.034] sm:h-24 sm:w-24 md:h-28 md:w-28">
                <RightIcon className={`h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 ${activeScenario.rightColor} opacity-90 filter drop-shadow-sm`} strokeWidth={1.5} />
              </div>
              <span className="text-center text-xs font-medium tracking-wide text-white/[0.72] sm:text-sm">
                {activeScenario.rightLabel}
              </span>
            </div>

          </div>

          {/* Description Text */}
          <div className="mt-12 flex items-center justify-center px-2 md:mt-16 md:px-4">
            <p 
              key={`text-${activeIdx}`} 
              className="max-w-2xl animate-fade-in-up text-center text-base font-light leading-7 text-white/[0.66] md:text-xl md:leading-8"
            >
              {activeScenario.text}
            </p>
          </div>

          {/* Dots Navigation */}
          <div className="mt-10 flex flex-wrap justify-center gap-2 px-4 md:mt-12">
            {scenarios.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  activeIdx === idx ? "w-8 bg-calipso-300 shadow-[0_0_10px_rgba(0,191,203,0.18)]" : "w-2 bg-white/[0.14] hover:bg-white/[0.28]"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes slideRight {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(300%); }
          }
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(16px) scale(0.98); }
            to { opacity: 1; transform: translateY(0) scale(1); }
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-slide-up {
            animation: slideUp 0.72s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          .animate-slide-up-delayed {
            animation: slideUp 0.72s cubic-bezier(0.16, 1, 0.3, 1) 0.15s forwards;
            opacity: 0;
          }
          .animate-fade-in-up {
            animation: fadeInUp 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.18s forwards;
            opacity: 0;
          }
        `
      }} />
    </section>
  );
}
