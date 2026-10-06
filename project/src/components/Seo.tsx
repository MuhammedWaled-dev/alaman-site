import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { siteConfig } from '@/config/siteConfig';

interface SeoProps {
  title: string;
  description?: string;
  ogImage?: string;
}

/**
 * Lightweight SEO component — updates document title and meta tags per page.
 * Also updates canonical URL and og:url based on the current route.
 */
export default function Seo({ title, description, ogImage }: SeoProps) {
  const { lang } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const fullTitle = title ? `${title} | ${siteConfig.companyName}` : siteConfig.companyName;
    document.title = fullTitle;

    // Update og:title
    setMeta('property', 'og:title', fullTitle);
    setMeta('name', 'twitter:title', fullTitle);

    if (description) {
      setMeta('name', 'description', description);
      setMeta('property', 'og:description', description);
      setMeta('name', 'twitter:description', description);
    }

    // Canonical URL
    const canonical = `${siteConfig.publicUrl}${location.pathname}`;
    setLink('canonical', canonical);
    setMeta('property', 'og:url', canonical);

    // OG image
    if (ogImage) {
      const absOgImage = ogImage.startsWith('http') ? ogImage : `${siteConfig.publicUrl}${ogImage}`;
      setMeta('property', 'og:image', absOgImage);
      setMeta('name', 'twitter:image', absOgImage);
    }

    // Language
    document.documentElement.lang = lang;
  }, [title, description, lang, location.pathname, ogImage]);

  return null;
}

/** Helper: upsert a <meta> tag by attribute name+value */
function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

/** Helper: upsert a <link rel="..."> tag */
function setLink(rel: string, href: string) {
  let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}
