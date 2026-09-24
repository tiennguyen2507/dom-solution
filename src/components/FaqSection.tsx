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
    <section id="faq" className="py-24 bg-[#090D16] relative border-t border-white/10">
      <div className="container max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 mb-4">
            <HelpCircle className="w-4 h-4 text-blue-400" />
            <span>CÂU HỎI THƯỜNG GẶP</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            Giải Đáp Thắc Mắc & <span className="text-gradient">Chính Sách</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Các giải đáp rõ ràng về quyền sở hữu mã nguồn, chính sách bảo hành kỹ thuật và tiến độ triển khai.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-card overflow-hidden border border-white/10 transition-all bg-slate-950/70"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-white hover:text-cyan-400 transition-colors"
                >
                  <span className="flex items-center gap-3.5">
                    <span className="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center text-sm font-extrabold shrink-0 border border-blue-500/20">
                      ?
                    </span>
                    <span>{item.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-cyan-400" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm text-slate-300 leading-relaxed border-t border-white/10 bg-slate-900/40">
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
