# SAFETY — Solar Energy Website

A professional, bilingual (Arabic/English) corporate website for SAFETY, a company specializing in solar panels and alternative energy equipment. Built with React, TypeScript, Vite, Tailwind CSS, and React Router.

## Features

- Bilingual support (Arabic default, English) with full RTL/LTR layout switching
- Responsive design (mobile, tablet, laptop, desktop)
- Product catalog with detail pages
- WhatsApp integration for product inquiries
- Contact page with social media links
- SEO-ready (meta tags, sitemap, robots.txt, favicon)
- Accessible (keyboard navigation, semantic HTML, reduced-motion support)
- No prices displayed — inquiries go through WhatsApp
- Centralized configuration for all editable content

## Technology Stack

- React 18 + TypeScript
- Vite (build tool)
- Tailwind CSS (styling)
- React Router (routing)
- Lucide React (icons)

## Installation

```bash
npm install
```

## Running Locally

```bash
npm run dev
```

The site runs at `http://localhost:5173`.

## Production Build

```bash
npm run build
```

Output is in the `dist/` folder. Preview it with:

```bash
npm run preview
```

## Project Structure

```
src/
  components/    # Reusable UI components (Header, Footer, ProductCard, etc.)
  pages/         # Page components (Home, About, Products, etc.)
  data/          # Central product data file
  i18n/          # Translations and language context
  config/        # Site, company, contact, and social config
  types/         # TypeScript type definitions
  utils/         # Helper functions (product queries, WhatsApp URLs)
  index.css      # Global styles
public/
  assets/images/ # Brand logo + product photos (products/) + operations photos
  favicon.svg    # Site favicon
  robots.txt     # SEO robots file
  sitemap.xml    # SEO sitemap
```

## How to Add Products

Edit `src/data/products.ts`. Each product has this shape:

```ts
{
  id: 7,                              // unique number
  slug: 'product-slug',               // unique URL slug (no spaces)
  nameAr: 'اسم المنتج بالعربية',
  nameEn: 'Product Name in English',
  descriptionAr: 'وصف المنتج',
  descriptionEn: 'Product description',
  image: 'https://...',                // main image URL
  additionalImages: ['https://...'],  // optional, more images
  categoryAr: 'فئة',
  categoryEn: 'Category',
  powerWatts: 450,                     // optional
  efficiency: '21.5%',                // optional
  warrantyAr: '25 سنة',               // optional
  warrantyEn: '25 years',            // optional
  specificationsAr: [{ label: '...', value: '...' }],  // optional
  specificationsEn: [{ label: '...', value: '...' }],  // optional
  whatsappMessageAr: 'مرحباً، أود الاستفسار عن ...',   // optional, custom WhatsApp inquiry text
  whatsappMessageEn: 'Hello, I would like to ...',    // optional, falls back to a generic template
  featured: true,                     // optional, shows on homepage
}
```

Optional fields can be omitted — the UI will hide them automatically. No prices are shown.

## How to Edit Product Specifications

In `src/data/products.ts`, edit the `specificationsAr` and `specificationsEn` arrays. Each entry is `{ label, value }`. The label and value appear in a table on the product detail page.

## How to Replace Product Images

In `src/data/products.ts`, set the `image` field to the URL of the new image. For multiple images, add URLs to the `additionalImages` array. Use client-supplied images when available.

For locally stored photos, place the file in `public/assets/images/products/` and reference it as `/assets/images/products/<file-name>.jpg` — for example `image: '/assets/images/products/safety-lifepo4-314ah.jpg'`.

## How to Replace the Company Logo

The logo is currently a text wordmark with a sun icon in the Header and Footer components. To replace:

1. Add your logo image to `public/` (e.g., `public/logo.svg`)
2. Edit `src/components/Header.tsx` and `src/components/Footer.tsx` — replace the `<Sun>` icon + text with an `<img src="/logo.svg" alt="SAFETY" />`

## How to Change Brand Colors

Edit `tailwind.config.js` under `theme.extend.colors.primary`. The current primary is a green palette. Change the hex values to match the official brand colors. The `accent` color (gold) is also available.

## How to Edit Arabic and English Translations

Edit `src/i18n/translations.ts`. All UI strings (navigation, headings, buttons, footer, error messages, etc.) are defined here in both `ar` and `en` objects. Change the text in both languages.

## How to Update Company Information

Edit `src/config/companyConfig.ts`:
- `name` / `nameAr` — company name
- `descriptionEn` / `descriptionAr` — company description (replace placeholders)
- `focusEn` / `focusAr` — business focus bullet points

## How to Update WhatsApp

Edit `src/config/contactConfig.ts`:
- `whatsappNumber` — normalized number (country code + number, no `+`)
- `whatsappDisplay` — how the number appears on screen

## How to Update Social Media Links

Edit `src/config/socialLinks.ts`. Each link has a `url`, `labelEn`, and `labelAr`. Only the official accounts should be listed.

## How to Add the Company Address

Edit `src/config/contactConfig.ts`:
- Set `addressAr` and `addressEn` to the real address (currently empty — the contact page shows a placeholder)

## How to Configure the Final Public Website URL

Edit `src/config/siteConfig.ts`:
- Set `publicUrl` to the production domain (e.g., `https://safety-solar.com`)
- This URL is used by `getProductPublicUrl()` to build shareable product links.
  It is intentionally NOT appended to WhatsApp inquiry messages — those contain only
  the product name and its key specifications (`getProductWhatsappUrl()`).

## How to Configure the Link.bio URL

Edit `src/config/siteConfig.ts`:
- Set `linkBioUrl` to the real Link.bio URL
- Set `showLinkBioLink` to `true` to show the "All Our Links" link in the footer

The site works fine without a Link.bio URL — the link is hidden until configured.

## How to Deploy the Website

This is a static site — deploy the `dist/` folder to any static host:

- **Netlify**: Drag the `dist/` folder to Netlify Drop, or connect the repo
- **Vercel**: Import the repo, set the framework to Vite
- **GitHub Pages**: Push `dist/` contents to the `gh-pages` branch

For SPA routing, ensure the host redirects all routes to `index.html` (Netlify and Vercel do this automatically; for others, add a rewrite rule).

## How to Test the Final Production Version

```bash
npm run build
npm run preview
```

Check:
- All pages load (Home, About, Products, Product Details, Contact)
- Language switching works (Arabic/English)
- RTL layout is correct in Arabic
- Mobile menu opens and closes
- WhatsApp links open with the correct message
- Product detail pages load for each product slug
- 404 page appears for invalid URLs
- No horizontal scroll on mobile

## Current Placeholders (to be replaced by client)

- Company description (`src/config/companyConfig.ts`)
- Product catalog (`src/data/products.ts`) — sample products only
- Physical address (`src/config/contactConfig.ts`) — empty
- Production domain (`src/config/siteConfig.ts`) — placeholder URL
- Link.bio URL (`src/config/siteConfig.ts`) — empty
- Logo — text wordmark with sun icon (no official logo yet)
- Sitemap URLs (`public/sitemap.xml`) — placeholder domain
