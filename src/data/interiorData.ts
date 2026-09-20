export interface Project {
  id: string;
  title: string;
  category: "luxury" | "modern" | "indochine" | "neoclassic";
  categoryLabel: string;
  location: string;
  area: string;
  investment: string;
  image: string;
  description: string;
  features: string[];
}

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  features: string[];
  bannerBadge: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  apartment: string;
  avatar: string;
  content: string;
  rating: number;
  year: string;
}

export const statsData = [
  { value: "12+", label: "Năm Kinh Nghiệm", sub: "Khởi tạo từ 2014" },
  { value: "850+", label: "Căn Hộ Hoàn Thiện", sub: "Chung cư & Penthouse" },
  { value: "3.500m²", label: "Xưởng Sản Xuất", sub: "Công nghệ CNC Châu Âu" },
  { value: "100%", label: "Cam Kết Đúng Tiến Độ", sub: "Phạt 1%/ngày nếu trễ" },
  { value: "5 Năm", label: "Bảo Hành Tận Tâm", sub: "Bảo trì trọn đời" },
];

export const servicesData: Service[] = [
  {
    id: "thiet-ke-chung-cu",
    title: "Thiết Kế Nội Thất Chung Cư Cao Cấp",
    subtitle: "Dấu ấn độc bản - Thể hiện vị thế gia chủ",
    description:
      "Giải pháp thiết kế không gian thông minh, tối ưu công năng, phối hợp hài hòa ánh sáng, vật liệu cao cấp và phong thủy.",
    iconName: "Compass",
    features: [
      "Bản vẽ 3D chân thực, sắc nét 100%",
      "Tối ưu hóa từng centimet diện tích căn hộ",
      "Khảo sát hiện trạng & đo đạc kỹ thuật miễn phí",
      "Hồ sơ kỹ thuật thi công chuẩn xác 100%",
    ],
    bannerBadge: "Thiết Kế Độc Bản",
  },
  {
    id: "thi-cong-tron-goi",
    title: "Thi Công Trọn Gói Chìa Khóa Trao Tay",
    subtitle: "Cam kết chuẩn 99% so với bản vẽ 3D",
    description:
      "Dịch vụ trọn gói từ tháo dỡ, cải tạo, điện nước, trần sàn đến sản xuất lắp đặt nội thất đồ gỗ, rèm cửa, thiết bị cao cấp.",
    iconName: "Hammer",
    features: [
      "Trực tiếp từ xưởng - Tiết kiệm đến 30% chi phí",
      "Giám sát chất lượng 24/7 qua Camera công trình",
      "Vật liệu gỗ An Cường, phụ kiện Hafele/Blum chính hãng",
      "Nghiệm thu theo từng hạng mục khắt khe",
    ],
    bannerBadge: "Tiết Kiệm 30%",
  },
  {
    id: "penthouse-duplex",
    title: "Thiết Kế & Thi Công Penthouse / Duplex",
    subtitle: "Đẳng cấp không gian sống thượng lưu",
    description:
      "Chuyên biệt cho các căn hộ thông tầng, Penthouse diện tích lớn đòi hỏi kỹ thuật kết cấu cao và thẩm mỹ tinh tế.",
    iconName: "Crown",
    features: [
      "Đội ngũ KTS trưởng trên 10 năm kinh nghiệm chủ trì",
      "Vật liệu da bò Ý, đá Marble tự nhiên, kim loại mạ PVD",
      "Tích hợp hệ thống SmartHome thông minh cao cấp",
      "Bảo mật thông tin khách hàng tuyệt đối",
    ],
    bannerBadge: "Siêu Sang",
  },
  {
    id: "cai-tao-nang-cap",
    title: "Cải Tạo & Nâng Tầm Không Gian Sống",
    subtitle: "Biến căn hộ cũ thành kiệt tác hiện đại",
    description:
      "Tối ưu lại công năng, xử lý chống thấm, làm mới toàn diện nội thất nhanh chóng chỉ từ 15 - 25 ngày.",
    iconName: "Sparkles",
    features: [
      "Thi công nhanh - Không ảnh hưởng cư dân xung quanh",
      "Tận dụng tối đa kết cấu cũ để tiết kiệm ngân sách",
      "Cung cấp gói tân trang nội thất theo mùa",
      "Vệ sinh công nghiệp sạch sẽ trước khi bàn giao",
    ],
    bannerBadge: "Nhanh Chóng",
  },
];

export const portfolioData: Project[] = [
  {
    id: "p1",
    title: "Căn Hộ Duplex The Metropole Thủ Thiêm",
    category: "luxury",
    categoryLabel: "Luxury Modern",
    location: "Thủ Thiêm, TP. Thủ Đức",
    area: "185 m² (3 Phòng Ngủ)",
    investment: "1.450.000.000 VNĐ",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    description:
      "Không gian sống thượng lưu ngập tràn ánh sáng với đá Marble Calacatta, kim loại mạ titan gold và gỗ óc chó Bắc Mỹ tự nhiên.",
    features: ["Hệ SmartHome", "Đá Marble Ý", "Gỗ Óc Chó", "Kính Panorama"],
  },
  {
    id: "p2",
    title: "Căn Hộ Vinhomes Metropolis Liễu Giai",
    category: "luxury",
    categoryLabel: "Modern Luxury",
    location: "Ba Đình, Hà Nội",
    area: "120 m² (2 Phòng Ngủ + 1)",
    investment: "920.000.000 VNĐ",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    description:
      "Tone màu be kem và vàng champagne chủ đạo, điểm xuyết các chi tiết phào chỉ tinh gọn và sofa da nhập khẩu Ý.",
    features: ["Phào chỉ tinh tế", "Tone Champagne", "Sofa Da Ý", "Đèn chùm pha lê"],
  },
  {
    id: "p3",
    title: "Penthouse Masteri Centre Point",
    category: "luxury",
    categoryLabel: "Grand Penthouse",
    location: "Vinhomes Grand Park, TP.HCM",
    area: "260 m² (4 Phòng Ngủ)",
    investment: "2.350.000.000 VNĐ",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    description:
      "Kiến trúc mở phóng khoáng với quầy bar sang trọng, hầm rượu cá nhân và phòng master phong cách hoàng gia.",
    features: ["Hầm rượu riêng", "Quầy Bar Mini", "View 360 độ", "Phòng Master VIP"],
  },
  {
    id: "p4",
    title: "Căn Hộ Ecopark Grand The Island",
    category: "indochine",
    categoryLabel: "Indochine Luxury",
    location: "Văn Giang, Hưng Yên",
    area: "140 m² (3 Phòng Ngủ)",
    investment: "1.100.000.000 VNĐ",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
    description:
      "Sự giao thoa hoàn mỹ giữa bản sắc Á Đông truyền thống và nét lãng mạn, tinh tế của kiến trúc Pháp cổ điển.",
    features: ["Gỗ Gõ Đỏ", "Gạch bông cổ điển", "Quạt trần cổ", "Mây tre đan cao cấp"],
  },
  {
    id: "p5",
    title: "Căn Hộ D'Capitale Trần Duy Hưng",
    category: "modern",
    categoryLabel: "Contemporary",
    location: "Cầu Giấy, Hà Nội",
    area: "95 m² (2 Phòng Ngủ)",
    investment: "680.000.000 VNĐ",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    description:
      "Thiết kế tối giản tối ưu công năng cho gia đình trẻ năng động, hệ tủ kịch trần thông minh và ánh sáng nghệ thuật.",
    features: ["Tủ kịch trần", "Bàn ăn thông minh", "Led Profile ẩn", "Gỗ MDF chống ẩm"],
  },
  {
    id: "p6",
    title: "Căn Hộ Sun Grand City Ancora",
    category: "neoclassic",
    categoryLabel: "Neo Classic",
    location: "Hai Bà Trưng, Hà Nội",
    area: "135 m² (3 Phòng Ngủ)",
    investment: "1.250.000.000 VNĐ",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
    description:
      "Tân cổ điển đương đại nhẹ nhàng, giảm bớt chi tiết rườm rà, tập trung vào đường cong mềm mại và tỷ lệ vàng kiến trúc.",
    features: ["Tỷ lệ vàng", "Đường cong uốn lượn", "Sơn Lacquer cao cấp", "Thiết bị Kohler"],
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Tư Vấn & Khảo Sát Tận Nơi",
    description:
      "Đội ngũ KTS trực tiếp gặp gỡ lắng nghe mong muốn, đo đạc hiện trạng chi tiết và tư vấn phong cách, ngân sách tối ưu.",
    time: "Trong vòng 24h",
  },
  {
    step: "02",
    title: "Lên Mặt Bằng 2D & Phối Cảnh 3D",
    description:
      "Thiết kế bố trí mặt bằng công năng và dựng phối cảnh 3D chân thực theo dấu ấn riêng của gia chủ (chỉnh sửa không giới hạn).",
    time: "3 - 7 ngày làm việc",
  },
  {
    step: "03",
    title: "Bóc Tách & Báo Giá Chi Tiết",
    description:
      "Lập bảng dự toán minh bạch từng hạng mục, xuất xứ vật liệu rõ ràng, cam kết không phát sinh bất kỳ chi phí ngoài hợp đồng.",
    time: "1 - 2 ngày làm việc",
  },
  {
    step: "04",
    title: "Sản Xuất Tại Xưởng & Thi Công",
    description:
      "Sản xuất trực tiếp tại xưởng 3.500m² bằng máy móc hiện đại, lắp đặt hoàn thiện tỉ mỉ từng chi tiết với sự giám sát chặt chẽ.",
    time: "15 - 30 ngày",
  },
  {
    step: "05",
    title: "Nghiệm Thu & Bảo Hành 5 Năm",
    description:
      "Vệ sinh công nghiệp sạch bóng, bàn giao chìa khóa trao tay cùng chứng thư bảo hành 5 năm và bảo trì định kỳ trọn đời.",
    time: "Bàn giao ngay",
  },
];

export const testimonialsData: Testimonial[] = [
  {
    id: "t1",
    name: "Anh Hoàng Minh",
    role: "Chủ Căn Hộ Duplex",
    apartment: "The Metropole Thủ Thiêm (185m²)",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    content:
      "Tôi rất ấn tượng với phong cách làm việc chuyên nghiệp của SHOME LUXURY. Căn hộ bàn giao thực tế đẹp hơn cả ảnh 3D, từng đường nét kim loại mạ vàng và gỗ ghép đều tỉ mỉ đến hoàn hảo!",
    rating: 5,
    year: "Khách hàng 2024",
  },
  {
    id: "t2",
    name: "Chị Lê Thanh Huyền",
    role: "Doanh Nhân",
    apartment: "Vinhomes Metropolis (120m²)",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
    content:
      "Tiến độ chuẩn xác từng ngày. Đội ngũ KTS tư vấn cực kỳ có gu, màu sắc be ấm kết hợp vàng champagne đúng chuẩn phong cách luxury mà gia đình tôi tìm kiếm bấy lâu.",
    rating: 5,
    year: "Khách hàng 2024",
  },
  {
    id: "t3",
    name: "Bác Sĩ Nguyễn Tiến Dũng",
    role: "Chủ Căn Hộ Penthouse",
    apartment: "Masteri Centre Point (260m²)",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    content:
      "Điểm tôi đánh giá cao nhất là sự minh bạch về vật liệu và chi phí. Không có chi phí phát sinh vô lý, xưởng sản xuất trực tiếp nên chất lượng gỗ và da cực kỳ đầm chắc.",
    rating: 5,
    year: "Khách hàng 2023",
  },
];

export const faqData = [
  {
    question: "Chi phí thiết kế và thi công nội thất chung cư trọn gói khoảng bao nhiêu?",
    answer:
      "Chi phí phụ thuộc vào diện tích căn hộ và phong cách lựa chọn. Thông thường: Căn hộ 2PN (65-75m²) dao động từ 180 - 320 triệu VNĐ đối với phong cách Hiện Đại, và từ 350 - 650 triệu VNĐ đối với phân khúc Luxury cao cấp. Đặc biệt khi ký hợp đồng thi công trọn gói tại SHOME LUXURY, quý khách sẽ được MIỄN PHÍ 100% phí thiết kế.",
  },
  {
    question: "Thời gian thiết kế và thi công hoàn thiện căn hộ mất bao lâu?",
    answer:
      "Thời gian thiết kế 3D hoàn chỉnh thường từ 5 - 10 ngày (bao gồm các lần điều chỉnh). Thời gian thi công và lắp đặt tại công trình từ 15 - 25 ngày đối với căn hộ tiêu chuẩn, và 30 - 45 ngày đối với Penthouse/Duplex quy mô lớn.",
  },
  {
    question: "SHOME LUXURY sử dụng những loại vật liệu nội thất nào?",
    answer:
      "Chúng tôi cam kết 100% vật liệu chính hãng có chứng chỉ nguồn gốc CO/CQ: Gỗ công nghiệp cao cấp An Cường (MDF lõi xanh chống ẩm), Gỗ tự nhiên (Óc chó Bắc Mỹ, Sồi Mỹ, Gõ Đỏ), Đá Marble tự nhiên / Thạch anh nhân tạo Vicostone, Kim loại mạ PVD Titan, Da bò Ý cao cấp, Phụ kiện Hafele, Blum giảm chấn.",
  },
  {
    question: "Chính sách bảo hành và bảo trì của SHOME LUXURY như thế nào?",
    answer:
      "Toàn bộ công trình được bảo hành 5 năm cho các hạng mục nội thất gỗ và kết cấu, bảo hành 12 - 24 tháng cho thiết bị & phụ kiện theo hãng. Ngoài ra, chúng tôi hỗ trợ bảo trì định kỳ trọn đời 6 tháng/lần và có mặt xử lý kỹ thuật trong vòng 24h kể từ khi tiếp nhận thông tin.",
  },
  {
    question: "Tôi có được giám sát quá trình thi công và sản xuất tại xưởng không?",
    answer:
      "Quý khách hoàn toàn có thể đến trực tiếp xưởng sản xuất 3.500m² của SHOME LUXURY để kiểm tra chất lượng phôi gỗ, mộng ghép trước khi sơn phủ. Đồng thời tại công trình luôn có Camera trực tiếp và kỹ sư trưởng giám sát báo cáo tiến độ hàng ngày qua nhóm Zalo riêng của từng căn hộ.",
  },
];
