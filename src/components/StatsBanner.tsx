"use client";

import React from "react";
import { statsData } from "@/data/domSolutionData";
import { Award, CheckCircle2, Star, Zap } from "lucide-react";

export default function StatsBanner() {
  const icons = [Award, CheckCircle2, Star, Zap];

  return (
    <section className="py-12 bg-[#090D16] border-y border-white/10 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {statsData.map((stat, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="glass-card p-6 text-center border border-white/10 relative group overflow-hidden"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-white mb-0.5">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400 font-medium">
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
