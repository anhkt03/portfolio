import type { Experience } from "@/types/portfolio";
import { formatDateRange } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export function ExperienceItem({
  experience,
  presentLabel,
}: {
  experience: Experience;
  presentLabel: string;
}) {
  const dateRange = formatDateRange(experience.startDate, experience.endDate, presentLabel);

  return (
    <article className="border-b border-[var(--color-border)] py-6 first:pt-0 last:border-b-0">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-[var(--color-text)]">
            {experience.role}
          </h3>
          <p className="text-base text-[var(--color-text-secondary)]">
            {experience.organization}
          </p>
        </div>
        <span className="text-xs font-mono text-[var(--color-text-muted)] shrink-0">
          {dateRange}
        </span>
      </div>
      {experience.summary && (
        <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
          {experience.summary}
        </p>
      )}
      {experience.highlights && experience.highlights.length > 0 && (
        <ul className="mt-3 space-y-1.5">
          {experience.highlights.map((h, i) => (
            <li key={i} className="text-sm leading-relaxed text-[var(--color-text-secondary)] pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-[var(--color-text-muted)]">
              {h}
            </li>
          ))}
        </ul>
      )}
      {experience.technologies && experience.technologies.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {experience.technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      )}
    </article>
  );
}
