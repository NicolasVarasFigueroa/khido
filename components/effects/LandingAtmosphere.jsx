"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LandingAtmosphere() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".ambient-orb-left", {
        yPercent: 22,
        scale: 1.08,
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.7
        }
      });

      gsap.to(".ambient-orb-right", {
        yPercent: -18,
        scale: 0.94,
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.9
        }
      });

      gsap.to(".ambient-lightline", {
        scaleY: 1,
        opacity: 0.6,
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: true
        }
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="global-atmosphere" aria-hidden="true">
      <div className="ambient-base" />
      <div className="ambient-grid" />
      <div className="ambient-vignette" />
      <div className="ambient-orb ambient-orb-left" />
      <div className="ambient-orb ambient-orb-right" />
      <div className="ambient-lightline ambient-lightline-left" />
      <div className="ambient-lightline ambient-lightline-right" />
    </div>
  );
}
