"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { Award, CheckCircle2, Star, Zap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function StatsBanner() {
  const { lang, t } = useLanguage();
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const cardConfigs = [
    {
      icon: Award,
      badgeVi: "Kinh nghiệm thực chiến",
      badgeEn: "Proven Track Record",
      badgeColor: "text-amber-400 bg-amber-400/10 border-amber-400/20",
      accentBorder: "group-hover:border-amber-500/50",
      accentGlow: "rgba(245, 158, 11, 0.12)",
      gradientNumber: "from-amber-200 via-white to-amber-400",
      barGradient: "from-amber-500 via-orange-400 to-amber-300",
      iconColor: "text-amber-400",
      iconBg: "bg-amber-500/10 border-amber-500/20",
    },
    {
      icon: CheckCircle2,
      badgeVi: "Bàn giao đúng hạn",
      badgeEn: "100% On-Time",
      badgeColor: "text-blue-400 bg-blue-400/10 border-blue-400/20",
      accentBorder: "group-hover:border-blue-500/50",
      accentGlow: "rgba(59, 130, 246, 0.12)",
      gradientNumber: "from-blue-200 via-white to-blue-400",
      barGradient: "from-blue-500 via-cyan-400 to-blue-300",
      iconColor: "text-blue-400",
      iconBg: "bg-blue-500/10 border-blue-500/20",
    },
    {
      icon: Star,
      badgeVi: "Đánh giá 5.0 / 5.0",
      badgeEn: "5.0 / 5.0 Rating",
      badgeColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
      accentBorder: "group-hover:border-emerald-500/50",
      accentGlow: "rgba(16, 185, 129, 0.12)",
      gradientNumber: "from-emerald-200 via-white to-emerald-400",
      barGradient: "from-emerald-500 via-teal-400 to-emerald-300",
      iconColor: "text-emerald-400",
      iconBg: "bg-emerald-500/10 border-emerald-500/20",
    },
    {
      icon: Zap,
      badgeVi: "Core Web Vitals 98+",
      badgeEn: "PageSpeed 98+",
      badgeColor: "text-purple-400 bg-purple-400/10 border-purple-400/20",
      accentBorder: "group-hover:border-purple-500/50",
      accentGlow: "rgba(168, 85, 247, 0.12)",
      gradientNumber: "from-purple-200 via-white to-purple-400",
      barGradient: "from-purple-500 via-fuchsia-400 to-purple-300",
      iconColor: "text-purple-400",
      iconBg: "bg-purple-500/10 border-purple-500/20",
    },
  ];

  return (
    <section className="relative py-10 sm:py-14 lg:py-16 bg-[#0a0d14] dark:bg-[#07090e] text-white border-y border-white/10 overflow-hidden transition-colors duration-300">
      
      {/* 1. Ambient Background Lighting Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[300px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute -top-24 right-10 w-72 h-72 bg-purple-600/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-24 left-10 w-72 h-72 bg-emerald-600/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Subtle organic grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 2. Exactly 4 Premium Stats Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {t.stats.items.map((stat, idx) => {
            const config = cardConfigs[idx % cardConfigs.length];
            const Icon = config.icon;
            const badge = lang === "vi" ? config.badgeVi : config.badgeEn;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`group relative rounded-2xl sm:rounded-3xl p-6 sm:p-7 bg-[#121622]/90 backdrop-blur-xl border border-white/10 ${config.accentBorder} shadow-[0_10px_30px_-5px_rgba(0,0,0,0.5)] transition-all duration-300 overflow-hidden flex flex-col justify-between`}
              >
                {/* Dynamic Mouse Spotlight Glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl sm:rounded-3xl"
                  style={{
                    background: `radial-gradient(circle at 50% 20%, ${config.accentGlow} 0%, transparent 70%)`,
                  }}
                />

                {/* Top Row: Icon + Micro Pill Badge */}
                <div className="relative z-10 flex items-center justify-between gap-2 mb-6">
                  {/* Glowing Icon Container */}
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center border shadow-xs transition-transform duration-300 group-hover:scale-110 ${config.iconBg} ${config.iconColor}`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Micro Pill Badge */}
                  <div
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold border ${config.badgeColor}`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                    <span>{badge}</span>
                  </div>
                </div>

                {/* Center: Big Bold Gradient Number Display */}
                <div className="relative z-10 mb-4">
                  <div
                    className={`text-4xl sm:text-5xl lg:text-[52px] font-extrabold tracking-tight font-sans bg-clip-text text-transparent bg-gradient-to-b ${config.gradientNumber} leading-none tabular-nums drop-shadow-sm`}
                  >
                    {stat.value}
                  </div>
                </div>

                {/* Bottom: Label & Sublabel */}
                <div className="relative z-10">
                  <div className="text-sm sm:text-[15px] font-bold text-white group-hover:text-blue-300 transition-colors mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-slate-400 font-normal leading-snug">
                    {stat.sublabel}
                  </div>
                </div>

                {/* Bottom Border Accent Sheen Line on Hover */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r ${config.barGradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
