import Link from "next/link";
import { Section, SectionHeader } from "@/components/ui/Section";
import { CTAButtons } from "@/components/cta/CTAButtons";
import { ContactForm } from "@/components/forms/ContactForm";
import { localePath } from "@/lib/i18n";
import { contactEmail, contactPhone } from "@/content/en/navigation";
import type { Locale } from "@/lib/i18n";
import { ctaAfterServices as ctaAfterEn } from "@/content/en/home";
import { ctaAfterServices as ctaAfterAr } from "@/content/ar/home";
import { contactSection as contactEn } from "@/content/en/home";
import { contactSection as contactAr } from "@/content/ar/home";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const ctaAfterByLocale = { en: ctaAfterEn, ar: ctaAfterAr };
const contactByLocale = { en: contactEn, ar: contactAr };

type Props = { locale: Locale };

/**
 * Home closing CTA: “after services” prompt + contact methods + consultation form.
 * Replaces separate `CTAAfterServices` + `ContactSection` on the landing page.
 */
export function FinalCTASection({ locale }: Props) {
  const ctaAfter = ctaAfterByLocale[locale];
  const content = contactByLocale[locale];
  const waUrl = getWhatsAppUrl(locale);

  return (
    <Section id="contact" alt>
      <div id="cta-after-services" className="mx-auto mb-14 max-w-2xl rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] px-6 py-8 text-center shadow-[var(--shadow)] sm:mb-16 sm:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-[var(--foreground)] sm:text-3xl">{ctaAfter.title}</h2>
        <p className="mt-3 text-[var(--muted)]">{ctaAfter.subtitle}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3 sm:mt-7">
          <CTAButtons locale={locale} variant="hero" />
        </div>
      </div>

      <SectionHeader title={content.title} subtitle={content.subtitle} centered={true} />

      <div className="mx-auto max-w-5xl">
        <div className="mb-10 rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] p-6 sm:p-7 shadow-[var(--shadow)]">
          <h3 className="text-lg font-semibold text-[var(--foreground)]">{content.contactMethods}</h3>
          <ul className="mt-4 flex flex-wrap gap-4 sm:gap-6">
            <li>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-medium text-[var(--muted)] transition hover:text-[var(--foreground)]"
              >
                <span className="text-[#25D366]">WhatsApp</span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${contactEmail}`}
                className="inline-flex items-center gap-2 font-medium text-[var(--muted)] transition hover:text-[var(--foreground)]"
              >
                {content.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${contactPhone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 font-medium text-[var(--muted)] transition hover:text-[var(--foreground)]"
              >
                {content.phone}
              </a>
            </li>
            <li>
              <Link
                href={localePath("/contact", locale) + "#site-visit"}
                className="inline-flex items-center gap-2 font-medium text-[var(--muted)] transition hover:text-[var(--foreground)]"
              >
                {content.bookSiteVisit}
              </Link>
            </li>
          </ul>
        </div>

        <div
          id="site-visit"
          className="rounded-[var(--radius-lg)] border border-[var(--card-border)] bg-[var(--card-bg)] p-6 shadow-[var(--shadow)] sm:p-7"
        >
          <h3 className="text-lg font-semibold text-[var(--foreground)]">{content.formTitle}</h3>
          <p className="mt-1 text-sm text-[var(--muted)]">{content.formSubtitle}</p>
          <div className="mt-6">
            <ContactForm locale={locale} />
          </div>
        </div>
      </div>
    </Section>
  );
}
