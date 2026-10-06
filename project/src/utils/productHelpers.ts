import { contactConfig } from '@/config/contactConfig';
import { siteConfig } from '@/config/siteConfig';
import type { Language } from '@/i18n/translations';
import type { Product } from '@/types/product';
import { products } from '@/data/products';

/** Get a single product by its slug. */
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

/** Return only featured products. */
export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

/** Return all products. */
export function getAllProducts(): Product[] {
  return products;
}

/** Return related products (same category, excluding current). */
export function getRelatedProducts(product: Product, limit = 3): Product[] {
  return products
    .filter((p) => p.id !== product.id && p.categoryEn === product.categoryEn)
    .slice(0, limit);
}

/** Get localized product name. */
export function getProductName(product: Product, lang: Language): string {
  return lang === 'ar' ? product.nameAr : product.nameEn;
}

/** Get localized product description. */
export function getProductDescription(product: Product, lang: Language): string {
  return lang === 'ar' ? product.descriptionAr : product.descriptionEn;
}

/** Get localized category. */
export function getProductCategory(product: Product, lang: Language): string {
  return lang === 'ar' ? product.categoryAr ?? '' : product.categoryEn ?? '';
}

/** Get localized warranty. */
export function getProductWarranty(product: Product, lang: Language): string {
  return lang === 'ar' ? product.warrantyAr ?? '' : product.warrantyEn ?? '';
}

/** Get localized specifications list. */
export function getProductSpecifications(
  product: Product,
  lang: Language,
): { label: string; value: string }[] {
  return lang === 'ar'
    ? product.specificationsAr ?? []
    : product.specificationsEn ?? [];
}

/**
 * Build the public product detail URL from the configured public site URL.
 *
 * NOTE: this helper is intentionally not used by `getProductWhatsappUrl` anymore —
 * WhatsApp inquiry messages must not contain the website URL. It remains available
 * for shareable links (e.g. a future "copy link" action).
 */
export function getProductPublicUrl(product: Product): string {
  const base = siteConfig.publicUrl.replace(/\/+$/, '');
  return `${base}/products/${product.slug}`;
}

/**
 * Build a WhatsApp inquiry URL for a specific product.
 *
 * The pre-filled text contains ONLY the inquiry greeting, the product name and
 * its key specifications. No website URL / product link is ever appended.
 *
 * Output format:
 *   EN: "Hello, I would like to inquire about the product: <Name> - Specs: <Label: value, ...>"
 *   AR: "مرحباً، أود الاستفسار عن المنتج: <الاسم> - المواصفات: <Label: value, ...>"
 *
 * Products that define `whatsappMessageEn` / `whatsappMessageAr` use that text as
 * the greeting/intent (it already names the product) instead of the generic template.
 */
export function getProductWhatsappUrl(product: Product, lang: Language): string {
  const name = getProductName(product, lang);
  const customGreeting = lang === 'ar' ? product.whatsappMessageAr : product.whatsappMessageEn;

  const greeting =
    customGreeting ??
    (lang === 'ar'
      ? `مرحباً، أود الاستفسار عن المنتج: ${name}`
      : `Hello, I would like to inquire about the product: ${name}`);

  const specsLine = getProductSpecifications(product, lang)
    .map((spec) => `${spec.label}: ${spec.value}`)
    .join(', ');

  const message = specsLine
    ? `${greeting} - ${lang === 'ar' ? 'المواصفات' : 'Specs'}: ${specsLine}`
    : greeting;

  return `https://wa.me/${contactConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Build a general (non-product) WhatsApp URL with a generic inquiry message.
 */
export function getGeneralWhatsappUrl(lang: Language): string {
  const message =
    lang === 'ar'
      ? 'مرحباً، أود الاستفسار عن منتجاتكم وأسعارها. شكراً لكم.'
      : 'Hello, I would like to inquire about your products and prices. Thank you.';
  return `https://wa.me/${contactConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
