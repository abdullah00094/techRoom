import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { SmartDashboardSection } from "@/components/sections/SmartDashboardSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import type { Locale } from "@/lib/i18n";

type Props = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const l = locale as Locale;

  return (
    <>
      <HeroSection locale={l} />
      <ServicesOverview locale={l} />
      <WhyChooseUs locale={l} />
      <HowItWorksSection locale={l} />
      <TrustSection locale={l} />
      <SmartDashboardSection locale={l} />
      <FinalCTASection locale={l} />
    </>
  );
}
