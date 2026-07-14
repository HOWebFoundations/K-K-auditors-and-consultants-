# K&K Auditors & Consultants — Website

A trilingual (English · العربية · Français) marketing website for **K&K Auditors &
Consultants Civil Co.**, a Beirut-based audit, tax and advisory firm.

Built with **Next.js 14 (App Router)** and designed to deploy on **Vercel**.

This rebuild replaces the firm's previous off-the-shelf WordPress theme and implements
the recommendations from the SEO/AI audit and the website review, using the firm's own
brand (new navy logo, reproduced **as text/vector, not a copied image**) and the content
from the "Doing Business in Lebanon" handbook.

---

## Highlights

- **Text-based logo.** The K&K "chevron" mark is an inline **SVG** and the wordmark is
  real HTML text (`components/Logo.tsx`) — no raster/PNG of the original artwork. It stays
  crisp at any size and adapts to light/dark surfaces.
- **New brand colourway.** Brand navy `#204078` with a gold accent, a full design system
  in `app/globals.css` (RTL-aware, using CSS logical properties).
- **Three languages with routing.** `/en`, `/ar`, `/fr` under `app/[locale]/…`. Arabic
  renders right-to-left (`dir="rtl"`). Content lives in `content/{en,ar,fr}.ts`; any string
  a translation omits falls back to English automatically.
- **Report fixes applied** (from the two review documents):
  - No demo/placeholder content, no links leaking to a theme demo site.
  - **Working contact form** (`components/ContactForm.tsx` → `app/api/contact/route.ts`).
  - **One consistent NAP** (name, address, phone) from a single source of truth
    (`lib/site.ts`) — used identically across every page, the footer and the schema.
  - WhatsApp button, Google Maps embed, clear CTAs.
  - Real partner bios & credentials, GMN International affiliation, a fuller structure.
  - **Tax content moved out of the PDF** into individual, answer-first HTML guides
    (`/resources/*`) with tables, FAQs, "last updated" dates and primary sources.
  - **SEO/AI:** JSON-LD (`AccountingService`/`LocalBusiness`, `Person`, `Service`,
    `Article`, `FAQPage`, `BreadcrumbList`), one descriptive `H1` per page, optimised
    titles/meta, `hreflang` alternates, `sitemap.xml`, `robots.txt`.

---

## Local development

```bash
npm install
npm run dev      # http://localhost:3000  (redirects to /en)
npm run build    # production build
npm run start    # serve the production build
```

Requires Node 18.17+ (Node 20/22 recommended).

---

## Deploy to Vercel

This repo is Vercel-ready — Vercel auto-detects Next.js, no config needed.

**Option A — Git integration (recommended):**
1. Push this branch to GitHub (already the case if you're reading this there).
2. In Vercel → **Add New… → Project → Import** this repository.
3. Framework preset: **Next.js** (auto-detected). Click **Deploy**.
4. Every push creates a **Preview Deployment**; the production branch deploys to
   production. Set the production domain to `kandkauditors.com` when ready.

**Option B — Vercel CLI:**
```bash
npm i -g vercel
vercel          # preview deployment (prints a preview URL)
vercel --prod   # production deployment
```

### Environment variables (optional)

The contact form works out of the box (it validates and confirms submissions). To have
enquiries emailed, set these in Vercel → Project → Settings → Environment Variables:

| Variable         | Purpose                                             |
| ---------------- | --------------------------------------------------- |
| `RESEND_API_KEY` | [Resend](https://resend.com) API key to send email  |
| `CONTACT_TO`     | Inbox for enquiries (default `info@kandkauditors.com`) |
| `CONTACT_FROM`   | Verified "from" address for Resend                  |

Without these, submissions are validated and logged server-side and the visitor still
gets a success confirmation (ideal for a preview).

---

## Project structure

```
app/
  [locale]/            # /en, /ar, /fr — layout sets lang & dir, header/footer, JSON-LD
    page.tsx           # home
    about/ services/ resources/ clients/ insights/ contact/ careers/ privacy/
    services/[slug]/   resources/[slug]/   insights/[slug]/
  api/contact/route.ts # working form endpoint (graceful email via Resend)
  sitemap.ts  robots.ts  icon.svg
components/            # Logo (text/SVG), Header, Footer, LanguageSwitcher, ContactForm, …
content/               # en.ts (source of truth) + ar.ts + fr.ts (deep-merged over en)
lib/                   # i18n config, site NAP, content loader, JSON-LD schema builders
middleware.ts          # locale detection & redirect
```

### Editing content

All copy lives in `content/en.ts` (typed by `content/types.ts`). Arabic and French are
`DeepPartial` overrides in `content/ar.ts` / `content/fr.ts` — translate a value to
override English, omit it to fall back. Structural fields (`slug`, `icon`, `date`) are kept
identical across languages.

Business contact details are centralised in `lib/site.ts` — change them once, everywhere.

---

## Notes on tax content

The `/resources` guides summarise the firm's "Doing Business in Lebanon" handbook
(figures as at the firm's April 2024 edition). Lebanese rates and thresholds change often;
each guide shows a "last updated" date, cites its primary sources, and notes where figures
should be confirmed. This is general information, not tax or legal advice.
