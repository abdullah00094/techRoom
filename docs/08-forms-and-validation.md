# Forms and Validation

## Contact form component

The consultation form UI lives in:

- [`components/forms/ContactForm.tsx`](../components/forms/ContactForm.tsx)

It is a client component (uses `useState`) and performs:

- Client-side validation on submit
- Inline error messages per field
- Mocked submission delay (currently `800ms`)
- Success/error status messaging

## Inputs and data source

The form uses locale-specific strings and labels:

- `content/{en,ar}/common.ts` exports `form` and `cta`
- `content/{en,ar}/services.ts` provides the service dropdown options

## Status lifecycle

On submit:

- status starts as `idle`
- when validation passes: `sending` -> wait -> `success` (then reset the form)
- on unexpected failure: `error`

## Where validation rules live

Validation is implemented directly in `ContactForm.tsx` (it checks lengths and required fields).

Additionally, this codebase contains generic helpers in:

- [`lib/validators.ts`](../lib/validators.ts)

These helpers are available for future expansion, but the current form uses inline checks.

