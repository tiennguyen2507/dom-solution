"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="hero-panoramic-banner"
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        minHeight: "100vh",
        backgroundColor: "#FAF4EB",
        overflow: "hidden",
      }}
      aria-label="Banner Thiết Kế Thi Công Nội Thất Chung Cư Trọn Gói"
    >
      {/* Outer Widescreen Split Container */}
      <div
        className="hero-layout-wrapper"
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
        }}
      >
        {/* =====================================================================
            LEFT SIDE: CREAM BACKGROUND WITH TYPOGRAPHY
            ===================================================================== */}
        <div
          className="hero-left-canvas"
          style={{
            width: "42%",
            height: "100%",
            background:
              "radial-gradient(ellipse at 15% 25%, #FFFDF9 0%, #FAF4EB 55%, #F3E8D8 100%)",
            position: "relative",
            zIndex: 10,
            display: "flex",
            alignItems: "center",
            paddingLeft: "clamp(28px, 5vw, 72px)",
            paddingRight: "clamp(16px, 2vw, 32px)",
          }}
        >
          {/* Subtle warm ambient glow */}
          <div
            style={{
              position: "absolute",
              top: "10%",
              left: "-5%",
              width: "420px",
              height: "420px",
              background:
                "radial-gradient(circle, rgba(228, 206, 170, 0.35) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          {/* Typography Block */}
          <div
            style={{
              maxWidth: "520px",
              width: "100%",
              position: "relative",
              zIndex: 12,
            }}
          >
            {/* 1. Calligraphy Golden Script "Nội thất" */}
            <div
              style={{
                fontFamily:
                  '"NVN Motherland Signature", var(--font-charmonman), "Charmonman", "Dancing Script", cursive',
                fontSize: "clamp(4rem, 6.5vw, 6rem)",
                fontWeight: 700,
                background:
                  "linear-gradient(145deg, #D9B876 0%, #B8923F 45%, #957030 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                lineHeight: "1",
                marginBottom: "-8px",
                marginLeft: "-2px",
                filter: "drop-shadow(0 2px 6px rgba(184, 140, 72, 0.25))",
                transform: "rotate(-2deg)",
                display: "inline-block",
                userSelect: "none",
              }}
            >
              Nội thất
            </div>

            {/* 2. Bold Uppercase Title "CHUNG CƯ TRỌN GÓI" */}
            <h1
              style={{
                fontFamily: "'Montserrat', Arial, Helvetica, sans-serif",
                fontSize: "clamp(2.2rem, 4vw, 3.6rem)",
                fontWeight: "900",
                letterSpacing: "-0.5px",
                lineHeight: "1.1",
                color: "#0A0A0A",
                textTransform: "uppercase",
                margin: "0 0 20px 0",
              }}
            >
              CHUNG CƯ TRỌN GÓI
            </h1>

            {/* 3. Italic Subtitle */}
            <p
              style={{
                fontFamily: "'Montserrat', Arial, Helvetica, sans-serif",
                fontSize: "clamp(0.95rem, 1.3vw, 1.15rem)",
                color: "#3D3630",
                lineHeight: "1.65",
                marginBottom: "32px",
                fontWeight: "400",
                fontStyle: "italic",
                maxWidth: "420px",
              }}
            >
              Kiến tạo không gian sống thượng lưu
              <br />
              với dấu ấn riêng của bạn
            </p>

            {/* 4. Gold Pill CTA Button "NHẬN TƯ VẤN NGAY →" */}
            <div style={{ marginBottom: "40px" }}>
              <a
                href="#tu-van"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "12px",
                  background:
                    "linear-gradient(180deg, #E8CC92 0%, #D6AD5E 50%, #C49544 100%)",
                  color: "#1A1610",
                  fontFamily: "'Montserrat', Arial, Helvetica, sans-serif",
                  fontWeight: "700",
                  fontSize: "0.9rem",
                  letterSpacing: "0.8px",
                  padding: "15px 36px",
                  borderRadius: "9999px",
                  boxShadow:
                    "0 6px 22px rgba(196, 149, 68, 0.4), inset 0 1px 0 rgba(255,255,255,0.5)",
                  textDecoration: "none",
                  textTransform: "uppercase",
                  transition: "all 0.3s ease",
                  border: "1px solid rgba(255,255,255,0.35)",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-2px) scale(1.02)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 30px rgba(196, 149, 68, 0.55), inset 0 1px 0 rgba(255,255,255,0.7)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 22px rgba(196, 149, 68, 0.4), inset 0 1px 0 rgba(255,255,255,0.5)";
                }}
              >
                <span>NHẬN TƯ VẤN NGAY</span>
                <ArrowRight size={18} strokeWidth={2.5} />
              </a>
            </div>

            {/* 5. Bottom Pillars: TINH TẾ | ĐẲNG CẤP | KHÁC BIỆT */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                fontFamily: "'Montserrat', Arial, Helvetica, sans-serif",
                fontSize: "0.82rem",
                fontWeight: "600",
                letterSpacing: "2px",
                color: "#4A4039",
                textTransform: "uppercase",
                flexWrap: "wrap",
              }}
            >
              <span>TINH TẾ</span>
              <span style={{ color: "#C5A880", fontWeight: "300", fontSize: "1rem" }}>
                |
              </span>
              <span>ĐẲNG CẤP</span>
              <span style={{ color: "#C5A880", fontWeight: "300", fontSize: "1rem" }}>
                |
              </span>
              <span>KHÁC BIỆT</span>
            </div>
          </div>
        </div>

        {/* =====================================================================
            RIGHT SIDE: FULL-HEIGHT LIVING ROOM PHOTO WITH GOLDEN ARC
            ===================================================================== */}
        <div
          className="hero-right-canvas"
          style={{
            flex: 1,
            position: "relative",
            height: "100%",
            overflow: "hidden",
          }}
        >
          {/* Living Room Interior Photograph */}
          <Image
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=88"
            alt="Thiết kế thi công nội thất chung cư trọn gói cao cấp SHOME LUXURY"
            fill
            priority
            sizes="(max-width: 960px) 100vw, 58vw"
            style={{
              objectFit: "cover",
              objectPosition: "center 35%",
            }}
          />

          {/* Warm overlay tint */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, rgba(250,244,235,0.25) 0%, transparent 20%), linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(20,18,16,0.35) 100%)",
              pointerEvents: "none",
            }}
          />

          {/* =====================================================================
              GOLDEN ARC CURVE SEPARATOR
              ===================================================================== */}
          <svg
            style={{
              position: "absolute",
              top: 0,
              left: "-1px",
              width: "160px",
              height: "100%",
              pointerEvents: "none",
              zIndex: 5,
            }}
            viewBox="0 0 160 800"
            fill="none"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient
                id="goldArcGrad1"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#F5E5C4" />
                <stop offset="40%" stopColor="#D4AD5E" />
                <stop offset="75%" stopColor="#B8923F" />
                <stop offset="100%" stopColor="#8C6B2C" />
              </linearGradient>
              <linearGradient
                id="goldArcGrad2"
                x1="100%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#FAF4EB" stopOpacity="0.7" />
                <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#AA8244" stopOpacity="0.15" />
              </linearGradient>
            </defs>

            {/* Background fill curve - seamless cream transition */}
            <path
              d="M 0,0 L 120,0 C 25,260 25,540 120,800 L 0,800 Z"
              fill="#FAF4EB"
            />

            {/* Main golden ribbon curve */}
            <path
              d="M 120,0 C 25,260 25,540 120,800"
              stroke="url(#goldArcGrad1)"
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
              style={{
                filter: "drop-shadow(0 0 6px rgba(212, 173, 94, 0.5))",
              }}
            />

            {/* Secondary dashed metallic line */}
            <path
              d="M 132,0 C 37,260 37,540 132,800"
              stroke="url(#goldArcGrad2)"
              strokeWidth="1.2"
              strokeDasharray="5 4"
              fill="none"
            />
          </svg>

          {/* =====================================================================
              BOTTOM-RIGHT CALLIGRAPHY SLOGAN
              ===================================================================== */}
          <div
            style={{
              position: "absolute",
              bottom: "28px",
              right: "36px",
              textAlign: "right",
              zIndex: 8,
              userSelect: "none",
            }}
          >
            <div
              style={{
                fontFamily:
                  '"NVN Motherland Signature", var(--font-charmonman), "Charmonman", "Dancing Script", cursive',
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                fontWeight: 700,
                background:
                  "linear-gradient(135deg, #FFF6E5 0%, #E5C88A 50%, #C9A04C 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 2px 10px rgba(0, 0, 0, 0.7))",
                lineHeight: "1.15",
                transform: "rotate(-4deg)",
              }}
            >
              <span style={{ display: "block" }}>Không gian</span>
              <span style={{ display: "block", marginTop: "-4px" }}>
                kiến tạo hạnh phúc
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          RESPONSIVE STYLES (MOBILE & TABLET)
          ========================================================================= */}
      <style jsx>{`
        @media (max-width: 960px) {
          .hero-panoramic-banner {
            height: auto !important;
            min-height: auto !important;
          }
          .hero-layout-wrapper {
            flex-direction: column !important;
          }
          .hero-left-canvas {
            width: 100% !important;
            height: auto !important;
            padding: 100px 24px 40px 24px !important;
          }
          .hero-right-canvas {
            width: 100% !important;
            min-height: 360px !important;
            height: 360px !important;
          }
        }
      `}</style>
    </section>
  );
}
