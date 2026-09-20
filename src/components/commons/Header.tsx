"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/logo.webp";
import { siteConfig } from "@/lib/seoConfig";
import { ChevronDown, Menu, X, ChevronRight } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navMenuItems = [
    { name: "Trang Chủ", href: "/" },
    {
      name: "Thiết Kế Kiến Trúc",
      href: "#dich-vu",
      hasDropdown: true,
      children: [
        { name: "Kiến Trúc Biệt Thự", href: "#dich-vu" },
        { name: "Kiến Trúc Nhà Phố", href: "#dich-vu" },
        { name: "Kiến Trúc Villa Cao Cấp", href: "#dich-vu" },
        { name: "Kiến Trúc Nhà Cấp 4 Hiện Đại", href: "#dich-vu" },
      ],
    },
    {
      name: "Thiết Kế Nội Thất",
      href: "#du-an",
      hasDropdown: true,
      children: [
        { name: "Nội Thất Chung Cư Trọn Gói", href: "#du-an" },
        { name: "Nội Thất Penthouse / Duplex", href: "#du-an" },
        { name: "Nội Thất Biệt Thự Cao Cấp", href: "#du-an" },
        { name: "Nội Thất Nhà Phố", href: "#du-an" },
        { name: "Nội Thất Văn Phòng", href: "#du-an" },
      ],
    },
    { name: "Xưởng Sản Xuất", href: "#quy-trinh" },
    {
      name: "Báo Giá",
      href: "#du-toan",
      hasDropdown: true,
      children: [
        { name: "Dự Toán Nội Thất Tự Động", href: "#du-toan" },
        { name: "Bảng Giá Thiết Kế Kiến Trúc", href: "#du-toan" },
        { name: "Bảng Giá Thi Công Trọn Gói", href: "#du-toan" },
      ],
    },
    { name: "Tuyển Dụng", href: "#" },
    { name: "Tin Tức", href: "#faq" },
  ];

  const headerFont = "var(--font-montserrat), 'Montserrat', Arial, Helvetica, sans-serif";

  return (
    <header
      style={{
        position: isScrolled ? "fixed" : "sticky",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: "#0B0A09",
        borderBottom: "1px solid #26221E",
        padding: "14px 0",
        transition: "all 0.3s ease",
        boxShadow: isScrolled ? "0 4px 20px rgba(0,0,0,0.5)" : "none",
        fontFamily: headerFont,
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
        }}
      >
        {/* =========================================================================
            LEFT LOGO: LUXURY HOME / SHOME LUXURY
            ========================================================================= */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              position: "relative",
              height: "44px",
              width: "165px",
            }}
          >
            <Image
              src={logoImg}
              alt="LUXURY HOME - Shome Luxury"
              fill
              priority
              sizes="165px"
              style={{
                objectFit: "contain",
                objectPosition: "left center",
              }}
            />
          </div>
        </Link>

        {/* =========================================================================
            CENTER NAVIGATION MENU (SINGLE LINE, TITLE CASE, NO-WRAP, 15.5px)
            ========================================================================= */}
        <nav style={{ display: "none", flexGrow: 1 }} className="header-desktop-nav">
          <ul
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "clamp(12px, 1.8vw, 26px)",
              listStyle: "none",
              margin: 0,
              padding: "0 10px",
              flexWrap: "nowrap",
              whiteSpace: "nowrap",
            }}
          >
            {navMenuItems.map((item) => (
              <li
                key={item.name}
                style={{ position: "relative", flexShrink: 0 }}
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "5px",
                    color: item.name === "Trang Chủ" ? "#DFB775" : "#FFFFFF",
                    fontSize: "15.5px",
                    fontWeight: "500",
                    letterSpacing: "0.1px",
                    padding: "8px 2px",
                    whiteSpace: "nowrap",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#DFB775")}
                  onMouseLeave={(e) => {
                    if (item.name !== "Trang Chủ") {
                      e.currentTarget.style.color = "#FFFFFF";
                    }
                  }}
                >
                  <span style={{ whiteSpace: "nowrap" }}>{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown
                      size={15}
                      style={{
                        flexShrink: 0,
                        transition: "transform 0.2s ease",
                        transform: activeDropdown === item.name ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.hasDropdown && activeDropdown === item.name && (
                  <div
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: "0",
                      backgroundColor: "#161412",
                      border: "1px solid #332D28",
                      borderRadius: "8px",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
                      minWidth: "240px",
                      padding: "8px 0",
                      zIndex: 110,
                      animation: "fadeIn 0.2s ease",
                    }}
                  >
                    {item.children?.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        style={{
                          display: "block",
                          padding: "10px 18px",
                          fontSize: "15px",
                          color: "#E5DEC9",
                          fontWeight: "500",
                          textDecoration: "none",
                          whiteSpace: "nowrap",
                          transition: "background 0.2s, color 0.2s",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#26211C";
                          e.currentTarget.style.color = "#DFB775";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "transparent";
                          e.currentTarget.style.color = "#E5DEC9";
                        }}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* =========================================================================
            RIGHT CTA: ĐĂNG KÝ TƯ VẤN & MOBILE HAMBURGER
            ========================================================================= */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", flexShrink: 0 }}>
          <a
            href="#tu-van"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1.5px solid #FFFFFF",
              borderRadius: "9999px",
              padding: "8px 20px",
              color: "#FFFFFF",
              fontSize: "14.5px",
              fontWeight: "600",
              letterSpacing: "0.3px",
              textDecoration: "none",
              backgroundColor: "transparent",
              transition: "all 0.25s ease",
              whiteSpace: "nowrap",
              flexShrink: 0,
              fontFamily: headerFont,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--gradient-gold-btn)";
              e.currentTarget.style.borderColor = "#DFB775";
              e.currentTarget.style.color = "#111111";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.borderColor = "#FFFFFF";
              e.currentTarget.style.color = "#FFFFFF";
            }}
          >
            Đăng Ký Tư Vấn
          </a>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Mở menu"
            style={{
              background: "none",
              border: "none",
              color: "#FFFFFF",
              cursor: "pointer",
              padding: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="header-mobile-btn"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* =========================================================================
          MOBILE SLIDE-OUT MENU DRAWER
          ========================================================================= */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 120,
            backgroundColor: "rgba(0,0,0,0.7)",
            backdropFilter: "blur(6px)",
            display: "flex",
            justifyContent: "flex-end",
          }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            style={{
              width: "85%",
              maxWidth: "360px",
              height: "100%",
              backgroundColor: "#141210",
              borderLeft: "2px solid #C5A880",
              padding: "30px 24px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              overflowY: "auto",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "28px" }}>
                <div style={{ position: "relative", height: "38px", width: "140px" }}>
                  <Image
                    src={logoImg}
                    alt="LUXURY HOME"
                    fill
                    sizes="140px"
                    style={{ objectFit: "contain", objectPosition: "left center" }}
                  />
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ background: "none", border: "none", color: "#FFFFFF", cursor: "pointer" }}
                >
                  <X size={24} />
                </button>
              </div>

              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", padding: 0 }}>
                {navMenuItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "12px 14px",
                        borderRadius: "8px",
                        backgroundColor: "#1E1A17",
                        color: "#FFFFFF",
                        fontSize: "0.88rem",
                        fontWeight: "600",
                        textDecoration: "none",
                      }}
                    >
                      <span>{item.name}</span>
                      <ChevronRight size={16} color="#DFB775" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ paddingTop: "20px", borderTop: "1px solid #332D28" }}>
              <a
                href="#tu-van"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-luxury-primary"
                style={{ width: "100%", textAlign: "center", padding: "12px", fontSize: "0.9rem" }}
              >
                Đăng Ký Tư Vấn Ngay
              </a>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 1050px) {
          .header-desktop-nav {
            display: block !important;
          }
          .header-mobile-btn {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
