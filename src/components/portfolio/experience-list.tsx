import type { Experience } from "@/types/portfolio";
import { formatDateRange } from "@/lib/utils";
import { getSkillIcon } from "./skill-icon";

export function ExperienceList({
  experiences,
  presentLabel,
}: {
  experiences: Experience[];
  presentLabel: string;
}) {
  return (
    <ol className="relative">
      {/* vertical trunk */}
      <span
        aria-hidden="true"
        className="absolute left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-[var(--color-accent)] via-[var(--color-border-strong)] to-transparent"
      />
      {experiences.map((exp, idx) => {
        const isCurrent = !exp.endDate;
        const dateRange = formatDateRange(exp.startDate, exp.endDate, presentLabel);
        return (
          <li
            key={exp.id}
            className={`relative pl-9 ${idx === experiences.length - 1 ? "pb-0" : "pb-10"}`}
          >
            {/* node */}
            <span
              aria-hidden="true"
              className={`absolute left-0 top-1 flex h-[19px] w-[19px] items-center justify-center rounded-full border-2 ${
                isCurrent
                  ? "border-[var(--color-accent)] bg-[var(--color-bg)]"
                  : "border-[var(--color-border-strong)] bg-[var(--color-bg)]"
              }`}
            >
              <span
                className={`block h-2 w-2 rounded-full ${
                  isCurrent
                    ? "bg-[var(--color-accent)] animate-pulse"
                    : "bg-[var(--color-border-strong)]"
                }`}
              />
            </span>

            <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg)] p-5 transition-colors hover:border-[var(--color-border-strong)]">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-[var(--color-text)]">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    {exp.organization}
                  </p>
                </div>
                <span
                  className={`inline-flex items-center gap-1.5 self-start rounded-full px-2.5 py-1 text-[11px] font-mono shrink-0 ${
                    isCurrent
                      ? "bg-[var(--color-accent-subtle)] text-[var(--color-accent)]"
                      : "bg-[var(--color-bg-subtle)] text-[var(--color-text-muted)]"
                  }`}
                >
                  {isCurrent && (
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
                  )}
                  {dateRange}
                </span>
              </div>
              {exp.summary && (
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {exp.summary}
                </p>
              )}
              {exp.highlights && exp.highlights.length > 0 && (
                <ul className="mt-3 space-y-1.5">
                  {exp.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="text-sm leading-relaxed text-[var(--color-text-secondary)] pl-4 relative before:content-['▸'] before:absolute before:left-0 before:text-[var(--color-accent)] before:text-xs"
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              )}
              {exp.technologies && exp.technologies.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => {
                    const { Icon, color } = getSkillIcon(tech);
                    return (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1 rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-bg-subtle)] px-2 py-0.5 text-xs font-medium text-[var(--color-text-secondary)]"
                      >
                        <Icon
                          className="h-3 w-3 shrink-0"
                          {...({ style: { color } } as Record<string, unknown>)}
                        />
                        {tech}
                      </span>
                    );
                  })}
                </div>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
