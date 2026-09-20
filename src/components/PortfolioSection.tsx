"use client";

import React, { useState } from "react";
import Image from "next/image";
import { portfolioData } from "@/data/interiorData";
import { Sparkles, MapPin, Maximize2, Coins, ArrowUpRight } from "lucide-react";

export default function PortfolioSection() {
  const [filter, setFilter] = useState<string>("all");

  const categories = [
    { key: "all", label: "Tất Cả Dự Án" },
    { key: "luxury", label: "Luxury Modern" },
    { key: "indochine", label: "Indochine Sang Trọng" },
    { key: "neoclassic", label: "Tân Cổ Điển" },
    { key: "modern", label: "Hiện Đại Tinh Gọn" },
  ];

  const filteredProjects =
    filter === "all"
      ? portfolioData
      : portfolioData.filter((p) => p.category === filter);

  return (
    <section id="du-an" className="section-py" style={{ backgroundColor: "#F6EFE6" }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>Bộ Sưu Tập Kiệt Tác</span>
          </div>
          <h2 className="section-title">
            Dự Án Căn Hộ Chung Cư <span className="text-gold-gradient">Đã Bàn Giao</span>
          </h2>
          <div className="gold-divider" />
          <p className="section-desc">
            Khám phá các không gian sống thực tế được thiết kế và thi công bởi SHOME LUXURY với cam kết chuẩn xác 99% so với phối cảnh 3D.
          </p>
        </div>

        {/* Filter Tabs */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            flexWrap: "wrap",
            marginBottom: "40px",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              style={{
                border: filter === cat.key ? "1px solid #C5A880" : "1px solid #E8DEC8",
                background: filter === cat.key ? "var(--gradient-gold)" : "#FFFFFF",
                color: filter === cat.key ? "#1A1715" : "#524B45",
                fontWeight: filter === cat.key ? "700" : "600",
                fontSize: "0.88rem",
                padding: "10px 22px",
                borderRadius: "30px",
                cursor: "pointer",
                boxShadow: filter === cat.key ? "var(--shadow-gold)" : "var(--shadow-sm)",
                transition: "all 0.25s ease",
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "32px",
          }}
        >
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="luxury-card"
              style={{
                padding: 0,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Image Container */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "16 / 10",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={project.image}
                  alt={`Dự án ${project.title} - Thiết kế nội thất SHOME LUXURY`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{
                    objectFit: "cover",
                    transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  className="project-img"
                />
                <div
                  style={{
                    position: "absolute",
                    top: "14px",
                    left: "14px",
                    background: "rgba(26, 23, 21, 0.85)",
                    backdropFilter: "blur(6px)",
                    color: "#E6C894",
                    fontSize: "0.75rem",
                    fontWeight: "700",
                    padding: "5px 12px",
                    borderRadius: "20px",
                    border: "1px solid rgba(230, 200, 148, 0.4)",
                    letterSpacing: "0.5px",
                  }}
                >
                  {project.categoryLabel}
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: "24px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.25rem",
                    fontWeight: "700",
                    color: "#1A1715",
                    marginBottom: "12px",
                    lineHeight: "1.3",
                  }}
                >
                  {project.title}
                </h3>

                {/* Specs */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "10px",
                    background: "#FAF5EE",
                    padding: "12px 16px",
                    borderRadius: "10px",
                    marginBottom: "16px",
                    border: "1px solid #EFE8DE",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.82rem", color: "#524B45" }}>
                    <MapPin size={15} color="#9A7745" />
                    <span>{project.location}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.82rem", color: "#524B45" }}>
                    <Maximize2 size={15} color="#9A7745" />
                    <span>{project.area}</span>
                  </div>
                </div>

                <p
                  style={{
                    fontSize: "0.88rem",
                    color: "#635B54",
                    lineHeight: "1.6",
                    marginBottom: "16px",
                    flexGrow: 1,
                  }}
                >
                  {project.description}
                </p>

                {/* Feature Tags */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px",
                    marginBottom: "20px",
                  }}
                >
                  {project.features.map((f, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: "600",
                        background: "#FFFFFF",
                        border: "1px solid #E8DEC8",
                        padding: "3px 9px",
                        borderRadius: "12px",
                        color: "#6B6158",
                      }}
                    >
                      #{f}
                    </span>
                  ))}
                </div>

                {/* Bottom CTA */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: "14px",
                    borderTop: "1px solid #F0E8DC",
                  }}
                >
                  <div>
                    <span style={{ fontSize: "0.72rem", color: "#82776E", display: "block" }}>Dự toán hoàn thiện</span>
                    <strong style={{ fontSize: "0.95rem", color: "#9A7745" }}>{project.investment}</strong>
                  </div>
                  <a
                    href="#tu-van"
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      background: "var(--color-gold-light)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#1A1715",
                    }}
                    aria-label={`Nhận tư vấn dự án ${project.title}`}
                  >
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
