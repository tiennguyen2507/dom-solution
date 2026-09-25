"use client";

import React from "react";
import { processSteps } from "@/data/domSolutionData";
import { Clock, CheckCircle2, Sparkles } from "lucide-react";

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 sm:py-28 bg-[#FFFFFF] relative border-t border-[#EBE8E1]">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="flex justify-center mb-3">
            <div className="kicker-pill shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#8C7A58]" />
              <span>Quy Trình Triển Khai</span>
            </div>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif text-[#18181B] tracking-tight mb-4">
            5 Bước làm việc <span className="italic font-normal">chặt chẽ</span> & minh bạch
          </h2>
          <p className="text-sm sm:text-base text-[#52525B] leading-relaxed">
            Mỗi giai đoạn đều có mốc nghiệm thu cụ thể, báo cáo tiến độ trực quan và hỗ trợ tương tác kỹ thuật liên tục.
          </p>
        </div>

        {/* 5-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-5">
          {processSteps.map((item) => (
            <div
              key={item.step}
              className="bg-[#FAF8F5] rounded-2xl p-6 flex flex-col justify-between border border-[#E8E5DC] hover:border-[#D5D0C5] hover:shadow-[0_8px_24px_rgba(26,26,24,0.05)] transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-9 h-9 rounded-full bg-[#18181B] text-white flex items-center justify-center font-serif font-bold text-sm shadow-xs">
                    {item.step}
                  </span>
                  <span className="text-[11px] font-medium text-[#71717A] bg-white px-2.5 py-1 rounded-full border border-[#E8E5DC] flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#8C7A58]" />
                    {item.timeframe}
                  </span>
                </div>

                <h3 className="text-base font-serif font-bold text-[#18181B] mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-[#52525B] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#E8E5DC] flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Nghiệm thu rõ ràng</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
