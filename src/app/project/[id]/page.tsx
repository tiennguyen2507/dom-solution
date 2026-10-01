import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getAllProjects,
  getProjectById,
  getRelatedProjects,
} from "@/data/projectsData";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Code2,
  ExternalLink,
  Home,
  Layers,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Users,
  Wallet,
  Zap,
} from "lucide-react";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((p) => ({
    id: p.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return {
      title: "Không tìm thấy dự án | Tikat Studio",
    };
  }

  return {
    title: `${project.name} | Tikat Studio Dự Án 2026`,
    description: project.summaryVi,
    openGraph: {
      title: `${project.name} | Tikat Studio`,
      description: project.summaryVi,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.name,
        },
      ],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  const related = getRelatedProjects(project.id, 3);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0B0F19] text-slate-900 dark:text-slate-100 transition-colors duration-300 pt-24 sm:pt-28 pb-16">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. Breadcrumbs & Back Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 sm:mb-8">
          <nav className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <Link
              href="/"
              className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Trang chủ</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link
              href="/project"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Dự án 2026
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-800 dark:text-slate-200 font-semibold truncate max-w-[200px] sm:max-w-xs">
              {project.name}
            </span>
          </nav>

          <Link
            href="/project"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Tất cả dự án</span>
          </Link>
        </div>

        {/* 2. Project Header Overview */}
        <div className="mb-8 sm:mb-10">
          <div className="flex flex-wrap items-center gap-2.5 mb-3.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ed2328] text-white text-xs font-bold uppercase tracking-wider shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span>{project.category}</span>
            </span>

            <span className="px-3 py-1 rounded-full bg-slate-200 dark:bg-[#161C2C] text-slate-700 dark:text-slate-300 text-xs font-semibold font-mono">
              Năm {project.year}
            </span>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 text-xs font-medium">
              <Zap className="w-3 h-3 text-emerald-500" />
              <span>{project.metric}</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-4">
            {project.name}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl font-normal">
            {project.summaryVi}
          </p>
        </div>

        {/* 3. Main Hero Banner Image */}
        <div className="relative aspect-16/9 sm:aspect-21/9 w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 dark:border-slate-800 mb-8 sm:mb-12 bg-slate-900">
          <Image
            src={project.image}
            alt={project.name}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-white text-xs font-mono">
            {project.client}
          </div>
        </div>

        {/* 4. Quick Specs Meta Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-5 mb-10 sm:mb-14">
          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#131826] border border-slate-200/80 dark:border-slate-800 shadow-2xs">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs font-semibold mb-1.5">
              <Users className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Khách hàng</span>
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate">
              {project.client}
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#131826] border border-slate-200/80 dark:border-slate-800 shadow-2xs">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs font-semibold mb-1.5">
              <Calendar className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Tiến độ triển khai</span>
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
              {project.timeline}
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#131826] border border-slate-200/80 dark:border-slate-800 shadow-2xs">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs font-semibold mb-1.5">
              <Wallet className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span>Ngân sách tham khảo</span>
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
              {project.budget}
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#131826] border border-slate-200/80 dark:border-slate-800 shadow-2xs">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs font-semibold mb-1.5">
              <ShieldCheck className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>Cam kết bàn giao</span>
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
              100% Full Source Git
            </div>
          </div>
        </div>

        {/* 5. Detailed Breakdown: Left Content + Right Sticky Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start">
          
          {/* Left Column (8 cols): Challenge, Solution, Deliverables, Gallery */}
          <div className="lg:col-span-8 flex flex-col gap-8 sm:gap-10">
            
            {/* The Challenge */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#131826] border border-slate-200/80 dark:border-slate-800 shadow-xs">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ed2328]" />
                <span>Bài toán & Thách thức của khách hàng</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                {project.challengeVi}
              </p>
            </div>

            {/* The Solution */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#131826] border border-slate-200/80 dark:border-slate-800 shadow-xs">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                <span>Giải pháp kiến trúc kỹ thuật của Tikat</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                {project.solutionVi}
              </p>
            </div>

            {/* Key Deliverables */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#131826] border border-slate-200/80 dark:border-slate-800 shadow-xs">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span>Các tính năng & Tiêu chuẩn nghiệm thu bàn giao</span>
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {project.deliverablesVi.map((d, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-[#161C2C] border border-slate-100 dark:border-slate-800/80"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-[13px] text-slate-700 dark:text-slate-300 font-medium leading-snug">
                      {d}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* UI Gallery */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#131826] border border-slate-200/80 dark:border-slate-800 shadow-xs">
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  <span>Thư viện hình ảnh giao diện & Thiết kế</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.gallery.map((imgUrl, i) => (
                    <div
                      key={i}
                      className="relative aspect-16/10 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xs group"
                    >
                      <Image
                        src={imgUrl}
                        alt={`${project.name} screenshot ${i + 1}`}
                        fill
                        sizes="(max-width: 640px) 100vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Column (4 cols Sticky Sidebar): Tech Stack & Consultation CTA */}
          <div className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-24">
            
            {/* Tech Stack Box */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#131826] border border-slate-200/80 dark:border-slate-800 shadow-xs">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3.5 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Công nghệ triển khai</span>
              </h3>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-[#161C2C] border border-slate-200 dark:border-slate-800 text-xs font-mono font-medium text-slate-700 dark:text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Contact & Quote CTA Box */}
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-slate-900 to-[#131826] text-white border border-slate-800 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-red-600/10 blur-3xl rounded-full pointer-events-none" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-xs font-semibold mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Tư Vấn Kiến Trúc Miễn Phí</span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                  Xây dựng dự án tương tự?
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-5 font-normal">
                  Nhận tài liệu phân tích kỹ thuật, báo giá trọn gói và cam kết tiến độ chi tiết từ đội ngũ kỹ sư của Tikat trong 24 giờ.
                </p>

                <div className="flex flex-col gap-2.5">
                  <a
                    href="/#consultation"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#ed2328] hover:bg-[#d61e23] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
                  >
                    <span>Nhận Báo Giá Dự Án Này</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a
                    href="/#calculator"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-medium border border-white/10 transition-colors"
                  >
                    <span>Dự Toán Chi Phí Tự Động</span>
                  </a>

                  <a
                    href="tel:0935250798"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-slate-300 hover:text-white text-xs transition-colors"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Hotline/Zalo: 0935 250 798</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* 6. Related Projects Showcase */}
        {related.length > 0 && (
          <div className="mt-16 sm:mt-20 pt-12 border-t border-slate-200 dark:border-slate-800">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Dự Án Nổi Bật Khác Năm 2026
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Khám phá thêm các kiến trúc web tương đồng được nhiều doanh nghiệp tin chọn
                </p>
              </div>

              <Link
                href="/project"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                <span>Xem tất cả 20 dự án</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((item) => (
                <Link
                  key={item.id}
                  href={`/project/${item.id}`}
                  className="group flex flex-col rounded-2xl bg-white dark:bg-[#131826] border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-900">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-white text-[11px] font-semibold">
                      {item.category}
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1 mb-2">
                        {item.name}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2 mb-3">
                        {item.summaryVi}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                      <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                        {item.metric}
                      </span>
                      <span className="font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                        <span>Chi tiết</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
