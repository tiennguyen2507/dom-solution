import { StaticImageData } from "next/image";
import heroWorkspaceImg from "@/assets/images/dom_hero_workspace_1790220521081.jpg";
import projectSaasImg from "@/assets/images/project_saas_analytics_1790220537804.jpg";
import projectEcommerceImg from "@/assets/images/project_ecommerce_app_1790220549058.jpg";
import projectPortalImg from "@/assets/images/project_portal_system_1790220560383.jpg";
import blogNextjsImg from "@/assets/images/blog_nextjs_perf_1790220895427.jpg";
import blogSecurityImg from "@/assets/images/blog_saas_security_1790220907282.jpg";
import blogEcommercePayImg from "@/assets/images/blog_ecommerce_pay_1790220918744.jpg";

export const heroAsset = heroWorkspaceImg;

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  description: string;
  techStack: string[];
  deliverables: string[];
  timeline: string;
  startingPrice: string;
  highlight: boolean;
}

export const servicesData: ServiceItem[] = [
  {
    id: "web-app",
    number: "01",
    title: "Web App & SaaS Development",
    shortDesc: "Xây dựng ứng dụng web phức tạp, realtime, phân quyền đa cấp, thanh toán định kỳ.",
    description:
      "Phát triển hệ thống web application và SaaS tùy chỉnh theo nhu cầu nghiệp vụ chuyên sâu. Kiến trúc mở rộng (Scalable), xác thực bảo mật, tích hợp Database cao cấp và API tốc độ cao.",
    techStack: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Supabase", "Stripe"],
    deliverables: [
      "Kiến trúc Full-stack bảo mật cao",
      "Authentication & Phân quyền RBAC",
      "Billing & Payment Gateway",
      "Hệ thống quản trị Admin chuyên sâu",
      "Bàn giao 100% Full Source Code",
    ],
    timeline: "3 - 6 tuần",
    startingPrice: "Từ 18.000.000đ",
    highlight: true,
  },
  {
    id: "landing-page",
    number: "02",
    title: "Landing Page & Corporate Website",
    shortDesc: "Website doanh nghiệp chuẩn SEO, điểm PageSpeed 98+, tối ưu tỷ lệ chuyển đổi.",
    description:
      "Thiết kế giao diện hiện đại, tối ưu trải nghiệm người dùng (UX) và hiệu năng tải trang vượt trội. Tích hợp trọn gói form thu thập lead, phân tích dữ liệu và CMS dễ quản lý.",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Vercel", "Google Analytics 4"],
    deliverables: [
      "Giao diện độc quyền chuẩn Responsive",
      "Tối ưu Core Web Vitals & SEO On-Page",
      "Tích hợp Zalo/Messenger/Hotline",
      "Hệ thống CMS tự quản lý nội dung",
      "Cấu hình Domain & Hosting bảo mật SSL",
    ],
    timeline: "7 - 14 ngày",
    startingPrice: "Từ 6.500.000đ",
    highlight: false,
  },
  {
    id: "ecommerce",
    number: "03",
    title: "E-Commerce & Payment Platform",
    shortDesc: "Sàn thương mại điện tử chuyên nghiệp, giỏ hàng mượt mà, cổng thanh toán tự động.",
    description:
      "Giải pháp bán hàng trực tuyến toàn diện, quản lý kho hàng, theo dõi đơn hàng thời gian thực, tích hợp các cổng thanh toán phổ biến như VNPay, MoMo, ZaloPay, Stripe và ship COD.",
    techStack: ["Next.js", "PostgreSQL", "Redis", "VNPay", "MoMo", "Cloudflare"],
    deliverables: [
      "Quản lý danh mục & biến thể sản phẩm",
      "Thanh toán trực tuyến tự động xác nhận",
      "Thông báo đơn hàng qua Telegram/Email",
      "Hệ thống mã giảm giá & Khách hàng thân thiết",
      "Báo cáo doanh thu & xuất nhập tồn",
    ],
    timeline: "3 - 5 tuần",
    startingPrice: "Từ 15.000.000đ",
    highlight: false,
  },
  {
    id: "internal-portal",
    number: "04",
    title: "Portal Quản Trị & ERP/CRM Nội Bộ",
    shortDesc: "Số hóa quy trình vận hành doanh nghiệp, tự động hóa báo cáo và phân quyền dữ liệu.",
    description:
      "Xây dựng phần mềm nội bộ, dashboard phân tích dữ liệu trực quan theo thời gian thực giúp doanh nghiệp tiết kiệm thời gian, loại bỏ sai sót và theo dõi năng suất nhân sự hiệu quả.",
    techStack: ["React", "TypeScript", "Express/NestJS", "PostgreSQL", "Docker", "Tailwind"],
    deliverables: [
      "Bảng điều khiển KPI & Telemetry trực quan",
      "Phân quyền nhân viên theo phòng ban",
      "Export Excel/PDF báo cáo định kỳ",
      "Ghi log bảo mật và lịch sử thao tác",
      "Tích hợp API phần mềm kế toán/bán hàng",
    ],
    timeline: "4 - 8 tuần",
    startingPrice: "Từ 22.000.000đ",
    highlight: true,
  },
  {
    id: "ai-integration",
    number: "05",
    title: "Tích Hợp AI & API Automation",
    shortDesc: "Tích hợp Gemini AI, OpenAI, trợ lý thông minh và tự động hóa quy trình nghiệp vụ.",
    description:
      "Ứng dụng trí tuệ nhân tạo vào sản phẩm: chatbot thông minh hỗ trợ khách hàng 24/7, tóm tắt dữ liệu tự động, xử lý văn bản và kết nối các nền tảng qua Webhooks / REST API.",
    techStack: ["Gemini API", "OpenAI", "LangChain", "Node.js", "Vector DB", "Webhooks"],
    deliverables: [
      "Chatbot AI trả lời theo tài liệu doanh nghiệp",
      "Tự động phân loại email và lead khách hàng",
      "Trích xuất dữ liệu từ hình ảnh/hóa đơn",
      "Bảo mật Token và tối ưu chi phí API",
      "Tài liệu hướng dẫn vận hành",
    ],
    timeline: "1 - 3 tuần",
    startingPrice: "Từ 8.000.000đ",
    highlight: false,
  },
  {
    id: "optimization",
    number: "06",
    title: "Tối Ưu Hiệu Năng & Bảo Trì 24/7",
    shortDesc: "Nâng cấp source code, tăng tốc độ website, vá lỗ hổng bảo mật và backup tự động.",
    description:
      "Dịch vụ tối ưu tốc độ tải trang (PageSpeed 95+), fix lỗi phần mềm, di chuyển server (Migration), phòng chống tấn công mạng và duy trì hệ thống hoạt động ổn định 99.9%.",
    techStack: ["Lighthouse", "Cloudflare", "Docker", "Nginx", "Linux", "Sentry"],
    deliverables: [
      "Kiểm toán toàn diện mã nguồn (Code Audit)",
      "Nâng điểm Google Core Web Vitals",
      "Cấu hình CDN và Caching nhiều lớp",
      "Thiết lập sao lưu dữ liệu tự động hàng ngày",
      "Cam kết xử lý sự cố trong vòng 2 giờ",
    ],
    timeline: "3 - 7 ngày",
    startingPrice: "Từ 4.500.000đ",
    highlight: false,
  },
];

export interface ProjectItem {
  id: string;
  title: string;
  category: "saas" | "landing" | "ecommerce" | "portal";
  categoryLabel: string;
  client: string;
  year: string;
  metrics: string;
  description: string;
  techStack: string[];
  image: StaticImageData | string;
  liveDemoUrl?: string;
  tags: string[];
}

export const portfolioData: ProjectItem[] = [
  {
    id: "finflow-analytics",
    title: "FinFlow - Nền Tảng Phân Tích Tài Chính SaaS",
    category: "saas",
    categoryLabel: "SaaS Web App",
    client: "FinFlow Fintech Co.",
    year: "2026",
    metrics: "Xử lý 150k+ transactions/ngày · Uptime 99.99%",
    description:
      "Ứng dụng phân tích dòng tiền và danh mục đầu tư theo thời gian thực. Tích hợp biểu đồ tài chính đa khung thời gian, thông báo biến động thị trường qua Telegram bot.",
    techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "PostgreSQL", "Recharts", "Redis"],
    image: projectSaasImg,
    tags: ["Realtime Charts", "Authentication", "Stripe Billing", "Dark Mode"],
  },
  {
    id: "aurora-luxury-store",
    title: "Aurora Living - E-Commerce Nội Thất Cao Cấp",
    category: "ecommerce",
    categoryLabel: "E-Commerce",
    client: "Aurora Living Group",
    year: "2025",
    metrics: "+185% Tỷ lệ chuyển đổi · Tốc độ load 0.7s",
    description:
      "Website thương mại điện tử chuyên đồ nội thất cao cấp. Tích hợp thanh toán VNPay & MoMo, bộ lọc đa thuộc tính tức thì không cần tải lại trang và tính phí ship tự động.",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "VNPay", "Cloudflare CDN"],
    image: projectEcommerceImg,
    tags: ["Tích hợp VNPay/MoMo", "Quản lý kho", "SEO Google Top 1", "PWA"],
  },
  {
    id: "nexus-enterprise-portal",
    title: "Nexus Hub - Cổng Điều Hành & Quản Lý Dự Án",
    category: "portal",
    categoryLabel: "Enterprise Portal",
    client: "Nexus Solutions Corp",
    year: "2026",
    metrics: "Tiết kiệm 40h/tháng cho bộ phận vận hành",
    description:
      "Cổng thông tin nội bộ quản lý 200+ nhân sự, theo dõi tiến độ sprint dự án, chấm công GPS và duyệt ngân sách nhiều cấp với chữ ký số điện tử.",
    techStack: ["React", "TypeScript", "Express API", "Supabase", "Docker"],
    image: projectPortalImg,
    tags: ["Phân quyền RBAC", "Export PDF/Excel", "Audit Logs", "Webhooks"],
  },
  {
    id: "techforge-landing",
    title: "TechForge AI - Landing Page Chuyển Đổi Cao",
    category: "landing",
    categoryLabel: "Landing Page",
    client: "TechForge AI Studio",
    year: "2025",
    metrics: "PageSpeed 100/100 · +64% Inbound Leads",
    description:
      "Landing page giới thiệu giải pháp AI tự động hóa doanh nghiệp. Thiết kế hiện đại, animation mượt mà 60fps và tích hợp form tư vấn thông minh.",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    image: heroWorkspaceImg,
    tags: ["PageSpeed 100", "Micro-Interactions", "SEO Structured Data"],
  },
];

export const statsData = [
  { value: "5+", label: "Năm kinh nghiệm", sublabel: "Full-stack Engineering" },
  { value: "45+", label: "Dự án bàn giao", sublabel: "Đúng tiến độ 100%" },
  { value: "99.8%", label: "Khách hàng hài lòng", sublabel: "Đánh giá 5 sao" },
  { value: "< 1s", label: "Tốc độ tải trang", sublabel: "Tối ưu Core Web Vitals" },
];

export const processSteps = [
  {
    step: "01",
    title: "Trao Đổi & Phân Tích Yêu Cầu",
    timeframe: "1 - 2 ngày",
    description:
      "Lắng nghe bài toán kinh doanh, tư vấn giải pháp công nghệ phù hợp nhất, thống nhất danh sách tính năng (Scope of Work) và báo giá minh bạch không phát sinh.",
  },
  {
    step: "02",
    title: "Thiết Kế UI/UX & Kiến Trúc Dữ Liệu",
    timeframe: "3 - 7 ngày",
    description:
      "Lên Wireframe và Prototype giao diện trực quan trên Figma. Thiết kế cơ sở dữ liệu và sơ đồ luồng người dùng để khách hàng duyệt trước khi lập trình.",
  },
  {
    step: "03",
    title: "Lập Trình Full-Stack Chuẩn Clean Code",
    timeframe: "1 - 4 tuần",
    description:
      "Viết code chuẩn TypeScript, cấu trúc module rõ ràng, tối ưu bảo mật và SEO. Cập nhật tiến độ liên tục qua bản Demo Preview hàng tuần cho khách hàng trải nghiệm.",
  },
  {
    step: "04",
    title: "Kiểm Thử (QA), Tối Ưu Tốc Độ & Bảo Mật",
    timeframe: "2 - 4 ngày",
    description:
      "Kiểm tra tính tương thích trên mọi thiết bị (Mobile, Tablet, Desktop), kiểm tra bảo mật API, tối ưu hóa điểm số PageSpeed và kiểm tra tải thực tế.",
  },
  {
    step: "05",
    title: "Bàn Giao 100% Source Code & Bảo Hành",
    timeframe: "Bảo hành 12 tháng",
    description:
      "Bàn giao toàn bộ quyền sở hữu mã nguồn, tài liệu hướng dẫn quản trị chi tiết, hỗ trợ trỏ tên miền - hosting và đồng hành bảo trì kỹ thuật 24/7.",
  },
];

export const testimonialsData = [
  {
    id: "1",
    author: "Anh Trần Hoàng Long",
    role: "CEO & Founder",
    company: "FinFlow Fintech",
    quote:
      "Dom Solution làm việc cực kỳ chuyên nghiệp và chuẩn chỉ. Web app tài chính của chúng tôi xử lý lượng dữ liệu lớn mà biểu đồ realtime vẫn chạy mượt mà không có độ trễ. Bàn giao đúng hẹn 100%.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    project: "FinFlow SaaS Analytics",
  },
  {
    id: "2",
    author: "Chị Lê Phương Thảo",
    role: "Giám Đốc Marketing",
    company: "Aurora Living",
    quote:
      "Website bán hàng mới có tốc độ load cực nhanh, điểm Google PageSpeed đạt 98 điểm. Tích hợp thanh toán VNPay và MoMo giúp khách chốt đơn tự động ngay trên web mà không cần nhân viên hỗ trợ.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    project: "Aurora E-Commerce",
  },
  {
    id: "3",
    author: "Anh Nguyễn Tuấn Anh",
    role: "Trưởng Phòng Vận Hành",
    company: "Nexus Solutions",
    quote:
      "Hệ thống portal nội bộ do Dom Solution xây dựng giúp đội ngũ chúng tôi số hóa toàn bộ quy trình phê duyệt công văn và dự án. Code viết rất sạch, dễ dàng mở rộng thêm tính năng mới sau này.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    project: "Nexus Enterprise Portal",
  },
];

export const faqData = [
  {
    question: "Tôi có được sở hữu 100% mã nguồn (Source Code) sau khi hoàn thành không?",
    answer:
      "Có, 100%. Dom Solution bàn giao toàn bộ mã nguồn trên kho lưu trữ Git (GitHub/GitLab) của chính bạn, cùng toàn bộ quyền quản trị Database, Server và tên miền. Bạn hoàn toàn độc lập và toàn quyền sử dụng, phát triển thêm.",
  },
  {
    question: "Thời gian phát triển một dự án Website hoặc Web App thường mất bao lâu?",
    answer:
      "Tùy vào quy mô và độ phức tạp: Landing page hoặc Website doanh nghiệp thường hoàn thành trong 7 - 14 ngày; Các ứng dụng Web App, SaaS, sàn E-Commerce thường từ 3 - 6 tuần. Chúng tôi luôn có cam kết tiến độ rõ ràng trong hợp đồng.",
  },
  {
    question: "Chế độ bảo hành và hỗ trợ sau khi bàn giao dự án như thế nào?",
    answer:
      "Mọi dự án đều được bảo hành kỹ thuật miễn phí 12 tháng, cam kết sửa lỗi phát sinh trong vòng 24h. Ngoài ra, Dom Solution có gói bảo trì định kỳ, nâng cấp tính năng mới và theo dõi an ninh hệ thống liên tục.",
  },
  {
    question: "Quy trình thanh toán cho dự án Freelance diễn ra như thế nào?",
    answer:
      "Thanh toán được chia thành các đợt theo từng mốc tiến độ rõ ràng (Milestone): Đợt 1 (30%) khi ký hợp đồng & chốt yêu cầu; Đợt 2 (40%) khi hoàn thành bản Demo chức năng chính; Đợt 3 (30%) sau khi kiểm thử, bàn giao mã nguồn & nghiệm thu.",
  },
  {
    question: "Dom Solution sử dụng những công nghệ và ngôn ngữ lập trình nào?",
    answer:
      "Chúng tôi chuyên sâu về hệ sinh thái hiện đại: Frontend với Next.js 15, React 19, TypeScript, Tailwind CSS; Backend với Node.js, Express, NestJS, Python; Database với PostgreSQL, Supabase, Firebase, Redis; Triển khai trên Vercel, AWS, Google Cloud và Docker.",
  },
];

export const techStackCategories = [
  {
    category: "Frontend & UI",
    items: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "Shadcn UI"],
  },
  {
    category: "Backend & APIs",
    items: ["Node.js", "Express", "NestJS", "RESTful APIs", "GraphQL", "WebSockets"],
  },
  {
    category: "Database & Storage",
    items: ["PostgreSQL", "Supabase", "Firebase", "Redis", "Prisma / Drizzle", "Cloudflare R2"],
  },
  {
    category: "Cloud & DevOps",
    items: ["Vercel", "AWS / GCP", "Docker", "Cloudflare", "GitHub Actions CI/CD", "Linux Server"],
  },
  {
    category: "AI & Integrations",
    items: ["Gemini API", "OpenAI", "VNPay / MoMo", "Stripe", "Telegram Bot API", "SendGrid"],
  },
];

export interface BlogPostItem {
  id: string;
  title: string;
  slug: string;
  category: "architecture" | "security" | "ecommerce" | "performance";
  categoryLabel: string;
  date: string;
  readTime: string;
  author: string;
  excerpt: string;
  image: StaticImageData | string;
  tags: string[];
  content: {
    intro: string;
    sections: {
      heading: string;
      body: string;
      codeSnippet?: string;
    }[];
    conclusion: string;
  };
}

export const blogPostsData: BlogPostItem[] = [
  {
    id: "nextjs-15-architecture-guide",
    slug: "nextjs-15-kien-truc-web-app-scalable",
    title: "Kiến Trúc Next.js 15 & Server Components Cho Ứng Dụng Web Lớn",
    category: "architecture",
    categoryLabel: "Kiến Trúc Web",
    date: "22/09/2026",
    readTime: "6 phút đọc",
    author: "Dom Solution Lead Engineer",
    excerpt:
      "Phân tích chuyên sâu cách tổ chức thư mục App Router, tách biệt Server/Client Components và tối ưu hóa truy vấn cơ sở dữ liệu để đạt điểm số hiệu năng Core Web Vitals tuyệt đối.",
    image: blogNextjsImg,
    tags: ["Next.js 15", "TypeScript", "Server Components", "Performance"],
    content: {
      intro:
        "Khi xây dựng các ứng dụng web phức tạp, việc lựa chọn kiến trúc phần mềm đúng đắn ngay từ đầu quyết định 80% khả năng mở rộng (scalability) và chi phí bảo trì sau này. Next.js 15 với mô hình Server Components mang lại sức mạnh vượt trội cho full-stack web applications.",
      sections: [
        {
          heading: "1. Nguyên tắc Leaf-Node cho Client Components",
          body:
            "Một lỗi phổ biến là đặt 'use client' ở các component cha cấp cao. Để tối ưu bundle size và tăng tốc First Contentful Paint (FCP), luôn giữ cấu trúc Component cây là Server Components mặc định, và chỉ đẩy 'use client' xuống các nút lá tương tác thực sự như Form, Dropdown hay Chart renderer.",
          codeSnippet:
            "// Server Component cha - fetch dữ liệu trực tiếp\nexport default async function DashboardPage() {\n  const metrics = await getLiveTelemetry();\n  return <DashboardLayout><InteractiveChart data={metrics} /></DashboardLayout>;\n}",
        },
        {
          heading: "2. Streaming & Suspense Boundaries",
          body:
            "Sử dụng React Suspense boundaries xung quanh các khối dữ liệu chậm thay vì chặn toàn bộ trang (blocking render). Người dùng sẽ thấy khung giao diện ngay lập tức trong khi dữ liệu chi tiết được nạp bất đồng bộ mượt mà.",
        },
        {
          heading: "3. Tối ưu Caching & Partial Prerendering (PPR)",
          body:
            "Kết hợp static shell cho phần layout tĩnh và dynamic streaming cho dữ liệu người dùng cá nhân hóa giúp giảm thời gian phản hồi máy chủ (TTFB) xuống dưới 100ms trên hạ tầng CDN toàn cầu.",
        },
      ],
      conclusion:
        "Áp dụng chuẩn chỉ các mẫu kiến trúc này giúp website đạt điểm PageSpeed 98-100 và sẵn sàng chịu tải hàng chục nghìn người dùng đồng thời mà không nghẽn tài nguyên.",
    },
  },
  {
    id: "saas-multi-tenant-auth-security",
    slug: "bao-mat-xac-thuc-phan-quyen-saas",
    title: "Thiết Kế Hệ Thống Phân Quyền (RBAC) & Bảo Mật Dữ Liệu Cho SaaS",
    category: "security",
    categoryLabel: "Bảo Mật & Auth",
    date: "15/09/2026",
    readTime: "8 phút đọc",
    author: "Dom Solution Security Specialist",
    excerpt:
      "Hướng dẫn thiết lập xác thực đa lớp (MFA), phân quyền người dùng theo vai trò (Role-Based Access Control) và cô lập dữ liệu an toàn trên PostgreSQL & Supabase.",
    image: blogSecurityImg,
    tags: ["Security", "PostgreSQL", "RBAC", "Supabase", "JWT"],
    content: {
      intro:
        "Đối với các nền tảng SaaS phục vụ khách hàng B2B, bảo mật và cô lập dữ liệu giữa các doanh nghiệp (Multi-tenancy isolation) là yếu tố sống còn. Một lỗ hổng rò rỉ dữ liệu chéo có thể phá hủy hoàn toàn uy tín thương hiệu.",
      sections: [
        {
          heading: "1. Row Level Security (RLS) trên PostgreSQL",
          body:
            "Thay vì chỉ dựa vào tầng code logic API để lọc dữ liệu theo organization_id, hãy áp dụng Row Level Security trực tiếp tại database engine. Ngay cả khi code application có sơ sót, database vẫn từ chối truy cập nếu JWT không khớp quyền hạn sở hữu.",
          codeSnippet:
            "ALTER TABLE customer_invoices ENABLE ROW LEVEL SECURITY;\nCREATE POLICY tenant_isolation_policy ON customer_invoices\n  USING (tenant_id = auth.jwt() ->> 'tenant_id');",
        },
        {
          heading: "2. Phân cấp vai trò RBAC linh hoạt",
          body:
            "Xây dựng ma trận quyền hạn gồm Super Admin, Organization Manager, Team Member và Viewer. Tránh hardcode vai trò trong mã nguồn; sử dụng bảng permissions liên kết động để doanh nghiệp có thể tự tùy biến quyền của nhân sự.",
        },
        {
          heading: "3. Bảo vệ Session & Chống tấn công XSS / CSRF",
          body:
            "Lưu trữ Token xác thực trong httpOnly, Secure, SameSite=Strict cookies thay vì LocalStorage để triệt tiêu nguy cơ bị đánh cắp qua mã độc script chèn vào trang.",
        },
      ],
      conclusion:
        "Một hệ thống bảo mật vững chắc ngay từ đầu giúp doanh nghiệp tự tin khi tiếp cận khách hàng lớn và vượt qua các bài kiểm toán bảo mật khắt khe.",
    },
  },
  {
    id: "vietnam-ecommerce-payment-gateway-guide",
    slug: "tich-hop-thanh-toan-vnpay-momo-tu-dong",
    title: "Bí Quyết Tích Hợp Cổng Thanh Toán VNPay, MoMo & Stripe Tự Động",
    category: "ecommerce",
    categoryLabel: "Thanh Toán & E-Commerce",
    date: "08/09/2026",
    readTime: "5 phút đọc",
    author: "Dom Solution Full-stack Dev",
    excerpt:
      "Quy trình xử lý Webhook thanh toán an toàn, xác thực chữ ký bảo mật (Checksum), tự động đối soát đơn hàng và gửi hóa đơn điện tử cho khách hàng.",
    image: blogEcommercePayImg,
    tags: ["E-Commerce", "VNPay", "MoMo", "Stripe", "Webhooks"],
    content: {
      intro:
        "Tỷ lệ bỏ giỏ hàng (Cart Abandonment) tại Việt Nam thường xuất phát từ trải nghiệm thanh toán phức tạp hoặc lỗi kết nối cổng ngân hàng. Tích hợp thanh toán mượt mà giúp doanh số tăng trưởng ngay lập tức từ 30% đến 50%.",
      sections: [
        {
          heading: "1. Xử lý IPN (Instant Payment Notification) & Webhook Idempotency",
          body:
            "Cổng thanh toán có thể gửi lại webhook nhiều lần (retry). Backend bắt buộc phải kiểm tra trạng thái idempotency để tránh việc cộng tiền hoặc trừ kho trùng lặp.",
          codeSnippet:
            "// Kiểm tra chữ ký bảo mật SHA512 trước khi xử lý đơn hàng\nconst isValidSignature = verifyVnpayChecksum(req.query, secretKey);\nif (!isValidSignature) return res.status(400).json({ RspCode: '97', Message: 'Invalid Checksum' });",
        },
        {
          heading: "2. Giao diện Checkout 1 trang (One-Step Checkout)",
          body:
            "Rút ngắn các bước thanh toán bằng cách tự động điền địa chỉ qua mã bưu chính, hiển thị mã QR Code chuyển khoản nhanh VietQR tạo tự động theo từng mã đơn hàng.",
        },
        {
          heading: "3. Đồng bộ tồn kho thời gian thực với Redis Locks",
          body:
            "Áp dụng Distributed Lock với Redis khi khách hàng bấm 'Thanh toán' trong các đợt Flash Sale để ngăn chặn tuyệt đối tình trạng Overselling khi hàng trăm người cùng mua món đồ cuối cùng.",
        },
      ],
      conclusion:
        "Hạ tầng thanh toán ổn định và tự động hóa giúp chủ doanh nghiệp an tâm bán hàng 24/7 mà không cần nhân sự trực canh tin nhắn chuyển khoản thủ công.",
    },
  },
];

