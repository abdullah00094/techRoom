# Component Hierarchy

## High-level folders

- [`app/`](../app/): Next.js routes and layouts (App Router)
- [`components/`](../components/): Reusable UI and page sections
- [`content/`](../content/): Locale-specific data (copy, labels, structured lists)
- [`lib/`](../lib/): Utilities (i18n helpers, SEO metadata, form validation helpers)

## `app/` (route entrypoints)

Typical flow:

- `app/layout.tsx`: global document shell and base metadata
- `app/[locale]/layout.tsx`: locale shell (Header/Footer/WhatsApp)
- `app/[locale]/page.tsx`: homepage section composition
- `app/[locale]/**/page.tsx`: page-specific section composition or detail pages

## `components/layout/`

- [`Header.tsx`](../components/layout/Header.tsx): top navigation, language switcher, desktop nav or mobile hamburger
- [`MobileNav.tsx`](../components/layout/MobileNav.tsx): slide-over mobile navigation panel
- [`Footer.tsx`](../components/layout/Footer.tsx): footer columns and WhatsApp CTA
- [`NavLinksList.tsx`](../components/layout/NavLinksList.tsx): shared nav link renderer used by Header/MobileNav

## `components/sections/` (page sections)

These are “section components” used by pages:

- Homepage sections live in `components/sections/*` and are composed in [`app/[locale]/page.tsx`](../app/%5Blocale%5D/page.tsx).
- Most take a `locale` prop and use it to pick the matching entry from `content/{en,ar}`.

Examples:

- [`HeroSection.tsx`](../components/sections/HeroSection.tsx)
- [`ServicesOverview.tsx`](../components/sections/ServicesOverview.tsx)
- [`FAQSection.tsx`](../components/sections/FAQSection.tsx)
- [`ContactSection.tsx`](../components/sections/ContactSection.tsx)

## `components/ui/` (primitives)

Reusable UI primitives:

- [`Button.tsx`](../components/ui/Button.tsx): consistent button/link styling
- [`Card.tsx`](../components/ui/Card.tsx): card + `CardTitle`
- [`Section.tsx`](../components/ui/Section.tsx): section container + `SectionHeader`
- [`LanguageSwitcher.tsx`](../components/ui/LanguageSwitcher.tsx)
- [`WhatsAppButton.tsx`](../components/ui/WhatsAppButton.tsx): fixed floating WA button

## `components/cta/`

- [`CTAButtons.tsx`](../components/cta/CTAButtons.tsx): shared CTA group (primary + WhatsApp + optional site-visit)

## `components/forms/`

- [`ContactForm.tsx`](../components/forms/ContactForm.tsx): consultation form UI + client-side validation + mocked submission

