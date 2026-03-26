# Development and Deployment

## NPM scripts

From [`package.json`](../package.json):

- `npm run dev`: start the development server
- `npm run build`: create a production build
- `npm run start`: run the production server
- `npm run lint`: run ESLint

## Environment variables

SEO base URL:

- `NEXT_PUBLIC_SITE_URL`

If not set, the code falls back to `https://techroom-eg.com` in [`lib/seo.ts`](../lib/seo.ts).

## Configuration

- [`middleware.ts`](../middleware.ts) handles locale redirects
- Tailwind theme variables and global styles are in [`app/globals.css`](../app/globals.css)

## Deployment notes

This project is compatible with typical Next.js hosting (including Vercel):

- App Router pages are rendered per route
- Localized routes are served under `/en/*` and `/ar/*`

