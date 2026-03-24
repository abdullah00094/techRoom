import { HeroSlider } from "@/components/sections/HeroSlider";
import type { Locale } from "@/lib/i18n";
import { heroSlides as heroSlidesEn } from "@/content/en/home";
import { heroSlides as heroSlidesAr } from "@/content/ar/home";

const slidesByLocale = { en: heroSlidesEn, ar: heroSlidesAr };

type Props = { locale: Locale };

export function HeroSection({ locale }: Props) {
  return <HeroSlider locale={locale} slides={slidesByLocale[locale]} />;
}
