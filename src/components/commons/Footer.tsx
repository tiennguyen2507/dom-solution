"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/logo.webp";
import { siteConfig } from "@/lib/seoConfig";
import { MapPin, CheckSquare, Square, ThumbsUp, Send } from "lucide-react";

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    selectedServices: ["Nội thất chung cư"],
  });
  const [submitted, setSubmitted] = useState(false);

  const servicesList = [
    "Kiến trúc nhà cấp 4",
    "Kiến trúc nhà phố",
    "Kiến trúc biệt thự",
    "Kiến trúc vila",
    "Nội thất chung cư",
    "Nội thất nhà phố",
    "Nội thất biệt thự",
    "Nội thất văn phòng",
  ];

  const toggleService = (srv: string) => {
    if (formData.selectedServices.includes(srv)) {
      setFormData({
        ...formData,
        selectedServices: formData.selectedServices.filter((s) => s !== srv),
      });
    } else {
      setFormData({
        ...formData,
        selectedServices: [...formData.selectedServices, srv],
      });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <footer
      style={{
        backgroundColor: "#181614",
        color: "#D1C9BE",
        borderTop: "3px solid #C5A880",
        paddingTop: "60px",
        paddingBottom: "30px",
        fontSize: "0.86rem",
        position: "relative",
      }}
    >
      <div className="container">
        {/* =========================================================================
            MAIN 3-COLUMN LAYOUT (EXACT REPLICA FROM USER'S FOOTER IMAGE)
            ========================================================================= */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "36px",
            marginBottom: "40px",
          }}
          className="footer-main-grid"
        >
          {/* =====================================================================
              COLUMN 1: GỬI YÊU CẦU TƯ VẤN BÁO GIÁ
              ===================================================================== */}
          <div style={{ background: "#1F1C19", padding: "26px", borderRadius: "14px", border: "1px solid #332D27" }}>
            <h4
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "1rem",
                fontWeight: "800",
                color: "#FFFFFF",
                letterSpacing: "0.8px",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              GỬI YÊU CẦU TƯ VẤN BÁO GIÁ
            </h4>

            {submitted ? (
              <div style={{ padding: "30px 10px", textAlign: "center", color: "#DFB775" }}>
                <div style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "8px" }}>
                  Đã gửi yêu cầu thành công!
                </div>
                <p style={{ fontSize: "0.85rem", color: "#B5ACA1" }}>
                  Chuyên viên tư vấn của SHOME LUXURY sẽ liên hệ với bạn trong ít phút.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  style={{
                    marginTop: "16px",
                    background: "none",
                    border: "1px solid #C5A880",
                    color: "#DFB775",
                    padding: "6px 16px",
                    borderRadius: "6px",
                    cursor: "pointer",
                  }}
                >
                  Gửi yêu cầu khác
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", color: "#9E9488", marginBottom: "4px" }}>
                    Họ và tên
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Lê Đức A"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      backgroundColor: "#11100E",
                      border: "1px solid #3A342E",
                      borderRadius: "6px",
                      color: "#FFFFFF",
                      fontSize: "0.88rem",
                      outline: "none",
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", color: "#9E9488", marginBottom: "4px" }}>
                    Số điện thoại
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="098 7654321"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      backgroundColor: "#11100E",
                      border: "1px solid #3A342E",
                      borderRadius: "6px",
                      color: "#FFFFFF",
                      fontSize: "0.88rem",
                      outline: "none",
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", color: "#9E9488", marginBottom: "8px" }}>
                    Dịch vụ quan tâm
                  </label>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "8px 12px",
                      fontSize: "0.8rem",
                    }}
                  >
                    {servicesList.map((srv) => {
                      const isChecked = formData.selectedServices.includes(srv);
                      return (
                        <div
                          key={srv}
                          onClick={() => toggleService(srv)}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            cursor: "pointer",
                            color: isChecked ? "#DFB775" : "#B0A79C",
                            userSelect: "none",
                          }}
                        >
                          {isChecked ? (
                            <CheckSquare size={16} color="#DFB775" />
                          ) : (
                            <Square size={16} color="#6E655C" />
                          )}
                          <span>{srv}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div style={{ marginTop: "8px" }}>
                  <button
                    type="submit"
                    style={{
                      backgroundColor: "#D8AE66",
                      color: "#111111",
                      border: "none",
                      padding: "10px 28px",
                      borderRadius: "6px",
                      fontWeight: "800",
                      fontSize: "0.88rem",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      cursor: "pointer",
                      transition: "background 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#E6C588")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#D8AE66")}
                  >
                    GỬI ĐI
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* =====================================================================
              COLUMN 2: HỆ THỐNG SHOME LUXURY (HÀ NỘI, HÀ TĨNH, HỒ CHÍ MINH & FANPAGE)
              ===================================================================== */}
          <div>
            {/* Header with Title & Social Circles */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "20px",
                flexWrap: "wrap",
                gap: "12px",
              }}
            >
              <h4
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "1rem",
                  fontWeight: "800",
                  color: "#FFFFFF",
                  letterSpacing: "0.8px",
                  textTransform: "uppercase",
                }}
              >
                HỆ THỐNG SHOME LUXURY
              </h4>

              {/* Social Icons (Facebook, Instagram, TikTok, Youtube) */}
              <div style={{ display: "flex", gap: "10px" }}>
                <a
                  href={siteConfig.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    backgroundColor: "#2B2622",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#FFFFFF",
                  }}
                  aria-label="Facebook"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    backgroundColor: "#2B2622",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#FFFFFF",
                  }}
                  aria-label="Instagram"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a
                  href={siteConfig.socials.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    backgroundColor: "#2B2622",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#FFFFFF",
                  }}
                  aria-label="TikTok"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.88 2.89 2.89 0 0 1-2.88-2.88 2.89 2.89 0 0 1 2.88-2.88c.32 0 .62.05.9.15V9.45a6.34 6.34 0 0 0-.9-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.28 8.28 0 0 0 4.76 1.48V6.78a4.83 4.83 0 0 1-1-.09z"/>
                  </svg>
                </a>
                <a
                  href={siteConfig.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    backgroundColor: "#2B2622",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#FFFFFF",
                  }}
                  aria-label="YouTube"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* 3 Regional Branches Grid (Hà Nội, Hà Tĩnh, Hồ Chí Minh) */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
                gap: "16px",
                marginBottom: "20px",
                fontSize: "0.78rem",
              }}
            >
              {/* Hà Nội */}
              <div>
                <div style={{ fontWeight: "700", color: "#DFB775", marginBottom: "6px" }}>Hà Nội</div>
                <div style={{ color: "#E0D7CC", marginBottom: "6px", lineHeight: "1.4" }}>
                  📍 <strong>Văn phòng</strong>:<br />Tầng 31 - Tòa Gemek Tower 2 - Hà Đông – Hà Nội
                </div>
                <div style={{ color: "#A89F93", lineHeight: "1.4" }}>
                  <strong>Xưởng sản xuất:</strong><br />
                  • CS1: Quyết Tiến – Vân Côn – Hoài Đức – HN<br />
                  • CS2: Km15 – Đại Lộ Thăng Long – HN<br />
                  • CS3: Tả Thanh Oai – Thanh Trì – HN
                </div>
              </div>

              {/* Hà Tĩnh */}
              <div>
                <div style={{ fontWeight: "700", color: "#DFB775", marginBottom: "6px" }}>Hà Tĩnh</div>
                <div style={{ color: "#E0D7CC", marginBottom: "6px", lineHeight: "1.4" }}>
                  📍 <strong>Văn phòng</strong>:<br />Tầng 8 Vinhome New Center – Hàm Nghi – Thạch Linh – HT
                </div>
                <div style={{ color: "#A89F93", lineHeight: "1.4" }}>
                  <strong>Xưởng sản xuất:</strong><br />
                  • CS1: Lý Tự Trọng – Bắc Hà – HT<br />
                  • CS2: Đức Yên – Đức Thọ – HT<br />
                  • CS3: Sơn Thịnh – Kỳ Anh – HT
                </div>
              </div>

              {/* Hồ Chí Minh */}
              <div>
                <div style={{ fontWeight: "700", color: "#DFB775", marginBottom: "6px" }}>Hồ Chí Minh</div>
                <div style={{ color: "#E0D7CC", marginBottom: "6px", lineHeight: "1.4" }}>
                  📍 <strong>Văn phòng</strong>:<br />Tầng 20 Pearl Plaza – Điện Biên Phủ – Bình Thạnh – HCM
                </div>
                <div style={{ color: "#A89F93", lineHeight: "1.4" }}>
                  <strong>Xưởng sản xuất:</strong><br />
                  • CS1: Bình Hưng Hoà – Bình Tân – HCM<br />
                  • CS2: Tân Xuân – Hóc Môn – HCM<br />
                  • CS3: Vĩnh Lộc – Bình Chánh – HCM
                </div>
              </div>
            </div>

            {/* Facebook Fanpage Card Box */}
            <div
              style={{
                backgroundColor: "#11100E",
                border: "1px solid #2B2621",
                borderRadius: "10px",
                padding: "16px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "6px",
                      backgroundColor: "#DFB775",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#111111",
                      fontWeight: "900",
                      fontSize: "0.85rem",
                    }}
                  >
                    LH
                  </div>
                  <div>
                    <div style={{ fontWeight: "700", fontSize: "0.85rem", color: "#FFFFFF" }}>
                      Shome Luxury - Nội thất & Kiến trúc
                    </div>
                    <div style={{ fontSize: "0.72rem", color: "#8E857B" }}>
                      29K người theo dõi
                    </div>
                  </div>
                </div>

                <a
                  href={siteConfig.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: "#1877F2",
                    color: "#FFFFFF",
                    fontSize: "0.75rem",
                    fontWeight: "600",
                    padding: "6px 12px",
                    borderRadius: "4px",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  <ThumbsUp size={12} />
                  <span>Theo dõi Trang</span>
                </a>
              </div>

              <div style={{ fontSize: "0.78rem", color: "#A89F93", lineHeight: "1.4" }}>
                <strong style={{ color: "#E5DEC9" }}>THIẾT KẾ NỘI THẤT VĂN PHÒNG CÓ CẦN THIẾT KHÔNG?</strong><br />
                CỰC KỲ CẦN THIẾT! Đội ngũ kiến trúc sư Shome Luxury luôn sẵn sàng tư vấn và đồng hành cùng quý đối tác.
              </div>
            </div>
          </div>

          {/* =====================================================================
              COLUMN 3: WEBSITE ĐƯỢC VẬN HÀNH BỞI (LOGO, PHÁP NHÂN, CHÂN TRANG)
              ===================================================================== */}
          <div>
            <h4
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "1rem",
                fontWeight: "800",
                color: "#FFFFFF",
                letterSpacing: "0.8px",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              WEBSITE ĐƯỢC VẬN HÀNH BỞI
            </h4>

            {/* LUXURY HOME Logo */}
            <div style={{ marginBottom: "18px" }}>
              <div style={{ position: "relative", height: "42px", width: "155px" }}>
                <Image
                  src={logoImg}
                  alt="LUXURY HOME - Shome Luxury"
                  fill
                  sizes="155px"
                  style={{ objectFit: "contain", objectPosition: "left center" }}
                />
              </div>
            </div>

            {/* Legal Entity & Channels */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.82rem", lineHeight: "1.5" }}>
              <div style={{ fontWeight: "800", color: "#FFFFFF", textTransform: "uppercase" }}>
                CÔNG TY CỔ PHẦN KIẾN TRÚC VÀ NỘI THẤT SHOME LUXURY
              </div>
              <div>
                Email: <span style={{ color: "#DFB775" }}>{siteConfig.contact.email}</span>
              </div>
              <div>Tiktok : shomeluxury</div>
              <div>Youtube : Shome Luxury</div>
              <div>Page Facebook : Shome Luxury</div>

              <div
                style={{
                  marginTop: "8px",
                  fontWeight: "800",
                  color: "#DFB775",
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                }}
              >
                NÂNG TẦM KHÔNG GIAN SỐNG
              </div>

              <p style={{ color: "#9E9488", fontSize: "0.8rem", marginTop: "2px", lineHeight: "1.5" }}>
                Công ty Shome Luxury là công ty thiết kế, thi công Nội thất & Kiến trúc nhiều năm kinh nghiệm tại Việt Nam với sự tin tưởng của hàng ngàn khách hàng khắp mọi nơi trên cả nước.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div
          style={{
            paddingTop: "20px",
            borderTop: "1px solid #282420",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
            fontSize: "0.78rem",
            color: "#7E756B",
          }}
        >
          <div>
            © {new Date().getFullYear()} CÔNG TY CỔ PHẦN KIẾN TRÚC VÀ NỘI THẤT SHOME LUXURY. All rights reserved.
          </div>
          <div style={{ display: "flex", gap: "16px" }}>
            <Link href="/" style={{ color: "#7E756B" }}>Chính sách bảo mật</Link>
            <Link href="/" style={{ color: "#7E756B" }}>Điều khoản dịch vụ</Link>
            <Link href="/sitemap.xml" style={{ color: "#7E756B" }}>Sitemap</Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 1050px) {
          .footer-main-grid {
            grid-template-columns: 1.05fr 1.65fr 1.15fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
