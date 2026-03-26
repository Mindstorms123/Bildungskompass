"use client";

import { AGE_GROUPS, type AgeGroup } from "@/lib/types";
import { cn } from "@/lib/utils";

interface AgeFilterProps {
  selected: AgeGroup | null;
  onSelect: (age: AgeGroup | null) => void;
  allLabel: string;
}

export function AgeFilter({ selected, onSelect, allLabel }: AgeFilterProps) {
  return (
    <nav aria-label="Altersfilter" className="w-full overflow-x-auto scrollbar-none">
      <div className="flex gap-2 pb-1 min-w-max">
        <button
          onClick={() => onSelect(null)}
          className={cn(
            "rounded-full px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap",
            selected === null
              ? "bg-primary text-white shadow-sm"
              : "bg-white text-stone-600 hover:bg-stone-100 border border-stone-200"
          )}
          aria-pressed={selected === null}
        >
          {allLabel}
        </button>
        {AGE_GROUPS.map((group) => (
          <button
            key={group.id}
            onClick={() => onSelect(group.id)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap",
              selected === group.id
                ? "bg-primary text-white shadow-sm"
                : "bg-white text-stone-600 hover:bg-stone-100 border border-stone-200"
            )}
            aria-pressed={selected === group.id}
          >
            <span aria-hidden="true">{group.emoji}</span>{" "}
            {group.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
