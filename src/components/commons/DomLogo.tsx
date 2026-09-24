import React from "react";

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
  const iconSizes = {
    sm: "w-7 h-7 sm:w-8 sm:h-8",
    md: "w-9 h-9 sm:w-10 sm:h-10",
    lg: "w-11 h-11 sm:w-12 sm:h-12",
  };

  const titleSizes = {
    sm: "text-[16px] sm:text-[18px]",
    md: "text-[18px] sm:text-[20px]",
    lg: "text-[22px] sm:text-[24px]",
  };

  const subSizes = {
    sm: "text-[8px] sm:text-[9px] tracking-[0.15em]",
    md: "text-[9px] sm:text-[10px] tracking-[0.2em]",
    lg: "text-[11px] sm:text-xs tracking-[0.25em]",
  };

  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      {/* Precision Geometric SVG Icon matching Dom Solution Brand */}
      <div className={`relative ${iconSizes[size]} shrink-0 aspect-square`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full block"
        >
          <defs>
            <linearGradient id="domBlueGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#0D5BE1" />
            </linearGradient>
            <linearGradient id="domBlueGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1D4ED8" />
              <stop offset="100%" stopColor="#082F6E" />
            </linearGradient>
            <linearGradient id="domRedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF4D4D" />
              <stop offset="100%" stopColor="#EE382A" />
            </linearGradient>
          </defs>

          {/* Main bold D curve */}
          <path
            d="M20 15 H52 C72 15 88 30 88 50 C88 70 72 85 52 85 H20 V68 H50 C60 68 70 60 70 50 C70 40 60 32 50 32 H20 V15 Z"
            fill="url(#domBlueGrad1)"
          />
          
          {/* Upper facet */}
          <path
            d="M20 15 H52 C65 15 76 22 82 33 L62 48 H36 V32 H20 V15 Z"
            fill="url(#domBlueGrad1)"
            opacity="0.95"
          />

          {/* Lower inner fold */}
          <path
            d="M20 85 H52 C65 85 76 78 82 67 L62 52 H36 V68 H20 V85 Z"
            fill="url(#domBlueGrad2)"
          />

          {/* Distinctive Red Accent Chevron */}
          <path
            d="M20 38 L40 50 L20 62 L20 48 Z"
            fill="url(#domRedGrad)"
          />
          
          {/* Inner Sharp Angle */}
          <path
            d="M36 32 L58 50 L36 68 L48 50 Z"
            fill="#082F6E"
          />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-center gap-1">
          <span
            className={`font-black tracking-tight ${titleSizes[size]} ${
              dark ? "text-white" : "text-[#082F6E]"
            }`}
          >
            Dom
          </span>
          <span
            className={`font-bold tracking-tight ${titleSizes[size]} ${
              dark ? "text-blue-400" : "text-[#0866FF]"
            }`}
          >
            Solution
          </span>
        </div>
        <span
          className={`font-semibold uppercase mt-0.5 ${subSizes[size]} ${
            dark ? "text-slate-400" : "text-[#65676B]"
          }`}
        >
          Web App Development
        </span>
      </div>
    </div>
  );
}
