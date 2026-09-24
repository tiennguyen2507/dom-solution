"use client";

import React, { useState } from "react";
import { faqData } from "@/data/domSolutionData";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-14 sm:py-24 bg-[#090D16] relative border-t border-white/10">
      <div className="container max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[11px] sm:text-xs font-semibold text-blue-400 mb-3">
            <HelpCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400" />
            <span>CÂU HỎI THƯỜNG GẶP</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3 leading-tight">
            Giải Đáp Thắc Mắc & <span className="text-gradient">Chính Sách</span>
          </h2>
          <p className="text-xs sm:text-base text-slate-400">
            Các giải đáp rõ ràng về quyền sở hữu mã nguồn, chính sách bảo hành kỹ thuật và tiến độ triển khai.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3 sm:space-y-4">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-card overflow-hidden border border-white/10 transition-all bg-slate-950/70"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left p-4 sm:p-6 flex items-center justify-between gap-3 sm:gap-4 font-bold text-sm sm:text-lg text-white hover:text-cyan-400 transition-colors"
                >
                  <span className="flex items-center gap-2.5 sm:gap-3.5">
                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center text-xs sm:text-sm font-extrabold shrink-0 border border-blue-500/20">
                      ?
                    </span>
                    <span>{item.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-cyan-400" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-6 sm:pb-6 pt-2 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/10 bg-slate-900/40">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
