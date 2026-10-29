import Link from "next/link";
import type { Locale, Project } from "@/types/portfolio";
import { Badge } from "@/components/ui/badge";
import { formatDateRange } from "@/lib/utils";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";

export function CaseStudyHeader({
  project,
  locale,
  labels,
}: {
  project: Project;
  locale: Locale;
  labels: {
    backToProjects: string;
    role: string;
    techStack: string;
    present: string;
  };
}) {
  const dateRange = project.startDate
    ? formatDateRange(project.startDate, project.endDate, labels.present)
    : null;

  return (
    <div className="py-12 sm:py-16">
      <Link
        href={`/${locale}/projects`}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)] hover:underline mb-6"
      >
        <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
        {labels.backToProjects}
      </Link>
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--color-text)]">
        {project.title}
      </h1>
      <p className="mt-3 text-base leading-relaxed text-[var(--color-text-secondary)] max-w-[var(--max-w-reading)]">
        {project.shortDescription}
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6 text-sm text-[var(--color-text-muted)]">
        {dateRange && (
          <span className="font-mono text-xs">{dateRange}</span>
        )}
        {project.context && <span>{project.context}</span>}
        <span>
          <span className="font-medium text-[var(--color-text-secondary)]">
            {labels.role}:
          </span>{" "}
          {project.role}
        </span>
      </div>
      {(project.liveUrl || project.repositoryUrl || project.additionalUrls?.length) && (
        <div className="mt-4 flex flex-wrap gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-[var(--radius)] border border-[var(--color-border)] px-3 py-1.5 text-sm font-medium text-[var(--color-text)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
            >
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              {new URL(project.liveUrl).hostname}
            </a>
          )}
          {project.repositoryUrl && (
            <a
              href={project.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-[var(--radius)] border border-[var(--color-border)] px-3 py-1.5 text-sm font-medium text-[var(--color-text)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              Source
            </a>
          )}
          {project.additionalUrls?.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-[var(--radius)] border border-[var(--color-border)] px-3 py-1.5 text-sm font-medium text-[var(--color-text)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
            >
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              {link.label}
            </a>
          ))}
        </div>
      )}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.technologies.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>
    </div>
  );
}
