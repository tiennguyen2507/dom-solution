import Image from "next/image";
import { ArrowUpRight, ArrowDown, Check } from "lucide-react";
import styles from "./page.module.css";
import ProjectArchive from "@/components/ProjectArchive";
import WebsiteReferences from "@/components/WebsiteReferences";
import ContactDetails from "@/components/ContactDetails";
const services = [
    { n: "01", title: "Website mang dấu ấn riêng.", text: "Website giới thiệu, landing page và cửa hàng trực tuyến. Thiết kế từ câu chuyện thương hiệu, tối ưu cho hành trình của khách hàng.", tags: ["Thiết kế UI/UX", "Responsive", "SEO on-page"] },
    { n: "02", title: "Công cụ giúp việc nhẹ hơn.", text: "Web app, phần mềm quản lý và tool theo yêu cầu. Biến những thao tác lặp lại thành quy trình gọn gàng, dễ kiểm soát.", tags: ["Web application", "Dashboard", "Tự động hóa"] },
    { n: "03", title: "Đồng hành sau khi lên sóng.", text: "Bàn giao mã nguồn, hướng dẫn sử dụng và hỗ trợ kỹ thuật. Tiếp tục cải thiện tốc độ, nội dung và tính năng khi công việc của bạn phát triển.", tags: ["Bảo trì", "Tối ưu hiệu năng", "Nâng cấp"] },
];
const questions = [
    ["Chi phí làm website được tính như thế nào?", "Giá website khởi điểm từ 399.000đ. Chi phí cụ thể phụ thuộc vào số trang, thiết kế và chức năng cần xây dựng. Sau khi trao đổi yêu cầu, Tikat gửi phạm vi công việc và báo giá cụ thể để bạn cân nhắc trước khi bắt đầu."],
    ["Tôi chưa có nội dung và hình ảnh thì sao?", "Mình sẽ cùng bạn lên cấu trúc nội dung, chọn hướng hình ảnh và xác định những thông tin cần chuẩn bị. Các hạng mục sáng tạo thêm sẽ được thống nhất trong phạm vi dự án."],
    ["Sau khi bàn giao, tôi có tự quản lý được không?", "Có. Cách cập nhật nội dung và tài khoản quản trị sẽ được hướng dẫn khi bàn giao. Mã nguồn, quyền truy cập và các hạng mục hỗ trợ được ghi rõ trong thỏa thuận."],
];
export default function Home() {
    return <div className={styles.site}>
    <section className={styles.hero} id="noi-dung">
      <aside className={styles.priceBanner} aria-label="Thiết kế website chỉ từ 399 nghìn đồng">
        <div className={styles.priceAmount}>
          <span>CHỈ TỪ</span>
          <strong>399<span>K</span></strong>
        </div>
        <p className={styles.priceMessage}>Bạn đã có một website<br /><em>đẹp lung linh.</em></p>
        <a href="#lien-he" className={styles.priceCta}>Tư vấn website 399K <ArrowUpRight size={20} /></a>
      </aside>
      <div className={styles.heroTop}><span className={styles.eyebrow}><i /> THIẾT KẾ WEBSITE & PHÁT TRIỂN CÔNG CỤ</span><span className={styles.small}>Independent digital studio · Vietnam</span></div>
      <div className={styles.heroCopy}><h1>Ý tưởng của bạn.<br />Dấu ấn <em>trên web.</em></h1><div className={styles.heroAside}><p>Một website chỉn chu. Một công cụ đúng việc.<br />Mình giúp bạn biến điều đang ấp ủ thành sản phẩm số dễ dùng, có bản sắc và sẵn sàng vận hành.</p><a href="#lien-he" className={styles.darkButton}>Cùng bắt đầu dự án <ArrowUpRight size={20}/></a><a className={styles.textLink} href="#dich-vu">Khám phá cách mình có thể giúp <ArrowDown size={16}/></a></div></div>
      <figure className={styles.heroVisual}><Image src="/images/tikat-founder-editorial-v2.png" alt="Nguyễn Lê Đình Tiên làm việc cùng laptop trong không gian studio Tikat.vn" fill priority sizes="(max-width: 700px) 100vw, 92vw"/><figcaption><span>THIẾT KẾ CÓ CHỦ ĐÍCH.</span><span>LẬP TRÌNH ĐẾN NƠI ĐẾN CHỐN. ↗</span></figcaption></figure>
      <div className={styles.promise}><span><Check />Giao diện riêng cho thương hiệu</span><span><Check />Hiển thị tốt trên mọi màn hình</span><span><Check />Bàn giao mã nguồn rõ ràng</span><span><Check />Trao đổi trực tiếp với người làm</span></div>
    </section>
    <section className={styles.services} id="dich-vu"><div className={styles.sectionHeading}><span className={styles.eyebrow}>01 / MÌNH CÓ THỂ GIÚP GÌ?</span><h2>Đẹp để được nhớ.<br />Tốt để dùng mỗi ngày.</h2><p>Từ một trang giới thiệu nhỏ đến hệ thống phục vụ công việc — giải pháp bắt đầu từ nhu cầu thực tế của bạn.</p></div><div>{services.map(s => <article className={styles.service} key={s.n}><span className={styles.number}>{s.n}</span><div><h3>{s.title}</h3><p>{s.text}</p><div className={styles.tags}>{s.tags.map(t => <span key={t}>{t}</span>)}</div></div><ArrowUpRight className={styles.serviceArrow}/></article>)}</div></section>
    <WebsiteReferences />
    <ProjectArchive />
    <section className={styles.about} id="ve-tikat"><div className={styles.portrait}><Image src="/images/tikat-founder.png" alt="Người phát triển Tikat trong không gian làm việc" fill sizes="(max-width: 700px) 100vw, 40vw"/><span>NGƯỜI ĐỨNG SAU TIKAT ↗</span></div><div className={styles.aboutCopy}><span className={styles.eyebrow}>03 / NGUYỄN LÊ ĐÌNH TIÊN</span><h2>Trực tiếp trao đổi.<br />Trực tiếp làm.</h2><p>Mình là Nguyễn Lê Đình Tiên, người đứng sau Tikat.vn tại Đà Nẵng. Mình làm website và công cụ theo yêu cầu cho cá nhân, cửa hàng và doanh nghiệp. Mình tin một sản phẩm tốt bắt đầu từ việc hiểu công việc của người sẽ sử dụng nó.</p><p>Bạn có thể nói về mục tiêu, khó khăn hay một ý tưởng còn dang dở. Mình sẽ cùng bạn tìm cách thực hiện, thống nhất từng hạng mục và cập nhật tiến độ trong quá trình làm.</p><a className={styles.textLink} href="https://zalo.me/0886694350" target="_blank" rel="noreferrer">Trò chuyện với mình qua Zalo <ArrowUpRight size={19}/></a><div className={styles.signature}>Nguyễn Lê Đình Tiên<span>Web design & development</span></div></div></section>
    <section className={styles.process}><div className={styles.sectionHeading}><span className={styles.eyebrow}>04 / TỪ Ý TƯỞNG ĐẾN LÊN SÓNG</span><h2>Rõ ràng ở mỗi bước.</h2></div><div className={styles.steps}>{[["01", "Lắng nghe", "Hiểu mục tiêu, người dùng và những tính năng bạn thực sự cần."], ["02", "Thống nhất", "Chốt phạm vi, hướng thiết kế, chi phí và thời gian triển khai."], ["03", "Thiết kế & xây dựng", "Bạn xem bản thiết kế, góp ý và theo dõi sản phẩm thành hình."], ["04", "Bàn giao & đồng hành", "Kiểm tra trên các thiết bị, hướng dẫn quản lý và hỗ trợ vận hành."]].map(([n, t, d]) => <article key={n}><span>{n} /</span><h3>{t}</h3><p>{d}</p></article>)}</div></section>
    <section className={styles.faq}><div><span className={styles.eyebrow}>TRƯỚC KHI BẮT ĐẦU</span><h2>Có thể bạn<br />đang thắc mắc.</h2></div><div>{questions.map(([q, a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></section>
    <section className={styles.contact} id="lien-he"><span className={styles.eyebrow}>MỘT CUỘC TRÒ CHUYỆN LÀ ĐIỂM BẮT ĐẦU.</span><div><h2>Bạn có ý tưởng.<br /><em>Mình có cách làm.</em></h2><a href="https://zalo.me/0886694350" target="_blank" rel="noreferrer" className={styles.contactArrow} aria-label="Liên hệ Tikat qua Zalo"><ArrowUpRight /></a></div><div className={styles.contactBottom}><p>Kể mình nghe bạn đang muốn xây dựng điều gì.<br />Mình sẽ cùng bạn tìm bước tiếp theo phù hợp.</p><a href="tel:0886694350">0886 694 350 <ArrowUpRight size={22}/></a></div><ContactDetails /></section>

  </div>;
}
