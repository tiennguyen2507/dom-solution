import { ImageResponse } from "next/og";

// Image metadata
export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

// Apple Touch Icon generation
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 110,
          background: "#dc3d2e",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "40px",
          color: "white",
          fontWeight: 900,
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <span
          style={{
            transform: "translateY(-4px)",
            letterSpacing: "-2px",
          }}
        >
          T
        </span>
        <div
          style={{
            position: "absolute",
            bottom: "28px",
            right: "28px",
            width: "24px",
            height: "24px",
            borderRadius: "50%",
            backgroundColor: "#f7f6f2",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
