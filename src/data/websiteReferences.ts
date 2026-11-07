export interface WebsiteReference {
    slug: string;
    name: string;
    category: string;
    url: string;
    summary: string;
    audience: string;
    design: string;
    journey: string;
    features: string[];
    takeaway: string;
}
export const websiteReferences: WebsiteReference[] = [
    {
        slug: "coolmate", name: "Coolmate", category: "Thời trang & bán lẻ", url: "https://www.coolmate.me/",
        summary: "Website thời trang Việt Nam tổ chức sản phẩm theo nhóm nam, nữ, môn thể thao và bộ sưu tập. Hình ảnh chiến dịch tạo điểm nhấn, còn các khu vực mới về và bán chạy giúp người mua tiếp cận sản phẩm nhanh.",
        audience: "Người mua quần áo trực tuyến và khách tìm trang phục theo hoạt động.",
        design: "Ảnh người mẫu khổ lớn kết hợp nền sáng, chữ đậm và lưới sản phẩm. Điểm đáng tham khảo là cách tách nội dung truyền cảm hứng khỏi phần thông tin mua hàng.",
        journey: "Từ bộ sưu tập hoặc danh mục, người xem đi đến sản phẩm, chọn biến thể rồi mở giỏ hàng. Tìm kiếm và tài khoản được đặt ở khu vực đầu trang.",
        features: ["Danh mục theo nhu cầu mặc", "Tìm kiếm sản phẩm", "Lựa chọn màu sắc", "Giỏ hàng và CoolClub"],
        takeaway: "Với cửa hàng thời trang, nên ưu tiên ảnh nhất quán, danh mục dễ hiểu và hướng dẫn chọn kích cỡ gần thao tác mua.",
    },
    {
        slug: "pizza4ps", name: "Pizza 4P’s", category: "Nhà hàng & ẩm thực", url: "https://pizza4ps.com/",
        summary: "Website chuỗi nhà hàng khởi đầu tại Việt Nam, kết nối câu chuyện thương hiệu với thực đơn, địa điểm và các đường dẫn đặt bàn, giao hàng. Nội dung về phát triển bền vững mở rộng trải nghiệm ngoài món ăn.",
        audience: "Thực khách muốn tìm nhà hàng, xem thực đơn và chuẩn bị cho một bữa ăn.",
        design: "Ngôn ngữ hình ảnh mang tính kể chuyện, phối chữ có cá tính với các mảng nội dung giàu hình ảnh. Cách tiếp cận này phù hợp thương hiệu muốn tạo cảm xúc trước khi thúc đẩy đặt chỗ.",
        journey: "Người xem khám phá thương hiệu, chọn địa điểm hoặc thực đơn rồi chuyển sang hệ thống đặt bàn hay giao hàng.",
        features: ["Danh sách địa điểm", "Thực đơn", "Liên kết đặt bàn", "Nội dung về tính bền vững"],
        takeaway: "Website nhà hàng cần cân bằng câu chuyện với các lối đi ngắn đến địa chỉ, giờ phục vụ và đặt bàn.",
    },
    {
        slug: "ivivu", name: "iVIVU", category: "Du lịch & đặt phòng", url: "https://www.ivivu.com/",
        summary: "Nền tảng du lịch tại Việt Nam đặt tìm kiếm khách sạn ở vị trí trung tâm, bên cạnh tour, vé máy bay và các loại vé trải nghiệm. Nội dung được nhóm theo combo, phong cách nghỉ dưỡng và điểm đến.",
        audience: "Khách đang lên kế hoạch nghỉ dưỡng, tìm phòng hoặc kết hợp nhiều dịch vụ.",
        design: "Ảnh điểm đến tạo bối cảnh, trong khi khối tìm kiếm có nền và màu nút nổi bật. Các nhóm gợi ý phục vụ cả người đã có lịch trình lẫn người còn đang khám phá.",
        journey: "Nhập điểm đến, chọn ngày và số khách để tìm phòng; hoặc bắt đầu từ một điểm đến, combo hay nhóm nghỉ dưỡng.",
        features: ["Tìm khách sạn theo điểm đến", "Chọn ngày và số khách", "Combo nghỉ dưỡng", "Liên hệ tư vấn"],
        takeaway: "Với website du lịch, biểu mẫu tìm kiếm cần dễ hiểu và giữ rõ thông tin ngày, khách, loại dịch vụ.",
    },
    {
        slug: "vinschool", name: "Vinschool", category: "Giáo dục & trường học", url: "https://vinschool.edu.vn/",
        summary: "Cổng thông tin hệ thống trường học Việt Nam kết nối chương trình giáo dục, tuyển sinh, cơ sở trường và đời sống học đường. Nội dung phục vụ cả phụ huynh mới tìm hiểu lẫn gia đình đang có con theo học.",
        audience: "Phụ huynh tìm trường và người cần tra cứu thông tin học đường.",
        design: "Cấu trúc điều hướng nhiều cấp phản ánh lượng nội dung lớn. Tin tức, hoạt động học sinh và thông tin chương trình cùng tạo bức tranh về môi trường giáo dục.",
        journey: "Phụ huynh đi từ chương trình học đến cơ sở, học phí và quy chế tuyển sinh; người dùng hiện tại có thể tìm lịch năm học, cẩm nang và dịch vụ.",
        features: ["Chương trình theo cấp học", "Thông tin tuyển sinh", "Danh sách cơ sở", "Cẩm nang và lịch năm học"],
        takeaway: "Website trường học nên phân luồng phụ huynh mới và phụ huynh hiện tại, đồng thời giúp tài liệu quan trọng dễ tìm.",
    },
    {
        slug: "longchau", name: "FPT Long Châu", category: "Dược phẩm & sức khỏe", url: "https://nhathuoclongchau.com.vn/",
        summary: "Website nhà thuốc Việt Nam kết hợp danh mục sản phẩm, nội dung sức khỏe và tra cứu thông tin thuốc. Khối tìm kiếm, nhóm sản phẩm và hệ thống nhà thuốc là những điểm truy cập chính.",
        audience: "Người cần tìm sản phẩm, thông tin tham khảo hoặc địa chỉ nhà thuốc.",
        design: "Điều hướng phân nhóm chi tiết giúp tổ chức danh mục lớn. Các khu vực tra cứu và bài viết bổ sung ngữ cảnh cho nhu cầu tìm hiểu trước khi liên hệ nhà thuốc.",
        journey: "Người xem tìm theo từ khóa, danh mục hoặc khu vực tra cứu; sau đó đọc thông tin và tìm kênh hỗ trợ phù hợp.",
        features: ["Tìm kiếm sản phẩm", "Tra cứu thuốc và dược chất", "Góc sức khỏe", "Tìm hệ thống nhà thuốc"],
        takeaway: "Với lĩnh vực sức khỏe, thiết kế nên làm rõ nguồn thông tin và đường dẫn tư vấn; không dùng giao diện để suy diễn chỉ định điều trị.",
    },
    {
        slug: "misa", name: "MISA", category: "Phần mềm & doanh nghiệp", url: "https://www.misa.vn/",
        summary: "Website doanh nghiệp phần mềm Việt Nam tổ chức hệ sinh thái giải pháp theo nhóm khách hàng và nghiệp vụ. Danh mục bao phủ kế toán, nhân sự, bán hàng và quản lý điều hành.",
        audience: "Doanh nghiệp và hộ kinh doanh đang tìm giải pháp cho một nhu cầu vận hành cụ thể.",
        design: "Điều hướng theo bài toán kinh doanh giúp người xem tiếp cận một hệ sản phẩm rộng. Tên giải pháp đi cùng mô tả nghiệp vụ, giảm yêu cầu phải biết thương hiệu sản phẩm từ trước.",
        journey: "Chọn nhóm khách hàng, xác định nghiệp vụ rồi chuyển tới website giải pháp chuyên biệt để tìm hiểu thêm.",
        features: ["Phân nhóm theo khách hàng", "Danh mục theo nghiệp vụ", "Trang giải pháp chuyên biệt", "Giới thiệu hệ sinh thái phần mềm"],
        takeaway: "Website B2B nên mô tả vấn đề được giải quyết trước, sau đó mới trình bày tính năng và hướng dẫn người xem bước tiếp theo.",
    },
    {
        "slug": "pnj",
        "name": "PNJ",
        "category": "Trang sức & quà tặng",
        "url": "https://www.pnj.com.vn/",
        "summary": "Website trang sức Việt Nam kết hợp hình ảnh chiến dịch với danh mục nữ, nam và trẻ em. Tìm kiếm, hệ thống cửa hàng và giỏ hàng được đặt ngay trong phần đầu trang.",
        "audience": "Người tìm trang sức cho bản thân hoặc quà tặng theo dịp.",
        "design": "Nền sáng, điểm nhấn xanh và sắc kim loại giúp ảnh trang sức nổi bật. Khu vực chiến dịch lớn tạo cảm xúc trước khi người xem tiếp cận các nhóm sản phẩm.",
        "journey": "Bắt đầu từ bộ sưu tập, nhóm khách hàng hoặc tìm kiếm; sau đó xem sản phẩm, lựa chọn và mở giỏ hàng hay tìm cửa hàng.",
        "features": [
            "Danh mục theo nhóm khách hàng",
            "Tìm kiếm nhanh",
            "Giỏ hàng",
            "Thông tin cửa hàng"
        ],
        "takeaway": "Khi bán sản phẩm có giá trị cao, ảnh chi tiết và thông tin dịch vụ cần xuất hiện rõ, tránh để khuyến mãi che nội dung mua hàng."
    },
    {
        "slug": "vinmec",
        "name": "Vinmec",
        "category": "Bệnh viện & dịch vụ y tế",
        "url": "https://www.vinmec.com/vie/",
        "summary": "Website hệ thống bệnh viện tại Việt Nam hướng người dùng đến chuyên khoa, bác sĩ và đặt lịch. Nội dung sức khỏe và hướng dẫn khách hàng bổ sung thông tin trước khi thăm khám.",
        "audience": "Người cần tìm bác sĩ, tìm hiểu dịch vụ hoặc chuẩn bị lịch khám.",
        "design": "Sắc xanh và nền sáng tạo cấu trúc dễ đọc. Khối hành động gọi tổng đài, đặt lịch và tìm bác sĩ được nhóm thành một cụm rõ ràng ngay đầu trang.",
        "journey": "Người xem chọn chuyên khoa hoặc tìm bác sĩ, đọc thông tin rồi chuyển đến kênh hẹn khám. Tìm kiếm phục vụ nhu cầu tra cứu độc lập.",
        "features": [
            "Tra cứu chuyên khoa",
            "Tìm bác sĩ",
            "Lối vào đặt lịch hẹn",
            "Hướng dẫn khách hàng"
        ],
        "takeaway": "Website dịch vụ y tế cần ưu tiên khả năng tìm đúng người, đúng nơi và thông tin liên hệ; nội dung tham khảo không thay thế tư vấn chuyên môn."
    },
    {
        "slug": "fahasa",
        "name": "Fahasa",
        "category": "Sách & văn hóa đọc",
        "url": "https://www.fahasa.com/",
        "summary": "Nhà sách trực tuyến Việt Nam tổ chức danh mục sách trong nước, sách ngoại văn và các nhóm sản phẩm khác. Các chương trình theo nhà xuất bản và chủ đề đọc tạo nhiều điểm bắt đầu mua sắm.",
        "audience": "Độc giả tìm sách theo thể loại, tác giả hoặc nhu cầu học tập.",
        "design": "Hệ thống thẻ và banner nhiều tầng phù hợp danh mục lớn. Màu đỏ giúp nhận diện thương hiệu, trong khi nền sáng giữ nội dung và ảnh bìa sách dễ phân biệt.",
        "journey": "Tìm tên sách hoặc vào danh mục; xem sản phẩm, thông tin và giỏ hàng. Người chưa có lựa chọn có thể bắt đầu từ bộ sách hay chủ đề.",
        "features": [
            "Tìm kiếm sách",
            "Danh mục thể loại",
            "Giỏ hàng và tài khoản",
            "Khu vực sách theo chủ đề"
        ],
        "takeaway": "Danh mục lớn cần tìm kiếm dễ dùng, thông tin xuất bản nhất quán và phân nhóm tránh gây quá tải lựa chọn."
    },
    {
        "slug": "nhaxinh",
        "name": "Nhà Xinh",
        "category": "Nội thất & không gian sống",
        "url": "https://nhaxinh.com/",
        "summary": "Website nội thất Việt Nam kết nối sản phẩm với cảm hứng không gian sống. Người xem có thể khám phá sofa, giường, bàn ăn và đồ trang trí hoặc tìm kiếm trực tiếp món đồ cần mua.",
        "audience": "Người đang trang trí nhà ở và tìm nội thất phù hợp với không gian.",
        "design": "Ảnh căn phòng và ảnh sản phẩm giúp chuyển đổi giữa góc nhìn tổng thể và món đồ riêng lẻ. Khoảng thở và bố cục ảnh lớn phù hợp đặc thù sản phẩm cần quan sát chất liệu, tỷ lệ.",
        "journey": "Khám phá theo sản phẩm hoặc cảm hứng bố trí; đọc thông tin, lựa chọn biến thể và tìm cách mua hay liên hệ cửa hàng.",
        "features": [
            "Danh mục nội thất",
            "Tìm kiếm sản phẩm",
            "Giá và lựa chọn sản phẩm",
            "Liên kết hệ thống cửa hàng"
        ],
        "takeaway": "Website nội thất nên giữ ảnh có cùng chất lượng, công bố kích thước rõ và giúp người xem hình dung món đồ trong phòng."
    },
    {
        "slug": "sapo",
        "name": "Sapo",
        "category": "Quản lý bán hàng",
        "url": "https://www.sapo.vn/",
        "summary": "Website nền tảng quản lý bán hàng Việt Nam sắp xếp giải pháp theo kênh bán và bài toán vận hành. Nội dung giới thiệu bán tại cửa hàng, website, mạng xã hội, sàn thương mại điện tử và quản lý kho.",
        "audience": "Chủ cửa hàng và doanh nghiệp cần tổ chức việc bán hàng trên nhiều kênh.",
        "design": "Điều hướng mô tả nhu cầu cụ thể thay vì chỉ liệt kê tên phần mềm. Các khối giải pháp có tiêu đề ngắn, giúp người xem nhận ra vấn đề gần với công việc của mình.",
        "journey": "Chọn kênh hoặc nghiệp vụ cần giải quyết, tìm hiểu giải pháp rồi tiếp cận kênh tư vấn hay đăng ký trải nghiệm.",
        "features": [
            "Giải pháp theo kênh bán",
            "Quản lý kho và khách hàng",
            "Nội dung theo ngành",
            "Kênh tư vấn giải pháp"
        ],
        "takeaway": "Website phần mềm nên trình bày lợi ích gắn với công việc thực tế và giữ đường dẫn tiếp theo nhất quán giữa các trang."
    },
    {
        "slug": "haravan",
        "name": "Haravan",
        "category": "Thương mại đa kênh",
        "url": "https://www.haravan.com/",
        "summary": "Website nền tảng thương mại Việt Nam trình bày giải pháp website, bán hàng đa kênh, marketing và quản lý vận hành. Kho giao diện là một lối đi riêng cho người muốn hình dung cửa hàng trực tuyến.",
        "audience": "Thương hiệu và nhà bán lẻ tìm nền tảng xây dựng, vận hành hoạt động kinh doanh.",
        "design": "Nhóm giải pháp được đặt tên theo nhiệm vụ: xây dựng website, marketing, kênh bán và vận hành. Cách tổ chức này giúp giới thiệu hệ sinh thái rộng mà vẫn có điểm bắt đầu rõ ràng.",
        "journey": "Người xem đi từ nhu cầu sang trang giải pháp; có thể khám phá kho giao diện trước khi tìm hiểu triển khai và trao đổi tư vấn.",
        "features": [
            "Website bán hàng và doanh nghiệp",
            "Kho giao diện",
            "Giải pháp marketing",
            "Quản lý đơn và tồn kho"
        ],
        "takeaway": "Với hệ sản phẩm rộng, nên phân nhóm theo mục tiêu của người dùng và bổ sung ví dụ để giảm nội dung trừu tượng."
    },
    {
        "slug": "momo",
        "name": "MoMo",
        "category": "Tài chính & tiện ích số",
        "url": "https://www.momo.vn/",
        "summary": "Website ứng dụng tài chính Việt Nam giới thiệu các nhóm tiện ích, dịch vụ và nội dung hướng dẫn. Những lối vào như vé xem phim, giao thông và hoạt động cộng đồng giúp cụ thể hóa hệ sinh thái ứng dụng.",
        "audience": "Người muốn tìm hiểu tiện ích, cách sử dụng ứng dụng và thông tin dịch vụ.",
        "design": "Sắc hồng thương hiệu kết hợp biểu tượng theo nhóm dịch vụ. Nội dung tập trung vào tình huống sử dụng, giúp một sản phẩm nhiều tính năng trở nên dễ tiếp cận.",
        "journey": "Chọn dịch vụ hoặc tìm kiếm nội dung, đọc giới thiệu và hướng dẫn rồi chuyển sang ứng dụng khi cần thực hiện.",
        "features": [
            "Nhóm tiện ích và dịch vụ",
            "Tìm kiếm nội dung",
            "Hướng dẫn sử dụng",
            "Thông tin hoạt động cộng đồng"
        ],
        "takeaway": "Website hỗ trợ ứng dụng nên làm rõ thao tác nào chỉ để tìm hiểu và thao tác nào cần chuyển sang app, tránh khiến người xem mất ngữ cảnh."
    },
    {
        "slug": "viettel",
        "name": "Viettel Telecom",
        "category": "Viễn thông & kết nối",
        "url": "https://www.vietteltelecom.vn/",
        "summary": "Cổng dịch vụ viễn thông Việt Nam giới thiệu sản phẩm và các nhóm nhu cầu kết nối. Đây là ví dụ để xem cách một nhà cung cấp nhiều dịch vụ tổ chức lối vào cho khách hàng trên website.",
        "audience": "Khách hàng tìm thông tin dịch vụ di động, internet và kênh hỗ trợ.",
        "design": "Màu đỏ nhận diện và các khu vực sản phẩm giúp tạo điểm nhấn giữa lượng nội dung lớn. Khi đánh giá giao diện, cần chú ý mức độ nổi bật của thông tin gói dịch vụ so với banner quảng bá.",
        "journey": "Người xem chọn nhu cầu, đọc nội dung dịch vụ rồi tiếp cận kênh đăng ký hoặc hỗ trợ phù hợp.",
        "features": [
            "Giới thiệu dịch vụ viễn thông",
            "Nhóm thông tin sản phẩm",
            "Thông tin chương trình",
            "Kênh chăm sóc khách hàng"
        ],
        "takeaway": "Website viễn thông nên giúp người dùng so sánh điều kiện sử dụng và tìm hỗ trợ nhanh, thay vì chỉ đưa ra nhiều gói dịch vụ cùng lúc."
    },
    {
        "slug": "highlands",
        "name": "Highlands Coffee",
        "category": "Cà phê & giao hàng",
        "url": "https://www.highlandscoffee.com.vn/vn/trang-chu.html",
        "summary": "Website chuỗi cà phê tại Việt Nam kết nối thực đơn, câu chuyện thương hiệu và hệ thống cửa hàng. Màu sắc thương hiệu và ảnh sản phẩm giúp người xem nhận ra danh mục ngay từ phần đầu.",
        "audience": "Khách chọn đồ uống và tìm thông tin mua hàng từ thương hiệu.",
        "design": "Màu đỏ thương hiệu, ảnh ly cà phê khổ lớn và thanh điều hướng gọn tạo nhận diện rõ. Các lối vào thực đơn, đặt hàng và tìm cửa hàng được đặt cùng một cấp.",
        "journey": "Xem thực đơn, khám phá thương hiệu hoặc tìm cửa hàng; lối vào đặt hàng được đặt trong thanh điều hướng đầu trang.",
        "features": [
            "Danh mục đồ uống",
            "Hình ảnh sản phẩm",
            "Tìm kiếm cửa hàng",
            "Lối vào đặt hàng"
        ],
        "takeaway": "Website đồ uống cần nhất quán giữa ảnh món, tên gọi và cách chọn; khi có tùy chọn món, nên đặt chúng gần bước thêm sản phẩm."
    },
    {
        "slug": "vietnamairlines",
        "name": "Vietnam Airlines",
        "category": "Hàng không & hành trình",
        "url": "https://www.vietnamairlines.com/vn/vi/home",
        "summary": "Website hãng hàng không Việt Nam kết nối đặt vé với các dịch vụ trước và sau chuyến bay. Những khu vực quản lý đặt chỗ, làm thủ tục và hướng dẫn hành lý phục vụ nhiều giai đoạn của hành trình.",
        "audience": "Hành khách tìm chuyến bay, chuẩn bị giấy tờ và quản lý lịch trình.",
        "design": "Khối tác vụ đặt vé và các nhóm thông tin chuyến đi cần được phân biệt rõ. Điều hướng đa thị trường cho thấy nhu cầu duy trì trải nghiệm nhất quán giữa ngôn ngữ và khu vực.",
        "journey": "Tìm chuyến bay hoặc vào quản lý đặt chỗ, sau đó tiếp cận hướng dẫn thanh toán, hành lý và làm thủ tục khi cần.",
        "features": [
            "Tìm và đặt chuyến bay",
            "Quản lý đặt chỗ",
            "Thông tin làm thủ tục",
            "Hướng dẫn hành lý"
        ],
        "takeaway": "Website hành trình nên giữ bối cảnh ngày, chặng và hành khách xuyên suốt; người đã đặt vé cần lối vào riêng dễ thấy."
    },
];
export const referenceDate = "07/11/2026";
export function getWebsiteReference(slug: string) { return websiteReferences.find(site => site.slug === slug); }
