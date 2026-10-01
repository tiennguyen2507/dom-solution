import { siteConfig } from "./seoConfig";
import { servicesData, portfolioData, blogPostsData } from "@/data/tikatData";

export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/#founder`,
    name: siteConfig.author,
    alternateName: "tiennguyen2507",
    jobTitle: siteConfig.authorRole,
    image: siteConfig.founderAvatar,
    url: siteConfig.socials.portfolio,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.geo.city,
      addressRegion: siteConfig.geo.region,
      addressCountry: siteConfig.geo.country,
    },
    sameAs: [
      siteConfig.socials.portfolio,
      siteConfig.socials.portfolioInfo,
      siteConfig.socials.facebook,
      siteConfig.socials.github,
      siteConfig.socials.shopeeLinkEarn,
    ],
    knowsAbout: siteConfig.skills,
    worksFor: {
      "@id": `${siteConfig.url}/#organization`,
    },
  };
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo-main.webp`,
    image: siteConfig.ogImage,
    description: siteConfig.description,
    founder: {
      "@id": `${siteConfig.url}/#founder`,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address,
      addressLocality: siteConfig.geo.city,
      addressRegion: siteConfig.geo.placename,
      postalCode: siteConfig.geo.postalCode,
      addressCountry: siteConfig.geo.country,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.contact.phone,
        contactType: "customer service",
        areaServed: ["VN", "Worldwide"],
        availableLanguage: ["Vietnamese", "English"],
      },
    ],
    sameAs: [
      siteConfig.socials.facebook,
      siteConfig.socials.github,
      siteConfig.socials.portfolio,
      siteConfig.socials.zalo,
      siteConfig.socials.telegram,
      siteConfig.socials.linkedin,
    ],
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#localbusiness`,
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    image: [siteConfig.ogImage, siteConfig.founderAvatar],
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    url: siteConfig.url,
    priceRange: "$$ - $$$",
    currenciesAccepted: "VND, USD",
    paymentAccepted: "Chuyển khoản ngân hàng, Tiền mặt, Thẻ tín dụng, VNPay, MoMo, PayPal",
    founder: {
      "@id": `${siteConfig.url}/#founder`,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address,
      addressLocality: siteConfig.geo.city,
      addressRegion: siteConfig.geo.region,
      postalCode: siteConfig.geo.postalCode,
      addressCountry: siteConfig.geo.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    hasMap: `https://www.google.com/maps?q=${siteConfig.geo.latitude},${siteConfig.geo.longitude}`,
    areaServed: [
      {
        "@type": "City",
        name: "Đà Nẵng",
        "@id": "https://www.wikidata.org/wiki/Q25282",
      },
      {
        "@type": "City",
        name: "Hà Nội",
        "@id": "https://www.wikidata.org/wiki/Q1858",
      },
      {
        "@type": "City",
        name: "TP. Hồ Chí Minh",
        "@id": "https://www.wikidata.org/wiki/Q1854",
      },
      {
        "@type": "Country",
        name: "Việt Nam",
      },
      {
        "@type": "Country",
        name: "Global / Remote Worldwide",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "68",
      bestRating: "5",
      worstRating: "1",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "22:00",
      },
    ],
  };
}

export function getServicesSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: servicesData.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        provider: {
          "@id": `${siteConfig.url}/#organization`,
        },
        areaServed: {
          "@type": "Country",
          name: "Việt Nam",
        },
        offers: {
          "@type": "Offer",
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "VND",
            price: service.startingPrice.replace(/\D/g, "") || "6500000",
          },
        },
      },
    })),
  };
}

export function getProjectsSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Dự Án Phần Mềm & Web App Tiêu Biểu",
    itemListElement: portfolioData.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareApplication",
        name: project.title,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description: project.description,
        author: {
          "@id": `${siteConfig.url}/#founder`,
        },
      },
    })),
  };
}

export function getBlogSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Góc Nhìn Kỹ Thuật & Kiến Trúc Phần Mềm",
    itemListElement: blogPostsData.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        datePublished: "2026-09-01",
        dateModified: "2026-09-25",
        author: {
          "@id": `${siteConfig.url}/#founder`,
        },
        publisher: {
          "@id": `${siteConfig.url}/#organization`,
        },
      },
    })),
  };
}

export function getBreadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Trang Chủ Tikat",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Dịch Vụ Thiết Kế & Phát Triển",
        item: `${siteConfig.url}/#services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Dự Án Đã Triển Khai",
        item: `${siteConfig.url}/#portfolio`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Dự Toán Chi Phí Tự Động",
        item: `${siteConfig.url}/#calculator`,
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Góc Nhìn Kỹ Thuật",
        item: `${siteConfig.url}/#blog`,
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Hỏi Đáp & Chính Sách",
        item: `${siteConfig.url}/#faq`,
      },
      {
        "@type": "ListItem",
        position: 7,
        name: "Tư Vấn & Báo Giá",
        item: `${siteConfig.url}/#consultation`,
      },
    ],
  };
}

export function getFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.shortDescription,
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    inLanguage: "vi-VN",
  };
}
