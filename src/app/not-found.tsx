import Link from "next/link";
import styles from "./page.module.css";
export default function NotFound() { return <div className={styles.site}><section className={styles.statusPage}><span>404</span><h1>Trang này chưa có ở đây.</h1><p>Đường dẫn có thể đã thay đổi. Bạn có thể trở về trang chủ hoặc khám phá các dự án của Tikat.</p><div className={styles.statusActions}><Link href="/" className={styles.darkButton}>Về trang chủ ↗</Link><Link href="/project" className={styles.textLink}>Khám phá dự án ↗</Link></div></section></div>; }
