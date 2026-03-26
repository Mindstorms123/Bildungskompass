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
      <header className="sticky top-0 z-40 w-full border-t-2 border-t-primary border-b border-b-stone-200/60 bg-bg/80 backdrop-blur-lg">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-6 px-4 md:px-6">
          {/* Masthead logo */}
          <Link
            href={`/${locale}`}
            className="flex items-center gap-2.5 text-primary"
          >
            <BookOpen className="size-5" aria-hidden="true" />
            <span className="sr-only sm:not-sr-only sm:inline font-serif text-xl tracking-tight">
              Bildungskompass
            </span>
          </Link>

          {/* Centered audience toggle */}
          <div className="hidden md:block">
            <AudienceToggle labels={labels.audience} />
          </div>

          {/* Desktop navigation */}
          <nav aria-label="Hauptnavigation" className="hidden md:flex items-center gap-6">
            <Link
              href={`/${locale}/methodik`}
              className={cn(
                "text-sm tracking-wide uppercase transition-colors",
                pathname.includes("/methodik")
                  ? "text-stone-900 border-b border-stone-900 pb-0.5"
                  : "text-stone-500 hover:text-stone-900"
              )}
            >
              {labels.methodik}
            </Link>
            <span className="text-stone-300" aria-hidden="true">|</span>
            <Link
              href={switchPath}
              className="text-sm tracking-wide uppercase text-stone-500 hover:text-stone-900 transition-colors"
              lang={otherLocale}
            >
              {labels.language}
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden rounded-lg p-2 text-stone-600 hover:bg-stone-100"
            aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            {mobileOpen ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile editorial sidebar menu */}
        {mobileOpen && (
          <div
            id="mobile-nav"
            className="md:hidden border-t border-stone-200/60 bg-bg px-6 py-6 space-y-6"
          >
            <AudienceToggle labels={labels.audience} />
            <hr className="editorial-rule" />
            <nav aria-label="Hauptnavigation" className="flex flex-col gap-1">
              <Link
                href={`/${locale}/methodik`}
                onClick={() => setMobileOpen(false)}
                className="px-2 py-2.5 text-sm tracking-wide uppercase text-stone-700 hover:text-stone-900 border-l-2 border-transparent hover:border-primary"
              >
                {labels.methodik}
              </Link>
              <Link
                href={switchPath}
                onClick={() => setMobileOpen(false)}
                className="px-2 py-2.5 text-sm tracking-wide uppercase text-stone-700 hover:text-stone-900 border-l-2 border-transparent hover:border-primary"
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
