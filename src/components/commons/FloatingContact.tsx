"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/lib/seoConfig";
import { Phone, MessageCircle, Send, ArrowUp } from "lucide-react";

export default function FloatingContact() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-4 right-3 z-40 flex flex-col items-center gap-2">
      {/* Messenger / Zalo Button */}
      <a
        href={siteConfig.socials.zalo}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat Zalo / Messenger"
        className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#0866FF] text-white flex items-center justify-center shadow-[0_3px_10px_rgba(8,102,255,0.4)] hover:scale-105 active:scale-95 transition-transform"
      >
        <MessageCircle className="w-5 h-5 fill-white" />
      </a>

      {/* Telegram Chat Button */}
      <a
        href={siteConfig.socials.telegram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat Telegram"
        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#229ED9] text-white flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-transform"
      >
        <Send className="w-4 h-4 ml-0.5" />
      </a>

      {/* Hotline Call Button */}
      <a
        href={`tel:${siteConfig.contact.phone}`}
        aria-label="Hotline Call"
        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#31A24C] text-white flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-transform"
      >
        <Phone className="w-4 h-4" />
      </a>

      {/* Scroll to top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="w-8 h-8 rounded-full bg-white text-[#65676B] border border-[#CED0D4] flex items-center justify-center shadow-sm hover:bg-[#F0F2F5] transition-colors"
        >
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );
}
