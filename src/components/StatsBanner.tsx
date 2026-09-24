"use client";

import React from "react";
import { statsData } from "@/data/domSolutionData";

export default function StatsBanner() {
  return (
    <section className="py-4 bg-white border-y border-[#E4E6EB]">
      <div className="container max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-x divide-[#E4E6EB]">
          {statsData.map((stat, idx) => (
            <div key={idx} className={idx > 0 ? "pl-2" : ""}>
              <div className="text-xl sm:text-2xl font-black text-[#0866FF]">
                {stat.value}
              </div>
              <div className="text-[13px] font-bold text-[#050505]">
                {stat.label}
              </div>
              <div className="text-[11px] text-[#65676B]">{stat.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
