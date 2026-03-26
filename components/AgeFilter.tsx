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
      <div className="flex gap-1 border-b border-stone-200 pb-px min-w-max">
        <button
          onClick={() => onSelect(null)}
          className={cn(
            "px-4 py-2.5 text-sm font-medium whitespace-nowrap transition-[color,opacity] duration-200",
            "rounded-lg md:rounded-none",
            selected === null
              ? "text-primary border-b-2 border-b-primary -mb-px"
              : "text-stone-500 hover:text-stone-800"
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
              "px-4 py-2.5 text-sm font-medium whitespace-nowrap transition-[color,opacity] duration-200",
              "rounded-lg md:rounded-none",
              selected === group.id
                ? "text-primary border-b-2 border-b-primary -mb-px"
                : "text-stone-500 hover:text-stone-800"
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
