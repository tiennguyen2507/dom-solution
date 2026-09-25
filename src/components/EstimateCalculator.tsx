"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { Calculator, ArrowRight, Check, Clock } from "lucide-react";

export default function EstimateCalculator() {
  const [projectType, setProjectType] = useState<string>("saas");
  const [scopeSize, setScopeSize] = useState<number>(5);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    "auth",
    "cms",
    "seo",
  ]);

  const projectTypes = [
    {
      id: "landing",
      name: "Landing Page",
      basePrice: 6500000,
      baseDays: 7,
      desc: "Trang đích bán hàng & chuyển đổi cao",
    },
    {
      id: "corporate",
      name: "Website Doanh Nghiệp",
      basePrice: 9500000,
      baseDays: 14,
      desc: "Giới thiệu công ty, dịch vụ, chuẩn SEO",
    },
    {
      id: "ecommerce",
      name: "Sàn E-Commerce",
      basePrice: 15000000,
      baseDays: 25,
      desc: "Bán hàng trực tuyến, giỏ hàng & thanh toán",
    },
    {
      id: "saas",
      name: "SaaS Web Application",
      basePrice: 22000000,
      baseDays: 35,
      desc: "Ứng dụng web phức tạp, thuê bao định kỳ",
    },
    {
      id: "portal",
      name: "Portal Quản Trị / ERP",
      basePrice: 28000000,
      baseDays: 45,
      desc: "Hệ thống nội bộ & dashboard phân tích",
    },
  ];

  const featureOptions = [
    {
      id: "auth",
      name: "Xác thực & Phân quyền đa cấp (RBAC)",
      price: 3500000,
      days: 3,
    },
    {
      id: "payment",
      name: "Cổng thanh toán tự động (VNPay / MoMo / Stripe)",
      price: 4000000,
      days: 4,
    },
    {
      id: "ai",
      name: "Tích hợp AI Trợ lý thông minh (Gemini API)",
      price: 4500000,
      days: 4,
    },
    {
      id: "cms",
      name: "Hệ thống CMS Quản trị nội dung chuyên sâu",
      price: 3000000,
      days: 3,
    },
    {
      id: "seo",
      name: "Tối ưu Core Web Vitals & Điểm PageSpeed 98+",
      price: 2000000,
      days: 2,
    },
    {
      id: "multilang",
      name: "Hỗ trợ đa ngôn ngữ (Việt - Anh - Nhật...)",
      price: 2500000,
      days: 2,
    },
  ];

  const toggleFeature = (featureId: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(featureId)
        ? prev.filter((id) => id !== featureId)
        : [...prev, featureId]
    );
  };

  const selectedTypeObj =
    projectTypes.find((t) => t.id === projectType) || projectTypes[3];

  const featuresPrice = selectedFeatures.reduce((total, id) => {
    const f = featureOptions.find((opt) => opt.id === id);
    return total + (f ? f.price : 0);
  }, 0);

  const featuresDays = selectedFeatures.reduce((total, id) => {
    const f = featureOptions.find((opt) => opt.id === id);
    return total + (f ? f.days : 0);
  }, 0);

  const scopeMultiplier = 1 + (scopeSize - 3) * 0.08;
  const totalPrice =
    Math.round((selectedTypeObj.basePrice * scopeMultiplier + featuresPrice) / 100000) *
    100000;
  const totalDays = Math.round(
    selectedTypeObj.baseDays + featuresDays + (scopeSize - 3) * 1.5
  );

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(val);
  };

  return (
    <section id="calculator" className="py-20 sm:py-28 bg-slate-50/70 relative border-t border-slate-200">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="flex justify-center mb-3">
            <div className="kicker-pill shadow-xs">
              <Calculator className="w-3.5 h-3.5 text-blue-600" />
              <span>Dự Toán Minh Bạch</span>
            </div>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif text-slate-900 tracking-tight mb-4">
            Ước tính <span className="italic font-normal text-blue-600">chi phí & thời gian</span> triển khai
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Công cụ tính toán tự động dựa trên khối lượng tính năng thực tế, giúp bạn chủ động lập kế hoạch ngân sách chính xác.
          </p>
        </motion.div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Form Controls */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Project Type */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
                Bước 1 · Định Hình Mô Hình
              </div>
              <h3 className="text-base sm:text-lg font-serif font-bold text-slate-900 mb-4">
                Chọn Loại Hình Dự Án Cần Triển Khai
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {projectTypes.map((t) => {
                  const isSelected = projectType === t.id;
                  return (
                    <div
                      key={t.id}
                      onClick={() => setProjectType(t.id)}
                      className={`p-3.5 sm:p-4 rounded-xl cursor-pointer border transition-all text-left ${
                        isSelected
                          ? "bg-blue-50/50 border-blue-600 shadow-xs ring-1 ring-blue-600/30"
                          : "bg-white border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-semibold text-slate-900">
                          {t.name}
                        </span>
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            isSelected
                              ? "border-blue-600 bg-blue-600 text-white"
                              : "border-slate-300"
                          }`}
                        >
                          {isSelected && <Check className="w-2.5 h-2.5" />}
                        </div>
                      </div>
                      <p className="text-xs text-slate-500 mb-2 leading-relaxed">
                        {t.desc}
                      </p>
                      <span className="text-xs font-semibold text-slate-900">
                        Khởi điểm: {formatCurrency(t.basePrice)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Scope Scale */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
                Bước 2 · Quy Mô Dự Án
              </div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-base sm:text-lg font-serif font-bold text-slate-900">
                  Số Lượng Màn Hình / Trang Giao Diện Chính
                </h3>
                <span className="text-lg font-serif font-bold text-slate-900">
                  {scopeSize} Màn hình
                </span>
              </div>
              <input
                type="range"
                min="3"
                max="15"
                step="1"
                value={scopeSize}
                onChange={(e) => setScopeSize(Number(e.target.value))}
                className="w-full accent-blue-600 cursor-pointer"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-2">
                <span>3 Màn hình (Cơ bản)</span>
                <span>8 Màn hình (Tiêu chuẩn)</span>
                <span>15+ Màn hình (Mở rộng)</span>
              </div>
            </div>

            {/* Step 3: Features */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
                Bước 3 · Tính Năng Nâng Cao
              </div>
              <h3 className="text-base sm:text-lg font-serif font-bold text-slate-900 mb-4">
                Chọn Các Module Chức Năng Bổ Sung
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {featureOptions.map((f) => {
                  const isChecked = selectedFeatures.includes(f.id);
                  return (
                    <div
                      key={f.id}
                      onClick={() => toggleFeature(f.id)}
                      className={`p-3.5 rounded-xl cursor-pointer border transition-all flex items-start gap-3 ${
                        isChecked
                          ? "bg-blue-50/50 border-blue-600 shadow-xs ring-1 ring-blue-600/30"
                          : "bg-white border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded mt-0.5 shrink-0 flex items-center justify-center border ${
                          isChecked
                            ? "bg-blue-600 border-blue-600 text-white"
                            : "border-slate-300"
                        }`}
                      >
                        {isChecked && <Check className="w-2.5 h-2.5" />}
                      </div>
                      <div className="flex-1">
                        <div className="text-xs sm:text-sm font-semibold text-slate-900">
                          {f.name}
                        </div>
                        <div className="text-[11px] text-slate-500 mt-0.5">
                          +{formatCurrency(f.price)} · +{f.days} ngày
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Summary Receipt Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-[0_4px_30px_rgba(15,23,42,0.06)]">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
              Bảng Tổng Hợp Dự Toán
            </div>
            <h3 className="text-xl sm:text-2xl font-serif text-slate-900 mb-4">
              Kế Hoạch Ngân Sách Dự Kiến
            </h3>

            {/* Total Price Display */}
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 mb-6 text-center">
              <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold block mb-1">
                Chi Phí Đầu Tư Trọn Gói:
              </span>
              <div className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mb-2 tabular-nums">
                {formatCurrency(totalPrice)}
              </div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600">
                <Clock className="w-3.5 h-3.5 text-blue-600" />
                <span>Tiến độ bàn giao: <strong>{totalDays} ngày làm việc</strong></span>
              </div>
            </div>

            {/* Summary Breakdown */}
            <div className="space-y-3 pb-6 mb-6 border-b border-slate-100 text-xs sm:text-sm text-slate-600">
              <div className="flex justify-between">
                <span>Mô hình:</span>
                <strong className="text-slate-900">{selectedTypeObj.name}</strong>
              </div>
              <div className="flex justify-between">
                <span>Quy mô giao diện:</span>
                <strong className="text-slate-900">{scopeSize} màn hình chính</strong>
              </div>
              <div className="flex justify-between">
                <span>Tính năng bổ sung:</span>
                <strong className="text-slate-900">{selectedFeatures.length} module đã chọn</strong>
              </div>
              <div className="flex justify-between">
                <span>Bảo hành & Hỗ trợ:</span>
                <span className="font-semibold text-emerald-600">12 Tháng Miễn Phí</span>
              </div>
              <div className="flex justify-between">
                <span>Bàn giao mã nguồn:</span>
                <span className="font-semibold text-blue-600">100% Full Source Code</span>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="#consultation"
              className="btn-primary w-full text-center text-sm py-3 justify-center mb-3"
            >
              <span>Gửi Yêu Cầu Theo Báo Giá Này</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <p className="text-[11px] text-slate-400 text-center leading-relaxed">
              * Mức giá dự toán mang tính tham khảo chuẩn xác 90%. Dom Solution sẽ tư vấn và chốt phương án chi tiết sau khi nhận brief cụ thể.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
