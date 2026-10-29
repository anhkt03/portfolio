import type { ExperienceLocalized } from "@/types/portfolio";

export const experiences: Record<string, ExperienceLocalized> = {
  "techglobal-gps": {
    organization: "TechGlobal GPS",
    role: "Full Stack Developer",
    summary:
      "Làm việc trên TechGlobal LiveGTS, hệ thống giám sát phương tiện và đội xe GPS bao gồm giám sát trực tiếp, phát lại hành trình, định tuyến, quản lý đội xe/tài xế, camera trực tiếp, báo cáo, tích hợp quy định và cảnh báo sự kiện.",
    highlights: [
      "Phát triển REST API với ASP.NET Core",
      "RBAC cho kiểm soát truy cập đa khách hàng",
      "Tối ưu truy vấn SQL cho tập dữ liệu GPS thời gian thực và lịch sử lớn",
      "Tích hợp bản đồ thời gian thực và camera",
      "Phát triển mobile với Flutter",
    ],
  },
  "kis-vietnam": {
    organization: "KIS VietNam Creative",
    role: "Fresher Software Engineer",
    summary:
      "Bảo trì và cải thiện nhiều hệ thống production bao gồm đặt món nhà hàng, quản lý nhân sự và ứng dụng mobile phòng thí nghiệm.",
    highlights: [
      "Bảo trì microservices .NET cho hệ thống đặt món nhà hàng — xử lý đơn hàng, hiển thị bếp, thanh toán, giao tiếp bất đồng bộ, thông báo SignalR",
      "Tái cấu trúc CRM quản lý nhân sự Angular/TypeScript — cải thiện UI/UX, hiệu suất API, logic lương/bảo hiểm",
      "Đóng góp cho ứng dụng mobile Flutter cho phòng thí nghiệm hóa chất Nhật Bản — quét QR, tối ưu camera, tuân thủ tài liệu thiết kế, unit testing",
    ],
  },
};
