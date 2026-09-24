"use client";

import React, { useState } from "react";
import Image from "next/image";
import { testimonialsData } from "@/data/domSolutionData";
import { Star, ThumbsUp, MessageSquare, ShieldCheck } from "lucide-react";

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
    <section id="testimonials" className="section-py bg-[#F0F2F5] border-t border-[#E4E6EB]">
      <div className="container max-w-5xl">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-kicker">
            <Star className="w-3.5 h-3.5 text-[#0866FF]" />
            <span>Đánh Giá Từ Khách Hàng</span>
          </div>
          <h2 className="section-title">Nhận Xét Của Đối Tác & Khách Hàng</h2>
          <p className="section-subtitle">
            Cảm nhận thực tế từ các Founder và Doanh nghiệp sau khi hoàn thành dự án cùng Dom Solution.
          </p>
        </div>

        {/* Facebook Post Style Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="fb-card p-5 flex flex-col justify-between"
            >
              <div>
                {/* Author row */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden bg-[#CED0D4] border border-[#E4E6EB] shrink-0">
                    <Image
                      src={item.avatar}
                      alt={item.author}
                      fill
                      className="object-cover"
                      sizes="44px"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-[15px] text-[#050505] leading-snug">
                      {item.author}
                    </h4>
                    <p className="text-[12px] text-[#65676B]">
                      {item.role} · {item.company}
                    </p>
                  </div>
                </div>

                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 text-amber-500 mb-2.5">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-[12px] font-semibold text-[#65676B] ml-1">
                    5.0 Đánh giá xuất sắc
                  </span>
                </div>

                {/* Review Quote Body */}
                <p className="text-[14px] text-[#050505] leading-relaxed mb-4">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div>
                <div className="text-[12px] text-[#0866FF] font-medium bg-[#E7F3FF] px-2.5 py-1 rounded mb-3 inline-block">
                  Dự án: {item.project}
                </div>

                {/* FB Post Interaction Footer */}
                <div className="pt-2 border-t border-[#E4E6EB] flex items-center justify-between text-[13px] text-[#65676B]">
                  <button
                    onClick={() => handleLike(item.id)}
                    className="flex items-center gap-1.5 hover:text-[#0866FF] transition-colors"
                  >
                    <ThumbsUp className="w-4 h-4" />
                    <span>Hữu ích ({likes[item.id] || 30})</span>
                  </button>
                  <span className="flex items-center gap-1 text-[#31A24C] font-medium text-[12px]">
                    <ShieldCheck className="w-3.5 h-3.5" />
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
