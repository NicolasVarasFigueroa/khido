"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowUpRight, Mail } from "lucide-react";

export default function ContactPageSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-reveal",
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.15,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="landing-section relative flex min-h-[90svh] items-center overflow-hidden px-5 pb-24 pt-36 md:px-8 md:pb-32 md:pt-44"
    >
      <div className="noise-bg" />
      <div className="section-veil" />
      <div className="absolute inset-0 grid-background opacity-[0.07]" />

      <div className="relative z-10 mx-auto w-full max-w-[90rem]">
        <div className="contact-reveal flex items-center gap-4">
          <span className="h-px w-10 bg-calipso-300/70" />
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-calipso-200/80">
            Contacto
          </p>
        </div>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:items-end lg:gap-20">
          <h1 className="contact-reveal max-w-[11ch] text-[clamp(3.6rem,10vw,8.5rem)] font-light leading-[0.93] tracking-[-0.045em] text-white">
            Construyamos
            <br />
            <span className="font-semibold italic text-calipso-200">algo valioso.</span>
          </h1>

          <p className="contact-reveal max-w-lg text-base leading-7 text-white/58 md:text-lg md:leading-8 lg:pb-3">
            Cuéntanos qué necesitas construir, mejorar o conectar. Revisaremos tu desafío y te responderemos directamente por correo.
          </p>
        </div>

        <div className="contact-reveal mt-14 border-y border-white/[0.09] md:mt-20">
          <a
            href="mailto:contacto@khido.cl"
            className="group flex min-h-28 items-center gap-4 py-7 text-white transition-colors hover:text-calipso-100 focus-visible:text-calipso-100 md:min-h-36 md:gap-7 md:py-9"
            aria-label="Enviar correo a contacto@khido.cl"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/[0.12] bg-white/[0.025] text-calipso-300 transition-colors group-hover:border-calipso-300/35 group-hover:bg-calipso-300/[0.08] md:h-14 md:w-14">
              <Mail size={22} strokeWidth={1.6} />
            </span>

            <span className="min-w-0 flex-1 break-all text-[clamp(1.35rem,4.5vw,4.4rem)] font-light leading-none tracking-[-0.035em] sm:break-normal">
              contacto@khido.cl
            </span>

            <ArrowUpRight
              size={32}
              strokeWidth={1.35}
              className="shrink-0 text-white/35 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-calipso-300 md:h-11 md:w-11"
            />
          </a>
        </div>

        <div className="contact-reveal mt-7 flex flex-col gap-2 text-sm text-white/38 sm:flex-row sm:items-center sm:justify-between">
          <p>Canal oficial de contacto</p>
          <p>Santiago, Chile</p>
        </div>
      </div>
    </section>
  );
}
