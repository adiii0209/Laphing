# Design & Layout Instructions — Laphing Food Centre

Companion to `01-BUILD-PROMPT.md` and `CLAUDE.md`. This defines the visual system and section-by-section layout.

## Design direction

Street-food-authentic, not corporate-restaurant. Think: bold hand-painted signage energy translated to clean web type — keep the punch of the real banner (bright yellow, red callouts, bold condensed headlines) but let it breathe in a modern layout instead of cramming everything into a laminated poster. Black hero grounds it and makes the food photography/video pop.

## Design tokens

**Color palette** (pulled from the real signage)
- `--laphing-black: #0A0A0A` — hero background, primary text
- `--laphing-yellow: #F5B400` (adjust to match reference photo's golden-yellow) — primary brand color, section backgrounds, accents
- `--laphing-red: #C81E1E` — CTAs, price tags, "LAPHING" wordmark, urgency accents
- `--laphing-blue: #1B3A6B` — secondary banner strip accent (used sparingly, e.g. hours/location badges)
- `--cream-white: #FFF8E7` — body section backgrounds as an alternative to full yellow, for readability
- `--charcoal-text: #1A1A1A` — body copy on light backgrounds

**Type**
- Headlines: a bold, slightly condensed/display sans (or a playful hand-drawn-adjacent display face) to echo the marker/brush lettering on the real sign — e.g. something like Anton, Bebas Neue, or Poppins ExtraBold for headlines.
- Body: a clean, highly legible sans (Inter, Work Sans, or system UI stack) — the signage is loud, the body copy shouldn't compete with it.
- Keep price tags visually distinct — bold, in a colored pill/badge (red or black), echoing the "RS.50" red-badge treatment from the real menu card.

**Motion**
- Subtle only: fade/slide-in on scroll for section reveals, gentle hover states on CTAs and menu items. No gimmicks. Respect `prefers-reduced-motion` everywhere, especially the hero video.

## Section-by-section layout

### 1. Hero (full black, ~90–100vh)
```
[ full-bleed muted looped video, dark scrim over it ]
        LAPHING FOOD CENTRE            <- wordmark, large
        Taste of Himalayas             <- tagline line, smaller, red or yellow
                                        <- chef photo, circular or soft-edged crop,
                                           placed center or offset, sits ON TOP of scrim
        "Good Food, Good Mood."        <- short line
   [ Call to Order ]  [ See Menu ]     <- two CTA buttons, tel: + anchor link
```
- Mobile: stack vertically, chef photo medium-sized above/beside the wordmark, CTAs full-width stacked.
- Desktop: wordmark + tagline left or center, chef photo can sit slightly right or centered below, CTAs side-by-side.
- Scrim: linear-gradient black at ~55–65% opacity over the video so all text passes contrast checks.

### 2. About / The Story (light background — cream or yellow)
- Short 2–3 sentence story block, left-aligned or centered, max-width ~60ch for readability.
- Optional secondary photo (cart/cooking shot) beside or behind the text, cropped tastefully.
- Small inline stat-style callouts if useful (e.g. "One cart. One guy. Real fire.") — optional, keep punchy, not corporate.

### 3. Signature Dish — Chicken Tipo (feature section, black or deep-red background for contrast against the yellow sections around it)
- Large image/crop of the Tipo dish (best available crop from the menu photo, clearly labeled as a placeholder for a proper hero shot if quality is poor).
- Big headline: "Chicken Tipo" with a short descriptive line: stuffed chicken momo with a whole boiled egg inside.
- Price badge: ₹50 (1pc).
- This section should feel like the visual climax of the page — bigger type, bigger image than any other menu item gets.

### 4. As Seen On / Featured Reels (yellow or cream background)
- 3-card row (stack on mobile) — each card: thumbnail/poster frame, small Instagram play-icon overlay, short label ("Featured Reel 1/2/3" or a one-line caption if Aditya supplies one), opens the Reel URL in a new tab.
- Small heading: "As Seen On Instagram" or similar.

### 5. Full Menu (cream/white background for legibility — this is the working section, not a design showpiece)
- Grouped list matching the source card's structure:
  - Momos (Chicken Momo, Veg Momo, Jhol Momo)
  - Tipo (cross-reference back to the spotlight section above, or list here too for completeness)
  - Chowmin & Fried Rice (with Veg/Egg/Non-veg price tiers shown as 3 small price chips per row)
  - Lapping
  - Combos (Veg Combo, Non-Veg Combo) — show the combo contents as a small sub-line
- Each row: item name, portion/size note, price badge(s) — red pill badges echoing the source card.
- Mobile: single column list. Desktop: can go two-column if it stays clean.

### 6. Visit / Contact (black or deep-blue background — bookend to match the hero)
- Hours: "Mon – Sat, 1PM – 9PM · Closed Sunday"
- Location: Bhuwanipur, Kolkata (+ map embed/directions link once address is confirmed)
- Phone: large tap-to-call button + WhatsApp button (once number is confirmed)
- Keep this section short and action-oriented — it's the "close" of the page.

### 7. Footer (black, minimal)
- Small wordmark repeat
- Phone number
- Instagram link (once handle is confirmed)
- "Good Food, Good Mood!" as a sign-off line
- Tiny credit line optional

## Imagery notes

- The only current photography is phone-shot and slightly rough (real street conditions, reflections, motion blur on the chef photo). Lean into that authenticity for the About/Story section rather than trying to make it look studio-shot — but the Tipo spotlight and hero deserve the cleanest crops/color-correction effort since they're the visual leads.
- Compress every image aggressively (WebP, responsive `srcset`) — this is a fast-scrolling mobile audience, not a portfolio site.
