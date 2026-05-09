"use client";

import { useApp, t } from "@/contexts/Providers";
import { SYSTEMS, DEPENDENCY_EDGES } from "@/data/spec";
import { useState, useMemo } from "react";

export default function DependenciesPage() {
  const { lang } = useApp();
  const [hover, setHover] = useState<string | null>(null);

  const positions = useMemo(() => {
    const out: Record<string, { x: number; y: number }> = {};
    SYSTEMS.forEach((s, i) => {
      const angle = (i / SYSTEMS.length) * Math.PI * 2 - Math.PI / 2;
      out[s.id] = { x: 50 + Math.cos(angle) * 38, y: 50 + Math.sin(angle) * 38 };
    });
    return out;
  }, []);

  return (
    <>
      <header className="max-w-5xl mx-auto px-4 md:px-8 pt-16 md:pt-24 pb-8">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--accent)] mb-4">{lang === "zh" ? "依赖图" : "Dependency graph"}</div>
        <h1 className="font-display text-4xl md:text-6xl leading-tight">
          {lang === "zh" ? "谁调用谁。" : "Who calls whom."}
        </h1>
        <p className="font-body text-[var(--ink-soft)] mt-5 max-w-3xl text-base md:text-lg leading-relaxed">
          {lang === "zh"
            ? "一条边代表一个公开 API 合约。点亮某子系统——只看与它相关的边。"
            : "Each edge is a published API contract. Hover any subsystem to isolate its edges."}
        </p>
        <div className="dotted-rule mt-8" />
      </header>

      <section className="max-w-5xl mx-auto px-4 md:px-8 mb-12">
        <div className="relative aspect-square max-w-[680px] mx-auto border border-[var(--rule)] bg-[var(--bg-alt)]/40 scanline">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
            {DEPENDENCY_EDGES.map((e, i) => {
              const a = positions[e.from], b = positions[e.to];
              if (!a || !b) return null;
              const isActive = hover === e.from || hover === e.to;
              return (
                <line key={i} x1={a.x} y1={a.y} x2={b.x} y2={b.y}
                  stroke="currentColor" className={isActive ? "text-[var(--accent)]" : "text-[var(--ink-soft)]"}
                  strokeWidth={isActive ? 0.35 : 0.12} opacity={isActive ? 0.9 : 0.25} vectorEffect="non-scaling-stroke" />
              );
            })}
          </svg>

          {SYSTEMS.map((s) => {
            const p = positions[s.id];
            const isHover = hover === s.id;
            return (
              <div
                key={s.id}
                onMouseEnter={() => setHover(s.id)}
                onMouseLeave={() => setHover(null)}
                className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                style={{ left: `${p.x}%`, top: `${p.y}%` }}
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full border bg-[var(--bg)] hover:scale-110 transition-transform" style={{ borderColor: s.hue }}>
                  <span className="font-display text-xl" style={{ color: s.hue }}>{s.glyph}</span>
                </div>
                <div className={`mt-1 text-center font-mono text-[10px] tracking-wider uppercase whitespace-nowrap ${isHover ? "text-[var(--accent)]" : "text-[var(--ink-soft)]"}`}>
                  {s.slug}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 md:px-8 pb-24">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--accent)] mb-3">{lang === "zh" ? "调用矩阵" : "Call matrix"}</div>
        <div className="overflow-x-auto no-scrollbar">
          <table className="min-w-[820px] w-full border border-[var(--rule)] font-mono text-[11px]">
            <thead>
              <tr className="bg-[var(--bg-alt)]">
                <th className="text-left px-3 py-2 text-[var(--ink-soft)] uppercase tracking-wider">{lang === "zh" ? "调用方 ↓ / 被调用方 →" : "caller ↓ / callee →"}</th>
                {SYSTEMS.map((s) => (
                  <th key={s.id} className="px-2 py-2 text-[var(--accent)] text-center" style={{ minWidth: 60 }}>{s.glyph}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {SYSTEMS.map((s) => {
                const calls = new Set(s.apis.map((a) => a.to));
                return (
                  <tr key={s.id} className="border-t border-[var(--rule)]">
                    <td className="px-3 py-2 text-[var(--ink-soft)]">{s.glyph} {s.slug}</td>
                    {SYSTEMS.map((tgt) => (
                      <td key={tgt.id} className="px-2 py-2 text-center">
                        {calls.has(tgt.id) ? <span className="text-[var(--accent)]">●</span> : <span className="text-[var(--ink-soft)] opacity-25">·</span>}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="mt-5 font-body text-sm text-[var(--ink-soft)] leading-relaxed">
          {lang === "zh"
            ? "Civilization OS 与 Decision OS 是入边最多的节点——他们是事实上的协同枢纽。Reality Kernel 是出边最少而被引用最广的——它对其他系统施加约束，但自身不调用谁。"
            : "Civilization OS and Decision OS receive the most edges — they are the de-facto coordination hubs. Reality Kernel has the fewest outbound calls but is referenced widely — it constrains other systems without calling anyone."}
        </p>
      </section>
    </>
  );
}
