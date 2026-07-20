"use client";

import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import { hero as heroEn } from "@/content/en/home";
import { hero as heroAr } from "@/content/ar/home";
import { CTAButtons } from "@/components/cta/CTAButtons";

const heroByLocale = { en: heroEn, ar: heroAr };

type Props = { locale: Locale };

export function HeroSection({ locale }: Props) {
  const content = heroByLocale[locale];
  const isRtl = locale === "ar";

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0d0d0d] py-16 sm:py-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Background glowing gradients */}
      <div className="absolute inset-0 z-0">
        {/* Top-right/left maroon radial glow */}
        <div
          className={`absolute -top-40 w-[600px] h-[600px] rounded-full bg-[#4b0000]/40 blur-[130px] opacity-70 ${
            isRtl ? "-left-20" : "-right-20"
          }`}
        />
        {/* Bottom center red glow */}
        <div className="absolute bottom-[-150px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#e60000]/10 blur-[120px] opacity-50" />
      </div>

      {/* Grid container */}
      <div className="relative z-10 mx-auto max-w-7xl w-full grid gap-12 lg:grid-cols-12 items-center">
        {/* Content text */}
        <div
          className={`lg:col-span-7 flex flex-col justify-center ${
            isRtl ? "lg:text-right text-center order-2 lg:order-1" : "lg:text-left text-center order-2 lg:order-2"
          }`}
        >
          {/* Tagline badge */}
          <div className={`mb-6 flex justify-center ${isRtl ? "lg:justify-start" : "lg:justify-start"}`}>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#e60000]/30 bg-[#4b0000]/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#ee1c24] backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#e60000] animate-pulse" />
              {isRtl ? "للشركات فقط — B2b" : "B2B Only — Professional"}
            </span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-tight">
            {isRtl ? (
              <>
                بنية تحتية و
                <span className="bg-gradient-to-r from-[#e60000] to-[#ee1c24] bg-clip-text text-transparent">
                  كاميرات مراقبة
                </span>
                {" "}ومراقبة ذكية
              </>
            ) : (
              <>
                IT Infrastructure,{" "}
                <span className="bg-gradient-to-r from-[#e60000] to-[#ee1c24] bg-clip-text text-transparent">
                  CCTV Security
                </span>
                {" "}& Smart Monitoring
              </>
            )}
          </h1>

          <p className="mt-6 text-base leading-relaxed text-[#bdbdbd] sm:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0">
            {content.subtitle}
          </p>

          <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4">
            <CTAButtons locale={locale} variant="hero" />
          </div>
        </div>

        {/* Hero Visual (Shield Emblem Logo) */}
        <div
          className={`lg:col-span-5 flex justify-center order-1 ${
            isRtl ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <div className="relative group flex items-center justify-center">
            {/* Glowing effect behind logo */}
            <div className="absolute inset-0 rounded-full bg-[#e60000]/20 blur-[60px] group-hover:bg-[#e60000]/30 transition-all duration-500 scale-90" />
            <div className="relative flex items-center justify-center p-6 bg-gradient-to-b from-[#1a1a1b]/60 to-[#121212]/80 rounded-[2.5rem] border border-[#1a1a1b] shadow-2xl backdrop-blur-xl transition duration-500 hover:border-[#e60000]/40 hover:-translate-y-1">
              <Image
                src="/images/techroom-logo.png"
                alt="TechRoom Solutions Emblem"
                width={360}
                height={360}
                className="w-64 h-auto sm:w-80 md:w-90 object-contain drop-shadow-[0_10px_20px_rgba(230,0,0,0.25)] filter contrast-125"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
