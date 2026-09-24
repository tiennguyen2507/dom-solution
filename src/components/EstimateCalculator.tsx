"use client";

import React, { useState } from "react";
import { Calculator, ArrowRight, Check, Clock, ShieldCheck, Zap } from "lucide-react";

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
    <section id="calculator" className="py-24 bg-[#07090E] relative border-t border-white/10">
      {/* Background Ambient Glow */}
      <div className="glow-cyan top-20 right-10" />

      <div className="container max-w-7xl mx-auto relative z-10 px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 mb-4">
            <Calculator className="w-4 h-4 text-cyan-400" />
            <span>DỰ TOÁN CHI PHÍ TỰ ĐỘNG</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            Tính Toán Chi Phí & <span className="text-gradient-cyan">Tiến Độ Dự Án</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Minh bạch 100% về giá trị và thời gian triển khai dựa trên tính năng bạn lựa chọn.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Options Form */}
          <div className="lg:col-span-7 glass-card p-6 sm:p-8 md:p-10 space-y-8 border border-white/10 bg-slate-950/70">
            {/* 1. Project Type */}
            <div>
              <label className="text-sm font-bold text-white block mb-3 uppercase tracking-wider text-slate-300">
                1. LOẠI HÌNH SẢN PHẨM:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {projectTypes.map((type, idx) => {
                  const isLastOdd = idx === projectTypes.length - 1 && projectTypes.length % 2 !== 0;
                  const isSelected = projectType === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setProjectType(type.id)}
                      className={`text-left p-4 rounded-xl border transition-all ${
                        isLastOdd ? "sm:col-span-2" : ""
                      } ${
                        isSelected
                          ? "bg-gradient-to-r from-blue-900/50 to-indigo-900/50 border-blue-500 text-white shadow-lg shadow-blue-500/10"
                          : "bg-slate-900/60 border-white/10 text-slate-300 hover:bg-slate-900 hover:border-white/20"
                      }`}
                    >
                      <div className="font-bold text-base text-white mb-0.5">
                        {type.name}
                      </div>
                      <div className="text-xs text-slate-400 leading-normal">{type.desc}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Scope Slider */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-bold text-white uppercase tracking-wider text-slate-300">
                  2. QUY MÔ MODULE / MÀN HÌNH:
                </label>
                <span className="text-xs font-bold text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-500/30">
                  {scopeSize} Phân Hệ
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={scopeSize}
                onChange={(e) => setScopeSize(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-xs text-slate-400 mt-2 font-medium">
                <span>Nhỏ (1-3)</span>
                <span>Tiêu chuẩn (4-6)</span>
                <span>Lớn (7-10)</span>
              </div>
            </div>

            {/* 3. Features Checkboxes */}
            <div>
              <label className="text-sm font-bold text-white block mb-3 uppercase tracking-wider text-slate-300">
                3. TÙY CHỌN TÍNH NĂNG NÂNG CAO:
              </label>
              <div className="space-y-2.5">
                {featureOptions.map((opt) => {
                  const isChecked = selectedFeatures.includes(opt.id);
                  return (
                    <div
                      key={opt.id}
                      onClick={() => toggleFeature(opt.id)}
                      className={`flex items-center justify-between p-3.5 sm:p-4 rounded-xl border cursor-pointer transition-all ${
                        isChecked
                          ? "bg-blue-950/50 border-blue-500/60 shadow-md"
                          : "bg-slate-900/50 border-white/10 hover:bg-slate-900"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors shrink-0 ${
                            isChecked
                              ? "bg-blue-600 border-blue-500 text-white"
                              : "border-slate-600 bg-slate-800"
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <span className="text-sm font-semibold text-white leading-tight">
                          {opt.name}
                        </span>
                      </div>
                      <span className="text-xs font-bold text-cyan-400 shrink-0 ml-3">
                        +{formatCurrency(opt.price)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Live Estimate Summary Card */}
          <div className="lg:col-span-5 glass-card p-6 sm:p-8 sticky top-28 bg-slate-950/90 border border-white/15 shadow-2xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-400 mb-4">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span>DỰ TOÁN DỰ ÁN CỦA BẠN</span>
            </div>

            <div className="pb-6 mb-6 border-b border-white/10">
              <span className="text-xs text-slate-400 block mb-1">
                Tổng chi phí đầu tư dự kiến:
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold text-gradient mb-3">
                {formatCurrency(totalPrice)}
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300 bg-slate-900/80 p-2.5 rounded-lg border border-white/10">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>
                  Thời gian triển khai: <strong className="text-white">~{totalDays} ngày làm việc</strong>
                </span>
              </div>
            </div>

            <div className="space-y-3 text-sm text-slate-300 mb-8">
              <div className="flex justify-between pb-2 border-b border-white/5">
                <span className="text-slate-400">Loại sản phẩm:</span>
                <span className="font-bold text-white">{selectedTypeObj.name}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-white/5">
                <span className="text-slate-400">Quy mô phân hệ:</span>
                <span className="font-bold text-white">{scopeSize} module</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-white/5">
                <span className="text-slate-400">Tính năng chọn thêm:</span>
                <span className="font-bold text-white">{selectedFeatures.length} tính năng</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Bàn giao mã nguồn:</span>
                <span className="font-bold text-emerald-400 flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4" /> 100% Full Source
                </span>
              </div>
            </div>

            <a
              href="#consultation"
              className="btn-gradient-primary w-full text-center text-base py-3.5 flex items-center justify-center gap-2 mb-3"
            >
              <span>Gửi Yêu Cầu Báo Giá Này</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <p className="text-xs text-slate-400 text-center leading-relaxed">
              * Dự toán minh bạch 100%. Dom Solution sẽ trao đổi chi tiết sau khi tiếp nhận brief.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
