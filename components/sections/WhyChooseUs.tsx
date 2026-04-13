import { Section, SectionHeader } from "@/components/ui/Section";
import type { Locale } from "@/lib/i18n";
import { whyChooseUs as contentEn } from "@/content/en/home";
import { whyChooseUs as contentAr } from "@/content/ar/home";

const contentByLocale = { en: contentEn, ar: contentAr };

type Props = { locale: Locale };

export function WhyChooseUs({ locale }: Props) {
  const content = contentByLocale[locale];

  return (
    <Section id="why-us" alt>
      <SectionHeader
        title={content.title}
        subtitle={content.subtitle}
      />
      <div className="grid gap-6 sm:gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {content.points.map((item, i) => (
          <div
            key={i}
            className={`rounded-[var(--radius-lg)] border border-[var(--card-border)] bg-[var(--card-bg)] p-6 sm:p-7 shadow-[var(--shadow)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)] ${locale === "ar" ? "text-end" : ""}`}
          >
            <h3 className="text-lg font-semibold text-[var(--foreground)]">{item.title}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-[var(--muted)]">{item.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
