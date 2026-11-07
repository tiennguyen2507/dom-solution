import type { Metadata } from "next";
import Link from "next/link";
import ProjectBrowser from "@/components/ProjectBrowser";
import styles from "../page.module.css";
export const metadata: Metadata = { title: "Dự án — Website & ứng dụng của Tikat", description: "Khám phá hồ sơ dự án website, web app và các hệ thống quản lý của Tikat. Tìm kiếm theo tên, lĩnh vực và công nghệ.", alternates: { canonical: "/project" } };
export default function ProjectPage() { return <div className={styles.site}><div className={styles.innerPage}><Link href="/" className={styles.textLink}>← Trang chủ</Link><header className={styles.pageIntro}><span className={styles.eyebrow}>HỒ SƠ DỰ ÁN / THIẾT KẾ & PHÁT TRIỂN</span><h1>Từ bài toán thực tế.<br /><em>Đến sản phẩm cụ thể.</em></h1><p>Website, nền tảng bán hàng và ứng dụng quản lý. Khám phá từng dự án để tìm hiểu mục tiêu, cách giải quyết và phạm vi thực hiện.</p></header><ProjectBrowser /><section className={styles.inlineCta}><div><h2>Bạn đang có một bài toán tương tự?</h2><p>Mình sẽ cùng bạn tìm hướng thực hiện phù hợp.</p></div><Link className={styles.darkButton} href="/#lien-he">Trao đổi dự án ↗</Link></section></div></div>; }
