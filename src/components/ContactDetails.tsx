import { siteConfig } from "@/lib/seoConfig";
import styles from "@/app/page.module.css";
export default function ContactDetails() {
    const { author, contact, socials } = siteConfig;
    return <address className={styles.contactDetails}><div><span>NGƯỜI ĐỨNG SAU</span><strong>{author}</strong></div><div><span>GMAIL</span><a href={`mailto:${contact.email}`}>{contact.email}</a></div><div><span>ZALO</span><a href={socials.zalo} target="_blank" rel="noopener noreferrer">{contact.phone} ↗</a></div><div><span>ĐỊA CHỈ</span><span>Đà Nẵng, Việt Nam</span></div></address>;
}
