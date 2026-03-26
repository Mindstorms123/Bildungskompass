"use client";

import { useState } from "react";
import type { AgeGroup } from "@/lib/types";
import { topics } from "@/content/topics";
import { AgeFilter } from "./AgeFilter";
import { TopicCard } from "./TopicCard";

interface TopicGridProps {
  locale: string;
  allLabel: string;
  effectLabels: Record<string, string>;
}

export function TopicGrid({ locale, allLabel, effectLabels }: TopicGridProps) {
  const [selectedAge, setSelectedAge] = useState<AgeGroup | null>(null);

  return (
    <div className="space-y-12">
      <AgeFilter selected={selectedAge} onSelect={setSelectedAge} allLabel={allLabel} />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {topics.map((topic) => (
          <TopicCard
            key={topic.id}
            topic={topic}
            locale={locale}
            selectedAge={selectedAge}
            effectLabel={effectLabels[topic.evidence.effect]}
          />
        ))}
      </div>
    </div>
  );
}
