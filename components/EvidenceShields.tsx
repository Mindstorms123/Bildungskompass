import type { EvidenceStrength } from "@/lib/types";
import { cn } from "@/lib/utils";

interface EvidenceShieldsProps {
  strength: EvidenceStrength;
  size?: "sm" | "md";
}

export function EvidenceShields({ strength, size = "sm" }: EvidenceShieldsProps) {
  const iconSize = size === "sm" ? "text-sm" : "text-base";

  return (
    <span role="img" className={cn("inline-flex gap-0.5", iconSize)} aria-label={`Evidenzstärke: ${strength} von 4`}>
      {Array.from({ length: 4 }, (_, i) => (
        <span key={i} aria-hidden="true" className={i < strength ? "opacity-100" : "opacity-20"}>
          🛡️
        </span>
      ))}
    </span>
  );
}
