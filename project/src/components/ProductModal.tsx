import { useState, useEffect } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import type { Product } from '@/types/product';
import {
  getProductName,
  getProductDescription,
  getProductCategory,
  getProductWarranty,
  getProductSpecifications,
  getProductWhatsappUrl,
} from '@/utils/productHelpers';
import Logo from '@/components/Logo';
import {
  X,
  MessageCircle,
  Zap,
  Gauge,
  ShieldCheck,
} from 'lucide-react';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const { lang, t, dir } = useLanguage();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Lock body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Listen for Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const name = getProductName(product, lang);
  const description = getProductDescription(product, lang);
  const category = getProductCategory(product, lang);
  const warranty = getProductWarranty(product, lang);
  const specs = getProductSpecifications(product, lang);
  const whatsappUrl = getProductWhatsappUrl(product, lang);
  const allImages = [product.image, ...(product.additionalImages ?? [])].filter(Boolean);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-neutral-950/75 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 md:p-6 overflow-y-auto animate-fade-in cursor-pointer"
      dir={dir}
    >
      {/* Modal Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden max-h-[90vh] flex flex-col my-auto cursor-default animate-fade-up"
      >
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 bg-neutral-50/80 shrink-0">
          <div className="flex items-center gap-2">
            <Logo variant="shield" size="sm" />
            {category && (
              <span className="px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-bold border border-primary-100">
                {category}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-neutral-200/80 hover:bg-neutral-300 text-neutral-700 transition-colors focus-visible:ring-2 focus-visible:ring-primary-500"
              aria-label={t.navClose}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body Content (Scrollable) */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {/* Images Gallery */}
            <div>
              <div className="aspect-square rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200 shadow-inner">
                {allImages[activeImageIndex] ? (
                  <img
                    src={allImages[activeImageIndex]}
                    alt={name}
                    className="w-full h-full object-cover transition-all duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-neutral-300">
                    <svg
                      className="w-16 h-16"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                )}
              </div>

              {/* Thumbnails */}
              {allImages.length > 1 && (
                <div className="mt-4 grid grid-cols-5 gap-2.5">
                  {allImages.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImageIndex(i)}
                      className={`aspect-square rounded-xl overflow-hidden bg-neutral-100 border-2 transition-all ${
                        activeImageIndex === i
                          ? 'border-primary-600 scale-105 shadow-md'
                          : 'border-neutral-200 hover:border-neutral-300 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${name} ${i + 1}`}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Details Info */}
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 leading-tight">
                  {name}
                </h2>

                {/* Key Badges */}
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {product.powerWatts != null && (
                    <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-neutral-50 border border-neutral-200">
                      <Zap className="w-4 h-4 text-primary-600 shrink-0" />
                      <div>
                        <span className="block text-[11px] text-neutral-400 font-medium">
                          {t.powerWatts}
                        </span>
                        <span className="block text-xs font-bold text-neutral-800">
                          {product.powerWatts}W
                        </span>
                      </div>
                    </div>
                  )}
                  {product.efficiency && (
                    <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-neutral-50 border border-neutral-200">
                      <Gauge className="w-4 h-4 text-primary-600 shrink-0" />
                      <div>
                        <span className="block text-[11px] text-neutral-400 font-medium">
                          {t.efficiency}
                        </span>
                        <span className="block text-xs font-bold text-neutral-800">
                          {product.efficiency}
                        </span>
                      </div>
                    </div>
                  )}
                  {warranty && (
                    <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-neutral-50 border border-neutral-200">
                      <ShieldCheck className="w-4 h-4 text-primary-600 shrink-0" />
                      <div>
                        <span className="block text-[11px] text-neutral-400 font-medium">
                          {t.warranty}
                        </span>
                        <span className="block text-xs font-bold text-neutral-800">
                          {warranty}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Description */}
                <div className="mt-6">
                  <h3 className="text-sm font-bold text-neutral-900 mb-2">
                    {t.productDescription}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>

              {/* WhatsApp CTA Action */}
              <div className="mt-8 pt-6 border-t border-neutral-100">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#25D366] text-white font-bold text-base hover:bg-[#1da851] transition-all shadow-lg hover:shadow-green-500/20 focus-visible:ring-4 focus-visible:ring-green-400"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>{t.inquireWhatsapp}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Specifications Table */}
          {specs.length > 0 && (
            <div className="pt-4 border-t border-neutral-200">
              <h3 className="text-lg font-bold text-neutral-900 mb-4">
                {t.productSpecifications}
              </h3>
              <div className="overflow-hidden rounded-2xl border border-neutral-200 shadow-sm">
                <table className="w-full text-left rtl:text-right">
                  <tbody>
                    {specs.map((spec, i) => (
                      <tr
                        key={i}
                        className={i % 2 === 0 ? 'bg-neutral-50/70' : 'bg-white'}
                      >
                        <td className="px-5 py-3 text-xs sm:text-sm font-semibold text-neutral-600 w-1/3 border-b border-neutral-100">
                          {spec.label}
                        </td>
                        <td className="px-5 py-3 text-xs sm:text-sm font-medium text-neutral-900 border-b border-neutral-100">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
