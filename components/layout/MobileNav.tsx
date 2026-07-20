"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { cta as ctaEn } from "@/content/en/common";
import { cta as ctaAr } from "@/content/ar/common";
import { Button } from "@/components/ui/Button";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { NavLinksList } from "./NavLinksList";

const ctaByLocale = { en: ctaEn, ar: ctaAr };

type Props = { locale: Locale };

export function MobileNav({ locale }: Props) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const cta = ctaByLocale[locale];
  const waUrl = getWhatsAppUrl(locale);

  const closeLabel = locale === "ar" ? "إغلاق القائمة" : "Close menu";

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`flex h-10 w-10 items-center justify-center rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] ${
          open
            ? "text-white hover:bg-white/15"
            : "text-[var(--foreground)] hover:bg-[var(--section-alt)]"
        }`}
        aria-expanded={open}
        aria-label={open ? closeLabel : locale === "ar" ? "فتح القائمة" : "Open menu"}
      >
        {open ? (
          <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
            aria-hidden
            onClick={close}
          />
          <nav
            className="fixed ltr:right-0 ltr:left-auto rtl:left-0 rtl:right-auto top-0 z-50 flex h-full min-h-[100dvh] w-full max-w-xs flex-col gap-1 ltr:border-l rtl:border-r border-[#1a1a1b] bg-[#0d0d0d] p-6 pt-20 shadow-2xl"
            aria-label={locale === "ar" ? "القائمة الرئيسية" : "Mobile navigation"}
          >
            <button
              type="button"
              onClick={close}
              className="absolute top-5 right-5 flex h-11 w-11 items-center justify-center rounded-full text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white rtl:right-auto rtl:left-5"
              aria-label={closeLabel}
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <NavLinksList
              locale={locale}
              onNavigate={close}
              itemClassName="rounded-lg px-4 py-3 text-lg font-medium text-white hover:bg-white/10 text-start"
            />
            <div className="mt-4 flex flex-col gap-2 border-t border-[#1a1a1b] pt-4">
              <Button
                href="#contact"
                variant="primary"
                className="w-full justify-center"
                onClick={close}
              >
                {cta.requestService}
              </Button>
              <Button href={waUrl} external variant="outline" className="w-full justify-center" onClick={close}>
                {cta.contactWhatsApp}
              </Button>
            </div>
          </nav>
        </>
      )}
    </div>
  );
}
