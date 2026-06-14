import { useEffect } from "react";

interface PageMetaProps {
  title: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  url?: string;
  canonical?: string;
  robots?: string;
}

function updateMetaTag(attribute: "name" | "property", key: string, value: string) {
  const selector = `meta[${attribute}='${key}']`;
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", value);
}

function updateLinkTag(rel: string, href: string) {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel='${rel}']`);

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
}

export function PageMeta({
  title,
  description,
  ogTitle,
  ogDescription,
  url,
  canonical,
  robots,
}: PageMetaProps) {
  useEffect(() => {
    document.title = title;

    if (description) {
      updateMetaTag("name", "description", description);
    }

    if (ogTitle) {
      updateMetaTag("property", "og:title", ogTitle);
    }

    if (ogDescription) {
      updateMetaTag("property", "og:description", ogDescription);
    }

    if (url) {
      updateMetaTag("property", "og:url", url);
    }

    if (canonical) {
      updateLinkTag("canonical", canonical);
    }

    if (robots) {
      updateMetaTag("name", "robots", robots);
    }
  }, [title, description, ogTitle, ogDescription, url, canonical, robots]);

  return null;
}
