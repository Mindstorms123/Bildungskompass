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

const bgColors: Record<string, string> = {
  orange: "bg-orange-50 border-orange-200",
  blue: "bg-sky-50 border-sky-200",
  green: "bg-emerald-50 border-emerald-200",
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
    <div className={cn("rounded-2xl border p-4 md:p-6", bgColors[config.color])}>
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-center justify-between gap-4 text-left"
        aria-expanded={expanded}
        aria-controls="ai-status-details"
      >
        <div className="flex items-center gap-3">
          <span className="text-lg" aria-hidden="true">{config.icon}</span>
          <span className="font-medium text-stone-900">{label}</span>
        </div>
        <ChevronDown
          className={cn(
            "size-5 text-stone-500 transition-transform duration-200",
            expanded && "rotate-180"
          )}
          aria-hidden="true"
        />
      </button>

      <div className="mt-3">
        <div className="flex items-center gap-2 text-xs text-stone-500 mb-1.5">
          <span>{progressLabel}</span>
          <span className="tabular-nums">{config.progress}%</span>
        </div>
        <div className="h-1.5 w-full rounded-full bg-stone-200" role="progressbar" aria-label={progressLabel} aria-valuenow={config.progress} aria-valuemin={0} aria-valuemax={100}>
          <div
            className={cn("h-full rounded-full", barColors[config.color])}
            style={{ width: `${config.progress}%` }}
          />
        </div>
      </div>

      {expanded && (
        <div id="ai-status-details" className="mt-4 space-y-3">
          <p className="text-sm text-stone-700 leading-relaxed">{description}</p>
          <a
            href={`/${locale}/methodik`}
            className="inline-flex items-center text-sm font-medium text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900"
          >
            {howWeReviewLabel} →
          </a>
        </div>
      )}
    </div>
  );
}
