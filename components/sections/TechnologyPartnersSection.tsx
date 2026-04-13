import { Section, SectionHeader } from "@/components/ui/Section";
import type { Locale } from "@/lib/i18n";
import { technologyPartners as contentEn } from "@/content/en/home";
import { technologyPartners as contentAr } from "@/content/ar/home";

const contentByLocale = { en: contentEn, ar: contentAr };

type Props = { locale: Locale };

export function TechnologyPartnersSection({ locale }: Props) {
  const content = contentByLocale[locale];

  return (
    <Section id="partners" className="pb-8 sm:pb-10 lg:pb-12">
      <SectionHeader
        title={content.title}
        subtitle={content.subtitle}
      />
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
        {content.partners.map((name) => (
          <div
            key={name}
            className="flex h-12 min-w-[116px] items-center justify-center rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] px-5 font-semibold text-[var(--muted)] shadow-[var(--shadow)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]"
          >
            {name}
          </div>
        ))}
      </div>
    </Section>
  );
}
