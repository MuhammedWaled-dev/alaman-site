import { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { getGeneralWhatsappUrl } from '@/utils/productHelpers';
import { MessageCircle, X } from 'lucide-react';

export default function FloatingWhatsApp() {
  const { lang, t } = useLanguage();
  const [showTooltip, setShowTooltip] = useState(true);
  const whatsappUrl = getGeneralWhatsappUrl(lang);

  return (
    <div className="fixed bottom-6 ltr:right-6 rtl:left-6 z-50 flex flex-col items-end rtl:items-start group">
      {/* Tooltip Card */}
      {showTooltip && (
        <div className="mb-3 max-w-xs p-3.5 rounded-2xl bg-white text-neutral-800 shadow-2xl border border-neutral-100 flex items-start gap-3 animate-fade-in relative">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-2 ltr:-right-2 rtl:-left-2 w-5 h-5 rounded-full bg-neutral-200 text-neutral-600 hover:bg-neutral-300 flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="w-2.5 h-2.5 rounded-full bg-green-500 mt-1 shrink-0 animate-ping" />
          <div className="text-xs">
            <p className="font-semibold text-neutral-900 mb-0.5">SAFETY Solar</p>
            <p className="text-neutral-500 leading-snug">{t.whatsappTooltip}</p>
          </div>
        </div>
      )}

      {/* Main Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.contactWhatsapp}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#1da851] hover:scale-110 active:scale-95 transition-all duration-300 focus-visible:ring-4 focus-visible:ring-green-400"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute -top-1 ltr:-right-1 rtl:-left-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-green-400 border-2 border-white"></span>
        </span>
      </a>
    </div>
  );
}
