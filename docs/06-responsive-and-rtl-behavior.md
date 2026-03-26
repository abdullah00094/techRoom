# Responsive and RTL Behavior

## Responsive navigation

Desktop vs mobile navigation is controlled at runtime in:

- [`components/layout/Header.tsx`](../components/layout/Header.tsx)

`Header` uses `window.matchMedia("(min-width: 1024px)")` (Tailwind `lg` default) to decide which navigation UI to render:

- `isDesktop === true`: renders the desktop `<nav>` (with shared [`NavLinksList`](../components/layout/NavLinksList.tsx))
- `isDesktop === false`: renders [`MobileNav`](../components/layout/MobileNav.tsx)

This removes reliance on CSS-only hiding for the navigation parts.

## RTL strategy

1. Root document attributes are set from the URL:
   - [`app/layout.tsx`](../app/layout.tsx) includes an inline script that sets `dir` and `lang` on `document.documentElement` based on the pathname prefix (`/ar` vs `/en`).
2. Components adjust alignment when `locale === "ar"`:
   - common patterns: `text-end`, `text-right`, `flex-row-reverse`, and `justify-end`
3. Some utilities use Tailwind `rtl:` variants when needed:
   - example: [`components/ui/WhatsAppButton.tsx`](../components/ui/WhatsAppButton.tsx) uses `rtl:left-6` to swap fixed positioning.

## Tailwind breakpoint usage

Many sections use Tailwind’s responsive grid utilities (e.g. `sm:grid-cols-*`, `md:*`, `lg:*`) without duplicating markup. RTL is then applied by locale-aware class switches inside the same component.

