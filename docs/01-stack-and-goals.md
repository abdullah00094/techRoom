# Stack and Goals

## Tech stack

- Next.js `16.1.6` (React + App Router)
- React `19.2.3`
- TypeScript `^5`
- Tailwind CSS `^4`
- RTL-aware styling via Tailwind utilities and explicit RTL attributes

## Why the structure looks this way

- App Router routes (`app/**/page.tsx`) compose page sections using shared React components (`components/sections/**`).
- Most page text and labels come from locale-specific content modules (`content/{en,ar}/**`), keeping UI components mostly “data-driven”.
- Shared UI primitives (`components/ui/**`) provide consistent spacing, borders, typography, and CTA/button styles.

