import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Home,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  Zap,
  Code2,
  Users,
  CheckCircle2,
  ArrowRight,
  PhoneCall,
  Mail,
  MapPin,
  Award,
  Clock,
  HeartHandshake,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Tikat - Studio Thiết Kế & Lập Trình Web Chuyên Nghiệp",
  description:
    "Tìm hiểu về Tikat Studio - Sứ mệnh, tầm nhìn, triết lý phát triển và đội ngũ kỹ sư phần mềm chuyên môn cao đồng hành cùng hơn 50+ doanh nghiệp tại Việt Nam và quốc tế.",
  openGraph: {
    title: "About Us | Tikat Studio",
    description:
      "Studio chuyên thiết kế & lập trình website, web application, SaaS cao cấp chuẩn SEO và tối ưu Core Web Vitals <0.8s.",
    url: "https://tikat.com/about",
  },
};

export default function AboutPage() {
  const coreValues = [
    {
      icon: Code2,
      title: "Kỹ Thuật Độc Quyền",
      subtitle: "100% Mã Nguồn Sạch",
      desc: "Nói không với template rác và mã nguồn dựng sẵn nặng nề. Mỗi sản phẩm tại Tikat được xây dựng thủ công từ kiến trúc Next.js 15 và TypeScript tối ưu.",
      color: "text-blue-500 bg-blue-500/10 border-blue-500/20",
    },
    {
      icon: Zap,
      title: "Tốc Độ Vượt Trội",
      subtitle: "Tải Trang < 0.8 Giây",
      desc: "Tối ưu hóa điểm Core Web Vitals 98+ trên Google PageSpeed Insights, giúp tối đa hóa tỷ lệ chuyển đổi đơn hàng và tăng thứ hạng SEO vượt bậc.",
      color: "text-amber-500 bg-amber-500/10 border-amber-500/20",
    },
    {
      icon: HeartHandshake,
      title: "Minh Bạch Tuyệt Đối",
      subtitle: "Bàn Giao Full Bản Quyền",
      desc: "Báo giá trọn gói minh bạch không phát sinh chi phí ẩn. Khách hàng sở hữu 100% mã nguồn sạch trên Git và cơ sở dữ liệu riêng biệt không bị ràng buộc.",
      color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      icon: ShieldCheck,
      title: "Bảo Hành Dài Hạn",
      subtitle: "Hỗ Trợ Kỹ Thuật 24/7",
      desc: "Cam kết bảo hành 12 tháng không giới hạn lỗi kỹ thuật, hỗ trợ trực tiếp từ đội ngũ kỹ sư phát triển sản phẩm giúp hệ thống vận hành liên tục không gián đoạn.",
      color: "text-purple-500 bg-purple-500/10 border-purple-500/20",
    },
  ];

  const teamMembers = [
    {
      name: "Nguyễn Lê Đình Tiên",
      role: "Founder & Principal Architect",
      desc: "Chuyên gia kỹ thuật hơn 6 năm kinh nghiệm kiến trúc Next.js, Node.js & hệ thống chịu tải cao.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Trần Minh Khang",
      role: "Technical Lead & Cloud Architect",
      desc: "Quản trị hạ tầng phân tán Cloudflare, AWS và cơ sở dữ liệu phân vùng PostgreSQL tốc độ cao.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Lê Hoàng Yến Nhi",
      role: "Creative Director & UI/UX Lead",
      desc: "Định hình phong cách thị giác cao cấp, tối giản và nghiên cứu hành vi người dùng trực quan.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Đặng Văn Hưng",
      role: "Senior Full-stack Engineer",
      desc: "Chuyên sâu tích hợp cổng thanh toán trực tuyến, API microservices và websocket thời gian thực.",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Nguyễn Thảo My",
      role: "Product Manager & Agile Coach",
      desc: "Điều phối tiến độ bàn giao đúng mốc SLA 100%, kết nối yêu cầu kinh doanh của khách hàng với đội ngũ phát triển.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Phạm Quang Huy",
      role: "DevOps & Cloud Security",
      desc: "Thiết lập quy trình CI/CD tự động, kiểm thử an toàn thông tin và bảo vệ hệ thống trước tấn công DDoS.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Võ Trúc Anh",
      role: "Head of QA & Client Success",
      desc: "Kiểm thử tự động đa nền tảng thiết bị, đảm bảo chất lượng phần mềm không phát sinh lỗi khi lên sóng.",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Hoàng Gia Bảo",
      role: "AI & Data Systems Engineer",
      desc: "Nghiên cứu ứng dụng các mô hình ngôn ngữ lớn (LLM), vector database và tích hợp trí tuệ nhân tạo vào web app.",
      image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#07090e] text-slate-900 dark:text-slate-100 transition-colors duration-300 pt-20 sm:pt-24 pb-20">
      
      {/* 1. Header Banner & Breadcrumbs (Phong cách tred.vn) */}
      <section className="relative w-full bg-[#181818] dark:bg-[#0c0d12] text-white py-12 sm:py-16 border-b border-black/40 overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-600/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Breadcrumbs */}
          <nav className="inline-flex items-center gap-2 text-xs text-slate-400 mb-4">
            <Link href="/" className="flex items-center gap-1 hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
              <span>Trang chủ</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-white font-semibold">About Us</span>
          </nav>

          {/* Title & Red Accent Bar */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-[0.2em] text-white">
            About Us
          </h1>
          <div className="w-16 h-[3px] bg-[#ed2328] mx-auto mt-3 rounded-full shadow-xs" />
          <p className="mt-4 text-xs sm:text-sm text-slate-400 max-w-xl mx-auto font-normal">
            Hành trình kiến tạo những chuẩn mực mới trong thiết kế & phát triển phần mềm web cao cấp
          </p>
        </div>
      </section>

      {/* 2. Lời Ngỏ (Letter from Founder - Phong cách tred.vn) */}
      <section className="py-14 sm:py-20 bg-white dark:bg-[#0B0F19] transition-colors duration-200">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Title with Red Wing Accent */}
          <div className="mb-8">
            <div className="flex items-center gap-3">
              <span className="w-2 h-7 bg-[#ed2328] rounded-full shrink-0" />
              <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wider text-slate-900 dark:text-white">
                Lời ngỏ
              </h2>
            </div>
            <div className="h-[1px] w-full bg-slate-200 dark:bg-slate-800 mt-3" />
          </div>

          {/* Letter Content */}
          <div className="prose prose-slate dark:prose-invert max-w-none text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300 space-y-5">
            <p className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">
              Chào mừng bạn đến với Tikat Studio!
            </p>

            <p>
              Trân trọng cảm ơn Quý khách hàng và đối tác đã dành thời gian ghé thăm và tìm hiểu về các giải pháp công nghệ của Tikat Studio. Sự tin tưởng và đồng hành của quý vị chính là nguồn động lực to lớn nhất để đội ngũ kỹ sư của chúng tôi không ngừng đổi mới, sáng tạo và mang lại những giá trị số hóa vượt trội.
            </p>

            <p>
              Tikat Studio được thành lập với sứ mệnh mang đến những giải pháp thiết kế website và lập trình ứng dụng web (Web App, SaaS, E-Commerce) độc quyền, đột phá và phù hợp với tiêu chuẩn công nghệ tương lai. Sau hơn 5 năm hoạt động chuyên sâu, chúng tôi tự hào là đơn vị tiên phong tại Đà Nẵng, Hà Nội và TP. Hồ Chí Minh trong việc xây dựng các nền tảng web hiệu năng cao, tối ưu chuẩn Core Web Vitals &lt; 0.8 giây và loại bỏ hoàn toàn các mã nguồn dựng sẵn nặng nề.
            </p>

            <p>
              Chúng tôi hiểu rằng mỗi câu chuyện thương hiệu và mô hình kinh doanh đều xứng đáng có một kiến trúc công nghệ riêng biệt. Chính vì vậy, từng dòng code tại Tikat đều được chau chuốt tỉ mỉ, để sản phẩm không chỉ có diện mạo thẩm mỹ sang trọng mà còn mang lại tỷ lệ chuyển đổi doanh thu mạnh mẽ và bảo mật bền vững theo năm tháng.
            </p>

            <p className="font-semibold text-slate-800 dark:text-slate-200">
              Hãy để Tikat Studio đồng hành cùng quý doanh nghiệp trong hành trình chinh phục thị trường số, tạo dựng những dấu ấn khó phai và nâng tầm vị thế thương hiệu vững mạnh.
            </p>

            {/* Founder Signature Box */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
                  Đại diện Tikat Studio
                </p>
                <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  Nguyễn Lê Đình Tiên
                </div>
                <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                  Founder &amp; Principal Software Architect
                </div>
              </div>

              <div className="text-right">
                <div className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-[#161C2C] border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-600 dark:text-slate-400">
                  Đà Nẵng · Hà Nội · TP.HCM
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Banner Khẩu Hiệu Thương Hiệu (Style Hộp Đỏ Thẫm tred.vn) */}
      <section className="relative w-full py-16 sm:py-24 bg-slate-900 overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
            alt="Tikat Studio Architecture & Engineering Workspace"
            fill
            sizes="100vw"
            className="object-cover object-center brightness-50"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </div>

        {/* Content Box Overlaid in Red Accent (Đúng chất tred.vn) */}
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="w-full md:w-[85%] lg:w-[75%] ml-auto rounded-2xl sm:rounded-3xl p-7 sm:p-10 lg:p-12 bg-[#970000]/90 text-white backdrop-blur-md shadow-2xl border border-red-500/30">
            <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold uppercase tracking-widest mb-4 text-white text-left border-b border-white/20 pb-3">
              TRẺ TRUNG – SÁNG TẠO – CHUYÊN NGHIỆP – UY TÍN
            </h3>
            
            <p className="text-xs sm:text-sm md:text-[15px] text-white/95 leading-relaxed font-normal text-left">
              Với đội ngũ kỹ sư phần mềm giàu kinh nghiệm, tầm nhìn sáng tạo không giới hạn và tinh thần làm việc tận tâm, Tikat Studio cam kết mang đến cho quý vị những giải pháp công nghệ tối ưu, giúp nâng tầm giá trị thương hiệu của doanh nghiệp trong mắt khách hàng và đối tác toàn cầu.
            </p>

            <p className="mt-3 text-xs sm:text-sm md:text-[15px] text-white/95 leading-relaxed font-normal text-left">
              Cơ hội được đồng hành và trực tiếp phát triển sản phẩm cho hàng chục đối tác doanh nghiệp lớn nhỏ trong và ngoài nước trong các lĩnh vực SaaS, Thương Mại Điện Tử, Khách Sạn 3D và Y Tế... Tikat Studio tự tin là đối tác công nghệ uy tín hàng đầu cho hành trình số hóa của bạn.
            </p>

            <div className="mt-6 pt-4 border-t border-white/20 flex flex-wrap items-center gap-6 text-xs text-white/90">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                <span>Cam kết bàn giao đúng hạn 100%</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                <span>Bảo hành mã nguồn 12 tháng</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Tầm Nhìn & 4 Giá Trị Cốt Lõi */}
      <section className="py-16 sm:py-24 bg-slate-50/70 dark:bg-[#07090e] border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-xl sm:text-3xl font-extrabold uppercase tracking-widest text-slate-900 dark:text-white">
              Tầm Nhìn &amp; Giá Trị Cốt Lõi
            </h2>
            <div className="w-14 h-[3px] bg-[#ed2328] mx-auto mt-2.5 rounded-full" />
            <p className="mt-3 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Bốn trụ cột vững chắc định hình mọi sản phẩm và giải pháp công nghệ tại Tikat Studio
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl p-6 sm:p-7 bg-white dark:bg-[#121622] border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div>
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-5 ${val.color}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1">
                      {val.title}
                    </h3>

                    <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-3 font-mono">
                      {val.subtitle}
                    </div>

                    <p className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                      {val.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. Đội Ngũ Nhân Sự (Our Team - Điểm nhấn Avatar Tròn tred.vn) */}
      <section className="py-16 sm:py-24 bg-white dark:bg-[#0B0F19] transition-colors duration-200">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Title Centered with Red Underline */}
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-xl sm:text-3xl font-extrabold uppercase tracking-widest text-slate-900 dark:text-white">
              Đội Ngũ Nhân Sự
            </h2>
            <div className="w-14 h-[3px] bg-[#ed2328] mx-auto mt-2.5 rounded-full" />
            <p className="mt-3 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Những kỹ sư, kiến trúc sư phần mềm và nhà thiết kế giàu nhiệt huyết tạo nên các giải pháp đột phá
            </p>
          </div>

          {/* Circular Avatar Grid (Tương tự tred.vn team member circular boxes) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
            {teamMembers.map((member, index) => (
              <div key={index} className="group text-center flex flex-col items-center">
                {/* Circular Zoom Avatar */}
                <div className="relative w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-full overflow-hidden p-1.5 bg-slate-100 dark:bg-[#161C2C] border-2 border-slate-200 dark:border-slate-800 group-hover:border-[#ed2328] transition-colors duration-300 mb-4 shadow-sm">
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="160px"
                      className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                    />
                  </div>
                </div>

                {/* Person Name (Uppercase) */}
                <h4 className="text-sm sm:text-base font-bold uppercase tracking-wide text-slate-900 dark:text-white group-hover:text-[#ed2328] transition-colors mb-1">
                  {member.name}
                </h4>

                {/* Person Title (Small & Opacity) */}
                <div className="text-xs text-blue-600 dark:text-blue-400 font-semibold mb-2">
                  {member.role}
                </div>

                {/* Short Bio */}
                <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 leading-snug max-w-[200px] font-normal">
                  {member.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Call To Action Footer Banner */}
      <section className="py-12 sm:py-16 bg-[#0a0d14] text-white border-t border-white/10">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-blue-400 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Đồng Hành Cùng Tikat Studio</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-wide mb-4">
            Sẵn Sàng Nâng Tầm Vị Thế Thương Hiệu?
          </h2>

          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed mb-8">
            Hãy liên hệ ngay hôm nay để nhận tư vấn kiến trúc công nghệ toàn diện, giải pháp thiết kế độc quyền và bảng dự toán chi phí chi tiết cho dự án của bạn.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href="/#consultation"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#ed2328] hover:bg-[#d61e23] text-white text-xs sm:text-sm font-bold uppercase tracking-widest shadow-lg transition-all"
            >
              <span>Nhận Tư Vấn Dự Án</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="tel:0935250798"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold border border-white/15 transition-all"
            >
              <PhoneCall className="w-4 h-4 text-emerald-400" />
              <span>Hotline/Zalo: 0935 250 798</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
