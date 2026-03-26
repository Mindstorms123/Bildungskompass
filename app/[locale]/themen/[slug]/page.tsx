import { topics } from "@/content/topics";
import { getMessages, getLocaleFromParams } from "@/lib/i18n";
import type { Metadata } from "next";
import TopicPageClient from "./TopicPageClient";

export function generateStaticParams() {
  const locales = ["de", "en"];
  return locales.flatMap((locale) =>
    topics.map((topic) => ({ locale, slug: topic.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale = getLocaleFromParams(rawLocale);
  const messages = getMessages(locale);
  const topic = topics.find((t) => t.slug === slug);
  const otherLocale = locale === "de" ? "en" : "de";

  if (!topic) {
    return {
      title: locale === "de" ? "Thema nicht gefunden" : "Topic not found",
    };
  }

  const title = locale === "en" ? topic.titleEn : topic.title;
  const description =
    locale === "de"
      ? `Evidenzbasierte Empfehlungen zu ${title} – was die Forschung sagt und was Sie tun können.`
      : `Evidence-based recommendations on ${title} – what research says and what you can do.`;

  return {
    title,
    description,
    openGraph: {
      title: `${title} – Bildungskompass`,
      description,
      type: "article",
      locale: locale === "de" ? "de_DE" : "en_US",
      url: `/${locale}/themen/${slug}`,
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: title }],
    },
    alternates: {
      canonical: `/${locale}/themen/${slug}`,
      languages: {
        [locale]: `/${locale}/themen/${slug}`,
        [otherLocale]: `/${otherLocale}/themen/${slug}`,
      },
    },
  };
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale = getLocaleFromParams(rawLocale);
  const topic = topics.find((t) => t.slug === slug);

  if (!topic) {
    return <TopicPageClient />;
  }

  const title = locale === "en" ? topic.titleEn : topic.title;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description:
      locale === "de"
        ? `Evidenzbasierte Empfehlungen zu ${title}`
        : `Evidence-based recommendations on ${title}`,
    url: `https://bildungskompass.de/${locale}/themen/${slug}`,
    inLanguage: locale === "de" ? "de-DE" : "en-US",
    isPartOf: {
      "@type": "WebSite",
      name: "Bildungskompass",
      url: "https://bildungskompass.de",
    },
    about: {
      "@type": "EducationalOccupationalProgram",
      name: title,
      educationalProgramMode: "evidence-based",
    },
    publisher: {
      "@type": "Organization",
      name: "Bildungskompass",
      url: "https://bildungskompass.de",
    },
    citation: topic.sources.map((source) => ({
      "@type": "ScholarlyArticle",
      name: source,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TopicPageClient />
    </>
  );
}
