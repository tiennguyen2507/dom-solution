"use client";

import React from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="vi">
      <body>
        <div style={{ padding: "40px 20px", textAlign: "center", fontFamily: "sans-serif" }}>
          <h2>Đã xảy ra lỗi hệ thống!</h2>
          <p style={{ color: "#64748B", fontSize: "14px" }}>
            {error?.message || "Vui lòng tải lại trang."}
          </p>
          <button
            onClick={() => reset()}
            style={{
              marginTop: "16px",
              padding: "10px 20px",
              background: "#0D5BE1",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Thử lại
          </button>
        </div>
      </body>
    </html>
  );
}
