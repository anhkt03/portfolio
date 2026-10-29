import Link from "next/link";
import type { Locale, NavigationLabels } from "@/types/portfolio";

export function SiteNav({
  locale,
  labels,
}: {
  locale: Locale;
  labels: NavigationLabels;
}) {
  const links = [
    { href: `/${locale}`, label: labels.home },
    { href: `/${locale}/projects`, label: labels.projects },
    { href: `/${locale}/about`, label: labels.about },
  ];

  return (
    <nav aria-label={locale === "vi" ? "Điều hướng chính" : "Main navigation"}>
      <ul className="flex items-center gap-1">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="rounded-[var(--radius)] px-3 py-1.5 text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-bg-subtle)] transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
