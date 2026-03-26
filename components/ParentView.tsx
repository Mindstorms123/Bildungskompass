"use client";

import { useState } from "react";
import type { Topic } from "@/lib/types";
import { SourcesList } from "./SourcesList";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface ParentViewProps {
  topic: Topic;
  locale: string;
  labels: {
    whatYouCanDo: string;
    whyItMatters: string;
    simplifiedSources: string;
    basedOnStudies: string;
  };
}

const tipEmojis = ["💡", "🎯", "✨", "🌟", "🔑"];

export function ParentView({ topic, locale, labels }: ParentViewProps) {
  const [whyExpanded, setWhyExpanded] = useState(false);
  const parentTips = locale === "en" ? topic.parentTipsEn : topic.parentTips;
  const parentWhy = locale === "en" ? topic.parentWhyEn : topic.parentWhy;

  return (
    <div className="space-y-12">
      <section>
        <h2 className="font-serif text-2xl font-normal text-stone-900 text-balance mb-7 tracking-tight">{labels.whatYouCanDo}</h2>
        <ul className="space-y-4">
          {parentTips.map((tip, i) => (
            <li
              key={i}
              className="flex gap-5 bg-white border border-stone-150 rounded-sm px-6 py-5"
            >
              <span className="text-2xl shrink-0 leading-none pt-0.5" aria-hidden="true">
                {tipEmojis[i % tipEmojis.length]}
              </span>
              <p className="text-stone-700 leading-[1.8] text-pretty text-[0.9375rem]">{tip}</p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <button
          onClick={() => setWhyExpanded(!whyExpanded)}
          className="flex w-full items-center justify-between border-l-4 border-accent-parent bg-stone-50 px-6 py-5 text-left"
          aria-expanded={whyExpanded}
          aria-controls="why-it-matters"
        >
          <h2 className="font-serif text-xl font-normal text-stone-900 text-balance italic">{labels.whyItMatters}</h2>
          <ChevronDown
            className={cn(
              "size-4 text-stone-400 shrink-0 ml-4",
              whyExpanded && "rotate-180"
            )}
            aria-hidden="true"
          />
        </button>
        {whyExpanded && (
          <div id="why-it-matters" className="border-l-4 border-accent-parent bg-stone-50 px-6 pb-6 -mt-px">
            <p className="text-stone-600 leading-[1.8] text-pretty text-[0.9375rem] italic">{parentWhy}</p>
          </div>
        )}
      </section>

      <section>
        <p className="text-xs text-stone-400 mb-4 tracking-wide uppercase">
          {labels.basedOnStudies.replace("{count}", String(topic.sources.length))}
        </p>
        <SourcesList sources={topic.sources} label={labels.simplifiedSources} simplified />
      </section>
    </div>
  );
}
