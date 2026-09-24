import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/lib/seoConfig";
import {
  getOrganizationSchema,
  getLocalBusinessSchema,
  getWebSiteSchema,
  getFaqSchema,
} from "@/lib/jsonLd";
import { faqData } from "@/data/domSolutionData";
import { Header, Footer, FloatingContact } from "@/components/commons";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0866FF",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Dom Solution | Web & Web App Development - Freelance Full-Stack Studio",
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
  },
  openGraph: {
    title: "Dom Solution | Web & Web App Development - Freelance Full-Stack",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Dom Solution - Freelance Web & Web App Development",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dom Solution | Web & Web App Development",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
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
      <body className="bg-[#07090E] text-[#F8FAFC] antialiased selection:bg-blue-500 selection:text-white">
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
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
