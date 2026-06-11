"use client";

import { Menu, X, ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";

const nav = [
  { label: "INICIO", href: "/" },
  { label: "SERVICIOS", href: "/servicios" },
  { label: "PRECIOS", href: "/precios" },
  { label: "COMPAÑÍA", href: "/compania" },
  { label: "CONTACTO", href: "/contacto" },
];

export default function Header() {
  const navRef = useRef(null);
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -16, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: 0.15 }
    );
  }, []);

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
      <header className={`fixed left-0 right-0 top-0 z-50 px-4 py-3 transition-colors duration-300 md:px-8 md:py-5 ${isOpen ? "bg-transparent border-transparent" : "bg-[#030712]/52 backdrop-blur-xl border-b border-white/[0.05] md:bg-transparent md:border-transparent"}`}>
        <nav ref={navRef} className="premium-float mx-auto flex max-w-[90rem] items-center justify-between gap-5 rounded-full border border-white/[0.09] bg-[#071018]/68 px-3 py-2.5 backdrop-blur-2xl md:px-4">
          <Link href="/" className="flex items-center relative z-[60]" onClick={() => setIsOpen(false)}>
            <img src="/logo.png" alt="KHIDO Logo" className="h-11 w-auto object-contain sm:h-12 md:h-14" />
          </Link>

          <button
            className="relative z-[60] rounded-full border border-white/[0.1] bg-white/[0.035] p-2 text-white transition-colors hover:border-white/20 hover:bg-white/[0.06] md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
          </button>

          <div className="hidden items-center gap-8 lg:gap-10 md:flex">
            {nav.map(({ label, href }) => {
              const isActive = pathname === href;

              return (
                <Link
                  key={label}
                  href={href}
                  className="group relative text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-white/[0.66] transition-colors duration-300 hover:text-white"
                >
                  {/* Texto */}
                  <span className={isActive ? "text-white" : ""}>
                    {label}
                  </span>

                  {/* Línea animada */}
                  <span
                    className={`
                      absolute left-0 -bottom-1 h-[2px] w-full origin-left scale-x-0 
                      bg-calipso-300 transition-transform duration-300
                      ${isActive ? "scale-x-100" : "group-hover:scale-x-100"}
                    `}
                  />
                </Link>
              );
            })}
          </div>

          <Link
            href="/contacto"
            className="group hidden items-center gap-3 rounded-full border border-white/[0.12] bg-white/[0.035] py-1.5 pl-5 pr-1.5 text-[0.78rem] font-semibold uppercase tracking-[0.14em] 
            text-white/[0.88] transition duration-300 hover:border-calipso-300/30 hover:bg-white/[0.06] md:flex"
          >
            COMIENZA
            <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-black transition duration-300 group-hover:rotate-45 group-hover:bg-calipso-200">
              <ArrowUpRight size={18} />
            </span>
          </Link>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-[45] flex flex-col items-center justify-center bg-[#030712]/96 backdrop-blur-2xl transition-all duration-500 md:hidden ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      >
        <div className="flex flex-col items-center gap-8 mt-10">
          {nav.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setIsOpen(false)}
              className={`text-lg font-semibold uppercase tracking-[0.22em] transition-colors ${pathname === href ? "text-calipso-300" : "text-white/[0.78] hover:text-white"
                }`}
            >
              {label}
            </Link>
          ))}

          <Link
            href="/contacto"
            onClick={() => setIsOpen(false)}
            className="mt-6 inline-flex items-center justify-center rounded-full border border-calipso-400/[0.55] bg-calipso-500/[0.14] px-8 py-3.5 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-calipso-500/[0.24]"
          >
            Comienza Ahora
          </Link>
        </div>
      </div>
    </>
  );
}
