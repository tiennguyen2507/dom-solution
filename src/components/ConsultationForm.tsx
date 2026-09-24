"use client";

import React, { useState } from "react";
import { siteConfig } from "@/lib/seoConfig";
import {
  Send,
  CheckCircle2,
  Phone,
  Mail,
  Lock,
  MessageSquare,
  Sparkles,
} from "lucide-react";

export default function ConsultationForm() {
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
    <section id="consultation" className="py-24 bg-[#07090E] relative border-t border-white/10">
      {/* Ambient Glow */}
      <div className="glow-blue bottom-10 right-10" />

      <div className="container max-w-7xl mx-auto relative z-10 px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Direct Contact Info */}
          <div className="lg:col-span-5 glass-card p-8 space-y-6 border border-white/15 bg-slate-950/80">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 mb-3">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span>NHẬN TƯ VẤN KỸ THUẬT</span>
              </div>
              <h2 className="text-3xl font-extrabold text-white leading-tight mb-3">
                Tư Vấn Kiến Trúc & <span className="text-gradient">Báo Giá Miễn Phí</span>
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Gửi bài toán hoặc ý tưởng sản phẩm của bạn. Dom Solution sẽ phản hồi kèm phân tích giải pháp sơ bộ và báo giá trong vòng <strong className="text-white">2 giờ làm việc</strong>.
              </p>
            </div>

            <hr className="border-white/10" />

            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 shadow-md">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Hotline & Zalo Kỹ Thuật:</div>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="font-bold text-lg text-cyan-400 hover:underline"
                  >
                    {siteConfig.contact.hotlineDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 shadow-md">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Email dự án:</div>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="font-bold text-base text-white hover:underline"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 shadow-md">
                  <Lock className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Cam kết bảo mật 100%:</div>
                  <span className="text-xs text-slate-300 font-medium">
                    Ký thỏa thuận NDA bảo mật ý tưởng nếu đối tác yêu cầu
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Consultation Form */}
          <div className="lg:col-span-7 glass-card p-8 sm:p-10 border border-white/15 bg-slate-950/80">
            {submitted ? (
              <div className="py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mx-auto mb-4 border border-blue-500/40">
                  <CheckCircle2 className="w-10 h-10 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-extrabold text-white mb-2">
                  Đã Gửi Yêu Cầu Thành Công!
                </h3>
                <p className="text-base text-slate-300 max-w-md mx-auto mb-6">
                  Cảm ơn <strong className="text-white">{formData.fullName}</strong>. Dom Solution đã tiếp nhận thông tin và sẽ liên hệ trực tiếp qua SĐT/Zalo <strong className="text-cyan-400">{formData.contactNumber}</strong>.
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
                  className="btn-glass text-sm py-2.5 px-6"
                >
                  Gửi Yêu Cầu Khác
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center gap-2 pb-3 border-b border-white/10 mb-4">
                  <MessageSquare className="w-5 h-5 text-cyan-400" />
                  <span className="text-lg font-bold text-white">
                    Gửi Yêu Cầu Dự Án Cho Dom Solution
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1.5 uppercase">
                      Họ và tên của bạn *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Nguyễn Văn A"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="w-full text-sm bg-slate-900 border border-white/15 text-white rounded-xl px-4 py-3 focus:bg-slate-950 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1.5 uppercase">
                      Số điện thoại / Zalo *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0988 123 456"
                      value={formData.contactNumber}
                      onChange={(e) =>
                        setFormData({ ...formData, contactNumber: e.target.value })
                      }
                      className="w-full text-sm bg-slate-900 border border-white/15 text-white rounded-xl px-4 py-3 focus:bg-slate-950 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1.5 uppercase">
                      Email liên hệ
                    </label>
                    <input
                      type="email"
                      placeholder="email@domain.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full text-sm bg-slate-900 border border-white/15 text-white rounded-xl px-4 py-3 focus:bg-slate-950 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1.5 uppercase">
                      Loại hình sản phẩm
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) =>
                        setFormData({ ...formData, projectType: e.target.value })
                      }
                      className="w-full text-sm bg-slate-900 border border-white/15 text-white rounded-xl px-4 py-3 focus:bg-slate-950 focus:outline-none focus:border-cyan-400 transition-colors"
                    >
                      <option value="Web App / SaaS">Web App & SaaS Platform</option>
                      <option value="Landing Page Doanh Nghiệp">Landing Page Doanh Nghiệp</option>
                      <option value="E-Commerce & Thanh Toán">Sàn E-Commerce & Bán Hàng</option>
                      <option value="Portal Quản Trị Nội Bộ">Portal Quản Trị ERP/CRM</option>
                      <option value="Khác">Nâng cấp Website có sẵn</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1.5 uppercase">
                    Mô tả sơ bộ về dự án / tính năng mong muốn
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Mô tả ý tưởng, tính năng bạn cần hoặc đường link tham khảo..."
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    className="w-full text-sm bg-slate-900 border border-white/15 text-white rounded-xl px-4 py-3 focus:bg-slate-950 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-gradient-primary w-full text-center text-base py-3.5 flex items-center justify-center gap-2 mt-2"
                >
                  {loading ? (
                    <span>Đang gửi thông tin...</span>
                  ) : (
                    <>
                      <span>Gửi Tin Nhắn Nhận Báo Giá</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
