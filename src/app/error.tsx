"use client";
import Link from "next/link";
import styles from "./page.module.css";
export default function ErrorPage({ reset }: {
    error: Error & {
        digest?: string;
    };
    reset: () => void;
}) { return <div className={styles.site}><section className={styles.statusPage}><span>Oops.</span><h2>Trang chưa tải được.</h2><p>Bạn thử tải lại trang. Nếu sự cố vẫn tiếp diễn, hãy liên hệ Tikat để được hỗ trợ.</p><div className={styles.statusActions}><button onClick={reset} className={styles.darkButton}>Thử lại ↗</button><Link href="/" className={styles.textLink}>Về trang chủ ↗</Link></div></section></div>; }
