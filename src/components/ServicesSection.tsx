"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "@/context/LanguageContext";
import {
  Clock,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export interface LocalizedServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  techStack: string[];
  deliverables: string[];
  timeline: string;
  startingPrice: string;
}

export default function ServicesSection() {
  const { lang, t } = useLanguage();

  const servicesDataVi: LocalizedServiceItem[] = [
    {
      id: "web-app",
      number: "01",
      title: "Web App & SaaS Development",
      description:
        "Phát triển hệ thống web application và SaaS tùy chỉnh theo nhu cầu nghiệp vụ chuyên sâu. Kiến trúc mở rộng (Scalable), xác thực bảo mật, tích hợp Database cao cấp và API tốc độ cao.",
      techStack: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Supabase", "Stripe"],
      deliverables: [
        "Kiến trúc Full-stack bảo mật cao",
        "Authentication & Phân quyền RBAC",
        "Billing & Payment Gateway",
        "Hệ thống quản trị Admin chuyên sâu",
        "Bàn giao 100% Full Source Code",
      ],
      timeline: "3 - 6 tuần",
      startingPrice: "Từ 18.000.000đ",
    },
    {
      id: "landing-page",
      number: "02",
      title: "Landing Page & Corporate Website",
      description:
        "Thiết kế giao diện hiện đại, tối ưu trải nghiệm người dùng (UX) và hiệu năng tải trang vượt trội. Tích hợp trọn gói form thu thập lead, phân tích dữ liệu và CMS dễ quản lý.",
      techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Vercel", "Google Analytics 4"],
      deliverables: [
        "Giao diện độc quyền chuẩn Responsive",
        "Tối ưu Core Web Vitals & SEO On-Page",
        "Tích hợp Zalo/Messenger/Hotline",
        "Hệ thống CMS tự quản lý nội dung",
        "Cấu hình Domain & Hosting bảo mật SSL",
      ],
      timeline: "7 - 14 ngày",
      startingPrice: "Từ 6.500.000đ",
    },
    {
      id: "ecommerce",
      number: "03",
      title: "E-Commerce & Payment Platform",
      description:
        "Giải pháp bán hàng trực tuyến toàn diện, quản lý kho hàng, theo dõi đơn hàng thời gian thực, tích hợp các cổng thanh toán phổ biến như VNPay, MoMo, ZaloPay, Stripe và ship COD.",
      techStack: ["Next.js", "PostgreSQL", "Redis", "VNPay", "MoMo", "Cloudflare"],
      deliverables: [
        "Quản lý danh mục & biến thể sản phẩm",
        "Thanh toán trực tuyến tự động xác nhận",
        "Thông báo đơn hàng qua Telegram/Email",
        "Hệ thống mã giảm giá & Khách hàng thân thiết",
        "Báo cáo doanh thu & xuất nhập tồn",
      ],
      timeline: "3 - 5 tuần",
      startingPrice: "Từ 15.000.000đ",
    },
    {
      id: "internal-portal",
      number: "04",
      title: "Portal Quản Trị & ERP/CRM Nội Bộ",
      description:
        "Xây dựng phần mềm nội bộ, dashboard phân tích dữ liệu trực quan theo thời gian thực giúp doanh nghiệp tiết kiệm thời gian, loại bỏ sai sót và theo dõi năng suất nhân sự hiệu quả.",
      techStack: ["React", "TypeScript", "Express/NestJS", "PostgreSQL", "Docker", "Tailwind"],
      deliverables: [
        "Bảng điều khiển KPI & Telemetry trực quan",
        "Phân quyền nhân viên theo phòng ban",
        "Export Excel/PDF báo cáo định kỳ",
        "Ghi log bảo mật và lịch sử thao tác",
        "Tích hợp API phần mềm kế toán/bán hàng",
      ],
      timeline: "4 - 8 tuần",
      startingPrice: "Từ 22.000.000đ",
    },
    {
      id: "ai-integration",
      number: "05",
      title: "Tích Hợp AI & API Automation",
      description:
        "Ứng dụng trí tuệ nhân tạo vào sản phẩm: chatbot thông minh hỗ trợ khách hàng 24/7, tóm tắt dữ liệu tự động, xử lý văn bản và kết nối các nền tảng qua Webhooks / REST API.",
      techStack: ["Gemini API", "OpenAI", "LangChain", "Node.js", "Vector DB", "Webhooks"],
      deliverables: [
        "Chatbot AI trả lời theo tài liệu doanh nghiệp",
        "Tự động phân loại email và lead khách hàng",
        "Trích xuất dữ liệu từ hình ảnh/hóa đơn",
        "Bảo mật Token và tối ưu chi phí API",
        "Tài liệu hướng dẫn vận hành",
      ],
      timeline: "1 - 3 tuần",
      startingPrice: "Từ 8.000.000đ",
    },
    {
      id: "optimization",
      number: "06",
      title: "Tối Ưu Hiệu Năng & Bảo Trì 24/7",
      description:
        "Dịch vụ tối ưu tốc độ tải trang (PageSpeed 95+), fix lỗi phần mềm, di chuyển server (Migration), phòng chống tấn công mạng và duy trì hệ thống hoạt động ổn định 99.9%.",
      techStack: ["Lighthouse", "Cloudflare", "Docker", "Nginx", "Linux", "Sentry"],
      deliverables: [
        "Kiểm toán toàn diện mã nguồn (Code Audit)",
        "Nâng điểm Google Core Web Vitals",
        "Cấu hình CDN và Caching nhiều lớp",
        "Thiết lập sao lưu dữ liệu tự động hàng ngày",
        "Cam kết xử lý sự cố trong vòng 2 giờ",
      ],
      timeline: "3 - 7 ngày",
      startingPrice: "Từ 4.500.000đ",
    },
  ];

  const servicesDataEn: LocalizedServiceItem[] = [
    {
      id: "web-app",
      number: "01",
      title: "Web App & SaaS Development",
      description:
        "Bespoke full-stack web applications and SaaS platforms tailored to complex workflows. Scalable cloud architectures, robust authentication, high-throughput APIs, and relational databases.",
      techStack: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Supabase", "Stripe"],
      deliverables: [
        "High-security full-stack architecture",
        "Multi-tenant auth & RBAC permissions",
        "Recurring billing & Stripe payment gateway",
        "Comprehensive admin analytics backoffice",
        "100% full Git repository handover",
      ],
      timeline: "3 - 6 weeks",
      startingPrice: "From $750 (~18M VND)",
    },
    {
      id: "landing-page",
      number: "02",
      title: "High-Converting Corporate Website",
      description:
        "Sleek editorial interfaces engineered for maximum conversion, sub-second load times, and perfect SEO indexing. Includes lead capture forms, CMS, and analytics.",
      techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Vercel", "Google Analytics 4"],
      deliverables: [
        "Proprietary responsive responsive UI",
        "Core Web Vitals 98+ & on-page SEO",
        "Zalo / WhatsApp / Hotline quick connect",
        "Intuitive headless CMS management",
        "Automated SSL, DNS, and hosting setup",
      ],
      timeline: "7 - 14 days",
      startingPrice: "From $280 (~6.5M VND)",
    },
    {
      id: "ecommerce",
      number: "03",
      title: "E-Commerce & Automated Payments",
      description:
        "Full-fledged digital storefronts with real-time stock sync, instantaneous search filters, automated shipping calculation, and multi-gateway checkout.",
      techStack: ["Next.js", "PostgreSQL", "Redis", "VNPay", "Stripe", "Cloudflare"],
      deliverables: [
        "Catalog & product variation engine",
        "Automated checkout verification & webhooks",
        "Telegram / email order instant alerts",
        "Discount voucher & loyalty tier system",
        "Revenue, tax, and inventory reporting",
      ],
      timeline: "3 - 5 weeks",
      startingPrice: "From $620 (~15M VND)",
    },
    {
      id: "internal-portal",
      number: "04",
      title: "Internal Portal & Custom ERP/CRM",
      description:
        "Custom enterprise portals and telemetry dashboards eliminating manual bottlenecks, digitizing approvals, and securing internal business operations.",
      techStack: ["React", "TypeScript", "Express/NestJS", "PostgreSQL", "Docker", "Tailwind"],
      deliverables: [
        "Live KPI & telemetry dashboards",
        "Departmental RBAC permission trees",
        "Automated PDF / Excel report exports",
        "Tamper-proof audit logs & action history",
        "Third-party accounting / CRM API sync",
      ],
      timeline: "4 - 8 weeks",
      startingPrice: "From $900 (~22M VND)",
    },
    {
      id: "ai-integration",
      number: "05",
      title: "AI Integrations & Workflow Automation",
      description:
        "Supercharge your platform with intelligent Gemini / OpenAI agents: 24/7 domain chatbots, automated document extraction, and webhook pipelines.",
      techStack: ["Gemini API", "OpenAI", "LangChain", "Node.js", "Vector DB", "Webhooks"],
      deliverables: [
        "Custom RAG chatbot trained on business docs",
        "Automated lead enrichment & routing",
        "OCR text extraction from invoices/images",
        "Token security & API cost optimization",
        "Full operational handover guide",
      ],
      timeline: "1 - 3 weeks",
      startingPrice: "From $350 (~8M VND)",
    },
    {
      id: "optimization",
      number: "06",
      title: "Performance Tuning & 24/7 Maintenance",
      description:
        "Code refactoring, Google PageSpeed 95+ optimization, security patching, cloud database migrations, and 99.9% uptime monitoring.",
      techStack: ["Lighthouse", "Cloudflare", "Docker", "Nginx", "Linux", "Sentry"],
      deliverables: [
        "Comprehensive source code audit",
        "Google Core Web Vitals optimization",
        "Multi-layer edge CDN & caching setup",
        "Automated daily incremental backups",
        "Guaranteed 2-hour critical response SLA",
      ],
      timeline: "3 - 7 days",
      startingPrice: "From $190 (~4.5M VND)",
    },
  ];

  const currentServices = lang === "en" ? servicesDataEn : servicesDataVi;
  const [selectedServiceId, setSelectedServiceId] = useState<string>("web-app");

  const selectedService =
    currentServices.find((s) => s.id === selectedServiceId) || currentServices[0];

  return (
    <section id="services" className="py-20 sm:py-28 bg-white dark:bg-[#0B0F19] relative border-t border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="flex justify-center mb-3">
            <div className="kicker-pill shadow-xs bg-slate-100/90 dark:bg-[#161C2C] text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800">
              <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>{t.services.kicker}</span>
            </div>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif text-slate-900 dark:text-white tracking-tight mb-4">
            {t.services.title}{" "}
            <span className="italic font-normal text-blue-600 dark:text-blue-400">{t.services.titleHighlight}</span>{" "}
            {t.services.titleEnd}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {t.services.subtitle}
          </p>
        </motion.div>

        {/* 2-Column Editorial Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Service Selector */}
          <div className="lg:col-span-5 flex lg:flex-col overflow-x-auto no-scrollbar gap-2.5 sm:gap-3 pb-2 lg:pb-0 snap-x">
            {currentServices.map((service, idx) => {
              const isSelected = selectedService.id === service.id;
              return (
                <motion.button
                  key={service.id}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  onClick={() => setSelectedServiceId(service.id)}
                  type="button"
                  className={`p-4 sm:p-5 rounded-xl text-left cursor-pointer transition-all flex items-center justify-between shrink-0 lg:shrink min-w-[260px] lg:min-w-0 snap-start border ${
                    isSelected
                      ? "bg-white dark:bg-[#161C2C] border-blue-600 dark:border-blue-500 shadow-[0_4px_20px_rgba(8,102,255,0.08)] ring-1 ring-blue-600/30"
                      : "bg-slate-50 dark:bg-[#131826] hover:bg-white dark:hover:bg-[#161C2C] text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800"
                  }`}
                >
                  <div className="flex items-center gap-3.5 sm:gap-4">
                    <span
                      className={`w-9 h-9 rounded-lg flex items-center justify-center font-serif font-bold text-sm shrink-0 border ${
                        isSelected
                          ? "bg-blue-600 text-white border-blue-600"
                          : "bg-white dark:bg-[#0B0F19] text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800"
                      }`}
                    >
                      {service.number}
                    </span>
                    <div>
                      <h3 className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white leading-snug">
                        {service.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        <span className="font-semibold text-slate-800 dark:text-slate-200">{service.startingPrice}</span> · {service.timeline}
                      </p>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 shrink-0 hidden lg:block transition-transform ${
                      isSelected ? "text-blue-600 dark:text-blue-400 translate-x-1" : "text-slate-400 dark:text-slate-600"
                    }`}
                  />
                </motion.button>
              );
            })}
          </div>

          {/* Right Column: Active Service Deep Card with Smooth Tab Animation */}
          <div className="lg:col-span-7 bg-white dark:bg-[#131826] rounded-2xl p-6 sm:p-9 lg:p-10 border border-slate-200 dark:border-slate-800 shadow-[0_4px_25px_rgba(15,23,42,0.04)] dark:shadow-[0_4px_25px_rgba(0,0,0,0.4)] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedService.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="flex flex-col justify-between"
              >
                <div>
                  {/* Header inside card */}
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100 dark:border-slate-800">
                    <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                      {t.services.packagePrefix} {selectedService.number}
                    </span>
                    <span className="text-xs text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-[#0B0F19] px-3 py-1 rounded-full border border-slate-200 dark:border-slate-800 flex items-center gap-1.5 font-medium">
                      <Clock className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                      {t.services.timelineLabel} {selectedService.timeline}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif text-slate-900 dark:text-white mb-3">
                    {selectedService.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-normal">
                    {selectedService.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="mb-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
                      {t.services.deliverablesTitle}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {selectedService.deliverables.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-8">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2.5">
                      {t.services.techStackTitle}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-50 dark:bg-[#0B0F19] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 block">{t.services.priceLabel}</span>
                    <span className="text-xl sm:text-2xl font-serif font-bold text-slate-900 dark:text-white">
                      {selectedService.startingPrice}
                    </span>
                  </div>
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="#consultation"
                    className="btn-primary text-sm py-2.5 px-6 w-full sm:w-auto text-center"
                  >
                    <span>{t.services.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
