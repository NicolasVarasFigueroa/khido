"use client";

import { Menu, X, ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";

const nav = [
  { label: "INICIO", href: "/" },
  { label: "SERVICIOS", href: "/servicios" },
  { label: "COMPAÑÍA", href: "/compania" },
  { label: "CONTACTO", href: "/contacto" },
];

export default function Header() {
  const navRef = useRef(null);
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Animamos solo el interior del header (nav) para no romper el 'fixed inset-0' del overlay con transformaciones CSS.
    gsap.fromTo(
      navRef.current,
      { y: -24, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", delay: 0.2 }
    );
  }, []);

  // Prevenir scroll cuando el menú está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <header className={`fixed left-0 right-0 top-0 z-50 px-5 py-5 md:px-8 transition-colors duration-300 ${isOpen ? "bg-transparent border-transparent" : "bg-ink/50 backdrop-blur-md border-b border-white/5 md:bg-transparent md:backdrop-blur-none md:border-transparent"}`}>
        <nav ref={navRef} className="mx-auto flex max-w-[96rem] items-center justify-between gap-6">
          <Link href="/" className="flex items-center relative z-[60]" onClick={() => setIsOpen(false)}>
            <img src="/logo.png" alt="KHIDO Logo" className="h-7 sm:h-8 md:h-20 w-auto" />
          </Link>

          {/* Botón Hamburguesa (Móvil) */}
          <button 
            className="md:hidden relative z-[60] text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
          </button>

          {/* Links (Desktop) */}
          <div className="hidden items-center gap-16 rounded-full text-sm font-medium text-white/85 md:flex">
            {nav.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className={`transition hover:text-calipso-200 ${pathname === href ? "text-white" : ""
                  }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* CTA (Desktop) */}
          <Link
            href="/contacto"
            className="group hidden items-center gap-5 rounded-full border border-white/35 py-2 pl-7 pr-2 text-sm font-semibold text-white transition hover:border-white md:flex"
          >
            COMIENZA
            <span className="grid h-11 w-14 place-items-center rounded-full bg-white text-black transition group-hover:rotate-45">
              <ArrowUpRight size={24} />
            </span>
          </Link>
        </nav>
      </header>

      {/* Menú Overlay (Móvil) */}
      <div 
        className={`fixed inset-0 z-[45] flex flex-col items-center justify-center bg-black/95 backdrop-blur-xl transition-all duration-500 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-8 mt-10">
          {nav.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setIsOpen(false)}
              className={`text-xl font-medium tracking-widest transition-colors ${
                pathname === href ? "text-calipso-300" : "text-white/80 hover:text-white"
              }`}
            >
              {label}
            </Link>
          ))}
          
          <Link
            href="/contacto"
            onClick={() => setIsOpen(false)}
            className="mt-6 inline-flex items-center justify-center rounded-full border border-calipso-500/50 bg-calipso-500/10 px-8 py-3.5 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-calipso-500/20"
          >
            Comienza Ahora
          </Link>
        </div>
      </div>
    </>
  );
}
