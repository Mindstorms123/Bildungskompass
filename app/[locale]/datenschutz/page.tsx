import { getLocaleFromParams } from "@/lib/i18n";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = getLocaleFromParams(rawLocale);
  const otherLocale = locale === "de" ? "en" : "de";

  return {
    title: locale === "de" ? "Datenschutzerklärung" : "Privacy Policy",
    description:
      locale === "de"
        ? "Datenschutzerklärung für die Bildungskompass-Plattform."
        : "Privacy policy for the Bildungskompass platform.",
    alternates: {
      canonical: `/${locale}/datenschutz`,
      languages: {
        [locale]: `/${locale}/datenschutz`,
        [otherLocale]: `/${otherLocale}/datenschutz`,
      },
    },
  };
}

interface SectionProps {
  number: string;
  title: string;
  children: React.ReactNode;
}

function Section({ number, title, children }: SectionProps) {
  return (
    <section className="mb-16 last:mb-0">
      <div className="flex items-baseline gap-4 mb-5">
        <span className="font-serif text-3xl font-light text-stone-200 tabular-nums shrink-0">
          {number}
        </span>
        <h2 className="font-serif text-xl font-normal text-stone-900 tracking-tight text-balance">
          {title}
        </h2>
      </div>
      <div className="pl-14 space-y-4 text-stone-600 text-[0.9375rem] leading-[1.8]">
        {children}
      </div>
    </section>
  );
}

export default async function DatenschutzPage({
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
          {isEn ? "Privacy Policy" : "Datenschutzerklärung"}
        </h1>
        <hr className="editorial-rule mt-8" />

        <p className="mt-8 text-stone-500 text-sm">
          {isEn ? "Last updated: March 2026" : "Stand: März 2026"}
        </p>
      </header>

      <Section
        number="01"
        title={
          isEn ? "Data Protection at a Glance" : "Datenschutz auf einen Blick"
        }
      >
        <p className="text-pretty">
          {isEn
            ? "This privacy policy explains what happens to your personal data when you visit the Bildungskompass website. Personal data is any data with which you could be personally identified. We take the protection of your personal data very seriously and treat it confidentially."
            : "Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der Verarbeitung von personenbezogenen Daten bei der Nutzung der Bildungskompass-Webseite auf. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst und behandeln diese vertraulich."}
        </p>
      </Section>

      <Section
        number="02"
        title={isEn ? "Responsible Party" : "Verantwortliche Stelle"}
      >
        <p className="text-pretty">
          {isEn
            ? "The responsible party for data processing on this website is:"
            : "Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:"}
        </p>
        <div className="bg-stone-50 px-6 py-4 border-l-2 border-primary not-italic">
          <p className="text-stone-900 font-medium">Kai Krafft</p>
          <p className="text-stone-600 text-sm mt-1">
            Stadt Osnabrück · {isEn ? "Department of Education" : "Fachbereich Bildung"} · Projekt DigiKI
          </p>
          <p className="text-stone-600 text-sm">
            Bierstraße 20, 49074 Osnabrück
          </p>
          <p className="text-stone-600 text-sm mt-1">
            E-Mail:{" "}
            <a
              href="mailto:krafft@osnabrueck.de"
              className="underline underline-offset-4 decoration-stone-300 hover:text-stone-900 hover:decoration-stone-900"
            >
              krafft@osnabrueck.de
            </a>
          </p>
        </div>
      </Section>

      <Section
        number="03"
        title={isEn ? "Hosting" : "Hosting"}
      >
        <p className="text-pretty">
          {isEn
            ? "This website is hosted by Vercel Inc. (340 S Lemon Ave #4133, Walnut, CA 91789, USA). When you visit the website, your browser automatically transmits certain technical data to Vercel's servers. This includes your IP address, browser type and version, operating system, the referrer URL, and the time of the request. Vercel processes this data on the basis of Art. 6 Abs. 1 lit. f GDPR (legitimate interest in providing a reliable and secure web presence)."
            : "Diese Website wird bei Vercel Inc. (340 S Lemon Ave #4133, Walnut, CA 91789, USA) gehostet. Wenn Sie die Website besuchen, übermittelt Ihr Browser automatisch bestimmte technische Daten an die Server von Vercel. Dazu gehören Ihre IP-Adresse, der Browsertyp und die Version, das Betriebssystem, die Referrer-URL und der Zeitpunkt der Anfrage. Vercel verarbeitet diese Daten auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer zuverlässigen und sicheren Webpräsenz)."}
        </p>
      </Section>

      <Section
        number="04"
        title={
          isEn
            ? "Data Collection on This Website"
            : "Datenerfassung auf dieser Website"
        }
      >
        <div>
          <h3 className="text-stone-900 font-medium text-sm uppercase tracking-wide mb-2">
            {isEn ? "Server Log Files" : "Server-Log-Dateien"}
          </h3>
          <p className="text-pretty">
            {isEn
              ? "The hosting provider automatically collects and stores information in so-called server log files, which your browser transmits to us automatically. These are: browser type and version, operating system, referrer URL, hostname of the accessing computer, and time of the server request. This data cannot be attributed to specific individuals. It is not merged with other data sources."
              : "Der Hostinganbieter erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind: Browsertyp und -version, verwendetes Betriebssystem, Referrer-URL, Hostname des zugreifenden Rechners und Uhrzeit der Serveranfrage. Diese Daten sind nicht bestimmten Personen zuordenbar. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen."}
          </p>
        </div>

        <div>
          <h3 className="text-stone-900 font-medium text-sm uppercase tracking-wide mb-2">
            {isEn ? "Local Storage" : "Lokaler Speicher"}
          </h3>
          <p className="text-pretty">
            {isEn
              ? "This website uses the browser's local storage to save your audience preference (educator or parent mode). This data is stored exclusively in your browser and is not transmitted to our servers. You can delete this data at any time via your browser settings."
              : "Diese Website nutzt den lokalen Speicher Ihres Browsers, um Ihre Zielgruppen-Einstellung (Fachkräfte- oder Eltern-Modus) zu speichern. Diese Daten werden ausschließlich in Ihrem Browser gespeichert und nicht an unsere Server übermittelt. Sie können diese Daten jederzeit über Ihre Browsereinstellungen löschen."}
          </p>
        </div>

        <div>
          <h3 className="text-stone-900 font-medium text-sm uppercase tracking-wide mb-2">
            Cookies
          </h3>
          <p className="text-pretty">
            {isEn
              ? "This website does not use cookies for tracking or analytics purposes. No personal data is collected through cookies."
              : "Diese Website verwendet keine Cookies zu Tracking- oder Analysezwecken. Es werden keine personenbezogenen Daten über Cookies erhoben."}
          </p>
        </div>
      </Section>

      <Section
        number="05"
        title={
          isEn
            ? "External Services & Fonts"
            : "Externe Dienste & Schriftarten"
        }
      >
        <div>
          <h3 className="text-stone-900 font-medium text-sm uppercase tracking-wide mb-2">
            Google Fonts
          </h3>
          <p className="text-pretty">
            {isEn
              ? "This website uses fonts from Google Fonts (Fraunces, Source Sans 3). These fonts are loaded directly during the build process and served from our own servers. No connection to Google servers is established when you visit this website, and no data is transmitted to Google."
              : "Diese Website verwendet Schriftarten von Google Fonts (Fraunces, Source Sans 3). Diese Schriftarten werden beim Build-Prozess direkt geladen und von unseren eigenen Servern ausgeliefert. Beim Besuch unserer Website wird keine Verbindung zu Google-Servern hergestellt und es werden keine Daten an Google übermittelt."}
          </p>
        </div>
      </Section>

      <Section
        number="06"
        title={isEn ? "AI-Generated Content" : "KI-generierte Inhalte"}
      >
        <p className="text-pretty">
          {isEn
            ? "The content on this platform is created with the assistance of artificial intelligence. No personal data is processed in the creation of content. The AI processes exclusively scientific literature and publicly available research data. All AI-generated content is clearly marked with a validation status."
            : "Die Inhalte dieser Plattform werden mithilfe von künstlicher Intelligenz erstellt. Bei der Erstellung von Inhalten werden keine personenbezogenen Daten verarbeitet. Die KI verarbeitet ausschließlich wissenschaftliche Literatur und öffentlich zugängliche Forschungsdaten. Alle KI-generierten Inhalte sind mit einem Validierungsstatus klar gekennzeichnet."}
        </p>
      </Section>

      <Section
        number="07"
        title={isEn ? "Your Rights" : "Ihre Rechte"}
      >
        <p className="text-pretty">
          {isEn
            ? "Under the GDPR, you have the following rights regarding your personal data:"
            : "Nach der DSGVO stehen Ihnen folgende Rechte hinsichtlich Ihrer personenbezogenen Daten zu:"}
        </p>
        <ul className="space-y-2 mt-2">
          {(isEn
            ? [
                "Right of access (Art. 15 GDPR)",
                "Right to rectification (Art. 16 GDPR)",
                "Right to erasure (Art. 17 GDPR)",
                "Right to restriction of processing (Art. 18 GDPR)",
                "Right to data portability (Art. 20 GDPR)",
                "Right to object (Art. 21 GDPR)",
              ]
            : [
                "Auskunftsrecht (Art. 15 DSGVO)",
                "Recht auf Berichtigung (Art. 16 DSGVO)",
                "Recht auf Löschung (Art. 17 DSGVO)",
                "Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)",
                "Recht auf Datenübertragbarkeit (Art. 20 DSGVO)",
                "Widerspruchsrecht (Art. 21 DSGVO)",
              ]
          ).map((right) => (
            <li key={right} className="flex items-baseline gap-3">
              <span
                className="size-1.5 rounded-full bg-primary shrink-0 mt-2"
                aria-hidden="true"
              />
              <span>{right}</span>
            </li>
          ))}
        </ul>
        <p className="text-pretty mt-4">
          {isEn
            ? "To exercise these rights, please contact us at the address given above. You also have the right to lodge a complaint with the competent supervisory authority."
            : "Zur Ausübung dieser Rechte wenden Sie sich bitte an die oben angegebene Adresse. Darüber hinaus haben Sie das Recht, sich bei der zuständigen Aufsichtsbehörde zu beschweren."}
        </p>
      </Section>

      <Section
        number="08"
        title={
          isEn ? "Supervisory Authority" : "Zuständige Aufsichtsbehörde"
        }
      >
        <div className="bg-stone-50 px-6 py-4 border-l-2 border-stone-300">
          <p className="text-stone-900 font-medium text-sm">
            {isEn
              ? "The State Commissioner for Data Protection of Lower Saxony"
              : "Die Landesbeauftragte für den Datenschutz Niedersachsen"}
          </p>
          <p className="text-stone-500 text-sm mt-1">
            Prinzenstraße 5, 30159 Hannover
          </p>
          <p className="text-stone-500 text-sm">
            {isEn ? "Website" : "Webseite"}:{" "}
            <span className="text-stone-600">
              lfd.niedersachsen.de
            </span>
          </p>
        </div>
      </Section>
    </article>
  );
}
