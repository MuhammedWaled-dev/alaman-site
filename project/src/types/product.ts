/**
 * Product type definitions.
 * Optional fields are marked with `?` so missing specs are omitted, not invented.
 */

export interface Product {
  id: number;
  slug: string;
  nameAr: string;
  nameEn: string;
  descriptionAr: string;
  descriptionEn: string;
  image: string;
  additionalImages?: string[];
  categoryAr?: string;
  categoryEn?: string;
  powerWatts?: number;
  efficiency?: string;
  warrantyAr?: string;
  warrantyEn?: string;
  /**
   * Optional product-specific pre-filled WhatsApp inquiry message.
   * When omitted, the generic template in `getProductWhatsappUrl` is used.
   */
  whatsappMessageAr?: string;
  whatsappMessageEn?: string;
  specificationsAr?: { label: string; value: string }[];
  specificationsEn?: { label: string; value: string }[];
  featured?: boolean;
}
