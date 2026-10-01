"use client";

import React from "react";
import { motion } from "motion/react";
import { Award, CheckCircle2, Star, Zap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function StatsBanner() {
  const { t } = useLanguage();
  const icons = [Award, CheckCircle2, Star, Zap];

  return (
    <section className="py-12 sm:py-16 bg-slate-50/70 dark:bg-[#0B0F19] border-y border-slate-200 dark:border-slate-800 relative transition-colors duration-200">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {t.stats.items.map((stat, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white dark:bg-[#131826] rounded-2xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 text-center shadow-xs hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 dark:text-white mb-1.5 tabular-nums">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 mb-0.5">
                  {stat.label}
                </div>
                <div className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400">
                  {stat.sublabel}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
