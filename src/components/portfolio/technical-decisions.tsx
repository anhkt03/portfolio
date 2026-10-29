import type { Project } from "@/types/portfolio";

export function TechnicalDecisions({
  decisions,
}: {
  decisions: NonNullable<Project["technicalDecisions"]>;
}) {
  return (
    <div className="space-y-6">
      {decisions.map((d, i) => (
        <div key={i} className="border-l-2 border-[var(--color-accent)] pl-4">
          <h4 className="text-base font-semibold text-[var(--color-text)]">
            {d.decision}
          </h4>
          <p className="mt-1 text-sm leading-relaxed text-[var(--color-text-secondary)]">
            {d.rationale}
          </p>
          {d.tradeoffs && (
            <p className="mt-1 text-sm text-[var(--color-text-muted)] italic">
              {d.tradeoffs}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
