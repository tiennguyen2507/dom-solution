"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { siteConfig } from "@/lib/seoConfig";
import { useLanguage } from "@/context/LanguageContext";
import {
  Send,
  CheckCircle2,
  Phone,
  Mail,
  Lock,
  Sparkles,
  Clock,
} from "lucide-react";

export default function ConsultationForm() {
  const { lang, t } = useLanguage();

  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    email: "",
    projectType: "Web App / SaaS",
    budget: "15.000.000đ - 30.000.000đ",
    timeline: "1 tháng",
    description: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="consultation" className="py-20 sm:py-28 bg-white dark:bg-[#0B0F19] relative border-t border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Direct Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 bg-white dark:bg-[#131826] rounded-2xl p-6 sm:p-9 border border-slate-200 dark:border-slate-800 shadow-[0_4px_25px_rgba(15,23,42,0.04)] dark:shadow-[0_4px_25px_rgba(0,0,0,0.4)] space-y-6"
          >
            <div>
              <div className="flex mb-3">
                <div className="kicker-pill shadow-xs bg-slate-100/90 dark:bg-[#161C2C] text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800">
                  <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  <span>{t.consultation.kicker}</span>
                </div>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif text-slate-900 dark:text-white leading-tight mb-3">
                {t.consultation.title} <span className="italic font-normal text-blue-600 dark:text-blue-400">{t.consultation.titleHighlight}</span> {t.consultation.titleEnd}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {t.consultation.subtitle}
              </p>
            </div>

            <hr className="border-slate-100 dark:border-slate-800" />

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">{t.consultation.hotlineLabel}</div>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="font-serif font-bold text-base sm:text-lg text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {siteConfig.contact.hotlineDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">{t.consultation.emailLabel}</div>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="font-medium text-xs sm:text-sm text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors hover:underline"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">{t.consultation.ndaLabel}</div>
                  <span className="text-xs text-slate-600 dark:text-slate-400">
                    {t.consultation.ndaDesc}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">{t.consultation.hoursLabel}</div>
                  <span className="text-xs text-slate-600 dark:text-slate-400">
                    {t.consultation.hoursDesc}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Lead Intake Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 bg-white dark:bg-[#131826] rounded-2xl p-6 sm:p-9 border border-slate-200 dark:border-slate-800 shadow-[0_4px_25px_rgba(15,23,42,0.04)] dark:shadow-[0_4px_25px_rgba(0,0,0,0.4)]"
          >
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in">
                <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-950/40 rounded-full flex items-center justify-center mx-auto text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl sm:text-2xl font-serif text-slate-900 dark:text-white">
                  {t.consultation.successTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                  {t.consultation.successDescPart1} <strong>{formData.fullName}</strong>{t.consultation.successDescPart2} <strong>{formData.contactNumber}</strong> {t.consultation.successDescPart3}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: "",
                      contactNumber: "",
                      email: "",
                      projectType: "Web App / SaaS",
                      budget: "15.000.000đ - 30.000.000đ",
                      timeline: "1 tháng",
                      description: "",
                    });
                  }}
                  className="btn-secondary text-xs sm:text-sm py-2.5 px-6 mt-4 dark:bg-[#161C2C] dark:text-slate-200 dark:border-slate-800"
                >
                  {t.consultation.sendAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-900 dark:text-white block mb-1.5">
                      {t.consultation.nameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t.consultation.namePlaceholder}
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="w-full text-xs sm:text-sm bg-slate-50 dark:bg-[#0F1420] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-xl px-4 py-2.5 focus:bg-white dark:focus:bg-[#161C2C] focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600/30 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-900 dark:text-white block mb-1.5">
                      {t.consultation.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder={t.consultation.phonePlaceholder}
                      value={formData.contactNumber}
                      onChange={(e) =>
                        setFormData({ ...formData, contactNumber: e.target.value })
                      }
                      className="w-full text-xs sm:text-sm bg-slate-50 dark:bg-[#0F1420] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-xl px-4 py-2.5 focus:bg-white dark:focus:bg-[#161C2C] focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600/30 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-900 dark:text-white block mb-1.5">
                      {t.consultation.emailInputLabel}
                    </label>
                    <input
                      type="email"
                      placeholder={t.consultation.emailPlaceholder}
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full text-xs sm:text-sm bg-slate-50 dark:bg-[#0F1420] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-xl px-4 py-2.5 focus:bg-white dark:focus:bg-[#161C2C] focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600/30 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-900 dark:text-white block mb-1.5">
                      {t.consultation.serviceLabel}
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) =>
                        setFormData({ ...formData, projectType: e.target.value })
                      }
                      className="w-full text-xs sm:text-sm bg-slate-50 dark:bg-[#0F1420] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-xl px-4 py-2.5 focus:bg-white dark:focus:bg-[#161C2C] focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600/30 transition-colors cursor-pointer"
                    >
                      {lang === "en" ? (
                        <>
                          <option value="Landing Page">Landing Page</option>
                          <option value="Corporate Website">Corporate Website</option>
                          <option value="Web App / SaaS">SaaS / Web Application</option>
                          <option value="E-Commerce">E-Commerce Platform</option>
                          <option value="Enterprise Portal">Internal Portal / ERP</option>
                          <option value="Optimization & Support">Optimization & Maintenance</option>
                        </>
                      ) : (
                        <>
                          <option value="Landing Page">Landing Page Bán Hàng</option>
                          <option value="Website Doanh Nghiệp">Website Doanh Nghiệp Chuẩn SEO</option>
                          <option value="Web App / SaaS">SaaS / Web Application Tùy Biến</option>
                          <option value="Sàn E-Commerce">Sàn Thương Mại Điện Tử (E-Commerce)</option>
                          <option value="Portal Quản Trị ERP">Portal Quản Trị Nội Bộ & Dashboard</option>
                          <option value="Tối Ưu & Bảo Trì">Tối Ưu Hiệu Năng & Bảo Trì Source Code</option>
                        </>
                      )}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-900 dark:text-white block mb-1.5">
                      {t.consultation.budgetLabel}
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) =>
                        setFormData({ ...formData, budget: e.target.value })
                      }
                      className="w-full text-xs sm:text-sm bg-slate-50 dark:bg-[#0F1420] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-xl px-4 py-2.5 focus:bg-white dark:focus:bg-[#161C2C] focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600/30 transition-colors cursor-pointer"
                    >
                      {lang === "en" ? (
                        <>
                          <option value="Under $500">Under $500</option>
                          <option value="$500 - $1,200">$500 - $1,200</option>
                          <option value="$1,200 - $2,500">$1,200 - $2,500</option>
                          <option value="Above $2,500">Above $2,500</option>
                          <option value="Flexible">To be advised by technical team</option>
                        </>
                      ) : (
                        <>
                          <option value="Dưới 10.000.000đ">Dưới 10.000.000đ</option>
                          <option value="10.000.000đ - 25.000.000đ">10.000.000đ - 25.000.000đ</option>
                          <option value="25.000.000đ - 50.000.000đ">25.000.000đ - 50.000.000đ</option>
                          <option value="Trên 50.000.000đ">Trên 50.000.000đ</option>
                          <option value="Chưa xác định">Cần tư vấn xác định ngân sách</option>
                        </>
                      )}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-900 dark:text-white block mb-1.5">
                      {t.consultation.timelineLabel}
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) =>
                        setFormData({ ...formData, timeline: e.target.value })
                      }
                      className="w-full text-xs sm:text-sm bg-slate-50 dark:bg-[#0F1420] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-xl px-4 py-2.5 focus:bg-white dark:focus:bg-[#161C2C] focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600/30 transition-colors cursor-pointer"
                    >
                      {lang === "en" ? (
                        <>
                          <option value="Urgent (1-2 weeks)">ASAP (1 - 2 weeks)</option>
                          <option value="Within 1 month">Within 1 month</option>
                          <option value="2 - 3 months">2 - 3 months</option>
                          <option value="Flexible">Flexible based on milestones</option>
                        </>
                      ) : (
                        <>
                          <option value="Càng sớm càng tốt (1-2 tuần)">Càng sớm càng tốt (1 - 2 tuần)</option>
                          <option value="1 tháng">Trong vòng 1 tháng</option>
                          <option value="2 - 3 tháng">Trong vòng 2 - 3 tháng</option>
                          <option value="Linh hoạt">Linh hoạt theo đề xuất kỹ thuật</option>
                        </>
                      )}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-900 dark:text-white block mb-1.5">
                    {t.consultation.descLabel}
                  </label>
                  <textarea
                    rows={3}
                    placeholder={t.consultation.descPlaceholder}
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    className="w-full text-xs sm:text-sm bg-slate-50 dark:bg-[#0F1420] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-xl px-4 py-2.5 focus:bg-white dark:focus:bg-[#161C2C] focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600/30 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full text-sm py-3 justify-center shadow-xs"
                >
                  {loading ? (
                    <span>{t.consultation.submitting}</span>
                  ) : (
                    <>
                      <span>{t.consultation.submitBtn}</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
