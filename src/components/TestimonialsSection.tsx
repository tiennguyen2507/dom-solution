"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { testimonialsData } from "@/data/domSolutionData";
import { Star, ThumbsUp, ShieldCheck, Sparkles } from "lucide-react";

export default function TestimonialsSection() {
  const [likes, setLikes] = useState<{ [key: string]: number }>({
    "test-1": 34,
    "test-2": 29,
    "test-3": 42,
  });

  const handleLike = (id: string) => {
    setLikes((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-slate-50/70 relative border-t border-slate-200">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="flex justify-center mb-3">
            <div className="kicker-pill shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Đánh Giá Khách Hàng</span>
            </div>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif text-slate-900 tracking-tight mb-4">
            Được tin cậy bởi <span className="italic font-normal text-blue-600">những người dẫn đầu</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Sự tin cậy và hài lòng của khách hàng là bảo chứng vững chắc nhất cho chất lượng mã nguồn và sự tận tâm của Dom Solution.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonialsData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-slate-200 hover:border-blue-300 hover:shadow-[0_12px_32px_rgba(15,23,42,0.06)] transition-all duration-300"
            >
              <div>
                {/* Author Info */}
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-slate-50 border border-slate-200 shrink-0 shadow-xs">
                    <Image
                      src={item.avatar}
                      alt={item.author}
                      fill
                      className="object-cover"
                      sizes="48px"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-base text-slate-900 leading-snug">
                      {item.author}
                    </h3>
                    <p className="text-xs text-slate-500">
                      {item.role} · <strong className="text-slate-700">{item.company}</strong>
                    </p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-semibold text-slate-900 ml-1.5">
                    5.0 Tuyệt vời
                  </span>
                </div>

                {/* Quote */}
                <p className="font-serif italic text-sm sm:text-base text-slate-700 leading-relaxed mb-6 font-normal">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div>
                <div className="text-xs text-slate-600 bg-slate-50 border border-slate-200 px-3 py-1 rounded-full mb-4 inline-block font-medium">
                  Dự án: <strong className="text-slate-900">{item.project}</strong>
                </div>

                {/* Footer */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <button
                    onClick={() => handleLike(item.id)}
                    type="button"
                    className="flex items-center gap-1.5 hover:text-blue-600 transition-colors cursor-pointer"
                  >
                    <ThumbsUp className="w-3.5 h-3.5 text-blue-600" />
                    <span>Hữu ích ({likes[item.id] || 30})</span>
                  </button>
                  <span className="flex items-center gap-1 text-emerald-600 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Đã nghiệm thu
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

