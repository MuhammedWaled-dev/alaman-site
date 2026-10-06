import { useLanguage } from '@/i18n/LanguageContext';
import { contactConfig } from '@/config/contactConfig';
import Seo from '@/components/Seo';
import SocialLinks from '@/components/SocialLinks';
import Logo from '@/components/Logo';
import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const { t, lang } = useLanguage();
  const address = lang === 'ar' ? contactConfig.addressAr : contactConfig.addressEn;

  return (
    <>
      <Seo title={t.navContact} description={t.contactSubtitle} />

      {/* Banner */}
      <section className="bg-neutral-950 py-16 md:py-24 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-5">
            <Logo variant="shield" size="section" className="filter drop-shadow-md" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white text-balance">
            {t.contactTitle}
          </h1>
          <p className="mt-4 text-lg text-neutral-400 max-w-2xl mx-auto">
            {t.contactSubtitle}
          </p>
          <div className="mt-6 flex justify-center items-center gap-1.5">
            <span className="block w-12 h-1 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 shadow-sm" />
            <span className="block w-2 h-2 rounded-full bg-neutral-600" />
          </div>
        </div>
      </section>

      {/* Contact info */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* WhatsApp */}
            <a
              href={`https://wa.me/${contactConfig.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-6 rounded-2xl border border-neutral-200 hover:border-primary-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#25D366]/10 text-[#1da851] shrink-0">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-neutral-900">
                  {t.contactWhatsappLabel}
                </h3>
                <p className="mt-1 text-sm text-neutral-500" dir="ltr">
                  {contactConfig.whatsappDisplay}
                </p>
              </div>
            </a>

            {/* Phone (WhatsApp 2) */}
            <a
              href={`https://wa.me/${contactConfig.phoneWhatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-6 rounded-2xl border border-neutral-200 hover:border-primary-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-50 text-primary-600 shrink-0">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-neutral-900">
                  {t.contactPhoneLabel}
                </h3>
                <p className="mt-1 text-sm text-neutral-500" dir="ltr">
                  {contactConfig.phoneDisplay}
                </p>
              </div>
            </a>

            {/* Emails */}
            {contactConfig.emails.map((email) => (
              <a
                key={email}
                href={`mailto:${email}`}
                className="flex items-start gap-4 p-6 rounded-2xl border border-neutral-200 hover:border-primary-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-50 text-primary-600 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base font-semibold text-neutral-900">
                    {t.contactEmailLabel}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-500 break-all">{email}</p>
                </div>
              </a>
            ))}

            {/* Address */}
            <div className="flex items-start gap-4 p-6 rounded-2xl border border-neutral-200 hover:border-primary-200 hover:shadow-lg transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-50 text-primary-600 shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-neutral-900">
                  {t.contactAddressLabel}
                </h3>
                <p className="mt-1 text-sm text-neutral-600 font-medium">
                  {address}
                </p>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="mt-12 text-center">
            <h3 className="text-lg font-semibold text-neutral-900 mb-4">
              {t.contactSocialLabel}
            </h3>
            <div className="flex justify-center">
              <SocialLinks iconSize="md" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
