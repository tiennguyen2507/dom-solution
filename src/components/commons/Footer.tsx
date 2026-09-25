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
    <footer className="bg-[#141517] text-[#A1A1AA] border-t border-[#27272A] pt-14 sm:pt-20 pb-10 sm:pb-14 text-xs sm:text-sm">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-12 pb-10 sm:pb-14 border-b border-[#27272A]">
          {/* Brand & About */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <DomLogo size="sm" dark={true} />
            </Link>
            <p className="text-[#D4D4D8] text-xs sm:text-sm leading-relaxed max-w-md font-normal">
              Dom Solution · Studio thiết kế và phát triển Website & Web Application chuyên nghiệp. Bàn giao 100% mã nguồn sạch, cam kết PageSpeed 98+ và bảo hành 12 tháng tận tâm.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1F2023] border border-[#2E3035] text-xs text-[#E4E4E7]">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Bảo hành 12 tháng
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1F2023] border border-[#2E3035] text-xs text-[#E4E4E7]">
                <Code2 className="w-3.5 h-3.5 text-blue-400" />
                100% Full Source Code Git
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Khám Phá
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">
                  Dự Án Tiêu Biểu
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Dịch Vụ Phát Triển Web
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-white transition-colors">
                  Dự Toán Ngân Sách
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  Quy Trình 5 Bước
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-white transition-colors">
                  Góc Nhìn Kỹ Thuật
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Hỏi Đáp & Chính Sách
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contacts */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Liên Hệ Trực Tiếp
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`tel:${siteConfig.contact.phone}`} className="font-semibold text-white hover:text-blue-400 transition-colors">
                  {siteConfig.contact.hotlineDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="text-[#D4D4D8] hover:text-white truncate transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="text-xs text-[#71717A] pt-1">
                Làm việc trực tuyến & tiếp nhận dự án toàn quốc
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71717A]">
          <p>© {new Date().getFullYear()} Dom Solution. Bản quyền thuộc về Dom Solution Studio.</p>
          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-white transition-colors">Dịch Vụ</a>
            <a href="#portfolio" className="hover:text-white transition-colors">Dự Án</a>
            <a href="#consultation" className="hover:text-white transition-colors">Báo Giá</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
