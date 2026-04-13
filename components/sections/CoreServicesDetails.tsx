import type { Locale } from "@/lib/i18n";
import { NetworkInfrastructureBlock } from "@/components/sections/NetworkInfrastructureBlock";
import { CCTVBlock } from "@/components/sections/CCTVBlock";
import { BusinessMonitoringBlock } from "@/components/sections/BusinessMonitoringBlock";

type Props = { locale: Locale };

/**
 * Bundles the three “core service” detail blocks (network, CCTV, business monitoring)
 * that previously sat between the services CTA and smart monitoring.
 */
export function CoreServicesDetails({ locale }: Props) {
  return (
    <>
      <NetworkInfrastructureBlock locale={locale} />
      <CCTVBlock locale={locale} />
      <BusinessMonitoringBlock locale={locale} />
    </>
  );
}
