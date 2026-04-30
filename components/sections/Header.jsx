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
      <header className={`fixed left-0 right-0 top-0 z-50 px-4 py-4 md:px-8 transition-colors duration-300 ${isOpen ? "bg-transparent border-transparent" : "bg-[#030712]/45 backdrop-blur-xl border-b border-white/[0.045] md:bg-transparent md:border-transparent"}`}>
        <nav ref={navRef} className="premium-float mx-auto flex max-w-[96rem] items-center justify-between gap-6 rounded-full border border-white/[0.08] bg-[#071018]/58 px-4 py-3 backdrop-blur-xl md:px-5">
          <Link href="/" className="flex items-center relative z-[60]" onClick={() => setIsOpen(false)}>
            <img src="/logo.png" alt="KHIDO Logo" className="h-14 sm:h-20 md:h-18 w-auto" />
          </Link>

          <button
            className="md:hidden relative z-[60] rounded-full border border-white/[0.08] bg-white/[0.026] p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
          </button>

          <div className="hidden items-center gap-10 md:flex">
            {nav.map(({ label, href }) => {
              const isActive = pathname === href;

              return (
                <Link
                  key={label}
                  href={href}
                  className="group relative text-sm font-medium text-white/70 transition-colors duration-300 hover:text-white"
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
            className="group hidden items-center gap-4 rounded-full border border-white/[0.11] bg-white/[0.026] py-1.5 pl-5 pr-1.5 text-sm font-semibold 
            text-white/88 transition duration-300 hover:border-white/25 hover:bg-white/[0.045] md:flex"
          >
            COMIENZA
            <span className="grid h-9 w-11 place-items-center rounded-full bg-white text-black transition duration-300 group-hover:rotate-45">
              <ArrowUpRight size={20} />
            </span>
          </Link>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-[45] flex flex-col items-center justify-center bg-black/95 backdrop-blur-xl transition-all duration-500 md:hidden ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      >
        <div className="flex flex-col items-center gap-8 mt-10">
          {nav.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setIsOpen(false)}
              className={`text-xl font-medium tracking-widest transition-colors ${pathname === href ? "text-calipso-300" : "text-white/80 hover:text-white"
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
