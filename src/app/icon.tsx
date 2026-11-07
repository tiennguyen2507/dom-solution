import { ImageResponse } from "next/og";

// Image metadata
export const size = {
  width: 48,
  height: 48,
};
export const contentType = "image/png";

// Image generation for Favicon / Tab Icon
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 32,
          background: "#dc3d2e",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "8px",
          color: "white",
          fontWeight: 900,
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <span
          style={{
            transform: "translateY(-1px)",
            letterSpacing: "-0.5px",
          }}
        >
          T
        </span>
        <div
          style={{
            position: "absolute",
            bottom: "4px",
            right: "4px",
            width: "5px",
            height: "5px",
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
