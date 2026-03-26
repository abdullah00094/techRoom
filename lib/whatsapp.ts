import { whatsappNumber, whatsappMessage } from "@/content/en/navigation";
import { whatsappMessage as whatsappMessageAr } from "@/content/ar/navigation";
import type { Locale } from "@/lib/i18n";

const waMessageByLocale: Record<Locale, string> = {
  en: whatsappMessage,
  ar: whatsappMessageAr,
};

export function getWhatsAppMessage(locale: Locale): string {
  return waMessageByLocale[locale];
}

export function getWhatsAppUrl(locale: Locale, message?: string): string {
  const msg = message ?? getWhatsAppMessage(locale);
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`;
}

