/**
 * Social media links — editable from this single file.
 * Only the official accounts provided by the client are listed.
 */

export interface SocialLink {
  key: 'instagram' | 'facebook' | 'tiktok';
  url: string;
  labelEn: string;
  labelAr: string;
}

export const socialLinks: SocialLink[] = [
  {
    key: 'instagram',
    url: 'https://www.instagram.com/fars00112?utm_source=qr&stkn=MTg2YXAwZXU5cmFlYg==',
    labelEn: 'Instagram',
    labelAr: 'إنستغرام',
  },
  {
    key: 'facebook',
    url: 'https://www.facebook.com/share/19a1Ahiye9/',
    labelEn: 'Facebook',
    labelAr: 'فيسبوك',
  },
  {
    key: 'tiktok',
    url: 'https://www.tiktok.com/@fars112fars?_r=1&_t=ZS-99ya5uTpyFB',
    labelEn: 'TikTok',
    labelAr: 'تيك توك',
  },
];
