"use client";

import React from "react";
import { motion } from "motion/react";
import { Clock, CheckCircle2, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ProcessSection() {
  const { lang, t } = useLanguage();

  const processStepsVi = [
    {
      step: "01",
      title: "Trao Đổi & Phân Tích Yêu Cầu",
      timeframe: "1 - 2 ngày",
      description:
        "Lắng nghe bài toán kinh doanh, tư vấn giải pháp công nghệ phù hợp nhất, thống nhất danh sách tính năng (Scope of Work) và báo giá minh bạch không phát sinh.",
    },
    {
      step: "02",
      title: "Thiết Kế UI/UX & Kiến Trúc Dữ Liệu",
      timeframe: "3 - 7 ngày",
      description:
        "Lên Wireframe và Prototype giao diện trực quan trên Figma. Thiết kế cơ sở dữ liệu và sơ đồ luồng người dùng để khách hàng duyệt trước khi lập trình.",
    },
    {
      step: "03",
      title: "Lập Trình Full-Stack Chuẩn Clean Code",
      timeframe: "1 - 4 tuần",
      description:
        "Viết code chuẩn TypeScript, cấu trúc module rõ ràng, tối ưu bảo mật và SEO. Cập nhật tiến độ liên tục qua bản Demo Preview hàng tuần cho khách hàng trải nghiệm.",
    },
    {
      step: "04",
      title: "Kiểm Thử (QA), Tối Ưu Tốc Độ & Bảo Mật",
      timeframe: "2 - 4 ngày",
      description:
        "Kiểm tra tính tương thích trên mọi thiết bị (Mobile, Tablet, Desktop), kiểm tra bảo mật API, tối ưu hóa điểm số PageSpeed và kiểm tra tải thực tế.",
    },
    {
      step: "05",
      title: "Bàn Giao 100% Source Code & Bảo Hành",
      timeframe: "Bảo hành 12 tháng",
      description:
        "Bàn giao toàn bộ quyền sở hữu mã nguồn, tài liệu hướng dẫn quản trị chi tiết, hỗ trợ trỏ tên miền - hosting và đồng hành bảo trì kỹ thuật 24/7.",
    },
  ];

  const processStepsEn = [
    {
      step: "01",
      title: "Consultation & Scope Analysis",
      timeframe: "1 - 2 days",
      description:
        "Deep-dive into business workflows, architectural strategy consulting, defining the exact Scope of Work (SOW), and issuing a transparent proposal.",
    },
    {
      step: "02",
      title: "UI/UX Design & Schema Architecture",
      timeframe: "3 - 7 days",
      description:
        "Interactive Figma high-fidelity prototypes, database entity-relationship modeling, and user journey flows approved before coding.",
    },
    {
      step: "03",
      title: "Full-Stack Clean Code Development",
      timeframe: "1 - 4 weeks",
      description:
        "Engineered with strict TypeScript, modular components, and automated tests. Weekly staging demo releases for hands-on milestone verification.",
    },
    {
      step: "04",
      title: "QA Testing, Speed & Security Audits",
      timeframe: "2 - 4 days",
      description:
        "Cross-browser and responsive testing, API penetration audits, Core Web Vitals 98+ tuning, and load resilience stress tests.",
    },
    {
      step: "05",
      title: "100% Source Handover & 12M Warranty",
      timeframe: "12 Months Warranty",
      description:
        "Complete Git ownership transfer, comprehensive admin docs, automated DNS/hosting setup, and dedicated 24/7 post-launch maintenance.",
    },
  ];

  const currentSteps = lang === "en" ? processStepsEn : processStepsVi;

  return (
    <section id="process" className="py-20 sm:py-28 bg-white dark:bg-[#0B0F19] relative border-t border-slate-200 dark:border-slate-800 transition-colors duration-200">
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
              <span>{t.process.kicker}</span>
            </div>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif text-slate-900 dark:text-white tracking-tight mb-4">
            {t.process.title} <span className="italic font-normal text-blue-600 dark:text-blue-400">{t.process.titleHighlight}</span> {t.process.titleEnd}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {t.process.subtitle}
          </p>
        </motion.div>

        {/* 5-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-5">
          {currentSteps.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white dark:bg-[#131826] rounded-2xl p-6 flex flex-col justify-between border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-[0_12px_28px_rgba(15,23,42,0.06)] dark:hover:shadow-[0_12px_28px_rgba(0,0,0,0.4)] transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-9 h-9 rounded-full bg-blue-600 dark:bg-blue-600 text-white flex items-center justify-center font-serif font-bold text-sm shadow-xs">
                    {item.step}
                  </span>
                  <span className="text-[11px] font-medium text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-[#0B0F19] px-2.5 py-1 rounded-full border border-slate-200 dark:border-slate-800 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                    {item.timeframe}
                  </span>
                </div>

                <h3 className="text-base font-serif font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{t.process.verifiedText}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
