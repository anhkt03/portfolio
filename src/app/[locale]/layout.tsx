import { notFound } from "next/navigation";
import type { Locale } from "@/types/portfolio";
import { isValidLocale } from "@/lib/i18n";
import { getProfile } from "@/lib/content";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "vi" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const typedLocale = locale as Locale;
  const profile = getProfile(typedLocale);

  return (
    <>
      <SiteHeader locale={typedLocale} />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <SiteFooter name={profile.name} />
    </>
  );
}
