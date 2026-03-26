# Routing and Locales

## Supported locales

- `en` (LTR)
- `ar` (RTL)

Defined in [`lib/i18n.ts`](../lib/i18n.ts).

## Middleware (locale redirects)

All requests are matched by [`middleware.ts`](../middleware.ts) and redirected to a locale-prefixed path when the request URL does not already include one.

Key behaviors:

- `/` redirects to `/${defaultLocale}` (default is `en`)
- `/some-path` redirects to `/${defaultLocale}/some-path`
- requests that already start with `/${locale}/...` pass through

## Locale-prefixed routing

The app uses Next.js App Router with locale folders:

- [`app/[locale]/layout.tsx`](../app/%5Blocale%5D/layout.tsx)
- [`app/[locale]/page.tsx`](../app/%5Blocale%5D/page.tsx) (homepage)
- [`app/[locale]/*/page.tsx`](../app/%5Blocale%5D) for all other pages

The locale layout renders:

- [`components/layout/Header.tsx`](../components/layout/Header.tsx)
- the page content (`children`)
- [`components/layout/Footer.tsx`](../components/layout/Footer.tsx)
- [`components/ui/WhatsAppButton.tsx`](../components/ui/WhatsAppButton.tsx)

## URL building helpers

Use [`localePath(path, locale)`](../lib/i18n.ts) when building links and navigation. It ensures:

- default locale (`en`) still works consistently with `/en/...` routing
- Arabic content uses `/ar/...`

## URL map (current pages)

Example routes:

- `/en` and `/ar`: homepage
- `/en/services` and `/ar/services`: services list
- `/en/services/[slug]` and `/ar/services/[slug]`: service detail
- `/en/industries` and `/ar/industries`: industries list
- `/en/industries/[slug]` and `/ar/industries/[slug]`: industry detail
- `/en/projects` and `/ar/projects`: projects / case studies
- `/en/about` and `/ar/about`: about
- `/en/contact` and `/ar/contact`: contact + consultation form
- `/en/blog` and `/ar/blog`: blog placeholder

