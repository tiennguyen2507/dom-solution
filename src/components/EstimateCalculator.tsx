"use client";

import React, { useState } from "react";
import { Calculator, ArrowRight, Check, Clock, HelpCircle } from "lucide-react";

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
      desc: "Trang đích bán hàng, chuyển đổi cao",
    },
    {
      id: "corporate",
      name: "Website Doanh Nghiệp",
      basePrice: 9500000,
      baseDays: 14,
      desc: "Giới thiệu công ty, dịch vụ, blog",
    },
    {
      id: "ecommerce",
      name: "Sàn E-Commerce",
      basePrice: 15000000,
      baseDays: 25,
      desc: "Bán hàng trực tuyến, giỏ hàng, thanh toán",
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
      desc: "Hệ thống quản lý nội bộ, dashboard realtime",
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
      name: "Tích hợp cổng thanh toán (VNPay / MoMo / Stripe)",
      price: 4000000,
      days: 4,
    },
    {
      id: "ai",
      name: "Tích hợp AI Trợ lý thông minh (Gemini/OpenAI)",
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
      name: "Tối ưu Core Web Vitals & Điểm PageSpeed 95+",
      price: 2000000,
      days: 2,
    },
    {
      id: "multilang",
      name: "Hỗ trợ đa ngôn ngữ (Tiếng Việt, Tiếng Anh...)",
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
    <section id="calculator" className="section-py bg-[#F0F2F5] border-t border-[#E4E6EB]">
      <div className="container max-w-5xl">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-kicker">
            <Calculator className="w-3.5 h-3.5 text-[#0866FF]" />
            <span>Công Cụ Dự Toán Minh Bạch</span>
          </div>
          <h2 className="section-title">Bảng Tính Chi Phí & Tiến Độ Dự Án</h2>
          <p className="section-subtitle">
            Dự toán nhanh chi phí và thời gian triển khai dựa trên các tính năng cần thiết cho dự án của bạn.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          {/* Left Form (FB Form Card) */}
          <div className="lg:col-span-7 fb-card p-5 sm:p-6 space-y-6">
            {/* 1. Project Type */}
            <div>
              <label className="text-[14px] font-bold text-[#050505] block mb-2.5">
                1. Loại hình dự án của bạn:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {projectTypes.map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setProjectType(type.id)}
                    className={`text-left p-3 rounded-lg border transition-all ${
                      projectType === type.id
                        ? "bg-[#E7F3FF] border-[#0866FF] ring-1 ring-[#0866FF]"
                        : "bg-white border-[#CED0D4] hover:bg-[#F2F3F5]"
                    }`}
                  >
                    <div className="font-bold text-[14px] text-[#050505]">
                      {type.name}
                    </div>
                    <div className="text-[12px] text-[#65676B]">{type.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Scope Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-[14px] font-bold text-[#050505]">
                  2. Quy mô module / màn hình:
                </label>
                <span className="text-[13px] font-bold text-[#0866FF] bg-[#E7F3FF] px-2.5 py-0.5 rounded-full">
                  {scopeSize} Phân Hệ
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={scopeSize}
                onChange={(e) => setScopeSize(Number(e.target.value))}
                className="w-full h-2 bg-[#CED0D4] rounded-lg appearance-none cursor-pointer accent-[#0866FF]"
              />
              <div className="flex justify-between text-[12px] text-[#65676B] mt-1">
                <span>Nhỏ (1-3)</span>
                <span>Tiêu chuẩn (4-6)</span>
                <span>Lớn (7-10)</span>
              </div>
            </div>

            {/* 3. Features Checkboxes in FB Style */}
            <div>
              <label className="text-[14px] font-bold text-[#050505] block mb-2.5">
                3. Tùy chọn tính năng nâng cao:
              </label>
              <div className="space-y-2">
                {featureOptions.map((opt) => {
                  const isChecked = selectedFeatures.includes(opt.id);
                  return (
                    <div
                      key={opt.id}
                      onClick={() => toggleFeature(opt.id)}
                      className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-all ${
                        isChecked
                          ? "bg-[#E7F3FF] border-[#0866FF]"
                          : "bg-white border-[#CED0D4] hover:bg-[#F2F3F5]"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-4 h-4 rounded flex items-center justify-center border transition-colors ${
                            isChecked
                              ? "bg-[#0866FF] border-[#0866FF] text-white"
                              : "border-[#CED0D4] bg-white"
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className="text-[14px] font-semibold text-[#050505]">
                          {opt.name}
                        </span>
                      </div>
                      <span className="text-[13px] font-medium text-[#65676B]">
                        +{formatCurrency(opt.price)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Summary (FB Card Style) */}
          <div className="lg:col-span-5 fb-card p-6 sticky top-20 bg-white">
            <div className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-wider text-[#0866FF] mb-3">
              <Calculator className="w-4 h-4" />
              <span>Dự Toán Tức Thì</span>
            </div>

            <div className="pb-4 mb-4 border-b border-[#E4E6EB]">
              <span className="text-[13px] text-[#65676B] block mb-1">
                Tổng chi phí dự kiến:
              </span>
              <div className="text-[32px] font-black text-[#0866FF] leading-tight mb-2">
                {formatCurrency(totalPrice)}
              </div>
              <div className="flex items-center gap-1.5 text-[13px] text-[#65676B]">
                <Clock className="w-4 h-4 text-[#FA383E]" />
                <span>
                  Thời gian triển khai: <strong>~{totalDays} ngày làm việc</strong>
                </span>
              </div>
            </div>

            <div className="space-y-2.5 text-[13px] text-[#65676B] mb-6">
              <div className="flex justify-between pb-1.5 border-b border-[#F0F2F5]">
                <span>Gói dịch vụ:</span>
                <span className="font-semibold text-[#050505]">
                  {selectedTypeObj.name}
                </span>
              </div>
              <div className="flex justify-between pb-1.5 border-b border-[#F0F2F5]">
                <span>Số lượng phân hệ:</span>
                <span className="font-semibold text-[#050505]">{scopeSize} module</span>
              </div>
              <div className="flex justify-between pb-1.5 border-b border-[#F0F2F5]">
                <span>Tính năng bổ sung:</span>
                <span className="font-semibold text-[#050505]">
                  {selectedFeatures.length} tính năng
                </span>
              </div>
              <div className="flex justify-between">
                <span>Bàn giao mã nguồn:</span>
                <span className="font-bold text-[#31A24C]">100% Full Source Git</span>
              </div>
            </div>

            <a
              href="#consultation"
              className="btn-accent w-full text-center text-[15px] py-2.5 flex items-center justify-center gap-2 mb-2"
            >
              <span>Gửi Yêu Cầu Báo Giá Này</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <p className="text-[12px] text-[#65676B] text-center">
              * Dự toán mang tính chất tham khảo. Dom Solution sẽ tư vấn chi tiết sau khi nhận brief cụ thể.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
