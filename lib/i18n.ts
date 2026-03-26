import de from "@/content/i18n/de.json";
import en from "@/content/i18n/en.json";

const messages = { de, en } as const;

export type Locale = "de" | "en";

export function getMessages(locale: string) {
  if (locale === "en") return messages.en;
  return messages.de;
}

export function getLocaleFromParams(locale: string): Locale {
  return locale === "en" ? "en" : "de";
}

export const locales: Locale[] = ["de", "en"];
export const defaultLocale: Locale = "de";
