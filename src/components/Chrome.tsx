"use client";

import { useApp, t } from "@/contexts/Providers";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV: { href: string; label: { en: string; zh: string } }[] = [
  { href: "/",            label: { en: "Hub",            zh: "枢纽" } },
  { href: "/architecture",label: { en: "Architecture",   zh: "架构" } },
  { href: "/ontology",    label: { en: "Ontology",       zh: "本体" } },
  { href: "/dependencies",label: { en: "Dependencies",   zh: "依赖图" } },
  { href: "/systems",     label: { en: "Systems",        zh: "子系统" } },
  { href: "/api",         label: { en: "API",            zh: "接口" } },
  { href: "/about",       label: { en: "About",          zh: "关于" } },
];

const SUBDOMAIN_FOR: Record<string, string> = {
  "civilization-os":      "https://civos-civilization-os.psyverse.fun",
  "idea-evolution":       "https://civos-idea-evolution.psyverse.fun",
  "material-civilization":"https://civos-material-civilization.psyverse.fun",
  "psy-protocol-spec":    "https://psy-protocol-spec.psyverse.fun",
  "clan-civilization":    "https://civos-clan-civilization.psyverse.fun",
  "sensory-os":           "https://sensory-os.psyverse.fun",
  "reality-kernel":       "https://reality-kernel.psyverse.fun",
  "decision-os":          "https://decision-os.psyverse.fun",
  "cycle-engine":         "https://cycle-engine.psyverse.fun",
  "life-os":              "https://life-os.psyverse.fun",
};

export { SUBDOMAIN_FOR };

export default function Chrome({ children }: { children: React.ReactNode }) {
  const { lang, setLang, theme, toggleTheme } = useApp();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 backdrop-blur-md bg-[var(--bg)]/80 border-b border-[var(--rule)]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 md:py-4 flex items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-3 group">
            <span className="relative inline-block w-7 h-7">
              <svg viewBox="0 0 28 28" className="w-full h-full">
                <rect x="2" y="2" width="24" height="24" rx="3" fill="none" stroke="var(--accent)" strokeWidth="1" opacity="0.6"/>
                <line x1="2"  y1="14" x2="26" y2="14" stroke="var(--accent)" strokeWidth="0.7" opacity="0.5"/>
                <line x1="14" y1="2"  x2="14" y2="26" stroke="var(--accent)" strokeWidth="0.7" opacity="0.5"/>
                <circle cx="14" cy="14" r="3.5" fill="var(--accent)"/>
              </svg>
            </span>
            <span className="hidden sm:flex flex-col leading-tight">
              <span className="font-display text-base tracking-tight">civos</span>
              <span className="font-mono text-[10px] text-[var(--ink-soft)]">civilization-os ecosystem</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-5 font-mono text-[12px] uppercase tracking-wider">
            {NAV.slice(1).map((it) => (
              <a key={it.href} href={it.href} className="text-[var(--ink-soft)] hover:text-[var(--accent)] transition-colors">
                {t(it.label, lang)}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button onClick={() => setLang(lang === "en" ? "zh" : "en")} className="font-mono text-[11px] tracking-wider px-2.5 py-1 border border-[var(--rule)] hover:border-[var(--accent)] uppercase">
              {lang === "en" ? "中文" : "EN"}
            </button>
            <button onClick={toggleTheme} className="font-mono text-[11px] px-2.5 py-1 border border-[var(--rule)] hover:border-[var(--accent)]">
              {theme === "dark" ? "☾" : "☀"}
            </button>
            <button onClick={() => setOpen(true)} className="lg:hidden font-mono text-[11px] px-2.5 py-1 border border-[var(--rule)]">☰</button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[var(--bg)]/95 backdrop-blur-lg" onClick={() => setOpen(false)}
          >
            <div className="max-w-md mx-auto px-8 pt-24" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setOpen(false)} className="absolute top-4 right-4 px-3 py-1 border border-[var(--rule)] font-mono text-xs">✕</button>
              <ul className="space-y-3">
                {NAV.map((it) => (
                  <li key={it.href}>
                    <a href={it.href} onClick={() => setOpen(false)} className="block py-2 font-display text-2xl border-b border-[var(--rule)]">
                      {t(it.label, lang)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="min-h-[80vh]">{children}</main>

      <footer className="border-t border-[var(--rule)] mt-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 font-mono text-[11px] text-[var(--ink-soft)] flex flex-col md:flex-row gap-3 md:gap-8 justify-between">
          <div>
            <div className="font-display text-base text-[var(--ink)]">civos · civilization-os ecosystem · 文明操作系统生态</div>
            <div className="mt-1 opacity-70">10 systems · 1 hub · bilingual specification</div>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a href="/about" className="hover:text-[var(--accent)]">{lang === "zh" ? "关于" : "About"}</a>
            <a href="https://psyverse.fun" target="_blank" rel="noreferrer" className="hover:text-[var(--accent)]">psyverse.fun</a>
          </div>
        </div>
      </footer>
    </>
  );
}
