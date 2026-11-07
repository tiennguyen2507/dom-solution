"use client";
export default function GlobalError({ reset }: {
    error: Error & {
        digest?: string;
    };
    reset: () => void;
}) { return <html lang="vi"><body style={{ margin: 0, background: "#f7f6f2", color: "#252521", fontFamily: "Arial,sans-serif" }}><main style={{ padding: "100px 6%", maxWidth: 900 }}><span style={{ color: "#dc3d2e", fontSize: 15 }}>TIKAT.VN</span><h1 style={{ fontSize: 48, fontWeight: 500, letterSpacing: "-.05em" }}>Trang đang gặp một chút trục trặc.</h1><p style={{ color: "#75746c", lineHeight: 1.8 }}>Bạn thử tải lại trang để tiếp tục.</p><button onClick={reset} style={{ padding: "15px 25px", background: "#252521", color: "#fff", border: 0, cursor: "pointer", marginTop: 20 }}>Thử lại ↗</button></main></body></html>; }
