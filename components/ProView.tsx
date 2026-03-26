import type { Topic } from "@/lib/types";
import { EvidenceShields } from "./EvidenceShields";
import { EffectBadge } from "./EffectBadge";
import { SourcesList } from "./SourcesList";
import { Globe, Lightbulb, AlertTriangle } from "lucide-react";

interface ProViewProps {
  topic: Topic;
  locale: string;
  labels: {
    evidenceSummary: string;
    practiceeTips: string;
    internationalModels: string;
    sources: string;
    evidenceGap: string;
    conflictingEvidence: string;
  };
  effectLabel: string;
  costLabel: string;
}

export function ProView({ topic, locale, labels, effectLabel, costLabel }: ProViewProps) {
  const proSummary = locale === "en" ? topic.proSummaryEn : topic.proSummary;
  const proTips = locale === "en" ? topic.proTipsEn : topic.proTips;
  const evidenceGap = locale === "en" ? topic.evidenceGapEn : topic.evidenceGap;
  const hasConflict = proSummary.includes("⚡");

  return (
    <div className="space-y-14">
      <div className="flex flex-wrap items-center gap-3">
        <EvidenceShields strength={topic.evidence.strength} size="md" />
        <EffectBadge effect={topic.evidence.effect} label={effectLabel} />
        <span className="inline-flex items-center gap-1.5 rounded-sm border border-stone-200 px-2.5 py-0.5 text-xs font-medium text-stone-500 tracking-wide uppercase">
          {costLabel}
        </span>
      </div>

      {hasConflict && (
        <div className="flex items-start gap-3 border-l-2 border-amber-400 bg-amber-50/60 px-5 py-4">
          <AlertTriangle className="size-4 text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-sm text-amber-800 font-medium text-pretty">{labels.conflictingEvidence}</p>
        </div>
      )}

      <section>
        <h2 className="font-serif text-2xl font-normal text-stone-900 text-balance mb-5 tracking-tight">{labels.evidenceSummary}</h2>
        <p className="text-stone-700 leading-[1.8] text-pretty text-[0.9375rem]">
          {proSummary.replace(/⚡\s*/g, "")}
        </p>
      </section>

      <section>
        <h2 className="flex items-center gap-2.5 font-serif text-2xl font-normal text-stone-900 text-balance mb-6 tracking-tight">
          <Lightbulb className="size-5 text-primary-light" aria-hidden="true" />
          {labels.practiceeTips}
        </h2>
        <ol className="space-y-5">
          {proTips.map((tip, i) => (
            <li key={i} className="flex gap-4 text-stone-700 leading-[1.8]">
              <span className="font-serif text-2xl font-normal text-stone-300 shrink-0 w-8 text-right tabular-nums leading-[1.8]">
                {i + 1}
              </span>
              <span className="text-pretty text-[0.9375rem] border-l border-stone-200 pl-4">{tip}</span>
            </li>
          ))}
        </ol>
      </section>

      {evidenceGap && (
        <section>
          <h2 className="flex items-center gap-2.5 font-serif text-2xl font-normal text-stone-900 text-balance mb-5 tracking-tight">
            <AlertTriangle className="size-5 text-amber-500" aria-hidden="true" />
            {labels.evidenceGap}
          </h2>
          <p className="text-stone-600 leading-[1.8] text-pretty text-[0.9375rem]">{evidenceGap}</p>
        </section>
      )}

      {topic.vorbilder.length > 0 && (
        <section>
          <h2 className="flex items-center gap-2.5 font-serif text-2xl font-normal text-stone-900 text-balance mb-6 tracking-tight">
            <Globe className="size-5 text-primary-light" aria-hidden="true" />
            {labels.internationalModels}
          </h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {topic.vorbilder.map((v, i) => (
              <div key={i} className="border-t-2 border-stone-800 bg-stone-50/50 px-5 pt-4 pb-5">
                <div className="flex items-baseline gap-2 mb-2">
                  <h3 className="font-medium text-stone-900 text-[0.9375rem]">{v.name}</h3>
                  <span className="text-xs text-stone-400 tracking-wide uppercase">{v.country}</span>
                </div>
                <p className="text-sm text-stone-600 leading-relaxed text-pretty">{locale === "en" ? v.descEn : v.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <SourcesList sources={topic.sources} label={labels.sources} />
    </div>
  );
}
