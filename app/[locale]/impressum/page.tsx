import { getLocaleFromParams } from "@/lib/i18n";
import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = getLocaleFromParams(rawLocale);
  const otherLocale = locale === "de" ? "en" : "de";

  return {
    title: locale === "de" ? "Impressum" : "Legal Notice",
    description:
      locale === "de"
        ? "Impressum und Angaben gemäß § 5 TMG für Bildungskompass."
        : "Legal notice and information according to § 5 TMG for Bildungskompass.",
    alternates: {
      canonical: `/${locale}/impressum`,
      languages: {
        [locale]: `/${locale}/impressum`,
        [otherLocale]: `/${otherLocale}/impressum`,
      },
    },
  };
}

export default async function ImpressumPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = getLocaleFromParams(rawLocale);
  const isEn = locale === "en";

  return (
    <article className="mx-auto w-full max-w-3xl px-6 py-16 md:px-10 md:py-24">
      {/* Page title */}
      <header className="mb-16">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary-light mb-4">
          {isEn ? "Legal Information" : "Rechtliches"}
        </p>
        <h1 className="font-serif text-4xl md:text-5xl font-normal text-stone-900 tracking-tight text-balance">
          {isEn ? "Legal Notice" : "Impressum"}
        </h1>
        <hr className="editorial-rule mt-8" />
      </header>

      {/* § 5 TMG */}
      <section className="mb-16">
        <h2 className="font-serif text-xl font-normal text-stone-900 tracking-tight mb-6">
          {isEn
            ? "Information according to § 5 TMG"
            : "Angaben gemäß § 5 TMG"}
        </h2>

        <div className="border-l-2 border-primary pl-8 space-y-6">
          {/* Institution */}
          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-stone-400 mb-2">
              {isEn ? "Institution" : "Träger"}
            </p>
            <p className="text-stone-900 font-medium text-lg leading-relaxed">
              Stadt Osnabrück
            </p>
            <p className="text-stone-600 text-[0.9375rem] leading-relaxed">
              {isEn ? "Department of Education" : "Fachbereich Bildung"}
            </p>
            <p className="text-stone-600 text-[0.9375rem] leading-relaxed">
              {isEn ? "Project DigiKI" : "Projekt DigiKI"}
            </p>
          </div>

          {/* Person */}
          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-stone-400 mb-2">
              {isEn ? "Responsible Person" : "Verantwortlich"}
            </p>
            <p className="text-stone-900 font-medium text-lg">Kai Krafft</p>
            <p className="text-stone-500 text-[0.9375rem] leading-relaxed">
              {isEn
                ? "Education Coordinator, Department 40-3 Education"
                : "Bildungskoordinator im Fachbereich 40-3 Bildung"}
            </p>
          </div>

          {/* Address */}
          <div className="flex items-start gap-3">
            <MapPin
              className="size-4 text-stone-400 mt-1 shrink-0"
              aria-hidden="true"
            />
            <address className="not-italic text-stone-600 text-[0.9375rem] leading-relaxed">
              Bierstraße 20
              <br />
              49074 Osnabrück
              <br />
              {isEn ? "Germany" : "Deutschland"}
            </address>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="mb-16">
        <h2 className="font-serif text-xl font-normal text-stone-900 tracking-tight mb-6">
          {isEn ? "Contact" : "Kontakt"}
        </h2>

        <a
          href="mailto:krafft@osnabrueck.de"
          className="inline-flex items-center gap-3 text-stone-700 hover:text-primary transition-colors group"
        >
          <span className="flex size-10 items-center justify-center rounded-full border border-stone-200 group-hover:border-primary group-hover:bg-primary/5 transition-colors">
            <Mail className="size-4" aria-hidden="true" />
          </span>
          <span className="text-[0.9375rem] underline underline-offset-4 decoration-stone-300 group-hover:decoration-primary">
            krafft@osnabrueck.de
          </span>
        </a>
      </section>

      {/* § 55 RStV */}
      <section className="mb-16">
        <h2 className="font-serif text-xl font-normal text-stone-900 tracking-tight mb-6">
          {isEn
            ? "Responsible for content according to § 55 Abs. 2 RStV"
            : "Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV"}
        </h2>

        <div className="bg-stone-50 px-8 py-6 border-t-2 border-stone-800">
          <p className="text-stone-900 font-medium text-[0.9375rem]">
            Kai Krafft
          </p>
          <p className="text-stone-500 text-sm leading-relaxed mt-1">
            Stadt Osnabrück
          </p>
          <p className="text-stone-500 text-sm leading-relaxed">
            Bierstraße 20, 49074 Osnabrück
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <section>
        <h2 className="font-serif text-xl font-normal text-stone-900 tracking-tight mb-6">
          {isEn ? "Disclaimer" : "Haftungshinweis"}
        </h2>

        <div className="space-y-8 text-stone-600 text-[0.9375rem] leading-[1.8]">
          <div>
            <h3 className="text-stone-900 font-medium text-sm uppercase tracking-wide mb-2">
              {isEn ? "Liability for Content" : "Haftung für Inhalte"}
            </h3>
            <p className="text-pretty">
              {isEn
                ? "The contents of our pages were created with the utmost care. However, we cannot guarantee the accuracy, completeness, or timeliness of the content. As a service provider, we are responsible for our own content on these pages in accordance with general laws pursuant to § 7 Abs.1 TMG. According to §§ 8 to 10 TMG, however, we are not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity."
                : "Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen."}
            </p>
          </div>

          <div>
            <h3 className="text-stone-900 font-medium text-sm uppercase tracking-wide mb-2">
              {isEn ? "Liability for Links" : "Haftung für Links"}
            </h3>
            <p className="text-pretty">
              {isEn
                ? "Our website contains links to external third-party websites over whose content we have no influence. Therefore, we cannot assume any liability for this third-party content. The respective provider or operator of the linked pages is always responsible for the content of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal content was not recognizable at the time of linking."
                : "Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar."}
            </p>
          </div>

          <div>
            <h3 className="text-stone-900 font-medium text-sm uppercase tracking-wide mb-2">
              {isEn
                ? "AI-Generated Content"
                : "KI-generierte Inhalte"}
            </h3>
            <p className="text-pretty">
              {isEn
                ? "This platform uses artificial intelligence for content creation. All AI-generated content is marked accordingly and undergoes a multi-stage validation process. Despite careful review, we cannot guarantee the complete accuracy of AI-generated content. All recommendations are based on scientific sources, which are linked. No content on this platform replaces professional pedagogical advice."
                : "Diese Plattform nutzt künstliche Intelligenz zur Inhaltserstellung. Alle KI-generierten Inhalte sind entsprechend gekennzeichnet und durchlaufen einen mehrstufigen Validierungsprozess. Trotz sorgfältiger Prüfung können wir keine vollständige Richtigkeit der KI-generierten Inhalte garantieren. Alle Empfehlungen basieren auf wissenschaftlichen Quellen, die verlinkt sind. Kein Inhalt dieser Plattform ersetzt eine professionelle pädagogische Beratung."}
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
