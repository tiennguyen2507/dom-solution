"use client";

import React, { createContext, useContext, useSyncExternalStore, ReactNode } from "react";

export type Language = "vi" | "en";

export const translations = {
  vi: {
    nav: {
      portfolio: "Dự Án",
      services: "Dịch Vụ",
      calculator: "Dự Toán",
      process: "Quy Trình",
      blog: "Bài Viết",
      faq: "FAQ",
      consultation: "Tư Vấn",
    },
    hero: {
      kicker: "Studio Thiết Kế & Lập Trình Web Cao Cấp",
      bookingStatus: "Nhận dự án 2026",
      titleMain: "Kiến tạo",
      titleHighlight: "Website & Web App",
      titleEnd: "chuẩn mực, nâng tầm vị thế thương hiệu.",
      subtitle:
        "Tikat chuyên phát triển SaaS, Web App, sàn thương mại điện tử và website doanh nghiệp độc quyền. Cam kết tốc độ tải trang <0.8s, bảo hành 12 tháng và bàn giao 100% mã nguồn sạch.",
      ctaPrimary: "Nhận Tư Vấn & Báo Giá",
      ctaSecondary: "Dự Toán Chi Phí Tự Động",
      ratingValue: "5.0 / 5.0",
      ratingProjects: "(50+ dự án)",
      badgeCode: "100% Mã nguồn độc quyền",
      badgeTime: "Bàn giao đúng tiến độ",
      cardSpeed: "Tải Trang < 0.8s",
      cardSpeedSub: "Core Web Vitals 98+",
      cardWarranty: "Bảo Hành 12 Tháng",
      cardWarrantySub: "Hỗ trợ kỹ thuật 24/7",
      techTitle: "Công nghệ:",
      scrollProjects: "Dự án",
    },
    stats: {
      items: [
        { value: "5+", label: "Năm kinh nghiệm", sublabel: "Full-stack Engineering" },
        { value: "45+", label: "Dự án bàn giao", sublabel: "Đúng tiến độ 100%" },
        { value: "99.8%", label: "Khách hàng hài lòng", sublabel: "Đánh giá 5 sao" },
        { value: "< 1s", label: "Tốc độ tải trang", sublabel: "Tối ưu Core Web Vitals" },
      ],
    },
    services: {
      kicker: "Dịch Vụ Chuyên Sâu",
      title: "Giải pháp lập trình",
      titleHighlight: "toàn diện",
      titleEnd: "& tối ưu",
      subtitle:
        "Từ website doanh nghiệp định vị thương hiệu đến các nền tảng SaaS, sàn thương mại điện tử và portal nội bộ xử lý dữ liệu phức tạp.",
      packagePrefix: "Gói dịch vụ",
      timelineLabel: "Thời gian:",
      deliverablesTitle: "Tiêu Chuẩn Bàn Giao:",
      techStackTitle: "Công Nghệ Áp Dụng:",
      priceLabel: "Chi phí đầu tư dự kiến:",
      cta: "Nhận Báo Giá Chi Tiết",
    },
    portfolio: {
      kicker: "Dự Án Đã Thực Hiện",
      title: "Sản phẩm &",
      titleHighlight: "Công trình thực tế",
      subtitle:
        "Mỗi sản phẩm là một kiến trúc được trau chuốt tỉ mỉ từ giao diện người dùng đến hiệu năng backend và tính mở rộng lâu dài.",
      filterAll: "Tất Cả Dự Án",
      filterSaas: "SaaS Web App",
      filterEcommerce: "E-Commerce",
      filterPortal: "Hệ Thống ERP/CRM",
      filterLanding: "Landing Page",
      clientLabel: "Khách hàng:",
      yearLabel: "Năm",
      ctaDetails: "Chi Tiết Dự Án & Mã Nguồn",
      modalMetricsTitle: "Chỉ Số Hiệu Năng & Kết Quả:",
      modalTechTitle: "Công Nghệ Xây Dựng:",
      modalTagsTitle: "Tính Năng & Module Nổi Bật:",
      modalGuarantee: "Cam kết bàn giao 100% Full Source Code Git",
      modalCtaSimilar: "Báo Giá Dự Án Tương Tự",
    },
    calculator: {
      kicker: "Dự Toán Minh Bạch",
      title: "Ước tính",
      titleHighlight: "chi phí & thời gian",
      titleEnd: "triển khai",
      subtitle:
        "Công cụ tính toán tự động dựa trên khối lượng tính năng thực tế, giúp bạn chủ động lập kế hoạch ngân sách chính xác.",
      step1Tag: "Bước 1 · Định Hình Mô Hình",
      step1Title: "Chọn Loại Hình Dự Án Cần Triển Khai",
      step2Tag: "Bước 2 · Quy Mô Dự Án",
      step2Title: "Số Lượng Màn Hình / Trang Giao Diện Chính",
      screensUnit: "Màn hình",
      screensBase: "3 Màn hình (Cơ bản)",
      screensStd: "8 Màn hình (Tiêu chuẩn)",
      screensAdv: "15+ Màn hình (Mở rộng)",
      step3Tag: "Bước 3 · Tính Năng Nâng Cao",
      step3Title: "Chọn Các Module Chức Năng Bổ Sung",
      summaryTag: "Bảng Tổng Hợp Dự Toán",
      summaryTitle: "Kế Hoạch Ngân Sách Dự Kiến",
      totalPriceLabel: "Chi Phí Đầu Tư Trọn Gói:",
      timelineLabel: "Tiến độ bàn giao:",
      daysUnit: "ngày làm việc",
      summaryModel: "Mô hình:",
      summaryScreens: "Quy mô giao diện:",
      screensText: "màn hình chính",
      summaryModules: "Tính năng bổ sung:",
      modulesSelectedText: "module đã chọn",
      summaryWarranty: "Bảo hành & Hỗ trợ:",
      warrantyVal: "12 Tháng Miễn Phí",
      summarySource: "Bàn giao mã nguồn:",
      sourceVal: "100% Full Source Code",
      cta: "Gửi Yêu Cầu Theo Báo Giá Này",
      disclaimer:
        "* Mức giá dự toán mang tính tham khảo chuẩn xác 90%. Tikat sẽ tư vấn và chốt phương án chi tiết sau khi nhận brief cụ thể.",
    },
    process: {
      kicker: "Quy Trình Triển Khai",
      title: "5 Bước làm việc",
      titleHighlight: "chặt chẽ",
      titleEnd: "& minh bạch",
      subtitle:
        "Mỗi giai đoạn đều có mốc nghiệm thu cụ thể, báo cáo tiến độ trực quan và hỗ trợ tương tác kỹ thuật liên tục.",
      verifiedText: "Nghiệm thu rõ ràng",
    },
    blog: {
      kicker: "Góc Nhìn Kỹ Thuật",
      title: "Kiến thức &",
      titleHighlight: "Kinh nghiệm thực chiến",
      subtitle:
        "Các bài phân tích chuyên sâu về kiến trúc phần mềm, bảo mật dữ liệu và tối ưu hiệu năng web application.",
      filterAll: "Tất Cả Bài Viết",
      filterArch: "Kiến Trúc Web",
      filterSec: "Bảo Mật & Auth",
      filterEcom: "E-Commerce",
      readFull: "Đọc Toàn Bộ Bài Viết",
      copyCode: "Sao chép mã",
      copied: "Đã sao chép",
      shareBtn: "Chia sẻ bài viết",
      shareCopied: "Đã lưu liên kết!",
      ctaSimilar: "Tư Vấn Giải Pháp Tương Tự",
    },
    testimonials: {
      kicker: "Đánh Giá Khách Hàng",
      title: "Được tin cậy bởi",
      titleHighlight: "những người dẫn đầu",
      subtitle:
        "Sự tin cậy và hài lòng của khách hàng là bảo chứng vững chắc nhất cho chất lượng mã nguồn và sự tận tâm của Tikat.",
      ratingText: "5.0 Tuyệt vời",
      projectLabel: "Dự án:",
      helpful: "Hữu ích",
      verified: "Đã nghiệm thu",
    },
    consultation: {
      kicker: "Kết Nối Trực Tiếp",
      title: "Khởi tạo",
      titleHighlight: "dự án của bạn",
      titleEnd: "cùng Tikat",
      subtitle:
        "Chia sẻ ý tưởng hoặc bài toán nghiệp vụ của bạn. Tikat sẽ phản hồi kèm phân tích kiến trúc sơ bộ và báo giá trong vòng 2 giờ làm việc.",
      hotlineLabel: "Hotline & Zalo Kỹ Thuật:",
      emailLabel: "Hòm thư tiếp nhận brief:",
      ndaLabel: "Cam kết bảo mật (NDA):",
      ndaDesc: "Ký thỏa thuận bảo mật ý tưởng & dữ liệu theo yêu cầu",
      hoursLabel: "Thời gian hỗ trợ:",
      hoursDesc: "Thứ 2 - Thứ 7 (8:30 - 21:00), phản hồi khẩn cấp 24/7",
      nameLabel: "Họ và tên của bạn *",
      namePlaceholder: "Nguyễn Văn A",
      phoneLabel: "Số điện thoại / Zalo *",
      phonePlaceholder: "09xx xxx xxx",
      emailInputLabel: "Email liên hệ (nếu có)",
      emailPlaceholder: "name@company.com",
      serviceLabel: "Loại hình sản phẩm cần làm",
      budgetLabel: "Ngân sách dự kiến",
      timelineLabel: "Thời hạn cần bàn giao",
      descLabel: "Mô tả sơ lược yêu cầu hoặc tính năng chính",
      descPlaceholder: "Ví dụ: Cần website bán hàng cho chuỗi thời trang, tích hợp thanh toán VNPay và đồng bộ tồn kho...",
      submitBtn: "Gửi Yêu Cầu Nhận Báo Giá Miễn Phí",
      submitting: "Đang gửi thông tin...",
      successTitle: "Đã Gửi Yêu Cầu Thành Công!",
      successDescPart1: "Cảm ơn",
      successDescPart2: ". Tikat đã tiếp nhận thông tin và sẽ liên hệ trực tiếp qua số điện thoại/Zalo",
      successDescPart3: "trong ít phút.",
      sendAnother: "Gửi thêm nội dung khác",
    },
    faq: {
      kicker: "Giải Đáp & Chính Sách",
      title: "Câu hỏi thường gặp &",
      titleHighlight: "Cam kết dịch vụ",
      subtitle:
        "Các câu hỏi về bản quyền mã nguồn, chính sách bảo hành 12 tháng và quy trình thanh toán minh bạch.",
    },
    footer: {
      about:
        "Tikat (tikat.com) · Studio thiết kế và phát triển Website & Web Application chuyên nghiệp. Bàn giao 100% mã nguồn sạch, cam kết PageSpeed 98+ và bảo hành 12 tháng tận tâm.",
      warranty: "Bảo hành 12 tháng",
      fullSource: "100% Full Source Code Git",
      explore: "Khám Phá",
      projectsLink: "Dự Án Tiêu Biểu",
      servicesLink: "Dịch Vụ Phát Triển Web",
      calcLink: "Dự Toán Ngân Sách",
      processLink: "Quy Trình 5 Bước",
      blogLink: "Góc Nhìn Kỹ Thuật",
      faqLink: "Hỏi Đáp & Chính Sách",
      contactDirect: "Liên Hệ Trực Tiếp",
      workOnline: "Làm việc trực tuyến & tiếp nhận dự án toàn quốc",
      copyright: "Bản quyền thuộc về Tikat Studio (tikat.com).",
      navServices: "Dịch Vụ",
      navProjects: "Dự Án",
      navQuote: "Báo Giá",
    },
    floating: {
      zalo: "Zalo Kỹ Thuật",
      telegram: "Telegram",
      phone: "Gọi Hotline",
    },
  },

  en: {
    nav: {
      portfolio: "Projects",
      services: "Services",
      calculator: "Estimate",
      process: "Process",
      blog: "Blog",
      faq: "FAQ",
      consultation: "Consultation",
    },
    hero: {
      kicker: "High-Performance Web & SaaS Studio",
      bookingStatus: "Accepting Projects 2026",
      titleMain: "Engineering",
      titleHighlight: "Websites & Web Apps",
      titleEnd: "that elevate your digital presence.",
      subtitle:
        "Tikat specializes in developing bespoke SaaS platforms, Web Applications, E-Commerce platforms, and corporate websites. Guaranteed <0.8s load speed, 12 months warranty, and 100% full clean source code handover.",
      ctaPrimary: "Get Free Consultation & Quote",
      ctaSecondary: "Automated Cost Estimator",
      ratingValue: "5.0 / 5.0",
      ratingProjects: "(50+ projects)",
      badgeCode: "100% Proprietary Clean Code",
      badgeTime: "On-Time Milestone Delivery",
      cardSpeed: "Ultra-Fast Load < 0.8s",
      cardSpeedSub: "Core Web Vitals 98+",
      cardWarranty: "12-Month Warranty",
      cardWarrantySub: "24/7 Technical Support",
      techTitle: "Tech Stack:",
      scrollProjects: "Projects",
    },
    stats: {
      items: [
        { value: "5+", label: "Years Experience", sublabel: "Full-stack Engineering" },
        { value: "45+", label: "Projects Delivered", sublabel: "100% On-Time Completion" },
        { value: "99.8%", label: "Client Satisfaction", sublabel: "5-Star Ratings" },
        { value: "< 1s", label: "Page Load Speed", sublabel: "Core Web Vitals Optimized" },
      ],
    },
    services: {
      kicker: "Core Services",
      title: "Development Solutions",
      titleHighlight: "tailored",
      titleEnd: "& high-performance",
      subtitle:
        "From high-converting corporate websites to scalable SaaS platforms, automated e-commerce stores, and enterprise operational dashboards.",
      packagePrefix: "Service Package",
      timelineLabel: "Timeline:",
      deliverablesTitle: "Standard Deliverables:",
      techStackTitle: "Tech Stack:",
      priceLabel: "Estimated investment:",
      cta: "Request Detailed Proposal",
    },
    portfolio: {
      kicker: "Featured Work",
      title: "Real-World",
      titleHighlight: "Production Projects",
      subtitle:
        "Every product is engineered with meticulous care from responsive UI to scalable backend architecture and long-term maintainability.",
      filterAll: "All Projects",
      filterSaas: "SaaS Web App",
      filterEcommerce: "E-Commerce",
      filterPortal: "Enterprise ERP/CRM",
      filterLanding: "Landing Page",
      clientLabel: "Client:",
      yearLabel: "Year",
      ctaDetails: "Project Details & Source Code",
      modalMetricsTitle: "Key Performance & Metrics:",
      modalTechTitle: "Built With Tech Stack:",
      modalTagsTitle: "Key Modules & Features:",
      modalGuarantee: "Guaranteed 100% Full Git Source Code Ownership",
      modalCtaSimilar: "Get Quote For Similar Project",
    },
    calculator: {
      kicker: "Transparent Estimation",
      title: "Automated",
      titleHighlight: "Cost & Timeline",
      titleEnd: "Estimator",
      subtitle:
        "Calculate your project investment in real-time based on concrete scope and features to plan your budget confidently.",
      step1Tag: "Step 1 · Project Architecture",
      step1Title: "Select Project Category",
      step2Tag: "Step 2 · Project Scope",
      step2Title: "Number of Core Screens / Page Views",
      screensUnit: "Screens",
      screensBase: "3 Screens (Basic)",
      screensStd: "8 Screens (Standard)",
      screensAdv: "15+ Screens (Enterprise)",
      step3Tag: "Step 3 · Advanced Modules",
      step3Title: "Select Additional Features & Integrations",
      summaryTag: "Estimation Summary",
      summaryTitle: "Estimated Project Budget",
      totalPriceLabel: "Total Investment Estimate:",
      timelineLabel: "Delivery Timeline:",
      daysUnit: "business days",
      summaryModel: "Category:",
      summaryScreens: "Interface Scope:",
      screensText: "core screens",
      summaryModules: "Added Modules:",
      modulesSelectedText: "modules selected",
      summaryWarranty: "Warranty & Support:",
      warrantyVal: "12 Months Free",
      summarySource: "Source Code Handover:",
      sourceVal: "100% Full Source Code",
      cta: "Submit Request With This Estimate",
      disclaimer:
        "* Estimates are 90% accurate approximations. Tikat will review your exact requirements and provide a fixed quote upon receipt of your brief.",
    },
    process: {
      kicker: "Workflow Methodology",
      title: "5-Step Standardized",
      titleHighlight: "Transparent",
      titleEnd: "Development Lifecycle",
      subtitle:
        "Every milestone features transparent weekly demos, strict code audits, and guaranteed timeline delivery.",
      verifiedText: "Verified Milestones",
    },
    blog: {
      kicker: "Engineering Blog",
      title: "Technical Insights &",
      titleHighlight: "Production Architecture",
      subtitle:
        "Real-world engineering guides on Next.js, Core Web Vitals optimization, SaaS security design, and automated payment gateways.",
      filterAll: "All Articles",
      filterArch: "Web Architecture",
      filterSec: "Security & Auth",
      filterEcom: "E-Commerce",
      readFull: "Read Full Article",
      copyCode: "Copy Code",
      copied: "Copied!",
      shareBtn: "Share Article",
      shareCopied: "Link Copied!",
      ctaSimilar: "Consult On Similar Architecture",
    },
    testimonials: {
      kicker: "Client Testimonials",
      title: "Trusted by",
      titleHighlight: "industry leaders",
      subtitle:
        "Client trust and satisfaction is the ultimate proof of our craftsmanship and dedication to engineering excellence.",
      ratingText: "5.0 Outstanding",
      projectLabel: "Project:",
      helpful: "Helpful",
      verified: "Delivered & Verified",
    },
    consultation: {
      kicker: "Get In Touch",
      title: "Kickstart",
      titleHighlight: "your next project",
      titleEnd: "with Tikat",
      subtitle:
        "Share your product idea or business requirements. Tikat will respond with an initial architecture breakdown and proposal within 2 business hours.",
      hotlineLabel: "Hotline & Technical Zalo:",
      emailLabel: "Brief Submission Email:",
      ndaLabel: "Confidentiality (NDA):",
      ndaDesc: "Non-Disclosure Agreement signed upon request",
      hoursLabel: "Working Hours:",
      hoursDesc: "Mon - Sat (8:30 - 21:00 ICT), 24/7 emergency response",
      nameLabel: "Your Full Name *",
      namePlaceholder: "Alex Johnson",
      phoneLabel: "Phone / WhatsApp / Telegram *",
      phonePlaceholder: "+84 88 669 4350",
      emailInputLabel: "Email Address (optional)",
      emailPlaceholder: "name@company.com",
      serviceLabel: "Project Category",
      budgetLabel: "Estimated Budget",
      timelineLabel: "Target Timeline",
      descLabel: "Project Overview & Feature Requirements",
      descPlaceholder: "Describe your product goals, core user flows, or attach reference links...",
      submitBtn: "Send Consultation Request (Free Quote)",
      submitting: "Submitting request...",
      successTitle: "Request Sent Successfully!",
      successDescPart1: "Thank you",
      successDescPart2: ". Tikat has received your brief and will reach out directly via Phone/Zalo/WhatsApp",
      successDescPart3: "shortly.",
      sendAnother: "Submit Another Request",
    },
    faq: {
      kicker: "FAQ & Policies",
      title: "Frequently Asked Questions &",
      titleHighlight: "Service Commitments",
      subtitle:
        "Transparent details regarding source code ownership, 12-month warranty coverage, timeline guarantees, and milestone payment schedules.",
    },
    footer: {
      about:
        "Tikat (tikat.com) · High-performance Web & SaaS Development Studio. 100% clean source code handover, guaranteed PageSpeed 98+, and dedicated 12-month warranty.",
      warranty: "12-Month Warranty",
      fullSource: "100% Git Full Source Code",
      explore: "Explore",
      projectsLink: "Featured Projects",
      servicesLink: "Web Development Services",
      calcLink: "Budget Estimator",
      processLink: "5-Step Process",
      blogLink: "Engineering Blog",
      faqLink: "FAQ & Policies",
      contactDirect: "Direct Contact",
      workOnline: "Remote & on-site services nationwide & worldwide",
      copyright: "All rights reserved by Tikat Studio (tikat.com).",
      navServices: "Services",
      navProjects: "Projects",
      navQuote: "Get Quote",
    },
    floating: {
      zalo: "Zalo Tech",
      telegram: "Telegram",
      phone: "Call Hotline",
    },
  },
};

interface LanguageContextType {
  lang: Language;
  setLanguage: (lang: Language) => void;
  t: (typeof translations)["vi"];
}

const langListeners = new Set<() => void>();

function subscribeLang(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  langListeners.add(callback);
  const handler = () => callback();
  window.addEventListener("storage", handler);
  window.addEventListener("langchange", handler);
  return () => {
    langListeners.delete(callback);
    window.removeEventListener("storage", handler);
    window.removeEventListener("langchange", handler);
  };
}

let memoryLang: Language = "vi";

function getLangSnapshot(): Language {
  if (typeof window === "undefined") return "vi";
  try {
    const saved = localStorage.getItem("lang") as Language;
    if (saved === "en" || saved === "vi") {
      memoryLang = saved;
      return saved;
    }
  } catch {}
  return memoryLang;
}

function getLangServerSnapshot(): Language {
  return "vi";
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "vi",
  setLanguage: () => {},
  t: translations.vi,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(subscribeLang, getLangSnapshot, getLangServerSnapshot);

  const setLanguage = (newLang: Language) => {
    memoryLang = newLang;
    try {
      localStorage.setItem("lang", newLang);
    } catch {}
    langListeners.forEach((listener) => listener());
    window.dispatchEvent(new CustomEvent("langchange", { detail: { lang: newLang } }));
  };

  const t = translations[lang] || translations.vi;

  return (
    <LanguageContext.Provider value={{ lang, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
