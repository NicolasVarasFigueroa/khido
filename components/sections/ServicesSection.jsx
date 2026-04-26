"use client";

import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ParticleMorphScene from "@/components/three/ParticleMorphScene";
import { services } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const cardRefs = useRef([]);
  const activeRef = useRef(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const cards = cardRefs.current.filter(Boolean);
      const magneticEase = gsap.parseEase("power3.inOut");
      const moveTrack = gsap.quickTo(track, "x", {
        duration: 0.78,
        ease: "expo.out"
      });

      const getStep = () => {
        const firstCard = cards[0];
        const styles = window.getComputedStyle(track);
        const gap = Number.parseFloat(styles.columnGap || styles.gap || "0");
        return firstCard.offsetWidth + gap;
      };

      const updateCards = (floatingIndex) => {
        cards.forEach((card, index) => {
          const distance = index - floatingIndex;
          const absDistance = Math.abs(distance);
          gsap.set(card, {
            y: Math.min(absDistance * 18, 26),
            scale: gsap.utils.clamp(0.965, 1, 1 - absDistance * 0.018),
            opacity: distance < -0.72 ? gsap.utils.clamp(0, 1, 1 + distance * 1.4) : 1
          });
        });
      };

      const trigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${(services.length - 1) * window.innerHeight * 0.42}`,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        snap: {
          snapTo: (value) => {
            const steps = services.length - 1;
            return Math.round(value * steps) / steps;
          },
          duration: { min: 0.12, max: 0.28 },
          delay: 0,
          ease: "power2.out"
        },
        onRefresh: () => {
          moveTrack(-activeRef.current * getStep());
          updateCards(activeRef.current);
        },
        onUpdate: (self) => {
          const maxIndex = services.length - 1;
          const rawIndex = self.progress * maxIndex;
          const baseIndex = Math.min(maxIndex - 1, Math.floor(rawIndex));
          const localProgress = rawIndex >= maxIndex ? 1 : rawIndex - baseIndex;
          const magneticIndex = rawIndex >= maxIndex
            ? maxIndex
            : baseIndex + magneticEase(localProgress);

          moveTrack(-magneticIndex * getStep());
          updateCards(magneticIndex);

          const next = Math.min(maxIndex, Math.round(magneticIndex));
          if (next !== activeRef.current) {
            activeRef.current = next;
            setActive(next);
          }
        }
      });

      gsap.from(".service-heading", {
        opacity: 0,
        y: 40,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%"
        }
      });

      return () => trigger.kill();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="relative h-screen overflow-hidden bg-ink px-5 py-24 md:px-8">
      <div className="pointer-events-auto absolute left-[3vw] top-0 z-10 h-full w-[40vw] min-w-[500px]">
        <ParticleMorphScene shape={services[active].shape} scale={0.58} className="relative h-full w-full" />
      </div>

      <div className="service-heading pointer-events-none absolute left-[41vw] top-[18vh] z-30">
        <h2 className="text-5xl font-semibold tracking-[-0.06em] text-white md:text-6xl">Nuestro Servicio</h2>
      </div>

      <p className="service-heading pointer-events-none absolute right-8 top-[18vh] z-30 max-w-sm text-lg leading-7 text-white">
        Ofrecemos soluciones digitales integrales que transforman su negocio e impulsan la innovación en cada punto de contacto.
      </p>

      <div className="services-card-viewport pointer-events-none absolute inset-0 z-20">
        <div ref={trackRef} className="pointer-events-auto absolute left-[41vw] top-[31vh] flex gap-5 pr-[35vw] will-change-transform">
          {services.map((service, index) => {
            const isActive = index === active;
            return (
              <article
                ref={(element) => {
                  cardRefs.current[index] = element;
                }}
                key={service.title}
                className={`service-card relative h-[33rem] w-[24rem] shrink-0 origin-left overflow-hidden rounded-[1.45rem] border p-10 transition-[background,border-color,box-shadow] duration-500 ${isActive
                  ? "border-violet-200/70 bg-[#4d4b91] shadow-[0_0_46px_rgba(119,114,216,0.22)]"
                  : "border-white/25 bg-black/82 backdrop-blur-sm"
                  }`}
              >
                <div className="card-dots absolute inset-0 opacity-70" />

                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex items-start justify-between">
                    <p className={`${isActive ? "max-w-[15rem] text-3xl" : "text-4xl"} font-semibold leading-none tracking-[-0.06em]`}>
                      {isActive ? service.title : service.number}
                    </p>
                    <ArrowUpRight size={32} />
                  </div>

                  <div className={`transition duration-500 ${isActive ? "opacity-100" : "pointer-events-none opacity-0"}`}>
                    <p className="mt-28 text-base leading-6 text-white/90">{service.description}</p>

                    <div className="mt-28 grid grid-cols-[1fr_0.8fr] gap-8">
                      <div>
                        <p className="mb-2 text-2xl text-white/45">Services</p>
                        <ul className="space-y-1 text-sm font-semibold leading-5">
                          {service.bullets.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <p className="mb-3 text-2xl text-white/45">Tools</p>
                        <div className="grid grid-cols-3 gap-2">
                          {service.tools.map((tool) => (
                            <span key={tool} className="grid h-8 w-8 place-items-center rounded-md bg-white/85 text-xs font-black text-[#4d4b91]">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className={`mt-auto text-xl font-semibold transition duration-500 ${isActive ? "opacity-0" : "opacity-100"}`}>
                    {service.title}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
