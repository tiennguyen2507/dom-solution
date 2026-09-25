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
  ChevronDown,
  Calculator,
} from "lucide-react";

export default function HeroSection() {
  const techStack = [
    "Next.js 15",
    "React 19",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "PostgreSQL",
    "Supabase",
    "Docker",
  ];

  return (
    <section className="relative h-[100dvh] min-h-[100dvh] max-h-[100dvh] flex flex-col justify-between overflow-hidden bg-white">
      {/* Subtle organic background mesh lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[600px] h-[300px] sm:h-[350px] bg-blue-50/70 blur-[90px] sm:blur-[100px] rounded-full pointer-events-none -z-0" />

      {/* Main Hero Content - Vertically Centered */}
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-1 flex flex-col justify-center pt-16 sm:pt-20 lg:pt-22 pb-2 sm:pb-3 lg:pb-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 xl:gap-12 items-center">
          
          {/* Left Column: Editorial Value Proposition & CTAs */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center text-center lg:text-left">
            {/* Top Editorial Kicker */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="flex items-center justify-center lg:justify-start gap-2 mb-2.5 sm:mb-4"
            >
              <div className="kicker-pill shadow-2xs text-[11px] sm:text-xs py-1 px-3 bg-slate-100/90 text-slate-700 border-slate-200">
                <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-600" />
                <span>Studio Thiết Kế & Lập Trình Web Cao Cấp</span>
              </div>
              <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Nhận dự án 2026</span>
              </div>
            </motion.div>

            {/* Hero Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="text-[25px] xs:text-[28px] sm:text-4xl lg:text-[42px] xl:text-[48px] font-serif text-slate-900 tracking-tight leading-[1.18] sm:leading-[1.15] mb-2.5 sm:mb-4"
            >
              Kiến tạo{" "}
              <span className="italic font-serif font-normal text-blue-600">Website & Web App</span>{" "}
              chuẩn mực, nâng tầm vị thế thương hiệu.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
              className="text-xs sm:text-base text-slate-600 leading-relaxed font-normal mb-4 sm:mb-6 max-w-2xl mx-auto lg:mx-0"
            >
              Dom Solution chuyên phát triển SaaS, Web App, sàn thương mại điện tử và website doanh nghiệp độc quyền. Cam kết tốc độ tải trang &lt;0.8s, bảo hành 12 tháng và bàn giao 100% mã nguồn sạch.
            </motion.p>

            {/* Dual CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.24, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-2.5 sm:gap-3.5 mb-4 sm:mb-6 max-w-md mx-auto lg:mx-0 w-full"
            >
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#consultation"
                className="btn-primary text-xs sm:text-sm py-2.5 sm:py-3 px-5 sm:px-6 shadow-sm justify-center"
              >
                <span>Nhận Tư Vấn & Báo Giá</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#calculator"
                className="btn-secondary text-xs sm:text-sm py-2.5 sm:py-3 px-5 sm:px-6 shadow-2xs flex items-center justify-center gap-2"
              >
                <Calculator className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-500" />
                <span>Dự Toán Chi Phí Tự Động</span>
              </motion.a>
            </motion.div>

            {/* Trust Proof Badges Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-y-1.5 gap-x-3 sm:gap-x-5 text-[11px] sm:text-xs text-slate-600 pt-0.5"
            >
              <div className="flex items-center gap-1">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-slate-900 ml-0.5">5.0 / 5.0</span>
                <span className="text-slate-500">(50+ dự án)</span>
              </div>
              <span className="text-slate-300">·</span>
              <div className="flex items-center gap-1 text-slate-700">
                <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600 shrink-0" />
                <span>100% Mã nguồn độc quyền</span>
              </div>
              <span className="hidden xs:inline text-slate-300">·</span>
              <div className="hidden xs:flex items-center gap-1 text-slate-700">
                <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-600 shrink-0" />
                <span>Bàn giao đúng tiến độ</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Modern Showcase Card Frame (Desktop/Laptop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block lg:col-span-5 xl:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white p-2.5 xl:p-3 shadow-[0_20px_50px_-15px_rgba(15,23,42,0.08)]">
              {/* Browser Header Bar */}
              <div className="flex items-center justify-between px-2 pb-2 mb-1.5 border-b border-slate-100 text-[11px] text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
                </div>
                <div className="px-2.5 py-0.5 rounded-md bg-slate-50 border border-slate-200 text-[10px] font-mono text-slate-600">
                  domsolution.vn/architecture
                </div>
                <div className="w-8" />
              </div>

              {/* Showcase Image */}
              <div className="relative aspect-4/3 w-full rounded-xl overflow-hidden bg-slate-50">
                <Image
                  src={heroAsset}
                  alt="Dom Solution Studio Workspace & Web Development Architecture"
                  fill
                  priority
                  className="object-cover object-top hover:scale-[1.02] transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating Trust Card Top-Right */}
              <motion.div
                animate={{ y: [-2, 3, -2] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 right-5 flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-md"
              >
                <div className="w-7 h-7 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0">
                  <Zap className="w-3.5 h-3.5" />
                </div>
                <div className="text-left">
                  <div className="text-[11px] font-bold text-slate-900 leading-tight">Tải Trang &lt; 0.8s</div>
                  <div className="text-[10px] text-slate-500 leading-tight">Core Web Vitals 98+</div>
                </div>
              </motion.div>

              {/* Floating Trust Card Bottom-Left */}
              <motion.div
                animate={{ y: [3, -2, 3] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-6 left-5 flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-md"
              >
                <div className="w-7 h-7 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <div className="text-left">
                  <div className="text-[11px] font-bold text-slate-900 leading-tight">Bảo Hành 12 Tháng</div>
                  <div className="text-[10px] text-slate-500 leading-tight">Hỗ trợ kỹ thuật 24/7</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Hero Bar: Tech Stack + Scroll Cue (Anchored neatly) */}
      <div className="relative z-10 border-t border-slate-200 bg-white/90 backdrop-blur-xs py-2 sm:py-3">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 text-xs">
          {/* Tech Stack Pills */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto max-w-full no-scrollbar py-0.5">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-500 font-semibold shrink-0 mr-1 hidden sm:inline">
              Công nghệ:
            </span>
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 sm:px-2.5 py-0.5 sm:py-0.8 rounded-full text-[10px] sm:text-[11px] font-medium bg-slate-50 text-slate-700 border border-slate-200 shrink-0 hover:border-blue-300 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Scroll Down Hint */}
          <a
            href="#portfolio"
            className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-medium text-slate-500 hover:text-blue-600 transition-colors shrink-0 ml-auto sm:ml-0"
          >
            <span>Dự án</span>
            <ChevronDown className="w-3 h-3 sm:w-3.5 sm:h-3.5 animate-bounce text-blue-600" />
          </a>
        </div>
      </div>
    </section>
  );
}


