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
        scale: 0.94,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 70%"
        }
      });

      gsap.to(".cta-ribbon", {
        xPercent: 16,
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
    <section id="contact" ref={ref} className="bg-ink px-5 py-24 md:px-8">
      <div className="cta-panel relative mx-auto min-h-[26rem] max-w-[96rem] overflow-hidden rounded-[1.1rem] border border-white/18 bg-black p-10 md:p-28">
        <div className="cta-ribbon absolute -left-[8%] top-0 h-28 w-[78%] rotate-[-14deg] bg-calipsoGlow blur-2xl" />
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-5xl font-light leading-[1.05] tracking-[-0.06em] md:text-6xl text-white">
            No vendemos herramientas.
            <br />
            <span className="font-semibold text-white">Construimos soluciones completas.</span>
          </h2>

          <Link href="/contacto" className="button-glow mt-10 inline-flex items-center gap-8 rounded-full bg-calipsoGlow px-10 py-4 text-xl font-medium text-black">
            Comienza tu proyecto
            <ArrowRight size={28} />
          </Link>
        </div>
      </div>
    </section>
  );
}
