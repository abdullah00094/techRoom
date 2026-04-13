"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { cta as ctaEn } from "@/content/en/common";
import { cta as ctaAr } from "@/content/ar/common";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "./MobileNav";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { NavLinksList } from "./NavLinksList";

const ctaByLocale = { en: ctaEn, ar: ctaAr };

type Props = { locale: Locale };

export function Header({ locale }: Props) {
  const [scrolled, setScrolled] = useState(false);
  // `lg` breakpoint in Tailwind is 1024px by default.
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);
  const cta = ctaByLocale[locale];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1024px)");

    const update = () => setIsDesktop(mql.matches);
    update();

    // Safari fallback for older APIs.
    if ("addEventListener" in mql) {
      mql.addEventListener("change", update);
      return () => mql.removeEventListener("change", update);
    }

    (mql as unknown as { addListener: (cb: () => void) => void; removeListener: (cb: () => void) => void }).addListener(
      update
    );
    return () =>
      (mql as unknown as {
        removeListener: (cb: () => void) => void;
      }).removeListener(update);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full border-b border-[var(--card-border)]/80 bg-[var(--background)]/90 backdrop-blur-md supports-[backdrop-filter]:bg-[var(--background)]/75 transition-shadow duration-200 ${scrolled ? "shadow-[var(--shadow-md)]" : ""}`}
    >
      <div className="mx-auto flex h-15 max-w-7xl items-center justify-between gap-4 px-4 sm:h-16 sm:px-6 lg:px-8">
        <Link
          href={localePath("/", locale)}
          className="shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] rounded"
          aria-label={locale === "ar" ? "تيك روم — الصفحة الرئيسية" : "TechRoom Solutions — Home"}
        >
          <Image
            src="/images/techroom-logo.png"
            alt=""
            width={200}
            height={48}
            className="h-8.5 w-auto sm:h-9.5"
            priority
          />
        </Link>

        {isDesktop ? (
          <nav className="flex items-center gap-6" aria-label="Main navigation">
            <NavLinksList
              locale={locale}
              itemClassName="rounded px-1 text-sm font-medium text-[var(--muted)] transition hover:text-[var(--foreground)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
            />
          </nav>
        ) : null}

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher locale={locale} className="hidden sm:inline-flex" />
          <Button
            href={localePath("/contact", locale)}
            variant="primary"
            className="hidden sm:inline-flex text-sm"
          >
            {cta.requestService}
          </Button>
          {isDesktop === false ? <MobileNav locale={locale} /> : null}
        </div>
      </div>
    </header>
  );
}
