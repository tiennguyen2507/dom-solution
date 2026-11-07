import { siteConfig } from "@/lib/seoConfig";

export const profileDescription = "Nguyễn Lê Đình Tiên là người đứng sau Tikat.vn tại Đà Nẵng, cung cấp dịch vụ thiết kế website, phát triển web app và công cụ theo yêu cầu cho cá nhân, cửa hàng và doanh nghiệp.";

export const profileServices = [
  { id: "website", name: "Thiết kế website", description: "Website giới thiệu, landing page và website bán hàng theo nhu cầu của cá nhân, cửa hàng và doanh nghiệp." },
  { id: "web-app", name: "Phát triển web app", description: "Ứng dụng web, dashboard và hệ thống quản lý phục vụ công việc." },
  { id: "automation", name: "Lập trình công cụ theo yêu cầu", description: "Công cụ hỗ trợ xử lý dữ liệu và tự động hóa các thao tác lặp lại." },
];

export const profileQuestions = [
  { question: "Nguyễn Lê Đình Tiên là ai?", answer: profileDescription },
  { question: "Tikat.vn do ai thực hiện?", answer: "Tikat.vn là website giới thiệu dịch vụ và hồ sơ công việc của Nguyễn Lê Đình Tiên. Bạn trao đổi trực tiếp với Tiên về yêu cầu, thiết kế và quá trình thực hiện." },
  { question: "Nguyễn Lê Đình Tiên làm việc ở đâu?", answer: "Nguyễn Lê Đình Tiên làm việc tại Đà Nẵng, Việt Nam, và trao đổi dự án trực tuyến với khách hàng." },
  { question: "Liên hệ Nguyễn Lê Đình Tiên bằng cách nào?", answer: `Bạn có thể liên hệ qua Gmail ${siteConfig.contact.email}, Zalo ${siteConfig.contact.phone}, hoặc gọi số 0886 694 350.` },
  { question: "Chi phí thiết kế website tại Tikat.vn từ bao nhiêu?", answer: "Giá website khởi điểm từ 399.000đ. Phạm vi, số trang và chức năng được trao đổi trước khi báo giá cụ thể; các dự án web app và công cụ được báo giá theo yêu cầu." },
];
