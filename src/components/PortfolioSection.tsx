"use client";

import React, { useState } from "react";
import Image from "next/image";
import { portfolioData, ProjectItem } from "@/data/domSolutionData";
import {
  ThumbsUp,
  MessageSquare,
  Share2,
  ExternalLink,
  CheckCircle2,
  Bookmark,
  MoreHorizontal,
  Sparkles,
  TrendingUp,
  X,
} from "lucide-react";

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [likes, setLikes] = useState<{ [key: string]: boolean }>({
    "finflow-analytics": true,
    "aurora-luxury-store": true,
  });
  const [likeCounts, setLikeCounts] = useState<{ [key: string]: number }>({
    "finflow-analytics": 128,
    "aurora-luxury-store": 96,
    "nexus-enterprise-portal": 74,
    "techforge-landing": 62,
  });

  const categories = [
    { key: "all", label: "Tất Cả Sản Phẩm" },
    { key: "saas", label: "SaaS Web App" },
    { key: "ecommerce", label: "E-Commerce" },
    { key: "portal", label: "Hệ Thống Quản Trị" },
    { key: "landing", label: "Landing Page" },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? portfolioData
      : portfolioData.filter((p) => p.category === activeCategory);

  const toggleLike = (id: string) => {
    setLikes((prev) => {
      const isLiked = !prev[id];
      setLikeCounts((c) => ({
        ...c,
        [id]: (c[id] || 0) + (isLiked ? 1 : -1),
      }));
      return { ...prev, [id]: isLiked };
    });
  };

  return (
    <section id="portfolio" className="section-py bg-[#F0F2F5]">
      <div className="container max-w-5xl">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-kicker">
            <Sparkles className="w-3.5 h-3.5 text-[#0866FF]" />
            <span>Sản Phẩm & Dự Án Thực Tế</span>
          </div>
          <h2 className="section-title">Danh Mục Sản Phẩm Đã Được Triển Khai</h2>
          <p className="section-subtitle">
            Khám phá các sản phẩm phần mềm, Web Application và nền tảng bán hàng do Dom Solution trực tiếp thiết kế kiến trúc và phát triển cho các đối tác.
          </p>
        </div>

        {/* Facebook-style Horizontal Category Feed Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 text-[14px] font-semibold rounded-full transition-all whitespace-nowrap ${
                activeCategory === cat.key
                  ? "bg-[#0866FF] text-white shadow-sm"
                  : "bg-white text-[#050505] hover:bg-[#E4E6EB] border border-[#CED0D4]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Facebook-style Feed of Products */}
        <div className="space-y-6">
          {filteredProjects.map((project) => {
            const isLiked = !!likes[project.id];
            const count = likeCounts[project.id] || 85;

            return (
              <article
                key={project.id}
                className="fb-card overflow-hidden"
              >
                {/* 1. FB Post Header: Avatar, Page Name, Timestamp, Privacy icon */}
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#0866FF] to-[#0045B4] text-white flex items-center justify-center font-bold text-[15px] shadow-sm">
                      D
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-[15px] text-[#050505] hover:underline cursor-pointer">
                          Dom Solution
                        </span>
                        <CheckCircle2 className="w-4 h-4 text-[#0866FF] fill-[#0866FF] text-white" />
                      </div>
                      <div className="flex items-center gap-1 text-[13px] text-[#65676B]">
                        <span>Khách hàng: {project.client}</span>
                        <span>·</span>
                        <span>Năm {project.year}</span>
                        <span>·</span>
                        <span className="text-[12px] bg-[#E7F3FF] text-[#0866FF] px-2 py-0.5 rounded font-medium">
                          {project.categoryLabel}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-[#65676B]">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="p-2 hover:bg-[#F2F3F5] rounded-full text-[#65676B] hover:text-[#050505] transition-colors"
                      title="Xem chi tiết"
                    >
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* 2. Post Caption / Description */}
                <div className="px-4 pb-3 text-[15px] text-[#050505] leading-normal">
                  <h3 className="font-bold text-[17px] text-[#050505] mb-1.5 hover:text-[#0866FF] transition-colors cursor-pointer" onClick={() => setSelectedProject(project)}>
                    {project.title}
                  </h3>
                  <p className="text-[#050505] mb-2">{project.description}</p>
                  
                  {/* Performance highlight tag */}
                  <div className="inline-flex items-center gap-1.5 bg-[#E7F3FF] text-[#0866FF] font-semibold text-[13px] px-2.5 py-1 rounded-md">
                    <TrendingUp className="w-4 h-4 text-[#FA383E]" />
                    <span>Hiệu quả: {project.metrics}</span>
                  </div>
                </div>

                {/* 3. Product Media Showcase (Full-width in FB style) */}
                <div
                  className="relative aspect-[16/9] w-full bg-[#E4E6EB] cursor-pointer overflow-hidden group"
                  onClick={() => setSelectedProject(project)}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-[1.01] transition-transform duration-300"
                    sizes="(max-width: 1024px) 100vw, 900px"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 backdrop-blur-sm text-white text-[13px] font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                      <ExternalLink className="w-4 h-4" />
                      Xem Chi Tiết Dự Án
                    </span>
                  </div>
                </div>

                {/* 4. Tech Stack Tags in FB style */}
                <div className="p-3 bg-[#F7F8FA] border-t border-b border-[#E4E6EB] flex flex-wrap items-center gap-1.5">
                  <span className="text-[12px] font-semibold text-[#65676B] mr-1">
                    Công nghệ:
                  </span>
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[12px] font-medium bg-white text-[#050505] px-2 py-0.5 rounded border border-[#CED0D4]"
                    >
                      #{tech}
                    </span>
                  ))}
                </div>

                {/* 5. FB Likes & Reaction Counter */}
                <div className="px-4 py-2 flex items-center justify-between text-[13px] text-[#65676B] border-b border-[#E4E6EB]">
                  <div className="flex items-center gap-1.5">
                    <div className="w-4 h-4 rounded-full bg-[#0866FF] flex items-center justify-center text-white text-[9px]">
                      <ThumbsUp className="w-2.5 h-2.5 fill-white" />
                    </div>
                    <span>{count} lượt thích</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span>14 bình luận</span>
                    <span>·</span>
                    <span>28 lượt chia sẻ</span>
                  </div>
                </div>

                {/* 6. FB Interaction Action Bar: Like, Comment, Share, Consultation CTA */}
                <div className="px-2 py-1 flex items-center justify-between">
                  <button
                    onClick={() => toggleLike(project.id)}
                    className={`fb-action-btn flex-1 ${
                      isLiked ? "text-[#0866FF]" : ""
                    }`}
                  >
                    <ThumbsUp
                      className={`w-4 h-4 ${isLiked ? "fill-[#0866FF]" : ""}`}
                    />
                    <span>Thích</span>
                  </button>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="fb-action-btn flex-1"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Xem Kiến Trúc</span>
                  </button>

                  <a
                    href="#consultation"
                    className="fb-action-btn flex-1 text-[#0866FF] font-bold"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>Yêu Cầu Làm Tương Tự</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Product Detail Modal in FB Style */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-white rounded-xl max-w-2xl w-full shadow-[0_12px_28px_0_rgba(0,0,0,0.2)] border border-[#CED0D4] overflow-hidden my-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal FB Header */}
              <div className="flex items-center justify-between p-4 border-b border-[#E4E6EB]">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[16px] text-[#050505]">
                    Chi Tiết Sản Phẩm: {selectedProject.title}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-8 h-8 rounded-full bg-[#E4E6EB] hover:bg-[#D8DADF] flex items-center justify-center text-[#050505] transition-colors"
                  aria-label="Đóng"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-5 space-y-4 max-h-[75vh] overflow-y-auto">
                <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-[#E4E6EB]">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div>
                  <div className="text-[13px] text-[#65676B] mb-1">
                    Khách hàng: <strong>{selectedProject.client}</strong> · Năm {selectedProject.year}
                  </div>
                  <h3 className="text-[20px] font-bold text-[#050505] mb-2">
                    {selectedProject.title}
                  </h3>
                  <p className="text-[15px] text-[#050505] leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="p-3 bg-[#E7F3FF] rounded-lg border border-[#BBDDFD]">
                  <h4 className="text-[13px] font-bold uppercase text-[#0045B4] mb-1">
                    Hiệu quả & Giá trị mang lại:
                  </h4>
                  <p className="text-[14px] font-semibold text-[#0866FF]">
                    {selectedProject.metrics}
                  </p>
                </div>

                <div>
                  <h4 className="text-[13px] font-bold text-[#65676B] uppercase mb-2">
                    Các tính năng & Module triển khai:
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[13px] bg-[#F0F2F5] text-[#050505] px-3 py-1 rounded-md font-medium border border-[#CED0D4]"
                      >
                        ✓ {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer Actions */}
              <div className="p-4 bg-[#F0F2F5] border-t border-[#E4E6EB] flex items-center justify-end gap-2">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="btn-secondary text-[14px] py-2 px-4"
                >
                  Đóng
                </button>
                <a
                  href="#consultation"
                  onClick={() => setSelectedProject(null)}
                  className="btn-primary text-[14px] py-2 px-5"
                >
                  Liên Hệ Phát Triển Dự Án Này
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
