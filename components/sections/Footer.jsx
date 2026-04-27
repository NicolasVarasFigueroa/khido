"use client";

import { useEffect, useState } from "react";

const columns = {
  Services: ["Diseño de Productos", "Desarrollo", "Estrategia de Comercialización", "Aplicaciones Sanitarias", "Desarrollo de IA", "Desarrollo de IoT"],
  Atom: ["Atom Enterprise", "Atom Agentic", "Atom IntentIQ", "Compare Atom", "Atom GIS", "Atom Red Team"],
  Demos: ["Agentes de voz", "UI Generativa", "IA de Sentimiento", "Detector de Mentiras"],
  Resources: ["Open Antimatter", "Clinix AI Platform", "Clinix AI", "Synergies4", "Curehire", "Feature", "Vidzee", "Rhym3", "OWASP", "Contact"]
};

export default function Footer() {
  const [time, setTime] = useState("--:--:--");

  useEffect(() => {
    const tick = () => {
      setTime(new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      }).format(new Date()));
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="footer-aura relative bg-ink px-5 pb-12 pt-36 md:px-8">
      <div className="mx-auto grid max-w-[96rem] gap-16 md:grid-cols-[1.25fr_2fr]">
        <div>
          <a href="mailto:atom@example.com" className="text-3xl">ventas@khido.cl</a>
          <a href="#" className="mt-4 block w-max border-b border-white text-xl">Linkedin↗</a>

          <p className="mt-12 text-xl">
            Santiago, Chile <span className="ml-4 text-white/36"></span>
          </p>

          <p className="mt-5 text-[7rem] font-semibold leading-none tracking-[-0.08em] md:text-[8.5rem]">
            {time}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {Object.entries(columns).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-5 text-lg text-white/48">{title}</h3>
              <ul className="space-y-3 text-lg">
                {links.map((link) => (
                  <li key={link}><a href="#" className="hover:text-violet-200">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <p className="mx-auto mt-20 max-w-[96rem] text-lg text-white/45">KHIDO, © 2026. Todos los derechos reservados.</p>
    </footer>
  );
}
