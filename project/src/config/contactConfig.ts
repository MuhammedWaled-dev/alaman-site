/**
 * Contact details — all values editable from this single file.
 */

export const contactConfig = {
  /** Official company WhatsApp number (normalized, country code + number, no +) */
  whatsappNumber: '963936143777',

  /** Display version of the WhatsApp number */
  whatsappDisplay: '+963 936 143 777',

  /** Phone number (WhatsApp 2) */
  phoneDisplay: '+963 969 757 904',
  phoneTel: '963969757904',
  phoneWhatsappNumber: '963969757904',

  /** Email addresses */
  emails: ['farisdarwish8609@gmail.com', 'daeoeshfares@gmail.com'],

  /** Physical address */
  addressAr: 'سرمدا، سوريا',
  addressEn: 'Sarmada, Syria',
};

export type ContactConfig = typeof contactConfig;
