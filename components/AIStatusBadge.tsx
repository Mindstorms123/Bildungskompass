import type { AIStatus } from "@/lib/types";
import { AI_STATUS_CONFIG } from "@/lib/types";
import { cn } from "@/lib/utils";

interface AIStatusBadgeProps {
  status: AIStatus;
  locale?: string;
}

const colorClasses: Record<string, { bg: string; text: string }> = {
  orange: { bg: "bg-orange-50", text: "text-orange-700" },
  blue: { bg: "bg-sky-50", text: "text-sky-700" },
  green: { bg: "bg-emerald-50", text: "text-emerald-700" },
};

export function AIStatusBadge({ status, locale = "de" }: AIStatusBadgeProps) {
  const config = AI_STATUS_CONFIG[status];
  const colors = colorClasses[config.color];
  const label = locale === "en" ? config.labelEn : config.label;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium",
        colors.bg,
        colors.text
      )}
    >
      <span aria-hidden="true">{config.icon}</span>
      {label}
    </span>
  );
}
