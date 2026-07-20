"use client";

import { Section, SectionHeader } from "@/components/ui/Section";
import { Card, CardTitle } from "@/components/ui/Card";
import type { Locale } from "@/lib/i18n";
import { services as servicesEn } from "@/content/en/services";
import { services as servicesAr } from "@/content/ar/services";
import { servicesOverview as contentEn } from "@/content/en/home";
import { servicesOverview as contentAr } from "@/content/ar/home";

const servicesByLocale = { en: servicesEn, ar: servicesAr };
const contentByLocale = { en: contentEn, ar: contentAr };

const icons: Record<string, React.ReactNode> = {
  cctv: (
    <svg className="h-8 w-8 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  ),
  business: (
    <svg className="h-8 w-8 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  network: (
    <svg className="h-8 w-8 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
    </svg>
  ),
  support: (
    <svg className="h-8 w-8 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
};

type Props = { locale: Locale };

export function ServicesOverview({ locale }: Props) {
  const services = servicesByLocale[locale];
  const content = contentByLocale[locale];
  const isRtl = locale === "ar";

  return (
    <Section id="services" className="py-20 bg-[#0d0d0d]">
      <SectionHeader
        title={content.title}
        subtitle={content.subtitle}
      />
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 max-w-7xl mx-auto">
        {services.map((service) => {
          const iconKey = service.id.split("-")[0];
          return (
            <Card
              key={service.id}
              className="flex flex-col h-full bg-[#121212] border border-[#1a1a1b] hover:border-[#e60000]/40 transition-all duration-300 rounded-2xl p-6 sm:p-7 group shadow-lg"
            >
              <div className="flex flex-col h-full">
                {/* Icon wrapper with glow */}
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#4b0000]/20 border border-[#e60000]/25 group-hover:bg-[#e60000]/10 group-hover:border-[#e60000]/45 transition-colors duration-300">
                  {icons[iconKey] ?? icons.support}
                </div>

                <CardTitle as="h3" className="text-xl font-bold text-white mb-3">
                  {service.title}
                </CardTitle>

                <p className="text-sm leading-relaxed text-[#bdbdbd] mb-6 flex-1">
                  {service.shortDescription}
                </p>

                {/* Features bullet list inside card */}
                <div className="border-t border-[#1a1a1b] pt-5">
                  <ul className="space-y-3.5">
                    {service.whatsIncluded.slice(0, 4).map((item, idx) => (
                      <li
                        key={idx}
                        className={`flex gap-3 text-xs leading-normal text-[#bdbdbd] ${
                          isRtl ? "flex-row-reverse text-right" : "text-left"
                        }`}
                      >
                        <span className="text-[#e60000] font-bold shrink-0">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
