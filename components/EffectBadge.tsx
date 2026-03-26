import type { EffectSize } from "@/lib/types";
import { cn } from "@/lib/utils";

interface EffectBadgeProps {
  effect: EffectSize;
  label?: string;
}

const effectConfig: Record<EffectSize, { bg: string; text: string; dot: string }> = {
  groß: { bg: "bg-emerald-50", text: "text-emerald-700", dot: "bg-emerald-500" },
  moderat: { bg: "bg-amber-50", text: "text-amber-700", dot: "bg-amber-500" },
  klein: { bg: "bg-orange-50", text: "text-orange-700", dot: "bg-orange-500" },
  unklar: { bg: "bg-stone-100", text: "text-stone-600", dot: "bg-stone-400" },
};

export function EffectBadge({ effect, label }: EffectBadgeProps) {
  const config = effectConfig[effect];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium",
        config.bg,
        config.text
      )}
    >
      <span className={cn("size-1.5 rounded-full", config.dot)} aria-hidden="true" />
      {label || effect}
    </span>
  );
}
