import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/lib/seoConfig";
import { getWebsiteSchema } from "@/lib/websiteSchema";
import SiteChrome from "@/components/SiteChrome";
import "./globals.css";
export const viewport: Viewport = { themeColor: siteConfig.themeColor, width: "device-width", initialScale: 1 };
export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: { default: "Tikat.vn | Nguyễn Lê Đình Tiên — Thiết kế website Đà Nẵng", template: "%s | Tikat.vn" },
    description: siteConfig.description,
    keywords: ["Tikat.vn", "Nguyễn Lê Đình Tiên", "thiết kế website Đà Nẵng", "lập trình web app", "làm tool theo yêu cầu", "thiết kế website bán hàng"],
    authors: [{ name: siteConfig.author, url: `${siteConfig.url}/about` }],
    creator: siteConfig.author, publisher: "Tikat.vn", category: "technology",
    alternates: { canonical: "/" },
    formatDetection: { telephone: true, email: true },
    openGraph: { title: "Tikat.vn — Website & Tool theo yêu cầu", description: siteConfig.description, url: siteConfig.url, siteName: "Tikat.vn", locale: "vi_VN", type: "website", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Tikat.vn — Nguyễn Lê Đình Tiên, thiết kế website tại Đà Nẵng" }] },
    twitter: { card: "summary_large_image", title: "Tikat.vn — Website & Tool theo yêu cầu", description: siteConfig.description, images: ["/twitter-image"] },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
    other: { "geo.region": "VN-DN", "geo.placename": "Đà Nẵng", "contact:email": siteConfig.contact.email, "contact:phone_number": "+84886694350" },
};
export default function RootLayout({ children }: {
    children: React.ReactNode;
}) {
    return <html lang="vi"><body className="antialiased">
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getWebsiteSchema()).replace(/</g, "\\u003c") }}/>
  <SiteChrome position="top"/><main id="main-content" className="min-h-screen">{children}</main><SiteChrome position="bottom"/>
 </body></html>;
}
