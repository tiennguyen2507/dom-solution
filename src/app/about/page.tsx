import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import styles from "../page.module.css";
import ContactDetails from "@/components/ContactDetails";
export const metadata: Metadata = { title: "Nguyễn Lê Đình Tiên — Thiết kế website tại Đà Nẵng", description: "Nguyễn Lê Đình Tiên, người đứng sau Tikat.vn tại Đà Nẵng. Thiết kế website, web app và công cụ theo yêu cầu. Zalo 0886694350.", alternates: { canonical: "/about" } };
export default function AboutPage() {
    return <div className={styles.site}><div className={styles.innerPage}>
   <Link href="/" className={styles.textLink}>← Trang chủ</Link>
   <header className={styles.pageIntro}><span className={styles.eyebrow}>VỀ TIKAT / NGƯỜI ĐỨNG SAU SẢN PHẨM</span><h1>Làm web bằng kỹ thuật.<br /><em>Giữ nghề bằng sự tử tế.</em></h1><p>Mình giúp cá nhân, cửa hàng và doanh nghiệp xây dựng website, ứng dụng và công cụ phục vụ công việc mỗi ngày.</p></header>
   <div className={styles.aboutFeature}><div className={styles.aboutPhoto}><Image src="/images/tikat-founder.png" alt="Người phát triển Tikat tại không gian làm việc" fill priority sizes="(max-width:700px) 91vw, 42vw"/></div><div><span className={styles.eyebrow}>NGƯỜI ĐỨNG SAU / NGUYỄN LÊ ĐÌNH TIÊN</span><h2>Người bạn trao đổi.<br />Cũng là người thực hiện.</h2><p>Mình là Nguyễn Lê Đình Tiên, người đứng sau Tikat.vn tại Đà Nẵng.</p><p>Một ý tưởng không cần hoàn hảo ngay từ đầu. Bạn có thể bắt đầu bằng điều đang muốn thay đổi: một website chưa thể hiện đúng thương hiệu, một quy trình mất nhiều thời gian, hay một sản phẩm còn nằm trên giấy.</p><p>Mình cùng bạn làm rõ mục tiêu, xác định những tính năng cần thiết và thống nhất cách triển khai. Trong quá trình thực hiện, bạn có bản thiết kế để góp ý và các mốc công việc để theo dõi.</p><a href="https://zalo.me/0886694350" target="_blank" rel="noopener noreferrer" className={styles.textLink}>Trò chuyện với mình <ArrowUpRight size={18}/></a></div></div>
   <ContactDetails />
   <section className={styles.valuesSection}><span className={styles.eyebrow}>CÁCH MÌNH LÀM VIỆC</span><h2>Chỉn chu trong sản phẩm.<br />Rõ ràng trong hợp tác.</h2><div className={styles.steps}>{[["01", "Hiểu trước khi làm", "Thiết kế bắt đầu từ người sử dụng, mục tiêu và bối cảnh của bạn."], ["02", "Thống nhất từng việc", "Phạm vi, thời gian, chi phí và trách nhiệm được trao đổi trước khi triển khai."], ["03", "Làm để sử dụng lâu dài", "Giao diện dễ hiểu, nội dung có cấu trúc và tính năng phù hợp nhu cầu thực tế."], ["04", "Bàn giao rõ ràng", "Bạn nhận hướng dẫn sử dụng, thông tin truy cập và mã nguồn theo thỏa thuận."]].map(([n, t, p]) => <article key={n}><span>{n} /</span><h3>{t}</h3><p>{p}</p></article>)}</div></section>
   <section className={styles.inlineCta}><div><span className={styles.eyebrow}>CÙNG BẮT ĐẦU</span><h2>Kể mình nghe ý tưởng của bạn.</h2></div><Link href="/#lien-he" className={styles.darkButton}>Trao đổi dự án <ArrowUpRight size={20}/></Link></section>
 </div></div>;
}
