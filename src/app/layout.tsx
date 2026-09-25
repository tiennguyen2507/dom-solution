import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/lib/seoConfig";
import {
  getOrganizationSchema,
  getLocalBusinessSchema,
  getWebSiteSchema,
  getFaqSchema,
  getBreadcrumbSchema,
  getServicesSchema,
} from "@/lib/jsonLd";
import { faqData } from "@/data/domSolutionData";
import { Header, Footer, FloatingContact } from "@/components/commons";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#FAF8F5",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Dom Solution | Studio Thiết Kế & Lập Trình Website, Web App Chuyên Nghiệp",
    template: "%s | Dom Solution",
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
    languages: {
      "vi-VN": siteConfig.url,
      "x-default": siteConfig.url,
    },
  },
  openGraph: {
    title: "Dom Solution | Studio Thiết Kế & Lập Trình Website, Web App Cao Cấp",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Dom Solution - Studio Lập Trình Website & Web App Chuyên Nghiệp",
        type: "image/jpeg",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dom Solution | Studio Thiết Kế & Lập Trình Website, Web App",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    // GEO Metadata for Search Engines and Local Targeting
    "geo.region": siteConfig.geo.region,
    "geo.placename": siteConfig.geo.placename,
    "geo.position": siteConfig.geo.position,
    "ICBM": siteConfig.geo.icbm,
    "geo.country": siteConfig.geo.country,
    "DC.title": "Dom Solution - Studio Thiết Kế & Lập Trình Website, Web App Cao Cấp",
    "DC.coverage": "Việt Nam & Toàn Cầu",
    "DC.creator": siteConfig.author,
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
  const breadcrumbSchema = getBreadcrumbSchema();
  const servicesSchema = getServicesSchema();

  return (
    <html lang="vi">
      <head>
        {/* Preconnect & DNS-Prefetch for Fast Asset Loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className="bg-[#FAF8F5] text-[#1A1A18] antialiased selection:bg-[#18181B] selection:text-white">
        <script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          id="schema-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          id="schema-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
        <script
          id="schema-faq"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          id="schema-breadcrumbs"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          id="schema-services"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
        />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}

