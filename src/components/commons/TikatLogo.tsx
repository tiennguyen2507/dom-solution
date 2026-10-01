import React from "react";

interface TikatLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  dark?: boolean;
}

export default function TikatLogo({
  className = "",
  size = "md",
  dark = false,
}: TikatLogoProps) {
  const iconSizes = {
    sm: "w-7 h-7",
    md: "w-8 h-8 sm:w-9 sm:h-9",
    lg: "w-10 h-10 sm:w-12 sm:h-12",
  };

  const textSizes = {
    sm: "text-xl",
    md: "text-2xl sm:text-[26px]",
    lg: "text-2xl sm:text-3xl",
  };

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Dynamic Geometric Icon */}
      <div
        className={`relative ${iconSizes[size]} rounded-xl flex items-center justify-center shadow-xs transition-transform duration-300 group-hover:scale-105 ${
          dark
            ? "bg-gradient-to-tr from-blue-600 via-indigo-600 to-blue-400 text-white shadow-blue-500/20"
            : "bg-gradient-to-tr from-blue-600 via-blue-700 to-indigo-700 text-white shadow-blue-600/25"
        }`}
      >
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5/6 h-5/6"
        >
          {/* Stylized T & Diamond Tech Shape */}
          <path
            d="M7 9C7 7.89543 7.89543 7 9 7H23C24.1046 7 25 7.89543 25 9V11C25 11.5523 24.5523 12 24 12H18.5V23C18.5 24.1046 17.6046 25 16.5 25H15.5C14.3954 25 13.5 24.1046 13.5 23V12H8C7.44772 12 7 11.5523 7 11V9Z"
            fill="white"
          />
          <circle cx="23" cy="21" r="2.5" fill="#38BDF8" />
        </svg>
      </div>

      {/* Brand Typography: Tikat */}
      <div className="flex items-center leading-none">
        <span
          className={`font-serif font-black tracking-tight ${textSizes[size]} ${
            dark ? "text-white" : "text-slate-900 dark:text-white"
          }`}
        >
          Tikat
        </span>
      </div>
    </div>
  );
}
