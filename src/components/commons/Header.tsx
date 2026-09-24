"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import DomLogo from "./DomLogo";
import {
  Menu,
  X,
  Briefcase,
  Layers,
  Calculator,
  BookOpen,
  ArrowRight,
  GitBranch,
  Sparkles,
} from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("portfolio");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const scrollY = window.scrollY;
      if (scrollY < 500) setActiveTab("portfolio");
      else if (scrollY < 1200) setActiveTab("services");
      else if (scrollY < 2000) setActiveTab("calculator");
      else if (scrollY < 2800) setActiveTab("process");
      else setActiveTab("blog");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navTabs = [
    { id: "portfolio", label: "Dự Án", href: "#portfolio", icon: Briefcase },
    { id: "services", label: "Dịch Vụ", href: "#services", icon: Layers },
    { id: "calculator", label: "Báo Giá", href: "#calculator", icon: Calculator },
    { id: "process", label: "Quy Trình", href: "#process", icon: GitBranch },
    { id: "blog", label: "Kỹ Thuật", href: "#blog", icon: BookOpen },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#07090E]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center group" aria-label="Dom Solution">
          <DomLogo size="sm" dark={true} />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 border border-white/10 backdrop-blur-md rounded-full px-3 py-1.5 shadow-inner">
          {navTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <a
                key={tab.id}
                href={tab.href}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  isActive
                    ? "text-white bg-gradient-to-r from-blue-600/80 to-indigo-600/80 shadow-md"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                <Icon className="w-4 h-4 opacity-80" />
                <span>{tab.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Right CTA & Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="#consultation"
            className="btn-gradient-primary hidden sm:inline-flex text-sm py-2.5 px-5"
          >
            <Sparkles className="w-4 h-4 text-cyan-300" />
            <span>Tư Vấn Báo Giá</span>
            <ArrowRight className="w-4 h-4 ml-0.5" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 rounded-full bg-slate-900/80 border border-white/10 md:hidden flex items-center justify-center text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0F172A]/95 backdrop-blur-2xl border-b border-white/10 px-5 py-6 shadow-2xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-2">
            {navTabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <a
                  key={tab.id}
                  href={tab.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-200 hover:text-white hover:bg-white/5 text-base font-semibold transition-colors"
                >
                  <Icon className="w-5 h-5 text-blue-400" />
                  <span>{tab.label}</span>
                </a>
              );
            })}
          </nav>
          <div className="pt-4 mt-3 border-t border-white/10 flex flex-col gap-2.5">
            <a
              href="#consultation"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-gradient-primary w-full text-center text-base py-3"
            >
              Tư Vấn Ngay
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
