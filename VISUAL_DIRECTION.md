# Visual Direction — PRANARTA

**Status:** Creative strategy only (no code changes)  
**Aligned with:** `REBRANDING_PLAN.md`, `PROJECT_AUDIT.md`  
**Date:** June 4, 2026

---

## 1. Creative north star

### Brand stack (visual priority)

```
PRANARTA                          ← largest, clearest shape on screen
Tom Van Geem                      ← human scale, trust, never competes with logo
Where Sound Meets Body            ← poetic bridge, serif, restrained
```

### What the site should feel like

| Aim for | Means in practice |
|---------|-------------------|
| **Luxury** | Space, restraint, sharp edges, slow motion, no clutter |
| **Authenticity** | Real Tom, real handpan, real Ibiza light — no stock “zen” models |
| **Nature** | Stone, sea horizon, olive shadow, terrace botanics — not jungle overlays |
| **Sound** | Metal, hands, breath, dusk air — imagery suggests listening |
| **Presence** | Still frames, eye contact or closed calm eyes, unposed moments |
| **Deep relaxation** | Soft focus on touch and stillness — not asleep clichés |
| **Timeless elegance** | Editorial layout, 0 radius, gold + charcoal — not trendy gradients |

### What to avoid (visual & mood)

| Avoid | Why |
|-------|-----|
| Spiritual clichés | Lotus, mandalas, incense smoke, prayer hands, “sacred geometry” overlays |
| Energy-healing clichés | Aura colours, glowing hands, crystal grids, Reiki symbols |
| Chakra language | Colour-coded body maps, rainbow gradients, “alignment” diagrams |
| Generic Ibiza wellness | White yoga studios, smoothie bowls, pool party neon, spa robes in rows |
| Festival / club cues | Lasers, crowds, DJ booth glamour, strobe |
| Clinical spa | Treatment menus on marble, hot-stone product shots, uniform therapists |

**Reference mood (conceptual, not literal copy):** private villa at golden hour · live musician in profile · guest in stillness after sound · Mediterranean stone and linen · Aman/JOALI-level quiet, not “spiritual retreat” Pinterest.

---

## 2. Homepage visual hierarchy

Hierarchy = what the eye reads first → last on a cold visit (desktop and mobile).

### 2.1 Level 0 — Frame (persistent)

| Element | Visual weight | Notes |
|---------|---------------|-------|
| Header | Light | Transparent → solid charcoal on scroll; **PRANARTA** wordmark gold, small caps tracking |
| Background | Base | Continuous `#1a1612` — no section “cards” floating on white |

### 2.2 Level 1 — Hero (first viewport)

| Order | Element | Weight |
|-------|---------|--------|
| 1 | Background image or film still | Atmospheric, 30–45% opacity under gradient |
| 2 | **PRANARTA** (H1) | Heaviest typographic mass |
| 3 | *Where Sound Meets Body* | Second — serif, lighter weight |
| 4 | Tom Van Geem (eyebrow) | Third — small sans, gold, wide tracking |
| 5 | Supporting line (Ibiza · pillars) | Muted beige ~80% |
| 6 | Primary CTA (Signature) | Gold fill — one only |
| 7 | Secondary CTA (WhatsApp) | Outline gold |

**Rule:** One hero, one primary action. No carousel, no three equal buttons in the hero.

### 2.3 Level 2 — Brand story (second viewport)

| Element | Weight |
|---------|--------|
| Section title (fusion) | Serif H2, centered, generous whitespace |
| Body copy | 2–3 lines max visible without scroll on mobile; `beige/75` |

**Visual:** Text-only band with `border-t border-gold/10` — no image required (breathing room after dense hero).

### 2.4 Level 3 — Three pillars (navigation hub)

| Element | Weight |
|---------|--------|
| Three cards | **Equal** visual weight — Sound · Emerald Touch · Signature |
| Card image | ~60% of card height; same aspect ratio (4:3) |
| Card title | Gold serif |
| “Explore” | Smallest gold sans, letter-spaced |

**Rule:** Signature is **not** double-sized here — flagship story gets its own section below (Level 5).

### 2.5 Level 4 — Sound preview strip

| Element | Weight |
|---------|--------|
| Section label | Small gold eyebrow: “Sound Experiences” |
| Three columns | Typography-led or thumbnail + label; **lighter** than pillar cards |
| Link to `/sound` | Single text CTA at end |

**Visual:** Horizontal on desktop; stacked on mobile. Feels like a **menu of formats**, not three new heroes.

### 2.6 Level 5 — Emerald Touch preview

| Element | Weight |
|---------|--------|
| Layout | Asymmetric: **image 55%** / text 45% (desktop); image top (mobile) |
| “15+ years” badge | Small emerald accent on charcoal — not a sticker burst |
| Headline | “Emerald Touch” gold or beige serif |

**Visual:** Calmer, closer, more intimate crop than Sound — face/hands/linen, not wide terrace.

### 2.7 Level 6 — Signature highlight

| Element | Weight |
|---------|--------|
| Treatment | Full-bleed **dark band** with optional wide image (low opacity) or split panel |
| Copy | Short — one paragraph |
| CTA | Single gold button — highest contrast in mid-page |

**Rule:** This is the **emotional peak** of the scroll before proof (gallery).

### 2.8 Level 7 — Gallery preview

| Element | Weight |
|---------|--------|
| Grid | 4 images max, equal squares or 2×2 |
| Title | Light serif “Gallery” |
| CTA | Outline button |

**Weight:** Proof, not decoration — sits **below** Signature so story leads, evidence follows.

### 2.9 Level 8–9 — Trust + closing CTA

| Section | Visual |
|---------|--------|
| Ibiza & availability | Text-only, small type, `beige/50` — map pin icon only if needed |
| Closing CTA | Mirror hero button pair; more whitespace than hero |

### 2.10 Scroll rhythm (whitespace map)

```
[████████ Hero — image + PRANARTA ████████]
[──── Fusion text ────]
[▓▓▓ Three pillars — equal cards ▓▓▓]
[── Sound strip (lighter) ──]
[▓ Emerald Touch — intimate asymmetric ▓]
[████████ Signature band ████████]
[□□□□ Gallery preview □□□□]
[── Ibiza line ──]
[──── CTA ────]
```

Vertical padding: **increase** between major bands (`py-24`–`py-32` equivalent); luxury = air.

---

## 3. Hero section concept

### 3.1 Role

The hero is **not** a service explainer. It is a **brand portrait**: who PRANARTA is, in one frame and three lines of type.

### 3.2 Recommended concept: “The listening room”

**Idea:** Tom with handpan at dusk on a villa terrace — sea or pine silhouette soft in background. He is mid-performance or just after a phrase: hands on metal, eyes down or closed, **not** performing to camera.

| Layer | Treatment |
|-------|-----------|
| Photography | Golden hour, warm shadows, slight grain acceptable |
| Overlay | `from-dark/40 via-dark/60 to-dark` — text always readable |
| Image opacity | Full-bleed at ~35–40% effective brightness |
| Motion (optional later) | 3–5s loop: hands on pan, no flashy cuts — silent, slow |

**Alternative hero (seasonal swap):** Extreme close-up of handpan surface + reflected sky — no face — for abstract “sound” lead. Use only if portrait assets weak.

### 3.3 Type stack in hero (visual)

```
        TOM VAN GEEM                    ← sans, 0.2em tracking, gold, xs/sm

           PRANARTA                     ← serif OR refined sans, largest,
                                          letter-spacing +2–4%, light weight

      Where Sound Meets Body            ← serif, one step smaller, beige 90%

  Private Sound · Emerald Touch ·
      Signature Experiences — Ibiza     ← sans, light, beige 70%

   [ Signature Experiences ]  [ WhatsApp ]
```

**PRANARTA wordmark:** Prefer **serif** (Cormorant) for timeless editorial feel; optional all-caps with generous tracking for logo lockup only.

### 3.4 Hero don’ts

- No particle effects, no floating orbs (reads as “energy healing”).
- No Es Vedrá composite with lens flare (overused Ibiza trope) — if used, natural, distant, desaturated.
- No text over busy mid-tones without gradient.
- No autoplay music.

---

## 4. Photography strategy

### 4.1 Principles

1. **Documentary luxury** — looks caught, not staged; lighting does the styling.  
2. **Sensory specificity** — metal, skin, linen, stone, salt air; avoid abstract “wellness”.  
3. **Pillar-coded sets** — every shoot tagged Sound / Emerald Touch / Signature / Ibiza.  
4. **One hero, one use** — same file not in hero + gallery + card (current site issue).

### 4.2 Shot list by pillar

#### Sound Experiences

| Shot type | Content | Mood |
|-----------|---------|------|
| Handpan concert | Tom playing, guests in soft bokeh, terrace/sunset | Listening, ceremony |
| Electro acoustic | Loop pedal / minimal rig visible; still **live** | Depth, cinematic |
| DJ & hybrid | Later light, elegant villa pool or salon; no club | Refined movement |
| Detail | Hands on pan, mallet or fingertips, metal texture | Sound without words |
| Wide | Instrument + horizon line | Nature + scale |

**Avoid:** Crowds, stages, headphones-on-DJ cliché, purple stage light.

#### Emerald Touch

| Shot type | Content | Mood |
|-----------|---------|------|
| Method | Tom’s hands at temples/neck — **respectful, non-clinical** | Mastery, calm |
| Guest | Profile or from behind — privacy; eyes closed, neutral expression | Deep relaxation |
| Setting | Linen, low lamp, villa room — no spa reception | 1:1 intimacy |
| Portrait | Tom, still, professional — not guru smile | Trust |

**Avoid:** Oils lined up, hot stones, white tunics, “healing hands” glow in post.

#### Signature Experiences

| Shot type | Content | Mood |
|-----------|---------|------|
| Sequence | Same space: instrument then touch (or reverse) | Arc |
| Two-beat | Guest seated for sound → reclined for touch (different crops, same evening) | Wholeness |
| Host context | Long table, fire pit, handpan nearby — not dinner party stock | Villa life |

**Avoid:** Collage with mystical filters; before/after faces.

#### Ibiza (context)

| Shot type | Content | Mood |
|-----------|---------|------|
| Landscape | Pine, rock, sea at dusk — **no** neon strip | Timeless |
| Architecture | Dry stone, white wall shadow, terrace edge | Place not postcard |
| Es Vedrá | If used: distant, hazy, one frame only | Restraint |

**Avoid:** Yacht party, beach club, yoga on cliff influencer style.

### 4.3 Technical specs (production)

| Spec | Recommendation |
|------|----------------|
| Aspect — hero | 16:9 or 3:2 landscape, min 2400px wide |
| Aspect — cards | 4:3 |
| Aspect — gallery | 4:5 (portrait) or 1:1 — pick one system, stay consistent |
| Colour grade | Warm shadows, neutral highlights, **no** teal-orange Instagram crush |
| Format | WebP + JPEG fallback; semantic filenames per `REBRANDING_PLAN.md` |
| People | Model releases for guests; default to Tom + implied guest (no face) |

### 4.4 Existing assets (interim)

Until new shoot: map current blob library by **mood** not filename; retire repeats in hero vs gallery; grade mismatched WhatsApp exports to unified LUT in post.

### 4.5 Alt text (visual consistency)

Pattern: `PRANARTA — [Sound | Emerald Touch | Signature | Ibiza] — [concrete scene] — Ibiza`  
Describe **what is visible**, not what is felt (“vibrations”, “healing energy”).

---

## 5. Color strategy

### 5.1 Philosophy

Palette = **evening villa interior**: charcoal walls, candle gold, linen beige. Emerald enters only as **signature accent** for Emerald Touch — never as a second primary.

### 5.2 Core palette (retain + extend)

| Token | Hex | Role |
|-------|-----|------|
| **Charcoal** `--dark` | `#1a1612` | Primary background — warm black, not blue-black |
| **Stone** `--dark-lighter` | `#2a2420` | Cards, gallery tiles, elevated surfaces |
| **Linen** `--beige` | `#e8e0d5` | Body text |
| **Light linen** `--light-beige` | `#f5f1eb` | Rare highlights, pull quotes only |
| **Gold** `--gold` | `#c9a961` | CTAs, logo, borders, active nav |
| **Soft gold** `--soft-gold` | `#d4b982` | Hover, dividers, subtle emphasis |
| **Muted** `--muted-foreground` | `#a09080` | Captions, meta, Ibiza line |

### 5.3 New accent — Emerald (Emerald Touch only)

| Token | Suggested hex | Usage cap |
|-------|---------------|-----------|
| **Emerald** | `#3d5c4e` or `#4a674f` (desaturated, dusty) | Badges, 1px rules, eyebrow on ET page, hover on ET card |
| **Emerald light** | `#5a7a6a` at 20% opacity | Background wash on Emerald Touch preview only |

**Rules:**

- Max **10%** of any viewport in emerald — gold remains conversion colour.  
- Never emerald CTA buttons (confuses primary action).  
- Never emerald gradients (reads spa/wellness rebrand).

### 5.4 Pillar colour hints (optional, subtle)

For wayfinding only — not rainbow UI:

| Pillar | Hint | Application |
|--------|------|-------------|
| Sound | Gold (default) | Borders, eyebrows |
| Emerald Touch | Emerald accent | Section badge, thin left border on text block |
| Signature | Gold + beige interplay | Slightly warmer image grade in section |
| Ibiza | Muted stone | Gallery “place” row captions |

### 5.5 Opacity & borders

- Section dividers: `border-gold/10`  
- Card frames: `border-gold/20` → `border-gold` on hover  
- Image overlays: `from-dark/90` at card foot — legible titles without white boxes  
- Text on image: never below 70% beige without scrim

### 5.6 What not to add

- Purple, teal, coral (“Ibiza sunset” cliché pack)  
- White backgrounds for “clean wellness”  
- Neon green “emerald” (#00ff88)  
- Dark mode toggle (single timeless dark theme)

---

## 6. Typography strategy

### 6.1 Families (keep from audit)

| Family | Role | Character |
|--------|------|-----------|
| **Cormorant Garamond** | Display, H1–H3, tagline | Editorial, European luxury, timeless |
| **Lato** | UI, eyebrows, CTAs, nav, body | Clean, neutral, invisible servant |

No third display font. No script fonts.

### 6.2 Scale & hierarchy

| Level | Face | Size approach | Weight | Colour |
|-------|------|---------------|--------|--------|
| Brand H1 (PRANARTA) | Serif | `clamp(2.5rem, 6vw, 4.5rem)` | 300 | beige |
| Tagline | Serif | `clamp(1.25rem, 2.5vw, 1.75rem)` | 300 | beige/90 |
| Page H1 | Serif | `clamp(2rem, 5vw, 4rem)` | 300 | beige |
| Section H2 | Serif | `clamp(1.8rem, 3.5vw, 2.8rem)` | 300 | beige |
| Card H3 | Serif | `clamp(1.3rem, 2.5vw, 1.6rem)` | 400 optional | gold |
| Eyebrow | Sans | `xs–sm` | 300 | gold |
| Body | Sans | `base–lg` | 300 | beige/70–80 |
| CTA | Sans | `0.85rem` | 300 | uppercase, `0.15em` tracking |

### 6.3 PRANARTA wordmark (typography-only logo)

- All caps **PRANARTA** or Title case per final brand decision — recommend **PRANARTA** caps with `letter-spacing: 0.12–0.18em`.  
- Tom Van Geem always **smaller**, sans, below or above — never same size.  
- Tagline always serif, sentence case, no period for poetry: *Where Sound Meets Body*

### 6.4 Typesetting rules

- **Line length:** 45–65 characters for body; centered sections max `max-w-2xl`–`3xl`.  
- **Line height:** 1.7 body; 1.2–1.3 display.  
- **Italics:** Sparingly — one italic line per section max (positioning, not decoration).  
- **All caps:** Eyebrows and buttons only — never full paragraphs.  
- **Ampersand:** Allowed in “Sound & Touch” contexts — editorial.

### 6.5 Typography don’ts

- Light sans for H1 (too startup)  
- Bold 700 body paragraphs (too commercial)  
- Quotation marks as giant watermark graphics  
- “Sacred” unicode symbols in nav

---

## 7. Gallery concept

### 7.1 Purpose (visual)

Gallery = **evidence of real work** in real Ibiza settings. It should feel like a **quiet exhibition**, not an Instagram dump or mood board.

### 7.2 Layout concept: “Salon walls”

| Zone | Layout | Content |
|------|--------|---------|
| **Intro** | Minimal hero, 50vh max | “Gallery” serif + optional “Moments in Ibiza” muted |
| **Featured row** | 4 large tiles (1 per pillar + Ibiza) | Best single image each; 4:5 or 16:9 consistent |
| **Filtered grid** | Tabs or labeled rows | Sound · Emerald Touch · Signature · Ibiza |
| **Bridge** | Text + Instagram CTA | Follow @pranarta7 — secondary to on-site grid |

**Desktop:** 3-column grid, generous `gap-6`–`8`.  
**Mobile:** 1-column or 2-column — never cramped 3-up.

### 7.3 Tile behaviour

| State | Visual |
|-------|--------|
| Default | Image at ~80–85% opacity, `border-gold/20` |
| Hover | Opacity 100%, subtle scale 1.02–1.05, border gold |
| Signature / ET row | Optional 1px emerald or gold left rule on first tile — subtle |

**Interaction:** On-site viewing first. Instagram icon overlay **optional** on hover — not the only click target for every tile.

### 7.4 Sequencing & rhythm

- Within each pillar: alternate **wide + portrait** to avoid monotony.  
- No masonry chaos — aligned grid reads luxury.  
- Max **6–8 images per pillar** on v1; quality over volume.

### 7.5 Homepage gallery preview (4-up)

| Slot | Pillar | Visual |
|------|--------|--------|
| 1 | Sound | Handpan / performance |
| 2 | Emerald Touch | Touch or intimate setting |
| 3 | Signature | Combined evening hint |
| 4 | Ibiza | Landscape or terrace context |

Equal square crops; **different files** from hero background.

### 7.6 Gallery don’ts

- Filters named “Healing”, “Vibes”, “Sacred”  
- Infinite scroll of 40 phone photos  
- Stock watermarks  
- Heavy vignette or cross-processing all images differently  
- Lightbox with social share icons prominent (optional later, keep minimal)

---

## 8. Cross-page visual system

### 8.1 Interior page heroes

| Page | Hero image mood | Type hierarchy |
|------|-----------------|----------------|
| Sound | Performance wide or hands on pan | Eyebrow gold → H1 serif → muted sub |
| Emerald Touch | Close, calm, indoor | Emerald badge “15+ years” |
| Signature | Widest composite evening | Tagline as H1 support |
| Gallery | None or single muted texture | Title only |
| Booking | Text-only | PRANARTA + “Book” — no stock handshake |

### 8.2 Cards & buttons (global)

- **Radius:** 0 — sharp editorial (existing system).  
- **Primary button:** Gold fill, dark text, hover invert to outline.  
- **Secondary:** Gold outline only.  
- **Cards:** Image top, gradient foot, text never below image without scrim.

### 8.3 Motion

| Use | Treatment |
|-----|-----------|
| Scroll reveal | Slow fade-up, 800–1000ms, once |
| Hover | 300–500ms borders/opacity |
| Hero | No parallax on v1 (can feel gimmicky) |
| Particles | **Off** globally; if ever, Signature page only, gold/5% opacity max |

### 8.4 Iconography

- **Lucide** line icons only: MessageCircle, Instagram, Mail, MapPin, Menu.  
- Stroke weight light; size 16–20px in UI.  
- No custom chakra, sound wave logos, or mandala favicon.

---

## 9. Mood board keywords (briefing)

Use these words when briefing photographer, retoucher, or designer:

**Yes:** dusk, linen, bronze, listening, terrace, pine, stillness, portrait, metal, breath, villa, discretion, editorial, charcoal, candlelight, Mediterranean minimal.

**No:** zen, goddess, awakening, vibration, alignment, sacred, ritual kit, yoga mat, crystal, aura, retreat brochure, beach club, neon, spa menu.

---

## 10. Checklist before implementation

- [ ] Hero image approved under “listening room” concept  
- [ ] PRANARTA lockup (type-only or wordmark) defined  
- [ ] Emerald accent hex locked and scoped to Emerald Touch only  
- [ ] 9+ photographs shot or graded to one LUT  
- [ ] Gallery pillar tabs copy matches visual rows  
- [ ] No spiritual/wellness stock in any section  
- [ ] Same image not reused in hero + gallery preview  
- [ ] OG image = hero brand frame (PRANARTA + tagline legible at small size)

---

## 11. Relation to other docs

| Doc | This doc provides |
|-----|-------------------|
| `REBRANDING_PLAN.md` | Visual execution of homepage sections §3, gallery §7, emerald accent §11 |
| `PROJECT_AUDIT.md` | Evolves existing dark/gold/Cormorant+Lato system — not a full redesign |

---

*End of visual direction. No code changes included.*
