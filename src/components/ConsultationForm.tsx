"use client";

import React, { useState } from "react";
import { siteConfig } from "@/lib/seoConfig";
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
    <section id="consultation" className="py-20 sm:py-28 bg-[#FAF8F5] relative border-t border-[#EBE8E1]">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Direct Contact Info */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-9 border border-[#E5E1D8] shadow-[0_4px_25px_rgba(26,26,24,0.04)] space-y-6">
            <div>
              <div className="flex mb-3">
                <div className="kicker-pill shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#8C7A58]" />
                  <span>Kết Nối Trực Tiếp</span>
                </div>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#18181B] leading-tight mb-3">
                Khởi tạo <span className="italic font-normal">dự án của bạn</span> cùng Dom Solution
              </h2>
              <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed">
                Chia sẻ ý tưởng hoặc bài toán nghiệp vụ của bạn. Dom Solution sẽ phản hồi kèm phân tích kiến trúc sơ bộ và báo giá trong vòng <strong>2 giờ làm việc</strong>.
              </p>
            </div>

            <hr className="border-[#EBE8E1]" />

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#FAF8F5] border border-[#E8E5DC] text-[#18181B] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#8C7A58]" />
                </div>
                <div>
                  <div className="text-xs text-[#71717A] font-medium">Hotline & Zalo Kỹ Thuật:</div>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="font-serif font-bold text-base sm:text-lg text-[#18181B] hover:text-[#8C7A58] transition-colors"
                  >
                    {siteConfig.contact.hotlineDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#FAF8F5] border border-[#E8E5DC] text-[#18181B] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#8C7A58]" />
                </div>
                <div>
                  <div className="text-xs text-[#71717A] font-medium">Hòm thư tiếp nhận brief:</div>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="font-medium text-xs sm:text-sm text-[#18181B] hover:underline"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#FAF8F5] border border-[#E8E5DC] text-[#18181B] flex items-center justify-center shrink-0">
                  <Lock className="w-5 h-5 text-[#8C7A58]" />
                </div>
                <div>
                  <div className="text-xs text-[#71717A] font-medium">Cam kết bảo mật (NDA):</div>
                  <span className="text-xs text-[#3F3F46]">
                    Ký thỏa thuận bảo mật ý tưởng & dữ liệu theo yêu cầu
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#FAF8F5] border border-[#E8E5DC] text-[#18181B] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[#8C7A58]" />
                </div>
                <div>
                  <div className="text-xs text-[#71717A] font-medium">Thời gian hỗ trợ:</div>
                  <span className="text-xs text-[#3F3F46]">
                    Thứ 2 - Thứ 7 (8:30 - 21:00), phản hồi khẩn cấp 24/7
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Lead Intake Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-9 border border-[#E5E1D8] shadow-[0_4px_25px_rgba(26,26,24,0.04)]">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in">
                <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-emerald-600 border border-emerald-200">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl sm:text-2xl font-serif text-[#18181B]">
                  Đã Gửi Yêu Cầu Thành Công!
                </h3>
                <p className="text-xs sm:text-sm text-[#52525B] max-w-md mx-auto leading-relaxed">
                  Cảm ơn <strong>{formData.fullName}</strong>. Dom Solution đã tiếp nhận thông tin và sẽ liên hệ trực tiếp qua số điện thoại/Zalo <strong>{formData.contactNumber}</strong> trong ít phút.
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
                  className="btn-secondary text-xs sm:text-sm py-2.5 px-6 mt-4"
                >
                  Gửi thêm nội dung khác
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-[#18181B] block mb-1.5">
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
                      className="w-full text-xs sm:text-sm bg-[#FAF8F5] border border-[#E8E5DC] text-[#18181B] rounded-xl px-4 py-2.5 focus:bg-white focus:outline-hidden focus:border-[#18181B] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#18181B] block mb-1.5">
                      Số điện thoại / Zalo *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="09xx xxx xxx"
                      value={formData.contactNumber}
                      onChange={(e) =>
                        setFormData({ ...formData, contactNumber: e.target.value })
                      }
                      className="w-full text-xs sm:text-sm bg-[#FAF8F5] border border-[#E8E5DC] text-[#18181B] rounded-xl px-4 py-2.5 focus:bg-white focus:outline-hidden focus:border-[#18181B] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-[#18181B] block mb-1.5">
                      Email liên hệ (nếu có)
                    </label>
                    <input
                      type="email"
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full text-xs sm:text-sm bg-[#FAF8F5] border border-[#E8E5DC] text-[#18181B] rounded-xl px-4 py-2.5 focus:bg-white focus:outline-hidden focus:border-[#18181B] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#18181B] block mb-1.5">
                      Loại hình sản phẩm cần làm
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) =>
                        setFormData({ ...formData, projectType: e.target.value })
                      }
                      className="w-full text-xs sm:text-sm bg-[#FAF8F5] border border-[#E8E5DC] text-[#18181B] rounded-xl px-4 py-2.5 focus:bg-white focus:outline-hidden focus:border-[#18181B] transition-colors cursor-pointer"
                    >
                      <option value="Landing Page">Landing Page Bán Hàng</option>
                      <option value="Website Doanh Nghiệp">Website Doanh Nghiệp Chuẩn SEO</option>
                      <option value="Web App / SaaS">SaaS / Web Application Tùy Biến</option>
                      <option value="Sàn E-Commerce">Sàn Thương Mại Điện Tử (E-Commerce)</option>
                      <option value="Portal Quản Trị ERP">Portal Quản Trị Nội Bộ & Dashboard</option>
                      <option value="Tối Ưu & Bảo Trì">Tối Ưu Hiệu Năng & Bảo Trì Source Code</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-[#18181B] block mb-1.5">
                      Ngân sách dự kiến
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) =>
                        setFormData({ ...formData, budget: e.target.value })
                      }
                      className="w-full text-xs sm:text-sm bg-[#FAF8F5] border border-[#E8E5DC] text-[#18181B] rounded-xl px-4 py-2.5 focus:bg-white focus:outline-hidden focus:border-[#18181B] transition-colors cursor-pointer"
                    >
                      <option value="Dưới 10.000.000đ">Dưới 10.000.000đ</option>
                      <option value="10.000.000đ - 25.000.000đ">10.000.000đ - 25.000.000đ</option>
                      <option value="25.000.000đ - 50.000.000đ">25.000.000đ - 50.000.000đ</option>
                      <option value="Trên 50.000.000đ">Trên 50.000.000đ</option>
                      <option value="Chưa xác định">Cần tư vấn xác định ngân sách</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#18181B] block mb-1.5">
                      Thời hạn cần bàn giao
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) =>
                        setFormData({ ...formData, timeline: e.target.value })
                      }
                      className="w-full text-xs sm:text-sm bg-[#FAF8F5] border border-[#E8E5DC] text-[#18181B] rounded-xl px-4 py-2.5 focus:bg-white focus:outline-hidden focus:border-[#18181B] transition-colors cursor-pointer"
                    >
                      <option value="Càng sớm càng tốt (1-2 tuần)">Càng sớm càng tốt (1 - 2 tuần)</option>
                      <option value="1 tháng">Trong vòng 1 tháng</option>
                      <option value="2 - 3 tháng">Trong vòng 2 - 3 tháng</option>
                      <option value="Linh hoạt">Linh hoạt theo đề xuất kỹ thuật</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#18181B] block mb-1.5">
                    Mô tả sơ lược yêu cầu hoặc tính năng chính
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Ví dụ: Cần website bán hàng cho chuỗi thời trang, tích hợp thanh toán VNPay và đồng bộ tồn kho..."
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    className="w-full text-xs sm:text-sm bg-[#FAF8F5] border border-[#E8E5DC] text-[#18181B] rounded-xl px-4 py-2.5 focus:bg-white focus:outline-hidden focus:border-[#18181B] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full text-sm py-3 justify-center shadow-xs"
                >
                  {loading ? (
                    <span>Đang gửi thông tin...</span>
                  ) : (
                    <>
                      <span>Gửi Yêu Cầu Nhận Báo Giá Miễn Phí</span>
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
