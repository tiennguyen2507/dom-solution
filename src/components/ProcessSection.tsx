"use client";

import React from "react";
import { processSteps } from "@/data/domSolutionData";
import { Clock, CheckCircle2, GitBranch } from "lucide-react";

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-[#090D16] relative border-t border-white/10">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400 mb-4">
            <GitBranch className="w-4 h-4 text-indigo-400" />
            <span>QUY TRÌNH LÀM VIỆC MINH BẠCH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            5 Bước Triển Khai <span className="text-gradient">Chuẩn Chỉ</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Báo cáo tiến độ trực quan hàng tuần, tương tác trực tiếp và cam kết bàn giao 100% mã nguồn.
          </p>
        </div>

        {/* 5-Step Connected Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {processSteps.map((item) => (
            <div
              key={item.step}
              className="glass-card p-6 flex flex-col justify-between border border-white/10 relative group hover:border-blue-500/40 bg-slate-950/70"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-extrabold text-sm shadow-md">
                    {item.step}
                  </span>
                  <span className="text-xs font-semibold text-slate-400 bg-slate-900 px-2.5 py-1 rounded-full border border-white/10 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-cyan-400" />
                    {item.timeframe}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/10 flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>Nghiệm thu rõ ràng</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
