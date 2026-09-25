"use client";

import React, { useState } from "react";
import Image from "next/image";
import { blogPostsData, BlogPostItem } from "@/data/domSolutionData";
import {
  Calendar,
  Clock,
  ArrowRight,
  Copy,
  Check,
  X,
  Share2,
  Sparkles,
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
    <section id="blog" className="py-20 sm:py-28 bg-[#FAF8F5] relative border-t border-[#EBE8E1]">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="flex justify-center mb-3">
            <div className="kicker-pill shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#8C7A58]" />
              <span>Góc Nhìn Kỹ Thuật</span>
            </div>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif text-[#18181B] tracking-tight mb-4">
            Kiến thức & <span className="italic font-normal">Kinh nghiệm thực chiến</span>
          </h2>
          <p className="text-sm sm:text-base text-[#52525B] leading-relaxed">
            Các bài phân tích chuyên sâu về kiến trúc phần mềm, bảo mật dữ liệu và tối ưu hiệu năng web application.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 sm:mb-14">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              type="button"
              className={`px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-full transition-all cursor-pointer border ${
                activeCategory === cat.key
                  ? "bg-[#18181B] text-white border-[#18181B] shadow-xs"
                  : "bg-white text-[#52525B] hover:text-[#18181B] border-[#E8E5DC]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden flex flex-col justify-between border border-[#E5E1D8] group hover:border-[#D5D0C5] hover:shadow-[0_10px_30px_rgba(26,26,24,0.06)] transition-all duration-300"
            >
              <div>
                <div
                  className="relative aspect-16/10 w-full bg-[#FAF8F5] cursor-pointer overflow-hidden border-b border-[#E8E5DC]"
                  onClick={() => setSelectedArticle(post)}
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 400px"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md text-[#18181B] text-xs font-semibold px-3 py-1 rounded-full border border-[#E8E5DC] shadow-xs">
                    {post.categoryLabel}
                  </div>
                </div>

                <div className="p-6">
                  {/* Clean unboxed metadata with bullet separator */}
                  <div className="flex items-center gap-2 text-xs text-[#71717A] mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#8C7A58]" />
                      {post.date}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#8C7A58]" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3
                    onClick={() => setSelectedArticle(post)}
                    className="text-lg sm:text-xl font-serif text-[#18181B] mb-2.5 hover:text-[#8C7A58] transition-colors cursor-pointer leading-snug"
                  >
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#52525B] line-clamp-3 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0">
                <button
                  onClick={() => setSelectedArticle(post)}
                  type="button"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#18181B] hover:text-[#8C7A58] transition-colors cursor-pointer"
                >
                  <span>Đọc Toàn Bộ Bài Viết</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-[#E5E1D8] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-[#EBE8E1] flex items-center justify-between bg-[#FAF8F5]">
              <div className="flex items-center gap-2 text-xs text-[#71717A]">
                <span className="font-semibold text-[#18181B] uppercase">
                  {selectedArticle.categoryLabel}
                </span>
                <span>·</span>
                <span>{selectedArticle.date}</span>
                <span>·</span>
                <span>{selectedArticle.readTime}</span>
              </div>
              <button
                onClick={() => setSelectedArticle(null)}
                className="w-8 h-8 rounded-full bg-white border border-[#DCD9D0] text-[#71717A] hover:text-[#18181B] flex items-center justify-center cursor-pointer transition-colors"
                aria-label="Close article modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif text-[#18181B] leading-tight">
                {selectedArticle.title}
              </h2>

              <div className="relative aspect-16/9 w-full rounded-xl overflow-hidden bg-[#FAF8F5] border border-[#E8E5DC]">
                <Image
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Structured Article Content */}
              <div className="text-xs sm:text-sm text-[#3F3F46] leading-relaxed space-y-5">
                <p className="font-medium text-[#18181B] text-sm sm:text-base border-l-2 border-[#18181B] pl-4 italic">
                  {selectedArticle.content.intro}
                </p>

                {selectedArticle.content.sections.map((sec, idx) => (
                  <div key={idx} className="space-y-3">
                    <h3 className="text-base sm:text-lg font-serif font-bold text-[#18181B]">
                      {sec.heading}
                    </h3>
                    <p>{sec.body}</p>

                    {sec.codeSnippet && (
                      <div className="rounded-xl overflow-hidden border border-[#18181B] bg-[#18181B] text-slate-100 my-3">
                        <div className="px-4 py-2 bg-[#27272A] border-b border-[#3F3F46] flex items-center justify-between text-xs">
                          <span className="font-mono text-[#A1A1AA]">code-snippet.ts</span>
                          <button
                            onClick={() => handleCopyCode(sec.codeSnippet || "")}
                            className="flex items-center gap-1 text-slate-300 hover:text-white cursor-pointer"
                          >
                            {copiedCode ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-emerald-400" />
                                <span className="text-emerald-400">Đã sao chép</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" />
                                <span>Sao chép mã</span>
                              </>
                            )}
                          </button>
                        </div>
                        <pre className="p-4 text-xs font-mono overflow-x-auto leading-relaxed text-slate-200">
                          <code>{sec.codeSnippet}</code>
                        </pre>
                      </div>
                    )}
                  </div>
                ))}

                <p className="pt-2 font-medium text-[#18181B]">
                  {selectedArticle.content.conclusion}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-[#EBE8E1]">
                {selectedArticle.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-[#FAF8F5] text-[#52525B] border border-[#E8E5DC]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 border-t border-[#EBE8E1] bg-[#FAF8F5] flex items-center justify-between gap-3">
              <button
                onClick={handleShare}
                type="button"
                className="flex items-center gap-1.5 text-xs font-medium text-[#71717A] hover:text-[#18181B] cursor-pointer"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>{shareFeedback ? "Đã lưu liên kết!" : "Chia sẻ bài viết"}</span>
              </button>
              <a
                href="#consultation"
                onClick={() => setSelectedArticle(null)}
                className="btn-primary text-xs sm:text-sm py-2 px-5"
              >
                <span>Tư Vấn Giải Pháp Tương Tự</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
