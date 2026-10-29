import type { ExperienceLocalized } from "@/types/portfolio";

export const experiences: Record<string, ExperienceLocalized> = {
  "techglobal-gps": {
    organization: "TechGlobal GPS",
    role: "Full Stack Developer",
    summary:
      "Working on TechGlobal LiveGTS, a fleet and vehicle GPS tracking system covering live monitoring, trip replay, routing, fleet/driver management, live camera, reports, regulatory integrations, and event alerts.",
    highlights: [
      "REST API development with ASP.NET Core",
      "RBAC for multi-tenant access control",
      "SQL query optimization for large real-time and historical GPS datasets",
      "Real-time mapping and camera integrations",
      "Mobile development with Flutter",
    ],
  },
  "kis-vietnam": {
    organization: "KIS VietNam Creative",
    role: "Fresher Software Engineer",
    summary:
      "Maintained and improved multiple production systems across restaurant ordering, HR management, and laboratory mobile applications.",
    highlights: [
      "Maintained .NET microservices for a restaurant ordering system — order processing, kitchen display, payment, async messaging, SignalR notifications",
      "Refactored an Angular/TypeScript employee-management CRM — UI/UX improvements, API performance, payroll/insurance logic",
      "Contributed to a Flutter mobile app for Japanese chemical laboratories — QR scanning, camera optimization, design-document compliance, unit testing",
    ],
  },
};
