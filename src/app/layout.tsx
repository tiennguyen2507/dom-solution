import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { siteConfig } from "@/lib/seoConfig";

const utmAvo = localFont({
  src: [
    {
      path: "../../public/fonts/UTM_Avo.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/UTM_AvoItalic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/UTM_AvoBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/UTM_AvoBold_Italic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-utm-avo",
  display: "swap",
});
import {
  getPersonSchema,
  getOrganizationSchema,
  getLocalBusinessSchema,
  getWebSiteSchema,
  getFaqSchema,
  getBreadcrumbSchema,
  getServicesSchema,
  getProjectsSchema,
  getBlogSchema,
} from "@/lib/jsonLd";
import { faqData } from "@/data/tikatData";
import { Header, Footer, FloatingContact } from "@/components/commons";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Tikat | Studio Thiết Kế & Lập Trình Website, Web App Chuyên Nghiệp",
    template: "%s | Tikat",
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    { name: siteConfig.author, url: siteConfig.socials.portfolio },
    { name: siteConfig.name, url: siteConfig.url },
  ],
  creator: siteConfig.author,
  publisher: siteConfig.legalName,
  category: "technology",
  classification: "Web Development, Software Engineering, SaaS & Web App Studio",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: siteConfig.url,
    languages: {
      "vi-VN": siteConfig.url,
      "en-US": `${siteConfig.url}/en`,
      "x-default": siteConfig.url,
    },
  },
  openGraph: {
    title: "Tikat | Studio Thiết Kế & Lập Trình Website, Web App Cao Cấp",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Tikat - Studio Lập Trình Website & Web App Chuyên Nghiệp Đà Nẵng",
        type: "image/jpeg",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tikat | Studio Thiết Kế & Lập Trình Website, Web App",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@tiennguyen2507",
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
    // Primary GEO Coordinates & Target Region: Da Nang, Vietnam
    "geo.region": siteConfig.geo.region,
    "geo.placename": siteConfig.geo.placename,
    "geo.position": siteConfig.geo.position,
    "ICBM": siteConfig.geo.icbm,
    "geo.country": siteConfig.geo.country,
    "geo.a1": siteConfig.geo.region,
    "geo.a2": siteConfig.geo.city,

    // Secondary Regional Hubs
    "geo.region.hcm": siteConfig.geo.hcmRegion,
    "geo.placename.hcm": siteConfig.geo.hcmPlacename,
    "geo.position.hcm": siteConfig.geo.hcmPosition,
    "geo.region.hn": siteConfig.geo.hnRegion,
    "geo.placename.hn": siteConfig.geo.hnPlacename,
    "geo.position.hn": siteConfig.geo.hnPosition,

    // Dublin Core Metadata
    "DC.title": "Tikat - Studio Thiết Kế & Lập Trình Website, Web App Cao Cấp",
    "DC.creator": siteConfig.author,
    "DC.subject": "Thiết kế website, Lập trình Web App, Phát triển SaaS, SEO Core Web Vitals",
    "DC.description": siteConfig.description,
    "DC.publisher": siteConfig.legalName,
    "DC.coverage": "Đà Nẵng, Hà Nội, TP. Hồ Chí Minh, Toàn Quốc, Toàn Cầu",
    "DC.language": "vi",
    "rating": "general",
    "distribution": "global",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = getPersonSchema();
  const orgSchema = getOrganizationSchema();
  const localBusinessSchema = getLocalBusinessSchema();
  const webSiteSchema = getWebSiteSchema();
  const faqSchema = getFaqSchema(faqData);
  const breadcrumbSchema = getBreadcrumbSchema();
  const servicesSchema = getServicesSchema();
  const projectsSchema = getProjectsSchema();
  const blogSchema = getBlogSchema();

  return (
    <html lang="vi" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Preconnect & DNS-Prefetch for Fast Asset Loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <script
          id="dark-mode-init"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (saved === 'dark' || (!saved && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${utmAvo.variable} font-sans bg-white dark:bg-[#0B0F19] text-slate-900 dark:text-slate-100 antialiased selection:bg-[#0866FF] selection:text-white transition-colors duration-200`}>
        <script
          id="schema-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
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
        <script
          id="schema-projects"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
        />
        <script
          id="schema-blogs"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
        />
        <LanguageProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <FloatingContact />
        </LanguageProvider>
      </body>
    </html>
  );
}
