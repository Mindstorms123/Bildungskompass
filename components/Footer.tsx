import Link from "next/link";
import { BookOpen } from "lucide-react";

interface FooterProps {
  locale: string;
  labels: {
    disclaimer: string;
    imprint: string;
    privacy: string;
    methodology: string;
  };
}

export function Footer({ locale, labels }: FooterProps) {
  return (
    <footer className="mt-auto bg-bg">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <hr className="editorial-rule" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-lg space-y-4">
            <div className="flex items-center gap-2.5 text-primary">
              <BookOpen className="size-5" aria-hidden="true" />
              <span className="font-serif text-lg tracking-tight">
                Bildungskompass
              </span>
            </div>
            <p className="text-sm leading-relaxed text-stone-500 text-pretty">
              {labels.disclaimer}
            </p>
          </div>

          <nav
            className="flex flex-col gap-3 text-sm md:items-end md:pt-1"
            aria-label="Footer"
          >
            <Link
              href={`/${locale}/methodik`}
              className="text-stone-500 underline underline-offset-4 decoration-stone-300 hover:text-stone-900 hover:decoration-stone-900 transition-colors"
            >
              {labels.methodology}
            </Link>
            <Link
              href={`/${locale}/impressum`}
              className="text-stone-500 underline underline-offset-4 decoration-stone-300 hover:text-stone-900 hover:decoration-stone-900 transition-colors"
            >
              {labels.imprint}
            </Link>
            <Link
              href={`/${locale}/datenschutz`}
              className="text-stone-500 underline underline-offset-4 decoration-stone-300 hover:text-stone-900 hover:decoration-stone-900 transition-colors"
            >
              {labels.privacy}
            </Link>
          </nav>
        </div>

        <div className="mt-10 border-t border-stone-200/60 pt-6 text-center">
          <p className="text-xs tracking-widest uppercase text-stone-400">
            {locale === "en"
              ? "An evidence-based guide to education"
              : "Eine evidenzbasierte Orientierungshilfe"}
          </p>
        </div>
      </div>
    </footer>
  );
}
