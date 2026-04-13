"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { CTAButtons } from "@/components/cta/CTAButtons";
import { cta as ctaEn } from "@/content/en/common";
import { cta as ctaAr } from "@/content/ar/common";

const ctaByLocale = { en: ctaEn, ar: ctaAr };

const AUTO_MS = 6000;

export type HeroSlide = {
  id: string;
  slug: string;
  image: string;
  title: string;
  subtitle: string;
};

type Props = {
  locale: Locale;
  slides: readonly HeroSlide[];
};

export function HeroSlider({ locale, slides }: Props) {
  const [active, setActive] = useState(0);
  const cta = ctaByLocale[locale];
  const n = slides.length;

  const go = useCallback(
    (index: number) => {
      if (n === 0) return;
      setActive(((index % n) + n) % n);
    },
    [n]
  );

  useEffect(() => {
    if (n === 0) return;
    const t = setInterval(() => {
      setActive((i) => (i + 1) % n);
    }, AUTO_MS);
    return () => clearInterval(t);
  }, [n]);

  const gradientClass =
    locale === "ar"
      ? "bg-gradient-to-l from-black/85 via-black/55 to-transparent"
      : "bg-gradient-to-r from-black/85 via-black/55 to-transparent";

  if (n === 0) {
    return null;
  }

  return (
    <section
      className="relative isolate min-h-[74vh] w-full overflow-hidden bg-black"
      aria-roledescription="carousel"
      aria-label={locale === "ar" ? "عرض الخدمات" : "Services highlights"}
    >
      {slides.map((slide, i) => {
        const isActive = i === active;
        const href = localePath(`/services/${slide.slug}`, locale);

        return (
          <Link
            key={slide.id}
            href={href}
            className={`absolute inset-0 block overflow-hidden outline-none transition-opacity duration-700 ease-in-out ${
              isActive ? "z-10 opacity-100" : "z-0 opacity-0 pointer-events-none"
            }`}
            aria-hidden={!isActive}
            tabIndex={isActive ? 0 : -1}
            prefetch
          >
            {/* Dedicated box for next/image `fill` — must be position relative with explicit height */}
            <div className="pointer-events-none absolute inset-0 z-0">
              <div className="relative h-full min-h-[72vh] w-full">
                <Image
                  src={slide.image}
                  alt=""
                  fill
                  priority={i === 0}
                  className="object-cover object-center"
                  sizes="100vw"
                />
              </div>
            </div>
            <div className={`pointer-events-none absolute inset-0 z-[1] ${gradientClass}`} aria-hidden />
            <div
            className={`relative z-[2] flex min-h-[74vh] items-center px-4 py-20 sm:px-6 lg:px-8 ${
                locale === "ar" ? "justify-end text-end" : "justify-start text-start"
              }`}
            >
              <div className="max-w-xl lg:max-w-[42rem]">
                <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[3.35rem] lg:leading-tight drop-shadow-sm">
                  {slide.title}
                </h1>
                <p className="mt-5 text-base leading-relaxed text-white/88 sm:text-lg lg:text-xl">
                  {slide.subtitle}
                </p>
                <span
                  className={`mt-6 inline-flex items-center gap-2 text-base font-semibold text-[var(--accent-light)] underline-offset-4 hover:underline ${
                    locale === "ar" ? "flex-row-reverse" : ""
                  }`}
                >
                  {cta.learnMore}
                  <svg
                    className={`h-5 w-5 shrink-0 ${locale === "ar" ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        );
      })}

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 flex flex-col items-center gap-5 px-4 pb-6 sm:pb-8">
        <div
          className="pointer-events-auto flex justify-center gap-2"
          role="tablist"
          aria-label={locale === "ar" ? "الشرائح" : "Slides"}
        >
          {slides.map((slide, i) => (
            <button
              key={slide.id}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={`${slide.title} (${i + 1} / ${n})`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === active
                  ? "w-10 bg-[var(--accent)]"
                  : "w-2.5 bg-white/40 hover:bg-white/60"
              }`}
              onClick={() => go(i)}
            />
          ))}
        </div>
        <div className="pointer-events-auto relative z-30 flex flex-wrap justify-center gap-3">
          <CTAButtons locale={locale} variant="hero" />
        </div>
      </div>
    </section>
  );
}
