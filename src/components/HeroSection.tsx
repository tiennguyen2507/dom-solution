"use client";

import React from "react";
import Image from "next/image";
import { heroAsset } from "@/data/domSolutionData";
import {
  ShieldCheck,
  Zap,
  Code2,
  ArrowRight,
  MessageCircle,
  ThumbsUp,
  Share2,
  CheckCircle2,
  Phone,
  Calculator,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="pt-16 pb-8 bg-[#F0F2F5]">
      <div className="container max-w-4xl px-3 sm:px-4">
        {/* Facebook Page Profile & Cover Card */}
        <div className="bg-white rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.1)] border border-[#CED0D4] overflow-hidden mb-4">
          {/* Cover Photo / Tech Banner */}
          <div className="relative h-36 sm:h-56 md:h-64 w-full bg-gradient-to-r from-[#0866FF] via-[#0045B4] to-[#082F6E] overflow-hidden">
            {/* Real high quality workspace image overlay with low opacity */}
            <Image
              src={heroAsset}
              alt="Dom Solution Studio"
              fill
              priority
              className="object-cover opacity-35 mix-blend-overlay"
              sizes="(max-width: 768px) 100vw, 800px"
              referrerPolicy="no-referrer"
            />
            {/* Tech grid texture overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff20_1px,transparent_1px)] [background-size:12px_12px]" />
            <div className="absolute bottom-3 right-3 hidden sm:flex items-center gap-1.5 bg-black/60 backdrop-blur-sm text-white px-2.5 py-1 rounded text-[12px] font-medium">
              <Code2 className="w-3.5 h-3.5 text-blue-300" />
              <span>Next.js 15 · TypeScript · Full-Stack</span>
            </div>
          </div>

          {/* Profile Bar Area */}
          <div className="px-4 pb-4 sm:px-6 sm:pb-6 relative bg-white">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 -mt-12 sm:-mt-16 mb-4">
              <div className="flex flex-col sm:flex-row items-center sm:items-end gap-3 text-center sm:text-left">
                {/* Facebook Avatar with stylized DOM logo icon */}
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white bg-gradient-to-tr from-[#082F6E] via-[#0866FF] to-[#2563EB] text-white flex items-center justify-center font-black text-2xl sm:text-3xl shadow-md overflow-hidden shrink-0">
                  <div className="flex flex-col items-center justify-center leading-none">
                    <span className="font-extrabold tracking-tight">DOM</span>
                    <span className="text-[9px] tracking-widest text-blue-200 mt-0.5">STUDIO</span>
                  </div>
                </div>

                {/* Page Title & Status */}
                <div className="pt-1">
                  <div className="flex items-center justify-center sm:justify-start gap-1.5">
                    <h1 className="text-xl sm:text-2xl font-bold text-[#050505] tracking-tight">
                      Dom Solution
                    </h1>
                    <span className="w-4 h-4 rounded-full bg-[#0866FF] text-white flex items-center justify-center text-[10px]" title="Đã xác minh">
                      ✓
                    </span>
                  </div>
                  <p className="text-[13px] sm:text-[14px] text-[#65676B] font-normal mt-0.5">
                    Lập Trình Web & Web App Chuyên Nghiệp · Bàn Giao 100% Mã Nguồn
                  </p>
                  <p className="text-[12px] text-[#65676B] mt-0.5">
                    ⭐ <strong>5.0 / 5.0</strong> (25+ Đánh giá từ Startup & Doanh Nghiệp)
                  </p>
                </div>
              </div>

              {/* Action Buttons: 2 large buttons side by side on mobile */}
              <div className="grid grid-cols-2 sm:flex sm:items-center gap-2 w-full sm:w-auto pt-2 sm:pt-0">
                <a
                  href="#consultation"
                  className="btn-primary text-[14px] py-2.5 px-4 text-center justify-center"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Nhận Báo Giá</span>
                </a>
                <a
                  href="#portfolio"
                  className="btn-secondary text-[14px] py-2.5 px-4 text-center justify-center"
                >
                  <span>Xem Dự Án</span>
                </a>
              </div>
            </div>

            {/* Hairline Divider */}
            <div className="h-[1px] bg-[#E4E6EB] my-3" />

            {/* Quick Trust Badges Strip (Facebook highlight row) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[13px] font-semibold text-[#050505]">
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#F0F2F5]">
                <ShieldCheck className="w-4 h-4 text-[#0866FF] shrink-0" />
                <span>Bàn giao 100% Full Source Code</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#F0F2F5]">
                <Zap className="w-4 h-4 text-[#FA383E] shrink-0" />
                <span>Tối ưu PageSpeed 95+ Mobile</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#F0F2F5]">
                <CheckCircle2 className="w-4 h-4 text-[#31A24C] shrink-0" />
                <span>Bảo hành kỹ thuật 12 Tháng</span>
              </div>
            </div>
          </div>
        </div>

        {/* Facebook Pinned Post: High impact introduction */}
        <div className="bg-white rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.1)] border border-[#CED0D4] p-4 sm:p-5 mb-4">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E4E6EB]">
            <div className="flex items-center gap-2 text-[13px] font-bold text-[#0866FF]">
              <span>📌 BÀI GHIM GIỚI THIỆU DỊCH VỤ</span>
            </div>
            <span className="text-[12px] text-[#65676B]">Công khai 🌐</span>
          </div>

          <h2 className="text-[17px] sm:text-[19px] font-bold text-[#050505] mb-2 leading-snug">
            Giải Pháp Lập Trình Full-Stack Trọn Gói Cho Doanh Nghiệp & Startup
          </h2>

          <p className="text-[14px] sm:text-[15px] text-[#050505] leading-relaxed mb-3">
            Chào mừng bạn đến với <strong>Dom Solution</strong>. Chúng tôi chuyên xây dựng các sản phẩm Web App, SaaS Platform, Sàn E-Commerce và Website Doanh Nghiệp với công nghệ Next.js 15 hiện đại, tốc độ tải dưới 1 giây, bảo mật cao cấp và bàn giao toàn bộ mã nguồn Git.
          </p>

          <div className="p-3 bg-[#E7F3FF] rounded-lg text-[13px] sm:text-[14px] text-[#0045B4] mb-3">
            💡 <strong>Cam kết chuẩn chỉ:</strong> Tư vấn kiến trúc miễn phí → Báo giá trọn gói không phát sinh → Cập nhật bản xem trước hàng tuần → Bàn giao và hỗ trợ vận hành.
          </div>

          <div className="flex items-center gap-2 pt-2">
            <a href="#calculator" className="btn-secondary text-[13px] sm:text-[14px] py-2 px-3.5 flex-1 sm:flex-initial text-center justify-center">
              <Calculator className="w-4 h-4 text-[#0866FF]" />
              <span>Dự Toán Chi Phí</span>
            </a>
            <a href="#consultation" className="btn-primary text-[13px] sm:text-[14px] py-2 px-4 flex-1 sm:flex-initial text-center justify-center">
              <span>Liên Hệ Trực Tiếp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
