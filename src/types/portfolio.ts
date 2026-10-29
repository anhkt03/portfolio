export type Locale = "en" | "vi";

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

export interface Profile {
  name: string;
  headline: string;
  summary: string;
  location: string;
  email: string;
  socialLinks: SocialLink[];
  resumeUrl?: string;
}

export interface ProjectShared {
  slug: string;
  technologies: string[];
  repositoryUrl?: string;
  liveUrl?: string;
  additionalUrls?: Array<{ url: string; label: string }>;
  image?: string;
  featured: boolean;
  startDate: string;
  endDate?: string;
}

export interface ProjectLocalized {
  title: string;
  shortDescription: string;
  context?: string;
  role: string;
  responsibilities?: string[];
  architecture?: string;
  technicalDecisions?: Array<{
    decision: string;
    rationale: string;
    tradeoffs?: string;
  }>;
  outcomes?: string[];
}

export interface Project extends ProjectShared, ProjectLocalized {}

export interface ExperienceShared {
  id: string;
  startDate: string;
  endDate?: string;
  technologies?: string[];
}

export interface ExperienceLocalized {
  organization: string;
  role: string;
  summary?: string;
  highlights?: string[];
}

export interface Experience extends ExperienceShared, ExperienceLocalized {}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface Education {
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  gpa?: string;
}

export interface NavigationLabels {
  home: string;
  projects: string;
  about: string;
  allProjects: string;
  featuredProjects: string;
  experience: string;
  skills: string;
  education: string;
  contact: string;
  viewProject: string;
  backToProjects: string;
  present: string;
  role: string;
  techStack: string;
  technicalDecisions: string;
  responsibilities: string;
  outcomes: string;
  architecture: string;
  switchLanguage: string;
  notFoundTitle: string;
  notFoundDescription: string;
  backToHome: string;
}
