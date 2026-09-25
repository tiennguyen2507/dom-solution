import { siteConfig } from "./seoConfig";
import { servicesData } from "@/data/domSolutionData";

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/assets/logo.webp`,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address,
      addressLocality: "Hà Nội",
      addressRegion: "Hà Nội",
      postalCode: "100000",
      addressCountry: "VN",
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
      siteConfig.socials.telegram,
      siteConfig.socials.zalo,
      siteConfig.socials.linkedin,
    ],
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#localbusiness`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    image: [siteConfig.ogImage],
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    url: siteConfig.url,
    priceRange: "$$ - $$$",
    currenciesAccepted: "VND, USD",
    paymentAccepted: "Chuyển khoản ngân hàng, Tiền mặt, Thẻ tín dụng, VNPay, MoMo, PayPal",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address,
      addressLocality: "Hà Nội",
      addressRegion: "Hà Nội",
      postalCode: "100000",
      addressCountry: "VN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.contact.latitude,
      longitude: siteConfig.contact.longitude,
    },
    hasMap: `https://www.google.com/maps?q=${siteConfig.contact.latitude},${siteConfig.contact.longitude}`,
    areaServed: [
      {
        "@type": "City",
        name: "Hà Nội",
      },
      {
        "@type": "City",
        name: "TP. Hồ Chí Minh",
      },
      {
        "@type": "City",
        name: "Đà Nẵng",
      },
      {
        "@type": "Country",
        name: "Việt Nam",
      },
      {
        "@type": "Country",
        name: "Global / Remote",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "58",
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
        ],
        opens: "08:30",
        closes: "21:30",
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
        offers: {
          "@type": "Offer",
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "VND",
            price: service.startingPrice.replace(/\D/g, "") || "10000000",
          },
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
        name: "Trang Chủ",
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
        name: "Dự Toán Chi Phí",
        item: `${siteConfig.url}/#calculator`,
      },
      {
        "@type": "ListItem",
        position: 5,
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

