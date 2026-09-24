import React from "react";
import Link from "next/link";
import { DomLogo } from "@/components/commons";
import { Home, MessageSquare } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4">
      <div className="max-w-md w-full text-center bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
        <div className="inline-block mb-6">
          <DomLogo size="md" />
        </div>
        <div className="text-6xl font-black font-mono text-[#0D5BE1] mb-2">404</div>
        <h1 className="text-xl font-bold text-slate-900 mb-2">Trang Không Tồn Tại</h1>
        <p className="text-xs text-slate-600 mb-6 leading-relaxed">
          Đường dẫn bạn đang tìm kiếm có thể đã thay đổi hoặc không tồn tại. Vui lòng quay lại trang chủ.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <Link href="/" className="btn-primary w-full text-xs py-3 flex items-center justify-center gap-2">
            <Home className="w-3.5 h-3.5" />
            <span>Về Trang Chủ</span>
          </Link>
          <Link href="/#consultation" className="btn-secondary w-full text-xs py-3 flex items-center justify-center gap-2">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Liên Hệ Hỗ Trợ</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
