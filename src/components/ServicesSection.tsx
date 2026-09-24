"use client";

import React, { useState } from "react";
import { servicesData, ServiceItem } from "@/data/domSolutionData";
import {
  Clock,
  ArrowRight,
  Check,
  CheckCircle,
  Layers,
  ChevronRight,
  Shield,
  Zap,
} from "lucide-react";

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<ServiceItem>(servicesData[0]);

  return (
    <section id="services" className="section-py bg-white border-t border-[#E4E6EB]">
      <div className="container max-w-5xl">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-kicker">
            <Layers className="w-3.5 h-3.5 text-[#0866FF]" />
            <span>Dịch Vụ Kỹ Thuật</span>
          </div>
          <h2 className="section-title">Giải Pháp Lập Trình Cho Mọi Nhu Cầu</h2>
          <p className="section-subtitle">
            Cung cấp dịch vụ lập trình Full-stack chất lượng cao, từ các trang Landing Page tối ưu chuyển đổi đến hệ thống SaaS phức tạp.
          </p>
        </div>

        {/* Facebook-style 2-Column Dashboard layout for Services */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mb-8">
          {/* Left Column: Service Selection Menu (FB Left Sidebar Style) */}
          <div className="md:col-span-5 space-y-2">
            {servicesData.map((service) => {
              const isSelected = selectedService.id === service.id;
              return (
                <div
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  className={`p-3.5 rounded-xl cursor-pointer transition-all flex items-center justify-between ${
                    isSelected
                      ? "bg-[#E7F3FF] text-[#0866FF] font-semibold shadow-sm border border-[#BBDDFD]"
                      : "bg-white hover:bg-[#F0F2F5] text-[#050505] border border-[#E4E6EB]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-[13px] shrink-0 ${
                        isSelected
                          ? "bg-[#0866FF] text-white"
                          : "bg-[#F0F2F5] text-[#65676B]"
                      }`}
                    >
                      {service.number}
                    </div>
                    <div>
                      <h4 className="text-[14px] leading-snug">{service.title}</h4>
                      <p className="text-[12px] text-[#65676B] font-normal">
                        {service.startingPrice} · {service.timeline}
                      </p>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 shrink-0 ${
                      isSelected ? "text-[#0866FF]" : "text-[#CED0D4]"
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Right Column: Active Service Detailed Sheet (FB Main Content Card) */}
          <div className="md:col-span-7 bg-white rounded-xl border border-[#CED0D4] p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E4E6EB]">
                <span className="text-[12px] font-bold text-[#0866FF] uppercase tracking-wider">
                  GÓI DỊCH VỤ #{selectedService.number}
                </span>
                <span className="text-[13px] font-semibold text-[#65676B] bg-[#F0F2F5] px-2.5 py-1 rounded-full flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#0866FF]" />
                  {selectedService.timeline}
                </span>
              </div>

              <h3 className="text-[22px] font-bold text-[#050505] mb-2 leading-tight">
                {selectedService.title}
              </h3>

              <p className="text-[15px] text-[#050505] leading-relaxed mb-5">
                {selectedService.description}
              </p>

              {/* Deliverables List */}
              <h4 className="text-[13px] font-bold uppercase tracking-wider text-[#65676B] mb-3">
                Bàn Giao & Cam Kết Trong Gói:
              </h4>
              <div className="space-y-2 mb-6">
                {selectedService.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-[14px] text-[#050505]">
                    <CheckCircle className="w-4 h-4 text-[#31A24C] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Chips */}
              <div className="mb-6">
                <span className="text-[12px] font-semibold text-[#65676B] block mb-2">
                  Công nghệ sử dụng:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedService.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[12px] bg-[#F0F2F5] text-[#050505] px-2.5 py-1 rounded font-medium border border-[#E4E6EB]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Pricing and CTAs */}
            <div className="pt-4 border-t border-[#E4E6EB] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[12px] text-[#65676B] block">Chi phí tham khảo:</span>
                <span className="text-[22px] font-black text-[#0866FF]">
                  {selectedService.startingPrice}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="#calculator"
                  className="btn-secondary text-[14px] py-2 px-3"
                >
                  Tính Giá
                </a>
                <a
                  href="#consultation"
                  className="btn-primary text-[14px] py-2 px-4"
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
