import type { EffectSize } from "@/lib/types";
import { cn } from "@/lib/utils";

interface EffectBadgeProps {
  effect: EffectSize;
  label?: string;
}

const effectConfig: Record<EffectSize, { border: string; text: string; dot: string }> = {
  groß: { border: "border-emerald-200", text: "text-emerald-700", dot: "bg-emerald-500" },
  moderat: { border: "border-amber-200", text: "text-amber-700", dot: "bg-amber-500" },
  klein: { border: "border-orange-200", text: "text-orange-700", dot: "bg-orange-500" },
  unklar: { border: "border-stone-200", text: "text-stone-500", dot: "bg-stone-400" },
};

export function EffectBadge({ effect, label }: EffectBadgeProps) {
  const config = effectConfig[effect];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-sm border px-2 py-0.5 text-[0.6875rem] font-medium tracking-wide",
        config.border,
        config.text
      )}
    >
      <span className={cn("size-1 rounded-full", config.dot)} aria-hidden="true" />
      {label || effect}
    </span>
  );
}
