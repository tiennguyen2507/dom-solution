"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { portfolioData, ProjectItem } from "@/data/domSolutionData";
import {
  Sparkles,
  TrendingUp,
  X,
  ArrowRight,
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
    <section id="portfolio" className="py-20 sm:py-28 bg-[#FFFFFF] relative border-t border-[#EBE8E1]">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="flex justify-center mb-3">
            <div className="kicker-pill shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#8C7A58]" />
              <span>Dự Án Đã Thực Hiện</span>
            </div>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif text-[#18181B] tracking-tight mb-4">
            Sản phẩm & <span className="italic font-normal">Công trình thực tế</span>
          </h2>
          <p className="text-sm sm:text-base text-[#52525B] leading-relaxed">
            Mỗi sản phẩm là một kiến trúc được trau chuốt tỉ mỉ từ giao diện người dùng đến hiệu năng backend và tính mở rộng lâu dài.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 sm:mb-14 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              type="button"
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all whitespace-nowrap cursor-pointer border ${
                activeCategory === cat.key
                  ? "bg-[#18181B] text-white border-[#18181B] shadow-xs"
                  : "bg-[#FAF8F5] text-[#52525B] hover:text-[#18181B] hover:bg-[#F2EFE9] border-[#E8E5DC]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="bg-[#FAF8F5] rounded-2xl border border-[#E8E5DC] overflow-hidden group flex flex-col justify-between hover:border-[#D5D0C5] hover:shadow-[0_12px_32px_rgba(26,26,24,0.06)] transition-all duration-300"
            >
              <div>
                {/* Media Container */}
                <div
                  className="relative aspect-16/10 w-full bg-[#F4F1EA] cursor-pointer overflow-hidden border-b border-[#E8E5DC]"
                  onClick={() => setSelectedProject(project)}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 600px"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />

                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#18181B] border border-[#E8E5DC] text-xs font-semibold px-3 py-1 rounded-full shadow-xs">
                    {project.categoryLabel}
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-6 sm:p-7">
                  <div className="text-xs text-[#71717A] mb-2 font-medium">
                    Khách hàng: <strong className="text-[#18181B]">{project.client}</strong> · Năm {project.year}
                  </div>

                  <h3
                    onClick={() => setSelectedProject(project)}
                    className="text-xl sm:text-2xl font-serif text-[#18181B] mb-3 hover:text-[#8C7A58] transition-colors cursor-pointer leading-snug"
                  >
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#52525B] mb-4 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights Metric */}
                  <div className="p-3 rounded-xl bg-white border border-[#EBE8E1] mb-5 flex items-center gap-2.5">
                    <TrendingUp className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="text-xs font-semibold text-[#18181B]">
                      {project.metrics}
                    </span>
                  </div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-medium bg-white text-[#52525B] border border-[#E8E5DC]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card CTA */}
              <div className="px-6 sm:px-7 pb-6 pt-2">
                <button
                  onClick={() => setSelectedProject(project)}
                  type="button"
                  className="w-full py-2.5 px-4 rounded-xl bg-white border border-[#DCD9D0] text-xs font-semibold text-[#18181B] hover:bg-[#18181B] hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Chi Tiết Dự Án & Mã Nguồn</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-[#E5E1D8] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-5 border-b border-[#EBE8E1] flex items-center justify-between bg-[#FAF8F5]">
                <div>
                  <span className="text-xs font-semibold uppercase text-[#8C7A58]">
                    {selectedProject.categoryLabel}
                  </span>
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-[#18181B]">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-8 h-8 rounded-full bg-white border border-[#DCD9D0] text-[#71717A] hover:text-[#18181B] flex items-center justify-center cursor-pointer transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Scroll Content */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                <div className="relative aspect-16/9 w-full rounded-xl overflow-hidden bg-[#F4F1EA] border border-[#E8E5DC]">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div>
                  <div className="text-xs text-[#71717A] mb-1">
                    Khách hàng: <strong className="text-[#18181B]">{selectedProject.client}</strong> · Năm {selectedProject.year}
                  </div>
                  <p className="text-sm text-[#52525B] leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Achieved Results */}
                <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200">
                  <div className="text-xs font-bold text-emerald-900 uppercase mb-1">
                    Chỉ Số Hiệu Năng & Kết Quả:
                  </div>
                  <p className="text-xs font-semibold text-emerald-800">
                    {selectedProject.metrics}
                  </p>
                </div>

                {/* Tech Stack */}
                <div>
                  <div className="text-xs font-bold uppercase text-[#18181B] mb-2.5">
                    Công Nghệ Xây Dựng:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-[#FAF8F5] text-[#3F3F46] border border-[#E5E1D8]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tags / Deliverables */}
                <div>
                  <div className="text-xs font-bold uppercase text-[#18181B] mb-2.5">
                    Tính Năng & Module Nổi Bật:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedProject.tags.map((tag, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#52525B]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{tag}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:p-5 border-t border-[#EBE8E1] bg-[#FAF8F5] flex items-center justify-between gap-3">
                <span className="text-xs text-[#71717A]">
                  Cam kết bàn giao 100% Full Source Code Git
                </span>
                <a
                  href="#consultation"
                  onClick={() => setSelectedProject(null)}
                  className="btn-primary text-xs sm:text-sm py-2 px-5"
                >
                  <span>Báo Giá Dự Án Tương Tự</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
