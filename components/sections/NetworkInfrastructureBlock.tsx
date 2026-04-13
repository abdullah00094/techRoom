import type { Locale } from "@/lib/i18n";
import { networkInfrastructure as contentEn } from "@/content/en/home";
import { networkInfrastructure as contentAr } from "@/content/ar/home";
import { ChecklistSection } from "./ChecklistSection";

const contentByLocale = { en: contentEn, ar: contentAr };

type Props = { locale: Locale };

export function NetworkInfrastructureBlock({ locale }: Props) {
  const content = contentByLocale[locale];

  return (
    <ChecklistSection
      locale={locale}
      id="network-infrastructure"
      title={content.title}
      subtitle={content.subtitle}
      items={content.items}
    />
  );
}
