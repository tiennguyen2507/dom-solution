"use client";

import React from "react";
import Image from "next/image";
import { heroAsset } from "@/data/domSolutionData";
import {
  ShieldCheck,
  Zap,
  Code2,
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  Sparkles,
  Terminal,
  Cpu,
  Layers,
  Star,
  ExternalLink,
} from "lucide-react";

export default function HeroSection() {
  const techStack = [
    { name: "Next.js 15", color: "from-blue-500 to-cyan-400" },
    { name: "React 19", color: "from-cyan-400 to-teal-300" },
    { name: "TypeScript", color: "from-blue-600 to-indigo-500" },
    { name: "Tailwind CSS", color: "from-sky-400 to-blue-500" },
    { name: "Node.js API", color: "from-emerald-500 to-teal-400" },
    { name: "Supabase & PG", color: "from-green-400 to-emerald-600" },
    { name: "Gemini AI", color: "from-purple-500 to-pink-500" },
  ];

  return (
    <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden bg-[#07090E]">
      {/* Background Ambient Glows */}
      <div className="glow-blue top-10 left-1/4 -translate-x-1/2" />
      <div className="glow-purple top-32 right-10" />
      <div className="glow-cyan bottom-10 left-10" />

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container max-w-7xl relative z-10 px-4 sm:px-6">
        {/* Top Tagline Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-blue-500/30 text-xs sm:text-sm font-semibold text-blue-300 shadow-xl backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>STUDIO LẬP TRÌNH FREELANCE FULL-STACK · NEXT.JS 15 & REACT 19</span>
          </div>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
            Biến Ý Tưởng Thành{" "}
            <span className="text-gradient">Web Application</span> Tốc Độ Cao & Doanh Thu Đột Phá
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto">
            Dom Solution chuyên thiết kế kiến trúc, lập trình trọn gói các hệ thống <strong className="text-white font-semibold">SaaS Platform, Web App, Sàn E-Commerce & Website Doanh Nghiệp</strong> với chuẩn PageSpeed 98+, tối ưu trải nghiệm và bàn giao toàn bộ mã nguồn Git.
          </p>
        </div>

        {/* Dual Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href="#calculator"
            className="btn-gradient-primary w-full sm:w-auto text-base py-3.5 px-8"
          >
            <Zap className="w-5 h-5 text-amber-300" />
            <span>Dự Toán Chi Phí & Tiến Độ</span>
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#portfolio"
            className="btn-glass w-full sm:w-auto text-base py-3.5 px-8"
          >
            <span>Khám Phá 25+ Dự Án Thực Tế</span>
          </a>
        </div>

        {/* Key Selling Highlights Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto mb-16">
          <div className="glass-card-interactive p-4 text-center border border-white/10">
            <div className="text-blue-400 font-bold text-base sm:text-lg flex items-center justify-center gap-1.5 mb-1">
              <ShieldCheck className="w-5 h-5 text-blue-400" />
              <span>100% Full Source</span>
            </div>
            <p className="text-xs text-slate-400">Bàn giao toàn bộ Git & Mã nguồn</p>
          </div>

          <div className="glass-card-interactive p-4 text-center border border-white/10">
            <div className="text-emerald-400 font-bold text-base sm:text-lg flex items-center justify-center gap-1.5 mb-1">
              <Zap className="w-5 h-5 text-emerald-400" />
              <span>Tải trang &lt;0.8s</span>
            </div>
            <p className="text-xs text-slate-400">PageSpeed 95+ Mobile & Desktop</p>
          </div>

          <div className="glass-card-interactive p-4 text-center border border-white/10">
            <div className="text-purple-400 font-bold text-base sm:text-lg flex items-center justify-center gap-1.5 mb-1">
              <CheckCircle2 className="w-5 h-5 text-purple-400" />
              <span>Bảo Hành 12 Tháng</span>
            </div>
            <p className="text-xs text-slate-400">Hỗ trợ kỹ thuật & Vận hành 24/7</p>
          </div>

          <div className="glass-card-interactive p-4 text-center border border-white/10">
            <div className="text-amber-400 font-bold text-base sm:text-lg flex items-center justify-center gap-1.5 mb-1">
              <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
              <span>5.0 / 5.0 Rating</span>
            </div>
            <p className="text-xs text-slate-400">Được tin tưởng bởi 45+ Startup</p>
          </div>
        </div>

        {/* Live IDE / Studio Showcase Visual Box */}
        <div className="max-w-5xl mx-auto relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500" />
          
          <div className="relative glass-card overflow-hidden border border-white/15 bg-slate-950/90 shadow-2xl">
            {/* Window Header */}
            <div className="px-4 py-3 bg-slate-900/90 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-xs text-slate-400 font-mono ml-2">dom-solution-architecture.ts</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>Next.js Turbopack · Running</span>
              </div>
            </div>

            {/* Code / Visual Window */}
            <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
              {/* Code Snippet Side */}
              <div className="md:col-span-6 p-6 font-mono text-xs sm:text-sm text-slate-300 space-y-3 bg-slate-950/60 border-r border-white/10">
                <div className="text-slate-500">// 🚀 Dom Solution - Core Architecture</div>
                <div>
                  <span className="text-purple-400">export const</span>{" "}
                  <span className="text-blue-400">projectStack</span> = {"{"}
                </div>
                <div className="pl-4">
                  <span className="text-cyan-300">framework</span>: <span className="text-emerald-400">&quot;Next.js 15 App Router&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-cyan-300">performance</span>: <span className="text-amber-400">&quot;Core Web Vitals 99+&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-cyan-300">security</span>: <span className="text-emerald-400">&quot;RBAC & Enterprise Auth&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-cyan-300">delivery</span>: <span className="text-purple-300">&quot;100% Full Source Code Git&quot;</span>
                </div>
                <div>{"};"}</div>
                <div className="pt-2 text-emerald-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Ready to build your next web application!</span>
                </div>
              </div>

              {/* Preview Image Side */}
              <div className="md:col-span-6 relative min-h-[220px] bg-slate-900 overflow-hidden">
                <Image
                  src={heroAsset}
                  alt="Dom Solution High-End Workstation"
                  fill
                  priority
                  className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 600px"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/80 backdrop-blur-md p-3 rounded-xl border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-semibold text-white">
                    <Cpu className="w-4 h-4 text-cyan-400" />
                    <span>Lập trình theo tiêu chuẩn Scalable</span>
                  </div>
                  <span className="text-xs bg-blue-600/80 text-white px-2 py-0.5 rounded font-mono">
                    PRO
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Pill Bar */}
        <div className="mt-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
            CÔNG NGHỆ CHÍNH ĐƯỢC ÁP DỤNG TRONG CÁC DỰ ÁN
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {techStack.map((tech) => (
              <span
                key={tech.name}
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-slate-900/80 text-slate-200 border border-white/10 shadow-sm"
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
