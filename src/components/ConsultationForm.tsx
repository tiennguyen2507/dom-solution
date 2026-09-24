"use client";

import React, { useState } from "react";
import { siteConfig } from "@/lib/seoConfig";
import {
  Send,
  CheckCircle2,
  Phone,
  Mail,
  Shield,
  MessageSquare,
  Lock,
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
    <section id="consultation" className="section-py bg-[#F0F2F5] border-t border-[#E4E6EB]">
      <div className="container max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Direct Contact Info (FB About Style) */}
          <div className="lg:col-span-5 fb-card p-6 space-y-4">
            <div>
              <div className="flex items-center gap-1.5 text-[12px] font-bold text-[#0866FF] uppercase tracking-wider mb-1">
                <span>Liên Hệ Trực Tiếp</span>
              </div>
              <h2 className="text-[22px] font-bold text-[#050505] leading-tight">
                Nhận Tư Vấn Kỹ Thuật & Báo Giá Miễn Phí
              </h2>
              <p className="text-[14px] text-[#65676B] mt-2 leading-relaxed">
                Gửi bài toán hoặc ý tưởng sản phẩm của bạn. Dom Solution sẽ phản hồi kèm phân tích giải pháp sơ bộ và báo giá trong vòng <strong>2 giờ làm việc</strong>.
              </p>
            </div>

            <hr className="border-[#E4E6EB]" />

            <div className="space-y-3.5 text-[14px]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#E7F3FF] text-[#0866FF] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[12px] text-[#65676B]">Hotline & Zalo:</div>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="font-bold text-[#0866FF] hover:underline"
                  >
                    {siteConfig.contact.hotlineDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#E7F3FF] text-[#0866FF] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[12px] text-[#65676B]">Email kỹ thuật:</div>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="font-bold text-[#050505] hover:underline"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#E7F3FF] text-[#0866FF] flex items-center justify-center shrink-0">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[12px] text-[#65676B]">Cam kết bảo mật:</div>
                  <span className="text-[13px] text-[#050505] font-medium">
                    Ký thỏa thuận NDA bảo mật ý tưởng nếu khách hàng yêu cầu
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Message Form */}
          <div className="lg:col-span-7 fb-card p-6">
            {submitted ? (
              <div className="py-10 text-center">
                <div className="w-14 h-14 rounded-full bg-[#E7F3FF] text-[#0866FF] flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-[20px] font-bold text-[#050505] mb-1">
                  Đã Gửi Tin Nhắn Thành Công!
                </h3>
                <p className="text-[14px] text-[#65676B] max-w-md mx-auto mb-5">
                  Cảm ơn <strong>{formData.fullName}</strong>. Dom Solution đã tiếp nhận thông tin và sẽ liên hệ trực tiếp qua số điện thoại/Zalo <strong>{formData.contactNumber}</strong>.
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
                  className="btn-secondary text-[14px] py-2 px-5"
                >
                  Gửi thêm nội dung khác
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="flex items-center gap-2 pb-2 border-b border-[#E4E6EB]">
                  <MessageSquare className="w-5 h-5 text-[#0866FF]" />
                  <span className="text-[16px] font-bold text-[#050505]">
                    Gửi Yêu Cầu Dự Án Cho Dom Solution
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[12px] font-bold text-[#65676B] block mb-1">
                      Họ và tên của bạn *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ví dụ: Nguyễn Văn A"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="w-full text-[14px] bg-[#F0F2F5] border border-[#CED0D4] text-[#050505] rounded-lg px-3 py-2 focus:bg-white focus:outline-none focus:border-[#0866FF]"
                    />
                  </div>

                  <div>
                    <label className="text-[12px] font-bold text-[#65676B] block mb-1">
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
                      className="w-full text-[14px] bg-[#F0F2F5] border border-[#CED0D4] text-[#050505] rounded-lg px-3 py-2 focus:bg-white focus:outline-none focus:border-[#0866FF]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[12px] font-bold text-[#65676B] block mb-1">
                      Email liên hệ
                    </label>
                    <input
                      type="email"
                      placeholder="email@domain.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full text-[14px] bg-[#F0F2F5] border border-[#CED0D4] text-[#050505] rounded-lg px-3 py-2 focus:bg-white focus:outline-none focus:border-[#0866FF]"
                    />
                  </div>

                  <div>
                    <label className="text-[12px] font-bold text-[#65676B] block mb-1">
                      Loại hình sản phẩm
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) =>
                        setFormData({ ...formData, projectType: e.target.value })
                      }
                      className="w-full text-[14px] bg-[#F0F2F5] border border-[#CED0D4] text-[#050505] rounded-lg px-3 py-2 focus:bg-white focus:outline-none focus:border-[#0866FF]"
                    >
                      <option value="Web App / SaaS">Web App & SaaS Platform</option>
                      <option value="Landing Page Doanh Nghiệp">Landing Page Doanh Nghiệp</option>
                      <option value="E-Commerce & Thanh Toán">Sàn E-Commerce & Bán Hàng</option>
                      <option value="Portal Quản Trị Nội Bộ">Portal Quản Trị Nội Bộ ERP/CRM</option>
                      <option value="Khác">Nâng cấp Website có sẵn</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[12px] font-bold text-[#65676B] block mb-1">
                    Mô tả sơ bộ về dự án / tính năng bạn cần
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Mô tả ý tưởng, tính năng mong muốn hoặc đường link website bạn thích..."
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    className="w-full text-[14px] bg-[#F0F2F5] border border-[#CED0D4] text-[#050505] rounded-lg px-3 py-2 focus:bg-white focus:outline-none focus:border-[#0866FF] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full text-center text-[15px] py-2.5 flex items-center justify-center gap-2 mt-2"
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
