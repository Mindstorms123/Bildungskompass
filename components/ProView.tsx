import type { Topic } from "@/lib/types";
import { EvidenceShields } from "./EvidenceShields";
import { EffectBadge } from "./EffectBadge";
import { SourcesList } from "./SourcesList";
import { Globe, Lightbulb, AlertTriangle } from "lucide-react";

interface ProViewProps {
  topic: Topic;
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

export function ProView({ topic, labels, effectLabel, costLabel }: ProViewProps) {
  const hasConflict = topic.proSummary.includes("⚡");

  return (
    <div className="space-y-10">
      <div className="flex flex-wrap items-center gap-3">
        <EvidenceShields strength={topic.evidence.strength} size="md" />
        <EffectBadge effect={topic.evidence.effect} label={effectLabel} />
        <span className="inline-flex items-center gap-1.5 rounded-full bg-stone-100 px-2.5 py-1 text-xs font-medium text-stone-600">
          {costLabel}
        </span>
      </div>

      {hasConflict && (
        <div className="flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4">
          <AlertTriangle className="size-5 text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-sm text-amber-800 font-medium">{labels.conflictingEvidence}</p>
        </div>
      )}

      <section>
        <h2 className="text-xl font-semibold text-stone-900 text-balance mb-4">{labels.evidenceSummary}</h2>
        <p className="text-stone-700 leading-relaxed text-pretty">
          {topic.proSummary.replace(/⚡\s*/g, "")}
        </p>
      </section>

      <section>
        <h2 className="flex items-center gap-2 text-xl font-semibold text-stone-900 mb-4">
          <Lightbulb className="size-5 text-primary-light" aria-hidden="true" />
          {labels.practiceeTips}
        </h2>
        <ul className="space-y-3">
          {topic.proTips.map((tip, i) => (
            <li key={i} className="flex gap-3 text-stone-700 leading-relaxed">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-bg text-xs font-medium text-primary tabular-nums mt-0.5">
                {i + 1}
              </span>
              <span className="text-pretty">{tip}</span>
            </li>
          ))}
        </ul>
      </section>

      {topic.evidenceGap && (
        <section>
          <h2 className="flex items-center gap-2 text-xl font-semibold text-stone-900 text-balance mb-4">
            <AlertTriangle className="size-5 text-amber-500" aria-hidden="true" />
            {labels.evidenceGap}
          </h2>
          <p className="text-stone-600 leading-relaxed text-pretty">{topic.evidenceGap}</p>
        </section>
      )}

      {topic.vorbilder.length > 0 && (
        <section>
          <h2 className="flex items-center gap-2 text-xl font-semibold text-stone-900 text-balance mb-4">
            <Globe className="size-5 text-primary-light" aria-hidden="true" />
            {labels.internationalModels}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {topic.vorbilder.map((v, i) => (
              <div key={i} className="rounded-xl border border-stone-200 p-5">
                <div className="flex items-baseline gap-2 mb-2">
                  <h3 className="font-medium text-stone-900">{v.name}</h3>
                  <span className="text-xs text-stone-400">{v.country}</span>
                </div>
                <p className="text-sm text-stone-600 leading-relaxed text-pretty">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <SourcesList sources={topic.sources} label={labels.sources} />
    </div>
  );
}
