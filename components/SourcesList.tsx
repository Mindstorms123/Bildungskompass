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
        className="flex items-center gap-2 text-xs font-medium text-stone-400 uppercase tracking-wide hover:text-stone-700"
        aria-expanded={expanded}
        aria-controls="sources-list"
      >
        {label} ({sources.length})
        <ChevronDown
          className={cn(
            "size-3.5",
            expanded && "rotate-180"
          )}
          aria-hidden="true"
        />
      </button>
      {expanded && (
        <ol id="sources-list" className="mt-5 space-y-3 border-t border-stone-100 pt-5">
          {sources.map((source, i) => (
            <li
              key={i}
              className={cn(
                "text-stone-500 leading-relaxed text-pretty pl-8 -indent-8",
                simplified ? "text-sm" : "text-xs"
              )}
            >
              <span className="tabular-nums text-stone-300 mr-2 font-medium">[{i + 1}]</span>
              {source}
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}
