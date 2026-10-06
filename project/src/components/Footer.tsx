import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { siteConfig } from '@/config/siteConfig';
import { companyConfig } from '@/config/companyConfig';
import { contactConfig } from '@/config/contactConfig';
import SocialLinks from '@/components/SocialLinks';
import Logo from '@/components/Logo';
import { Mail, MessageCircle, MapPin } from 'lucide-react';

export default function Footer() {
  const { t, lang } = useLanguage();
  const year = new Date().getFullYear();

  const navItems = [
    { to: '/', label: t.navHome },
    { to: '/about', label: t.navAbout },
    { to: '/products', label: t.navProducts },
    { to: '/contact', label: t.navContact },
  ];

  return (
    <footer className="bg-neutral-950 text-neutral-300 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-5 group" aria-label={siteConfig.companyName}>
              <Logo size="lg" />
            </Link>
            <p className="text-sm leading-relaxed text-neutral-400 max-w-xs">
              {lang === 'ar' ? companyConfig.descriptionAr : companyConfig.descriptionEn}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {t.footerQuickLinks}
            </h3>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-neutral-400 hover:text-primary-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {t.footerContact}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`https://wa.me/${contactConfig.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-neutral-400 hover:text-primary-400 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span dir="ltr">{contactConfig.whatsappDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${contactConfig.phoneWhatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-neutral-400 hover:text-primary-400 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span dir="ltr">{contactConfig.phoneDisplay}</span>
                </a>
              </li>
              {contactConfig.emails.map((email) => (
                <li key={email}>
                  <a
                    href={`mailto:${email}`}
                    className="flex items-center gap-2 text-sm text-neutral-400 hover:text-primary-400 transition-colors break-all"
                  >
                    <Mail className="w-4 h-4 shrink-0" />
                    <span>{email}</span>
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-2 text-sm text-neutral-400">
                <MapPin className="w-4 h-4 shrink-0 text-primary-500" />
                <span>{lang === 'ar' ? contactConfig.addressAr : contactConfig.addressEn}</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {t.footerFollowUs}
            </h3>
            <SocialLinks className="mb-4" />
            {siteConfig.showLinkBioLink && siteConfig.linkBioUrl && (
              <a
                href={siteConfig.linkBioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm text-primary-400 hover:text-primary-300 transition-colors"
              >
                {t.allOurLinks}
              </a>
            )}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-neutral-800 text-center">
          <p className="text-sm text-neutral-500">
            {t.footerCopyright} {year} {siteConfig.companyName}. {t.footerRights}
          </p>
        </div>
      </div>
    </footer>
  );
}
