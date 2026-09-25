import React from "react";
import Image from "next/image";
import logoImg from "@/assets/images/logo.png";

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
  const heights = {
    sm: "h-8 sm:h-9",
    md: "h-10 sm:h-11",
    lg: "h-12 sm:h-14",
  };

  return (
    <div className={`flex items-center select-none ${className}`}>
      <div
        className={`relative ${heights[size]} w-auto aspect-663/376 flex items-center justify-center transition-all ${
          dark ? "p-1 rounded-lg bg-white/90 backdrop-blur-xs shadow-xs" : ""
        }`}
      >
        <Image
          src={logoImg}
          alt="Dom Solution Logo"
          height={60}
          width={106}
          priority
          className="h-full w-auto object-contain"
        />
      </div>
    </div>
  );
}

