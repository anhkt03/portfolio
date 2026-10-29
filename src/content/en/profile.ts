import type { Profile } from "@/types/portfolio";
import { socialLinks } from "../shared";

export const profile: Profile = {
  name: "Kieu Thanh The Anh",
  headline: "Backend-focused Software Engineer",
  summary:
    "Software engineer with 2+ years of experience building and maintaining .NET-based backend systems, real-time applications, and full-stack products. My work spans microservices, GPS fleet tracking, Kubernetes-based challenge orchestration, and AI-assisted content platforms. I actively leverage AI tools and techniques to accelerate development and solve complex problems.",
  location: "Hanoi, Vietnam",
  email: socialLinks.email,
  socialLinks: [
    { label: "GitHub", url: socialLinks.github, icon: "github" },
    { label: "LinkedIn", url: socialLinks.linkedin, icon: "linkedin" },
    { label: "Email", url: `mailto:${socialLinks.email}`, icon: "mail" },
  ],
};
