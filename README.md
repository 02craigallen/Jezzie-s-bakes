# Jezz Bakes

Website for **Jezz Bakes** — bespoke wedding & birthday cakes in Padstow, Cornwall.
Built with Next.js (App Router), TypeScript and Tailwind CSS.

## What's here

- Real routed pages: Home, Wedding Cakes, Birthday & Celebration Cakes, Gallery, About, Contact
- All 20 usable client photos, sorted into Elegant & Buttercream / Statement Drip / Whimsical & Themed
- Auto-rotating hero photo band, filterable gallery with a lightbox viewer
- A working enquiry form backed by a real serverless API route (`/api/enquiry`) that emails
  submissions — including the uploaded inspiration photo — via [Resend](https://resend.com)

## Running locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Setting up the enquiry form (required before go-live)

The contact form posts to `/api/enquiry`, which sends an email via Resend. Without an API key
it will show the visitor a friendly "please email us directly" message instead of crashing, so
the site is safe to deploy before this step — but enquiries won't arrive until it's done.

1. Create a free account at [resend.com](https://resend.com) (100 emails/day free).
2. Verify a sending domain (recommended) — or, to get started immediately without a domain,
   just leave `RESEND_FROM_EMAIL` unset and it will send from Resend's shared test address.
3. Copy `.env.example` to `.env.local` and fill in:
   - `RESEND_API_KEY` — from the Resend dashboard
   - `ENQUIRY_TO_EMAIL` — the real inbox enquiries should land in
   - `RESEND_FROM_EMAIL` — once a domain is verified, e.g. `Jezz Bakes <hello@jezzbakes.co.uk>`
4. Add the same environment variables in your hosting provider's dashboard (see deployment below).

## Deploying (free subdomain now, custom domain later)

The easiest option is **Vercel** (made by the Next.js team, generous free tier, includes the
serverless function the enquiry form needs):

1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com), "Add New Project", import the repo.
3. Add the environment variables from `.env.example` in the project's Settings → Environment
   Variables.
4. Deploy — you'll get a free `your-project.vercel.app` URL immediately.
5. When a real domain is bought, add it in Settings → Domains and point its DNS at Vercel.
   No code changes needed.

(Netlify works too, via its Next.js runtime adapter, if preferred over Vercel.)

## Still needs real content from the client

These are clearly marked as placeholders on the live site (look for the italic notes):

- Real business email, phone number, and Instagram/Facebook links (currently
  `hello@jezzbakes.co.uk` / `01841 000 000` / placeholder social links) — update in
  `src/components/Footer.tsx`, `src/app/contact/page.tsx`, and the `ENQUIRY_TO_EMAIL` env var
- About the Baker bio/story — `src/app/about/page.tsx` and the About strip on the home page
  (`src/app/page.tsx`)
- 2–3 real customer testimonials with first names — the testimonials section in
  `src/app/page.tsx`
- Real wedding cake photography, once available — replace the "wedding enquiries welcome"
  preview section in `src/app/wedding-cakes/page.tsx` with real wedding photos

## Project structure

```
src/
  app/                 Routes (one folder per page) + the /api/enquiry route
  components/          Nav, Footer, PhotoRotator, MasonryGallery, Lightbox, EnquiryForm, ...
  data/gallery.ts       All cake photo metadata (src, alt text, category)
public/images/
  cakes/               The 20 categorised cake photographs
  logo/                Logo mark + full lockup (backgrounds made transparent)
```

## Notes

- The low-resolution stray thumbnail from the original photo batch (206×206px) was excluded
  from the gallery — all other photos are used at full resolution.
- Images are served through `next/image`, so they're automatically resized and served as
  AVIF/WebP.
