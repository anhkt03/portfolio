import type { Experience } from "@/types/portfolio";
import { ExperienceItem } from "./experience-item";

export function ExperienceList({
  experiences,
  presentLabel,
}: {
  experiences: Experience[];
  presentLabel: string;
}) {
  return (
    <div>
      {experiences.map((exp) => (
        <ExperienceItem key={exp.id} experience={exp} presentLabel={presentLabel} />
      ))}
    </div>
  );
}
