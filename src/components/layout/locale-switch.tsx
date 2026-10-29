"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import type { Locale } from "@/types/portfolio";
import { Globe } from "lucide-react";

export function LocaleSwitch({
  locale,
  label,
}: {
  locale: Locale;
  label: string;
}) {
  const pathname = usePathname();
  const targetLocale: Locale = locale === "en" ? "vi" : "en";
  const targetPath = pathname.replace(`/${locale}`, `/${targetLocale}`);

  return (
    <Link
      href={targetPath}
      className="flex items-center gap-1.5 rounded-[var(--radius)] px-3 py-1.5 text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-bg-subtle)] transition-colors"
      aria-label={`Switch to ${label}`}
    >
      <Globe className="h-3.5 w-3.5" aria-hidden="true" />
      <span>{label}</span>
    </Link>
  );
}
