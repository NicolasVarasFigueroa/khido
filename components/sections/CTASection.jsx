"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CTASection() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cta-panel", {
        scale: 0.97,
        opacity: 0,
        duration: 0.95,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 70%"
        }
      });

      gsap.to(".cta-ribbon", {
        xPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={ref} className="landing-section relative px-5 py-28 md:px-8 md:py-36 overflow-hidden">
      <div className="noise-bg" />
      <div className="section-veil" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-calipso-300/[0.14] to-transparent" />
      <div className="cta-panel premium-float relative mx-auto min-h-[26rem] max-w-[96rem] overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-white/[0.022] p-8 backdrop-blur-xl md:p-24 lg:p-28">
        <div className="cta-ribbon absolute -left-[8%] top-0 h-28 w-[78%] rotate-[-14deg] bg-calipso-500/[0.07] blur-3xl" />
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-4xl font-light leading-[1.08] tracking-tight text-white md:text-6xl">
            No vendemos herramientas.
            <br />
            <span className="font-semibold text-white">Construimos soluciones completas.</span>
          </h2>

          <Link href="/contacto" className="button-glow mt-10 inline-flex items-center gap-5 rounded-full bg-calipso-400/90 px-8 py-4 text-base font-semibold text-background transition-colors hover:bg-calipso-300 md:px-10 md:text-lg">
            Comienza tu proyecto
            <ArrowRight size={28} />
          </Link>
        </div>
      </div>
    </section>
  );
}
