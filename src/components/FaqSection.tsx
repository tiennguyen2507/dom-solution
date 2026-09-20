"use client";

import React, { useState } from "react";
import { faqData } from "@/data/interiorData";
import { HelpCircle, ChevronDown, Sparkles } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-py" style={{ backgroundColor: "#F6EFE6" }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-badge">
            <HelpCircle size={14} />
            <span>Giải Đáp Thắc Mắc</span>
          </div>
          <h2 className="section-title">
            Câu Hỏi Thường Gặp Về <span className="text-gold-gradient">Nội Thất Chung Cư</span>
          </h2>
          <div className="gold-divider" />
          <p className="section-desc">
            Tổng hợp những băn khoăn phổ biến nhất của quý gia chủ khi chuẩn bị thiết kế và thi công hoàn thiện căn hộ.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div style={{ maxWidth: "860px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "14px" }}>
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                style={{
                  background: "#FFFFFF",
                  border: isOpen ? "1.5px solid #C5A880" : "1px solid #E8DEC8",
                  borderRadius: "14px",
                  overflow: "hidden",
                  transition: "all 0.25s ease",
                  boxShadow: isOpen ? "var(--shadow-md)" : "var(--shadow-sm)",
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  style={{
                    width: "100%",
                    padding: "20px 24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "16px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.05rem",
                      fontWeight: "700",
                      color: isOpen ? "#9A7745" : "#1A1715",
                      lineHeight: "1.4",
                    }}
                  >
                    {faq.question}
                  </span>
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      background: isOpen ? "var(--color-gold-light)" : "#FAF5EE",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    <ChevronDown size={18} color="#9A7745" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: "0 24px 22px 24px",
                      fontSize: "0.95rem",
                      color: "#524B45",
                      lineHeight: "1.75",
                      borderTop: "1px solid #FAF5EE",
                      paddingTop: "14px",
                    }}
                  >
                    {faq.answer}
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
