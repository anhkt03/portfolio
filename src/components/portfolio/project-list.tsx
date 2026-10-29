import type { Locale, Project } from "@/types/portfolio";
import { ProjectCard } from "./project-card";

export function ProjectList({
  projects,
  locale,
  presentLabel,
  viewLabel,
}: {
  projects: Project[];
  locale: Locale;
  presentLabel: string;
  viewLabel: string;
}) {
  return (
    <div>
      {projects.map((project) => (
        <ProjectCard
          key={project.slug}
          project={project}
          locale={locale}
          presentLabel={presentLabel}
          viewLabel={viewLabel}
        />
      ))}
    </div>
  );
}
