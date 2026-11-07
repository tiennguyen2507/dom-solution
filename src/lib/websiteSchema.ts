import { siteConfig } from "./seoConfig";
import { profileDescription, profileServices } from "@/data/personProfile";

export function getPersonEntity() {
  const { url, author, contact, socials } = siteConfig;
  return {
    "@type": "Person",
    "@id": `${url}/#person`,
    name: author,
    url: `${url}/about`,
    mainEntityOfPage: { "@id": `${url}/about#profile` },
    description: profileDescription,
    image: `${url}${siteConfig.founderAvatar}`,
    jobTitle: siteConfig.authorRole,
    email: contact.email,
    telephone: "+84886694350",
    address: { "@type": "PostalAddress", addressLocality: "Đà Nẵng", addressCountry: "VN" },
    knowsAbout: profileServices.map(service => service.name),
    worksFor: { "@id": `${url}/#organization` },
    sameAs: [socials.zalo],
  };
}

export function getWebsiteSchema() {
  const { url, contact, socials } = siteConfig;
  return {
    "@context": "https://schema.org",
    "@graph": [
      getPersonEntity(),
      { "@type": "ImageObject", "@id": `${url}/#portrait`, contentUrl: `${url}/images/tikat-founder.png`, url: `${url}/images/tikat-founder.png`, caption: "Nguyễn Lê Đình Tiên — người đứng sau Tikat.vn tại Đà Nẵng", representativeOfPage: true },
      { "@type": "ProfessionalService", "@id": `${url}/#organization`, name: "Tikat.vn", alternateName: "Tikat", url, description: siteConfig.description, image: `${url}/opengraph-image`, logo: `${url}/apple-icon`, founder: { "@id": `${url}/#person` }, email: contact.email, telephone: "+84886694350", address: { "@type": "PostalAddress", addressLocality: "Đà Nẵng", addressCountry: "VN" }, areaServed: { "@type": "Country", name: "Việt Nam" }, sameAs: [socials.zalo], contactPoint: { "@type": "ContactPoint", telephone: "+84886694350", email: contact.email, contactType: "customer service", availableLanguage: "vi" }, hasOfferCatalog: { "@type": "OfferCatalog", name: "Dịch vụ Tikat.vn", itemListElement: profileServices.map(service => ({ "@type": "Offer", itemOffered: { "@id": `${url}/#service-${service.id}` } })) } },
      { "@type": "WebSite", "@id": `${url}/#website`, name: "Tikat.vn", alternateName: "Tikat", url, inLanguage: "vi-VN", description: siteConfig.description, publisher: { "@id": `${url}/#organization` }, about: { "@id": `${url}/#person` } },
      ...profileServices.map(service => ({ "@type": "Service", "@id": `${url}/#service-${service.id}`, name: service.name, description: service.description, url: `${url}/#dich-vu`, provider: { "@id": `${url}/#organization` }, areaServed: { "@type": "Country", name: "Việt Nam" } })),
    ],
  };
}

export function getProfilePageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${siteConfig.url}/about#profile`,
    url: `${siteConfig.url}/about`,
    name: `${siteConfig.author} — Người đứng sau Tikat.vn`,
    description: profileDescription,
    inLanguage: "vi-VN",
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    mainEntity: getPersonEntity(),
    primaryImageOfPage: { "@id": `${siteConfig.url}/#portrait` },
  };
}
