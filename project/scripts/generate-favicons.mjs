import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'node:fs';

async function generate() {
  const svgBuffer = readFileSync('public/favicon.svg');

  // Generate 16x16 PNG
  await sharp(svgBuffer).resize(16, 16).png().toFile('public/favicon-16x16.png');
  // Generate 32x32 PNG
  await sharp(svgBuffer).resize(32, 32).png().toFile('public/favicon-32x32.png');
  // Generate 180x180 Apple touch icon
  await sharp(svgBuffer).resize(180, 180).png().toFile('public/apple-touch-icon.png');
  // Generate 192x192 PWA icon
  await sharp(svgBuffer).resize(192, 192).png().toFile('public/icon-192x192.png');
  // Generate 512x512 PWA icon
  await sharp(svgBuffer).resize(512, 512).png().toFile('public/icon-512x512.png');

  // Copy 32x32 PNG as favicon.ico (modern browsers accept PNG format inside or as favicon.ico)
  const png32 = await sharp(svgBuffer).resize(32, 32).png().toBuffer();
  writeFileSync('public/favicon.ico', png32);

  // Generate 1200x630 OG image
  // Use op_4_transport_truck as background with brand overlay & logo
  try {
    const bg = await sharp('public/assets/images/operations/op_4_transport_truck.jpg')
      .resize(1200, 630, { fit: 'cover' })
      .modulate({ brightness: 0.65 })
      .toBuffer();

    const logo = await sharp('public/assets/images/safety-logo.png')
      .resize(400, null, { fit: 'inside' })
      .toBuffer();

    await sharp(bg)
      .composite([
        {
          input: logo,
          gravity: 'center'
        }
      ])
      .jpeg({ quality: 85 })
      .toFile('public/og-image.jpg');

    console.log('✅ Generated og-image.jpg (1200x630)');
  } catch (err) {
    console.error('Failed to create composite og-image, using solid background fallback:', err);
    await sharp({
      create: {
        width: 1200,
        height: 630,
        channels: 3,
        background: { r: 234, g: 88, b: 12 }
      }
    })
      .jpeg({ quality: 85 })
      .toFile('public/og-image.jpg');
  }

  console.log('✅ Generated all favicons and og-image!');
}

generate().catch(console.error);
