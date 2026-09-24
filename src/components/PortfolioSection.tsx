"use client";

import React, { useState } from "react";
import Image from "next/image";
import { portfolioData, ProjectItem } from "@/data/domSolutionData";
import {
  ExternalLink,
  Sparkles,
  TrendingUp,
  X,
  ArrowRight,
  Code2,
  CheckCircle2,
} from "lucide-react";

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = [
    { key: "all", label: "Tất Cả Dự Án" },
    { key: "saas", label: "SaaS Web App" },
    { key: "ecommerce", label: "E-Commerce" },
    { key: "portal", label: "Hệ Thống ERP/CRM" },
    { key: "landing", label: "Landing Page" },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? portfolioData
      : portfolioData.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-[#090D16] relative border-t border-white/10">
      {/* Ambient Glow */}
      <div className="glow-blue top-1/3 left-10" />

      <div className="container max-w-7xl mx-auto relative z-10 px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 px-2">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[11px] sm:text-xs font-semibold text-indigo-400 mb-3 sm:mb-4">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-400 shrink-0" />
            <span>SẢN PHẨM & DỰ ÁN NỔI BẬT</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-2.5 sm:mb-4 leading-tight">
            Danh Mục Dự Án <span className="text-gradient">Đã Triển Khai</span>
          </h2>
          <p className="text-xs sm:text-base lg:text-lg text-slate-400">
            Khám phá các dự án phần mềm, Web Application & E-Commerce tiêu biểu do Dom Solution trực tiếp thiết kế kiến trúc và phát triển.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-2.5 overflow-x-auto pb-3 sm:pb-4 mb-8 sm:mb-12 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-3.5 py-1.5 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold rounded-full transition-all whitespace-nowrap border ${
                activeCategory === cat.key
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-blue-400/50 shadow-lg shadow-blue-500/20"
                  : "bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-800/80 border-white/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card overflow-hidden border border-white/10 group flex flex-col justify-between bg-slate-950/70"
            >
              <div>
                {/* Media Container */}
                <div
                  className="relative aspect-[16/9] w-full bg-slate-900 cursor-pointer overflow-hidden"
                  onClick={() => setSelectedProject(project)}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    sizes="(max-width: 1024px) 100vw, 600px"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
                  
                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-cyan-400 border border-cyan-500/30 text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                    {project.categoryLabel}
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-xs">
                    <span className="btn-gradient-primary text-xs py-2 px-4">
                      <ExternalLink className="w-3.5 h-3.5" />
                      Xem Chi Tiết Kiến Trúc
                    </span>
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-6 sm:p-7">
                  <div className="text-xs text-slate-400 mb-2">
                    Khách hàng: <strong className="text-white">{project.client}</strong> · Năm {project.year}
                  </div>

                  <h3
                    onClick={() => setSelectedProject(project)}
                    className="text-xl font-extrabold text-white mb-3 hover:text-cyan-400 transition-colors cursor-pointer leading-snug"
                  >
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-300 mb-4 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Performance highlight badge */}
                  <div className="inline-flex items-center gap-2 bg-blue-950/60 border border-blue-500/30 text-blue-300 font-semibold text-xs px-3 py-1.5 rounded-lg mb-4">
                    <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Hiệu quả: {project.metrics}</span>
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/10">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-slate-900 text-slate-300 px-2.5 py-1 rounded border border-white/10 font-mono"
                      >
                        #{tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="p-4 bg-slate-900/60 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-bold text-slate-300 hover:text-white flex items-center gap-1.5"
                >
                  <Code2 className="w-4 h-4 text-blue-400" />
                  <span>Xem Chi Tiết</span>
                </button>
                <a
                  href="#consultation"
                  className="text-xs font-bold text-cyan-400 hover:underline flex items-center gap-1"
                >
                  <span>Báo Giá Làm Tương Tự</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Product Detail Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="glass-card max-w-3xl w-full border border-white/20 overflow-hidden my-8 bg-slate-950/95"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-5 border-b border-white/10">
                <span className="font-bold text-lg text-white">
                  Chi Tiết Dự Án: {selectedProject.title}
                </span>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-8 h-8 rounded-full bg-slate-900 hover:bg-slate-800 flex items-center justify-center text-slate-300 hover:text-white border border-white/10"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-900 border border-white/10">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div>
                  <div className="text-xs text-slate-400 mb-1">
                    Khách hàng: <strong className="text-white">{selectedProject.client}</strong> · Năm {selectedProject.year}
                  </div>
                  <h3 className="text-2xl font-extrabold text-white mb-2">
                    {selectedProject.title}
                  </h3>
                  <p className="text-base text-slate-300 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="p-4 bg-gradient-to-r from-blue-900/40 to-indigo-900/40 rounded-xl border border-blue-500/30">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-1">
                    Hiệu quả & Giá trị mang lại:
                  </h4>
                  <p className="text-base font-bold text-white">
                    {selectedProject.metrics}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                    CÁC TÍNH NĂNG & MODULE TRIỂN KHAI:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedProject.tags.map((tag) => (
                      <div
                        key={tag}
                        className="flex items-center gap-2 text-sm text-slate-200 bg-slate-900/80 px-3.5 py-2 rounded-lg border border-white/10"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{tag}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer Actions */}
              <div className="p-5 bg-slate-900/80 border-t border-white/10 flex items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="btn-glass text-sm py-2 px-4"
                >
                  Đóng
                </button>
                <a
                  href="#consultation"
                  onClick={() => setSelectedProject(null)}
                  className="btn-gradient-primary text-sm py-2 px-5"
                >
                  Báo Giá Dự Án Tương Tự
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
