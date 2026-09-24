"use client";

import React from "react";
import { processSteps } from "@/data/domSolutionData";
import { Clock, CheckCircle2, GitBranch } from "lucide-react";

export default function ProcessSection() {
  return (
    <section id="process" className="section-py bg-[#F0F2F5] border-t border-[#E4E6EB]">
      <div className="container max-w-5xl">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-kicker">
            <GitBranch className="w-3.5 h-3.5 text-[#0866FF]" />
            <span>Quy Trình Triển Khai</span>
          </div>
          <h2 className="section-title">5 Bước Làm Việc Minh Bạch & Chuẩn Chỉ</h2>
          <p className="section-subtitle">
            Cập nhật bản preview tiến độ hàng tuần, trao đổi trực tiếp và bàn giao toàn bộ source code.
          </p>
        </div>

        {/* Facebook-style steps feed */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {processSteps.map((item) => (
            <div
              key={item.step}
              className="fb-card p-4 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="w-7 h-7 rounded-full bg-[#0866FF] text-white flex items-center justify-center font-black text-[13px]">
                    {item.step}
                  </span>
                  <span className="text-[11px] font-semibold text-[#65676B] bg-[#F0F2F5] px-2 py-0.5 rounded flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#0866FF]" />
                    {item.timeframe}
                  </span>
                </div>

                <h3 className="text-[15px] font-bold text-[#050505] mb-1 leading-snug">
                  {item.title}
                </h3>

                <p className="text-[12px] text-[#65676B] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-[#E4E6EB] flex items-center gap-1 text-[11px] font-semibold text-[#31A24C]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Nghiệm thu tiêu chuẩn</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
