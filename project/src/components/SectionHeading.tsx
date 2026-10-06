import { useLanguage } from '@/i18n/LanguageContext';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  center = true,
  className = '',
}: SectionHeadingProps) {
  const { dir } = useLanguage();
  const align = center ? 'text-center mx-auto' : dir === 'rtl' ? 'text-right' : 'text-left';

  return (
    <div className={`${align} max-w-2xl ${center ? 'mx-auto' : ''} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-neutral-500 text-balance leading-relaxed">
          {subtitle}
        </p>
      )}
      {center && (
        <div className="mt-6 flex justify-center items-center gap-1.5">
          <span className="block w-12 h-1 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 shadow-sm" />
          <span className="block w-2 h-2 rounded-full bg-neutral-400" />
        </div>
      )}
    </div>
  );
}
