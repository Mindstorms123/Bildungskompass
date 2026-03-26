import type { AIStatus } from "@/lib/types";
import { AI_STATUS_CONFIG } from "@/lib/types";
import { cn } from "@/lib/utils";

interface AIStatusBadgeProps {
  status: AIStatus;
  locale?: string;
}

const colorClasses: Record<string, { border: string; text: string }> = {
  orange: { border: "border-orange-200", text: "text-orange-700" },
  blue: { border: "border-sky-200", text: "text-sky-700" },
  green: { border: "border-emerald-200", text: "text-emerald-700" },
};

export function AIStatusBadge({ status, locale = "de" }: AIStatusBadgeProps) {
  const config = AI_STATUS_CONFIG[status];
  const colors = colorClasses[config.color];
  const label = locale === "en" ? config.labelEn : config.label;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-sm border px-2 py-0.5 text-[0.6875rem] font-medium tracking-wide",
        colors.border,
        colors.text
      )}
    >
      <span aria-hidden="true">{config.icon}</span>
      {label}
    </span>
  );
}
