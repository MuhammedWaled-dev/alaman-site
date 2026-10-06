import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { getFeaturedProducts } from '@/utils/productHelpers';
import Seo from '@/components/Seo';
import SectionHeading from '@/components/SectionHeading';
import ProductCard from '@/components/ProductCard';
import WhatsAppButton from '@/components/WhatsAppButton';
import OperationsSection from '@/components/OperationsSection';
import Logo from '@/components/Logo';
import OptimizedImage from '@/components/OptimizedImage';
import { ArrowRight, ArrowLeft, ShieldCheck, Headphones, MessageCircle } from 'lucide-react';

export default function Home() {
  const { t, lang, dir } = useLanguage();
  const featured = getFeaturedProducts();
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  // Hero image — original solar panel installation, self-hosted and optimized
  const heroSrc = '/assets/images/hero-solar.jpg';

  return (
    <>
      <Seo title={t.navHome} description={t.heroDescription} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-neutral-950">
        <div className="absolute inset-0">
          {/* LCP image — priority, no lazy loading, WebP/AVIF srcset */}
          <OptimizedImage
            src={heroSrc}
            alt={lang === 'ar' ? 'تركيب ألواح طاقة شمسية' : 'Solar panels installation'}
            width={1600}
            height={900}
            sizes="100vw"
            priority
            lazy={false}
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-neutral-950/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/15 border border-primary-500/30 text-primary-400 text-sm font-semibold mb-6 shadow-sm backdrop-blur-sm">
              <Logo variant="shield" size="sm" />
              {lang === 'ar' ? 'طاقة شمسية وبديلة' : 'Solar & Alternative Energy'}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
              {t.heroHeadline}
            </h1>
            <p className="mt-6 text-lg text-neutral-300 leading-relaxed max-w-xl">
              {t.heroDescription}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900"
              >
                {t.exploreProducts}
                <ArrowIcon className="w-5 h-5" />
              </Link>
              <WhatsAppButton variant="secondary" size="lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <SectionHeading
                title={t.introTitle}
                center={false}
                className="!mx-0"
              />
              <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
                {t.introBody}
              </p>
              <Link
                to="/about"
                className="mt-6 inline-flex items-center gap-2 text-primary-700 font-semibold hover:text-primary-800 transition-colors"
              >
                {t.learnMore}
                <ArrowIcon className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                {/* Below-the-fold image — lazy loaded, local file */}
                <OptimizedImage
                  src="/assets/images/intro-solar.jpg"
                  alt={lang === 'ar' ? 'ألواح شمسية على أسطح المنازل' : 'Solar panels on residential roofs'}
                  width={940}
                  height={705}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  lazy
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t.featuredTitle} subtitle={t.featuredSubtitle} />
          {featured.length > 0 ? (
            <>
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {featured.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              <div className="mt-10 text-center">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-primary-600 text-primary-700 font-semibold hover:bg-primary-50 transition-colors"
                >
                  {t.viewAllProducts}
                  <ArrowIcon className="w-5 h-5" />
                </Link>
              </div>
            </>
          ) : (
            <p className="mt-8 text-center text-neutral-500">{t.noProductsBody}</p>
          )}
        </div>
      </section>

      {/* Value Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t.valueTitle} subtitle={t.valueSubtitle} />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: t.value1Title, body: t.value1Body },
              { icon: Headphones, title: t.value2Title, body: t.value2Body },
              { icon: MessageCircle, title: t.value3Title, body: t.value3Body },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl border border-neutral-200 hover:border-primary-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-50 text-primary-600 mb-5">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">{item.title}</h3>
                <p className="text-neutral-500 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supply & Operations */}
      <OperationsSection />

      {/* Contact CTA */}
      <section className="py-16 md:py-20 bg-primary-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-balance">
            {t.ctaTitle}
          </h2>
          <p className="mt-4 text-lg text-primary-100 leading-relaxed">
            {t.ctaBody}
          </p>
          <div className="mt-8 flex justify-center">
            <WhatsAppButton variant="secondary" size="lg" />
          </div>
        </div>
      </section>
    </>
  );
}
