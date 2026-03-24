"use client";

import { useState } from "react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { navLinks } from "@/content/en/navigation";
import { navLinks as navLinksAr } from "@/content/ar/navigation";
import { cta as ctaEn } from "@/content/en/common";
import { cta as ctaAr } from "@/content/ar/common";
import { whatsappNumber, whatsappMessage } from "@/content/en/navigation";
import { whatsappMessage as whatsappMessageAr } from "@/content/ar/navigation";
import { Button } from "@/components/ui/Button";

const navByLocale = { en: navLinks, ar: navLinksAr };
const ctaByLocale = { en: ctaEn, ar: ctaAr };

type Props = { locale: Locale };

export function MobileNav({ locale }: Props) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const links = navByLocale[locale];
  const cta = ctaByLocale[locale];
  const waMsg = locale === "ar" ? whatsappMessageAr : whatsappMessage;
  const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(waMsg)}`;

  const closeLabel = locale === "ar" ? "إغلاق القائمة" : "Close menu";

  return (
    <div className="lg:hidden">
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
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
            aria-hidden
            onClick={close}
          />
          <nav
            className="fixed right-0 top-0 z-50 flex h-full min-h-[100dvh] w-full max-w-sm flex-col gap-1 border-l border-white/10 bg-black p-6 pt-20 shadow-2xl lg:hidden rtl:right-auto rtl:left-0 rtl:border-l-0 rtl:border-r"
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

            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={localePath(href, locale)}
                className="rounded-lg px-4 py-3 text-lg font-medium text-white hover:bg-white/10 text-start"
                onClick={close}
              >
                {label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-2 border-t border-white/15 pt-4">
              <Button
                href={localePath("/contact", locale)}
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
