"use client";

import React, { useState } from "react";
import Image from "next/image";
import { blogPostsData, BlogPostItem } from "@/data/domSolutionData";
import {
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
  Copy,
  Check,
  X,
  Share2,
} from "lucide-react";

export default function BlogSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedArticle, setSelectedArticle] = useState<BlogPostItem | null>(null);
  const [copiedCode, setCopiedCode] = useState<boolean>(false);
  const [shareFeedback, setShareFeedback] = useState<boolean>(false);

  const categories = [
    { key: "all", label: "Tất Cả Bài Viết" },
    { key: "architecture", label: "Kiến Trúc Web" },
    { key: "security", label: "Bảo Mật & Auth" },
    { key: "ecommerce", label: "E-Commerce" },
  ];

  const filteredPosts =
    activeCategory === "all"
      ? blogPostsData
      : blogPostsData.filter((post) => post.category === activeCategory);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleShare = () => {
    setShareFeedback(true);
    setTimeout(() => setShareFeedback(false), 2000);
  };

  return (
    <section id="blog" className="py-14 sm:py-24 bg-[#07090E] relative border-t border-white/10">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[11px] sm:text-xs font-semibold text-blue-400 mb-3">
            <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400" />
            <span>GÓC NHÌN & KINH NGHIỆM KỸ THUẬT</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3 leading-tight">
            Chia Sẻ Kinh Nghiệm <span className="text-gradient">Thực Chiến</span>
          </h2>
          <p className="text-xs sm:text-base text-slate-400">
            Các bài viết chuyên sâu về kiến trúc Next.js 15, tối ưu Core Web Vitals và phát triển Web Application.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 sm:mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold rounded-full transition-all border ${
                activeCategory === cat.key
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-blue-400/50 shadow-md"
                  : "bg-slate-900/80 text-slate-400 hover:text-white border-white/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="glass-card overflow-hidden flex flex-col justify-between border border-white/10 group bg-slate-950/70"
            >
              <div>
                <div
                  className="relative aspect-video w-full bg-slate-900 cursor-pointer overflow-hidden"
                  onClick={() => setSelectedArticle(post)}
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    sizes="(max-width: 768px) 100vw, 400px"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-slate-900/80 backdrop-blur-md text-cyan-400 text-[10px] sm:text-xs font-semibold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-cyan-500/30">
                    {post.categoryLabel}
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <div className="flex items-center gap-2.5 text-[11px] sm:text-xs text-slate-400 mb-2.5">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      {post.date}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3
                    onClick={() => setSelectedArticle(post)}
                    className="text-base sm:text-lg font-bold text-white mb-2 leading-snug hover:text-cyan-400 cursor-pointer line-clamp-2"
                  >
                    {post.title}
                  </h3>

                  <p className="text-[11px] sm:text-xs text-slate-400 line-clamp-2 leading-relaxed mb-3.5">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] sm:text-xs bg-slate-900 text-slate-300 px-2 py-0.5 rounded border border-white/10 font-mono"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-3.5 sm:p-4 bg-slate-900/60 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => setSelectedArticle(post)}
                  className="text-[11px] sm:text-xs font-bold text-blue-400 hover:underline flex items-center gap-1.5"
                >
                  <span>Đọc bài viết</span>
                  <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </button>
                <span className="text-[11px] sm:text-xs text-slate-400">{post.author}</span>
              </div>
            </article>
          ))}
        </div>

        {/* Modal Article Reader */}
        {selectedArticle && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedArticle(null)}
          >
            <div
              className="glass-card max-w-3xl w-full border border-white/20 overflow-hidden my-8 max-h-[88vh] flex flex-col bg-slate-950/95"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-5 border-b border-white/10">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="font-bold text-cyan-400">
                    {selectedArticle.categoryLabel}
                  </span>
                  <span>·</span>
                  <span>{selectedArticle.readTime}</span>
                </div>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="w-8 h-8 rounded-full bg-slate-900 hover:bg-slate-800 flex items-center justify-center text-slate-300 border border-white/10"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content Scrollable */}
              <div className="p-6 overflow-y-auto space-y-4 text-slate-200">
                <h2 className="text-2xl font-extrabold text-white leading-tight">
                  {selectedArticle.title}
                </h2>

                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs text-slate-400">
                  <div>
                    Tác giả: <strong className="text-white">{selectedArticle.author}</strong> · {selectedArticle.date}
                  </div>
                  <button
                    onClick={handleShare}
                    className="flex items-center gap-1.5 text-cyan-400 font-semibold"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>{shareFeedback ? "Đã copy link!" : "Chia sẻ"}</span>
                  </button>
                </div>

                <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-900 border border-white/10">
                  <Image
                    src={selectedArticle.image}
                    alt={selectedArticle.title}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="p-4 bg-gradient-to-r from-blue-900/40 to-indigo-900/40 rounded-xl border-l-4 border-blue-500 text-sm leading-relaxed text-slate-200">
                  {selectedArticle.content.intro}
                </div>

                {selectedArticle.content.sections.map((sec, idx) => (
                  <div key={idx} className="space-y-2">
                    <h3 className="text-lg font-bold text-white pt-2">
                      {sec.heading}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {sec.body}
                    </p>

                    {sec.codeSnippet && (
                      <div className="my-3 rounded-xl overflow-hidden bg-slate-900 border border-white/15">
                        <div className="flex items-center justify-between px-4 py-2 bg-slate-950 text-slate-300 text-xs font-mono border-b border-white/10">
                          <span>Snippet Code</span>
                          <button
                            onClick={() => handleCopyCode(sec.codeSnippet!)}
                            className="flex items-center gap-1.5 text-cyan-400 hover:text-white"
                          >
                            {copiedCode ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                            <span>{copiedCode ? "Đã chép" : "Sao chép"}</span>
                          </button>
                        </div>
                        <pre className="p-4 text-xs font-mono text-cyan-300 overflow-x-auto">
                          <code>{sec.codeSnippet}</code>
                        </pre>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Modal Footer */}
              <div className="p-5 bg-slate-900/80 border-t border-white/10 flex items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="btn-glass text-sm py-2 px-4"
                >
                  Đóng
                </button>
                <a
                  href="#consultation"
                  onClick={() => setSelectedArticle(null)}
                  className="btn-gradient-primary text-sm py-2 px-5"
                >
                  Tư Vấn Giải Pháp Tương Tự
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
