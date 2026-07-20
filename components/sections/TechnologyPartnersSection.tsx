"use client";

import Image from "next/image";
import { Section, SectionHeader } from "@/components/ui/Section";
import type { Locale } from "@/lib/i18n";
import { technologyPartners as contentEn } from "@/content/en/home";
import { technologyPartners as contentAr } from "@/content/ar/home";

const contentByLocale = { en: contentEn, ar: contentAr };

const partners = [
  { name: "Cisco", src: "/images/partners/partner-cisco.png", width: 140, height: 80 },
  { name: "Sophos", src: "/images/partners/partner-sophos.png", width: 150, height: 90 },
  { name: "Ruckus Wireless", src: "/images/partners/partner-ruckus.png", width: 100, height: 100 },
  { name: "MikroTik", src: "/images/partners/partner-mikrotik.png", width: 150, height: 55 },
  { name: "D-Link", src: "/images/partners/partner-dlink.png", width: 160, height: 40 },
];

type Props = { locale: Locale };

export function TechnologyPartnersSection({ locale }: Props) {
  const content = contentByLocale[locale];

  // Duplicate the list of partners to create a seamless infinite scrolling effect
  const marqueeItems = [...partners, ...partners];

  return (
    <Section id="partners" className="pb-16 sm:pb-20 bg-[#0d0d0d] overflow-hidden">
      <SectionHeader
        title={content.title}
        subtitle={content.subtitle}
      />
      
      {/* Marquee Wrapper */}
      <div className="relative w-full max-w-7xl mx-auto mt-8 sm:mt-10 overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-16 sm:before:w-24 before:bg-gradient-to-r before:from-[#0d0d0d] before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-16 sm:after:w-24 after:bg-gradient-to-l after:from-[#0d0d0d] after:to-transparent">
        <div dir="ltr" className="animate-marquee-paused block w-full overflow-hidden">
          <div className="animate-marquee flex gap-6 sm:gap-8 items-center py-4">
            {marqueeItems.map((partner, idx) => (
              <div
                key={`${partner.name}-${idx}`}
                className="flex items-center justify-center shrink-0 w-36 h-20 sm:w-44 sm:h-24 rounded-2xl sm:rounded-3xl border border-white/[0.08] bg-black/45 p-4 sm:p-5 backdrop-blur-md shadow-2xl transition-all duration-500 hover:border-[#e60000]/30 hover:scale-[1.03] group"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={partner.src}
                    alt={partner.name}
                    width={partner.width}
                    height={partner.height}
                    className="max-w-full max-h-full object-contain filter grayscale contrast-125 brightness-110 opacity-75 sm:opacity-85 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
