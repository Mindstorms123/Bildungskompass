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
      className="relative flex rounded-full bg-white/80 p-1 shadow-sm border border-stone-200"
      role="radiogroup"
      aria-label="Zielgruppe wählen"
    >
      <button
        role="radio"
        aria-checked={audience === "pro"}
        onClick={() => setAudience("pro")}
        className={cn(
          "relative z-10 rounded-full px-4 py-2 text-sm font-medium transition-colors",
          audience === "pro"
            ? "text-white"
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
          "relative z-10 rounded-full px-4 py-2 text-sm font-medium transition-colors",
          audience === "parent"
            ? "text-white"
            : "text-stone-600 hover:text-stone-900"
        )}
      >
        {labels.parent}
      </button>
      <span
        aria-hidden="true"
        className={cn(
          "absolute top-1 bottom-1 rounded-full transition-transform duration-200 ease-out",
          audience === "pro"
            ? "left-1 bg-accent-pro"
            : "bg-accent-parent"
        )}
        style={{
          width: "calc(50% - 4px)",
          transform: audience === "parent" ? "translateX(calc(100% + 4px))" : "translateX(0)",
        }}
      />
    </div>
  );
}
