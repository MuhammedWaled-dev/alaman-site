import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { siteConfig } from '@/config/siteConfig';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import WhatsAppButton from '@/components/WhatsAppButton';
import Logo from '@/components/Logo';
import { Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Header() {
  const { t, dir } = useLanguage();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const ChevronIcon = dir === 'rtl' ? ChevronLeft : ChevronRight;

  // Track scroll position for dynamic sticky header elevation (rAF throttled)
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [mobileOpen]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  const navItems = [
    { to: '/', label: t.navHome },
    { to: '/about', label: t.navAbout },
    { to: '/products', label: t.navProducts },
    { to: '/contact', label: t.navContact },
  ];

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
          scrolled
            ? 'border-b border-neutral-200 shadow-md'
            : 'border-b border-neutral-200/80 shadow-sm'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
          <div className="flex items-center justify-between min-h-[80px] sm:min-h-[92px] lg:min-h-[108px] py-2 sm:py-3">
            {/* Official SAFETY Logo */}
            <Link
              to="/"
              className="flex items-center shrink-0 group py-1 pr-3 rtl:pl-3"
              aria-label={siteConfig.companyName}
            >
              <Logo size="header" />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-2 lg:gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`px-4 py-2.5 rounded-xl text-base font-bold transition-all duration-200 ${
                    isActive(item.to)
                      ? 'text-primary-700 bg-primary-50 shadow-sm'
                      : 'text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100/70'
                  }`}
                  aria-current={isActive(item.to) ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              <LanguageSwitcher />

              <div className="hidden sm:block">
                <WhatsAppButton size="sm" />
              </div>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setMobileOpen((prev) => !prev)}
                className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl text-neutral-800 bg-neutral-100 hover:bg-neutral-200 active:scale-95 transition-all focus-visible:ring-2 focus-visible:ring-primary-500"
                aria-expanded={mobileOpen}
                aria-label={mobileOpen ? t.navClose : t.navMenu}
              >
                {mobileOpen ? <X className="w-6 h-6 text-neutral-900" /> : <Menu className="w-6 h-6 text-neutral-900" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Panel & Overlay */}
      {mobileOpen && (
        <div className="lg:hidden">
          {/* Dark Backdrop starting right below header */}
          <div
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 top-[80px] sm:top-[92px] lg:top-[108px] z-40 bg-neutral-950/60 backdrop-blur-sm animate-fade-in transition-opacity"
            aria-hidden="true"
          />

          {/* Solid Navigation Drawer starting below header */}
          <div
            className="fixed inset-x-0 top-[80px] sm:top-[92px] lg:top-[108px] z-50 bg-white border-b border-neutral-200 shadow-2xl rounded-b-3xl animate-fade-in overflow-y-auto max-h-[calc(100vh-95px)] pt-5 pb-8 px-5"
            dir={dir}
          >
            <div className="max-w-md mx-auto space-y-4">
              {/* Category Label */}
              <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
                <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                  {t.navMenu}
                </span>
                <span className="text-xs text-primary-600 font-bold flex items-center gap-1.5">
                  <Logo variant="shield" size="sm" className="!h-5" />
                  SAFETY Solar
                </span>
              </div>

              {/* Navigation Links */}
              <nav className="space-y-2">
                {navItems.map((item) => {
                  const active = isActive(item.to);
                  return (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center justify-between px-4 py-3.5 rounded-2xl text-base transition-all duration-200 ${
                        active
                          ? dir === 'rtl'
                            ? 'bg-primary-50 text-primary-800 font-bold border-r-4 border-primary-600 shadow-sm'
                            : 'bg-primary-50 text-primary-800 font-bold border-l-4 border-primary-600 shadow-sm'
                          : 'text-neutral-800 hover:bg-neutral-100 font-medium'
                      }`}
                      aria-current={active ? 'page' : undefined}
                    >
                      <span>{item.label}</span>
                      <ChevronIcon
                        className={`w-5 h-5 transition-transform ${
                          active ? 'text-primary-700' : 'text-neutral-400'
                        }`}
                      />
                    </Link>
                  );
                })}
              </nav>

              {/* Actions & WhatsApp CTA */}
              <div className="pt-4 border-t border-neutral-100 space-y-3">
                <WhatsAppButton size="md" className="w-full justify-center shadow-lg py-3.5 text-base rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
