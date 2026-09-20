"use client";

import React, { useState } from "react";
import { Sparkles, Send, CheckCircle2, ShieldCheck, Gift, PhoneCall } from "lucide-react";
import { siteConfig } from "@/lib/seoConfig";

export default function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    project: "",
    area: "",
    demand: "Thi công trọn gói chìa khóa trao tay",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
  };

  return (
    <section id="tu-van" className="section-py" style={{ backgroundColor: "#FDFBF7", position: "relative" }}>
      <div className="container">
        <div
          className="glass-panel consultation-grid"
          style={{
            maxWidth: "1080px",
            margin: "0 auto",
            borderRadius: "28px",
            overflow: "hidden",
            border: "2px solid #E8DEC8",
            display: "grid",
            gridTemplateColumns: "1fr",
            boxShadow: "var(--shadow-lg)",
          }}
        >
          {/* Left Info Column with Gold Theme */}
          <div
            style={{
              background: "linear-gradient(145deg, #24201D 0%, #151311 100%)",
              color: "#FFFFFF",
              padding: "48px 40px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              borderRight: "1px solid #3A332E",
            }}
          >
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "rgba(197, 168, 128, 0.15)",
                  color: "#E6C894",
                  padding: "6px 14px",
                  borderRadius: "20px",
                  fontSize: "0.8rem",
                  fontWeight: "700",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  marginBottom: "20px",
                  border: "1px solid rgba(197, 168, 128, 0.3)",
                }}
              >
                <Sparkles size={14} />
                <span>Đăng Ký Tư Vấn & Nhận Quà Tặng</span>
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1.7rem, 2.5vw, 2.2rem)",
                  fontWeight: "800",
                  color: "#FAF5EE",
                  lineHeight: "1.25",
                  marginBottom: "16px",
                }}
              >
                Kiến Tạo Không Gian Sống <span style={{ color: "#E6C894" }}>Độc Bản</span>
              </h3>

              <p style={{ fontSize: "0.95rem", color: "#C5BCB3", lineHeight: "1.7", marginBottom: "32px" }}>
                Để lại thông tin căn hộ của bạn, kiến trúc sư trưởng SHOME LUXURY sẽ liên hệ tư vấn chuyên sâu và gửi bảng dự toán sơ bộ trong 15 phút.
              </p>

              {/* Special Promotion Gifts */}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "32px" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "8px",
                      background: "rgba(197, 168, 128, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#E6C894",
                      flexShrink: 0,
                    }}
                  >
                    <Gift size={18} />
                  </div>
                  <div>
                    <strong style={{ fontSize: "0.95rem", color: "#FAF5EE" }}>Tặng 100% Phí Thiết Kế 3D</strong>
                    <div style={{ fontSize: "0.8rem", color: "#9E9287" }}>Áp dụng khi ký hợp đồng thi công trọn gói</div>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "8px",
                      background: "rgba(197, 168, 128, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#E6C894",
                      flexShrink: 0,
                    }}
                  >
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <strong style={{ fontSize: "0.95rem", color: "#FAF5EE" }}>Bảo Hành 5 Năm & Bảo Trì Trọn Đời</strong>
                    <div style={{ fontSize: "0.8rem", color: "#9E9287" }}>Cam kết chất lượng từ xưởng sản xuất 3.500m²</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Hotline Call */}
            <div
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                padding: "16px 20px",
                borderRadius: "12px",
                border: "1px solid rgba(197, 168, 128, 0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                <span style={{ fontSize: "0.75rem", color: "#A89C90" }}>Cần tư vấn gấp? Gọi ngay:</span>
                <div style={{ fontWeight: "800", color: "#E6C894", fontSize: "1.1rem" }}>
                  {siteConfig.contact.hotlineDisplay}
                </div>
              </div>
              <a
                href={`tel:${siteConfig.contact.phone.replace(/[^0-9]/g, "")}`}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "var(--gradient-gold)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#1A1715",
                }}
              >
                <PhoneCall size={18} />
              </a>
            </div>
          </div>

          {/* Right Form Column */}
          <div style={{ padding: "48px 40px", background: "#FFFFFF" }}>
            {submitted ? (
              <div
                style={{
                  textAlign: "center",
                  padding: "40px 20px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    width: "72px",
                    height: "72px",
                    borderRadius: "50%",
                    background: "var(--color-gold-light)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#9A7745",
                    marginBottom: "20px",
                  }}
                >
                  <CheckCircle2 size={40} />
                </div>
                <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "1.6rem", color: "#1A1715", marginBottom: "12px" }}>
                  Đăng Ký Thành Công!
                </h4>
                <p style={{ fontSize: "0.95rem", color: "#524B45", maxWidth: "400px", lineHeight: "1.6", marginBottom: "24px" }}>
                  Cảm ơn quý khách <strong>{formData.name || "bạn"}</strong>. Chuyên viên kiến trúc của SHOME LUXURY sẽ liên hệ lại qua số điện thoại <strong>{formData.phone}</strong> trong ít phút!
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="btn-luxury-outline"
                  style={{ fontSize: "0.9rem", padding: "10px 24px" }}
                >
                  Gửi Yêu Cầu Khác
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <h4
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.4rem",
                    fontWeight: "700",
                    color: "#1A1715",
                    marginBottom: "4px",
                  }}
                >
                  Nhận Báo Giá & Phác Thảo 3D Miễn Phí
                </h4>
                <p style={{ fontSize: "0.85rem", color: "#82776E", marginBottom: "8px" }}>
                  Vui lòng điền thông tin bên dưới để nhận chính sách ưu đãi tốt nhất tháng này.
                </p>

                {/* Name & Phone Grid */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="form-row">
                  <div>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "700", marginBottom: "6px", color: "#2C2723" }}>
                      Họ và tên <span style={{ color: "#E53E3E" }}>*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Nguyễn Văn A"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "12px 14px",
                        borderRadius: "10px",
                        border: "1.5px solid #E8DEC8",
                        outline: "none",
                        fontSize: "0.92rem",
                        backgroundColor: "#FAF8F5",
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "700", marginBottom: "6px", color: "#2C2723" }}>
                      Số điện thoại (Zalo) <span style={{ color: "#E53E3E" }}>*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0988 xxx xxx"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "12px 14px",
                        borderRadius: "10px",
                        border: "1.5px solid #E8DEC8",
                        outline: "none",
                        fontSize: "0.92rem",
                        backgroundColor: "#FAF8F5",
                      }}
                    />
                  </div>
                </div>

                {/* Project & Area */}
                <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "16px" }} className="form-row">
                  <div>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "700", marginBottom: "6px", color: "#2C2723" }}>
                      Tên dự án / Tòa chung cư
                    </label>
                    <input
                      type="text"
                      placeholder="VD: Vinhomes Grand Park, Masteri..."
                      value={formData.project}
                      onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "12px 14px",
                        borderRadius: "10px",
                        border: "1.5px solid #E8DEC8",
                        outline: "none",
                        fontSize: "0.92rem",
                        backgroundColor: "#FAF8F5",
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "700", marginBottom: "6px", color: "#2C2723" }}>
                      Diện tích (m²)
                    </label>
                    <input
                      type="text"
                      placeholder="VD: 75m²"
                      value={formData.area}
                      onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "12px 14px",
                        borderRadius: "10px",
                        border: "1.5px solid #E8DEC8",
                        outline: "none",
                        fontSize: "0.92rem",
                        backgroundColor: "#FAF8F5",
                      }}
                    />
                  </div>
                </div>

                {/* Demand Type */}
                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "700", marginBottom: "6px", color: "#2C2723" }}>
                    Nhu cầu cần hỗ trợ
                  </label>
                  <select
                    value={formData.demand}
                    onChange={(e) => setFormData({ ...formData, demand: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      borderRadius: "10px",
                      border: "1.5px solid #E8DEC8",
                      outline: "none",
                      fontSize: "0.92rem",
                      backgroundColor: "#FAF8F5",
                      cursor: "pointer",
                    }}
                  >
                    <option value="Thi công trọn gói chìa khóa trao tay">Thi công trọn gói chìa khóa trao tay</option>
                    <option value="Thiết kế bản vẽ 3D căn hộ">Thiết kế bản vẽ 3D căn hộ</option>
                    <option value="Sản xuất đồ gỗ nội thất theo yêu cầu">Sản xuất đồ gỗ nội thất theo yêu cầu</option>
                    <option value="Cải tạo & Nâng cấp chung cư cũ">Cải tạo & Nâng cấp chung cư cũ</option>
                  </select>
                </div>

                {/* Notes */}
                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "700", marginBottom: "6px", color: "#2C2723" }}>
                    Ghi chú thêm (Phong cách mong muốn, ngân sách...)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="VD: Mong muốn phong cách Luxury màu champagne gold..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      borderRadius: "10px",
                      border: "1.5px solid #E8DEC8",
                      outline: "none",
                      fontSize: "0.92rem",
                      backgroundColor: "#FAF8F5",
                      resize: "vertical",
                    }}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn-luxury-primary"
                  style={{
                    width: "100%",
                    padding: "16px",
                    fontSize: "1rem",
                    marginTop: "8px",
                  }}
                >
                  <Send size={18} />
                  <span>GỬI YÊU CẦU TƯ VẤN NGAY</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 992px) {
          .consultation-grid {
            grid-template-columns: 0.95fr 1.05fr !important;
          }
        }
        @media (max-width: 600px) {
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
