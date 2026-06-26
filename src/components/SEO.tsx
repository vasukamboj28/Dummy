import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
}

export default function SEO({
  title,
  description,
  canonical,
}: SEOProps) {
  useEffect(() => {
    // Set page title
    document.title = title;

    // Function to create/update meta tags
    const setMeta = (
      attr: "name" | "property",
      key: string,
      value: string
    ) => {
      let element = document.querySelector(
        `meta[${attr}="${key}"]`
      ) as HTMLMetaElement | null;

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attr, key);
        document.head.appendChild(element);
      }

      element.setAttribute("content", value);
    };

    // Basic SEO
    setMeta("name", "description", description);

    // Open Graph
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:url", canonical || window.location.href);
    setMeta(
      "property",
      "og:image",
      "https://drinkyard2.netlify.app/og-image.svg"
    );

    // Twitter Card
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta(
      "name",
      "twitter:image",
      "https://drinkyard2.netlify.app/og-image.svg"
    );

    // Robots Meta
    setMeta("name", "robots", "index, follow");

    // Canonical Tag
    let canonicalTag = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null;

    if (!canonicalTag) {
      canonicalTag = document.createElement("link");
      canonicalTag.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalTag);
    }

    canonicalTag.href = canonical || window.location.href;
  }, [title, description, canonical]);

  return null;
}