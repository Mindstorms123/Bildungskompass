import { getMessages, getLocaleFromParams } from "@/lib/i18n";
import { topics } from "@/content/topics";
import { TopicGrid } from "@/components/TopicGrid";
import { TransparencyBox } from "@/components/TransparencyBox";
import type { Metadata } from "next";

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
    title: { absolute: messages.meta.title },
    description: messages.meta.description,
    openGraph: {
      title: messages.meta.title,
      description: messages.meta.description,
      type: "website",
      locale: locale === "de" ? "de_DE" : "en_US",
      url: `/${locale}`,
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Bildungskompass" }],
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        [locale]: `/${locale}`,
        [otherLocale]: `/${otherLocale}`,
      },
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = getLocaleFromParams(rawLocale);
  const messages = getMessages(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Bildungskompass",
    url: `https://bildungskompass.de/${locale}`,
    description: messages.meta.description,
    inLanguage: locale === "de" ? "de-DE" : "en-US",
    publisher: {
      "@type": "Organization",
      name: "Bildungskompass",
      url: "https://bildungskompass.de",
    },
    mainEntity: {
      "@type": "ItemList",
      name: locale === "de" ? "Bildungsthemen" : "Education Topics",
      numberOfItems: topics.length,
      itemListElement: topics.map((topic, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://bildungskompass.de/${locale}/themen/${topic.slug}`,
        name: locale === "en" ? topic.titleEn : topic.title,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto w-full max-w-6xl px-4 py-12 md:px-6 md:py-20">
        <section className="mb-16 text-center">
          <h1 className="text-4xl font-bold text-stone-900 sm:text-5xl md:text-6xl text-balance mb-4 tracking-tight">
            {messages.hero.headline}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-stone-600 text-pretty leading-relaxed">
            {messages.hero.subline}
          </p>
        </section>

        <section className="mb-20">
          <h2 className="sr-only">
            {locale === "de" ? "Bildungsthemen" : "Education Topics"}
          </h2>
          <TopicGrid
            locale={locale}
            allLabel={messages.ages.all}
            effectLabels={messages.evidence.effectLabels}
          />
        </section>

        <TransparencyBox labels={messages.transparency} />
      </div>
    </>
  );
}
