import type {
  Locale,
  Profile,
  Project,
  Experience,
  SkillGroup,
  Education,
  ProjectLocalized,
  ExperienceLocalized,
} from "@/types/portfolio";
import { projectsShared, projectOrder, experiencesShared, experienceOrder } from "@/content/shared";

import { profile as enProfile } from "@/content/en/profile";
import { profile as viProfile } from "@/content/vi/profile";
import { projects as enProjects } from "@/content/en/projects";
import { projects as viProjects } from "@/content/vi/projects";
import { experiences as enExperiences } from "@/content/en/experience";
import { experiences as viExperiences } from "@/content/vi/experience";
import { education as enEducation } from "@/content/en/education";
import { education as viEducation } from "@/content/vi/education";
import { skills as enSkills } from "@/content/en/skills";
import { skills as viSkills } from "@/content/vi/skills";

const profiles: Record<Locale, Profile> = { en: enProfile, vi: viProfile };
const projectsLocalized: Record<Locale, Record<string, ProjectLocalized>> = {
  en: enProjects,
  vi: viProjects,
};
const experiencesLocalized: Record<Locale, Record<string, ExperienceLocalized>> = {
  en: enExperiences,
  vi: viExperiences,
};
const educationData: Record<Locale, Education[]> = { en: enEducation, vi: viEducation };
const skillsData: Record<Locale, SkillGroup[]> = { en: enSkills, vi: viSkills };

export function getProfile(locale: Locale): Profile {
  return profiles[locale];
}

export function getProjects(locale: Locale): Project[] {
  return projectOrder.map((slug) => ({
    ...projectsShared[slug],
    ...projectsLocalized[locale][slug],
  }));
}

export function getFeaturedProjects(locale: Locale): Project[] {
  return getProjects(locale).filter((p) => p.featured);
}

export function getProjectBySlug(locale: Locale, slug: string): Project | undefined {
  const shared = projectsShared[slug];
  const localized = projectsLocalized[locale][slug];
  if (!shared || !localized) return undefined;
  return { ...shared, ...localized };
}

export function getAllProjectSlugs(): string[] {
  return projectOrder;
}

export function getExperiences(locale: Locale): Experience[] {
  return experienceOrder.map((id) => ({
    ...experiencesShared[id],
    ...experiencesLocalized[locale][id],
  }));
}

export function getEducation(locale: Locale): Education[] {
  return educationData[locale];
}

export function getSkills(locale: Locale): SkillGroup[] {
  return skillsData[locale];
}
