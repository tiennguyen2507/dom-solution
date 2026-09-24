"use client";

import React, { useState } from "react";
import Image from "next/image";
import { blogPostsData, BlogPostItem } from "@/data/domSolutionData";
import {
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
  CheckCircle,
  Copy,
  Check,
  User,
  X,
  Share2,
  ThumbsUp,
  MessageSquare,
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
    { key: "ecommerce", label: "E-Commerce & Cổng Thanh Toán" },
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
    <section id="blog" className="section-py bg-white border-t border-[#E4E6EB]">
      <div className="container max-w-5xl">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-kicker">
            <BookOpen className="w-3.5 h-3.5 text-[#0866FF]" />
            <span>Góc Nhìn Kỹ Thuật</span>
          </div>
          <h2 className="section-title">Chia Sẻ Kinh Nghiệm Lập Trình Thực Chiến</h2>
          <p className="section-subtitle">
            Các bài viết phân tích chuyên sâu về kiến trúc Next.js 15, tối ưu Core Web Vitals và bảo mật ứng dụng Web App.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 text-[14px] font-semibold rounded-full transition-all ${
                activeCategory === cat.key
                  ? "bg-[#0866FF] text-white shadow-sm"
                  : "bg-[#F0F2F5] text-[#050505] hover:bg-[#E4E6EB]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid in FB Card Feed Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="fb-card overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div
                  className="relative aspect-video w-full bg-[#E4E6EB] cursor-pointer overflow-hidden group"
                  onClick={() => setSelectedArticle(post)}
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 360px"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-black/75 backdrop-blur-sm text-white text-[11px] font-semibold px-2 py-0.5 rounded">
                    {post.categoryLabel}
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-center gap-2 text-[12px] text-[#65676B] mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3
                    onClick={() => setSelectedArticle(post)}
                    className="text-[16px] font-bold text-[#050505] mb-2 leading-snug hover:text-[#0866FF] cursor-pointer line-clamp-2"
                  >
                    {post.title}
                  </h3>

                  <p className="text-[13px] text-[#65676B] line-clamp-2 leading-relaxed mb-3">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] bg-[#F0F2F5] text-[#050505] px-2 py-0.5 rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-3 bg-[#F7F8FA] border-t border-[#E4E6EB] flex items-center justify-between">
                <button
                  onClick={() => setSelectedArticle(post)}
                  className="text-[13px] font-semibold text-[#0866FF] hover:underline flex items-center gap-1"
                >
                  <span>Đọc bài viết</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <span className="text-[12px] text-[#65676B]">{post.author}</span>
              </div>
            </article>
          ))}
        </div>

        {/* Modal Article Reader */}
        {selectedArticle && (
          <div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
            onClick={() => setSelectedArticle(null)}
          >
            <div
              className="bg-white rounded-xl max-w-2xl w-full shadow-[0_12px_28px_0_rgba(0,0,0,0.2)] border border-[#CED0D4] overflow-hidden my-6 max-h-[88vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-[#E4E6EB]">
                <div className="flex items-center gap-2 text-[13px] text-[#65676B]">
                  <span className="font-bold text-[#0866FF]">
                    {selectedArticle.categoryLabel}
                  </span>
                  <span>·</span>
                  <span>{selectedArticle.readTime}</span>
                </div>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="w-8 h-8 rounded-full bg-[#E4E6EB] hover:bg-[#D8DADF] flex items-center justify-center text-[#050505]"
                  aria-label="Đóng"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content Scrollable */}
              <div className="p-5 overflow-y-auto space-y-4 text-[#050505]">
                <h2 className="text-[22px] font-bold leading-tight">
                  {selectedArticle.title}
                </h2>

                <div className="flex items-center justify-between pb-3 border-b border-[#E4E6EB] text-[13px] text-[#65676B]">
                  <div>
                    Tác giả: <strong>{selectedArticle.author}</strong> · {selectedArticle.date}
                  </div>
                  <button
                    onClick={handleShare}
                    className="flex items-center gap-1 text-[#0866FF] font-semibold"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>{shareFeedback ? "Đã copy!" : "Chia sẻ"}</span>
                  </button>
                </div>

                <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-[#E4E6EB]">
                  <Image
                    src={selectedArticle.image}
                    alt={selectedArticle.title}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="p-3.5 bg-[#E7F3FF] rounded-lg border-l-4 border-[#0866FF] text-[14px] leading-relaxed">
                  {selectedArticle.content.intro}
                </div>

                {selectedArticle.content.sections.map((sec, idx) => (
                  <div key={idx} className="space-y-2">
                    <h3 className="text-[17px] font-bold text-[#050505] pt-1">
                      {sec.heading}
                    </h3>
                    <p className="text-[14px] text-[#050505] leading-relaxed">
                      {sec.body}
                    </p>

                    {sec.codeSnippet && (
                      <div className="my-2 rounded-lg overflow-hidden bg-[#18191A] border border-[#3A3B3C]">
                        <div className="flex items-center justify-between px-3 py-1.5 bg-[#242526] text-white text-[12px] font-mono">
                          <span>Snippet Code</span>
                          <button
                            onClick={() => handleCopyCode(sec.codeSnippet!)}
                            className="flex items-center gap-1 text-[#0866FF] hover:text-white"
                          >
                            {copiedCode ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                            <span>{copiedCode ? "Đã chép" : "Sao chép"}</span>
                          </button>
                        </div>
                        <pre className="p-3 text-[12px] font-mono text-emerald-300 overflow-x-auto">
                          <code>{sec.codeSnippet}</code>
                        </pre>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Modal Footer */}
              <div className="p-3 bg-[#F0F2F5] border-t border-[#E4E6EB] flex items-center justify-end gap-2">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="btn-secondary text-[14px] py-2 px-4"
                >
                  Đóng
                </button>
                <a
                  href="#consultation"
                  onClick={() => setSelectedArticle(null)}
                  className="btn-primary text-[14px] py-2 px-4"
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
