import { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import type { Product } from '@/types/product';
import {
  getProductName,
  getProductDescription,
  getProductWhatsappUrl,
  getProductCategory,
} from '@/utils/productHelpers';
import ProductModal from '@/components/ProductModal';
import OptimizedImage from '@/components/OptimizedImage';
import { MessageCircle, ArrowRight, ArrowLeft } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { lang, t, dir } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const name = getProductName(product, lang);
  const description = getProductDescription(product, lang);
  const category = getProductCategory(product, lang);
  const whatsappUrl = getProductWhatsappUrl(product, lang);
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <>
      <div className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-neutral-200 transition-all duration-300 hover:shadow-xl hover:border-primary-200 h-full">
        {/* Image (Click opens modal) */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="relative block aspect-[4/3] w-full overflow-hidden bg-neutral-100 shrink-0 text-left rtl:text-right cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
          aria-label={name}
        >
          {product.image ? (
            <OptimizedImage
              src={product.image}
              alt={name}
              width={940}
              height={705}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              lazy
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-neutral-300">
              <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          )}
          {category && (
            <span className="absolute top-3 ltr:left-3 rtl:right-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm text-xs font-semibold text-primary-700 shadow-sm">
              {category}
            </span>
          )}
        </button>

        {/* Body */}
        <div className="flex flex-col flex-1 p-5">
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-left rtl:text-right cursor-pointer focus:outline-none"
          >
            <h3 className="text-lg font-bold text-neutral-900 line-clamp-2 leading-snug hover:text-primary-700 transition-colors">
              {name}
            </h3>
          </button>
          <p className="mt-2 text-sm text-neutral-500 line-clamp-2 leading-relaxed flex-1">
            {description}
          </p>

          {/* Actions */}
          <div className="mt-5 flex items-center gap-2 pt-2 border-t border-neutral-100">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl text-sm font-semibold text-primary-700 bg-primary-50 hover:bg-primary-100 transition-colors focus-visible:ring-2 focus-visible:ring-primary-500 cursor-pointer"
            >
              <span>{t.viewDetails}</span>
              <ArrowIcon className="w-4 h-4 shrink-0" />
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t.inquireWhatsapp} — ${name}`}
              className="shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-xl text-white bg-[#25D366] hover:bg-[#1da851] transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-green-500"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* In-page Product Modal */}
      {isModalOpen && (
        <ProductModal product={product} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
}
