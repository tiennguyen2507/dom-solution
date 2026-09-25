"use client";

import React from "react";
import { motion } from "motion/react";
import { processSteps } from "@/data/domSolutionData";
import { Clock, CheckCircle2, Sparkles } from "lucide-react";

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 sm:py-28 bg-white relative border-t border-slate-200">
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
              <span>Quy Trình Triển Khai</span>
            </div>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif text-slate-900 tracking-tight mb-4">
            5 Bước làm việc <span className="italic font-normal text-blue-600">chặt chẽ</span> & minh bạch
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Mỗi giai đoạn đều có mốc nghiệm thu cụ thể, báo cáo tiến độ trực quan và hỗ trợ tương tác kỹ thuật liên tục.
          </p>
        </motion.div>

        {/* 5-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-5">
          {processSteps.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-6 flex flex-col justify-between border border-slate-200 hover:border-blue-300 hover:shadow-[0_12px_28px_rgba(15,23,42,0.06)] transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-serif font-bold text-sm shadow-xs">
                    {item.step}
                  </span>
                  <span className="text-[11px] font-medium text-slate-600 bg-slate-50 px-2.5 py-1 rounded-full border border-slate-200 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-blue-600" />
                    {item.timeframe}
                  </span>
                </div>

                <h3 className="text-base font-serif font-bold text-slate-900 mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Nghiệm thu rõ ràng</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

