"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cases } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

const gradients = [
  "from-cyan-200 via-sky-500 to-slate-950",
  "from-violet-200 via-fuchsia-500 to-slate-950",
  "from-emerald-200 via-teal-500 to-slate-950",
  "from-zinc-200 via-slate-500 to-black",
  "from-amber-200 via-orange-500 to-slate-950",
  "from-blue-200 via-indigo-500 to-slate-950",
  "from-rose-200 via-purple-500 to-black"
];

export default function CaseStudiesSection() {
  const ref = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".case-row", {
        y: 32,
        opacity: 0,
        stagger: 0.07,
        duration: 0.75,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 72%"
        }
      });

      gsap.from(".case-preview", {
        x: 70,
        opacity: 0,
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
    <section id="work" ref={ref} className="relative bg-ink px-5 py-28 md:px-8 md:py-36">
      <div className="mx-auto grid max-w-[96rem] gap-16 lg:grid-cols-[1.3fr_0.9fr]">
        <div>
          <div className="mb-28 flex items-start justify-between gap-8">
            <h2 className="text-5xl font-semibold tracking-[-0.06em] md:text-6xl">Case Studies</h2>
            <p className="max-w-sm text-right text-lg leading-7 text-white/90">
              Proven results, measurable impact. Explore the transformations we have delivered.
            </p>
          </div>

          <div className="border-y border-white/15">
            {cases.map(([number, title, tags], index) => (
              <button
                key={title}
                className={`case-row grid w-full grid-cols-[3.5rem_1fr] items-center border-b border-white/15 py-7 text-left transition last:border-b-0 md:grid-cols-[4rem_1fr_auto] ${
                  active === index ? "bg-white/[0.045]" : "hover:bg-white/[0.025]"
                }`}
                onMouseEnter={() => setActive(index)}
              >
                <span className="text-xl">{number}</span>
                <span className="text-xl font-semibold">{title}</span>
                <span className="mt-4 flex flex-wrap gap-2 md:mt-0">
                  {tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/20 px-4 py-1.5 text-sm text-white/75">
                      {tag}
                    </span>
                  ))}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="case-preview sticky top-24 hidden h-[33rem] overflow-hidden rounded-sm lg:block">
          <div className={`absolute inset-0 bg-gradient-to-br ${gradients[active]} transition-all duration-700`} />
          <div className="absolute inset-8 rounded-md border border-black/15 bg-white/80 p-6 text-slate-950 shadow-2xl">
            <div className="mb-8 flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Project Preview</p>
            <h3 className="mt-3 text-5xl font-bold tracking-[-0.07em]">{cases[active][1]}</h3>
            <div className="mt-10 grid gap-3">
              {[68, 52, 84, 44].map((w, index) => (
                <span key={index} className="h-3 rounded-full bg-slate-900/12" style={{ width: `${w}%` }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
