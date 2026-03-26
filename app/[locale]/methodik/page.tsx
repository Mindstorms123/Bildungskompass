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

  const stepColors: Record<string, string> = {
    "01": "border-orange-400",
    "02": "border-sky-400",
    "03": "border-emerald-400",
  };

  return (
    <article className="mx-auto w-full max-w-3xl px-4 py-12 md:px-6 md:py-20">
      <h1 className="font-serif text-4xl md:text-5xl font-normal text-stone-900 tracking-tight text-balance mb-4">
        {messages.methodik.title}
      </h1>
      <hr className="border-t border-stone-200 mb-14" />

      <section className="mb-20">
        <h2 className="font-serif text-2xl font-normal text-stone-900 text-balance mb-4 tracking-tight">
          {messages.methodik.howWeWork}
        </h2>
        <p className="text-stone-600 leading-[1.8] text-pretty mb-10 text-[0.9375rem]">
          {messages.methodik.howWeWorkDesc}
        </p>

        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { number: "01", label: messages.transparency.step1Title, desc: messages.transparency.step1Desc },
            { number: "02", label: messages.transparency.step2Title, desc: messages.transparency.step2Desc },
            { number: "03", label: messages.transparency.step3Title, desc: messages.transparency.step3Desc },
          ].map((step) => (
            <div key={step.number} className={`border-t-2 ${stepColors[step.number]} pt-5 pb-2`}>
              <span className="font-serif text-3xl font-normal text-stone-200 tabular-nums block mb-3">
                {step.number}
              </span>
              <h3 className="font-medium text-stone-900 mb-2 text-[0.9375rem]">{step.label}</h3>
              <p className="text-sm text-stone-500 leading-relaxed text-pretty">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-20">
        <h2 className="font-serif text-2xl font-normal text-stone-900 text-balance mb-8 tracking-tight">
          {messages.methodik.evidenceShields}
        </h2>
        <div className="space-y-0 divide-y divide-stone-100">
          {shields.map(({ strength, text }) => (
            <div key={strength} className="flex gap-5 py-5">
              <div className="shrink-0 pt-0.5">
                <EvidenceShields strength={strength} size="md" />
              </div>
              <p className="text-stone-600 leading-[1.8] text-pretty text-[0.9375rem]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-20">
        <h2 className="font-serif text-2xl font-normal text-stone-900 text-balance mb-4 tracking-tight">
          {messages.methodik.effectSizes}
        </h2>
        <p className="text-stone-600 leading-[1.8] text-pretty text-[0.9375rem]">
          {messages.methodik.effectSizesDesc}
        </p>
      </section>

      <section>
        <h2 className="font-serif text-2xl font-normal text-stone-900 text-balance mb-4 tracking-tight">
          {messages.methodik.whyAI}
        </h2>
        <p className="text-stone-600 leading-[1.8] text-pretty text-[0.9375rem]">
          {messages.methodik.whyAIDesc}
        </p>
      </section>
    </article>
  );
}
