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
    <footer className="mt-auto border-t border-stone-200/60 bg-bg">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="max-w-lg space-y-4">
            <div className="flex items-center gap-2 text-primary">
              <BookOpen className="size-5" aria-hidden="true" />
              <span className="font-semibold">Bildungskompass</span>
            </div>
            <p className="text-sm leading-relaxed text-stone-500 text-pretty">
              {labels.disclaimer}
            </p>
          </div>
          <nav className="flex gap-6 text-sm" aria-label="Footer">
            <Link
              href={`/${locale}/methodik`}
              className="text-stone-500 underline underline-offset-4 decoration-stone-300 hover:text-stone-900 hover:decoration-stone-900 transition-colors"
            >
              {labels.methodology}
            </Link>
            <span className="text-stone-300">{labels.imprint}</span>
            <span className="text-stone-300">{labels.privacy}</span>
          </nav>
        </div>
      </div>
    </footer>
  );
}
