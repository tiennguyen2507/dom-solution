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
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E8E6DF] shadow-xs py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Zone 1: Brand Wordmark */}
        <Link href="/" className="flex items-center group" aria-label="Dom Solution">
          <DomLogo size="sm" dark={false} />
        </Link>

        {/* Zone 2: Navigation Links (Clean single-line text links) */}
        <nav className="hidden md:flex items-center gap-7 text-[14px] font-medium text-[#4A4A45]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#18181B] transition-colors relative py-1 hover:font-semibold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#consultation"
            className="btn-primary text-xs sm:text-sm py-2.5 px-5 shadow-xs"
          >
            <span>Tư Vấn Ngay</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-9 h-9 rounded-full bg-white border border-[#DCD9D0] md:hidden flex items-center justify-center text-[#18181B] shadow-xs cursor-pointer hover:bg-[#F5F3EC] transition-colors"
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
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-[#FAF8F5] border-b border-[#E8E6DF] px-6 py-6 shadow-xl overflow-hidden"
          >
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-[#18181B] hover:bg-white rounded-lg text-base font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="pt-4 mt-3 border-t border-[#E8E6DF]">
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
