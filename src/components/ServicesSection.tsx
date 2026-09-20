import React from "react";
import { servicesData } from "@/data/interiorData";
import { Compass, Hammer, Crown, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

export default function ServicesSection() {
  const getIcon = (name: string) => {
    switch (name) {
      case "Compass":
        return <Compass size={28} color="#9A7745" />;
      case "Hammer":
        return <Hammer size={28} color="#9A7745" />;
      case "Crown":
        return <Crown size={28} color="#9A7745" />;
      default:
        return <Sparkles size={28} color="#9A7745" />;
    }
  };

  return (
    <section id="dich-vu" className="section-py" style={{ backgroundColor: "#FDFBF7" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>Dịch Vụ Đẳng Cấp</span>
          </div>
          <h2 className="section-title">
            Giải Pháp Thiết Kế & Thi Công <span className="text-gold-gradient">Chung Cư Trọn Gói</span>
          </h2>
          <div className="gold-divider" />
          <p className="section-desc">
            Từ ý tưởng bản vẽ 3D đến thi công hoàn thiện tỉ mỉ, SHOME LUXURY đồng hành cùng quý gia chủ kiến tạo tổ ấm tiện nghi, sang trọng và chuẩn mực.
          </p>
        </div>

        {/* Services Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "28px",
          }}
        >
          {servicesData.map((srv) => (
            <article
              key={srv.id}
              className="luxury-card"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <div>
                {/* Top Badge & Icon */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "20px",
                  }}
                >
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "14px",
                      background: "var(--color-gold-light)",
                      border: "1px solid rgba(197, 168, 128, 0.4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {getIcon(srv.iconName)}
                  </div>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: "700",
                      background: "#F6EFE6",
                      color: "#9A7745",
                      padding: "4px 12px",
                      borderRadius: "20px",
                      border: "1px solid #E8DEC8",
                    }}
                  >
                    {srv.bannerBadge}
                  </span>
                </div>

                {/* Service Title */}
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.35rem",
                    fontWeight: "700",
                    color: "#1A1715",
                    marginBottom: "8px",
                    lineHeight: "1.3",
                  }}
                >
                  {srv.title}
                </h3>
                <div
                  style={{
                    fontSize: "0.85rem",
                    color: "#B68C52",
                    fontWeight: "600",
                    marginBottom: "14px",
                  }}
                >
                  {srv.subtitle}
                </div>

                {/* Description */}
                <p
                  style={{
                    fontSize: "0.92rem",
                    color: "#524B45",
                    lineHeight: "1.6",
                    marginBottom: "22px",
                  }}
                >
                  {srv.description}
                </p>

                {/* Feature List */}
                <ul
                  style={{
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    marginBottom: "24px",
                    paddingTop: "16px",
                    borderTop: "1px solid #F0E8DC",
                  }}
                >
                  {srv.features.map((feat, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "10px",
                        fontSize: "0.85rem",
                        color: "#2C2723",
                        fontWeight: "500",
                      }}
                    >
                      <CheckCircle2 size={16} color="#C5A880" style={{ flexShrink: 0, marginTop: "2px" }} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Action */}
              <a
                href="#tu-van"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontWeight: "700",
                  fontSize: "0.88rem",
                  color: "#9A7745",
                  marginTop: "12px",
                }}
              >
                <span>Nhận báo giá chi tiết</span>
                <ArrowRight size={15} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
