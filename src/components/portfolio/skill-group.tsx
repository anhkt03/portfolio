import type { SkillGroup as SkillGroupType } from "@/types/portfolio";
import type { CSSProperties } from "react";
import { getSkillIcon } from "./skill-icon";

export function SkillGroup({ group }: { group: SkillGroupType }) {
  return (
    <div className="grid gap-3 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg)] p-5 transition-colors hover:border-[var(--color-border-strong)] sm:grid-cols-[minmax(0,180px)_1fr] sm:items-start sm:gap-6">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text-muted)] sm:pt-1">
        {group.title}
      </h3>
      <ul className="flex flex-wrap gap-2">
        {group.skills.map((skill) => {
          const { Icon, color, darkColor } = getSkillIcon(skill);
          const style = {
            "--tc-light": color,
            "--tc-dark": darkColor ?? color,
          } as CSSProperties;
          return (
            <li
              key={skill}
              className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-subtle)] px-2.5 py-1 text-xs font-medium text-[var(--color-text-secondary)]"
              style={style}
            >
              <Icon className="tech-icon h-3.5 w-3.5 shrink-0" />
              <span>{skill}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
