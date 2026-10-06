import type { Product } from '@/types/product';

/**
 * Product catalog.
 *
 * IDs 1–8 are sample/placeholder records (replace with the real catalog as needed).
 * IDs 9–12 are the client's official products with real product photos stored in
 * `public/assets/images/products/`.
 *
 * To add a product: copy a record, give it a new id + unique slug, and fill fields.
 * Optional fields (powerWatts, efficiency, warranty, specs, whatsappMessage*) can be
 * omitted freely — the UI hides missing badges/rows automatically.
 */

export const products: Product[] = [
  {
    id: 1,
    slug: 'monocrystalline-solar-panel-450w',
    nameAr: 'لوح شمسي أحادي البلورة 450 واط',
    nameEn: 'Monocrystalline Solar Panel 450W',
    descriptionAr:
      'لوح شمسي أحادي البلورة بكفاءة عالية، مناسب للاستخدام السكني والتجاري. تصميم متين يتحمل الظروف الجوية المختلفة.',
    descriptionEn:
      'High-efficiency monocrystalline solar panel suitable for residential and commercial use. Durable design built to withstand various weather conditions.',
    image: 'https://images.pexels.com/photos/8853509/pexels-photo-8853509.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    additionalImages: [
      'https://images.pexels.com/photos/7102661/pexels-photo-7102661.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    categoryAr: 'ألواح شمسية',
    categoryEn: 'Solar Panels',
    powerWatts: 450,
    efficiency: '21.5%',
    warrantyAr: '25 سنة على الأداء',
    warrantyEn: '25-year performance warranty',
    specificationsAr: [
      { label: 'نوع الخلية', value: 'أحادية البلورة' },
      { label: 'عدد الخلايا', value: '144' },
      { label: 'جهد الدائرة المفتوحة', value: '49.8V' },
      { label: 'تيار الدائرة القصيرة', value: '11.5A' },
    ],
    specificationsEn: [
      { label: 'Cell Type', value: 'Monocrystalline' },
      { label: 'Cell Count', value: '144' },
      { label: 'Open Circuit Voltage', value: '49.8V' },
      { label: 'Short Circuit Current', value: '11.5A' },
    ],
    featured: true,
  },
  {
    id: 2,
    slug: 'polycrystalline-solar-panel-350w',
    nameAr: 'لوح شمسي متعدد البلورة 350 واط',
    nameEn: 'Polycrystalline Solar Panel 350W',
    descriptionAr:
      'لوح شمسي متعدد البلورة بتكلفة اقتصادية وأداء موثوق، مناسب للمشاريع ذات الميزانية المتوسطة.',
    descriptionEn:
      'Cost-effective polycrystalline solar panel with reliable performance, suitable for mid-budget projects.',
    image: 'https://images.pexels.com/photos/28321970/pexels-photo-28321970.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    categoryAr: 'ألواح شمسية',
    categoryEn: 'Solar Panels',
    powerWatts: 350,
    efficiency: '17.8%',
    warrantyAr: '25 سنة على الأداء',
    warrantyEn: '25-year performance warranty',
    specificationsAr: [
      { label: 'نوع الخلية', value: 'متعددة البلورة' },
      { label: 'عدد الخلايا', value: '72' },
    ],
    specificationsEn: [
      { label: 'Cell Type', value: 'Polycrystalline' },
      { label: 'Cell Count', value: '72' },
    ],
    featured: true,
  },
  {
    id: 3,
    slug: 'deep-cycle-battery-200ah',
    nameAr: 'بطارية دورة عميقة 200 أمبير/ساعة',
    nameEn: 'Deep Cycle Battery 200Ah',
    descriptionAr:
      'بطارية دورة عميقة مصممة لأنظمة الطاقة الشمسية، توفر تخزين طاقة موثوق وقوة تحمل عالية.',
    descriptionEn:
      'Deep cycle battery designed for solar energy systems, providing reliable energy storage and high durability.',
    image: 'https://images.pexels.com/photos/21905739/pexels-photo-21905739.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    categoryAr: 'معدات الطاقة',
    categoryEn: 'Energy Equipment',
    specificationsAr: [
      { label: 'السعة', value: '200Ah' },
      { label: 'الجهد', value: '12V' },
      { label: 'النوع', value: 'AGM' },
    ],
    specificationsEn: [
      { label: 'Capacity', value: '200Ah' },
      { label: 'Voltage', value: '12V' },
      { label: 'Type', value: 'AGM' },
    ],
    featured: false,
  },
  {
    id: 4,
    slug: 'solar-cables-4mm',
    nameAr: 'كابلات شمسية 4 مم',
    nameEn: 'Solar Cables 4mm',
    descriptionAr:
      'كابلات شمسية مقاومة للأشعة فوق البنفسجية والظروف الجوية القاسية، مناسبة لتوصيل الألواح الشمسية.',
    descriptionEn:
      'UV-resistant solar cables built for harsh weather conditions, suitable for connecting solar panels.',
    image: 'https://images.pexels.com/photos/4320475/pexels-photo-4320475.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    categoryAr: 'ملحقات',
    categoryEn: 'Accessories',
    specificationsAr: [
      { label: 'المقطع', value: '4mm²' },
      { label: 'الطول', value: 'حسب الطلب' },
    ],
    specificationsEn: [
      { label: 'Cross-section', value: '4mm²' },
      { label: 'Length', value: 'Custom' },
    ],
    featured: false,
  },
  {
    id: 5,
    slug: 'bifacial-n-type-solar-panel-550w',
    nameAr: 'لوح شمسي مزدوج الوجه N-Type 550 واط',
    nameEn: 'Bifacial N-Type Solar Panel 550W',
    descriptionAr:
      'لوح شمسي فائقة الكفاءة بتقنية N-Type مزدوج الوجه يمتص الضوء من الجهتين الأمامية والخلفية لزيادة الإنتاج بنسبة تصل إلى 25%.',
    descriptionEn:
      'Ultra-high efficiency N-Type bifacial solar panel absorbing sunlight from both front and rear sides, increasing output by up to 25%.',
    image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    categoryAr: 'ألواح شمسية',
    categoryEn: 'Solar Panels',
    powerWatts: 550,
    efficiency: '22.8%',
    warrantyAr: '30 سنة على الأداء',
    warrantyEn: '30-year performance warranty',
    specificationsAr: [
      { label: 'نوع الخلية', value: 'N-Type TOPCon مزدوج الوجه' },
      { label: 'كفاءة اللوح', value: '22.8%' },
      { label: 'القدرة القصوى', value: '550W' },
      { label: 'مستوى الحماية', value: 'IP68' },
    ],
    specificationsEn: [
      { label: 'Cell Type', value: 'N-Type TOPCon Bifacial' },
      { label: 'Panel Efficiency', value: '22.8%' },
      { label: 'Max Power', value: '550W' },
      { label: 'Protection Rating', value: 'IP68' },
    ],
    featured: true,
  },
  {
    id: 6,
    slug: 'hybrid-solar-inverter-55kw',
    nameAr: 'إنفيرتر هجين 5.5 كيلو واط مع مراقبة ذكية',
    nameEn: '5.5kW Hybrid Solar Inverter with Smart Monitoring',
    descriptionAr:
      'إنفيرتر شمس هجين متطور يدعم التغذية المباشرة من الألواح والشبكة والبطاريات مع شاشة LCD وتطبيق مراقبة عبر الواي فاي.',
    descriptionEn:
      'Advanced hybrid solar inverter supporting direct power from panels, grid, and batteries with LCD display and Wi-Fi mobile app monitoring.',
    image: 'https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    categoryAr: 'معدات الطاقة',
    categoryEn: 'Energy Equipment',
    powerWatts: 5500,
    efficiency: '97.5%',
    warrantyAr: '5 سنوات',
    warrantyEn: '5 years',
    specificationsAr: [
      { label: 'القدرة المستمرة', value: '5500W' },
      { label: 'جهد البطارية', value: '48V DC' },
      { label: 'تيار الشحن MPPT', value: '100A' },
      { label: 'التوصيل والشبكة', value: 'Wi-Fi / RS485 / App' },
    ],
    specificationsEn: [
      { label: 'Continuous Output', value: '5500W' },
      { label: 'Battery Voltage', value: '48V DC' },
      { label: 'MPPT Charge Current', value: '100A' },
      { label: 'Connectivity', value: 'Wi-Fi / RS485 / App' },
    ],
    featured: true,
  },
  {
    id: 7,
    slug: 'lifepo4-lithium-battery-wall-mount-10kwh',
    nameAr: 'منظومة بطارية ليثيوم LiFePO4 جدارية 10 كيلو واط/ساعة',
    nameEn: '10kWh Wall-Mounted LiFePO4 Lithium Battery Pack',
    descriptionAr:
      'بطارية ليثيوم فوسفات الحديد عالية الأمان للتثبيت الجداري مع نظام إدارة ذكي (BMS) لعمر افتراضي يتجاوز 6000 دورة شحن.',
    descriptionEn:
      'Wall-mounted LiFePO4 lithium battery with built-in smart BMS for safety, long lifespan exceeding 6000 cycles, and compact design.',
    image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    categoryAr: 'معدات الطاقة',
    categoryEn: 'Energy Equipment',
    powerWatts: undefined,
    efficiency: '98%',
    warrantyAr: '10 سنوات',
    warrantyEn: '10 years',
    specificationsAr: [
      { label: 'السعة الإجمالية', value: '10.24kWh (200Ah / 51.2V)' },
      { label: 'عدد دورات الشحن', value: '> 6000 cycles' },
      { label: 'نظام الحماية', value: 'Smart BMS المدمج' },
    ],
    specificationsEn: [
      { label: 'Total Capacity', value: '10.24kWh (200Ah / 51.2V)' },
      { label: 'Cycle Life', value: '> 6000 cycles' },
      { label: 'Protection', value: 'Built-in Smart BMS' },
    ],
    featured: true,
  },
  {
    id: 8,
    slug: 'solar-panel-mounting-structure-aluminum',
    nameAr: 'هيكل تثبيت ألواح شمسية من الألمنيوم المقاوم للصدأ',
    nameEn: 'Heavy-Duty Aluminum Solar Mounting Structure',
    descriptionAr:
      'هياكل ألمنيوم عالية المتانة لتثبيت الألواح الشمسية على الأسطح الخرسانية أو القرميدية، مع زوايا ميل قابلة للتعديل.',
    descriptionEn:
      'Heavy-duty corrosion-resistant aluminum mounting structure for concrete or tile roofs with adjustable tilt angle options.',
    image: 'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    categoryAr: 'ملحقات',
    categoryEn: 'Accessories',
    warrantyAr: '15 سنة',
    warrantyEn: '15 years',
    specificationsAr: [
      { label: 'المادة', value: 'ألمنيوم Anodized AL6005-T5' },
      { label: 'مقاومة الرياح', value: 'حتى 60 م/ث' },
      { label: 'زاوية الميل', value: '15° - 30° قابلة للتعديل' },
    ],
    specificationsEn: [
      { label: 'Material', value: 'Anodized Aluminum AL6005-T5' },
      { label: 'Wind Resistance', value: 'Up to 60 m/s' },
      { label: 'Tilt Angle', value: '15° - 30° Adjustable' },
    ],
    featured: false,
  },
  {
    id: 9,
    slug: 'safety-battery-tubular-green',
    nameAr: 'بطارية أنبوبية SAFETY Smart Series',
    nameEn: 'SAFETY Smart Series Tall Tubular Battery',
    descriptionAr:
      'بطارية أنبوبية عالية الجودة مخصصة لأنظمة الطاقة الشمسية، تتميز بعمر افتراضي طويل وكفاءة عالية في الأداء الشاق.',
    descriptionEn:
      'High-quality tall tubular battery designed for solar energy systems, offering long operational lifespan and outstanding heavy-duty performance.',
    image: '/assets/images/products/safety-battery-tubular-green.jpg',
    categoryAr: 'معدات الطاقة',
    categoryEn: 'Energy Equipment',
    specificationsAr: [
      { label: 'النوع', value: 'Tall Tubular' },
      { label: 'نمط التفريغ', value: 'تفريغ عميق' },
      { label: 'الأداء', value: 'أداء موثوق' },
    ],
    specificationsEn: [
      { label: 'Type', value: 'Tall Tubular' },
      { label: 'Discharge', value: 'Deep Cycle' },
      { label: 'Performance', value: 'Reliable Performance' },
    ],
    whatsappMessageAr: 'مرحباً، أود الاستفسار عن بطارية SAFETY Smart Series الأنبوبية',
    whatsappMessageEn:
      'Hello, I would like to inquire about the SAFETY Smart Series Tall Tubular Battery',
    featured: false,
  },
  {
    id: 10,
    slug: 'safety-battery-yellow-230ah',
    nameAr: 'بطارية أنبوبية SAFETY 12V 230AH',
    nameEn: 'SAFETY 12V 230AH Tall Tubular Battery',
    descriptionAr:
      'بطارية طاقة شمسية أنبوبية هندية الصنع بمواصفات قياسية عالمية، مصممة للتفريغ العميق وتوفير استقرار تام للتيار.',
    descriptionEn:
      'Indian-manufactured solar tubular battery engineered to international standards, optimized for deep cycling and steady voltage output.',
    image: '/assets/images/products/safety-battery-yellow-230ah.jpg',
    categoryAr: 'معدات الطاقة',
    categoryEn: 'Energy Equipment',
    specificationsAr: [
      { label: 'السعة', value: '230AH @ C20' },
      { label: 'جهد النظام', value: '12V' },
      { label: 'المعيار', value: 'EFB / IEC' },
    ],
    specificationsEn: [
      { label: 'Capacity', value: '230AH @ C20' },
      { label: 'System Voltage', value: '12V System' },
      { label: 'Standard', value: 'EFB / IEC Standard' },
    ],
    whatsappMessageAr: 'مرحباً، أود الاستفسار عن بطارية SAFETY الصفراء 230AH',
    whatsappMessageEn: 'Hello, I would like to inquire about the SAFETY 12V 230AH Yellow Battery',
    featured: false,
  },
  {
    id: 11,
    slug: 'safety-lifepo4-314ah',
    nameAr: 'بطارية ليثيوم SAFETY LiFePO4 51.2V 314AH',
    nameEn: 'SAFETY LiFePO4 51.2V 314AH Lithium Battery',
    descriptionAr:
      'وحدة تخزين طاقة ذكية بتقنية الليثيوم مزودة بشاشة لمس وميزة الاتصال عبر Wi-Fi/Bluetooth لأطول عمر افتراضي وأعلى أمان.',
    descriptionEn:
      'Smart Lithium energy storage unit equipped with a touchscreen interface, Wi-Fi/Bluetooth monitoring, and high safety standards.',
    image: '/assets/images/products/safety-lifepo4-314ah.jpg',
    categoryAr: 'معدات الطاقة',
    categoryEn: 'Energy Equipment',
    warrantyAr: 'ضمان 5 سنوات',
    warrantyEn: '5 Years Warranty',
    specificationsAr: [
      { label: 'الجهد / السعة', value: '51.2V / 314AH' },
      { label: 'دورات الشحن', value: '8000 دورة' },
      { label: 'الضمان', value: 'ضمان 5 سنوات' },
    ],
    specificationsEn: [
      { label: 'Voltage / Capacity', value: '51.2V / 314AH' },
      { label: 'Cycle Life', value: '8000 Cycles' },
      { label: 'Warranty', value: '5 Years Warranty' },
    ],
    whatsappMessageAr: 'مرحباً، أود الاستفسار عن بطارية الليثيوم SAFETY LiFePO4 314AH',
    whatsappMessageEn:
      'Hello, I would like to inquire about the SAFETY LiFePO4 314AH Lithium Battery',
    featured: false,
  },
  {
    id: 12,
    slug: 'safety-inverters-series',
    nameAr: 'إنفرترات SAFETY الذكية للطاقة الشمسية',
    nameEn: 'SAFETY Smart Solar Inverters Series',
    descriptionAr:
      'تشكيلة متكاملة من الإنفرترات الشمسية الذكية لإدارة الطاقة المنزلية والصناعية بكفاءة عالية وحماية شاملة للنظام.',
    descriptionEn:
      'A complete series of smart solar inverters for residential and commercial power management featuring robust protection mechanisms.',
    image: '/assets/images/products/safety-inverters-series.jpg',
    categoryAr: 'معدات الطاقة',
    categoryEn: 'Energy Equipment',
    specificationsAr: [
      { label: 'نطاق القدرة', value: '2.2KW - 6.5KW' },
      { label: 'لوحة التحكم', value: 'تحكم رقمي' },
      { label: 'الكفاءة', value: 'كفاءة عالية جداً' },
    ],
    specificationsEn: [
      { label: 'Power Range', value: '2.2KW - 6.5KW' },
      { label: 'Control', value: 'Digital Touch Screen' },
      { label: 'Efficiency', value: 'High Efficiency' },
    ],
    whatsappMessageAr: 'مرحباً، أود الاستفسار عن سلسلة إنفرترات SAFETY الذكية',
    whatsappMessageEn:
      'Hello, I would like to inquire about the SAFETY Smart Solar Inverters Series',
    featured: false,
  },
];
