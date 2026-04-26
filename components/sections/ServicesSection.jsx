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
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const ctx = gsap.context(() => {
        const track = trackRef.current;
        const cards = cardRefs.current.filter(Boolean);
        const magneticEase = gsap.parseEase("power3.inOut");

        const moveTrack = gsap.quickTo(track, "x", {
          duration: 0.78,
          ease: "expo.out",
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
              opacity:
                distance < -0.72
                  ? gsap.utils.clamp(0, 1, 1 + distance * 1.4)
                  : 1,
            });
          });
        };

        const trigger = ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${(services.length - 1) * window.innerHeight * 0.48}`,
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
            ease: "power2.out",
          },
          onRefresh: () => {
            moveTrack(-activeRef.current * getStep());
            updateCards(activeRef.current);
          },
          onUpdate: (self) => {
            const maxIndex = services.length - 1;
            const rawIndex = self.progress * maxIndex;
            const baseIndex = Math.min(maxIndex - 1, Math.floor(rawIndex));
            const localProgress =
              rawIndex >= maxIndex ? 1 : rawIndex - baseIndex;

            const magneticIndex =
              rawIndex >= maxIndex
                ? maxIndex
                : baseIndex + magneticEase(localProgress);

            moveTrack(-magneticIndex * getStep());
            updateCards(magneticIndex);

            const next = Math.min(maxIndex, Math.round(magneticIndex));

            if (next !== activeRef.current) {
              activeRef.current = next;
              setActive(next);
            }
          },
        });

        gsap.from(".service-heading", {
          opacity: 0,
          y: 40,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        });

        return () => trigger.kill();
      }, sectionRef);

      return () => ctx.revert();
    });

    mm.add("(max-width: 767px)", () => {
      const ctx = gsap.context(() => {
        gsap.from(".mobile-services-title", {
          opacity: 0,
          y: 35,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".mobile-services-title",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });

        gsap.utils.toArray(".mobile-service-card").forEach((card) => {
          gsap.from(card, {
            opacity: 0,
            y: 55,
            scale: 0.94,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 82%",
              end: "top 55%",
              toggleActions: "play none none reverse",
            },
          });
        });

        gsap.utils.toArray(".mobile-service-particles").forEach((item) => {
          gsap.fromTo(
            item,
            {
              opacity: 0,
              scale: 0.78,
              y: 25,
            },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: item,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });
      }, sectionRef);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative overflow-hidden bg-ink px-5 py-20 md:h-screen md:px-8 md:py-24"
    >
      {/* MOBILE */}
      <div className="mx-auto max-w-[96rem] md:hidden">
        <div className="mobile-services-title mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.32em] text-violet-200/80">
            Servicios
          </p>

          <h2 className="text-4xl font-semibold leading-none tracking-[-0.06em] text-white">
            Soluciones digitales para escalar tu negocio
          </h2>

          <p className="mt-5 text-base leading-7 text-white/75">
            Automatización, inteligencia artificial, Business Intelligence, data
            y desarrollo web para optimizar procesos reales.
          </p>
        </div>

        <div className="space-y-5">
          {services.map((service) => (
            <article
              key={service.title}
              className="mobile-service-card relative overflow-hidden rounded-[1.4rem] border border-white/15 bg-black/70 p-6 backdrop-blur-sm will-change-transform"
            >
              <div className="card-dots absolute inset-0 opacity-60" />

              <div className="relative z-10">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <p className="mb-2 text-sm text-white/45">
                      {service.number}
                    </p>

                    <h3 className="text-2xl font-semibold leading-none tracking-[-0.05em] text-white">
                      {service.title}
                    </h3>
                  </div>

                  <ArrowUpRight className="shrink-0 text-white/80" size={28} />
                </div>

                <div className="mobile-service-particles mb-6 h-48 w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] will-change-transform">
                  <ParticleMorphScene
                    shape={service.shape}
                    compact
                    interactive={false}
                    scale={0.72}
                    className="h-full w-full"
                  />
                </div>

                <p className="text-sm leading-6 text-white/80">
                  {service.description}
                </p>

                <div className="mt-7 grid grid-cols-1 gap-6">
                  <div>
                    <p className="mb-3 text-lg text-white/40">Servicios</p>

                    <ul className="grid grid-cols-2 gap-2 text-sm font-semibold leading-5 text-white">
                      {service.bullets.map((item) => (
                        <li
                          key={item}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="mb-3 text-lg text-white/40">Tools</p>

                    <div className="flex flex-wrap gap-2">
                      {service.tools.map((tool) => (
                        <span
                          key={tool}
                          className="grid h-9 w-9 place-items-center rounded-lg bg-white/90 text-xs font-black text-[#4d4b91]"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* DESKTOP */}
      <div className="pointer-events-auto absolute left-[3vw] top-0 z-10 hidden h-full w-[40vw] min-w-[500px] md:block">
        <ParticleMorphScene
          shape={services[active].shape}
          scale={0.58}
          className="relative h-full w-full"
        />
      </div>

      <div className="service-heading pointer-events-none absolute left-[41vw] top-[18vh] z-30 hidden md:block">
        <h2 className="text-5xl font-semibold tracking-[-0.06em] text-white md:text-6xl">
          Servicios
        </h2>
      </div>

      <p className="service-heading pointer-events-none absolute right-8 top-[18vh] z-30 hidden max-w-sm text-lg leading-7 text-white md:block">
        Creamos soluciones con IA, automatización, Business Intelligence, data y
        desarrollo web para transformar operaciones reales.
      </p>

      <div className="services-card-viewport pointer-events-none absolute inset-0 z-20 hidden md:block">
        <div
          ref={trackRef}
          className="pointer-events-auto absolute left-[41vw] top-[31vh] flex gap-5 pr-[35vw] will-change-transform"
        >
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
                    <p
                      className={`${isActive ? "max-w-[15rem] text-3xl" : "text-4xl"
                        } font-semibold leading-none tracking-[-0.06em]`}
                    >
                      {isActive ? service.title : service.number}
                    </p>

                    <ArrowUpRight size={32} />
                  </div>

                  <div
                    className={`transition duration-500 ${isActive
                        ? "opacity-100"
                        : "pointer-events-none opacity-0"
                      }`}
                  >
                    <p className="mt-28 text-base leading-6 text-white/90">
                      {service.description}
                    </p>

                    <div className="mt-28 grid grid-cols-[1fr_0.8fr] gap-8">
                      <div>
                        <p className="mb-2 text-2xl text-white/45">
                          Servicios
                        </p>

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
                            <span
                              key={tool}
                              className="grid h-8 w-8 place-items-center rounded-md bg-white/85 text-xs font-black text-[#4d4b91]"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <p
                    className={`mt-auto text-xl font-semibold transition duration-500 ${isActive ? "opacity-0" : "opacity-100"
                      }`}
                  >
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