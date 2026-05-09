"use client";

import { useApp, t } from "@/contexts/Providers";
import { SYSTEMS } from "@/data/spec";
import { SUBDOMAIN_FOR } from "@/components/Chrome";

const STACK = [
  { layer: "meta",   members: ["civilization-os", "cycle-engine"],                         label: { en: "Meta — orchestration & time",                  zh: "元层——编排与时间" } },
  { layer: "agent",  members: ["decision-os", "idea-evolution"],                            label: { en: "Agent — decisions & ideas",                    zh: "代理层——决策与思想" } },
  { layer: "social", members: ["clan-civilization", "sensory-os"],                          label: { en: "Social — trust & perception",                  zh: "社会层——信任与感知" } },
  { layer: "subst",  members: ["material-civilization", "life-os"],                         label: { en: "Substrate — matter & life",                    zh: "基底层——物质与生命" } },
  { layer: "phys",   members: ["reality-kernel"],                                           label: { en: "Physics — laws of the universe",               zh: "物理层——宇宙之律" } },
  { layer: "wire",   members: ["psy-protocol-spec"],                                        label: { en: "Wire — coordination protocol",                 zh: "线缆层——协同协议" } },
];

export default function ArchitecturePage() {
  const { lang } = useApp();
  return (
    <>
      <header className="max-w-5xl mx-auto px-4 md:px-8 pt-16 md:pt-24 pb-10">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--accent)] mb-4">{lang === "zh" ? "架构" : "Architecture"}</div>
        <h1 className="font-display text-4xl md:text-6xl leading-tight">
          {lang === "zh" ? "六层栈，十个子系统。" : "Six layers, ten subsystems."}
        </h1>
        <p className="font-body text-[var(--ink-soft)] mt-5 max-w-3xl text-base md:text-lg leading-relaxed">
          {lang === "zh"
            ? "高层依赖低层。元层调度，代理层选择，社会层中介信任与感知，基底层提供物质与生命，物理层施加约束。一根线缆串起一切。"
            : "Higher layers depend on lower ones. The meta layer schedules; the agent layer chooses; the social layer mediates trust and perception; the substrate provides matter and life; the physics layer imposes constraints. One wire ties them all together."}
        </p>
        <div className="dotted-rule mt-8" />
      </header>

      {/* STACK DIAGRAM */}
      <section className="max-w-5xl mx-auto px-4 md:px-8 mb-16 space-y-3">
        {STACK.map((row, i) => (
          <div key={row.layer} className="grid grid-cols-[100px_1fr] gap-px bg-[var(--rule)]">
            <div className="bg-[var(--bg)] p-4 flex flex-col justify-center">
              <div className="font-mono text-[11px] uppercase tracking-wider text-[var(--accent)]">{row.layer}</div>
              <div className="font-display text-sm mt-1 leading-tight">{t(row.label, lang).split(" — ")[0]}</div>
            </div>
            <div className={`bg-[var(--bg)] p-4 grid gap-px`} style={{ gridTemplateColumns: `repeat(${row.members.length}, minmax(0, 1fr))` }}>
              {row.members.map((id) => {
                const s = SYSTEMS.find((x) => x.id === id);
                if (!s) return null;
                return (
                  <a
                    key={id}
                    href={SUBDOMAIN_FOR[id]}
                    target="_blank"
                    rel="noreferrer"
                    className="border border-[var(--rule)] hover:border-[var(--accent)] p-3 transition-colors group"
                  >
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="font-display text-2xl" style={{ color: s.hue }}>{s.glyph}</span>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--ink-soft)] group-hover:text-[var(--accent)]">
                        {s.slug}
                      </span>
                    </div>
                    <div className="font-display text-base mt-1 leading-tight">{t(s.name, lang)}</div>
                    <div className="font-body text-[11.5px] text-[var(--ink-soft)] mt-1 leading-relaxed">{t(s.oneLine, lang)}</div>
                  </a>
                );
              })}
            </div>
          </div>
        ))}
      </section>

      {/* DATA FLOW NARRATIVE */}
      <section className="max-w-3xl mx-auto px-4 md:px-8 pb-24">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--accent)] mb-4">{lang === "zh" ? "数据流（自下而上）" : "Data flow (bottom-up)"}</div>
        <ol className="space-y-5 font-body text-base leading-relaxed">
          <li className="flex gap-4">
            <span className="font-mono text-[var(--accent)] mt-1">01</span>
            <p>
              <strong className="font-display">reality-kernel</strong> {lang === "zh" ? "施加硬约束（热力学、Landauer 界、全息）。" : "imposes hard constraints (thermodynamics, Landauer bound, holography)."}
            </p>
          </li>
          <li className="flex gap-4">
            <span className="font-mono text-[var(--accent)] mt-1">02</span>
            <p>
              <strong className="font-display">life-os</strong> + <strong className="font-display">material-civilization</strong>{" "}
              {lang === "zh" ? "在这些约束之下产出生命与物质能力——人口、能源、材料栈。" : "produce living and material capability under those constraints — population, energy, material stack."}
            </p>
          </li>
          <li className="flex gap-4">
            <span className="font-mono text-[var(--accent)] mt-1">03</span>
            <p>
              <strong className="font-display">sensory-os</strong> + <strong className="font-display">clan-civilization</strong>{" "}
              {lang === "zh" ? "把基底事实折叠进每个代理的内部世界——感知与信任。" : "fold substrate facts into each agent's interior world — perception and trust."}
            </p>
          </li>
          <li className="flex gap-4">
            <span className="font-mono text-[var(--accent)] mt-1">04</span>
            <p>
              <strong className="font-display">decision-os</strong> + <strong className="font-display">idea-evolution</strong>{" "}
              {lang === "zh" ? "把感知与信任转化为行动选择与传播。" : "convert perception and trust into choices and their propagation."}
            </p>
          </li>
          <li className="flex gap-4">
            <span className="font-mono text-[var(--accent)] mt-1">05</span>
            <p>
              <strong className="font-display">civilization-os</strong> {lang === "zh" ? "在文明账簿上对齐这一切——" : "reconciles all of this on the civilizational ledger —"}{" "}
              <strong className="font-display">cycle-engine</strong> {lang === "zh" ? "为整体打上相位戳。" : "stamps the whole thing with a phase."}
            </p>
          </li>
          <li className="flex gap-4">
            <span className="font-mono text-[var(--accent)] mt-1">06</span>
            <p>
              <strong className="font-display">psy-protocol-spec</strong> {lang === "zh" ? "在所有这些跨层交换之下，承担线缆——证明、状态根、协调器。" : "carries every cross-layer exchange beneath all of this — proofs, state roots, coordinators."}
            </p>
          </li>
        </ol>
      </section>
    </>
  );
}
