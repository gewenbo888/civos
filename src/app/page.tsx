"use client";

import { useApp, t } from "@/contexts/Providers";
import { SUBDOMAIN_FOR } from "@/components/Chrome";
import { SYSTEMS, SHARED_ONTOLOGY } from "@/data/spec";
import { motion } from "framer-motion";

export default function Hub() {
  const { lang } = useApp();
  return (
    <>
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 md:pt-28 pb-16">
          <div className="font-mono text-[11px] tracking-[0.3em] text-[var(--accent)] uppercase mb-5">
            civos · v0.1 · {lang === "zh" ? "规范" : "specification"}
          </div>
          <h1 className="font-display text-5xl md:text-7xl xl:text-8xl leading-[1.02] tracking-tight max-w-5xl">
            {lang === "zh"
              ? "十个系统，一个生态。"
              : "Ten systems, one ecosystem."}
          </h1>
          <p className="mt-8 max-w-2xl font-body text-base md:text-lg text-[var(--ink-soft)] leading-relaxed">
            {lang === "zh"
              ? "每一个文明都同时运行着数个相互重叠的子系统：物理、生命、感知、决策、思想、协调、记忆、周期。Civilization OS 生态把它们当作可分别建模、又彼此通信的进程来对待。本枢纽是规范——子站是各进程。"
              : "Every civilization runs several overlapping subsystems at once: physics, life, perception, decision, idea, coordination, memory, cycle. The Civilization OS Ecosystem treats them as processes that can be modeled separately and made to talk to each other. This hub is the specification; the subsidiary sites are the processes."}
          </p>
          <div className="mt-10 flex flex-wrap gap-3 font-mono text-xs">
            <a href="/architecture" className="px-5 py-2.5 border border-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--bg)] uppercase tracking-wider transition-colors">
              {lang === "zh" ? "架构图" : "Architecture →"}
            </a>
            <a href="/dependencies" className="px-5 py-2.5 border border-[var(--rule)] hover:border-[var(--accent)] uppercase tracking-wider transition-colors">
              {lang === "zh" ? "依赖图" : "Dependency graph"}
            </a>
            <a href="/ontology" className="px-5 py-2.5 border border-[var(--rule)] hover:border-[var(--accent)] uppercase tracking-wider transition-colors">
              {lang === "zh" ? "共享本体" : "Shared ontology"}
            </a>
          </div>
        </div>
      </section>

      {/* SYSTEM GRID */}
      <section className="border-y border-[var(--rule)]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
          <div className="flex items-baseline justify-between mb-8 gap-3 flex-wrap">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--accent)] mb-2">{lang === "zh" ? "进程清单" : "Process registry"}</div>
              <h2 className="font-display text-3xl md:text-4xl">{lang === "zh" ? "十个独立部署的子系统。" : "Ten subsystems, each independently deployed."}</h2>
            </div>
            <a href="/systems" className="font-mono text-xs uppercase tracking-wider text-[var(--ink-soft)] hover:text-[var(--accent)]">
              {lang === "zh" ? "完整清单 →" : "Full registry →"}
            </a>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-px bg-[var(--rule)]">
            {SYSTEMS.map((s, i) => (
              <motion.a
                key={s.id}
                href={SUBDOMAIN_FOR[s.id]}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="bg-[var(--bg)] hover:bg-[var(--bg-alt)] transition-colors p-6 flex flex-col gap-3 min-h-[14rem] group"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-3xl" style={{ color: s.hue }}>{s.glyph}</span>
                  <span className="font-mono text-[10px] tracking-wider uppercase text-[var(--ink-soft)]">{s.slug}</span>
                </div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-[var(--ink-soft)]">{t(s.agent, lang)}</div>
                <h3 className="font-display text-lg leading-tight">{t(s.name, lang)}</h3>
                <p className="font-body text-[12.5px] leading-relaxed text-[var(--ink-soft)]">{t(s.oneLine, lang)}</p>
                <div className="mt-auto font-mono text-[10px] uppercase tracking-wider text-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity">
                  {s.slug}.psyverse.fun →
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT BINDS THEM */}
      <section className="max-w-5xl mx-auto px-4 md:px-8 py-20 md:py-28">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--accent)] mb-3">{lang === "zh" ? "结合层" : "What binds them"}</div>
        <h2 className="font-display text-3xl md:text-4xl mb-10">
          {lang === "zh" ? "三件东西让它们成为一个系统：" : "Three things make them a single system:"}
        </h2>
        <div className="space-y-6 font-body text-base md:text-lg leading-relaxed">
          <p className="border-l-2 border-[var(--accent)] pl-5">
            <span className="font-display text-xl block mb-1">{lang === "zh" ? "1 · 共享本体" : "1 · Shared ontology"}</span>
            {lang === "zh"
              ? "每个系统都从一份共同的实体词汇——Civilization、Resource、Institution、Idea、Phase——开始。任何子系统输出的对象，其他子系统皆能识别。"
              : "Every system starts from a common vocabulary of entities — Civilization, Resource, Institution, Idea, Phase. Any object emitted by one subsystem is recognizable to the others."}
            <a href="/ontology" className="ml-3 font-mono text-xs text-[var(--accent)] hover:underline">→ {lang === "zh" ? "查看" : "view"}</a>
          </p>
          <p className="border-l-2 border-[var(--accent)] pl-5">
            <span className="font-display text-xl block mb-1">{lang === "zh" ? "2 · 显式 API" : "2 · Explicit APIs"}</span>
            {lang === "zh"
              ? "每个子系统对外暴露一份合约清单。Decision OS 不偷偷读取 Sensory OS 的内部状态——它通过 GET /percept/posterior。"
              : "Each subsystem publishes a contract list. Decision OS does not secretly read Sensory OS's internal state — it goes through GET /percept/posterior."}
            <a href="/api" className="ml-3 font-mono text-xs text-[var(--accent)] hover:underline">→ {lang === "zh" ? "查看" : "view"}</a>
          </p>
          <p className="border-l-2 border-[var(--accent)] pl-5">
            <span className="font-display text-xl block mb-1">{lang === "zh" ? "3 · Psy 协议作为线缆" : "3 · Psy Protocol as the wire"}</span>
            {lang === "zh"
              ? "实际跨子系统的读取，由 Psy 协议——零知识证明、状态根、协调器——所中介。其他十层是研究；这一层有真实的实现。"
              : "Actual cross-subsystem reads are mediated by the Psy Protocol — zero-knowledge proofs, state roots, coordinators. The other layers are research; this one has a real implementation."}
            <a href={SUBDOMAIN_FOR["psy-protocol-spec"]} target="_blank" rel="noreferrer" className="ml-3 font-mono text-xs text-[var(--accent)] hover:underline">
              → psy-protocol-spec.psyverse.fun
            </a>
          </p>
        </div>
      </section>

      {/* SHARED ONTOLOGY STRIP */}
      <section className="border-t border-[var(--rule)]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--accent)] mb-5">{lang === "zh" ? "共享本体（节选）" : "Shared ontology (excerpt)"}</div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-[var(--rule)]">
            {SHARED_ONTOLOGY.slice(0, 10).map((o) => (
              <div key={o.entity.en} className="bg-[var(--bg)] p-4">
                <div className="font-display text-lg">{t(o.entity, lang)}</div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-[var(--accent)] mt-1">{o.lives_in}</div>
                <div className="font-body text-xs text-[var(--ink-soft)] mt-2 leading-relaxed">{t(o.appears_as, lang)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
