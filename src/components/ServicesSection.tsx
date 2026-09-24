"use client";

import React, { useState } from "react";
import { servicesData, ServiceItem } from "@/data/domSolutionData";
import {
  Clock,
  ArrowRight,
  CheckCircle,
  Layers,
  ChevronRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<ServiceItem>(servicesData[0]);

  return (
    <section id="services" className="py-24 bg-[#07090E] relative border-t border-white/10">
      {/* Background Ambient Glow */}
      <div className="glow-purple top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="container max-w-7xl mx-auto relative z-10 px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 mb-4">
            <Layers className="w-4 h-4 text-blue-400" />
            <span>DỊCH VỤ THIẾT KẾ & LẬP TRÌNH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            Giải Pháp Lập Trình Full-Stack{" "}
            <span className="text-gradient">Chuyên Nghiệp</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Từ các trang Landing Page tối ưu chuyển đổi vượt trội đến các hệ thống SaaS, E-Commerce và Portal quản trị quy mô lớn.
          </p>
        </div>

        {/* 2-Column Interactive Dashboard Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Left Service Selector Menu */}
          <div className="md:col-span-5 flex md:flex-col overflow-x-auto no-scrollbar gap-3 pb-2 md:pb-0 snap-x">
            {servicesData.map((service) => {
              const isSelected = selectedService.id === service.id;
              return (
                <div
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  className={`p-4 sm:p-5 rounded-2xl cursor-pointer transition-all flex items-center justify-between shrink-0 md:shrink sm:w-auto min-w-[280px] md:min-w-0 snap-start border ${
                    isSelected
                      ? "bg-gradient-to-r from-blue-900/40 via-indigo-900/40 to-slate-900/80 border-blue-500/50 text-white shadow-xl shadow-blue-500/10"
                      : "bg-slate-900/40 hover:bg-slate-900/80 text-slate-300 border-white/10"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 border ${
                        isSelected
                          ? "bg-gradient-to-tr from-blue-600 to-indigo-600 text-white border-blue-400/50 shadow-md"
                          : "bg-slate-800/80 text-slate-400 border-white/10"
                      }`}
                    >
                      {service.number}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white leading-snug">
                        {service.title}
                      </h4>
                      <p className="text-xs text-slate-400 font-medium mt-1">
                        <span className="text-cyan-400 font-semibold">{service.startingPrice}</span> · {service.timeline}
                      </p>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 shrink-0 hidden md:block transition-transform ${
                      isSelected ? "text-cyan-400 translate-x-1" : "text-slate-600"
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Right Column: Active Service Deep Sheet */}
          <div className="md:col-span-7 glass-card p-6 sm:p-8 md:p-10 border border-white/15 flex flex-col justify-between relative overflow-hidden bg-slate-950/80">
            <div className="glow-cyan -top-20 -right-20" />

            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                <span className="text-xs font-bold text-cyan-400 tracking-widest uppercase">
                  GÓI DỊCH VỤ #{selectedService.number}
                </span>
                <span className="text-xs font-semibold text-slate-300 bg-slate-900/80 px-3 py-1 rounded-full border border-white/10 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-blue-400" />
                  {selectedService.timeline}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 leading-tight">
                {selectedService.title}
              </h3>

              <p className="text-base text-slate-300 leading-relaxed mb-6">
                {selectedService.description}
              </p>

              {/* Deliverables List */}
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                CAM KẾT & BÀN GIAO TRONG GÓI:
              </h4>
              <div className="space-y-3 mb-8">
                {selectedService.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Chips */}
              <div className="mb-8">
                <span className="text-xs font-semibold text-slate-400 block mb-2.5">
                  CÔNG NGHỆ CHÍNH SỬ DỤNG:
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedService.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-slate-900 text-blue-300 px-3 py-1 rounded-full font-medium border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Pricing Footer & CTAs */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs text-slate-400 block mb-0.5">Chi phí dự kiến từ:</span>
                <span className="text-2xl sm:text-3xl font-extrabold text-gradient-cyan">
                  {selectedService.startingPrice}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="#calculator"
                  className="btn-glass text-sm py-2.5 px-4"
                >
                  Tính Giá Ngay
                </a>
                <a
                  href="#consultation"
                  className="btn-gradient-primary text-sm py-2.5 px-5"
                >
                  <span>Nhận Báo Giá Gói Này</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
