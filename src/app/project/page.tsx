"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { useLanguage } from "@/context/LanguageContext";
import { getAllProjects } from "@/data/projectsData";
import {
  Search,
  Filter,
  ArrowRight,
  ArrowUpRight,
  Zap,
  Sparkles,
  ChevronRight,
  Home,
  CheckCircle2,
  PhoneCall,
  MessageSquare,
} from "lucide-react";

export default function AllProjectsPage() {
  const { lang } = useLanguage();
  const allProjects = getAllProjects();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", labelVi: "Tất Cả (20)", labelEn: "All (20)" },
    { id: "saas", labelVi: "SaaS & AI", labelEn: "SaaS & AI" },
    { id: "ecommerce", labelVi: "Sàn TMĐT D2C", labelEn: "E-Commerce" },
    { id: "fintech", labelVi: "Fintech & B2B", labelEn: "Fintech" },
    { id: "hospitality", labelVi: "Khách Sạn & 3D", labelEn: "Hospitality" },
    { id: "healthcare", labelVi: "Y Tế & Clinic", labelEn: "Healthcare" },
    { id: "edtech", labelVi: "Giáo Dục & LMS", labelEn: "EdTech" },
    { id: "fnb", labelVi: "F&B Chuỗi & Bar", labelEn: "F&B Chain" },
    { id: "realestate", labelVi: "Bất Động Sản", labelEn: "Real Estate" },
  ];

  const filteredProjects = useMemo(() => {
    return allProjects.filter((item) => {
      // Search filter
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.categoryEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        item.summaryVi.toLowerCase().includes(searchQuery.toLowerCase());

      if (!matchesSearch) return false;

      if (selectedCategory === "all") return true;
      if (selectedCategory === "saas")
        return (
          item.category.includes("SaaS") ||
          item.category.includes("AI") ||
          item.category.includes("ESG") ||
          item.category.includes("Bảo Mật")
        );
      if (selectedCategory === "ecommerce")
        return (
          item.category.includes("TMĐT") ||
          item.category.includes("Mỹ Phẩm") ||
          item.category.includes("Vé")
        );
      if (selectedCategory === "fintech")
        return (
          item.category.includes("Fintech") ||
          item.category.includes("Web3") ||
          item.category.includes("Logistics")
        );
      if (selectedCategory === "hospitality")
        return item.category.includes("Khách Sạn") || item.category.includes("3D");
      if (selectedCategory === "healthcare")
        return item.category.includes("Y Tế") || item.category.includes("Thú Y");
      if (selectedCategory === "edtech")
        return item.category.includes("Giáo Dục") || item.category.includes("Nhân Sự");
      if (selectedCategory === "fnb")
        return item.category.includes("F&B") || item.category.includes("Bếp Ảo");
      if (selectedCategory === "realestate")
        return (
          item.category.includes("Bất Động Sản") ||
          item.category.includes("Năng Lượng") ||
          item.category.includes("Luật")
        );

      return true;
    });
  }, [allProjects, searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0B0F19] text-slate-900 dark:text-slate-100 transition-colors duration-300 pt-24 sm:pt-28 pb-16">
      
      {/* 1. Header & Breadcrumbs */}
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-6">
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>{lang === "vi" ? "Trang chủ" : "Home"}</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-800 dark:text-slate-200 font-semibold">
            {lang === "vi" ? "Dự án tiêu biểu 2026" : "Featured Projects 2026"}
          </span>
        </nav>

        {/* Page Title & Tagline */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-[#161C2C] border border-blue-200/80 dark:border-blue-900/60 text-blue-700 dark:text-blue-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === "vi" ? "Danh Mục Dự Án Đang Hot 2026" : "Trending 2026 Projects"}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-4">
            {lang === "vi" ? (
              <>
                Các Dự Án Website & Web App{" "}
                <span className="text-blue-600 dark:text-blue-400">Khách Hàng Thuê Nhiều Nhất</span>
              </>
            ) : (
              <>
                High-Performance Web Solutions{" "}
                <span className="text-blue-600 dark:text-blue-400">Most Hired in 2026</span>
              </>
            )}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            {lang === "vi"
              ? "Tổng hợp 20+ kiến trúc số hóa thực tế, từ SaaS AI, Sàn thương mại điện tử D2C đến hệ thống đặt phòng 3D và portal quản trị nội bộ. Bàn giao 100% full source code sạch và bảo hành 12 tháng."
              : "Explore our collection of 20+ real-world web architectures, from AI SaaS to D2C E-Commerce, 3D booking portals, and enterprise management dashboards."}
          </p>
        </div>

        {/* 2. Search & Category Filters Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8 sm:mb-10 pb-6 border-b border-slate-200 dark:border-slate-800">
          
          {/* Search Box */}
          <div className="relative w-full md:w-80 lg:w-96">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                lang === "vi"
                  ? "Tìm kiếm dự án, công nghệ (Next.js, AI, Stripe...)..."
                  : "Search projects, tech (Next.js, AI, Stripe...)..."
              }
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-[#161C2C] border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-hidden focus:border-blue-500 shadow-2xs transition-colors"
            />
          </div>

          {/* Quick Stats Counter */}
          <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
            {lang === "vi" ? "Hiển thị" : "Showing"}{" "}
            <span className="font-bold text-slate-900 dark:text-white">
              {filteredProjects.length}
            </span>{" "}
            / {allProjects.length} {lang === "vi" ? "dự án" : "projects"}
          </div>
        </div>

        {/* Category Filter Pills (Horizontal Scrollable) */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-8 sm:mb-10">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const label = lang === "vi" ? cat.labelVi : cat.labelEn;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold shrink-0 transition-all ${
                  isSelected
                    ? "bg-[#ed2328] text-white shadow-md shadow-red-500/20"
                    : "bg-white dark:bg-[#161C2C] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* 3. Projects Grid (3 cols on desktop, 2 on tablet, 1 on mobile) */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((item, index) => {
              const category = lang === "vi" ? item.category : item.categoryEn;

              return (
                <Link
                  key={item.id}
                  href={`/project/${item.id}`}
                  className="group flex flex-col rounded-2xl bg-white dark:bg-[#131826] border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Image Card Container */}
                  <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-106 transition-transform duration-500 ease-out"
                    />

                    {/* Category Pill Tag */}
                    <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-white text-[11px] font-semibold">
                      {category}
                    </div>

                    {/* Metric Highlight Badge */}
                    <div className="absolute bottom-3 left-3 z-10 px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 text-emerald-400 text-[11px] font-mono flex items-center gap-1.5">
                      <Zap className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span>{item.metric}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Project Name */}
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1 mb-2">
                        {item.name}
                      </h3>

                      {/* Summary */}
                      <p className="text-xs sm:text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2 mb-4 font-normal">
                        {lang === "vi" ? item.summaryVi : item.summaryEn}
                      </p>
                    </div>

                    {/* Bottom Metadata & Link */}
                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
                      {/* Tech Stack Chips */}
                      <div className="flex items-center gap-1.5 overflow-hidden max-w-[65%]">
                        {item.tech.slice(0, 2).map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[10px] text-slate-600 dark:text-slate-300 font-mono truncate"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* View Link */}
                      <span className="inline-flex items-center gap-1 font-semibold text-blue-600 dark:text-blue-400 group-hover:translate-x-0.5 transition-transform shrink-0">
                        <span>{lang === "vi" ? "Chi tiết" : "Details"}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          /* Empty Search State */
          <div className="text-center py-16 px-4 bg-white dark:bg-[#131826] rounded-2xl border border-slate-200 dark:border-slate-800">
            <Filter className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800 dark:text-slate-200 mb-1">
              {lang === "vi" ? "Không tìm thấy dự án phù hợp" : "No projects found"}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto mb-4">
              {lang === "vi"
                ? "Vui lòng thử từ khóa tìm kiếm khác hoặc chuyển về bộ lọc tất cả danh mục."
                : "Please try another search keyword or switch back to the all-categories filter."}
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="px-4 py-2 rounded-full bg-blue-600 text-white text-xs font-semibold"
            >
              {lang === "vi" ? "Đặt lại bộ lọc" : "Reset Filter"}
            </button>
          </div>
        )}

        {/* 4. Bottom Consultation CTA Banner */}
        <div className="mt-14 sm:mt-16 rounded-3xl bg-gradient-to-r from-slate-900 via-[#131826] to-slate-900 border border-slate-800 p-8 sm:p-12 text-white text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 blur-[90px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-blue-300 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === "vi" ? "Khởi Động Dự Án Của Bạn 2026" : "Kickstart Your Project"}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
              {lang === "vi"
                ? "Bạn muốn xây dựng một giải pháp tương tự cho doanh nghiệp?"
                : "Looking to build a similar solution for your business?"}
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
              {lang === "vi"
                ? "Tikat sẵn sàng tư vấn kiến trúc công nghệ, dự toán ngân sách và lập kế hoạch triển khai chi tiết miễn phí trong vòng 24 giờ."
                : "Tikat is ready to provide free technical architecture consulting and a transparent cost estimate within 24 hours."}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="/#consultation"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#ed2328] hover:bg-[#d61e23] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-lg"
              >
                <span>{lang === "vi" ? "Nhận Tư Vấn & Báo Giá" : "Get Free Quote"}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/#calculator"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold border border-white/15 transition-all"
              >
                <span>{lang === "vi" ? "Dự Toán Chi Phí Tự Động" : "Automated Cost Estimator"}</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
