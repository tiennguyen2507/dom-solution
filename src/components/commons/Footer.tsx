"use client";

import React from "react";
import Link from "next/link";
import DomLogo from "./DomLogo";
import { siteConfig } from "@/lib/seoConfig";
import {
  Mail,
  Phone,
  ShieldCheck,
  Code2,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#05070B] text-slate-400 border-t border-white/10 pt-10 sm:pt-16 pb-8 sm:pb-12 text-xs sm:text-sm relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-10 pb-8 sm:pb-12 border-b border-white/10">
          {/* Brand & About */}
          <div className="md:col-span-2 space-y-3 sm:space-y-4">
            <Link href="/" className="inline-block">
              <DomLogo size="sm" dark={true} />
            </Link>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-md">
              Chuyên gia lập trình Full-stack Web & Web App Development. Thiết kế kiến trúc Next.js 15 tốc độ cao, bàn giao 100% mã nguồn Git và bảo hành 12 tháng.
            </p>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-1">
              <span className="flex items-center gap-1 bg-slate-900 px-2.5 py-1 rounded-full border border-white/10 text-[11px] sm:text-xs font-semibold text-blue-400">
                <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400" />
                Bảo hành 12 tháng
              </span>
              <span className="flex items-center gap-1 bg-slate-900 px-2.5 py-1 rounded-full border border-white/10 text-[11px] sm:text-xs font-semibold text-emerald-400">
                <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
                100% Full Source Git
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm sm:text-base font-bold text-white mb-2.5 sm:mb-4">
              Sản Phẩm & Dịch Vụ
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#portfolio" className="hover:text-cyan-400 transition-colors">
                  Dự Án Đã Triển Khai
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  Web App & SaaS Development
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-cyan-400 transition-colors">
                  Dự Toán Báo Giá Tức Thì
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-cyan-400 transition-colors">
                  Quy Trình 5 Bước
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-cyan-400 transition-colors">
                  Góc Kỹ Thuật Next.js 15
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contacts */}
          <div>
            <h4 className="text-sm sm:text-base font-bold text-white mb-2.5 sm:mb-4">
              Kênh Trao Đổi
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400 shrink-0" />
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-cyan-400 font-bold text-white transition-colors">
                  {siteConfig.contact.hotlineDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-400 shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-cyan-400 text-slate-300 truncate transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="text-[11px] sm:text-xs text-slate-400">
                Remote / Online làm việc toàn quốc
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-[11px] sm:text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Dom Solution Studio · Freelance Web & Web App Development. All rights reserved.</p>
          <div className="flex items-center gap-4 sm:gap-6">
            <a href="#services" className="hover:text-white transition-colors">Bảo Hành</a>
            <a href="#process" className="hover:text-white transition-colors">Mã Nguồn</a>
            <a href="#consultation" className="hover:text-white transition-colors">Nhận Báo Giá</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
