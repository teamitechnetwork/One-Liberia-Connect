# One Liberia Connect

Community-first public website for One Liberia Connect, a division of One Liberia Enterprise Corporation.

## Run locally

From the workspace root, install dependencies and start the website:

```sh
pnpm install
pnpm --filter @workspace/one-liberia-connect run dev
```

The website uses Next.js App Router. `pnpm --filter @workspace/one-liberia-connect run build`, `lint`, and `typecheck` are available. The shared site font is WhatsApp Sans Var, loaded from WhatsApp's public static font URL.

## Inquiry form integration

The community request, partnership, and contact forms POST validated JSON to `/forms/inquiries`, which Next rewrites to the `app/api/inquiries` route. The public form path avoids a `/api` prefix reserved by the workspace's shared API service. The handler checks required fields, uses a honeypot, and applies a basic rate limit.

Set `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and `CONTACT_FROM_EMAIL` to deliver inquiries through Resend. If those values are missing, the preview returns a clearly labeled preview success without storing or sending the request. Do not rely on that fallback for live submissions.

## Editing copy and navigation

- Page copy, shared service/step data, and editable contact placeholders: `content/site.ts`
- FAQ content: `content/faq.ts`
- Header navigation and keyboard/mobile dropdown labels: `content/nav.ts`
- Page-specific metadata is defined with each route in `app/`.

Contact details are intentionally marked as placeholders until the organization supplies them.

## Email environment variables

Copy `.env.example` as a reference. Keep the Resend API key in your environment's secret manager; do not commit it. Add the three email variables in your deployment environment. Set `NEXT_PUBLIC_SITE_URL` to the canonical domain once one is chosen; on Vercel it otherwise uses the deployment URL.

## Image slots

All photography and logo are local files in `public/images`. Replace a file at the same path to update imagery without external image services.

| Slot | File | Recommended source dimensions |
| --- | --- | --- |
| Header/footer logo | `logo.png` | 1000 × 280, transparent or white background |
| Community mission | `mission.jpg` | 1200 × 1450 |
| About / connectivity infrastructure | `about-technician.jpg` | 1400 × 900 |
| Vision / learning | `vision.jpg` | 1200 × 1000 |
| Community approach meeting | `approach-meeting.jpg` | 1400 × 1000 |
| Partner connectivity context | `partners-tower.jpg` | 1400 × 1000 |
| School technology hub | `tech-hub.jpg` | 1400 × 1000 |
| Cause / Monrovia | `cause-monrovia.jpg` | 1600 × 900 |
| Community request hero | `connect-hero.jpg` | 1200 × 1000 |

Images use `next/image`, descriptive alternate text, and intrinsic/fill sizing to avoid layout shift. Hero images are prioritized; other images are loaded lazily by Next.js.

## Deploy on Vercel

This site is a Next.js app inside a pnpm monorepo. Import the repository into Vercel and configure the project to deploy this app:

1. Set **Root Directory** to `artifacts/one-liberia-connect`, keep the Next.js framework preset, and do not set a static output directory.
2. Keep Vercel's detected install and build commands. The app's build script runs `next build`; its Node.js requirement is `>=20.9.0`.
3. To use the repository's pinned pnpm version, add `ENABLE_EXPERIMENTAL_COREPACK=1` as a Vercel build environment variable.
4. Add `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and `CONTACT_FROM_EMAIL` to the Vercel environments where the app will run. Add `NEXT_PUBLIC_SITE_URL` when the new canonical domain is chosen.
5. Keep the Resend API key in Vercel's environment settings; never commit it. Redeploy after changing environment variables.

The email variables are required for live inquiry delivery. Without them, the form only shows a preview success message and does not save or send the inquiry. `NEXT_PUBLIC_SITE_URL` supplies the canonical URL used for metadata, the sitemap, and robots.

The privacy and terms pages are clearly marked drafts and must be reviewed by qualified counsel before production publication.
