"use client";

import React, { useState } from "react";
import { faqData } from "@/data/domSolutionData";
import { ChevronDown, Sparkles } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#FFFFFF] relative border-t border-[#EBE8E1]">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="flex justify-center mb-3">
            <div className="kicker-pill shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#8C7A58]" />
              <span>Giải Đáp & Chính Sách</span>
            </div>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif text-[#18181B] tracking-tight mb-4">
            Câu hỏi thường gặp & <span className="italic font-normal">Cam kết dịch vụ</span>
          </h2>
          <p className="text-sm sm:text-base text-[#52525B] leading-relaxed">
            Các câu hỏi về bản quyền mã nguồn, chính sách bảo hành 12 tháng và quy trình thanh toán minh bạch.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5 sm:space-y-4">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#FAF8F5] rounded-2xl border border-[#E8E5DC] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  type="button"
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-serif font-bold text-base sm:text-lg text-[#18181B] hover:text-[#8C7A58] transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-white border border-[#E8E5DC] text-[#18181B] flex items-center justify-center text-xs font-serif font-bold shrink-0">
                      ?
                    </span>
                    <span>{item.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#71717A] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#18181B]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 text-xs sm:text-sm text-[#52525B] leading-relaxed border-t border-[#E8E5DC] bg-white">
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
