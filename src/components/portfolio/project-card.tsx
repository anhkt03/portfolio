import Link from "next/link";
import type { Locale, Project } from "@/types/portfolio";
import { Badge } from "@/components/ui/badge";
import { formatDateRange } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export function ProjectCard({
  project,
  locale,
  presentLabel,
  viewLabel,
}: {
  project: Project;
  locale: Locale;
  presentLabel: string;
  viewLabel: string;
}) {
  const dateRange = project.startDate
    ? formatDateRange(project.startDate, project.endDate, presentLabel)
    : null;

  return (
    <article className="group border-b border-[var(--color-border)] py-6 first:pt-0 last:border-b-0">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-3 flex-wrap">
            <h3 className="text-lg font-semibold text-[var(--color-text)]">
              <Link
                href={`/${locale}/projects/${project.slug}`}
                className="hover:text-[var(--color-accent)] transition-colors"
              >
                {project.title}
              </Link>
            </h3>
            {dateRange && (
              <span className="text-xs font-mono text-[var(--color-text-muted)]">
                {dateRange}
              </span>
            )}
          </div>
          {project.context && (
            <p className="mt-0.5 text-sm text-[var(--color-text-muted)]">
              {project.context}
            </p>
          )}
          <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
            {project.shortDescription}
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 6).map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
            {project.technologies.length > 6 && (
              <Badge>+{project.technologies.length - 6}</Badge>
            )}
          </div>
        </div>
        <Link
          href={`/${locale}/projects/${project.slug}`}
          className="flex items-center gap-1 text-sm font-medium text-[var(--color-accent)] hover:underline mt-2 sm:mt-0 shrink-0"
          aria-label={`${viewLabel}: ${project.title}`}
        >
          <span>{viewLabel}</span>
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
