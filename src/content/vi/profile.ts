import type { Profile } from "@/types/portfolio";
import { socialLinks } from "../shared";

export const profile: Profile = {
  name: "Kiều Thanh Thế Anh",
  headline: "Kỹ sư phần mềm chuyên sâu Backend",
  summary:
    "Kỹ sư phần mềm với hơn 2 năm kinh nghiệm phát triển và bảo trì hệ thống backend trên nền tảng .NET, ứng dụng thời gian thực và sản phẩm full-stack. Kinh nghiệm trải rộng từ microservices, giám sát phương tiện GPS, điều phối môi trường trên Kubernetes đến nền tảng nội dung ứng dụng AI. Tích cực ứng dụng công cụ và kỹ thuật AI để tăng tốc phát triển và giải quyết vấn đề phức tạp.",
  location: "Mỹ Đình, Nam Từ Liêm, Hà Nội",
  email: socialLinks.email,
  phone: socialLinks.phone,
  resumeUrl: "/resume/Kieu-Thanh-The-Anh-FS.pdf",
  socialLinks: [
    { label: "GitHub", url: socialLinks.github, icon: "github" },
    { label: "LinkedIn", url: socialLinks.linkedin, icon: "linkedin" },
    { label: "Email", url: `mailto:${socialLinks.email}`, icon: "mail" },
  ],
};
