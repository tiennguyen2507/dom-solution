"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/lib/seoConfig";
import { Phone, MessageCircle, Send, ArrowUp, X, Headset } from "lucide-react";

export default function FloatingContact() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-5 right-4 sm:right-6 z-50 flex flex-col items-end gap-2.5">
      {/* Desktop / Expanded Items Container */}
      <div
        className={`flex flex-col items-end gap-2.5 transition-all duration-200 ${
          isExpanded
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-4 pointer-events-none sm:opacity-100 sm:scale-100 sm:translate-y-0 sm:pointer-events-auto"
        }`}
      >
        {/* Zalo Button */}
        <a
          href={siteConfig.socials.zalo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat Zalo"
          className="flex items-center gap-2 group cursor-pointer"
        >
          <span className="hidden sm:group-hover:inline-block px-3 py-1 bg-[#18181B] text-white text-xs font-medium rounded-full shadow-md">
            Zalo Kỹ Thuật
          </span>
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#0866FF] text-white flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-all">
            <MessageCircle className="w-5 h-5 fill-white" />
          </div>
        </a>

        {/* Telegram Chat Button */}
        <a
          href={siteConfig.socials.telegram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat Telegram"
          className="flex items-center gap-2 group cursor-pointer"
        >
          <span className="hidden sm:group-hover:inline-block px-3 py-1 bg-[#18181B] text-white text-xs font-medium rounded-full shadow-md">
            Telegram
          </span>
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#229ED9] text-white flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-all">
            <Send className="w-4 h-4 ml-0.5" />
          </div>
        </a>

        {/* Hotline Call Button */}
        <a
          href={`tel:${siteConfig.contact.phone}`}
          aria-label="Hotline Call"
          className="flex items-center gap-2 group cursor-pointer"
        >
          <span className="hidden sm:group-hover:inline-block px-3 py-1 bg-[#18181B] text-white text-xs font-medium rounded-full shadow-md">
            {siteConfig.contact.hotlineDisplay}
          </span>
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#18181B] text-white flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-all border border-[#27272A]">
            <Phone className="w-4 h-4 text-emerald-400" />
          </div>
        </a>
      </div>

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="sm:hidden w-11 h-11 rounded-full bg-[#18181B] text-white flex items-center justify-center shadow-lg active:scale-95 transition-all cursor-pointer"
        aria-label="Toggle contact menu"
      >
        {isExpanded ? (
          <X className="w-5 h-5" />
        ) : (
          <Headset className="w-5 h-5 text-emerald-400" />
        )}
      </button>

      {/* Scroll to top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="w-9 h-9 rounded-full bg-white text-[#18181B] border border-[#DCD9D0] flex items-center justify-center shadow-sm hover:bg-[#FAF8F5] transition-all cursor-pointer"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
