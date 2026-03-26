# Page Flow (Layouts -> Pages -> Sections)

This file describes how a request becomes UI.

## Composition diagram (homepage example)

```mermaid
flowchart TD
  RootLayout["app/layout.tsx RootLayout"]
  LocaleLayout["app/[locale]/layout.tsx LocaleLayout"]
  HomePage["app/[locale]/page.tsx HomePage"]
  ServicesPage["app/[locale]/services/page.tsx ServicesPage"]
  Sections["components/sections/*"]
  Header["components/layout/Header.tsx"]
  Footer["components/layout/Footer.tsx"]
  WhatsApp["components/ui/WhatsAppButton.tsx"]
  Content["content/{en,ar}/* locale files"]

  RootLayout --> LocaleLayout
  LocaleLayout --> Header
  LocaleLayout --> Footer
  LocaleLayout --> WhatsApp
  LocaleLayout --> HomePage
  LocaleLayout --> ServicesPage
  HomePage --> Sections
  ServicesPage --> Sections
  Sections --> Content
```

## Key data flow rule

UI sections/components usually accept a `locale` prop and select data from `content/{locale}/...`.

For example:

- `app/[locale]/page.tsx` composes homepage sections.
- Each section (e.g. [`components/sections/HeroSection.tsx`](../components/sections/HeroSection.tsx)) loads locale content from `content/en/...` or `content/ar/...`.

