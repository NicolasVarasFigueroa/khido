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
    <section id="contact" ref={ref} className="landing-section relative overflow-hidden px-5 py-24 md:px-8 md:py-32 lg:py-36">
      <div className="noise-bg" />
      <div className="section-veil" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-calipso-300/[0.14] to-transparent" />
      <div className="cta-panel premium-float relative mx-auto min-h-[24rem] max-w-[90rem] overflow-hidden rounded-lg border border-white/[0.09] bg-white/[0.028] p-7 backdrop-blur-2xl md:min-h-[26rem] md:p-20 lg:p-24">
        <div className="cta-ribbon absolute -left-[8%] top-0 h-28 w-[78%] rotate-[-14deg] bg-calipso-500/[0.08] blur-3xl" />
        <div className="relative z-10 max-w-3xl">
          <h2 className="text-4xl font-light leading-[1.08] tracking-tight text-white md:text-5xl lg:text-6xl">
            No vendemos herramientas.
            <br />
            <span className="font-semibold text-white">Construimos soluciones completas.</span>
          </h2>

          <Link href="/contacto" className="button-glow mt-9 inline-flex min-h-[3.25rem] items-center justify-center gap-3 rounded-full bg-calipso-400/95 px-7 py-3.5 text-sm font-semibold text-background transition-colors hover:bg-calipso-300 sm:px-8 md:mt-10 md:text-base">
            Comienza tu proyecto
            <ArrowRight size={22} strokeWidth={2.4} />
          </Link>
        </div>
      </div>
    </section>
  );
}
