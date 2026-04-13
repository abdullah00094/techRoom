"use client";

import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { headerNavLinks } from "@/content/en/navigation";
import { headerNavLinks as headerNavLinksAr } from "@/content/ar/navigation";

const navByLocale = { en: headerNavLinks, ar: headerNavLinksAr };

type Props = {
  locale: Locale;
  itemClassName: string;
  /** Optional callback (used by mobile to close the menu before navigating). */
  onNavigate?: () => void;
};

export function NavLinksList({ locale, itemClassName, onNavigate }: Props) {
  const links = navByLocale[locale];

  return (
    <>
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={localePath(href, locale)}
          className={itemClassName}
          onClick={onNavigate}
        >
          {label}
        </Link>
      ))}
    </>
  );
}

