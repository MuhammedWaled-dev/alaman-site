/**
 * Central site configuration.
 * Update these values when the client supplies final details.
 */

export const siteConfig = {
  /** Company name shown across the site */
  companyName: 'SAFETY',

  /** Default language code used on first visit with no saved preference */
  defaultLanguage: 'ar' as 'ar' | 'en',

  /**
   * Final public website URL.
   * PLACEHOLDER — replace with the real production domain once provided.
   * Used by `getProductPublicUrl()` to build shareable product links.
   * (WhatsApp inquiry messages intentionally do NOT include this URL.)
   */
  publicUrl: 'https://alaman.site',

  /**
   * Link.bio URL.
   * PLACEHOLDER — replace with the real Link.bio URL once provided.
   * Leave as empty string to hide the "All Our Links" link entirely.
   */
  linkBioUrl: '',

  /** Show or hide the optional "All Our Links" (Link.bio) link */
  showLinkBioLink: false,
};

export type SiteConfig = typeof siteConfig;
