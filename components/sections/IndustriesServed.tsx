import { Section, SectionHeader } from "@/components/ui/Section";
import type { Locale } from "@/lib/i18n";
import { industries as industriesEn } from "@/content/en/industries";
import { industries as industriesAr } from "@/content/ar/industries";
import { industriesServed as contentEn } from "@/content/en/home";
import { industriesServed as contentAr } from "@/content/ar/home";

const industriesByLocale = { en: industriesEn, ar: industriesAr };
const contentByLocale = { en: contentEn, ar: contentAr };

type Props = { locale: Locale };

export function IndustriesServed({ locale }: Props) {
  const industries = industriesByLocale[locale];
  const content = contentByLocale[locale];

  return (
    <Section id="industries" className="py-10 sm:py-12 lg:py-14 bg-[#0d0d0d]">
      <SectionHeader
        title={content.title}
        subtitle={content.subtitle}
      />
      <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {industries.map((ind) => (
          <div
            key={ind.id}
            className="rounded-[var(--radius-lg)] border border-[var(--card-border)] bg-[var(--card-bg)] p-5 shadow-[var(--shadow)] transition duration-200 hover:-translate-y-0.5 hover:border-[var(--accent)]/30 hover:shadow-[var(--shadow-md)]"
          >
            <h3 className={`font-semibold text-white transition ${locale === "ar" ? "text-end" : ""}`}>
              {ind.title}
            </h3>
            <p className={`mt-2 text-sm text-[var(--muted)] line-clamp-3 ${locale === "ar" ? "text-end" : ""}`}>
              {ind.shortDescription}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
