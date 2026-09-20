"use client";

import React, { useState, useEffect } from "react";
import { Phone, MessageCircle, UserCheck, FileText, ArrowUp } from "lucide-react";
import { siteConfig } from "@/lib/seoConfig";

export default function FloatingContact() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* =========================================================================
          LEFT FLOATING STACK (INSTAGRAM, YOUTUBE, TIKTOK, HOTLINE PILL)
          ========================================================================= */}
      <div
        style={{
          position: "fixed",
          bottom: "28px",
          left: "20px",
          zIndex: 90,
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "flex-start",
        }}
      >
        {/* Instagram */}
        <a
          href={siteConfig.socials.instagram}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: "42px",
            height: "42px",
            borderRadius: "50%",
            background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
            color: "#FFFFFF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
            transition: "transform 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          aria-label="Instagram"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        </a>

        {/* YouTube */}
        <a
          href={siteConfig.socials.youtube}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: "42px",
            height: "42px",
            borderRadius: "50%",
            backgroundColor: "#FF0000",
            color: "#FFFFFF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 12px rgba(255, 0, 0, 0.35)",
            transition: "transform 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          aria-label="YouTube"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        </a>

        {/* TikTok */}
        <a
          href={siteConfig.socials.tiktok}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: "42px",
            height: "42px",
            borderRadius: "50%",
            backgroundColor: "#000000",
            border: "1px solid #332D28",
            color: "#FFFFFF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 12px rgba(0,0,0,0.35)",
            transition: "transform 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          aria-label="TikTok"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.88 2.89 2.89 0 0 1-2.88-2.88 2.89 2.89 0 0 1 2.88-2.88c.32 0 .62.05.9.15V9.45a6.34 6.34 0 0 0-.9-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.28 8.28 0 0 0 4.76 1.48V6.78a4.83 4.83 0 0 1-1-.09z"/>
          </svg>
        </a>

        {/* Hotline Pill Button: 079999 7700 */}
        <a
          href={`tel:${siteConfig.contact.phone}`}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            backgroundColor: "#D8AE66",
            color: "#FFFFFF",
            padding: "8px 16px",
            borderRadius: "9999px",
            fontSize: "0.92rem",
            fontWeight: "800",
            textDecoration: "none",
            boxShadow: "0 6px 18px rgba(216, 174, 102, 0.45)",
            transition: "transform 0.2s, background 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.backgroundColor = "#E6C588";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.backgroundColor = "#D8AE66";
          }}
          aria-label="Gọi hotline"
        >
          <Phone size={18} fill="#FFFFFF" color="#FFFFFF" />
          <span>{siteConfig.contact.hotlineDisplay}</span>
        </a>
      </div>

      {/* =========================================================================
          RIGHT FLOATING STACK (ZALO, MESSENGER, USER, FORM, SCROLL TOP)
          ========================================================================= */}
      <div
        style={{
          position: "fixed",
          bottom: "28px",
          right: "20px",
          zIndex: 90,
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "center",
        }}
      >
        {/* Zalo */}
        <a
          href={siteConfig.socials.zalo}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: "46px",
            height: "46px",
            borderRadius: "50%",
            backgroundColor: "#0084FF",
            color: "#FFFFFF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "900",
            fontSize: "0.82rem",
            boxShadow: "0 4px 14px rgba(0, 132, 255, 0.4)",
            textDecoration: "none",
            transition: "transform 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          aria-label="Zalo"
        >
          Zalo
        </a>

        {/* Messenger */}
        <a
          href={siteConfig.socials.messenger}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: "46px",
            height: "46px",
            borderRadius: "50%",
            backgroundColor: "#0099FF",
            color: "#FFFFFF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 14px rgba(0, 153, 255, 0.4)",
            textDecoration: "none",
            transition: "transform 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          aria-label="Messenger"
        >
          <MessageCircle size={22} />
        </a>

        {/* Member / Consultation */}
        <a
          href="#tu-van"
          style={{
            width: "46px",
            height: "46px",
            borderRadius: "50%",
            backgroundColor: "#D8AE66",
            color: "#FFFFFF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 14px rgba(216, 174, 102, 0.4)",
            textDecoration: "none",
            transition: "transform 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          aria-label="Tư vấn khách hàng"
        >
          <UserCheck size={20} />
        </a>

        {/* Form Note / Quotation */}
        <a
          href="#du-toan"
          style={{
            width: "46px",
            height: "46px",
            borderRadius: "50%",
            backgroundColor: "#D8AE66",
            color: "#FFFFFF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 14px rgba(216, 174, 102, 0.4)",
            textDecoration: "none",
            transition: "transform 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          aria-label="Dự toán báo giá"
        >
          <FileText size={20} />
        </a>

        {/* Back to Top */}
        {showScrollTop && (
          <button
            type="button"
            onClick={scrollToTop}
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "50%",
              backgroundColor: "#221F1C",
              border: "1px solid #3A342E",
              color: "#DFB775",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
            }}
            aria-label="Cuộn lên đầu trang"
          >
            <ArrowUp size={18} />
          </button>
        )}
      </div>
    </>
  );
}
