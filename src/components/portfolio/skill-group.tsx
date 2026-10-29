import type { SkillGroup as SkillGroupType } from "@/types/portfolio";

export function SkillGroup({ group }: { group: SkillGroupType }) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text-muted)] mb-2">
        {group.title}
      </h3>
      <div className="flex flex-wrap gap-x-2 gap-y-1">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="text-sm text-[var(--color-text-secondary)]"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
