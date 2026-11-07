import { siteConfig } from "./seoConfig";
export function getWebsiteSchema() {
    const { url, author, contact, socials } = siteConfig;
    return {
        "@context": "https://schema.org",
        "@graph": [
            { "@type": "Person", "@id": `${url}/#person`, name: author, url: `${url}/about`, image: `${url}/images/tikat-founder.png`, jobTitle: siteConfig.authorRole, email: contact.email, telephone: "+84886694350", address: { "@type": "PostalAddress", addressLocality: "Đà Nẵng", addressCountry: "VN" }, sameAs: [socials.zalo] },
            { "@type": "ProfessionalService", "@id": `${url}/#organization`, name: "Tikat.vn", url, description: siteConfig.description, image: `${url}/opengraph-image`, logo: `${url}/apple-icon`, founder: { "@id": `${url}/#person` }, email: contact.email, telephone: "+84886694350", address: { "@type": "PostalAddress", addressLocality: "Đà Nẵng", addressCountry: "VN" }, areaServed: { "@type": "Country", name: "Việt Nam" }, sameAs: [socials.zalo], contactPoint: { "@type": "ContactPoint", telephone: "+84886694350", email: contact.email, contactType: "customer service", availableLanguage: "vi" } },
            { "@type": "WebSite", "@id": `${url}/#website`, name: "Tikat.vn", url, inLanguage: "vi-VN", description: siteConfig.description, publisher: { "@id": `${url}/#organization` } },
        ],
    };
}
