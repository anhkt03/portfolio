import type { Locale } from "@/types/portfolio";

export function formatDateRange(
  startDate: string,
  endDate: string | undefined,
  presentLabel: string,
): string {
  const start = formatYearMonth(startDate);
  const end = endDate ? formatYearMonth(endDate) : presentLabel;
  return `${start} — ${end}`;
}

function formatYearMonth(ym: string): string {
  const [year, month] = ym.split("-");
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  return `${months[parseInt(month, 10) - 1]} ${year}`;
}

export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function getLocalizedPath(locale: Locale, path: string = ""): string {
  return `/${locale}${path ? `/${path}` : ""}`;
}
