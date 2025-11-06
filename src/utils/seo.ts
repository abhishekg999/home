import type { CollectionEntry } from "astro:content";

const SITE_URL = "https://ahh.bet";
const AUTHOR_NAME = "Abhishek Govindarasu";

export function getOgImageUrl(slug: string): string {
  return `${SITE_URL}/og/${slug}.png`;
}

export function getCanonicalUrl(path: string): string {
  return `${SITE_URL}${path}`;
}

export function generateArticleSchema(
  post: CollectionEntry<"blog">,
  url: string,
  ogImageUrl: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.data.title,
    description: post.data.description || post.data.title,
    image: ogImageUrl,
    datePublished: post.data.date.toISOString(),
    dateModified: post.data.date.toISOString(),
    author: {
      "@type": "Person",
      name: AUTHOR_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Person",
      name: AUTHOR_NAME,
      url: SITE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    keywords: post.data.tags?.join(", ") || "",
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Abhishek Govindarasu",
    description: "Software Engineer & Security Researcher",
    url: SITE_URL,
    author: {
      "@type": "Person",
      name: AUTHOR_NAME,
      url: SITE_URL,
    },
  };
}

export function generateWebPageSchema(
  title: string,
  description: string,
  url: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description: description,
    url: url,
    author: {
      "@type": "Person",
      name: AUTHOR_NAME,
      url: SITE_URL,
    },
  };
}
