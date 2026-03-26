import Link from "next/link";
import type { Topic, AgeGroup } from "@/lib/types";
import { AGE_GROUPS } from "@/lib/types";
import { cn } from "@/lib/utils";
import { EvidenceShields } from "./EvidenceShields";
import { EffectBadge } from "./EffectBadge";
import { AIStatusBadge } from "./AIStatusBadge";

interface TopicCardProps {
  topic: Topic;
  locale: string;
  selectedAge: AgeGroup | null;
  effectLabel?: string;
}

export function TopicCard({ topic, locale, selectedAge, effectLabel }: TopicCardProps) {
  const isRelevant = selectedAge === null || topic.ages.includes(selectedAge);
  const href = `/${locale}/themen/${topic.slug}`;

  return (
    <Link
      href={href}
      className={cn(
        "group relative flex flex-col rounded-2xl border border-stone-200 bg-white p-6 transition-[transform,opacity] duration-200",
        isRelevant
          ? "shadow-sm hover:-translate-y-0.5"
          : "opacity-30 pointer-events-none"
      )}
      aria-hidden={!isRelevant}
      tabIndex={isRelevant ? 0 : -1}
    >
      <div className="flex items-start justify-between gap-3 mb-4">
        <span className="text-3xl" aria-hidden="true">{topic.icon}</span>
        <AIStatusBadge status={topic.aiStatus} locale={locale} />
      </div>

      <h3 className="text-lg font-semibold text-stone-900 text-balance mb-3 group-hover:text-primary">
        {locale === "en" ? topic.titleEn : topic.title}
      </h3>

      <div className="flex flex-wrap items-center gap-2 mb-4">
        <EvidenceShields strength={topic.evidence.strength} />
        <EffectBadge effect={topic.evidence.effect} label={effectLabel} />
      </div>

      <div className="mt-auto flex flex-wrap gap-1.5">
        {topic.ages.map((ageId) => {
          const group = AGE_GROUPS.find((g) => g.id === ageId);
          if (!group) return null;
          return (
            <span
              key={ageId}
              className="inline-flex items-center gap-1 rounded-full bg-stone-100 px-2 py-0.5 text-xs text-stone-600"
            >
              <span aria-hidden="true">{group.emoji}</span>
              {group.label}
            </span>
          );
        })}
      </div>
    </Link>
  );
}
