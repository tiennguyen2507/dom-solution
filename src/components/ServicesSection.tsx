"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
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
    <section id="services" className="py-20 sm:py-28 bg-white relative border-t border-slate-200">
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
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Dịch Vụ Chuyên Sâu</span>
            </div>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif text-slate-900 tracking-tight mb-4">
            Giải pháp lập trình <span className="italic font-normal text-blue-600">toàn diện</span> & tối ưu
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Từ website doanh nghiệp định vị thương hiệu đến các nền tảng SaaS, sàn thương mại điện tử và portal nội bộ xử lý dữ liệu phức tạp.
          </p>
        </motion.div>

        {/* 2-Column Editorial Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Service Selector */}
          <div className="lg:col-span-5 flex lg:flex-col overflow-x-auto no-scrollbar gap-2.5 sm:gap-3 pb-2 lg:pb-0 snap-x">
            {servicesData.map((service, idx) => {
              const isSelected = selectedService.id === service.id;
              return (
                <motion.button
                  key={service.id}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  onClick={() => setSelectedService(service)}
                  type="button"
                  className={`p-4 sm:p-5 rounded-xl text-left cursor-pointer transition-all flex items-center justify-between shrink-0 lg:shrink min-w-[260px] lg:min-w-0 snap-start border ${
                    isSelected
                      ? "bg-white border-blue-600 shadow-[0_4px_20px_rgba(8,102,255,0.08)] ring-1 ring-blue-600/30"
                      : "bg-slate-50 hover:bg-white text-slate-600 border-slate-200"
                  }`}
                >
                  <div className="flex items-center gap-3.5 sm:gap-4">
                    <span
                      className={`w-9 h-9 rounded-lg flex items-center justify-center font-serif font-bold text-sm shrink-0 border ${
                        isSelected
                          ? "bg-blue-600 text-white border-blue-600"
                          : "bg-white text-slate-600 border-slate-200"
                      }`}
                    >
                      {service.number}
                    </span>
                    <div>
                      <h3 className="text-sm sm:text-base font-semibold text-slate-900 leading-snug">
                        {service.title}
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        <span className="font-semibold text-slate-800">{service.startingPrice}</span> · {service.timeline}
                      </p>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 shrink-0 hidden lg:block transition-transform ${
                      isSelected ? "text-blue-600 translate-x-1" : "text-slate-400"
                    }`}
                  />
                </motion.button>
              );
            })}
          </div>

          {/* Right Column: Active Service Deep Card with Smooth Tab Animation */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-9 lg:p-10 border border-slate-200 shadow-[0_4px_25px_rgba(15,23,42,0.04)] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedService.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="flex flex-col justify-between"
              >
                <div>
                  {/* Header inside card */}
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
                    <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                      Gói dịch vụ {selectedService.number}
                    </span>
                    <span className="text-xs text-slate-600 bg-slate-50 px-3 py-1 rounded-full border border-slate-200 flex items-center gap-1.5 font-medium">
                      <Clock className="w-3.5 h-3.5 text-slate-500" />
                      Thời gian: {selectedService.timeline}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif text-slate-900 mb-3">
                    {selectedService.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-normal">
                    {selectedService.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="mb-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                      Tiêu Chuẩn Bàn Giao:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {selectedService.deliverables.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-8">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2.5">
                      Công Nghệ Áp Dụng:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-50 text-slate-700 border border-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs text-slate-500 block">Chi phí đầu tư dự kiến:</span>
                    <span className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
                      {selectedService.startingPrice}
                    </span>
                  </div>
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="#consultation"
                    className="btn-primary text-sm py-2.5 px-6 w-full sm:w-auto text-center"
                  >
                    <span>Nhận Báo Giá Chi Tiết</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

