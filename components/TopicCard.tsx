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
        "group relative flex flex-col border-l-[3px] border-l-primary bg-white px-7 py-6 transition-[transform,opacity] duration-200",
        isRelevant
          ? "hover:-translate-y-0.5"
          : "opacity-30 pointer-events-none"
      )}
      aria-hidden={!isRelevant}
      tabIndex={isRelevant ? 0 : -1}
    >
      <div className="flex items-start justify-between gap-4 mb-5">
        <span className="text-4xl leading-none" aria-hidden="true">{topic.icon}</span>
        <AIStatusBadge status={topic.aiStatus} locale={locale} />
      </div>

      <h3 className="font-serif text-xl font-semibold text-stone-900 text-balance mb-4 group-hover:text-primary">
        {locale === "en" ? topic.titleEn : topic.title}
      </h3>

      <div className="flex flex-wrap items-center gap-2 mb-5">
        <EvidenceShields strength={topic.evidence.strength} />
        <span className="text-xs">
          <EffectBadge effect={topic.evidence.effect} label={effectLabel} />
        </span>
      </div>

      <div className="mt-auto flex items-center gap-3 text-xs text-stone-400">
        {topic.ages.map((ageId) => {
          const group = AGE_GROUPS.find((g) => g.id === ageId);
          if (!group) return null;
          return (
            <span
              key={ageId}
              className="inline-flex items-center gap-1 text-pretty"
            >
              <span className="size-1.5 rounded-full bg-stone-300" aria-hidden="true" />
              {group.label}
            </span>
          );
        })}
      </div>
    </Link>
  );
}
