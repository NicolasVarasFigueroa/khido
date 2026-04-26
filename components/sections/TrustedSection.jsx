"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { logos } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function TrustedSection() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".orbit-logo", {
        y: 70,
        opacity: 0,
        rotate: -8,
        stagger: 0.08,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 65%"
        }
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden bg-ink px-5 py-32 md:px-8">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-5xl font-semibold tracking-[-0.06em]">Trusted by Industry Leaders</h2>
        <p className="mt-4 text-lg text-white/90">Powering Innovation for Companies Worldwide</p>
      </div>

      <div className="absolute bottom-[28%] left-1/2 h-28 w-[84vw] -translate-x-1/2 rounded-[100%] border-t border-violet-300/70 shadow-[0_-22px_45px_rgba(108,102,255,0.45)]" />

      <div className="absolute bottom-[31%] left-1/2 flex w-[92vw] -translate-x-1/2 items-end justify-between">
        {logos.map((logo, index) => (
          <span
            key={logo}
            className="orbit-logo text-3xl font-black text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.65)] md:text-5xl"
            style={{
              transform: `translateY(${Math.abs(index - 2.5) * 18}px) rotate(${(index - 2.5) * 6}deg)`,
              opacity: index === 0 || index === logos.length - 1 ? 0.45 : 1
            }}
          >
            {logo}
          </span>
        ))}
      </div>
    </section>
  );
}
