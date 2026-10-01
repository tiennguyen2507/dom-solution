"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { heroAsset } from "@/data/tikatData";
import { useLanguage } from "@/context/LanguageContext";
import {
  Zap,
  ShieldCheck,
  Code2,
  ArrowRight,
  Calculator,
  Star,
  Sparkles,
} from "lucide-react";

export default function HeroSection() {
  const { t } = useLanguage();

  const socialAvatars = [
    {
      src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80",
      alt: "Client review",
    },
    {
      src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=120&q=80",
      alt: "Client review",
    },
    {
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
      alt: "Client review",
    },
  ];

  return (
    <section className="relative w-full min-h-[100dvh] lg:h-[100dvh] lg:max-h-[100dvh] flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#eaf2fc] via-[#f3f7fd] to-[#e4eefb] dark:from-[#090D16] dark:via-[#0F172A] dark:to-[#0B101D] transition-colors duration-300">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-1/4 w-[500px] lg:w-[700px] h-[350px] lg:h-[450px] bg-blue-100/60 dark:bg-blue-900/10 blur-[100px] rounded-full pointer-events-none -z-0" />
      <div className="absolute top-12 left-10 w-[350px] h-[350px] bg-sky-100/50 dark:bg-sky-950/20 blur-[90px] rounded-full pointer-events-none -z-0" />

      {/* Main Full-Width Content Row (No container constraint) */}
      <div className="w-full flex-1 flex flex-col justify-center px-6 sm:px-10 lg:px-14 xl:px-20 2xl:px-24 pt-20 sm:pt-24 lg:pt-24 pb-4 relative z-10">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center">
          
          {/* Left Column: Typography, Subtitle & Action Row */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center text-left">
            {/* Editorial Kicker Pill */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="flex items-center gap-2 mb-3 sm:mb-4"
            >
              <div className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full bg-white/80 dark:bg-[#161C2C]/90 border border-slate-200/80 dark:border-slate-800 text-[11px] sm:text-xs font-semibold text-slate-700 dark:text-slate-300 shadow-2xs backdrop-blur-xs">
                <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>{t.hero.kicker}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-400 text-[11px] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>{t.hero.bookingStatus}</span>
              </div>
            </motion.div>

            {/* Main Headline with ProSurance Typography Impact */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="text-[32px] xs:text-[38px] sm:text-[46px] lg:text-[48px] xl:text-[56px] 2xl:text-[62px] font-extrabold text-[#111827] dark:text-white tracking-[-0.035em] leading-[1.1] mb-4 sm:mb-5"
            >
              {t.hero.titleMain}{" "}
              <span className="italic font-serif font-normal text-blue-600 dark:text-blue-400">
                {t.hero.titleHighlight}
              </span>{" "}
              {t.hero.titleEnd}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="text-xs sm:text-sm lg:text-[15px] xl:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-2xl mb-6 sm:mb-7"
            >
              {t.hero.subtitle}
            </motion.p>

            {/* Action Row: Dark Pill Button + Cost Calculator + Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-4 sm:gap-6"
            >
              {/* Primary CTA (Black pill button) */}
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#consultation"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#18191c] hover:bg-black text-white text-xs sm:text-[13px] font-bold tracking-wider uppercase shadow-[0_4px_14px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.25)] transition-all duration-200"
              >
                <span>{t.hero.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              {/* Secondary CTA (Calculator pill) */}
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#calculator"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-white/90 dark:bg-[#161C2C] hover:bg-white text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800 text-xs sm:text-[13px] font-semibold shadow-2xs transition-all duration-200"
              >
                <Calculator className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                <span>{t.hero.ctaSecondary}</span>
              </motion.a>

              {/* Social Proof Group (Avatars + Star Rating) */}
              <div className="flex items-center gap-3 pl-1">
                <div className="flex -space-x-2.5 overflow-hidden">
                  {socialAvatars.map((item, index) => (
                    <div
                      key={index}
                      className="inline-block relative w-8 h-8 rounded-full ring-2 ring-white dark:ring-slate-900 overflow-hidden shadow-xs shrink-0"
                    >
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        sizes="32px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>

                <div className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 leading-tight">
                  <div className="flex items-center gap-1">
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="font-bold text-slate-900 dark:text-white ml-0.5">
                      {t.hero.ratingValue}
                    </span>
                  </div>
                  <div className="text-slate-500 dark:text-slate-400 text-[10px] sm:text-[11px] mt-0.5">
                    {t.hero.ratingProjects}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Original Image framed in ProSurance Arch Backdrop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-end relative"
          >
            <div className="relative w-full max-w-[440px] sm:max-w-[480px] lg:max-w-[520px] flex items-end justify-center">
              
              {/* ProSurance-style Soft Arched Silhouette Backdrop */}
              <div className="absolute bottom-0 w-[88%] sm:w-[90%] h-[85%] sm:h-[88%] rounded-t-[180px] sm:rounded-t-[220px] bg-white/75 dark:bg-white/5 border border-white/80 dark:border-white/10 backdrop-blur-xs shadow-[0_20px_50px_rgba(0,0,0,0.03)] -z-0" />

              {/* Faint ambient light glow */}
              <div className="absolute top-10 right-4 w-20 h-20 rounded-full bg-white/60 dark:bg-white/10 blur-xl pointer-events-none z-10" />

              {/* Original Workspace & Web Development Architecture Image */}
              <div className="relative z-10 w-full aspect-4/3 sm:aspect-[1.18/1] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-white/60 dark:border-slate-800/80 hover:scale-[1.015] transition-transform duration-500 bg-slate-100 dark:bg-[#131826]">
                <Image
                  src={heroAsset}
                  alt="Tikat Studio Workspace & Web Development Architecture"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 550px"
                  className="object-cover object-top"
                  referrerPolicy="no-referrer"
                />

                {/* Floating Micro Badge inside Image (Top Right) */}
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/95 dark:bg-[#161C2C]/95 backdrop-blur-md border border-slate-200/80 dark:border-slate-700 shadow-md text-[10px] font-mono text-slate-600 dark:text-slate-300">
                  tikat.com/architecture
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Floating Feature Bar (Full-Width Bleed Card with 3 Columns) */}
      <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-20 2xl:px-24 pb-4 sm:pb-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.28, ease: "easeOut" }}
          className="w-full rounded-2xl sm:rounded-3xl bg-white/95 dark:bg-[#161C2C]/95 backdrop-blur-md shadow-[0_12px_36px_rgba(0,0,0,0.06)] dark:shadow-[0_12px_36px_rgba(0,0,0,0.35)] border border-white/80 dark:border-slate-800/80 px-6 sm:px-10 lg:px-12 py-3.5 sm:py-4.5"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100 dark:divide-slate-800/90 gap-4 md:gap-0">
            
            {/* 1. Tốc Độ Vượt Trội (Commitment to Performance) */}
            <div className="flex items-center gap-3.5 sm:gap-4 md:pr-6 lg:pr-8 pt-1.5 md:pt-0">
              <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0 text-slate-900 dark:text-white shadow-2xs">
                <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="text-left">
                <h2 className="text-sm sm:text-[15px] font-bold text-slate-900 dark:text-white leading-tight">
                  {t.hero.cardSpeed}
                </h2>
                <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 leading-snug mt-0.5">
                  {t.hero.cardSpeedSub}
                </p>
              </div>
            </div>

            {/* 2. Bảo Hành Dài Hạn (Integrity & Guarantee) */}
            <div className="flex items-center gap-3.5 sm:gap-4 md:px-6 lg:px-8 pt-3 md:pt-0">
              <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0 text-slate-900 dark:text-white shadow-2xs">
                <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div className="text-left">
                <h2 className="text-sm sm:text-[15px] font-bold text-slate-900 dark:text-white leading-tight">
                  {t.hero.cardWarranty}
                </h2>
                <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 leading-snug mt-0.5">
                  {t.hero.cardWarrantySub}
                </p>
              </div>
            </div>

            {/* 3. Mã Nguồn Độc Quyền (Transparency & Quality) */}
            <div className="flex items-center gap-3.5 sm:gap-4 md:pl-6 lg:pl-8 pt-3 md:pt-0">
              <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0 text-slate-900 dark:text-white shadow-2xs">
                <Code2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div className="text-left">
                <h2 className="text-sm sm:text-[15px] font-bold text-slate-900 dark:text-white leading-tight">
                  {t.hero.badgeCode}
                </h2>
                <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 leading-snug mt-0.5">
                  {t.hero.badgeTime}
                </p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
