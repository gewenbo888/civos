"use client";

import { useApp, t } from "@/contexts/Providers";
import { SHARED_ONTOLOGY, SYSTEMS } from "@/data/spec";

export default function OntologyPage() {
  const { lang } = useApp();
  return (
    <>
      <header className="max-w-4xl mx-auto px-4 md:px-8 pt-16 md:pt-24 pb-10">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--accent)] mb-4">{lang === "zh" ? "共享本体" : "Shared ontology"}</div>
        <h1 className="font-display text-4xl md:text-6xl leading-tight">
          {lang === "zh" ? "十种实体——所有系统都讲这门语言。" : "Ten entities — every system speaks this language."}
        </h1>
        <p className="font-body text-[var(--ink-soft)] mt-5 max-w-3xl text-base md:text-lg leading-relaxed">
          {lang === "zh"
            ? "本体不是数据库——它是一份合约。任一子系统输出的对象，其他子系统应能识别为这十类之一。"
            : "The ontology is not a database — it is a contract. Any object emitted by a subsystem should be recognizable to the others as one of these ten kinds."}
        </p>
        <div className="dotted-rule mt-8" />
      </header>

      <section className="max-w-5xl mx-auto px-4 md:px-8 pb-24">
        <div className="grid sm:grid-cols-2 gap-px bg-[var(--rule)]">
          {SHARED_ONTOLOGY.map((o) => {
            const owner = SYSTEMS.find((s) => s.id === o.lives_in);
            return (
              <article key={o.entity.en} className="bg-[var(--bg)] p-6 flex flex-col gap-3">
                <div className="flex items-baseline justify-between">
                  <h2 className="font-display text-2xl">{t(o.entity, lang)}</h2>
                  {owner && <span className="font-display text-xl" style={{ color: owner.hue }}>{owner.glyph}</span>}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-[var(--accent)]">
                  {lang === "zh" ? "归属系统" : "owner"}: {o.lives_in}
                </div>
                <p className="font-body text-sm text-[var(--ink-soft)] leading-relaxed">{t(o.appears_as, lang)}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-16">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--accent)] mb-3">
            {lang === "zh" ? "类型签名（伪代码）" : "Type signatures (pseudocode)"}
          </div>
          <pre className="terminal p-5 bg-[var(--bg-alt)]/50 border border-[var(--rule)] overflow-x-auto no-scrollbar text-[var(--ink)]">
{`type Civilization = {
  id: uuid
  epoch: Phase
  population: Population
  energy: EnergyBudget
  ideology: MemeMix
  institutions: InstitutionGraph
}

type Phase   = "rise" | "peak" | "strain" | "collapse" | "renewal"
type Idea    = { id: uuid; form: string; parents: uuid[]; fitness: 0..1 }
type Realm   = { id: u32; state_root: bytes32; coordinator: address; epoch: u64 }
type Decision = { id: uuid; agent_id: uuid; choice_set: Option[]; outcome: Payoff }
`}
          </pre>
        </div>
      </section>
    </>
  );
}
