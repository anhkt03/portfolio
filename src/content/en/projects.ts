import type { ProjectLocalized } from "@/types/portfolio";

export const projects: Record<string, ProjectLocalized> = {
  "f-ctf-system": {
    title: "F-CTF System Upgrade Performance",
    shortDescription:
      "Upgraded the existing FPT Capture The Flag competition platform with Kubernetes-based per-team challenge isolation, event-driven orchestration, and production-grade observability. Led the project as team lead and technical architect.",
    context: "FPT University capstone project — upgrade of an existing CTF system",
    role: "Team Lead & Technical Architect",
    responsibilities: [
      "Led the team: architecture decisions, task division, sprint planning, code review, and quality gates",
      "Designed and implemented per-team Kubernetes challenge isolation to replace the previous shared environment",
      "Built Argo Workflows orchestration for challenge lifecycle (deploy, monitor, destroy)",
      "Architected Redis caching layer and asynchronous provisioning pipeline",
      "Set up RabbitMQ event-driven synchronization between services",
      "Configured Grafana and Loki observability stack for production monitoring",
      "Developed backend APIs for challenge orchestration and scoring",
      "Established the testing pipeline and CI workflows",
    ],
    architecture:
      "This was an upgrade of an existing CTF platform to handle significantly higher scale. Each competing team receives isolated Kubernetes instances for challenges, replacing the previous shared environment. Argo Workflows manages the full lifecycle — deployment, health monitoring, and teardown. RabbitMQ handles event-driven communication between services, while Redis provides caching for frequently accessed data. Grafana and Loki are used for real-time monitoring and log aggregation across all challenge instances.",
    technicalDecisions: [
      {
        decision: "Kubernetes per-team isolation (replacing shared environment)",
        rationale:
          "The previous system ran challenges in a shared environment, causing interference between teams during competitions. Per-team isolation ensures fair play and prevents resource contention.",
        tradeoffs:
          "Higher infrastructure complexity and resource usage, but critical for competition integrity at scale.",
      },
      {
        decision: "Argo Workflows for lifecycle orchestration",
        rationale:
          "Provides declarative, observable workflow management for challenge provisioning and teardown, enabling automated scaling during burst periods.",
      },
      {
        decision: "RabbitMQ for async communication",
        rationale:
          "Decouples services and handles burst traffic during competition start/end without blocking the main request pipeline.",
      },
    ],
    outcomes: [
      "System reported to support 2,000+ concurrent users during competitions",
      "Deployed and used in official FPT University CTF competitions",
    ],
  },
  "coco-system": {
    title: "COCO System",
    shortDescription:
      "AI-assisted social content scheduling and publishing platform with RAG-powered content generation.",
    role: "Full Stack",
    responsibilities: [
      "Built multi-account social media management for X, Facebook, and Telegram",
      "Implemented AI content creation pipeline with writing-style knowledge base",
      "Developed RAG with vector retrieval before LLM generation",
      "Built crypto-domain knowledge base for specialized content",
      "Integrated social-source data validation",
    ],
    architecture:
      "Content scheduling platform that manages publishing across multiple social networks. Uses RAG (Retrieval-Augmented Generation) with vector embeddings to match the user's writing style before generating content through an LLM.",
  },
  "techglobal-livegts": {
    title: "TechGlobal LiveGTS",
    shortDescription:
      "GPS fleet monitoring system with live tracking, trip replay, route management, and real-time camera integration.",
    role: "Full Stack",
    responsibilities: [
      "Developed REST APIs for fleet and driver management",
      "Implemented RBAC for multi-tenant access control",
      "Optimized SQL queries for large real-time and historical GPS datasets",
      "Integrated real-time mapping and live camera feeds",
      "Built trip replay and route tracking features",
      "Handled regulatory integrations and event alert systems",
    ],
    architecture:
      "Full-stack fleet monitoring platform with ASP.NET Core backend serving REST APIs, React web frontend, and Flutter mobile app. Handles real-time GPS data ingestion, historical query optimization, and mapping integrations.",
  },
  "food-order-microservices": {
    title: "Food Order System",
    shortDescription:
      "QR-code restaurant ordering platform with microservice architecture, kitchen dispatch, and real-time notifications.",
    context: "Maintained at KIS VietNam Creative",
    role: "Maintenance & Optimization",
    responsibilities: [
      "Maintained order processing, kitchen display, and payment services",
      "Implemented async messaging between services",
      "Added SignalR real-time notifications for order status",
      "Debugged runtime issues and optimized database queries",
    ],
  },
  "bjo-web3": {
    title: "BJO (Blockchain Job Opportunity)",
    shortDescription:
      "Web3 professional network and recruitment platform with job search, profiles, and recruiter messaging.",
    role: "Fullstack Developer",
    responsibilities: [
      "Built backend APIs for job search and professional profiles",
      "Implemented authentication and role-based access control",
      "Developed recruiter connections and messaging features",
      "Worked on performance optimization and security hardening",
    ],
  },
  "employee-management-crm": {
    title: "Employee Management CRM",
    shortDescription:
      "HR management system covering profiles, attendance, payroll, and insurance processing.",
    context: "Maintained at KIS VietNam Creative",
    role: "Maintenance & Refactor",
    responsibilities: [
      "Refactored Angular UI for improved usability",
      "Optimized backend API endpoints",
      "Implemented payroll and insurance business logic in TypeScript",
    ],
  },
  "mcsl-mobile": {
    title: "MCSL Mobile Application",
    shortDescription:
      "Chemical laboratory mobile workflow app with QR scanning for formula queries and bottle shelf management.",
    context: "Developed at KIS VietNam Creative",
    role: "Mobile Developer",
    responsibilities: [
      "Implemented QR code scanning for formula lookup and bottle return",
      "Optimized camera scanning for curved and small bottle labels",
      "Conducted detailed design document review and compliance checks",
      "Wrote unit tests for core scanning and lookup logic",
    ],
  },
  "thiep-so": {
    title: "Thiep So — Digital Invitation Cards",
    shortDescription:
      "Digital invitation card platform that generates personalized cards at scale — each guest receives an invitation with their own name, from a single event setup.",
    role: "Full Stack Developer",
    responsibilities: [
      "Built the full backend with ASP.NET Core: invitation CRUD, customer and guest management, pricing tiers, analytics dashboard",
      "Implemented batch invitation generation — create one event, import a guest list, and generate a unique personalized card per guest automatically",
      "Developed the Next.js frontend with HeroUI component library, Zustand state management, and React Query for data fetching",
      "Built Excel import/export for bulk guest management using ExcelJS",
      "Integrated AWS S3 for image storage and template asset management",
      "Implemented authentication with JWT, role-based access control, and admin dashboard with analytics",
    ],
    architecture:
      "Full-stack platform with ASP.NET Core backend (clean architecture: Domain, Application, Infrastructure, API layers) and Next.js frontend. Supports two invitation modes: Shared (one link for all guests) and Personalized (unique card per guest with individual name rendering). PostgreSQL for data persistence, AWS S3 for media assets.",
  },
  "social-media-app": {
    title: "Social Media Web Application",
    shortDescription:
      "Social platform with profiles, multimedia posts, real-time notifications, and friend connections.",
    role: "Full Stack",
    responsibilities: [
      "Built social profiles and friend connection system",
      "Implemented text, image, video, and article post types",
      "Added likes, comments, and multimedia upload",
      "Integrated SignalR for real-time notification delivery",
      "Developed REST APIs for all social features",
    ],
  },
};
