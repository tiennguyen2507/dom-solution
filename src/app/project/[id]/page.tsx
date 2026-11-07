import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllProjects, getProjectById, getRelatedProjects } from "@/data/projectsData";
import ProjectCard from "@/components/ProjectCard";
import styles from "../../page.module.css";
type Props = {
    params: Promise<{
        id: string;
    }>;
};
export function generateStaticParams() { return getAllProjects().map(p => ({ id: p.id })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const p = getProjectById((await params).id); return p ? { title: `${p.name} — Hồ sơ dự án`, description: p.summaryVi, alternates: { canonical: `/project/${p.id}` }, openGraph: { title: p.name, description: p.summaryVi, images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: p.name }] } } : { title: "Không tìm thấy dự án" }; }
export default async function ProjectDetail({ params }: Props) {
    const p = getProjectById((await params).id);
    if (!p)
        notFound();
    return <div className={styles.site}><article className={styles.innerPage}><Link href="/project" className={styles.textLink}>← Tất cả dự án</Link><header className={styles.pageIntro}><span className={styles.eyebrow}>{p.category} / {p.year}</span><h1 className={styles.projectTitle}>{p.name}</h1><p>{p.summaryVi}</p></header><div className={styles.projectCover}><Image src={p.image} alt={p.name} fill priority sizes="91vw"/></div><div className={styles.referenceBody}><aside><span className={styles.eyebrow}>THÔNG TIN DỰ ÁN</span><dl><dt>Khách hàng</dt><dd>{p.client}</dd><dt>Thời gian</dt><dd>{p.timeline}</dd><dt>Ngân sách trong hồ sơ</dt><dd>{p.budget}</dd><dt>Kết quả trong hồ sơ</dt><dd>{p.metric}</dd><dt>Công nghệ</dt><dd><div className={styles.tags}>{p.tech.map(t => <span key={t}>{t}</span>)}</div></dd></dl></aside><div><section><h2>Bài toán đặt ra</h2><p>{p.challengeVi}</p></section><section><h2>Hướng giải quyết</h2><p>{p.solutionVi}</p></section><section><h2>Các hạng mục bàn giao</h2><ul>{p.deliverablesVi.map(d => <li key={d}>{d}</li>)}</ul></section></div></div><section className={styles.detailGallery}><h2>Hình ảnh trong hồ sơ</h2><div>{p.gallery.map((image, i) => <figure key={`${image}-${i}`}><div className={styles.projectImage}><Image src={image} alt={`${p.name} — hình ${i + 1}`} fill sizes="(max-width:600px) 91vw, 44vw"/></div></figure>)}</div></section><section className={styles.referenceRelated}><h2>Khám phá dự án khác</h2><div className={styles.projectGrid}>{getRelatedProjects(p.id, 3).map(item => <ProjectCard key={item.id} project={item}/>)}</div></section><section className={styles.inlineCta}><h2>Cùng làm sản phẩm tiếp theo.</h2><Link className={styles.darkButton} href="/#lien-he">Kể mình nghe ý tưởng ↗</Link></section></article></div>;
}
