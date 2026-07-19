# K&K Content Dashboard — Payload CMS

An admin dashboard, embedded in this same Next.js app, where the partners edit
every piece of site content in all three languages without touching code. Login
lives at **`/admin`** (on-domain, HOWF-controlled). Built per
`kandkcontentdashboardplan.pdf`.

> **Status:** the dashboard is built, boots, and holds the real migrated content
> (verified locally on SQLite). What remains before it drives the live site is
> infrastructure + the read-swap — see **Remaining** below.

---

## Decisions taken (plan §11 defaults)

- **Both partners publish directly** — drafts/versions are available (Save Draft),
  but there is no forced approval gate.
- **EN-first with fallback** — AR/FR fall back to English until a translation is
  added (`localization.fallback: true`). This matches how the static site already
  behaves.
- **Roles:** `admin` (HOWF) manages everything incl. users; `editor` (Elie, Jihad)
  manages all content + media + SEO in every locale, but not users. Layout,
  components, navigation structure and styles stay in code — out of reach by
  construction.

## What's modelled

**Collections** (`payload/collections/`): Users, Media, Insights, Resources,
Services, Industries, Sectors, Partners.
**Globals** (`payload/globals/`): Site settings (identity, contact/NAP, footer),
Homepage (hero, stats, method, why, CTA), Navigation labels.

Every translatable field is localized EN/AR/FR; slugs are single/non-localized so
URLs stay stable across languages.

## What's migrated (via `app/api/seed/route.ts`)

Insights ×10, Resources ×10, Services ×4, Industries ×20, Sectors ×8, Partners ×2,
plus the three globals — each in all three locales, loaded from the existing
`content/{en,ar,fr}.ts`. Verified: localized values round-trip per locale (e.g. an
insight title reads EN/AR/FR correctly).

---

## Run locally

```bash
# .env.local already has PAYLOAD_SECRET and DATABASE_URI=file:./cms-local.db (SQLite)
npm run dev
# visit http://localhost:3000/admin  → create first user (or run the seed below)
```

Seed the content into a fresh local DB (dev only):

```bash
curl "http://localhost:3000/api/seed?key=$PAYLOAD_SECRET"
# creates admin@thehowf.com / ChangeMe!12345 (override with SEED_ADMIN_PW) + all content
```

## Go live (production)

1. **Provision infra** on the existing Vercel project:
   - Postgres — Neon free tier or Vercel Postgres → `DATABASE_URI=postgres://…`
     (the config auto-selects Postgres when the URI starts with `postgres`).
   - Vercel Blob → `BLOB_READ_WRITE_TOKEN=…` (media then stores to Blob instead of disk).
   - `PAYLOAD_SECRET=…` (a long random string).
2. **Migrate schema + content** once: deploy, then with `ALLOW_SEED=true` set,
   hit `/api/seed?key=$PAYLOAD_SECRET`. Then **remove the seed route**.
3. Decide account ownership (plan §10: HOWF-managed vs client-owned).

## Remaining (the read-swap — what makes edits appear on the site)

Right now the **public site still renders from the static `content/{en,ar,fr}.ts`**,
so editing in the dashboard does not yet change the live pages. Finishing steps:

1. Point `lib/content.ts` `getDictionary()` (and the collection queries used by
   Insights/Resources/Services/Industries/Sectors) at Payload's Local API instead
   of the static import, with on-publish **revalidation** (`revalidateTag`).
2. Model the remaining page-copy globals (About, Clients, Contact, Careers, Privacy
   pages + Services/Resources/Insights intros) — identical pattern to the three
   already done.
3. Migrate media (images/videos) into the Media library and wire relations (cover
   images, hero, partner photos).
4. Generate `payload-types.ts` for end-to-end type safety.

Estimated ~2–3 days, per the revised plan.

## Notes

- `next.config.mjs` allows `'unsafe-eval'` in the CSP **only in development** (Next
  HMR needs it); production stays strict.
- The `payload` CLI (`generate:types` / `generate:importmap`) hits a Node-22 ESM/TLA
  issue; the import map is generated automatically by the running app, and types
  are a follow-up. This does not affect the app at build or runtime.
