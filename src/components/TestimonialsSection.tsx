import React from "react";
import Image from "next/image";
import { testimonialsData } from "@/data/interiorData";
import { Sparkles, Star, Quote } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section id="danh-gia" className="section-py" style={{ backgroundColor: "#FDFBF7" }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>Sự Hài Lòng Của Khách Hàng</span>
          </div>
          <h2 className="section-title">
            Khách Hàng Nói Gì Về <span className="text-gold-gradient">SHOME LUXURY</span>
          </h2>
          <div className="gold-divider" />
          <p className="section-desc">
            Hơn 850+ gia chủ tại các khu đô thị cao cấp đã tin tưởng lựa chọn chúng tôi để hiện thực hóa không gian sống mơ ước.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "28px",
          }}
        >
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="luxury-card"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
              }}
            >
              {/* Quote Watermark Icon */}
              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  opacity: 0.15,
                  color: "#C5A880",
                }}
              >
                <Quote size={48} />
              </div>

              <div>
                {/* Rating Stars */}
                <div style={{ display: "flex", gap: "4px", marginBottom: "16px" }}>
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#D4AF37" color="#D4AF37" />
                  ))}
                </div>

                {/* Quote Content */}
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "#3D3630",
                    lineHeight: "1.7",
                    fontStyle: "italic",
                    marginBottom: "24px",
                  }}
                >
                  &ldquo;{item.content}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  paddingTop: "16px",
                  borderTop: "1px solid #F0E8DC",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: "2px solid #C5A880",
                    flexShrink: 0,
                  }}
                >
                  <Image
                    src={item.avatar}
                    alt={`Khách hàng ${item.name} - ${item.apartment}`}
                    fill
                    sizes="48px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div>
                  <div style={{ fontWeight: "700", fontSize: "0.95rem", color: "#1A1715" }}>{item.name}</div>
                  <div style={{ fontSize: "0.78rem", color: "#9A7745", fontWeight: "600" }}>{item.apartment}</div>
                  <div style={{ fontSize: "0.72rem", color: "#82776E" }}>{item.year}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
