import {
  siteConfig,
  heroContent,
  contactContent,
  experienceEntries,
  socialLinks,
} from "@/data/site";

export function JsonLd() {
  const person = {
    "@type": "Person",
    name: siteConfig.fullName,
    alternateName: siteConfig.name,
    url: siteConfig.siteUrl,
    jobTitle: experienceEntries[0]?.role ?? heroContent.roles[0],
    description: siteConfig.description,
    email: contactContent.email,
    sameAs: socialLinks.map((link) => link.url),
  };

  const website = {
    "@type": "WebSite",
    name: siteConfig.title,
    url: siteConfig.siteUrl,
    description: siteConfig.description,
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [person, website],
  };

  return (
    <script
      type="application/ld+json"
      // Safe: jsonLd is built entirely from static site data, not user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
