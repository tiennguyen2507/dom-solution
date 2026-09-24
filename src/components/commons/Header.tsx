"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import DomLogo from "./DomLogo";
import {
  Menu,
  X,
  Search,
  MessageCircle,
  Briefcase,
  Compass,
  FileText,
  Calculator,
  Bell,
  CheckCircle,
} from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("portfolio");
  const [searchQuery, setSearchQuery] = useState("");
  const [notificationOpen, setNotificationOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < 400) setActiveTab("home");
      else if (scrollY < 1100) setActiveTab("portfolio");
      else if (scrollY < 1800) setActiveTab("services");
      else if (scrollY < 2600) setActiveTab("calculator");
      else setActiveTab("blog");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navTabs = [
    { id: "portfolio", label: "Dự Án", href: "#portfolio", icon: Briefcase },
    { id: "services", label: "Dịch Vụ", href: "#services", icon: Compass },
    { id: "calculator", label: "Bảng Giá", href: "#calculator", icon: Calculator },
    { id: "blog", label: "Kỹ Thuật", href: "#blog", icon: FileText },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#E4E6EB] shadow-[0_1px_2px_rgba(0,0,0,0.08)] h-13 sm:h-14">
      <div className="max-w-6xl mx-auto h-full px-3 sm:px-4 flex items-center justify-between gap-2">
        {/* Left: Brand Logo & FB-style Search Input */}
        <div className="flex items-center gap-2 shrink-0">
          <Link href="/" className="flex items-center" aria-label="Dom Solution">
            <DomLogo size="sm" />
          </Link>

          {/* Facebook pill search input (Desktop) */}
          <div className="relative hidden lg:block w-52">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#65676B]" />
            <input
              type="text"
              placeholder="Tìm dự án, tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-8 pl-8 pr-3 text-[13px] bg-[#F0F2F5] hover:bg-[#E4E6EB] focus:bg-white text-[#050505] placeholder-[#65676B] rounded-full border border-transparent focus:border-[#0866FF] focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Center: Facebook Top Navigation Tabs (Desktop / Tablet) */}
        <nav className="hidden md:flex items-center justify-center flex-1 max-w-md h-full mx-2">
          <div className="grid grid-cols-4 w-full h-full">
            {navTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <a
                  key={tab.id}
                  href={tab.href}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center justify-center h-full px-3 transition-colors ${
                    isActive
                      ? "text-[#0866FF]"
                      : "text-[#65676B] hover:bg-[#F2F3F5] rounded-lg my-1"
                  }`}
                  title={tab.label}
                >
                  <div className="flex items-center gap-1.5">
                    <Icon className={`w-5 h-5 ${isActive ? "stroke-[2.5]" : ""}`} />
                    <span className="text-[13px] font-semibold hidden xl:inline">
                      {tab.label}
                    </span>
                  </div>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#0866FF] rounded-t-full" />
                  )}
                </a>
              );
            })}
          </div>
        </nav>

        {/* Right: Notification, Chat CTA, Mobile Menu */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* Notification Button */}
          <div className="relative">
            <button
              onClick={() => setNotificationOpen(!notificationOpen)}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#F0F2F5] hover:bg-[#E4E6EB] flex items-center justify-center text-[#050505] transition-colors relative"
              aria-label="Thông báo"
            >
              <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-[#050505]" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-[#FA383E] rounded-full border border-white" />
            </button>

            {notificationOpen && (
              <div className="absolute right-0 top-11 w-72 sm:w-80 bg-white rounded-xl shadow-[0_12px_28px_0_rgba(0,0,0,0.2)] border border-[#CED0D4] p-3 z-50 animate-in fade-in duration-100">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#E4E6EB]">
                  <span className="font-bold text-[14px] text-[#050505]">Thông Báo Mới</span>
                  <span className="text-[12px] text-[#0866FF] font-semibold cursor-pointer" onClick={() => setNotificationOpen(false)}>Đóng</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-[#F2F3F5] cursor-pointer">
                    <div className="w-8 h-8 rounded-full bg-[#E7F3FF] text-[#0866FF] flex items-center justify-center shrink-0">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div className="text-[13px] leading-tight">
                      <p className="text-[#050505] font-semibold">Bàn giao 100% Full Source Code</p>
                      <p className="text-[#65676B] text-[12px] mt-0.5">Bảo hành 12 tháng mọi dự án bàn giao.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Message CTA */}
          <a
            href="#consultation"
            className="inline-flex items-center gap-1.5 h-8 sm:h-9 px-3 bg-[#0866FF] hover:bg-[#075CE5] text-white rounded-md text-[13px] sm:text-[14px] font-semibold transition-colors shadow-sm"
          >
            <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white" />
            <span>Tư Vấn</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-9 h-9 rounded-full bg-[#F0F2F5] hover:bg-[#E4E6EB] md:hidden flex items-center justify-center text-[#050505]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#E4E6EB] px-3 py-3 shadow-lg">
          <nav className="flex flex-col gap-1">
            {navTabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <a
                  key={tab.id}
                  href={tab.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#050505] hover:bg-[#F2F3F5] text-[14px] font-semibold"
                >
                  <Icon className="w-4 h-4 text-[#0866FF]" />
                  <span>{tab.label}</span>
                </a>
              );
            })}
          </nav>
          <div className="pt-2.5 mt-2 border-t border-[#E4E6EB] flex flex-col gap-2">
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-secondary w-full text-center text-[13px] py-2"
            >
              Tính Toán Báo Giá
            </a>
            <a
              href="#consultation"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary w-full text-center text-[13px] py-2"
            >
              Gửi Tin Nhắn Nhận Tư Vấn
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
