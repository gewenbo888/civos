"use client";

import { useApp } from "@/contexts/Providers";

export default function AboutPage() {
  const { lang } = useApp();
  return (
    <>
      <header className="max-w-3xl mx-auto px-4 md:px-8 pt-16 md:pt-24 pb-10">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--accent)] mb-4">{lang === "zh" ? "关于 civos" : "About civos"}</div>
        <h1 className="font-display text-4xl md:text-6xl leading-tight">
          {lang === "zh" ? "这是什么？" : "What is this?"}
        </h1>
      </header>

      <article className="max-w-3xl mx-auto px-4 md:px-8 pb-24 font-body text-base md:text-lg leading-relaxed space-y-5">
        <p>
          {lang === "zh"
            ? "civos 是一份规范——把『文明运行起来需要哪些子系统在并行工作』这件事说清楚。它由十个子系统组成，每个独立部署在自己的子域名上：物理（Reality Kernel）、生命（Life OS）、感知（Sensory OS）、宗族（Clan Civilization）、思想（Idea Evolution）、决策（Decision OS）、物质（Material Civilization）、周期（Cycle Engine）、协议（Psy Protocol Spec），以及统辖一切的 Civilization OS。"
            : "civos is a specification: an explicit statement of which subsystems must run concurrently for a civilization to operate. It consists of ten subsystems, each independently deployed on its own subdomain — physics (Reality Kernel), life (Life OS), perception (Sensory OS), clans (Clan Civilization), ideas (Idea Evolution), decisions (Decision OS), materials (Material Civilization), cycles (Cycle Engine), protocol (Psy Protocol Spec), and the orchestrating Civilization OS that ties them together."}
        </p>
        <p>
          {lang === "zh"
            ? "每个子系统的页面采用同一份规范模板：核心概念、模块、数据模型、对外 API、关键方程或原理、示例 UI 屏幕。当一个子系统说『我会调用另一个子系统的 X』，那个 X 就在被调用方页面上的 API 表里——这是双向自洽。"
            : "Each subsystem's site uses the same specification template: core concept, modules, data model, outbound APIs, key equations or principles, example UI screens. When one subsystem says 'I call another's X', that X appears in the callee's API table — the two halves are forced to match."}
        </p>
        <p>
          {lang === "zh"
            ? "这是研究——不是产品。十个子系统中只有一个（psy-protocol-spec）有真实的生产实现。其余是用同一种语言写出来的研究草图，目的是逼迫『把含混的系统级直觉』转化为『可被反驳的规范』。"
            : "This is research, not product. Only one of the ten subsystems (psy-protocol-spec) has a production implementation behind it; the others are research sketches written in the same language so that vague systems-level intuitions are forced into falsifiable specifications."}
        </p>
        <p>
          {lang === "zh" ? "完整源码见 GitHub。每个子站有独立仓库——便于他人 fork、深化、替换某一层。" : "The source for the hub and each subsystem site is on GitHub; each subsystem has its own repository, so it can be forked, extended, or replaced layer by layer."}
        </p>
        <p className="font-mono text-sm text-[var(--ink-soft)]">
          civos · {lang === "zh" ? "v0.1 · 由 Gewenbo 编纂 · psyverse.fun 项目集" : "v0.1 · curated by Gewenbo · part of the psyverse.fun portfolio"}
        </p>
      </article>
    </>
  );
}
