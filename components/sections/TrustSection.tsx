import type { ReactNode } from "react";
import type { Locale } from "@/lib/i18n";
import { TechnologyPartnersSection } from "@/components/sections/TechnologyPartnersSection";
import { IndustriesServed } from "@/components/sections/IndustriesServed";
import { ProjectsPreview } from "@/components/sections/ProjectsPreview";

type Props = {
  locale: Locale;
  /**
   * Content that sits between partners and industries (home: How it works).
   * Keeps the original page order without moving sections.
   */
  afterPartners?: ReactNode;
  /**
   * Content that sits between industries and projects (home: Why choose us).
   */
  afterIndustries?: ReactNode;
};

/**
 * Groups technology partners, industries served, and projects preview.
 * Optional slots preserve sections that previously sat between them on the home page.
 */
export function TrustSection({ locale, afterPartners, afterIndustries }: Props) {
  return (
    <>
      <TechnologyPartnersSection locale={locale} />
      {afterPartners}
      <IndustriesServed locale={locale} />
      {afterIndustries}
      <ProjectsPreview locale={locale} />
    </>
  );
}
