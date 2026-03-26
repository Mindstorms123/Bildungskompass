"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AudienceToggle } from "./AudienceToggle";
import { cn } from "@/lib/utils";
import { BookOpen, Menu, X } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  locale: string;
  labels: {
    home: string;
    methodik: string;
    language: string;
    skipToContent: string;
    audience: { pro: string; parent: string };
  };
}

export function Header({ locale, labels }: HeaderProps) {
  const pathname = usePathname();
  const otherLocale = locale === "de" ? "en" : "de";
  const switchPath = pathname.replace(`/${locale}`, `/${otherLocale}`);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
      >
        {labels.skipToContent}
      </a>
      <header className="sticky top-0 z-40 w-full border-b border-stone-200/60 bg-bg/80 backdrop-blur-lg">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:px-6">
          <Link
            href={`/${locale}`}
            className="flex items-center gap-2.5 text-primary font-semibold text-lg"
          >
            <BookOpen className="size-6" aria-hidden="true" />
            <span className="sr-only sm:not-sr-only sm:inline">Bildungskompass</span>
          </Link>

          <div className="hidden md:block">
            <AudienceToggle labels={labels.audience} />
          </div>

          <nav aria-label="Hauptnavigation" className="hidden md:flex items-center gap-1">
            <Link
              href={`/${locale}/methodik`}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                pathname.includes("/methodik")
                  ? "bg-stone-200/60 text-stone-900"
                  : "text-stone-600 hover:text-stone-900 hover:bg-stone-100"
              )}
            >
              {labels.methodik}
            </Link>
            <Link
              href={switchPath}
              className="rounded-lg px-3 py-2 text-sm font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors"
              lang={otherLocale}
            >
              {labels.language}
            </Link>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden rounded-lg p-2 text-stone-600 hover:bg-stone-100"
            aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            {mobileOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>

        {mobileOpen && (
          <div id="mobile-nav" className="md:hidden border-t border-stone-200/60 bg-bg px-4 py-4 space-y-4">
            <AudienceToggle labels={labels.audience} />
            <nav aria-label="Hauptnavigation" className="flex flex-col gap-1">
              <Link
                href={`/${locale}/methodik`}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-stone-700 hover:bg-stone-100"
              >
                {labels.methodik}
              </Link>
              <Link
                href={switchPath}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-stone-700 hover:bg-stone-100"
                lang={otherLocale}
              >
                {labels.language}
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
