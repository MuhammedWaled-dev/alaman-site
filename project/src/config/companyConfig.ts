/**
 * Company information — editable content for About page, footer, etc.
 * All text below is clearly-identified placeholder content until the client
 * supplies the official Arabic company description (to be translated to English).
 */

export const companyConfig = {
  name: 'SAFETY',
  nameAr: 'سافتي',

  /** PLACEHOLDER — replace with official client description */
  descriptionEn:
    'SAFETY is a company specializing in solar panels and alternative energy equipment. We provide reliable energy solutions to help individuals and businesses reduce their dependence on conventional power sources.',

  /** PLACEHOLDER — replace with official client Arabic description */
  descriptionAr:
    'سافتي شركة متخصصة في الألواح الشمسية ومعدات الطاقة البديلة. نوفّر حلول طاقة موثوقة لمساعدة الأفراد والشركات على تقليل اعتمادهم على مصادر الطاقة التقليدية.',

  /** PLACEHOLDER business focus bullets */
  focusEn: [
    'Solar panels for residential and commercial use',
    'Alternative energy equipment and accessories',
    'Expert guidance to help you choose the right system',
  ],
  focusAr: [
    'ألواح شمسية للاستخدام السكني والتجاري',
    'معدات وملحقات الطاقة البديلة',
    'إرشاد متخصص لمساعدتك في اختيار النظام المناسب',
  ],
};

export type CompanyConfig = typeof companyConfig;
