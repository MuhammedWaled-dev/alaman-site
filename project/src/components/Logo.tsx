import React from 'react';
import { siteConfig } from '@/config/siteConfig';

interface LogoProps {
  variant?: 'full' | 'shield';
  size?: 'sm' | 'md' | 'lg' | 'header' | 'section';
  className?: string;
}

export default function Logo({
  variant = 'full',
  size = 'md',
  className = '',
}: LogoProps) {
  const logoSrc =
    variant === 'shield'
      ? '/assets/images/safety-shield.png'
      : '/assets/images/safety-logo.png';

  const sizeClasses = {
    sm: 'h-7 sm:h-8',
    md: 'h-9 sm:h-10 md:h-11',
    header: 'h-14 sm:h-16 md:h-20 lg:h-22 xl:h-24',
    section: 'h-14 sm:h-16 md:h-18 lg:h-20',
    lg: 'h-11 sm:h-13 lg:h-15 xl:h-16',
  }[size];

  /*
   * Explicit width/height prevents CLS (layout shift) while the image loads.
   * The logo PNG is 57 KB — it loads quickly, but the browser still needs
   * intrinsic dimensions to reserve the correct space before paint.
   *
   * safety-logo.png  natural size: ~400×120  → aspect ratio ≈ 3.33:1
   * safety-shield.png natural size: ~120×120 → aspect ratio = 1:1
   */
  const [naturalW, naturalH] =
    variant === 'shield' ? [120, 120] : [400, 120];

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src={logoSrc}
        alt={siteConfig.companyName}
        width={naturalW}
        height={naturalH}
        className={`${sizeClasses} w-auto object-contain transition-transform duration-200 group-hover:scale-105 filter drop-shadow-sm`}
        loading="eager"
        decoding="sync"
        fetchPriority="high"
      />
    </div>
  );
}
