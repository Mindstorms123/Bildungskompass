"use client";

import { useState } from "react";
import type { Topic } from "@/lib/types";
import { SourcesList } from "./SourcesList";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface ParentViewProps {
  topic: Topic;
  labels: {
    whatYouCanDo: string;
    whyItMatters: string;
    simplifiedSources: string;
    basedOnStudies: string;
  };
}

const tipEmojis = ["💡", "🎯", "✨", "🌟", "🔑"];

export function ParentView({ topic, labels }: ParentViewProps) {
  const [whyExpanded, setWhyExpanded] = useState(false);

  return (
    <div className="space-y-10">
      <section>
        <h2 className="text-xl font-semibold text-stone-900 text-balance mb-6">{labels.whatYouCanDo}</h2>
        <ul className="space-y-4">
          {topic.parentTips.map((tip, i) => (
            <li
              key={i}
              className="flex gap-4 rounded-xl border border-stone-200 bg-white p-5 transition-colors hover:border-accent-parent/30"
            >
              <span className="text-xl shrink-0" aria-hidden="true">
                {tipEmojis[i % tipEmojis.length]}
              </span>
              <p className="text-stone-700 leading-relaxed text-pretty">{tip}</p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <button
          onClick={() => setWhyExpanded(!whyExpanded)}
          className="flex w-full items-center justify-between rounded-xl border border-stone-200 bg-white p-5 text-left transition-colors hover:border-accent-parent/30"
          aria-expanded={whyExpanded}
          aria-controls="why-it-matters"
        >
          <h2 className="text-xl font-semibold text-stone-900 text-balance">{labels.whyItMatters}</h2>
          <ChevronDown
            className={cn(
              "size-5 text-stone-400 transition-transform duration-200",
              whyExpanded && "rotate-180"
            )}
            aria-hidden="true"
          />
        </button>
        {whyExpanded && (
          <div id="why-it-matters" className="rounded-b-xl border border-t-0 border-stone-200 bg-white p-5">
            <p className="text-stone-700 leading-relaxed text-pretty">{topic.parentWhy}</p>
          </div>
        )}
      </section>

      <section>
        <p className="text-sm text-stone-500 mb-3">
          {labels.basedOnStudies.replace("{count}", String(topic.sources.length))}
        </p>
        <SourcesList sources={topic.sources} label={labels.simplifiedSources} simplified />
      </section>
    </div>
  );
}
