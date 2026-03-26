import { AudienceProvider } from "@/lib/audience-context";
import { getMessages, getLocaleFromParams } from "@/lib/i18n";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export function generateStaticParams() {
  return [{ locale: "de" }, { locale: "en" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = getLocaleFromParams(rawLocale);
  const otherLocale = locale === "de" ? "en" : "de";

  return {
    alternates: {
      canonical: `/${locale}`,
      languages: {
        [locale]: `/${locale}`,
        [otherLocale]: `/${otherLocale}`,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = getLocaleFromParams(rawLocale);
  const messages = getMessages(locale);

  return (
    <AudienceProvider>
      <div lang={locale} className="flex min-h-dvh flex-col">
        <Header
          locale={locale}
          labels={{
            home: messages.nav.home,
            methodik: messages.nav.methodik,
            language: messages.nav.language,
            skipToContent: messages.nav.skipToContent,
            audience: messages.audience,
          }}
        />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer locale={locale} labels={messages.footer} />
      </div>
    </AudienceProvider>
  );
}
