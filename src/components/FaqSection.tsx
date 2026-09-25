"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { faqData } from "@/data/domSolutionData";
import { ChevronDown, Sparkles } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-slate-50/70 relative border-t border-slate-200">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <span>Giải Đáp & Chính Sách</span>
            </div>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif text-slate-900 tracking-tight mb-4">
            Câu hỏi thường gặp & <span className="italic font-normal text-blue-600">Cam kết dịch vụ</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Các câu hỏi về bản quyền mã nguồn, chính sách bảo hành 12 tháng và quy trình thanh toán minh bạch.
          </p>
        </motion.div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5 sm:space-y-4">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-colors shadow-2xs"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  type="button"
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-serif font-bold text-base sm:text-lg text-slate-900 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center text-xs font-serif font-bold shrink-0">
                      ?
                    </span>
                    <span>{item.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-blue-600" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

