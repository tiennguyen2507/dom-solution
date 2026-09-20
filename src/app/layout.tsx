import type { Metadata, Viewport } from "next";
import { Montserrat, Charmonman } from "next/font/google";
import { siteConfig } from "@/lib/seoConfig";
import {
  getOrganizationSchema,
  getLocalBusinessSchema,
  getWebSiteSchema,
  getFaqSchema,
} from "@/lib/jsonLd";
import { faqData } from "@/data/interiorData";
import { Header, Footer, FloatingContact } from "@/components/commons";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["vietnamese", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

const charmonman = Charmonman({
  subsets: ["vietnamese", "latin"],
  weight: ["400", "700"],
  variable: "--font-charmonman",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor,
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "SHOME LUXURY | Thiết Kế & Thi Công Nội Thất Chung Cư Trọn Gói",
    template: "%s | SHOME LUXURY",
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author, url: siteConfig.url }],
  creator: siteConfig.author,
  publisher: siteConfig.legalName,
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: "SHOME LUXURY | Kiến Tạo Không Gian Sống Thượng Lưu Độc Bản",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Thiết kế thi công nội thất chung cư trọn gói cao cấp - SHOME LUXURY",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SHOME LUXURY | Thiết Kế & Thi Công Nội Thất Chung Cư Cao Cấp",
    description: siteConfig.description,
    images: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = getOrganizationSchema();
  const localBusinessSchema = getLocalBusinessSchema();
  const webSiteSchema = getWebSiteSchema();
  const faqSchema = getFaqSchema(faqData);

  return (
    <html lang="vi">
      <head>
        {/* Structured Data / JSON-LD for Google Rich Results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className={`${montserrat.className} ${montserrat.variable} ${charmonman.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
