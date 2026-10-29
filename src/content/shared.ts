import type { ProjectShared, ExperienceShared } from "@/types/portfolio";

export const projectsShared: Record<string, ProjectShared> = {
  "f-ctf-system": {
    slug: "f-ctf-system",
    technologies: [
      "C#", "ASP.NET", "React", "Kubernetes", "Docker",
      "Argo Workflows", "Redis", "MariaDB", "Python",
      "RabbitMQ", "Grafana", "Loki",
    ],
    featured: true,
    startDate: "2025-08",
    endDate: "2025-12",
    repositoryUrl: "https://github.com/hoaanhtuc113/FCTF",
    liveUrl: "https://sanchoi.iahn.hanoi.vn/",
    additionalUrls: [
      { url: "https://iahn.fpt.edu.vn/du-an/fpt-capture-the-flag-fctf", label: "FPT University" },
    ],
  },
  "coco-system": {
    slug: "coco-system",
    technologies: [
      "ASP.NET", "PostgreSQL", "RAG", "Buffer API",
      "Vector Database", "Embeddings", "Python",
      "Telegram Bot API", "Docker",
    ],
    featured: true,
    startDate: "2026-04",
  },
  "techglobal-livegts": {
    slug: "techglobal-livegts",
    technologies: [
      "ASP.NET Core", "Redis", "Entity Framework",
      "SQL Server", "React", "OSRM", "REST APIs",
      "VBot", "Flutter",
    ],
    featured: true,
    startDate: "2025-12",
    liveUrl: "https://hanhtrinhxe.vn",
  },
  "food-order-microservices": {
    slug: "food-order-microservices",
    technologies: [
      ".NET Core", "Microservices", "SQL Server",
      "Redis", "SignalR", "Docker",
    ],
    featured: false,
    startDate: "2024-02",
    endDate: "2025-08",
  },
  "bjo-web3": {
    slug: "bjo-web3",
    technologies: [
      "ASP.NET", "Entity Framework", "MySQL",
      "Next.js", "Docker", "Sockets", "REST APIs",
    ],
    featured: false,
    startDate: "",
  },
  "employee-management-crm": {
    slug: "employee-management-crm",
    technologies: [
      "Angular", "TypeScript", "RxJS", "Node.js", "SCSS",
    ],
    featured: false,
    startDate: "2024-02",
    endDate: "2025-08",
  },
  "mcsl-mobile": {
    slug: "mcsl-mobile",
    technologies: [
      "Flutter", "Dart", "SQLite", "QR Code Scanner",
    ],
    featured: false,
    startDate: "2024-02",
    endDate: "2025-08",
  },
  "social-media-app": {
    slug: "social-media-app",
    technologies: [
      "C#", "ASP.NET Core", "SQL Server",
      "Razor Pages", "SignalR", "REST APIs",
    ],
    featured: false,
    startDate: "2025-01",
    endDate: "2025-04",
  },
  "thiep-so": {
    slug: "thiep-so",
    technologies: [
      "ASP.NET Core", "Next.js", "PostgreSQL",
      "HeroUI", "Zustand", "React Query",
      "AWS S3", "Docker", "ExcelJS",
    ],
    featured: false,
    startDate: "2026-10",
    liveUrl: "https://thiepso.io.vn",
  },
};

export const projectOrder = [
  "f-ctf-system",
  "coco-system",
  "techglobal-livegts",
  "thiep-so",
  "food-order-microservices",
  "bjo-web3",
  "employee-management-crm",
  "mcsl-mobile",
  "social-media-app",
];

export const experiencesShared: Record<string, ExperienceShared> = {
  "kis-vietnam": {
    id: "kis-vietnam",
    startDate: "2024-02",
    endDate: "2025-08",
    technologies: [
      ".NET", "Microservices", "Angular", "TypeScript",
      "RxJS", "Flutter", "Dart", "SignalR", "SQL Server",
      "Redis", "Docker",
    ],
  },
  "techglobal-gps": {
    id: "techglobal-gps",
    startDate: "2025-12",
    technologies: [
      "ASP.NET Core", "Redis", "Entity Framework",
      "SQL Server", "React", "OSRM", "Flutter",
      "REST APIs", "VBot",
    ],
  },
};

export const experienceOrder = ["techglobal-gps", "kis-vietnam"];

export const socialLinks = {
  github: "https://github.com/anhkt03",
  linkedin: "https://www.linkedin.com/in/may16th03",
  email: "kttanhforwork@gmail.com",
};
