"use client";

import React, { useState } from "react";
import { servicesData, ServiceItem } from "@/data/domSolutionData";
import {
  Clock,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<ServiceItem>(servicesData[0]);

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#FAF8F5] relative border-t border-[#EBE8E1]">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="flex justify-center mb-3">
            <div className="kicker-pill shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#8C7A58]" />
              <span>Dịch Vụ Chuyên Sâu</span>
            </div>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif text-[#18181B] tracking-tight mb-4">
            Giải pháp lập trình <span className="italic font-normal">toàn diện</span> & tối ưu
          </h2>
          <p className="text-sm sm:text-base text-[#52525B] leading-relaxed">
            Từ website doanh nghiệp định vị thương hiệu đến các nền tảng SaaS, sàn thương mại điện tử và portal nội bộ xử lý dữ liệu phức tạp.
          </p>
        </div>

        {/* 2-Column Editorial Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Service Selector */}
          <div className="lg:col-span-5 flex lg:flex-col overflow-x-auto no-scrollbar gap-2.5 sm:gap-3 pb-2 lg:pb-0 snap-x">
            {servicesData.map((service) => {
              const isSelected = selectedService.id === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  type="button"
                  className={`p-4 sm:p-5 rounded-xl text-left cursor-pointer transition-all flex items-center justify-between shrink-0 lg:shrink min-w-[260px] lg:min-w-0 snap-start border ${
                    isSelected
                      ? "bg-white border-[#18181B] shadow-[0_4px_20px_rgba(26,26,24,0.06)]"
                      : "bg-[#F4F1EA] hover:bg-white text-[#52525B] border-[#E8E4DA]"
                  }`}
                >
                  <div className="flex items-center gap-3.5 sm:gap-4">
                    <span
                      className={`w-9 h-9 rounded-lg flex items-center justify-center font-serif font-bold text-sm shrink-0 border ${
                        isSelected
                          ? "bg-[#18181B] text-white border-[#18181B]"
                          : "bg-white text-[#71717A] border-[#E5E1D8]"
                      }`}
                    >
                      {service.number}
                    </span>
                    <div>
                      <h3 className="text-sm sm:text-base font-semibold text-[#18181B] leading-snug">
                        {service.title}
                      </h3>
                      <p className="text-xs text-[#71717A] mt-0.5">
                        <span className="font-semibold text-[#18181B]">{service.startingPrice}</span> · {service.timeline}
                      </p>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 shrink-0 hidden lg:block transition-transform ${
                      isSelected ? "text-[#18181B] translate-x-1" : "text-[#A1A1AA]"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Service Deep Card */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-9 lg:p-10 border border-[#E5E1D8] shadow-[0_4px_25px_rgba(26,26,24,0.04)] flex flex-col justify-between">
            <div>
              {/* Header inside card */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#EBE8E1]">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#8C7A58]">
                  Gói dịch vụ {selectedService.number}
                </span>
                <span className="text-xs text-[#52525B] bg-[#FAF8F5] px-3 py-1 rounded-full border border-[#EBE8E1] flex items-center gap-1.5 font-medium">
                  <Clock className="w-3.5 h-3.5 text-[#71717A]" />
                  Thời gian: {selectedService.timeline}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif text-[#18181B] mb-3">
                {selectedService.title}
              </h3>
              <p className="text-sm sm:text-base text-[#52525B] leading-relaxed mb-6 font-normal">
                {selectedService.description}
              </p>

              {/* Deliverables List */}
              <div className="mb-6">
                <div className="text-xs font-bold uppercase tracking-wider text-[#18181B] mb-3">
                  Tiêu Chuẩn Bàn Giao:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedService.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-[#3F3F46]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-8">
                <div className="text-xs font-bold uppercase tracking-wider text-[#18181B] mb-2.5">
                  Công Nghệ Áp Dụng:
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedService.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-[#FAF8F5] text-[#3F3F46] border border-[#E5E1D8]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Action Footer */}
            <div className="pt-6 border-t border-[#EBE8E1] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs text-[#71717A] block">Chi phí đầu tư dự kiến:</span>
                <span className="text-xl sm:text-2xl font-serif font-bold text-[#18181B]">
                  {selectedService.startingPrice}
                </span>
              </div>
              <a
                href="#consultation"
                className="btn-primary text-sm py-2.5 px-6 w-full sm:w-auto text-center"
              >
                <span>Nhận Báo Giá Chi Tiết</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
