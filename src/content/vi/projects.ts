import type { ProjectLocalized } from "@/types/portfolio";

export const projects: Record<string, ProjectLocalized> = {
  "f-ctf-system": {
    title: "F-CTF System Upgrade Performance",
    shortDescription:
      "Nâng cấp nền tảng thi CTF của FPT University với cô lập môi trường thử thách Kubernetes cho từng đội, điều phối sự kiện và hệ thống giám sát production. Dẫn dắt dự án với vai trò team lead và kiến trúc sư kỹ thuật.",
    context: "Đồ án tốt nghiệp tại Đại học FPT — nâng cấp hệ thống CTF hiện có",
    role: "Team Lead & Kiến trúc sư kỹ thuật",
    responsibilities: [
      "Dẫn dắt nhóm: quyết định kiến trúc, phân chia công việc, lập kế hoạch sprint, code review và kiểm soát chất lượng",
      "Thiết kế và triển khai cô lập Kubernetes cho từng đội thi, thay thế môi trường chia sẻ trước đó",
      "Xây dựng điều phối Argo Workflows cho vòng đời thử thách (deploy, giám sát, hủy)",
      "Kiến trúc tầng cache Redis và pipeline cung cấp bất đồng bộ",
      "Thiết lập đồng bộ hóa sự kiện RabbitMQ giữa các dịch vụ",
      "Cấu hình hệ thống giám sát Grafana và Loki cho production",
      "Phát triển API backend cho điều phối thử thách và chấm điểm",
      "Xây dựng pipeline kiểm thử và CI workflows",
    ],
    architecture:
      "Đây là bản nâng cấp nền tảng CTF hiện có để xử lý quy mô lớn hơn đáng kể. Mỗi đội thi nhận được instance Kubernetes riêng biệt, thay thế môi trường chia sẻ trước đó. Argo Workflows quản lý toàn bộ vòng đời — triển khai, giám sát sức khỏe và dọn dẹp. RabbitMQ xử lý giao tiếp sự kiện giữa các dịch vụ, trong khi Redis cung cấp cache cho dữ liệu truy cập thường xuyên. Grafana và Loki được sử dụng để giám sát thời gian thực và tổng hợp log trên tất cả instance thử thách.",
    technicalDecisions: [
      {
        decision: "Cô lập Kubernetes cho từng đội (thay thế môi trường chia sẻ)",
        rationale:
          "Hệ thống trước đó chạy thử thách trong môi trường chia sẻ, gây can thiệp giữa các đội khi thi đấu. Cô lập từng đội đảm bảo công bằng và ngăn chặn tranh chấp tài nguyên.",
        tradeoffs:
          "Độ phức tạp hạ tầng và sử dụng tài nguyên cao hơn, nhưng quan trọng cho tính toàn vẹn cuộc thi ở quy mô lớn.",
      },
      {
        decision: "Argo Workflows cho điều phối vòng đời",
        rationale:
          "Cung cấp quản lý workflow khai báo, có thể quan sát cho việc cung cấp và hủy thử thách, cho phép tự động mở rộng trong giai đoạn đột biến.",
      },
      {
        decision: "RabbitMQ cho giao tiếp bất đồng bộ",
        rationale:
          "Tách rời các dịch vụ và xử lý lưu lượng đột biến khi bắt đầu/kết thúc cuộc thi mà không chặn pipeline xử lý chính.",
      },
    ],
    outcomes: [
      "Hệ thống được báo cáo hỗ trợ hơn 2.000 người dùng đồng thời trong các cuộc thi",
      "Đã triển khai và sử dụng trong các cuộc thi CTF chính thức của Đại học FPT",
    ],
  },
  "coco-system": {
    title: "COCO System",
    shortDescription:
      "Nền tảng lên lịch và xuất bản nội dung mạng xã hội hỗ trợ AI với tạo nội dung bằng RAG.",
    role: "Full Stack",
    responsibilities: [
      "Xây dựng quản lý đa tài khoản mạng xã hội cho X, Facebook và Telegram",
      "Triển khai pipeline tạo nội dung AI với cơ sở tri thức phong cách viết",
      "Phát triển RAG với truy xuất vector trước khi sinh nội dung qua LLM",
      "Xây dựng cơ sở tri thức lĩnh vực crypto cho nội dung chuyên biệt",
      "Tích hợp xác thực dữ liệu nguồn mạng xã hội",
    ],
    architecture:
      "Nền tảng lên lịch nội dung quản lý xuất bản trên nhiều mạng xã hội. Sử dụng RAG (Retrieval-Augmented Generation) với vector embeddings để khớp phong cách viết của người dùng trước khi tạo nội dung qua LLM.",
  },
  "techglobal-livegts": {
    title: "TechGlobal LiveGTS",
    shortDescription:
      "Hệ thống giám sát đội xe GPS với theo dõi trực tiếp, phát lại hành trình, quản lý tuyến đường và tích hợp camera.",
    role: "Full Stack",
    responsibilities: [
      "Phát triển REST API cho quản lý đội xe và tài xế",
      "Triển khai RBAC cho kiểm soát truy cập đa khách hàng",
      "Tối ưu truy vấn SQL cho tập dữ liệu GPS thời gian thực và lịch sử lớn",
      "Tích hợp bản đồ thời gian thực và luồng camera trực tiếp",
      "Xây dựng tính năng phát lại hành trình và theo dõi tuyến đường",
      "Xử lý tích hợp quy định và hệ thống cảnh báo sự kiện",
    ],
    architecture:
      "Nền tảng giám sát đội xe full-stack với backend ASP.NET Core cung cấp REST API, frontend web React và ứng dụng mobile Flutter. Xử lý thu nhận dữ liệu GPS thời gian thực, tối ưu truy vấn lịch sử và tích hợp bản đồ.",
  },
  "food-order-microservices": {
    title: "Hệ thống Đặt món",
    shortDescription:
      "Nền tảng đặt món nhà hàng qua QR code với kiến trúc microservice, điều phối bếp và thông báo thời gian thực.",
    context: "Bảo trì tại KIS VietNam Creative",
    role: "Bảo trì & Tối ưu",
    responsibilities: [
      "Bảo trì dịch vụ xử lý đơn hàng, hiển thị bếp và thanh toán",
      "Triển khai giao tiếp bất đồng bộ giữa các dịch vụ",
      "Thêm thông báo thời gian thực SignalR cho trạng thái đơn hàng",
      "Debug lỗi runtime và tối ưu truy vấn cơ sở dữ liệu",
    ],
  },
  "bjo-web3": {
    title: "BJO (Blockchain Job Opportunity)",
    shortDescription:
      "Nền tảng mạng lưới chuyên nghiệp Web3 và tuyển dụng với tìm việc, hồ sơ và nhắn tin nhà tuyển dụng.",
    role: "Fullstack Developer",
    responsibilities: [
      "Xây dựng API backend cho tìm kiếm việc làm và hồ sơ chuyên nghiệp",
      "Triển khai xác thực và kiểm soát truy cập theo vai trò",
      "Phát triển tính năng kết nối và nhắn tin nhà tuyển dụng",
      "Tối ưu hiệu suất và tăng cường bảo mật",
    ],
  },
  "employee-management-crm": {
    title: "Quản lý Nhân sự CRM",
    shortDescription:
      "Hệ thống quản lý nhân sự bao gồm hồ sơ, chấm công, lương và bảo hiểm.",
    context: "Bảo trì tại KIS VietNam Creative",
    role: "Bảo trì & Tái cấu trúc",
    responsibilities: [
      "Tái cấu trúc giao diện Angular để cải thiện trải nghiệm",
      "Tối ưu endpoint API backend",
      "Triển khai logic nghiệp vụ lương và bảo hiểm bằng TypeScript",
    ],
  },
  "mcsl-mobile": {
    title: "Ứng dụng Di động MCSL",
    shortDescription:
      "Ứng dụng mobile quy trình phòng thí nghiệm hóa chất với quét QR tra cứu công thức và quản lý vị trí chai.",
    context: "Phát triển tại KIS VietNam Creative",
    role: "Lập trình viên Mobile",
    responsibilities: [
      "Triển khai quét mã QR cho tra cứu công thức và trả chai về kệ",
      "Tối ưu quét camera cho nhãn chai cong và nhỏ",
      "Rà soát tài liệu thiết kế chi tiết và kiểm tra tuân thủ",
      "Viết unit test cho logic quét và tra cứu cốt lõi",
    ],
  },
  "thiep-so": {
    title: "Thiệp Số — Thiệp mời kỹ thuật số",
    shortDescription:
      "Nền tảng thiệp mời kỹ thuật số tạo thiệp cá nhân hóa hàng loạt — mỗi khách mời nhận thiệp riêng với tên của mình, chỉ từ một lần thiết lập sự kiện.",
    role: "Full Stack Developer",
    responsibilities: [
      "Xây dựng toàn bộ backend với ASP.NET Core: CRUD thiệp mời, quản lý khách hàng và khách mời, bậc giá, dashboard phân tích",
      "Triển khai tạo thiệp hàng loạt — tạo một sự kiện, import danh sách khách mời, tự động tạo thiệp cá nhân hóa cho từng người",
      "Phát triển frontend Next.js với HeroUI, Zustand quản lý state và React Query cho data fetching",
      "Xây dựng import/export Excel cho quản lý khách mời hàng loạt bằng ExcelJS",
      "Tích hợp AWS S3 cho lưu trữ hình ảnh và quản lý tài sản mẫu",
      "Triển khai xác thực JWT, kiểm soát truy cập theo vai trò và dashboard admin với phân tích",
    ],
    architecture:
      "Nền tảng full-stack với backend ASP.NET Core (kiến trúc sạch: Domain, Application, Infrastructure, API layers) và frontend Next.js. Hỗ trợ hai chế độ thiệp mời: Chia sẻ (một link cho tất cả khách mời) và Cá nhân hóa (thiệp riêng cho từng khách mời với tên riêng). PostgreSQL cho lưu trữ dữ liệu, AWS S3 cho tài sản media.",
  },
  "social-media-app": {
    title: "Ứng dụng Mạng Xã Hội",
    shortDescription:
      "Nền tảng xã hội với hồ sơ, bài đăng đa phương tiện, thông báo thời gian thực và kết bạn.",
    role: "Full Stack",
    responsibilities: [
      "Xây dựng hồ sơ xã hội và hệ thống kết bạn",
      "Triển khai các loại bài đăng: văn bản, hình ảnh, video và bài viết",
      "Thêm chức năng thích, bình luận và tải đa phương tiện",
      "Tích hợp SignalR cho gửi thông báo thời gian thực",
      "Phát triển REST API cho tất cả tính năng xã hội",
    ],
  },
};
