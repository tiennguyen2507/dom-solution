import { ImageResponse } from "next/og";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation for Favicon / Tab Icon
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          background: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 50%, #4338CA 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "8px",
          color: "white",
          fontWeight: 900,
          fontFamily: "serif",
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
            backgroundColor: "#38BDF8",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
