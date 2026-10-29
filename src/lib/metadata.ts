import type { Metadata } from "next";
import type { Locale } from "@/types/portfolio";
import { getProfile } from "./content";
import { locales } from "./i18n";

interface PageMeta {
  title: string;
  description: string;
  locale: Locale;
  path?: string;
}

export function buildMetadata({ title, description, locale, path = "" }: PageMeta): Metadata {
  const profile = getProfile(locale);
  const fullTitle = title === profile.name ? title : `${title} — ${profile.name}`;

  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[l] = `/${l}${path}`;
  }

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: `/${locale}${path}`,
      languages,
    },
    openGraph: {
      title: fullTitle,
      description,
      type: "website",
      locale: locale === "vi" ? "vi_VN" : "en_US",
    },
  };
}
