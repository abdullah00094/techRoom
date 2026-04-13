import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  /** Alternate background (light gray) */
  alt?: boolean;
  /** Optional id for anchor links */
  id?: string;
  /** Optional wrapper class (e.g. for max-width) */
  wrapperClassName?: string;
}

export function Section({
  children,
  className = "",
  alt = false,
  id,
  wrapperClassName = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`fade-up py-14 sm:py-18 lg:py-22 ${alt ? "bg-[var(--section-alt)]" : "bg-[var(--background)]"} ${className}`}
    >
      <div
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${wrapperClassName}`}
      >
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-9 sm:mb-11 lg:mb-12 ${centered ? "mx-auto max-w-3xl text-center" : ""} ${className}`}
    >
      <h2 className="text-2xl font-bold tracking-tight text-[var(--foreground)] sm:text-3xl lg:text-[2.15rem]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base leading-relaxed text-[var(--muted)] sm:mt-4 sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
