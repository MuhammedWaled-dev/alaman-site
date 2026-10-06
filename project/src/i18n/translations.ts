/**
 * Centralized translation strings for Arabic and English.
 * Add or edit UI text here — do not hardcode language-specific text in components.
 */

export type Language = 'ar' | 'en';

export interface Translation {
  // Navigation
  navHome: string;
  navAbout: string;
  navProducts: string;
  navContact: string;
  navMenu: string;
  navClose: string;

  // Language switcher
  switchToEnglish: string;
  switchToArabic: string;
  language: string;

  // Buttons / actions
  exploreProducts: string;
  contactWhatsapp: string;
  contactUs: string;
  viewDetails: string;
  viewAllProducts: string;
  allOurLinks: string;
  backToCatalog: string;
  inquireWhatsapp: string;
  sendEmail: string;
  callUs: string;

  // Search & Filter
  searchPlaceholder: string;
  allCategories: string;
  sortBy: string;
  sortDefault: string;
  sortPowerDesc: string;
  sortPowerAsc: string;
  sortNameAsc: string;
  productsFound: string;
  clearFilters: string;

  // Hero
  heroHeadline: string;
  heroDescription: string;

  // Intro
  introTitle: string;
  introBody: string;
  learnMore: string;

  // Featured
  featuredTitle: string;
  featuredSubtitle: string;

  // Value section
  valueTitle: string;
  valueSubtitle: string;
  value1Title: string;
  value1Body: string;
  value2Title: string;
  value2Body: string;
  value3Title: string;
  value3Body: string;

  // Supply & operations
  operationsTitle: string;
  operationsDescription: string;
  operationsPrimaryAlt: string;
  operationsSecondaryAlt: string;

  // Contact CTA
  ctaTitle: string;
  ctaBody: string;

  // About page
  aboutTitle: string;
  aboutDescription: string;
  aboutFocusTitle: string;

  // Products page
  productsTitle: string;
  productsSubtitle: string;
  noProductsTitle: string;
  noProductsBody: string;

  // Product details
  productDescription: string;
  productSpecifications: string;
  powerWatts: string;
  efficiency: string;
  warranty: string;
  category: string;
  relatedProducts: string;
  productNotFoundTitle: string;
  productNotFoundBody: string;

  // Contact page
  contactTitle: string;
  contactSubtitle: string;
  contactWhatsappLabel: string;
  contactPhoneLabel: string;
  contactEmailLabel: string;
  contactAddressLabel: string;
  contactSocialLabel: string;
  addressPlaceholder: string;

  // Footer
  footerDescription: string;
  footerQuickLinks: string;
  footerContact: string;
  footerFollowUs: string;
  footerCopyright: string;
  footerRights: string;

  // NotFound
  notFoundTitle: string;
  notFoundBody: string;
  notFoundHome: string;

  // WhatsApp messages
  whatsappGeneralAr: string;
  whatsappGeneralEn: string;
  whatsappOnlineStatus: string;
  whatsappTooltip: string;
}

export const translations: Record<Language, Translation> = {
  ar: {
    navHome: 'الرئيسية',
    navAbout: 'من نحن',
    navProducts: 'المنتجات',
    navContact: 'تواصل معنا',
    navMenu: 'القائمة',
    navClose: 'إغلاق',

    switchToEnglish: 'English',
    switchToArabic: 'العربية',
    language: 'اللغة',

    exploreProducts: 'استكشف المنتجات',
    contactWhatsapp: 'تواصل عبر واتساب',
    contactUs: 'تواصل معنا',
    viewDetails: 'عرض التفاصيل',
    viewAllProducts: 'عرض جميع المنتجات',
    allOurLinks: 'جميع روابطنا',
    backToCatalog: 'العودة إلى المنتجات',
    inquireWhatsapp: 'استفسار عبر واتساب',
    sendEmail: 'إرسال بريد إلكتروني',
    callUs: 'اتصل بنا',

    searchPlaceholder: 'ابحث عن اسم المنتج، القدرة، أو الفئة...',
    allCategories: 'جميع الفئات',
    sortBy: 'ترتيب حسب',
    sortDefault: 'الافتراضي',
    sortPowerDesc: 'القدرة: من الأعلى إلى الأقل',
    sortPowerAsc: 'القدرة: من الأقل إلى الأعلى',
    sortNameAsc: 'الاسم: أبجدياً',
    productsFound: 'منتج متوفر',
    clearFilters: 'إعادة ضبط البحث',

    heroHeadline: 'طاقة شمسية موثوقة لمستقبل مستدام',
    heroDescription:
      'سافتي توفّر الألواح الشمسية ومعدات الطاقة البديلة لمساعدتك على تلبية احتياجاتك من الطاقة بكفاءة وموثوقية.',

    introTitle: 'من نحن',
    introBody:
      'سافتي شركة متخصصة في الألواح الشمسية ومعدات الطاقة البديلة، نلتزم بتقديم حلول طاقة عملية وفعّالة لعملائنا.',
    learnMore: 'تعرّف علينا أكثر',

    featuredTitle: 'منتجات مميزة',
    featuredSubtitle: 'مختارات من منتجاتنا من الألواح الشمسية ومعدات الطاقة',

    valueTitle: 'لماذا سافتي',
    valueSubtitle: 'نركّز على تقديم منتجات طاقة موثوقة وخدمة واضحة',
    value1Title: 'منتجات موثوقة',
    value1Body: 'نختار ألواحنا الشمسية ومعداتنا بعناية لنضمن الجودة والأداء.',
    value2Title: 'إرشاد متخصص',
    value2Body: 'نساعدك في اختيار النظام المناسب لاحتياجاتك من الطاقة.',
    value3Title: 'تواصل سهل',
    value3Body: 'فريقنا جاهز للإجابة على استفساراتك عبر واتساب في أي وقت.',

    operationsTitle: 'التوريد والعمليات',
    operationsDescription:
      'من التوريد إلى التسليم، تلتزم SAFETY بتوفير منتجات ومعدات موثوقة في مجال الطاقة الشمسية من خلال عمليات توريد وتجهيز احترافية.',
    operationsPrimaryAlt: 'تجهيز ألواح الطاقة الشمسية من SAFETY للنقل',
    operationsSecondaryAlt: 'شحنة ألواح الطاقة الشمسية ومعدات التجهيز لدى SAFETY',

    ctaTitle: 'هل أنت مهتم بمنتجاتنا؟',
    ctaBody: 'تواصل معنا عبر واتساب للحصول على معلومات المنتجات والأسعار.',

    aboutTitle: 'من نحن',
    aboutDescription:
      'سافتي شركة متخصصة في الألواح الشمسية ومعدات الطاقة البديلة. هدفنا توفير حلول طاقة موثوقة تساعد الأفراد والشركات على تقليل اعتمادهم على مصادر الطاقة التقليدية. نلتزم بتقديم منتجات عملية وإرشاد واضح لمساعدة عملائنا على اتخاذ قرارات طاقة مدروسة.',
    aboutFocusTitle: 'مجالات عملنا',

    productsTitle: 'المنتجات',
    productsSubtitle: 'استكشف مجموعتنا من الألواح الشمسية ومعدات الطاقة البديلة',
    noProductsTitle: 'لا توجد منتجات مطابقة',
    noProductsBody: 'لم نجد منتجات تطابق خيارات البحث الحالية. جرب تغيير كلمة البحث أو الفئة.',

    productDescription: 'وصف المنتج',
    productSpecifications: 'المواصفات الفنية',
    powerWatts: 'القدرة',
    efficiency: 'الكفاءة',
    warranty: 'الضمان',
    category: 'الفئة',
    relatedProducts: 'منتجات ذات صلة',
    productNotFoundTitle: 'المنتج غير موجود',
    productNotFoundBody: 'لم نتمكن من العثور على هذا المنتج. قد يكون الرابط غير صحيح.',

    contactTitle: 'تواصل معنا',
    contactSubtitle: 'نحن هنا للإجابة على استفساراتك حول منتجاتنا وأسعارنا',
    contactWhatsappLabel: 'واتساب',
    contactPhoneLabel: 'الهاتف',
    contactEmailLabel: 'البريد الإلكتروني',
    contactAddressLabel: 'العنوان',
    contactSocialLabel: 'تابعنا على',
    addressPlaceholder: 'سيتم إضافة العنوان قريباً',

    footerDescription:
      'سافتي — حلول الطاقة الشمسية والبديلة. تواصل معنا لمعرفة المزيد عن منتجاتنا.',
    footerQuickLinks: 'روابط سريعة',
    footerContact: 'تواصل',
    footerFollowUs: 'تابعنا',
    footerCopyright: '©',
    footerRights: 'جميع الحقوق محفوظة.',

    notFoundTitle: 'الصفحة غير موجودة',
    notFoundBody: 'الصفحة التي تبحث عنها غير متوفرة أو تم نقلها.',
    notFoundHome: 'العودة إلى الرئيسية',

    whatsappGeneralAr:
      'مرحباً، أود الاستفسار عن منتجاتكم وأسعارها. شكراً لكم.',
    whatsappGeneralEn:
      'Hello, I would like to inquire about your products and prices. Thank you.',
    whatsappOnlineStatus: 'متصل الآن للإجابة على استفساراتك',
    whatsappTooltip: 'تحدث معنا مباشرة عبر واتساب',
  },
  en: {
    navHome: 'Home',
    navAbout: 'About Us',
    navProducts: 'Products',
    navContact: 'Contact Us',
    navMenu: 'Menu',
    navClose: 'Close',

    switchToEnglish: 'English',
    switchToArabic: 'العربية',
    language: 'Language',

    exploreProducts: 'Explore Products',
    contactWhatsapp: 'Contact on WhatsApp',
    contactUs: 'Contact Us',
    viewDetails: 'View Details',
    viewAllProducts: 'View All Products',
    allOurLinks: 'All Our Links',
    backToCatalog: 'Back to Products',
    inquireWhatsapp: 'Inquire on WhatsApp',
    sendEmail: 'Send Email',
    callUs: 'Call Us',

    searchPlaceholder: 'Search by product name, wattage, or category...',
    allCategories: 'All Categories',
    sortBy: 'Sort By',
    sortDefault: 'Default',
    sortPowerDesc: 'Power: High to Low',
    sortPowerAsc: 'Power: Low to High',
    sortNameAsc: 'Name: A-Z',
    productsFound: 'products available',
    clearFilters: 'Reset Filters',

    heroHeadline: 'Reliable Solar Energy for a Sustainable Future',
    heroDescription:
      'SAFETY provides solar panels and alternative energy equipment to help you meet your energy needs efficiently and reliably.',

    introTitle: 'Who We Are',
    introBody:
      'SAFETY is a company specializing in solar panels and alternative energy equipment, committed to delivering practical and effective energy solutions for our customers.',
    learnMore: 'Learn More About Us',

    featuredTitle: 'Featured Products',
    featuredSubtitle: 'A selection from our solar panels and energy equipment range',

    valueTitle: 'Why SAFETY',
    valueSubtitle: 'We focus on reliable energy products and clear service',
    value1Title: 'Reliable Products',
    value1Body: 'We carefully select our solar panels and equipment to ensure quality and performance.',
    value2Title: 'Expert Guidance',
    value2Body: 'We help you choose the right energy system for your needs.',
    value3Title: 'Easy Communication',
    value3Body: 'Our team is ready to answer your questions via WhatsApp anytime.',

    operationsTitle: 'Supply & Operations',
    operationsDescription:
      'From sourcing to delivery, SAFETY is committed to providing reliable solar energy products and equipment through professional supply and handling operations.',
    operationsPrimaryAlt: 'SAFETY solar panels being prepared for transport',
    operationsSecondaryAlt: 'SAFETY solar panel shipment and equipment handling',

    ctaTitle: 'Interested in our products?',
    ctaBody: 'Contact us via WhatsApp for product information and pricing.',

    aboutTitle: 'About Us',
    aboutDescription:
      'SAFETY is a company specializing in solar panels and alternative energy equipment. Our goal is to provide reliable energy solutions that help individuals and businesses reduce their dependence on conventional power sources. We are committed to offering practical products and clear guidance to help our customers make informed energy decisions.',
    aboutFocusTitle: 'Our Focus',

    productsTitle: 'Products',
    productsSubtitle: 'Explore our range of solar panels and alternative energy equipment',
    noProductsTitle: 'No matching products found',
    noProductsBody: 'No products matched your current search parameters. Try changing your search query or category filter.',

    productDescription: 'Product Description',
    productSpecifications: 'Technical Specifications',
    powerWatts: 'Power',
    efficiency: 'Efficiency',
    warranty: 'Warranty',
    category: 'Category',
    relatedProducts: 'Related Products',
    productNotFoundTitle: 'Product Not Found',
    productNotFoundBody: 'We could not find this product. The link may be incorrect.',

    contactTitle: 'Contact Us',
    contactSubtitle: 'We are here to answer your questions about our products and pricing',
    contactWhatsappLabel: 'WhatsApp',
    contactPhoneLabel: 'Phone',
    contactEmailLabel: 'Email',
    contactAddressLabel: 'Address',
    contactSocialLabel: 'Follow us on',
    addressPlaceholder: 'Address will be added soon',

    footerDescription:
      'SAFETY — Solar and alternative energy solutions. Contact us to learn more about our products.',
    footerQuickLinks: 'Quick Links',
    footerContact: 'Contact',
    footerFollowUs: 'Follow Us',
    footerCopyright: '©',
    footerRights: 'All rights reserved.',

    notFoundTitle: 'Page Not Found',
    notFoundBody: 'The page you are looking for is not available or has been moved.',
    notFoundHome: 'Back to Home',

    whatsappGeneralAr:
      'مرحباً، أود الاستفسار عن منتجاتكم وأسعارها. شكراً لكم.',
    whatsappGeneralEn:
      'Hello, I would like to inquire about your products and prices. Thank you.',
    whatsappOnlineStatus: 'Online now to answer your questions',
    whatsappTooltip: 'Chat with us on WhatsApp',
  },
};
