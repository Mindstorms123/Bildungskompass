import { getMessages, getLocaleFromParams } from "@/lib/i18n";
import { EvidenceShields } from "@/components/EvidenceShields";
import type { Metadata } from "next";
import type { EvidenceStrength } from "@/lib/types";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = getLocaleFromParams(rawLocale);
  const messages = getMessages(locale);

  const otherLocale = locale === "de" ? "en" : "de";

  return {
    title: messages.methodik.title,
    description: messages.methodik.howWeWorkDesc,
    openGraph: {
      title: `${messages.methodik.title} – Bildungskompass`,
      description: messages.methodik.howWeWorkDesc,
      type: "article",
      locale: locale === "de" ? "de_DE" : "en_US",
      url: `/${locale}/methodik`,
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Bildungskompass Methodik" }],
    },
    alternates: {
      canonical: `/${locale}/methodik`,
      languages: {
        [locale]: `/${locale}/methodik`,
        [otherLocale]: `/${otherLocale}/methodik`,
      },
    },
  };
}

export default async function MethodikPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = getLocaleFromParams(rawLocale);
  const messages = getMessages(locale);

  const shields: { strength: EvidenceStrength; text: string }[] = [
    { strength: 4, text: messages.methodik.shield4 },
    { strength: 3, text: messages.methodik.shield3 },
    { strength: 2, text: messages.methodik.shield2 },
    { strength: 1, text: messages.methodik.shield1 },
  ];

  return (
    <article className="mx-auto w-full max-w-3xl px-4 py-12 md:px-6 md:py-20">
      <h1 className="text-3xl font-bold text-stone-900 tracking-tight text-balance mb-12 md:text-4xl">
        {messages.methodik.title}
      </h1>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-stone-900 text-balance mb-4">
          {messages.methodik.howWeWork}
        </h2>
        <p className="text-stone-600 leading-relaxed text-pretty mb-8">
          {messages.methodik.howWeWorkDesc}
        </p>

        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { number: "01", label: messages.transparency.step1Title, desc: messages.transparency.step1Desc, color: "bg-orange-500" },
            { number: "02", label: messages.transparency.step2Title, desc: messages.transparency.step2Desc, color: "bg-sky-500" },
            { number: "03", label: messages.transparency.step3Title, desc: messages.transparency.step3Desc, color: "bg-emerald-500" },
          ].map((step) => (
            <div key={step.number} className="rounded-xl border border-stone-200 bg-white p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className={`size-2 rounded-full ${step.color}`} aria-hidden="true" />
                <span className="text-xs font-medium text-stone-400 tabular-nums">{step.number}</span>
              </div>
              <h3 className="font-medium text-stone-900 mb-2">{step.label}</h3>
              <p className="text-sm text-stone-500 leading-relaxed text-pretty">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-stone-900 text-balance mb-6">
          {messages.methodik.evidenceShields}
        </h2>
        <div className="space-y-4">
          {shields.map(({ strength, text }) => (
            <div key={strength} className="flex gap-4 rounded-xl border border-stone-200 bg-white p-5">
              <div className="shrink-0 pt-0.5">
                <EvidenceShields strength={strength} size="md" />
              </div>
              <p className="text-stone-700 leading-relaxed text-pretty">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-stone-900 text-balance mb-4">
          {messages.methodik.effectSizes}
        </h2>
        <p className="text-stone-600 leading-relaxed text-pretty">
          {messages.methodik.effectSizesDesc}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-stone-900 text-balance mb-4">
          {messages.methodik.whyAI}
        </h2>
        <p className="text-stone-600 leading-relaxed text-pretty">
          {messages.methodik.whyAIDesc}
        </p>
      </section>
    </article>
  );
}
