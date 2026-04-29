"use client";

import { useEffect, useState, useRef } from "react";
import { 
  MessageCircle, Calendar, Mail, Database, Instagram, 
  ShoppingCart, FileText, CheckCircle, Phone, Headphones, 
  Globe, BarChart, Mic, ClipboardList, Zap, MessageSquare 
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const scenarios = [
  {
    id: 0,
    leftIcon: MessageCircle,
    leftLabel: "WhatsApp",
    leftColor: "text-[#25D366]",
    rightIcon: Calendar,
    rightLabel: "Reserva Lista",
    rightColor: "text-[#00E676]",
    text: "Agendamiento automático. Cero errores humanos.",
  },
  {
    id: 1,
    leftIcon: Mail,
    leftLabel: "Correo",
    leftColor: "text-white/90",
    rightIcon: Database,
    rightLabel: "CRM Sincronizado",
    rightColor: "text-calipso-400",
    text: "Sincronización instantánea de leads y datos vitales.",
  },
  {
    id: 2,
    leftIcon: Instagram,
    leftLabel: "Instagram",
    leftColor: "text-[#E1306C]",
    rightIcon: ShoppingCart,
    rightLabel: "Venta Cerrada",
    rightColor: "text-[#00E676]",
    text: "De la consulta inicial al pago sin intervención.",
  },
  {
    id: 3,
    leftIcon: FileText,
    leftLabel: "Documentos",
    leftColor: "text-white/80",
    rightIcon: CheckCircle,
    rightLabel: "Validación",
    rightColor: "text-calipso-400",
    text: "Procesamiento y validación de archivos en segundos.",
  },
  {
    id: 4,
    leftIcon: Phone,
    leftLabel: "Llamadas",
    leftColor: "text-blue-400",
    rightIcon: Headphones,
    rightLabel: "Soporte IA",
    rightColor: "text-indigo-400",
    text: "Agentes de voz 24/7 que resuelven dudas al instante.",
  },
  {
    id: 5,
    leftIcon: MessageSquare,
    leftLabel: "Consultas",
    leftColor: "text-calipso-300",
    rightIcon: Zap,
    rightLabel: "Solución Rápida",
    rightColor: "text-cyan-200",
    text: "Atención hiper-personalizada a la velocidad de la luz.",
  },
  {
    id: 6,
    leftIcon: Globe,
    leftLabel: "Web Leads",
    leftColor: "text-cyan-400",
    rightIcon: BarChart,
    rightLabel: "Analytics",
    rightColor: "text-calipso-500",
    text: "Captura de prospectos y análisis de conversión automático.",
  },
  {
    id: 7,
    leftIcon: Mic,
    leftLabel: "Reuniones",
    leftColor: "text-calipso-200",
    rightIcon: ClipboardList,
    rightLabel: "Tareas Listas",
    rightColor: "text-cyan-300",
    text: "Transcripción y extracción de compromisos post-llamada.",
  },
];

export default function SolutionsCarouselSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
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
    <section ref={sectionRef} className="relative bg-background px-5 py-36 md:px-8 md:py-40 overflow-hidden">
      <div className="noise-bg" />
      {/* Background Grid & Glow Patterns */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_62%,transparent_100%)]" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[520px] w-[520px] rounded-full bg-calipso-500/[0.035] blur-[140px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <div className="solutions-header mb-24 md:mb-28">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-calipso-300/80">
            INTEGRACIÓN TOTAL
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-[3.65rem] font-light tracking-tight text-white leading-[1.08]">
            Tú te enfocas en liderar, <br className="hidden md:block" />
            <span className="font-semibold text-calipso-300 drop-shadow-[0_0_18px_rgba(0,191,203,0.18)]">KHIDO</span> opera el día a día.
          </h2>
        </div>

        <div className="relative flex flex-col items-center justify-center min-h-[340px]">
          
          <div className="flex w-full max-w-4xl items-center justify-center gap-3 md:gap-6">
            
            {/* Left Box */}
            <div key={`left-${activeIdx}`} className="flex flex-col items-center gap-5 w-28 md:w-36 animate-slide-up">
              <div className="group flex h-24 w-24 md:h-28 md:w-28 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.018] backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] transition-all duration-500 hover:border-white/[0.18] hover:bg-white/[0.03]">
                <LeftIcon className={`h-10 w-10 md:h-12 md:w-12 ${activeScenario.leftColor} opacity-90 filter drop-shadow-sm`} strokeWidth={1.5} />
              </div>
              <span className="text-sm font-medium tracking-wide text-white/70">
                {activeScenario.leftLabel}
              </span>
            </div>

            {/* Connecting Line Left */}
            <div className="relative flex-1 h-px bg-white/10 rounded-full overflow-hidden hidden md:block mx-2">
              <div className="absolute top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-calipso-300 to-transparent opacity-50 animate-[slideRight_2.8s_ease-in-out_infinite]" />
            </div>

            {/* Center Box (KHIDO) */}
            <div className="relative z-20 flex flex-col items-center w-36 md:w-48">
              <div className="relative flex h-28 w-28 md:h-36 md:w-36 items-center justify-center rounded-[1.75rem] border border-calipso-500/20 bg-white/[0.025] shadow-[0_0_34px_rgba(0,191,203,0.08)] backdrop-blur-xl overflow-hidden">
                {/* Rotating Glow Ring */}
                <div className="absolute inset-0 rounded-[1.75rem] animate-[spin_10s_linear_infinite] before:absolute before:inset-[-50%] before:bg-[conic-gradient(from_0deg,transparent_0_342deg,rgba(0,191,203,0.34)_360deg)] opacity-35" />
                <div className="absolute inset-[1px] rounded-[calc(1.75rem-1px)] bg-surface" />
                {/* Inner Glow */}
                <div className="absolute inset-0 bg-calipso-500/[0.055] blur-xl" />
                
                <img src="/logo.png" alt="KHIDO" className="relative z-10 w-16 md:w-24 object-contain drop-shadow-[0_0_12px_rgba(255,255,255,0.14)]" />
              </div>
            </div>

            {/* Connecting Line Right */}
            <div className="relative flex-1 h-px bg-white/10 rounded-full overflow-hidden hidden md:block mx-2">
              <div className="absolute top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-calipso-300 to-transparent opacity-45 animate-[slideRight_2.8s_ease-in-out_infinite_0.5s]" />
            </div>

            {/* Right Box */}
            <div key={`right-${activeIdx}`} className="flex flex-col items-center gap-5 w-28 md:w-36 animate-slide-up-delayed">
              <div className="group flex h-24 w-24 md:h-28 md:w-28 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.018] backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] transition-all duration-500 hover:border-white/[0.18] hover:bg-white/[0.03]">
                <RightIcon className={`h-10 w-10 md:h-12 md:w-12 ${activeScenario.rightColor} opacity-90 filter drop-shadow-sm`} strokeWidth={1.5} />
              </div>
              <span className="text-sm font-medium tracking-wide text-white/70">
                {activeScenario.rightLabel}
              </span>
            </div>

          </div>

          {/* Description Text */}
          <div className="mt-16 flex items-center justify-center px-4">
            <p 
              key={`text-${activeIdx}`} 
              className="text-lg md:text-xl font-light text-white/[0.58] animate-fade-in-up"
            >
              {activeScenario.text}
            </p>
          </div>

          {/* Dots Navigation */}
          <div className="mt-12 flex flex-wrap justify-center gap-2 px-4">
            {scenarios.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  activeIdx === idx ? "w-8 bg-calipso-300 shadow-[0_0_10px_rgba(0,191,203,0.24)]" : "w-2 bg-white/[0.16] hover:bg-white/30"
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
