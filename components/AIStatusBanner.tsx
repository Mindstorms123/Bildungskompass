"use client";

import { useState } from "react";
import type { AIStatus } from "@/lib/types";
import { AI_STATUS_CONFIG } from "@/lib/types";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface AIStatusBannerProps {
  status: AIStatus;
  locale?: string;
  howWeReviewLabel: string;
  progressLabel: string;
}

const barColors: Record<string, string> = {
  orange: "bg-orange-500",
  blue: "bg-sky-500",
  green: "bg-emerald-500",
};

const borderColors: Record<string, string> = {
  orange: "border-orange-200",
  blue: "border-sky-200",
  green: "border-emerald-200",
};

export function AIStatusBanner({
  status,
  locale = "de",
  howWeReviewLabel,
  progressLabel,
}: AIStatusBannerProps) {
  const [expanded, setExpanded] = useState(false);
  const config = AI_STATUS_CONFIG[status];
  const label = locale === "en" ? config.labelEn : config.label;
  const description = locale === "en" ? config.descriptionEn : config.description;

  return (
    <div className={cn("border-l-2 bg-stone-50/60 px-5 py-4", borderColors[config.color])}>
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-center justify-between gap-4 text-left"
        aria-expanded={expanded}
        aria-controls="ai-status-details"
      >
        <div className="flex items-center gap-2.5">
          <span className="text-sm" aria-hidden="true">{config.icon}</span>
          <span className="text-sm font-medium text-stone-700">{label}</span>
        </div>
        <ChevronDown
          className={cn(
            "size-4 text-stone-400",
            expanded && "rotate-180"
          )}
          aria-hidden="true"
        />
      </button>

      <div className="mt-3">
        <div className="flex items-center gap-2 text-xs text-stone-400 mb-1.5 tracking-wide">
          <span className="uppercase">{progressLabel}</span>
          <span className="tabular-nums">{config.progress}%</span>
        </div>
        <div className="h-0.5 w-full bg-stone-200" role="progressbar" aria-label={progressLabel} aria-valuenow={config.progress} aria-valuemin={0} aria-valuemax={100}>
          <div
            className={cn("h-full", barColors[config.color])}
            style={{ width: `${config.progress}%` }}
          />
        </div>
      </div>

      {expanded && (
        <div id="ai-status-details" className="mt-4 space-y-3">
          <p className="text-sm text-stone-600 leading-relaxed text-pretty">{description}</p>
          <a
            href={`/${locale}/methodik`}
            className="inline-flex items-center text-xs font-medium text-stone-500 uppercase tracking-wide hover:text-stone-900"
          >
            {howWeReviewLabel} →
          </a>
        </div>
      )}
    </div>
  );
}
