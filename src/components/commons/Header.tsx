"use client";

import React, { useState, useEffect, useSyncExternalStore } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import TikatLogo from "./TikatLogo";
import {
  Menu,
  X,
  Moon,
  Sun,
  Globe,
} from "lucide-react";
import { useLanguage, Language } from "@/context/LanguageContext";

// Theme external store integration with MutationObserver & instant notification
const themeListeners = new Set<() => void>();

function subscribeTheme(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  themeListeners.add(callback);
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => {
    themeListeners.delete(callback);
    observer.disconnect();
  };
}

function getThemeSnapshot() {
  if (typeof window === "undefined") return false;
  return document.documentElement.classList.contains("dark");
}

function getThemeServerSnapshot() {
  return false;
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isDark = useSyncExternalStore(subscribeTheme, getThemeSnapshot, getThemeServerSnapshot);
  const { lang, setLanguage, t } = useLanguage();

  const toggleTheme = () => {
    const isCurrentlyDark = document.documentElement.classList.contains("dark");
    if (isCurrentlyDark) {
      document.documentElement.classList.remove("dark");
      try {
        localStorage.setItem("theme", "light");
      } catch {}
    } else {
      document.documentElement.classList.add("dark");
      try {
        localStorage.setItem("theme", "dark");
      } catch {}
    }
    themeListeners.forEach((listener) => listener());
  };

  const changeLanguage = (newLang: Language) => {
    setLanguage(newLang);
  };

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

  // Navigation Links by Language (Bold Menu)
  const navLinks = [
    { label: t.nav.portfolio, href: "#portfolio" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.calculator, href: "#calculator" },
    { label: t.nav.process, href: "#process" },
    { label: t.nav.blog, href: "#blog" },
    { label: t.nav.faq, href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-[#0B0F19]/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-2xs py-2.5 sm:py-3.5"
          : "bg-white/80 dark:bg-[#0B0F19]/80 backdrop-blur-xs py-3.5 sm:py-4 border-b border-transparent"
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Zone 1: Brand Logo */}
        <Link href="/" className="flex items-center group shrink-0" aria-label="Tikat">
          <TikatLogo size="sm" dark={isDark} />
        </Link>

        {/* Zone 2: Navigation Links (Chữ Đậm / Bold Typography) */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[14.5px] lg:text-[15px] font-bold text-slate-800 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative py-1 group tracking-tight"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-200 group-hover:w-full rounded-full" />
            </a>
          ))}
        </nav>

        {/* Zone 3: Language Switcher, Dark Mode & Mobile Menu */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Switcher Pill: VI / EN */}
          <div className="flex items-center bg-slate-100 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 rounded-full p-0.5 shadow-2xs backdrop-blur-xs h-7.5 sm:h-8">
            <button
              type="button"
              onClick={() => changeLanguage("vi")}
              title="Tiếng Việt"
              className={`flex items-center gap-1 px-2.5 h-full rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                lang === "vi"
                  ? "bg-blue-600 text-white shadow-xs"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <span className="text-[11px] sm:text-[12px]">🇻🇳</span>
              <span className="tracking-wide text-[11px]">VI</span>
            </button>
            <button
              type="button"
              onClick={() => changeLanguage("en")}
              title="English"
              className={`flex items-center gap-1 px-2.5 h-full rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                lang === "en"
                  ? "bg-blue-600 text-white shadow-xs"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <span className="text-[11px] sm:text-[12px]">🇬🇧</span>
              <span className="tracking-wide text-[11px]">EN</span>
            </button>
          </div>

          {/* Dark Mode Toggle Button */}
          <motion.button
            whileTap={{ scale: 0.92 }}
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "Chuyển sang chế độ sáng" : "Chuyển sang chế độ tối"}
            title={isDark ? "Giao diện sáng (Light mode)" : "Giao diện tối (Dark mode)"}
            className="w-7.5 h-7.5 sm:w-8 sm:h-8 rounded-full bg-slate-100 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 flex items-center justify-center text-slate-700 dark:text-amber-400 hover:text-blue-600 dark:hover:text-amber-300 shadow-2xs hover:bg-slate-200/70 dark:hover:bg-slate-700/80 active:scale-95 transition-all cursor-pointer shrink-0"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isDark ? (
                <motion.div
                  key="sun"
                  initial={{ rotate: -90, scale: 0.7, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: 90, scale: 0.7, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ rotate: 90, scale: 0.7, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: -90, scale: 0.7, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-700" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-7.5 h-7.5 sm:w-8 sm:h-8 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-800 dark:text-slate-100 shadow-2xs cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 active:scale-95 transition-all shrink-0"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-3.5 h-3.5" /> : <Menu className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:hidden bg-white/98 dark:bg-[#0B0F19]/98 border-b border-slate-200 dark:border-slate-800 px-5 py-5 shadow-2xl max-h-[calc(100vh-65px)] overflow-y-auto backdrop-blur-md"
          >
            {/* Mobile Nav Links (Bold) */}
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-2.5 text-slate-900 dark:text-slate-100 hover:bg-blue-50 dark:hover:bg-slate-800/80 active:bg-blue-100 dark:active:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl text-base font-bold transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Mobile Footer Drawer Details */}
            <div className="pt-4 mt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5 font-medium">
                <Globe className="w-3.5 h-3.5 text-blue-500" />
                <span>{lang === "vi" ? "Ngôn ngữ:" : "Language:"}</span>
              </span>
              <span className="font-bold text-slate-800 dark:text-slate-200">
                {lang === "vi" ? "🇻🇳 Tiếng Việt" : "🇬🇧 English"}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
