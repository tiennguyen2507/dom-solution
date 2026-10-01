"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Star, ThumbsUp, ShieldCheck, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function TestimonialsSection() {
  const { lang, t } = useLanguage();
  const [likes, setLikes] = useState<{ [key: string]: number }>({
    "1": 34,
    "2": 29,
    "3": 42,
  });

  const testimonialsVi = [
    {
      id: "1",
      author: "Anh Trần Hoàng Long",
      role: "CEO & Founder",
      company: "FinFlow Fintech",
      quote:
        "Tikat làm việc cực kỳ chuyên nghiệp và chuẩn chỉ. Web app tài chính của chúng tôi xử lý lượng dữ liệu lớn mà biểu đồ realtime vẫn chạy mượt mà không có độ trễ. Bàn giao đúng hẹn 100%.",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
      rating: 5,
      project: "FinFlow SaaS Analytics",
    },
    {
      id: "2",
      author: "Chị Lê Phương Thảo",
      role: "Giám Đốc Marketing",
      company: "Aurora Living",
      quote:
        "Website bán hàng mới có tốc độ load cực nhanh, điểm Google PageSpeed đạt 98 điểm. Tích hợp thanh toán VNPay và MoMo giúp khách chốt đơn tự động ngay trên web mà không cần nhân viên hỗ trợ.",
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=300&q=80",
      rating: 5,
      project: "Aurora E-Commerce",
    },
    {
      id: "3",
      author: "Anh Nguyễn Tuấn Anh",
      role: "Trưởng Phòng Vận Hành",
      company: "Nexus Solutions",
      quote:
        "Hệ thống portal nội bộ do Tikat xây dựng giúp đội ngũ chúng tôi số hóa toàn bộ quy trình phê duyệt công văn và dự án. Code viết rất sạch, dễ dàng mở rộng thêm tính năng mới sau này.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
      rating: 5,
      project: "Nexus Enterprise Portal",
    },
  ];

  const testimonialsEn = [
    {
      id: "1",
      author: "Long Hoang Tran",
      role: "CEO & Founder",
      company: "FinFlow Fintech",
      quote:
        "Tikat delivers engineering of the highest caliber. Our financial telemetry web app processes massive data streams with zero chart latency. 100% on-time milestone delivery.",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
      rating: 5,
      project: "FinFlow SaaS Analytics",
    },
    {
      id: "2",
      author: "Thao Phuong Le",
      role: "Marketing Director",
      company: "Aurora Living",
      quote:
        "Our new e-commerce storefront is blazing fast with a 98 PageSpeed score. Automated payment integration streamlined our checkout flows, driving conversions up immediately.",
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=300&q=80",
      rating: 5,
      project: "Aurora E-Commerce",
    },
    {
      id: "3",
      author: "Tuan Anh Nguyen",
      role: "Head of Operations",
      company: "Nexus Solutions",
      quote:
        "The custom operations portal Tikat engineered automated all our departmental sprint approvals. The source code is impeccably structured and easy for our in-house team to scale.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
      rating: 5,
      project: "Nexus Enterprise Portal",
    },
  ];

  const currentTestimonials = lang === "en" ? testimonialsEn : testimonialsVi;

  const handleLike = (id: string) => {
    setLikes((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-slate-50/70 dark:bg-[#0B0F19] relative border-t border-slate-200 dark:border-slate-800 transition-colors duration-200">
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
              <span>{t.testimonials.kicker}</span>
            </div>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif text-slate-900 dark:text-white tracking-tight mb-4">
            {t.testimonials.title} <span className="italic font-normal text-blue-600 dark:text-blue-400">{t.testimonials.titleHighlight}</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {t.testimonials.subtitle}
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {currentTestimonials.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="bg-white dark:bg-[#131826] rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-[0_12px_32px_rgba(15,23,42,0.06)] dark:hover:shadow-[0_12px_32px_rgba(0,0,0,0.4)] transition-all duration-300"
            >
              <div>
                {/* Author Info */}
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-slate-50 dark:bg-[#0B0F19] border border-slate-200 dark:border-slate-700 shrink-0 shadow-xs">
                    <Image
                      src={item.avatar}
                      alt={item.author}
                      fill
                      className="object-cover"
                      sizes="48px"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-base text-slate-900 dark:text-white leading-snug">
                      {item.author}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {item.role} · <strong className="text-slate-700 dark:text-slate-300">{item.company}</strong>
                    </p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-semibold text-slate-900 dark:text-white ml-1.5">
                    {t.testimonials.ratingText}
                  </span>
                </div>

                {/* Quote */}
                <p className="font-serif italic text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-6 font-normal">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div>
                <div className="text-xs text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-[#0F1420] border border-slate-200 dark:border-slate-800 px-3 py-1 rounded-full mb-4 inline-block font-medium">
                  {t.testimonials.projectLabel} <strong className="text-slate-900 dark:text-white">{item.project}</strong>
                </div>

                {/* Footer */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <button
                    onClick={() => handleLike(item.id)}
                    type="button"
                    className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                  >
                    <ThumbsUp className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    <span>{t.testimonials.helpful} ({likes[item.id] || 30})</span>
                  </button>
                  <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {t.testimonials.verified}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
