import { useLanguage } from '@/i18n/LanguageContext';
import { companyConfig } from '@/config/companyConfig';
import Seo from '@/components/Seo';
import SectionHeading from '@/components/SectionHeading';
import WhatsAppButton from '@/components/WhatsAppButton';
import OperationsSection from '@/components/OperationsSection';
import Logo from '@/components/Logo';
import { ShieldCheck, Zap, Wrench } from 'lucide-react';

export default function About() {
  const { t, lang } = useLanguage();
  const focus = lang === 'ar' ? companyConfig.focusAr : companyConfig.focusEn;
  const description = lang === 'ar' ? companyConfig.descriptionAr : companyConfig.descriptionEn;
  const focusIcons = [ShieldCheck, Zap, Wrench];

  return (
    <>
      <Seo title={t.navAbout} description={description} />

      {/* Hero banner */}
      <section className="bg-neutral-950 py-16 md:py-24 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-5">
            <Logo variant="shield" size="section" className="filter drop-shadow-md" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white text-balance">
            {t.aboutTitle}
          </h1>
          <div className="mt-6 flex justify-center items-center gap-1.5">
            <span className="block w-12 h-1 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 shadow-sm" />
            <span className="block w-2 h-2 rounded-full bg-neutral-600" />
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg md:text-xl text-neutral-600 leading-relaxed text-balance">
            {t.aboutDescription}
          </p>
        </div>
      </section>

      {/* Operations gallery */}
      <OperationsSection />

      {/* Focus areas */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t.aboutFocusTitle} />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {focus.map((item, i) => {
              const Icon = focusIcons[i] ?? ShieldCheck;
              return (
                <div
                  key={i}
                  className="p-8 rounded-2xl bg-white border border-neutral-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-50 text-primary-600 mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <p className="text-lg font-medium text-neutral-800 leading-relaxed">
                    {item}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-neutral-900 text-balance">
            {t.ctaTitle}
          </h2>
          <p className="mt-4 text-lg text-neutral-500">{t.ctaBody}</p>
          <div className="mt-8 flex justify-center">
            <WhatsAppButton variant="primary" size="lg" />
          </div>
        </div>
      </section>
    </>
  );
}
