# SEO and Metadata

SEO in this project is centralized in:

- [`lib/seo.ts`](../lib/seo.ts) via `buildMetadata()`

## `buildMetadata()` responsibilities

`buildMetadata({ locale, title, description, path, noIndex, image })` produces a Next.js [`Metadata`](https://nextjs.org/docs/app/api-reference/functions/generate-metadata) object with:

- `title` and `description`
- `openGraph` fields (including OG locale selection)
- `twitter` card fields
- `robots` handling when `noIndex` is set
- `alternates` for canonical + `hreflang` language URLs

It uses:

- `NEXT_PUBLIC_SITE_URL` (or a default) as the base URL
- locale-specific default descriptions for `en`/`ar`

## How pages use it

Most pages implement:

- `export async function generateMetadata({ params }) { ... }`

and call:

- `buildMetadata({ locale, title/subtitle, path })`

so metadata is consistent across the site routes.

