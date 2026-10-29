import type { Profile } from "@/types/portfolio";
import { socialLinks } from "../shared";

export const profile: Profile = {
  name: "Kiều Thanh Thế Anh",
  headline: "Kỹ sư phần mềm chuyên sâu Backend",
  summary:
    "Tôi phát triển và bảo trì hệ thống backend trên nền tảng .NET, ứng dụng thời gian thực và sản phẩm full-stack. Kinh nghiệm của tôi trải rộng từ microservices, giám sát phương tiện GPS, điều phối môi trường trên Kubernetes đến nền tảng nội dung ứng dụng AI.",
  location: "Hà Nội, Việt Nam",
  email: socialLinks.email,
  socialLinks: [
    { label: "GitHub", url: socialLinks.github, icon: "github" },
    { label: "LinkedIn", url: socialLinks.linkedin, icon: "linkedin" },
    { label: "Email", url: `mailto:${socialLinks.email}`, icon: "mail" },
  ],
};
