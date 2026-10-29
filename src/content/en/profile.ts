import type { Profile } from "@/types/portfolio";
import { socialLinks } from "../shared";

export const profile: Profile = {
  name: "Kieu Thanh The Anh",
  headline: "Backend-focused Software Engineer",
  summary:
    "I build and maintain .NET-based backend systems, real-time applications, and full-stack products. My work spans microservices, GPS fleet tracking, Kubernetes-based challenge orchestration, and AI-assisted content platforms.",
  location: "Hanoi, Vietnam",
  email: socialLinks.email,
  socialLinks: [
    { label: "GitHub", url: socialLinks.github, icon: "github" },
    { label: "LinkedIn", url: socialLinks.linkedin, icon: "linkedin" },
    { label: "Email", url: `mailto:${socialLinks.email}`, icon: "mail" },
  ],
};
