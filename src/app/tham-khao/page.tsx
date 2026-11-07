import type { Metadata } from "next";
import Link from "next/link";
import WebsiteReferences from "@/components/WebsiteReferences";
import styles from "../page.module.css";
export const metadata: Metadata = { title: "Website Việt Nam theo chủ đề — Góc tham khảo", alternates: { canonical: "/tham-khao" }, description: "Khám phá 16 website Việt Nam theo chủ đề qua ảnh chụp PC 16:9 và các bài phân tích giao diện, nội dung, trải nghiệm sử dụng." };
export default function ReferencesPage() {
    return <div className={`${styles.site} ${styles.referencePage}`}><Link href="/" className={styles.referenceBack}>← Trang chủ Tikat</Link><WebsiteReferences standalone/></div>;
}
