"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface SourcesListProps {
  sources: string[];
  label: string;
  simplified?: boolean;
}

export function SourcesList({ sources, label, simplified }: SourcesListProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section>
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors"
        aria-expanded={expanded}
        aria-controls="sources-list"
      >
        {label} ({sources.length})
        <ChevronDown
          className={cn(
            "size-4 transition-transform duration-200",
            expanded && "rotate-180"
          )}
          aria-hidden="true"
        />
      </button>
      {expanded && (
        <ol id="sources-list" className="mt-4 space-y-3 list-decimal list-inside">
          {sources.map((source, i) => (
            <li key={i} className={cn("text-stone-600 leading-relaxed text-pretty", simplified ? "text-sm" : "text-xs")}>
              {source}
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}
