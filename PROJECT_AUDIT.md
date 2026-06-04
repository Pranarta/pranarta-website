# Project Audit — Pranarta / Tom Van Geem (Ibiza)

**Generated:** June 4, 2026  
**Purpose:** Complete overview of the codebase before making changes.  
**Stack:** Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · TypeScript

---

## Executive summary

This is a **luxury marketing website** for private **sound and body experiences in Ibiza**. It is a multi-page brochure site with **WhatsApp as the primary conversion path** (no contact forms or payment flows).

**Brand naming is split across the project:**

| Surface | Name used |
|---------|-----------|
| Site copy, header, footer, metadata | **Tom Van Geem** |
| Instagram | **@pranarta7** |
| Some gallery alt text | **Pranarta** |

Aligning identity (Pranarta vs Tom Van Geem) should be an early decision before copy or visual changes.

---

## 1. Site structure

```
/
├── app/                      # Routes (App Router)
│   ├── layout.tsx            # Root shell: fonts, Header, Footer, WhatsApp float, Analytics
│   ├── globals.css           # Design tokens, animations, custom utilities
│   ├── page.tsx              # Home (/)
│   ├── sound/page.tsx        # Sound experiences
│   ├── body/page.tsx         # Body experiences
│   ├── gallery/page.tsx      # Photo gallery
│   └── booking/page.tsx      # Booking inquiry cards
├── components/               # Site-specific + shadcn/ui scaffold
│   ├── header.tsx
│   ├── footer.tsx
│   ├── reveal.tsx
│   ├── whatsapp-float.tsx
│   ├── floating-particles.tsx  # unused
│   ├── theme-provider.tsx      # unused
│   └── ui/                     # ~57 shadcn/Radix primitives (unused by pages)
├── lib/
│   └── utils.ts              # cn() — clsx + tailwind-merge
├── hooks/
│   ├── use-toast.ts          # shadcn (unused by pages)
│   └── use-mobile.ts         # shadcn (unused by pages)
├── public/
│   ├── icon.svg
│   ├── placeholder.svg       # unused
│   └── placeholder-logo.svg  # unused
├── next.config.mjs
├── postcss.config.mjs
├── components.json           # shadcn config (new-york style)
├── package.json
└── PROJECT_AUDIT.md          # this file
```

### Architecture layers

| Layer | Implementation |
|-------|----------------|
| **Routing** | File-based App Router; no `middleware`, no `app/api/`, no dynamic routes |
| **Layout** | Global `Header` → `main` → `Footer`; mobile-only `WhatsAppFloat` |
| **Data** | Hardcoded arrays in each page (experiences, gallery, booking options) |
| **Conversion** | External: WhatsApp, Instagram, `mailto:` |
| **Analytics** | `@vercel/analytics` when `NODE_ENV === 'production'` |

### Navigation flow

```
/ (Home)
 ├── /sound      ↔ cross-sell ↔ /body
 ├── /body
 ├── /gallery    → Instagram (tile + CTA links)
 └── /booking    → WhatsApp (per-option preset messages)

All pages → Header nav + Footer links + WhatsApp CTAs
Mobile only → fixed WhatsApp FAB (lg:hidden)
```

---

## 2. Pages

| Route | File | Purpose |
|-------|------|---------|
| `/` | `app/page.tsx` | Landing: hero, fusion story, Sound/Body cards, gallery preview, CTA |
| `/sound` | `app/sound/page.tsx` | Four sound offerings, cross-sell to Body, WhatsApp CTA |
| `/body` | `app/body/page.tsx` | Three body offerings, cross-sell to Sound, WhatsApp CTA |
| `/gallery` | `app/gallery/page.tsx` | Six-image grid; tiles link to Instagram |
| `/booking` | `app/booking/page.tsx` | Six inquiry types; each opens WhatsApp with preset text |

### Page section patterns (shared)

- **Hero:** `min-h-screen` or `min-h-[50–70vh]`, dark background, optional full-bleed background image (~35–40% opacity), gradient overlay, centered serif headline, `Reveal` animations.
- **Content:** `py-20`–`py-32`, `max-w-*` containers, `border-t border-gold/10` between major blocks.
- **CTAs:** Gold filled or gold outline buttons; uppercase, wide letter-spacing.
- **Missing routes:** About, Pricing, FAQ, Privacy, Terms, Contact form page.

### Per-page breakdown

#### Home (`app/page.tsx`)

1. Hero — Tom Van Geem, handpan tagline, links to `/sound` and `/body`
2. “Where Sound Meets Body” — positioning for villas, retreats, gatherings
3. Sound & Body preview cards — 2-column grid with hover scale
4. Gallery preview — 3 images + link to `/gallery`
5. Book Your Experience — WhatsApp + Instagram

#### Sound (`app/sound/page.tsx`)

1. Hero — handpan background image
2. Four alternating image/text blocks: Live Handpan, Sunset, Villa & Events, Organic Electronic
3. Cross-sell — head massage → `/body`
4. CTA — WhatsApp (sound-specific prefill)

#### Body (`app/body/page.tsx`)

1. Hero — head massage background image
2. Three alternating blocks: Deep Head Massage, Energy Work, 1:1 Private Sessions
3. Cross-sell — optional handpan → `/sound`
4. CTA — WhatsApp (body-specific prefill)

#### Gallery (`app/gallery/page.tsx`)

1. Minimal title hero
2. 6 images in responsive grid (`aspect-[4/5]`), hover → Instagram icon overlay
3. Instagram follow CTA

#### Booking (`app/booking/page.tsx`)

1. Title + availability copy
2. Six cards: Sound, Body, Villa, Retreat, Event, Custom — each “Inquire on WhatsApp” with encoded message

---

## 3. Components

### Actively used (site-specific)

| Component | File | Type | Role |
|-----------|------|------|------|
| `Header` | `components/header.tsx` | Client | Fixed nav, scroll styling, mobile drawer, active route |
| `Footer` | `components/footer.tsx` | Server | Brand, nav, contact links, copyright |
| `Reveal` | `components/reveal.tsx` | Client | IntersectionObserver fade-up on scroll |
| `WhatsAppFloat` | `components/whatsapp-float.tsx` | Client | Fixed gold FAB; **mobile only** (`lg:hidden`) |

### Present but unused

| Component | Notes |
|-----------|--------|
| `FloatingParticles` | Gold particles; not imported anywhere |
| `ThemeProvider` | `next-themes` wrapper; not in `layout.tsx` (site is dark-only) |

### shadcn/ui (`components/ui/*`)

- Scaffolded from **shadcn “new-york”** (`components.json`).
- Includes Button, Dialog, Form, Carousel, Sidebar, Toast, etc. (~57 files).
- **No imports from `app/` pages** — live UI is custom Tailwind on native elements.

### Hooks

| Hook | Used by pages? |
|------|----------------|
| `hooks/use-toast.ts` | No |
| `hooks/use-mobile.ts` | No |

### Utilities

- `lib/utils.ts` — `cn(...inputs)` for class merging; used by `Header` and `Reveal`.

---

## 4. Images

### Local (`public/`)

| File | Referenced in app? |
|------|-------------------|
| `icon.svg` | Not referenced in TSX (may serve as default favicon if placed in `app/`) |
| `placeholder.svg` | No |
| `placeholder-logo.svg` | No |

**No local photography** — all content imagery is remote.

### Remote (Vercel Blob)

**Host:** `https://hebbkx1anhila5yf.public.blob.vercel-storage.com/`

**Count:** 6 unique JPEG URLs (WhatsApp export filenames; some typos in paths: `jat`, `nat`, `j27`).

| Role | Alt / context | Filename hint |
|------|---------------|---------------|
| Handpan / sound hero | Handpan Session, Sound Experience | `d.png-...jpeg` |
| Head massage / body | Head Massage, Body Experience | `...23.27.24-sHKAV8...` |
| Es Vedrá portrait | Es Vedra Portrait, Sunset | `...22.34.11-E7LucU...` |
| Collage / energy | Sound & Body Collage | `...23.j27.24-lJSYqpe...` |
| Villa / events | Pranarta Experiences | `...jat%2023.27.24-sQZgTo...` |
| Organic / 1:1 | Tom Van Geem Experiences | `...nat%2023.27.24-fhHO9c...` |

### Image usage by page

| Page | Implementation |
|------|----------------|
| Home | Hero `backgroundImage` + 2 card `<img>` + 3 gallery preview `<img>` |
| Sound | Hero background + 4 experience `<img>` |
| Body | Hero background + 3 experience `<img>` |
| Gallery | 6 `<img>` in linked tiles |

### Image technical notes

- Uses native **`<img>`**, not `next/image`.
- `next.config.mjs` sets `images.unoptimized: true`.
- No centralized image constants file; URLs duplicated across pages.
- No `srcset`, lazy-loading attributes, or blur placeholders.
- Heroes duplicate imagery already used in cards/gallery.

---

## 5. Styling system

| Piece | Details |
|-------|---------|
| **CSS entry** | `app/globals.css` |
| **Tailwind** | v4 via `@import 'tailwindcss'` |
| **PostCSS** | `@tailwindcss/postcss` only (`postcss.config.mjs`) |
| **Animations** | `tw-animate-css` import; custom keyframes in globals |
| **Tokens** | CSS variables in `:root` + `@theme inline` (no separate `tailwind.config`) |
| **Components** | Utility-first Tailwind; shadcn tokens exist but pages use brand classes |
| **Icons** | `lucide-react` |
| **Class helper** | `cn()` from `@/lib/utils` |
| **Border radius** | `--radius: 0rem` — sharp, editorial corners |
| **Dark mode** | Single dark theme; no UI toggle |

### Custom CSS in `globals.css`

| Feature | Used on pages? |
|---------|----------------|
| Keyframes: `float`, `fade-up`, `fade-in`, `particle`, `glow` | Partially (`animate-fade-up` in mobile menu; `animate-glow` on WhatsApp FAB) |
| `.reveal` / `.reveal.visible` | No — `Reveal` component uses Tailwind transitions instead |
| `.btn-outline` / `.btn-primary` | No — buttons use inline Tailwind |
| `.text-balance` | No |
| `.parallax` | No |
| Stagger delays `.animation-delay-*` | No |

### Responsive behavior

- Mobile-first breakpoints (`sm:`, `md:`, `lg:`).
- Header: desktop links at `lg+`; hamburger below.
- WhatsApp float: visible below `lg` only.
- Grids: 1 → 2 → 3 columns depending on section.

---

## 6. Color palette

Defined in `app/globals.css` `:root` and mapped in `@theme inline`.

### Brand colors

| Token | Hex | Tailwind class | Usage |
|-------|-----|----------------|-------|
| `--dark` | `#1a1612` | `bg-dark` | Page background |
| `--dark-lighter` | `#2a2420` | `bg-dark-lighter` | Gallery tile fallback |
| `--beige` | `#e8e0d5` | `text-beige` | Primary text |
| `--light-beige` | `#f5f1eb` | `text-light-beige` | Defined; rarely used on pages |
| `--gold` | `#c9a961` | `text-gold`, `bg-gold`, `border-gold` | Accents, CTAs, active nav |
| `--soft-gold` | `#d4b982` | `text-soft-gold` | Accent variant |

### Semantic (shadcn-compatible)

| Token | Value |
|-------|-------|
| `--background` | `#1a1612` |
| `--foreground` | `#e8e0d5` |
| `--primary` | `#c9a961` |
| `--primary-foreground` | `#1a1612` |
| `--muted-foreground` | `#a09080` |
| `--border` / `--input` | `rgba(201, 169, 97, 0.2)` |
| `--ring` | `#c9a961` |
| `--destructive` | oklch red (unused on marketing pages) |

### Common opacity patterns on pages

- Text: `text-beige/50` – `text-beige/90`
- Borders: `border-gold/10`, `border-gold/20`, `border-gold/25`
- Overlays: `bg-dark/40`, `bg-gradient-to-b from-dark/... to-dark`
- Header: `bg-dark/98 backdrop-blur-[10px]` when scrolled

**Mood:** warm charcoal, champagne gold, sand beige — luxury spa / Ibiza villa aesthetic.

---

## 7. Typography

### Font loading (`app/layout.tsx`)

| Role | Family | Weights | CSS variable | Default usage |
|------|--------|---------|--------------|---------------|
| Sans / UI | **Lato** | 300, 400, 700 | `--font-lato` | `body` → `font-sans` |
| Serif / display | **Cormorant Garamond** | 300–700 | `--font-cormorant` | `font-serif` on headings |

Mapped in `@theme inline` as `--font-sans` and `--font-serif`.  
Body: `font-sans antialiased`, global `line-height: 1.7`, `html { scroll-behavior: smooth }`.

### Typographic scale (patterns)

| Element | Classes / pattern |
|---------|-------------------|
| Eyebrow | `text-gold text-xs sm:text-sm tracking-[0.2em] uppercase font-light` |
| H1 | `font-serif font-light text-[clamp(2rem,5vw,4rem)] tracking-[0.02em] text-beige` |
| H2 (home) | `font-serif font-light text-[clamp(1.8rem,3.5vw,2.8rem)]` |
| H2 (inner) | `font-serif font-light text-[clamp(1.6rem,3vw,2.4rem)]` |
| H3 / cards | `font-serif` + gold or beige; `tracking-[0.02em]`–`[0.05em]` |
| Body | `font-light text-beige/70–80 leading-relaxed` |
| CTAs | Sans inherited; `text-[0.85rem] tracking-[0.15em] uppercase font-light` |
| Logo | `text-gold text-xs sm:text-sm tracking-[0.15em] uppercase font-light` |

---

## 8. Metadata & contact

### SEO (`app/layout.tsx`)

```ts
title: 'Tom Van Geem — Private Sound & Body Experiences | Ibiza'
description: 'Private sound and body experiences in Ibiza...'
keywords: handpan, Ibiza, sound experiences, body experiences, ...
openGraph: { title, description, type: 'website' }  // no og:image
```

- No per-page `metadata` exports.
- No `sitemap.xml` or `robots.txt` in repo.

### Contact endpoints (hardcoded in multiple files)

| Channel | Value |
|---------|--------|
| WhatsApp | `https://wa.me/972587855123` (+972 Israel) |
| Instagram | `https://www.instagram.com/pranarta7/` |
| Email | `mailto:pranartra7@gmail.com` (**possible typo:** extra `r` in `pranartra`) |

WhatsApp prefill messages vary by page (general, sound, body, booking option).

---

## 9. Tech stack & dependencies

### Core (used)

| Package | Version (approx.) | Role |
|---------|-------------------|------|
| next | 16.2.0 | Framework |
| react / react-dom | 19 | UI |
| tailwindcss | 4.2 | Styling |
| @tailwindcss/postcss | 4.2 | Build |
| lucide-react | 0.564 | Icons |
| @vercel/analytics | 1.6.1 | Production analytics |
| clsx + tailwind-merge | — | `cn()` helper |

### Scaffold / unused by routes

Radix UI primitives, shadcn components, `react-hook-form`, `zod`, `recharts`, `embla-carousel`, `next-themes`, `sonner`, `vaul`, `cmdk`, `date-fns`, etc. — typical **v0 / shadcn boilerplate**.

### Config flags

```js
// next.config.mjs
typescript: { ignoreBuildErrors: true }
images: { unoptimized: true }
```

---

## 10. Services & content themes

**Sound:** Live handpan, sunset performances, villa/private events, organic electronic journeys.

**Body:** Deep head massage, Reiki/energy work, 1:1 private sessions.

**Positioning:** Luxury villas, retreats, intimate gatherings; Ibiza, Spain.

**Booking types:** Sound, Body, Villa, Retreat, Event, Custom — all via WhatsApp only.

---

## 11. Gaps, risks & recommended follow-ups

| Area | Issue |
|------|--------|
| **Brand** | Tom Van Geem vs Pranarta vs @pranarta7 — unify before redesign |
| **Images** | Remote-only, duplicated URLs, no `next/image`, fragile blob filenames |
| **Dead code** | `FloatingParticles`, `ThemeProvider`, entire `components/ui/*`, unused `public` placeholders |
| **CSS drift** | `.btn-*` and `.reveal` in CSS vs Tailwind in components |
| **SEO** | No OG image, no per-route metadata, no sitemap |
| **Legal** | No privacy policy or imprint |
| **A11y** | No skip link; menu has `aria-label` |
| **Build** | `ignoreBuildErrors: true` masks TypeScript problems |
| **Email** | Verify `pranartra7` vs intended `pranarta7` spelling |
| **Favicon** | `public/icon.svg` not wired in `app/` metadata |

---

## 12. Inventory summary

| Category | Count |
|----------|-------|
| App routes (pages) | 5 |
| Layout + globals | 2 files |
| Active custom components | 4 |
| Unused custom components | 2 |
| shadcn ui component files | ~57 |
| Unique remote photos | 6 |
| Local photos in use | 0 |
| npm scripts | `dev`, `build`, `start`, `lint` |

---

## 13. Key file reference

| Concern | Primary files |
|---------|----------------|
| Global shell | `app/layout.tsx` |
| Design tokens | `app/globals.css` |
| Home | `app/page.tsx` |
| Navigation | `components/header.tsx`, `components/footer.tsx` |
| Scroll animation | `components/reveal.tsx` |
| shadcn config | `components.json` |
| Build | `next.config.mjs`, `postcss.config.mjs` |
| Dependencies | `package.json` |

---

*End of audit. Update this document when structure, branding, or assets change materially.*
