import { Section, SectionHeader } from "@/components/ui/Section";
import type { Locale } from "@/lib/i18n";

type Props = {
  locale: Locale;
  id: string;
  /** Alternate section background (matches `Section` alt) */
  alt?: boolean;
  title: string;
  subtitle: string;
  items: readonly string[];
};

/**
 * Shared checklist grid used by home sections with the same visual pattern
 * (e.g. network + CCTV feature lists).
 */
export function ChecklistSection({ locale, id, alt, title, subtitle, items }: Props) {
  return (
    <Section id={id} alt={alt}>
      <SectionHeader title={title} subtitle={subtitle} />
      <ul
        className={`mx-auto max-w-2xl grid sm:grid-cols-2 gap-3 ${locale === "ar" ? "text-end" : ""}`}
      >
        {items.map((item, i) => (
          <li
            key={i}
            className="flex gap-3 items-center rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] px-4 py-3 shadow-[var(--shadow)]"
          >
            <span className="text-[var(--accent)] shrink-0" aria-hidden>
              ✓
            </span>
            <span className="text-[var(--foreground)] font-medium">{item}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
