import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import Seo from '@/components/Seo';
import { Home } from 'lucide-react';

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <>
      <Seo title={t.notFoundTitle} />
      <section className="py-20 md:py-32 bg-neutral-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-7xl md:text-8xl font-bold text-primary-200">404</p>
          <h1 className="mt-4 text-3xl font-bold text-neutral-900">
            {t.notFoundTitle}
          </h1>
          <p className="mt-4 text-lg text-neutral-500">{t.notFoundBody}</p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors"
          >
            <Home className="w-5 h-5" />
            {t.notFoundHome}
          </Link>
        </div>
      </section>
    </>
  );
}
