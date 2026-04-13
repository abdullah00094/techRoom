import type { Locale } from "@/lib/i18n";
import { cctvSection as contentEn } from "@/content/en/home";
import { cctvSection as contentAr } from "@/content/ar/home";
import { ChecklistSection } from "./ChecklistSection";

const contentByLocale = { en: contentEn, ar: contentAr };

type Props = { locale: Locale };

export function CCTVBlock({ locale }: Props) {
  const content = contentByLocale[locale];

  return (
    <ChecklistSection
      locale={locale}
      id="cctv"
      alt
      title={content.title}
      subtitle={content.subtitle}
      items={content.items}
    />
  );
}
