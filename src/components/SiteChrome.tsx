"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight, Code2, Menu, X } from "lucide-react";
import styles from "@/app/page.module.css";
import ContactDetails from "@/components/ContactDetails";
const navigation = [
    { href: "/#dich-vu", label: "Dịch vụ" },
    { href: "/project", label: "Dự án" },
    { href: "/tham-khao", label: "Tham khảo" },
    { href: "/about", label: "Về Tikat" },
];
export default function SiteChrome({ position }: {
    position: "top" | "bottom";
}) {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    if (position === "bottom")
        return <div className={styles.site}><div className={styles.footerContact}><ContactDetails /></div><footer className={styles.footer}>
    <Link href="/" className={styles.logo} aria-label="Tikat.vn — Trang chủ"><Code2 size={26}/><span>tikat<span className={styles.red}>.vn</span></span></Link>
    <span>Thiết kế có tâm. Lập trình có trách nhiệm.</span>
    <div className={styles.footerLinks}><Link href="/project">Dự án</Link><Link href="/tham-khao">Tham khảo</Link><a href="tel:0886694350">0886 694 350</a></div>
    <small>© 2026 Tikat.</small>
  </footer></div>;
    return <div className={styles.site}>
    <a className={styles.skip} href="#main-content">Đến nội dung chính</a>
    <header className={styles.header}>
      <Link href="/" className={styles.logo} aria-label="Tikat.vn — Trang chủ" onClick={() => setOpen(false)}><Code2 size={28} strokeWidth={2.5}/><span>tikat<span className={styles.red}>.vn</span></span></Link>
      <nav className={styles.desktopNav} aria-label="Điều hướng chính">{navigation.map(link => <Link key={link.href} href={link.href} aria-current={pathname !== "/" && pathname.startsWith(link.href) ? "page" : undefined}>{link.label}</Link>)}</nav>
      <Link href="/#lien-he" className={styles.headerCta} onClick={() => setOpen(false)}>Kể mình nghe ý tưởng <ArrowUpRight size={17}/></Link>
      <button className={styles.menuToggle} onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Đóng menu" : "Mở menu"}>{open ? <X size={22}/> : <Menu size={22}/>}</button>
    </header>
    {open && <nav className={styles.mobileNav} id="mobile-navigation" aria-label="Điều hướng điện thoại">{navigation.map(link => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}<ArrowUpRight size={17}/></Link>)}</nav>}
  </div>;
}
