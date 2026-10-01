import React from "react";
import TikatLogo from "./TikatLogo";

interface DomLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  dark?: boolean;
}

export default function DomLogo({
  className = "",
  size = "md",
  dark = false,
}: DomLogoProps) {
  return <TikatLogo className={className} size={size} dark={dark} />;
}
