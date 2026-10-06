import { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import SectionHeading from '@/components/SectionHeading';
import OptimizedImage from '@/components/OptimizedImage';
import { Truck, Package, Box, Warehouse, ShieldCheck, Maximize2, X } from 'lucide-react';

interface OperationImage {
  src: string;
  altAr: string;
  altEn: string;
  titleAr: string;
  titleEn: string;
  categoryAr: string;
  categoryEn: string;
  icon: React.ElementType;
}

const companyOperationsImages: OperationImage[] = [
  {
    src: '/assets/images/operations/op_4_transport_truck.jpg',
    altAr: 'شاحنة نقل محمّلة بشحنات الألواح الشمسية من SAFETY',
    altEn: 'SAFETY transport truck loaded with solar panel shipments',
    titleAr: 'الشحن والتوزيع المباشر',
    titleEn: 'Direct Dispatch & Logistics',
    categoryAr: 'النقل والعمليات',
    categoryEn: 'Transport & Fleet',
    icon: Truck,
  },
  {
    src: '/assets/images/operations/op_1_forklift_pallets.jpg',
    altAr: 'عمليات مناولة وتفريغ طبالي الألواح الشمسية بواسطة الرافعة الشوكية',
    altEn: 'Forklift handling and moving solar panel pallets near shipping containers',
    titleAr: 'مناولة الألواح الشمسية',
    titleEn: 'Solar Panel Handling',
    categoryAr: 'معدات الشحن',
    categoryEn: 'Cargo Handling',
    icon: Package,
  },
  {
    src: '/assets/images/operations/op_5_container_inverters.jpg',
    altAr: 'حاوية شحن مجهزة بإنفيرترات SAFETY الشمسية الهجينة',
    altEn: 'Shipping container stacked with SAFETY hybrid solar inverters',
    titleAr: 'تجهيز الإنفرترات الشمسية',
    titleEn: 'Hybrid Inverters Inventory',
    categoryAr: 'الشحنات المستوردة',
    categoryEn: 'Imported Cargo',
    icon: Box,
  },
  {
    src: '/assets/images/operations/op_2_warehouse_tanks.jpg',
    altAr: 'مستودع شركة SAFETY لتخزين خزانات وسخانات الطاقة الشمسية',
    altEn: 'SAFETY warehouse storing solar water heater tanks and equipment',
    titleAr: 'مستودعات التخزين والتجهيز',
    titleEn: 'Storage & Warehouse',
    categoryAr: 'المستودعات',
    categoryEn: 'Warehouse Facility',
    icon: Warehouse,
  },
  {
    src: '/assets/images/operations/op_3_stacked_tanks.jpg',
    altAr: 'صناديق معدات شركة الأمان التجارية المنظمة في المستودع',
    altEn: 'Organized stack of SAFETY trade equipment and solar water heater boxes',
    titleAr: 'تجهيز وتغليف المنتجات',
    titleEn: 'Equipment Packaging & Stock',
    categoryAr: 'التجهيز والجودة',
    categoryEn: 'Packaging & Quality',
    icon: ShieldCheck,
  },
];

export default function OperationsSection() {
  const { t, lang } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<OperationImage | null>(null);

  const featured = companyOperationsImages[0];
  const gridImages = companyOperationsImages.slice(1);

  return (
    <section className="bg-neutral-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t.operationsTitle}
          subtitle={t.operationsDescription}
        />

        {/* Gallery Container */}
        <div className="mt-12 space-y-6">
          {/* Featured Wide Landscape Banner (Optimized aspect ratio for op_4_transport_truck) */}
          <div
            onClick={() => setSelectedImage(featured)}
            className="group relative overflow-hidden rounded-3xl bg-neutral-900 border border-neutral-200 shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer aspect-[16/9] md:aspect-[21/9]"
          >
            <OptimizedImage
              src={featured.src}
              alt={lang === 'ar' ? featured.altAr : featured.altEn}
              width={1600}
              height={686}
              sizes="100vw"
              lazy
              className="w-full h-full object-cover object-center opacity-95 transition-transform duration-700 group-hover:scale-105"
            />
            {/* Subtle Gradient & Light Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/20 to-transparent pointer-events-none" />

            {/* Click to Zoom Icon */}
            <div className="absolute top-4 ltr:right-4 rtl:left-4 p-2.5 rounded-2xl bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md">
              <Maximize2 className="w-5 h-5" />
            </div>

            {/* Info Badge & Text */}
            <div className="absolute bottom-0 inset-x-0 p-6 md:p-8 text-white flex items-end justify-between">
              <div>
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-600/90 text-white text-xs font-semibold mb-2.5 backdrop-blur-md">
                  <featured.icon className="w-3.5 h-3.5" />
                  {lang === 'ar' ? featured.categoryAr : featured.categoryEn}
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold leading-tight">
                  {lang === 'ar' ? featured.titleAr : featured.titleEn}
                </h3>
              </div>
            </div>
          </div>

          {/* 4 Balanced Grid Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {gridImages.map((img, i) => {
              const Icon = img.icon;
              return (
                <div
                  key={i}
                  onClick={() => setSelectedImage(img)}
                  className="group relative overflow-hidden rounded-3xl bg-neutral-900 border border-neutral-200 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer aspect-[4/3]"
                >
                  <OptimizedImage
                    src={img.src}
                    alt={lang === 'ar' ? img.altAr : img.altEn}
                    width={800}
                    height={600}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    lazy
                    className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent pointer-events-none" />
                  
                  {/* Click to Zoom Icon */}
                  <div className="absolute top-3 ltr:right-3 rtl:left-3 p-2 rounded-xl bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/20 text-white text-[11px] font-medium mb-1.5 backdrop-blur-md">
                      <Icon className="w-3 h-3" />
                      {lang === 'ar' ? img.categoryAr : img.categoryEn}
                    </span>
                    <h4 className="text-base font-bold leading-snug">
                      {lang === 'ar' ? img.titleAr : img.titleEn}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Lightbox / Modal for HD Image View */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 ltr:right-0 rtl:left-0 p-2 text-white hover:text-neutral-300 transition-colors bg-white/10 rounded-full backdrop-blur-md"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
            
            <OptimizedImage
              src={selectedImage.src}
              alt={lang === 'ar' ? selectedImage.altAr : selectedImage.altEn}
              width={1600}
              height={900}
              sizes="(max-width: 1280px) 100vw, 1280px"
              lazy={false}
              className="max-h-[80vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl border border-white/10"
            />
            
            <div className="mt-4 text-center text-white">
              <h3 className="text-lg md:text-xl font-bold">
                {lang === 'ar' ? selectedImage.titleAr : selectedImage.titleEn}
              </h3>
              <p className="text-sm text-neutral-400 mt-1">
                {lang === 'ar' ? selectedImage.altAr : selectedImage.altEn}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
