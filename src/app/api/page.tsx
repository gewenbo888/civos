"use client";

import { useApp, t } from "@/contexts/Providers";
import { SYSTEMS } from "@/data/spec";

export default function APIPage() {
  const { lang } = useApp();
  return (
    <>
      <header className="max-w-4xl mx-auto px-4 md:px-8 pt-16 md:pt-24 pb-10">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--accent)] mb-4">{lang === "zh" ? "全局 API 索引" : "Global API index"}</div>
        <h1 className="font-display text-4xl md:text-6xl leading-tight">
          {lang === "zh" ? "每条出边都是一份合约。" : "Every outbound edge is a contract."}
        </h1>
        <p className="font-body text-[var(--ink-soft)] mt-5 max-w-3xl text-base md:text-lg leading-relaxed">
          {lang === "zh"
            ? "下方按调用方分组——某子系统的所有出向 API。被调用方在右栏。线缆由 psy-protocol-spec 承载。"
            : "Below, grouped by caller — every outbound API for each subsystem. Callees in the right column. The wire is carried by psy-protocol-spec."}
        </p>
        <div className="dotted-rule mt-8" />
      </header>

      <section className="max-w-5xl mx-auto px-4 md:px-8 pb-24 space-y-12">
        {SYSTEMS.map((s) => (
          <div key={s.id} className="border border-[var(--rule)]">
            <div className="bg-[var(--bg-alt)]/40 px-5 py-4 border-b border-[var(--rule)] flex items-baseline gap-3 flex-wrap">
              <span className="font-display text-2xl" style={{ color: s.hue }}>{s.glyph}</span>
              <span className="font-display text-xl">{t(s.name, lang)}</span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--accent)] ml-auto">{s.slug}</span>
            </div>
            <div className="divide-y divide-[var(--rule)]">
              {s.apis.map((a, i) => (
                <div key={i} className="grid md:grid-cols-[140px_1fr_auto] gap-4 px-5 py-4 items-baseline">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--accent)]">→ {a.to}</span>
                  <span className="font-body text-sm text-[var(--ink-soft)] leading-relaxed">{t(a.contract, lang)}</span>
                  <code className="font-mono text-[11px] text-[var(--ink)] bg-[var(--bg-alt)]/50 px-2 py-1 whitespace-pre">{a.signature}</code>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
