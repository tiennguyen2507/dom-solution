"use client";

import React from "react";
import { statsData } from "@/data/domSolutionData";
import { Award, CheckCircle2, Star, Zap } from "lucide-react";

export default function StatsBanner() {
  const icons = [Award, CheckCircle2, Star, Zap];

  return (
    <section className="py-12 sm:py-16 bg-[#F7F5F0] border-y border-[#EBE8E1] relative">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {statsData.map((stat, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-[#EBE8E1] text-center shadow-xs hover:border-[#D5D0C5] transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#EBE8E1] text-[#18181B] flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-4 h-4 text-[#8C7A58]" />
                </div>
                <div className="text-3xl sm:text-4xl font-serif font-bold text-[#18181B] mb-1.5 tabular-nums">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-[#27272A] mb-0.5">
                  {stat.label}
                </div>
                <div className="text-[11px] sm:text-xs text-[#71717A]">
                  {stat.sublabel}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
