"use client";

import React, { useState } from "react";
import Image from "next/image";
import { testimonialsData } from "@/data/domSolutionData";
import { Star, ThumbsUp, ShieldCheck } from "lucide-react";

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
    <section id="testimonials" className="py-14 sm:py-24 bg-[#090D16] relative border-t border-white/10">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[11px] sm:text-xs font-semibold text-amber-400 mb-3">
            <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 fill-amber-400" />
            <span>ĐÁNH GIÁ TỪ KHÁCH HÀNG THỰC TẾ</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3 leading-tight">
            Cảm Nhận Từ <span className="text-gradient-amber">Đối Tác & Founder</span>
          </h2>
          <p className="text-xs sm:text-base text-slate-400">
            Sự hài lòng của khách hàng là minh chứng rõ nhất cho chất lượng mã nguồn & cam kết tiến độ.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="glass-card p-4 sm:p-7 flex flex-col justify-between border border-white/10 relative group bg-slate-950/70"
            >
              <div>
                {/* Author row */}
                <div className="flex items-center gap-3 mb-3.5">
                  <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-slate-800 border border-white/20 shrink-0 shadow-md">
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
                    <h4 className="font-bold text-sm sm:text-base text-white leading-snug">
                      {item.author}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-400 font-medium">
                      {item.role} · <strong className="text-slate-300">{item.company}</strong>
                    </p>
                  </div>
                </div>

                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 text-amber-400 mb-2.5">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-[11px] sm:text-xs font-bold text-slate-300 ml-1">
                    5.0 Đánh giá xuất sắc
                  </span>
                </div>

                {/* Review Quote Body */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 sm:mb-6 italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div>
                <div className="text-[10px] sm:text-xs text-cyan-400 font-semibold bg-cyan-950/60 border border-cyan-500/30 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full mb-3 inline-block">
                  Dự án: {item.project}
                </div>

                {/* Footer */}
                <div className="pt-2.5 sm:pt-3 border-t border-white/10 flex items-center justify-between text-[11px] sm:text-xs text-slate-400">
                  <button
                    onClick={() => handleLike(item.id)}
                    className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
                  >
                    <ThumbsUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400" />
                    <span>Hữu ích ({likes[item.id] || 30})</span>
                  </button>
                  <span className="flex items-center gap-1 text-emerald-400 font-medium text-[11px] sm:text-xs">
                    <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    Đã xác thực
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
