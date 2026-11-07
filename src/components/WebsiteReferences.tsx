import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { websiteReferences, referenceDate } from "@/data/websiteReferences";
import styles from "@/app/page.module.css";
export default function WebsiteReferences({ standalone = false }: {
    standalone?: boolean;
}) {
    const Heading = standalone ? "h1" : "h2";
    const sites = standalone ? websiteReferences : websiteReferences.slice(0, 6);
    return <section className={styles.projectArchive} id="website-viet-nam">
    <div className={styles.projectHeading}>
      <div className={styles.sectionHeading}><span className={styles.eyebrow}>GÓC THAM KHẢO / WEBSITE VIỆT NAM</span><Heading>Website Việt Nam.<br />Nhiều góc nhìn thiết kế.</Heading><p>Website thực tế được tuyển chọn theo chủ đề, kèm hình ảnh và góc nhìn về thiết kế, nội dung, trải nghiệm sử dụng.</p></div>
      {!standalone && <Link href="/tham-khao" className={styles.textLink}>Khám phá {websiteReferences.length} website <ArrowUpRight size={18}/></Link>}
    </div>
    <p className={styles.referenceNote}>Đây là các website tham khảo độc lập, không phải dự án do Tikat thực hiện. Hình ảnh chụp từ website gốc; thương hiệu và giao diện thuộc chủ sở hữu tương ứng. Ảnh PC 1600 × 900, tỷ lệ 16:9. Khảo sát ngày {referenceDate}.</p>
    {standalone && <nav className={styles.referenceTopics} aria-label="Chọn chủ đề website">{websiteReferences.map(site => <a key={site.slug} href={`#ref-${site.slug}`}>{site.category} ↓</a>)}</nav>}
    <div className={styles.projectGrid}>{sites.map(site => <article id={`ref-${site.slug}`} key={site.slug} className={styles.projectCard}>
      <Link href={`/tham-khao/${site.slug}`} className={`${styles.projectImage} ${styles.referenceImage}`}><Image src={`/images/references/${site.slug}-desktop.jpg`} alt={`Ảnh chụp PC 16:9 website ${site.name}`} fill sizes="(max-width:600px) 91vw, (max-width:900px) 44vw, 29vw"/><span className={styles.projectVisit}><ArrowUpRight size={20}/></span></Link>
      <div className={styles.projectMeta}>{site.category}<span>THAM KHẢO</span></div><h3><Link href={`/tham-khao/${site.slug}`}>{site.name}</Link></h3><p>{site.summary}</p><div className={styles.tags}>{site.features.slice(0, 2).map(f => <span key={f}>{f}</span>)}</div><Link className={styles.textLink} href={`/tham-khao/${site.slug}`}>Đọc phân tích website <ArrowUpRight size={16}/></Link>
    </article>)}</div>
  </section>;
}
