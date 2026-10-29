import Link from "next/link";
import type { Locale } from "@/types/portfolio";
import { getLabels } from "@/content/navigation";
import { Container } from "@/components/ui/container";
import { SiteNav } from "./site-nav";
import { LocaleSwitch } from "./locale-switch";

export function SiteHeader({ locale }: { locale: Locale }) {
  const labels = getLabels(locale);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-border)] bg-[var(--color-bg)]/95 backdrop-blur-sm">
      <Container className="flex h-14 items-center justify-between">
        <Link
          href={`/${locale}`}
          className="text-base font-semibold text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"
        >
          KTA
        </Link>
        <div className="flex items-center gap-1">
          <SiteNav locale={locale} labels={labels} />
          <LocaleSwitch locale={locale} label={labels.switchLanguage} />
        </div>
      </Container>
    </header>
  );
}
