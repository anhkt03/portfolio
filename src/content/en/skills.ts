import type { SkillGroup } from "@/types/portfolio";

export const skills: SkillGroup[] = [
  {
    title: "Backend",
    skills: [
      "C#", "ASP.NET Core", "ASP.NET MVC", "Entity Framework Core",
      "REST APIs", "Microservices", "SignalR",
    ],
  },
  {
    title: "Frontend",
    skills: [
      "TypeScript", "JavaScript", "HTML", "CSS",
      "React", "Next.js", "Angular", "Razor Pages",
    ],
  },
  {
    title: "Data & Caching",
    skills: [
      "SQL Server", "PostgreSQL", "MySQL", "MariaDB",
      "SQLite", "Redis", "Vector Databases",
    ],
  },
  {
    title: "Infrastructure & Integration",
    skills: [
      "Docker", "Kubernetes / K3s", "Argo Workflows",
      "RabbitMQ", "Git", "GitHub", "GitLab", "CI/CD",
    ],
  },
  {
    title: "Testing & Observability",
    skills: [
      "xUnit", "Selenium", "k6", "Grafana", "Loki", "Penetration Testing",
    ],
  },
  {
    title: "Additional",
    skills: [
      "Flutter / Dart", "Python", "Java Core",
      "Agile", "Scrum", "Jira", "V-model",
      "AI Prompting", "RAG", "Embeddings",
    ],
  },
];
