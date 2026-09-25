"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { heroAsset } from "@/data/domSolutionData";
import {
  ShieldCheck,
  Zap,
  ArrowRight,
  Star,
  CheckCircle2,
  Clock,
  Sparkles,
} from "lucide-react";

export default function HeroSection() {
  const techStack = [
    "Next.js 15",
    "React 19",
    "TypeScript",
    "Tailwind CSS",
    "Node.js API",
    "PostgreSQL",
    "Supabase",
    "Docker",
  ];

  return (
    <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden bg-[#FAF8F5]">
      {/* Subtle organic background mesh lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Editorial Kicker */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex justify-center mb-5 sm:mb-6"
        >
          <div className="kicker-pill shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#8C7A58]" />
            <span>Studio Thiết Kế & Phát Triển Web Cao Cấp</span>
          </div>
        </motion.div>

        {/* Hero Editorial Heading */}
        <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#18181B] tracking-tight leading-[1.18] sm:leading-[1.15] mb-4 sm:mb-6"
          >
            Kiến tạo <span className="italic font-normal">Website & Web App</span> chuẩn mực, nâng tầm vị thế thương hiệu.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm sm:text-lg text-[#52525B] leading-relaxed max-w-2xl mx-auto font-normal"
          >
            Dom Solution cung cấp dịch vụ thiết kế kiến trúc và phát triển phần mềm trọn gói: SaaS, Web App, sàn thương mại điện tử và website doanh nghiệp với tốc độ tải trang &lt;0.8s, bảo hành 12 tháng và bàn giao toàn bộ mã nguồn.
          </motion.p>
        </div>

        {/* Dual Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12"
        >
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#consultation"
            className="btn-primary w-full sm:w-auto text-sm py-3 px-7"
          >
            <span>Nhận Tư Vấn & Báo Giá</span>
            <ArrowRight className="w-4 h-4" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#calculator"
            className="btn-secondary w-full sm:w-auto text-sm py-3 px-7"
          >
            <span>Dự Toán Chi Phí Tự Động</span>
          </motion.a>
        </motion.div>

        {/* Client Rating & Social Proof Line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-[#71717A] mb-12 sm:mb-16"
        >
          <div className="flex items-center gap-1">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-semibold text-[#18181B] ml-1">5.0 / 5.0</span>
            <span>(Hơn 50+ dự án hoàn thành)</span>
          </div>
          <span className="hidden sm:inline text-[#DCD9D0]">·</span>
          <div className="flex items-center gap-1.5 text-[#4A4A45]">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>100% Mã nguồn sạch & Độc quyền</span>
          </div>
          <span className="hidden sm:inline text-[#DCD9D0]">·</span>
          <div className="flex items-center gap-1.5 text-[#4A4A45]">
            <Clock className="w-3.5 h-3.5 text-blue-600" />
            <span>Bàn giao đúng hạn theo hợp đồng</span>
          </div>
        </motion.div>

        {/* Showcase Image Frame with Editorial Framing */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl mx-auto relative"
        >
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E5E1D8] bg-white p-2 sm:p-3 shadow-[0_20px_60px_-15px_rgba(26,26,24,0.08)]">
            <div className="relative aspect-16/10 sm:aspect-16/9 w-full rounded-xl sm:rounded-2xl overflow-hidden bg-[#FAF8F5]">
              <Image
                src={heroAsset}
                alt="Dom Solution Studio Workspace & Web Development Architecture"
                fill
                priority
                className="object-cover object-top hover:scale-[1.01] transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Floating Trust Card Top-Right with Continuous Float Effect */}
            <motion.div
              animate={{ y: [-3, 3, -3] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="hidden sm:flex absolute top-6 right-6 items-center gap-3 px-4 py-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-[#E8E6DF] shadow-md"
            >
              <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
                <Zap className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-[#18181B]">Tốc Độ Tải Trang &lt; 0.8s</div>
                <div className="text-[11px] text-[#71717A]">Core Web Vitals 98/100</div>
              </div>
            </motion.div>

            {/* Floating Trust Card Bottom-Left with Continuous Float Effect */}
            <motion.div
              animate={{ y: [3, -3, 3] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="hidden sm:flex absolute bottom-6 left-6 items-center gap-3 px-4 py-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-[#E8E6DF] shadow-md"
            >
              <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-[#18181B]">Bảo Hành 12 Tháng</div>
                <div className="text-[11px] text-[#71717A]">Hỗ trợ kỹ thuật 24/7</div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Tech Stack Subtle Pills */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 sm:mt-14 max-w-4xl mx-auto text-center"
        >
          <div className="text-xs uppercase tracking-wider text-[#8C8C85] font-semibold mb-3">
            Hạ Tầng Công Nghệ Hiện Đại & Ổn Định
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {techStack.map((tech, idx) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                whileHover={{ y: -2 }}
                className="px-3 py-1 rounded-full text-xs font-medium bg-white text-[#4A4A45] border border-[#E8E6DF] shadow-xs cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

