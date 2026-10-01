"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { useLanguage } from "@/context/LanguageContext";
import { getFeaturedProjects } from "@/data/projectsData";
import { Zap, ArrowRight, ArrowUpRight } from "lucide-react";

export default function FeaturedShowcase() {
  const { lang } = useLanguage();
  const projects = getFeaturedProjects();

  const title = lang === "vi" ? "SẢN PHẨM NỔI BẬT" : "FEATURED PROJECTS";
  const subtitle =
    lang === "vi"
      ? "Các kiến trúc web & nền tảng công nghệ cao được doanh nghiệp thuê phát triển nhiều nhất năm 2026"
      : "Top high-performance digital products & web architectures most hired by clients in 2026";
  const viewAllText =
    lang === "vi" ? "Xem Tất Cả 20+ Dự Án 2026" : "Explore All 20+ Projects 2026";

  return (
    <section
      id="featured-showcase"
      className="relative w-full bg-[#181818] dark:bg-[#0c0d12] border-t border-b border-black/40 text-white overflow-hidden transition-colors duration-300"
    >
      {/* 1. Header Bar: Title with Red Accent Bar (Style tred.vn) */}
      <div className="pt-8 sm:pt-10 pb-6 sm:pb-8 px-4 text-center">
        <h2 className="text-xl xs:text-2xl sm:text-3xl font-extrabold uppercase tracking-[0.2em] text-white">
          {title}
        </h2>

        {/* Red accent line directly under the title */}
        <div className="w-14 sm:w-16 h-[3px] bg-[#ed2328] mx-auto mt-2.5 rounded-full shadow-xs" />

        <p className="mt-3 text-xs sm:text-sm text-slate-400 max-w-xl mx-auto font-normal px-4">
          {subtitle}
        </p>
      </div>

      {/* 2. Seamless 2x4 Edge-to-Edge Grid (8 items total) */}
      <div className="w-full grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-0.5 sm:gap-1 bg-black">
        {projects.map((item, index) => {
          const category = lang === "vi" ? item.category : item.categoryEn;

          return (
            <Link
              key={item.id}
              href={`/project/${item.id}`}
              className="block group"
            >
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="relative aspect-16/10 sm:aspect-4/3 w-full overflow-hidden bg-slate-900 cursor-pointer select-none"
              >
                {/* Background Image */}
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                />

                {/* Permanent Soft Bottom Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity duration-300" />

                {/* Default View Info (Bottom Left) */}
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 flex flex-col justify-end z-10 transition-transform duration-300 group-hover:translate-y-[-4px]">
                  <div className="inline-flex items-center gap-1.5 self-start px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-[10px] sm:text-[11px] font-medium text-blue-400 mb-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ed2328] animate-pulse" />
                    <span>{category}</span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white leading-snug line-clamp-1 group-hover:text-blue-300 transition-colors">
                    {item.name}
                  </h3>
                </div>

                {/* Hover Reveal Card Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/85 to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-between z-20">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#ed2328] text-white text-[10px] font-bold uppercase tracking-wider">
                      {item.year}
                    </span>
                    <span className="text-[11px] text-emerald-400 font-mono flex items-center gap-1">
                      <Zap className="w-3 h-3 text-emerald-400" />
                      <span>{item.metric}</span>
                    </span>
                  </div>

                  <div>
                    <div className="text-[11px] text-slate-300 font-semibold mb-1 uppercase tracking-wider text-blue-400">
                      {category}
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-white mb-2 leading-tight">
                      {item.name}
                    </h4>
                    <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed mb-3">
                      {lang === "vi" ? item.summaryVi : item.summaryEn}
                    </p>

                    <div className="flex items-center justify-between pt-2 border-t border-white/15">
                      <div className="flex flex-wrap gap-1">
                        {item.tech.slice(0, 2).map((t) => (
                          <span
                            key={t}
                            className="px-1.5 py-0.5 rounded bg-white/10 text-[10px] text-slate-300 font-mono"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-white bg-[#ed2328] hover:bg-[#d61e23] px-3 py-1 rounded-full shadow-xs transition-colors">
                        <span>{lang === "vi" ? "Xem chi tiết" : "View Details"}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          );
        })}
      </div>

      {/* 3. Bottom Action Bar: "Xem Thêm" (View All Projects) Button */}
      <div className="py-8 sm:py-10 px-4 text-center bg-[#141414] dark:bg-[#090b0e] border-t border-white/5">
        <Link
          href="/project"
          className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-[#ed2328] hover:bg-[#d61e23] text-white text-xs sm:text-sm font-bold uppercase tracking-widest shadow-[0_6px_20px_rgba(237,35,40,0.35)] hover:shadow-[0_8px_25px_rgba(237,35,40,0.5)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
        >
          <span>{viewAllText}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
        <p className="mt-2 text-[11px] text-slate-400">
          {lang === "vi"
            ? "Khám phá danh mục giải pháp SaaS, E-Commerce, 3D Booking & Web App hoàn thiện"
            : "Explore our full catalog of SaaS, E-Commerce, 3D Booking & Web App architectures"}
        </p>
      </div>
    </section>
  );
}
