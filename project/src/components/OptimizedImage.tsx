/**
 * OptimizedImage component
 *
 * Wraps <picture> with <source type="image/avif"> + <source type="image/webp"> + <img fallback>.
 * Resolves the correct srcset paths from the /assets/images-opt/ directory.
 *
 * Usage:
 *   <OptimizedImage
 *     src="/assets/images/products/safety-battery-tubular-green.jpg"
 *     alt="SAFETY tubular battery"
 *     width={800}
 *     height={600}
 *     sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
 *     lazy      // adds loading="lazy" decoding="async" (default: true)
 *     priority  // adds fetchpriority="high" and removes lazy (for LCP images)
 *     className="..."
 *   />
 */

import React from 'react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes?: string;
  /** Set to true for LCP/hero images — adds fetchpriority="high", removes lazy */
  priority?: boolean;
  /** Defaults to true — adds loading="lazy" decoding="async" */
  lazy?: boolean;
  className?: string;
}

/**
 * Given a path like /assets/images/products/foo.jpg,
 * returns the optimised base path:  /assets/images-opt/products/foo
 */
function getOptBasePath(src: string): string | null {
  // Only handle local images in /assets/images/
  if (!src.startsWith('/assets/images/')) return null;
  const withoutExt = src.replace(/\.[^.]+$/, '');
  return withoutExt.replace('/assets/images/', '/assets/images-opt/');
}

/** Available widths produced by the optimize-images script */
const WIDTHS = [400, 800, 1200];

function buildSrcset(basePath: string, ext: 'webp' | 'avif'): string {
  return WIDTHS.map((w) => `${basePath}-${w}.${ext} ${w}w`).join(', ');
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  sizes = '100vw',
  priority = false,
  lazy = true,
  className,
  ...rest
}: OptimizedImageProps) {
  const basePath = getOptBasePath(src);
  const isLazy = !priority && lazy;

  // If the image is from an external URL (Pexels, etc.) or not in our opt directory,
  // fall back to a plain <img> with the provided src.
  if (!basePath) {
    return (
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        loading={isLazy ? 'lazy' : undefined}
        decoding={isLazy ? 'async' : undefined}
        // fetchpriority is not in standard React types yet — use data attribute cast
        {...(priority ? { fetchPriority: 'high' } : {})}
        className={className}
        {...rest}
      />
    );
  }

  return (
    <picture>
      {/* AVIF — best compression, modern browsers */}
      <source
        type="image/avif"
        srcSet={buildSrcset(basePath, 'avif')}
        sizes={sizes}
      />
      {/* WebP — wide support */}
      <source
        type="image/webp"
        srcSet={buildSrcset(basePath, 'webp')}
        sizes={sizes}
      />
      {/* Fallback JPG/PNG — original src for very old browsers */}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        loading={isLazy ? 'lazy' : undefined}
        decoding={isLazy ? 'async' : undefined}
        {...(priority ? { fetchPriority: 'high' } : {})}
        className={className}
        {...rest}
      />
    </picture>
  );
}
