"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
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
    <section id="blog" className="py-20 sm:py-28 bg-white relative border-t border-slate-200">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="flex justify-center mb-3">
            <div className="kicker-pill shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Góc Nhìn Kỹ Thuật</span>
            </div>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif text-slate-900 tracking-tight mb-4">
            Kiến thức & <span className="italic font-normal text-blue-600">Kinh nghiệm thực chiến</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
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
                  ? "bg-slate-900 text-white border-slate-900 shadow-xs"
                  : "bg-slate-50 text-slate-600 hover:text-blue-600 border-slate-200 hover:bg-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {filteredPosts.map((post, idx) => (
            <motion.article
              key={post.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="bg-white rounded-2xl overflow-hidden flex flex-col justify-between border border-slate-200 group hover:border-blue-300 hover:shadow-[0_12px_32px_rgba(15,23,42,0.06)] transition-all duration-300"
            >
              <div>
                <div
                  className="relative aspect-16/10 w-full bg-slate-50 cursor-pointer overflow-hidden border-b border-slate-200"
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
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md text-slate-900 text-xs font-semibold px-3 py-1 rounded-full border border-slate-200 shadow-xs">
                    {post.categoryLabel}
                  </div>
                </div>

                <div className="p-6">
                  {/* Clean unboxed metadata with bullet separator */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-blue-600" />
                      {post.date}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-blue-600" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3
                    onClick={() => setSelectedArticle(post)}
                    className="text-lg sm:text-xl font-serif text-slate-900 mb-2.5 hover:text-blue-600 transition-colors cursor-pointer leading-snug"
                  >
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0">
                <button
                  onClick={() => setSelectedArticle(post)}
                  type="button"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  <span>Đọc Toàn Bộ Bài Viết</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      {/* Article Detail Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-slate-200 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="font-semibold text-slate-900 uppercase">
                  {selectedArticle.categoryLabel}
                </span>
                <span>·</span>
                <span>{selectedArticle.date}</span>
                <span>·</span>
                <span>{selectedArticle.readTime}</span>
              </div>
              <button
                onClick={() => setSelectedArticle(null)}
                className="w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-slate-900 flex items-center justify-center cursor-pointer transition-colors"
                aria-label="Close article modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif text-slate-900 leading-tight">
                {selectedArticle.title}
              </h2>

              <div className="relative aspect-16/9 w-full rounded-xl overflow-hidden bg-slate-50 border border-slate-200">
                <Image
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Structured Article Content */}
              <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-5">
                <p className="font-medium text-slate-900 text-sm sm:text-base border-l-2 border-blue-600 pl-4 italic">
                  {selectedArticle.content.intro}
                </p>

                {selectedArticle.content.sections.map((sec, idx) => (
                  <div key={idx} className="space-y-3">
                    <h3 className="text-base sm:text-lg font-serif font-bold text-slate-900">
                      {sec.heading}
                    </h3>
                    <p>{sec.body}</p>

                    {sec.codeSnippet && (
                      <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-900 text-slate-100 my-3">
                        <div className="px-4 py-2 bg-slate-800 border-b border-slate-700 flex items-center justify-between text-xs">
                          <span className="font-mono text-slate-400">code-snippet.ts</span>
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

                <p className="pt-2 font-medium text-slate-900">
                  {selectedArticle.content.conclusion}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                {selectedArticle.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-50 text-slate-600 border border-slate-200"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 border-t border-slate-100 bg-slate-50 flex items-center justify-between gap-3">
              <button
                onClick={handleShare}
                type="button"
                className="flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-900 cursor-pointer"
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </section>
  );
}
