"use client";

import React from "react";
import { processSteps } from "@/data/domSolutionData";
import { Clock, CheckCircle2, GitBranch } from "lucide-react";

export default function ProcessSection() {
  return (
    <section id="process" className="py-14 sm:py-24 bg-[#090D16] relative border-t border-white/10">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[11px] sm:text-xs font-semibold text-indigo-400 mb-3">
            <GitBranch className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-400" />
            <span>QUY TRÌNH LÀM VIỆC MINH BẠCH</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3 leading-tight">
            5 Bước Triển Khai <span className="text-gradient">Chuẩn Chỉ</span>
          </h2>
          <p className="text-xs sm:text-base text-slate-400">
            Báo cáo tiến độ trực quan hàng tuần, tương tác trực tiếp và cam kết bàn giao 100% mã nguồn.
          </p>
        </div>

        {/* 5-Step Connected Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 sm:gap-4 relative">
          {processSteps.map((item) => (
            <div
              key={item.step}
              className="glass-card p-4 sm:p-6 flex flex-col justify-between border border-white/10 relative group hover:border-blue-500/40 bg-slate-950/70"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-extrabold text-xs sm:text-sm shadow-md">
                    {item.step}
                  </span>
                  <span className="text-[10px] sm:text-xs font-semibold text-slate-400 bg-slate-900 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full border border-white/10 flex items-center gap-1">
                    <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-cyan-400" />
                    {item.timeframe}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-white mb-1.5 leading-snug">
                  {item.title}
                </h3>

                <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 mt-3 sm:pt-4 sm:mt-4 border-t border-white/10 flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>Nghiệm thu rõ ràng</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
