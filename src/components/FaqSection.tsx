"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function FaqSection() {
  const { lang, t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqVi = [
    {
      question: "Tôi có được sở hữu 100% mã nguồn (Source Code) sau khi hoàn thành không?",
      answer:
        "Có, 100%. Tikat bàn giao toàn bộ mã nguồn trên kho lưu trữ Git (GitHub/GitLab) của chính bạn, cùng toàn bộ quyền quản trị Database, Server và tên miền. Bạn hoàn toàn độc lập và toàn quyền sử dụng, phát triển thêm.",
    },
    {
      question: "Thời gian phát triển một dự án Website hoặc Web App thường mất bao lâu?",
      answer:
        "Tùy vào quy mô và độ phức tạp: Landing page hoặc Website doanh nghiệp thường hoàn thành trong 7 - 14 ngày; Các ứng dụng Web App, SaaS, sàn E-Commerce thường từ 3 - 6 tuần. Chúng tôi luôn có cam kết tiến độ rõ ràng trong hợp đồng.",
    },
    {
      question: "Chế độ bảo hành và hỗ trợ sau khi bàn giao dự án như thế nào?",
      answer:
        "Mọi dự án đều được bảo hành kỹ thuật miễn phí 12 tháng, cam kết sửa lỗi phát sinh trong vòng 24h. Ngoài ra, Tikat có gói bảo trì định kỳ, nâng cấp tính năng mới và theo dõi an ninh hệ thống liên tục.",
    },
    {
      question: "Quy trình thanh toán cho dự án Freelance diễn ra như thế nào?",
      answer:
        "Thanh toán được chia thành các đợt theo từng mốc tiến độ rõ ràng (Milestone): Đợt 1 (30%) khi ký hợp đồng & chốt yêu cầu; Đợt 2 (40%) khi hoàn thành bản Demo chức năng chính; Đợt 3 (30%) sau khi kiểm thử, bàn giao mã nguồn & nghiệm thu.",
    },
    {
      question: "Tikat sử dụng những công nghệ và ngôn ngữ lập trình nào?",
      answer:
        "Chúng tôi chuyên sâu về hệ sinh thái hiện đại: Frontend với Next.js 15, React 19, TypeScript, Tailwind CSS; Backend với Node.js, Express, NestJS, Python; Database với PostgreSQL, Supabase, Firebase, Redis; Triển khai trên Vercel, AWS, Google Cloud và Docker.",
    },
  ];

  const faqEn = [
    {
      question: "Do I retain 100% ownership of the source code upon delivery?",
      answer:
        "Yes, absolutely 100%. Tikat transfers complete ownership of the private Git repository (GitHub/GitLab), full database administration rights, cloud hosting keys, and domains directly to your account. Zero vendor lock-in.",
    },
    {
      question: "How long does it typically take to develop a Web App or Website?",
      answer:
        "It depends on the complexity: High-converting landing pages or corporate websites take 7 - 14 days; Complex SaaS web apps, multi-tenant portals, or e-commerce platforms take 3 - 6 weeks with clear milestone timelines agreed upfront.",
    },
    {
      question: "What is your warranty policy and post-launch technical support?",
      answer:
        "Every project comes with a complimentary 12-month technical warranty. Any functional bugs are patched within 24 hours. We also provide ongoing maintenance, feature expansion, and security monitoring retainer plans.",
    },
    {
      question: "What is the milestone-based payment schedule?",
      answer:
        "Payments are tied directly to verifiable delivery milestones: Milestone 1 (30%) upon agreement & architecture sign-off; Milestone 2 (40%) upon staging interactive demo delivery; Milestone 3 (30%) upon final QA, source code transfer, and deployment.",
    },
    {
      question: "Which modern tech stack and infrastructure do you utilize?",
      answer:
        "We specialize in modern, battle-tested full-stack stacks: Next.js 15, React 19, TypeScript, Tailwind CSS on the frontend; Node.js, NestJS, Python on the backend; PostgreSQL, Supabase, Redis for data; deployed securely on Vercel, AWS, GCP, and Cloudflare.",
    },
  ];

  const currentFaq = lang === "en" ? faqEn : faqVi;

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-slate-50/70 dark:bg-[#0B0F19] relative border-t border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <span>{t.faq.kicker}</span>
            </div>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif text-slate-900 dark:text-white tracking-tight mb-4">
            {t.faq.title} <span className="italic font-normal text-blue-600 dark:text-blue-400">{t.faq.titleHighlight}</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {t.faq.subtitle}
          </p>
        </motion.div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5 sm:space-y-4">
          {currentFaq.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="bg-white dark:bg-[#131826] rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-colors shadow-2xs"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  type="button"
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-serif font-bold text-base sm:text-lg text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs font-serif font-bold shrink-0">
                      ?
                    </span>
                    <span>{item.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 dark:text-slate-500 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-blue-600 dark:text-blue-400" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-[#131826]">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
