"use client";

import React, { useState } from "react";
import Link from "next/link";
import DomLogo from "./DomLogo";
import { siteConfig } from "@/lib/seoConfig";
import {
  Mail,
  Phone,
  Send,
  CheckCircle,
  ShieldCheck,
  Code2,
} from "lucide-react";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
  };

  return (
    <footer className="bg-white text-[#65676B] border-t border-[#CED0D4] pt-10 pb-8 text-[13px]">
      <div className="container max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-[#E4E6EB]">
          {/* Brand & About */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-3">
              <DomLogo size="sm" />
            </Link>
            <p className="text-[#65676B] text-[14px] leading-relaxed mb-4 max-w-md">
              Chuyên gia lập trình Full-stack Web & Web App Development. Thiết kế kiến trúc Next.js 15 tốc độ cao, bàn giao 100% full source code và cam kết đồng hành bảo hành 12 tháng.
            </p>
            <div className="flex items-center gap-2 text-[12px] font-medium text-[#050505]">
              <span className="flex items-center gap-1 bg-[#F0F2F5] px-2.5 py-1 rounded">
                <ShieldCheck className="w-4 h-4 text-[#0866FF]" />
                Bảo hành 12 tháng
              </span>
              <span className="flex items-center gap-1 bg-[#F0F2F5] px-2.5 py-1 rounded">
                <Code2 className="w-4 h-4 text-[#31A24C]" />
                Full Source Git
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[14px] font-bold text-[#050505] mb-3">
              Sản Phẩm & Dịch Vụ
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#portfolio" className="hover:text-[#0866FF] hover:underline">
                  Sản Phẩm Đã Triển Khai
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#0866FF] hover:underline">
                  Web App & SaaS Development
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-[#0866FF] hover:underline">
                  Dự Toán Báo Giá Tức Thì
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#0866FF] hover:underline">
                  Quy Trình 5 Bước
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-[#0866FF] hover:underline">
                  Góc Kỹ Thuật Next.js
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contacts */}
          <div>
            <h4 className="text-[14px] font-bold text-[#050505] mb-3">
              Kênh Trao Đổi
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#0866FF]" />
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-[#0866FF] font-semibold text-[#050505]">
                  {siteConfig.contact.hotlineDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#FA383E]" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-[#0866FF] truncate">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <span className="text-[#65676B]">Remote làm việc toàn quốc</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Facebook-style Bottom Mini Footer */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[12px] text-[#8A8D91]">
          <p>© {new Date().getFullYear()} Dom Solution · Freelance Web Development. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#services" className="hover:underline">Bảo Hành</a>
            <a href="#process" className="hover:underline">Mã Nguồn</a>
            <a href="#consultation" className="hover:underline">Báo Giá</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
