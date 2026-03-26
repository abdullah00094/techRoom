# Content Data Model

Most text, labels, and structured lists are stored in locale-specific modules under:

- `content/en/`
- `content/ar/`

Components typically accept a `locale` prop and select data from these files.

## Navigation and contact constants

- `content/en/navigation.ts`
- `content/ar/navigation.ts`

Exports include:

- `navLinks`: main navbar items (`href`, `label`)
- `whatsappNumber`, `whatsappMessage`: used to build the prefilled WhatsApp URL
- `contactEmail`, `contactPhone`: used for `mailto:` and `tel:`

## Page-specific data

These “data files” are imported by pages and section components:

- `content/en/home.ts` and `content/ar/home.ts`
  - homepage sections (hero slides, trust text, services overview blocks, process steps, FAQ, contact section data, etc.)
- `content/en/services.ts` and `content/ar/services.ts`
  - service definitions and detail-page structured content
- `content/en/industries.ts` and `content/ar/industries.ts`
  - industry definitions and detail-page structured content
- `content/en/projects.ts` and `content/ar/projects.ts`
  - case studies shown on the projects page
- `content/en/faq.ts` and `content/ar/faq.ts`
  - homepage FAQ question/answer pairs
- `content/en/pages.ts` and `content/ar/pages.ts`
  - titles/subtitles and page-level strings (services list page headings, about page content, etc.)
- `content/en/footer.ts` and `content/ar/footer.ts`
  - footer tagline + columns

## Shared CTA + form UI text

- `content/en/common.ts` and `content/ar/common.ts`
  - CTA button labels (`cta`)
  - form labels, placeholders, and validation messages (`form`)

The form UI uses these strings directly:

- [`components/forms/ContactForm.tsx`](../components/forms/ContactForm.tsx)

## How WhatsApp links are built

Instead of duplicating URL construction, use:

- [`lib/whatsapp.ts`](../lib/whatsapp.ts)

For example, sections build:

- `getWhatsAppUrl(locale)`

