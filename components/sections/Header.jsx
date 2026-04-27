"use client";

import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const nav = ["INICIO", "COMPAÑIA", "SERVICIOS", "CONTACTO"];

export default function Header() {
  const ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { y: -24, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", delay: 0.2 }
    );
  }, []);

  return (
    <header ref={ref} className="fixed left-0 right-0 top-0 z-50 px-5 py-5 md:px-8">
      <nav className="mx-auto flex max-w-[96rem] items-center justify-between gap-6">
        <a href="#top" className="text-xl font-medium tracking-wide text-white">
          KHIDO 
        </a>

        <div className="hidden items-center gap-16 rounded-full text-sm font-medium text-white/85 md:flex">
          {nav.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`} className="transition hover:text-violet-200">
              {item}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="group hidden items-center gap-5 rounded-full border border-white/35 py-2 pl-7 pr-2 text-sm font-semibold text-white transition hover:border-white md:flex"
        >
          COMIENZA
          <span className="grid h-11 w-14 place-items-center rounded-full bg-white text-black transition group-hover:rotate-45">
            <ArrowUpRight size={24} />
          </span>
        </a>
      </nav>
    </header>
  );
}
