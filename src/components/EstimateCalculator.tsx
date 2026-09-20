"use client";

import React, { useState } from "react";
import { Calculator, Sparkles, Check, ArrowRight } from "lucide-react";

export default function EstimateCalculator() {
  const [apartmentType, setApartmentType] = useState<string>("2pn");
  const [area, setArea] = useState<number>(75);
  const [style, setStyle] = useState<string>("luxury");
  const [includeRoughWork, setIncludeRoughWork] = useState<boolean>(true);

  // Cost calculations in VNĐ per m2
  const styleRates: Record<string, { wood: number; label: string; desc: string }> = {
    modern: {
      wood: 2800000,
      label: "Hiện Đại Tinh Tế (MDF An Cường)",
      desc: "Gỗ MDF lõi xanh chống ẩm An Cường, phụ kiện Hafele tiêu chuẩn",
    },
    luxury: {
      wood: 4500000,
      label: "Luxury Sang Trọng (Titan Gold & Gỗ Óc Chó)",
      desc: "Gỗ óc chó/acrylic nẹp kim loại titan gold PVD, đá Marble, da Ý",
    },
    neoclassic: {
      wood: 5200000,
      label: "Tân Cổ Điển / Indochine Quý Tộc",
      desc: "Gỗ sồi/gõ đỏ sơn Inchem 7 lớp, phào chỉ PU dát vàng, hoa văn tinh xảo",
    },
  };

  const roughWorkRate = 1200000; // VNĐ per m2 for electrical, ceiling, painting, floor if checked

  const woodCost = area * styleRates[style].wood;
  const roughCost = includeRoughWork ? area * roughWorkRate : 0;
  const designFeeSaved = area * 250000; // 250k/m2 design fee (discounted 100%)
  const totalCost = woodCost + roughCost;

  const formatVND = (num: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
      maximumFractionDigits: 0,
    }).format(num);
  };

  return (
    <section id="du-toan" className="section-py" style={{ backgroundColor: "#FDFBF7" }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-badge">
            <Calculator size={14} />
            <span>Công Cụ Tiện Ích</span>
          </div>
          <h2 className="section-title">
            Dự Toán Chi Phí <span className="text-gold-gradient">Nội Thất Chung Cư</span>
          </h2>
          <div className="gold-divider" />
          <p className="section-desc">
            Ước tính ngân sách thi công trọn gói nhanh chóng trong 30 giây. Miễn phí 100% phí thiết kế 3D khi ký hợp đồng thi công.
          </p>
        </div>

        {/* Interactive Calculator Box */}
        <div
          className="glass-panel calculator-container"
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            padding: "36px",
            borderRadius: "24px",
            border: "1.5px solid #E8DEC8",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "36px",
          }}
        >
          {/* Controls Column */}
          <div>
            {/* 1. Apartment Type */}
            <div style={{ marginBottom: "24px" }}>
              <label style={{ display: "block", fontWeight: "700", fontSize: "0.95rem", marginBottom: "12px", color: "#1A1715" }}>
                1. Loại Căn Hộ
              </label>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr))", gap: "10px" }}>
                {[
                  { key: "1pn", label: "Căn 1 PN", defArea: 48 },
                  { key: "2pn", label: "Căn 2 PN", defArea: 75 },
                  { key: "3pn", label: "Căn 3 PN", defArea: 105 },
                  { key: "duplex", label: "Duplex / VIP", defArea: 160 },
                ].map((item) => (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => {
                      setApartmentType(item.key);
                      setArea(item.defArea);
                    }}
                    style={{
                      padding: "12px 10px",
                      borderRadius: "10px",
                      border: apartmentType === item.key ? "1.5px solid #C5A880" : "1px solid #E8DEC8",
                      background: apartmentType === item.key ? "var(--color-gold-light)" : "#FFFFFF",
                      color: apartmentType === item.key ? "#7D5F34" : "#524B45",
                      fontWeight: apartmentType === item.key ? "700" : "500",
                      fontSize: "0.9rem",
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Area Slider */}
            <div style={{ marginBottom: "24px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                <label style={{ fontWeight: "700", fontSize: "0.95rem", color: "#1A1715" }}>
                  2. Diện Tích Căn Hộ: <strong style={{ color: "#9A7745", fontSize: "1.1rem" }}>{area} m²</strong>
                </label>
              </div>
              <input
                type="range"
                min="35"
                max="300"
                step="5"
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                style={{
                  width: "100%",
                  accentColor: "#C5A880",
                  height: "8px",
                  cursor: "pointer",
                }}
              />
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.78rem", color: "#82776E", marginTop: "4px" }}>
                <span>35 m² (Studio)</span>
                <span>150 m²</span>
                <span>300 m² (Penthouse)</span>
              </div>
            </div>

            {/* 3. Interior Style */}
            <div style={{ marginBottom: "24px" }}>
              <label style={{ display: "block", fontWeight: "700", fontSize: "0.95rem", marginBottom: "12px", color: "#1A1715" }}>
                3. Phong Cách Thiết Kế
              </label>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {Object.entries(styleRates).map(([key, info]) => (
                  <div
                    key={key}
                    onClick={() => setStyle(key)}
                    style={{
                      padding: "12px 16px",
                      borderRadius: "12px",
                      border: style === key ? "1.5px solid #C5A880" : "1px solid #E8DEC8",
                      background: style === key ? "rgba(243, 236, 226, 0.6)" : "#FFFFFF",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      transition: "all 0.2s",
                    }}
                  >
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        border: "2px solid #C5A880",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: style === key ? "#C5A880" : "transparent",
                      }}
                    >
                      {style === key && <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#FFFFFF" }} />}
                    </div>
                    <div>
                      <div style={{ fontWeight: "700", fontSize: "0.9rem", color: "#1A1715" }}>{info.label}</div>
                      <div style={{ fontSize: "0.78rem", color: "#6B6158" }}>{info.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Include Rough Construction */}
            <div style={{ marginBottom: "10px" }}>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  cursor: "pointer",
                  fontSize: "0.9rem",
                  fontWeight: "600",
                  color: "#1A1715",
                }}
              >
                <input
                  type="checkbox"
                  checked={includeRoughWork}
                  onChange={(e) => setIncludeRoughWork(e.target.checked)}
                  style={{ width: "18px", height: "18px", accentColor: "#C5A880" }}
                />
                <span>Bao gồm gói cải tạo thô (Trần thạch cao, sơn bả, sàn gỗ, điện led)</span>
              </label>
            </div>
          </div>

          {/* Results & Offer Summary Box */}
          <div
            style={{
              background: "#1A1715",
              color: "#FFFFFF",
              borderRadius: "18px",
              padding: "28px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              border: "1px solid #3A332E",
              boxShadow: "var(--shadow-lg)",
            }}
          >
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "#E6C894",
                  fontSize: "0.8rem",
                  fontWeight: "700",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                }}
              >
                <Sparkles size={15} />
                <span>Bảng Ước Tính Dự Toán</span>
              </div>

              {/* Total Price Display */}
              <div style={{ marginBottom: "24px" }}>
                <span style={{ fontSize: "0.85rem", color: "#A89C90", display: "block" }}>Tổng chi phí dự toán (Tạm tính):</span>
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(1.8rem, 2.8vw, 2.4rem)",
                    fontWeight: "800",
                    color: "#F0D5A6",
                    lineHeight: "1.2",
                  }}
                >
                  {formatVND(totalCost)}
                </div>
                <div style={{ fontSize: "0.78rem", color: "#8E8277", marginTop: "4px" }}>
                  * Giá thực tế có thể thay đổi tùy thuộc vào hiện trạng và bản vẽ chi tiết
                </div>
              </div>

              {/* Breakdown List */}
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", borderTop: "1px solid #332D28", paddingTop: "16px", marginBottom: "24px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.88rem" }}>
                  <span style={{ color: "#D2C1A8" }}>Sản xuất & lắp đặt đồ gỗ:</span>
                  <strong>{formatVND(woodCost)}</strong>
                </div>
                {includeRoughWork && (
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.88rem" }}>
                    <span style={{ color: "#D2C1A8" }}>Cải tạo thô & điện nước:</span>
                    <strong>{formatVND(roughCost)}</strong>
                  </div>
                )}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "0.88rem",
                    color: "#48BB78",
                    fontWeight: "700",
                  }}
                >
                  <span>Ưu đãi tặng 100% phí thiết kế 3D:</span>
                  <span>- {formatVND(designFeeSaved)}</span>
                </div>
              </div>
            </div>

            {/* Direct Form CTA */}
            <div>
              <a
                href="#tu-van"
                className="btn-luxury-primary"
                style={{
                  width: "100%",
                  textAlign: "center",
                  padding: "14px",
                  fontSize: "0.92rem",
                }}
              >
                <span>Nhận Bảng Bóc Tách Chi Tiết</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 850px) {
          .calculator-container {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
}
