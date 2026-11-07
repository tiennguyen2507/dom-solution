import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { websiteReferences, getWebsiteReference, referenceDate } from "@/data/websiteReferences";
import styles from "../../page.module.css";
type Props = {
    params: Promise<{
        slug: string;
    }>;
};
export function generateStaticParams() { return websiteReferences.map(s => ({ slug: s.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const site = getWebsiteReference((await params).slug);
    return site ? { title: `${site.name} — Phân tích website ${site.category}`, description: site.summary, alternates: { canonical: `/tham-khao/${site.slug}` }, openGraph: { title: `${site.name} — Website tham khảo`, description: site.summary, images: [`/images/references/${site.slug}-desktop.jpg`] } } : { title: "Không tìm thấy website" };
}
export default async function ReferenceDetail({ params }: Props) {
    const site = getWebsiteReference((await params).slug);
    if (!site)
        notFound();
    return <div className={`${styles.site} ${styles.referencePage}`}><article className={styles.referenceArticle}>
  <Link href="/tham-khao" className={styles.textLink}>← Tất cả website tham khảo</Link>
  <header className={styles.referenceTitle}><span className={styles.eyebrow}>{site.category} / WEBSITE THAM KHẢO</span><h1>{site.name}</h1><p>{site.summary}</p><a href={site.url} target="_blank" rel="noopener noreferrer" className={styles.darkButton}>Truy cập website gốc ↗</a></header>
  <figure className={styles.referenceFigure}><Image src={`/images/references/${site.slug}-desktop.jpg`} alt={`Giao diện trang chủ ${site.name}`} width={1600} height={900} priority sizes="(max-width:900px) 91vw, 1100px"/><figcaption>Ảnh chụp từ <a href={site.url} target="_blank" rel="noopener noreferrer">{new URL(site.url).hostname}</a> · Ảnh PC 1600 × 900 (16:9) · Khảo sát {referenceDate}. Giao diện có thể thay đổi theo thời điểm.</figcaption></figure>
  <div className={styles.referenceBody}><aside><span className={styles.eyebrow}>THÔNG TIN WEBSITE</span><dl><dt>Chủ đề</dt><dd>{site.category}</dd><dt>Người dùng</dt><dd>{site.audience}</dd><dt>Nguồn chính thức</dt><dd><a href={site.url} target="_blank" rel="noopener noreferrer">{new URL(site.url).hostname} ↗</a></dd></dl></aside><div>
   <section><h2>Giao diện & cách trình bày</h2><p>{site.design}</p></section><section><h2>Hành trình sử dụng</h2><p>{site.journey}</p></section><section><h2>Những điểm có thể quan sát</h2><ul>{site.features.map(f => <li key={f}>{f}</li>)}</ul></section><section><h2>Góc nhìn thiết kế từ Tikat</h2><p>{site.takeaway}</p></section>
   <p className={styles.referenceNote}>Phần nhận xét là góc nhìn biên tập từ giao diện công khai, không phải kết quả kiểm thử hệ thống, hiệu năng hay số liệu kinh doanh. Website này không nằm trong hồ sơ dự án do Tikat thực hiện.</p>
  </div></div>
  <section className={styles.referenceRelated}><h2>Khám phá chủ đề khác</h2><div>{websiteReferences.filter(s => s.slug !== site.slug).map(s => <Link key={s.slug} href={`/tham-khao/${s.slug}`}><span>{s.category}</span>{s.name} ↗</Link>)}</div></section>
 </article></div>;
}
