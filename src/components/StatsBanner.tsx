import React from "react";
import { statsData } from "@/data/interiorData";

export default function StatsBanner() {
  return (
    <section
      style={{
        backgroundColor: "#1A1715",
        color: "#FFFFFF",
        padding: "45px 0",
        borderTop: "2px solid #C5A880",
        borderBottom: "1px solid #332D28",
        position: "relative",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
            gap: "28px",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {statsData.map((stat, idx) => (
            <div
              key={idx}
              style={{
                position: "relative",
                padding: "10px 16px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(2rem, 3.2vw, 2.8rem)",
                  fontWeight: "800",
                  background: "linear-gradient(135deg, #F0D5A6 0%, #C5A880 50%, #E6C894 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  lineHeight: "1.1",
                  marginBottom: "6px",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: "0.95rem",
                  fontWeight: "700",
                  letterSpacing: "0.5px",
                  color: "#FAF5EE",
                  marginBottom: "3px",
                }}
              >
                {stat.label}
              </div>
              <div
                style={{
                  fontSize: "0.78rem",
                  color: "#9E9287",
                }}
              >
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
