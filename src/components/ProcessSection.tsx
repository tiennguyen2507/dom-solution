import React from "react";
import { processSteps } from "@/data/interiorData";
import { Sparkles, Clock } from "lucide-react";

export default function ProcessSection() {
  return (
    <section id="quy-trinh" className="section-py" style={{ backgroundColor: "#F6EFE6" }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>Tiêu Chuẩn Thực Hiện</span>
          </div>
          <h2 className="section-title">
            Quy Trình 5 Bước <span className="text-gold-gradient">Chuẩn Mực & Minh Bạch</span>
          </h2>
          <div className="gold-divider" />
          <p className="section-desc">
            Từ lúc tiếp nhận nhu cầu đến khi trao tay chìa khóa tổ ấm hoàn hảo, chúng tôi kiểm soát chất lượng khắt khe qua từng cột mốc.
          </p>
        </div>

        {/* Steps Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "24px",
            position: "relative",
          }}
        >
          {processSteps.map((step, idx) => (
            <div
              key={idx}
              className="luxury-card"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "28px 22px",
                border: "1px solid #E8DEC8",
              }}
            >
              <div>
                {/* Step Number Badge */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "16px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "2rem",
                      fontWeight: "800",
                      background: "var(--gradient-gold)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      lineHeight: "1",
                    }}
                  >
                    {step.step}
                  </span>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      fontSize: "0.75rem",
                      color: "#9A7745",
                      fontWeight: "600",
                      background: "#FAF5EE",
                      padding: "4px 8px",
                      borderRadius: "12px",
                      border: "1px solid #E8DEC8",
                    }}
                  >
                    <Clock size={12} />
                    <span>{step.time}</span>
                  </div>
                </div>

                {/* Step Title */}
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.15rem",
                    fontWeight: "700",
                    color: "#1A1715",
                    marginBottom: "10px",
                    lineHeight: "1.35",
                  }}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: "0.86rem",
                    color: "#524B45",
                    lineHeight: "1.6",
                  }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
