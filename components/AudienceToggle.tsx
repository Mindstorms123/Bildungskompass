"use client";

import { useAudience } from "@/lib/audience-context";
import { cn } from "@/lib/utils";

interface AudienceToggleProps {
  labels: { pro: string; parent: string };
}

export function AudienceToggle({ labels }: AudienceToggleProps) {
  const { audience, setAudience } = useAudience();

  return (
    <div
      className="inline-flex rounded-full bg-white/80 p-1 shadow-sm border border-stone-200"
      role="radiogroup"
      aria-label="Zielgruppe wählen"
    >
      <button
        role="radio"
        aria-checked={audience === "pro"}
        onClick={() => setAudience("pro")}
        className={cn(
          "rounded-full px-4 py-2 text-sm font-medium transition-colors",
          audience === "pro"
            ? "bg-accent-pro text-white"
            : "text-stone-600 hover:text-stone-900"
        )}
      >
        {labels.pro}
      </button>
      <button
        role="radio"
        aria-checked={audience === "parent"}
        onClick={() => setAudience("parent")}
        className={cn(
          "rounded-full px-4 py-2 text-sm font-medium transition-colors",
          audience === "parent"
            ? "bg-accent-parent text-white"
            : "text-stone-600 hover:text-stone-900"
        )}
      >
        {labels.parent}
      </button>
    </div>
  );
}
