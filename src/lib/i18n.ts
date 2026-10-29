import type { Locale } from "@/types/portfolio";

export const locales: Locale[] = ["en", "vi"];
export const defaultLocale: Locale = "en";

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
