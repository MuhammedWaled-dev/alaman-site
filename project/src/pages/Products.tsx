import { useLanguage } from '@/i18n/LanguageContext';
import { getAllProducts } from '@/utils/productHelpers';
import Seo from '@/components/Seo';
import ProductCard from '@/components/ProductCard';
import Logo from '@/components/Logo';
import { PackageOpen } from 'lucide-react';

export default function Products() {
  const { t } = useLanguage();
  const products = getAllProducts();

  return (
    <>
      <Seo title={t.navProducts} description={t.productsSubtitle} />

      {/* Banner */}
      <section className="bg-neutral-950 py-16 md:py-24 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-5">
            <Logo variant="shield" size="section" className="filter drop-shadow-md" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white text-balance">
            {t.productsTitle}
          </h1>
          <p className="mt-4 text-lg text-neutral-400 max-w-2xl mx-auto">
            {t.productsSubtitle}
          </p>
          <div className="mt-6 flex justify-center items-center gap-1.5">
            <span className="block w-12 h-1 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 shadow-sm" />
            <span className="block w-2 h-2 rounded-full bg-neutral-600" />
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 md:py-24 bg-neutral-50 min-h-[50vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border border-neutral-200 shadow-sm max-w-xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-neutral-100 text-neutral-400 mb-6">
                <PackageOpen className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-2">
                {t.noProductsTitle}
              </h2>
              <p className="text-neutral-500 max-w-md mx-auto">{t.noProductsBody}</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
