"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import DomLogo from "./DomLogo";
import {
  Menu,
  X,
  ArrowRight,
} from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is opened
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Dự Án", href: "#portfolio" },
    { label: "Dịch Vụ", href: "#services" },
    { label: "Dự Toán", href: "#calculator" },
    { label: "Quy Trình", href: "#process" },
    { label: "Bài Viết", href: "#blog" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-2xs py-2.5 sm:py-3.5"
          : "bg-white/80 backdrop-blur-xs py-3 sm:py-4 border-b border-transparent"
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Zone 1: Brand Wordmark */}
        <Link href="/" className="flex items-center group shrink-0" aria-label="Dom Solution">
          <DomLogo size="sm" dark={false} />
        </Link>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-[14px] font-medium text-slate-600">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-blue-600 transition-colors relative py-1 hover:font-semibold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action & Mobile Menu Toggle */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <a
            href="#consultation"
            className="btn-primary text-xs sm:text-sm py-2 px-3.5 sm:px-5 shadow-2xs"
          >
            <span>Tư Vấn Ngay</span>
            <ArrowRight className="w-3.5 h-3.5 hidden xs:inline" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-9 h-9 rounded-full bg-white border border-slate-200 md:hidden flex items-center justify-center text-slate-800 shadow-2xs cursor-pointer hover:bg-slate-50 active:scale-95 transition-all"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:hidden bg-white border-b border-slate-200 px-5 py-5 shadow-xl max-h-[calc(100vh-65px)] overflow-y-auto"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 text-slate-800 hover:bg-slate-50 active:bg-slate-50 hover:text-blue-600 rounded-lg text-base font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="pt-4 mt-2 border-t border-slate-100">
              <a
                href="#consultation"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary w-full text-center text-sm py-3 justify-center"
              >
                <span>Nhận Báo Giá Dự Án</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
