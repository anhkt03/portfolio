import type { Education } from "@/types/portfolio";
import { formatDateRange } from "@/lib/utils";

export function EducationCard({
  education,
  presentLabel,
}: {
  education: Education;
  presentLabel: string;
}) {
  const dateRange = formatDateRange(education.startDate, education.endDate, presentLabel);

  return (
    <div className="py-4">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <h3 className="text-base font-semibold text-[var(--color-text)]">
            {education.institution}
          </h3>
          <p className="text-sm text-[var(--color-text-secondary)]">{education.degree}</p>
        </div>
        <span className="text-xs font-mono text-[var(--color-text-muted)] shrink-0">
          {dateRange}
        </span>
      </div>
      {education.gpa && (
        <p className="mt-1 text-sm text-[var(--color-text-muted)]">GPA: {education.gpa}</p>
      )}
    </div>
  );
}
