/**
 * scripts/optimize-images.mjs
 *
 * Build-time image optimization script using sharp.
 * - Converts all JPG/PNG in public/assets/images to WebP (q=80) and AVIF (q=65)
 * - Generates responsive sizes: 400, 800, 1200 px wide
 * - Originals are kept untouched in public/assets/images (source of truth)
 * - Outputs to public/assets/images-opt/ (served by Vite as /assets/images-opt/)
 *
 * Run: node scripts/optimize-images.mjs
 */

import sharp from 'sharp';
import { readdir, mkdir, stat } from 'node:fs/promises';
import { join, extname, basename, relative, dirname } from 'node:path';

const SRC_DIR = 'public/assets/images';
const OUT_DIR = 'public/assets/images-opt';

// Responsive widths to generate (px). The browser picks via srcset.
const WIDTHS = [400, 800, 1200];

// Quality settings
const WEBP_QUALITY = 80;
const AVIF_QUALITY = 65;

// File extensions to process
const ALLOWED_EXT = new Set(['.jpg', '.jpeg', '.png']);

async function getAllImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const fullPath = join(dir, e.name);
    if (e.isDirectory()) {
      const sub = await getAllImages(fullPath);
      files.push(...sub);
    } else if (ALLOWED_EXT.has(extname(e.name).toLowerCase())) {
      files.push(fullPath);
    }
  }
  return files;
}

async function ensureDir(dir) {
  await mkdir(dir, { recursive: true });
}

async function fileExists(path) {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
}

async function processImage(srcPath) {
  // Compute relative path from SRC_DIR robustly across platforms
  const rel = relative(SRC_DIR, srcPath);
  const nameNoExt = basename(rel, extname(rel));
  const subDir = dirname(rel) === '.' ? '' : dirname(rel);
  const outSubDir = join(OUT_DIR, subDir);
  await ensureDir(outSubDir);

  const img = sharp(srcPath);
  const meta = await img.metadata();
  const origWidth = meta.width ?? 1200;

  for (const w of WIDTHS) {
    const targetWidth = Math.min(w, origWidth);

    // WebP
    const webpOut = join(outSubDir, `${nameNoExt}-${w}.webp`);
    if (!(await fileExists(webpOut))) {
      await sharp(srcPath)
        .resize({ width: targetWidth, withoutEnlargement: true })
        .webp({ quality: WEBP_QUALITY })
        .toFile(webpOut);
      console.log(`  ✓ WebP ${w}px → ${webpOut}`);
    }

    // AVIF
    const avifOut = join(outSubDir, `${nameNoExt}-${w}.avif`);
    if (!(await fileExists(avifOut))) {
      await sharp(srcPath)
        .resize({ width: targetWidth, withoutEnlargement: true })
        .avif({ quality: AVIF_QUALITY })
        .toFile(avifOut);
      console.log(`  ✓ AVIF ${w}px → ${avifOut}`);
    }
  }

  // Also produce a full-resolution WebP (no width cap) for the lightbox/modal
  const webpFull = join(outSubDir, `${nameNoExt}-full.webp`);
  if (!(await fileExists(webpFull))) {
    await sharp(srcPath)
      .webp({ quality: WEBP_QUALITY })
      .toFile(webpFull);
    console.log(`  ✓ WebP full-res → ${webpFull}`);
  }
}

async function main() {
  console.log('🖼️  Starting image optimization...\n');
  const images = await getAllImages(SRC_DIR);
  console.log(`Found ${images.length} images to process.\n`);

  for (const img of images) {
    console.log(`Processing: ${img}`);
    await processImage(img);
  }

  console.log('\n✅ Image optimization complete!');
}

main().catch((err) => {
  console.error('❌ Error during image optimization:', err);
  process.exit(1);
});
