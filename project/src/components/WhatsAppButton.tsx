import { useLanguage } from '@/i18n/LanguageContext';
import { contactConfig } from '@/config/contactConfig';
import { getGeneralWhatsappUrl, getProductBySlug, getProductWhatsappUrl } from '@/utils/productHelpers';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  productSlug?: string;
  className?: string;
}

export default function WhatsAppButton({
  variant = 'primary',
  size = 'md',
  productSlug,
  className = '',
}: WhatsAppButtonProps) {
  const { lang, t } = useLanguage();
  const product = productSlug ? getProductBySlug(productSlug) : undefined;
  const href = product ? getProductWhatsappUrl(product, lang) : getGeneralWhatsappUrl(lang);

  const base =
    'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2';

  const variants = {
    primary: 'bg-[#25D366] text-white hover:bg-[#1da851]',
    secondary: 'bg-neutral-900 text-white hover:bg-neutral-800',
    outline:
      'border-2 border-[#25D366] text-[#1da851] hover:bg-[#25D366] hover:text-white',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-base',
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${t.contactWhatsapp} — ${contactConfig.whatsappDisplay}`}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      <MessageCircle className={size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} />
      <span>{t.contactWhatsapp}</span>
    </a>
  );
}
