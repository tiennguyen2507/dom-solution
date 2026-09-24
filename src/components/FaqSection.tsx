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
    <section id="faq" className="section-py bg-white border-t border-[#E4E6EB]">
      <div className="container max-w-4xl">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-kicker">
            <HelpCircle className="w-3.5 h-3.5 text-[#0866FF]" />
            <span>Câu Hỏi Thường Gặp</span>
          </div>
          <h2 className="section-title">Giải Đáp Thắc Mắc & Chính Sách</h2>
          <p className="section-subtitle">
            Các giải đáp rõ ràng về quyền sở hữu mã nguồn, chính sách bảo hành kỹ thuật và tiến độ triển khai.
          </p>
        </div>

        {/* FAQ in Facebook Group / Help Center style */}
        <div className="space-y-3">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="fb-card overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left p-4 flex items-center justify-between gap-4 font-bold text-[15px] text-[#050505] hover:bg-[#F2F3F5] transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-[#E7F3FF] text-[#0866FF] flex items-center justify-center text-[12px] font-bold shrink-0">
                      ?
                    </span>
                    <span>{item.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#65676B] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#0866FF]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-[14px] text-[#65676B] leading-relaxed border-t border-[#E4E6EB] bg-[#F7F8FA]">
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
