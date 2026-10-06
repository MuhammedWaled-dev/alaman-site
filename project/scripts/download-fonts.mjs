/**
 * scripts/download-fonts.mjs
 *
 * Downloads Inter and Noto Sans Arabic WOFF2 files from Fontsource CDN
 * (which hosts static npm packages — no API key required).
 *
 * Run once before building: node scripts/download-fonts.mjs
 * Files are saved to: public/fonts/
 *
 * Fontsource package URLs:
 *   Inter:            https://cdn.jsdelivr.net/npm/@fontsource/inter@5.1.1/files/
 *   Noto Sans Arabic: https://cdn.jsdelivr.net/npm/@fontsource/noto-sans-arabic@5.1.0/files/
 */

import { createWriteStream, mkdirSync } from 'node:fs';
import { get } from 'node:https';
import { join } from 'node:path';

const FONTS_DIR = 'public/fonts';
mkdirSync(FONTS_DIR, { recursive: true });

const FONT_FILES = [
  // ── Inter ──────────────────────────────────────────────────────────
  {
    url: 'https://cdn.jsdelivr.net/npm/@fontsource/inter@5.1.1/files/inter-latin-400-normal.woff2',
    dest: 'Inter-Regular.woff2',
  },
  {
    url: 'https://cdn.jsdelivr.net/npm/@fontsource/inter@5.1.1/files/inter-latin-500-normal.woff2',
    dest: 'Inter-Medium.woff2',
  },
  {
    url: 'https://cdn.jsdelivr.net/npm/@fontsource/inter@5.1.1/files/inter-latin-600-normal.woff2',
    dest: 'Inter-SemiBold.woff2',
  },
  {
    url: 'https://cdn.jsdelivr.net/npm/@fontsource/inter@5.1.1/files/inter-latin-700-normal.woff2',
    dest: 'Inter-Bold.woff2',
  },

  // ── Noto Sans Arabic ──────────────────────────────────────────────
  {
    url: 'https://cdn.jsdelivr.net/npm/@fontsource/noto-sans-arabic@5.1.0/files/noto-sans-arabic-arabic-400-normal.woff2',
    dest: 'NotoSansArabic-Regular.woff2',
  },
  {
    url: 'https://cdn.jsdelivr.net/npm/@fontsource/noto-sans-arabic@5.1.0/files/noto-sans-arabic-arabic-500-normal.woff2',
    dest: 'NotoSansArabic-Medium.woff2',
  },
  {
    url: 'https://cdn.jsdelivr.net/npm/@fontsource/noto-sans-arabic@5.1.0/files/noto-sans-arabic-arabic-600-normal.woff2',
    dest: 'NotoSansArabic-SemiBold.woff2',
  },
  {
    url: 'https://cdn.jsdelivr.net/npm/@fontsource/noto-sans-arabic@5.1.0/files/noto-sans-arabic-arabic-700-normal.woff2',
    dest: 'NotoSansArabic-Bold.woff2',
  },
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const filePath = join(FONTS_DIR, dest);
    const file = createWriteStream(filePath);

    const req = (u) =>
      get(u, (res) => {
        // Follow redirects
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          file.destroy();
          return req(res.headers.location);
        }
        if (res.statusCode !== 200) {
          file.destroy();
          return reject(new Error(`HTTP ${res.statusCode} for ${u}`));
        }
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`  ✓ ${dest}`);
          resolve();
        });
      });

    req(url);
    file.on('error', reject);
  });
}

async function main() {
  console.log('⬇️  Downloading font files...\n');
  for (const { url, dest } of FONT_FILES) {
    try {
      await download(url, dest);
    } catch (err) {
      console.error(`  ✗ Failed: ${dest} — ${err.message}`);
    }
  }
  console.log('\n✅ Font download complete!');
}

main();
