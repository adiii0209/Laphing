# CLAUDE.md — Laphing Food Centre website

Context file for whichever agent (Antigravity) is building/maintaining this project. Read this before generating or changing any content. Treat everything under "Source-of-truth content" as **facts pulled directly from the client's own signage/photos** — do not rephrase prices, portion sizes, hours, or contact info. Everything under "Open questions" is genuinely unconfirmed — flag it, don't guess.

## Project

- **Client**: Laphing Food Centre — a single street-food cart selling Himalayan/Nepali-Tibetan style momos, chowmein, fried rice, in Bhuwanipur, Kolkata.
- **Goal of the site**: one mobile-first landing page that makes the stall look established and craveable, showcases the signature Chicken Tipo, shows proof via their Instagram-featured reels, and gets people to call or walk over.
- **Not the goal**: a multi-page restaurant CMS, online ordering/checkout, delivery integration, or a "corporate" look. Keep it street-authentic.
- **Owner/contact for this project**: Aditya (developer building this on the client's behalf).

## Brand basics

- **Name**: Laphing Food Centre
- **Tagline (as printed on their own signage)**: "Test of Himalayas" — note this is very likely a typo for "Taste of Himalayas" on their own printed materials. Default to fixing it to "Taste of Himalayas" for the web copy since it reads as an error rather than a stylistic choice, but flag this to Aditya as an assumption before finalizing — it's his call whether to keep the original wording for authenticity.
- **Sign-off line**: "Good Food, Good Mood!"
- **Existing logo**: circular badge — an illustrated character eating noodles, Himalayan mountain skyline, prayer flags, "LAPHING / FOOD CENTRE / Test of Himalayas" text, small plate of momos/dishes along the bottom edge. Reference photos have this at low resolution — treat it as a style reference for palette/vibe, not a hi-res usable asset. Ask Aditya if a vector/hi-res logo file exists; otherwise rebuild the wordmark in CSS/SVG rather than upscaling the blurry photo crop.
- **Palette drawn from real signage**: golden-yellow background, red accents/banners, black text and outlines, a secondary blue banner strip. Full tokens are in `02-DESIGN-LAYOUT.md`.

## Source-of-truth content (transcribed from `/Laphing/Reference/` photos)

### Location & hours
- **Area**: Kolkata, Bhawanipur (4A, Ashutosh Mukherjee Rd, Gaza Park, West Bengal 700020 - Near Netaji Bhawan Metro)
- **Hours**: Monday to Saturday, 2 PM to 8 PM
- **Closed**: Sunday

### Contact
- Phone: **9832595946** (Primary) / **9382595946** (Alternate)

### Full menu (Exact user verified)
1. **Chicken Momo** — Rs. 50 (6 PC)
2. **Veg Momo** — Rs. 60 (8 PC)
3. **Tipo** — Rs. 50 (1 PC) (Stuffed chicken & whole boiled egg inside)
4. **Chowmin** — Rs. 50 / 60 / 70 (Veg, Egg and Non-Veg)
5. **Fried Rice** — Rs. 50 / 60 / 70 (Veg, Egg and Non-Veg)
6. **Lapping** — Rs. 60 (Both Spicy and Sweet Sauce)
7. **Veg Combo** — Rs. 80 (Veg Fried Rice or Veg Chowmin + Veg Ball Manchurian + Kimchi Salad)
8. **Non-Veg Combo** — Rs. 90 (Egg Chowmin or Fried Rice + Chilli Chicken (3 PC) + Kimchi Salad)
9. **Jhol Momo** — Rs. 80 (6 PC)

Do not add items, combos, or prices that aren't on this list. If Aditya provides an updated menu later, replace this section wholesale rather than merging guesses in.

### Featured Reels (Instagram)
Use these as the "As Seen On" / featured-reels section:
1. https://www.instagram.com/reel/DcnKVcABbsy/
2. https://www.instagram.com/reel/DcbZgmVTy4K/
3. https://www.instagram.com/reel/DdUDBaWx7eM/

(Tracking params stripped from the original links — fine to link to the clean URLs above.) Instagram blocks most server-side scraping/embeds outside their own embed widget — if native embeds don't render reliably, fall back to styled link-out cards with a thumbnail/play icon rather than faking playback.

## Image assets available now

All in `/Laphing/Reference/`:
- Two near-duplicate photos of the full printed menu card (use for transcribing menu content, not as a website image — it photographs a laminated sign, not clean web art)
- One photo of the chef actively cooking at the cart (wok in hand, cart setup visible) — best available "face of the brand" shot; usable for hero/about section with cropping
- One photo of the cart's banner + wok + phone number visible
- One photo of a handwritten "Sunday off" note with a phone number

**No video footage and no hi-res logo file exist yet.** Build hero video as a drop-in slot (see build prompt), don't block the build waiting on it.

## Confirmed Project Facts (Updated with Client)

1. **Phone numbers**: Both `9832595946` (primary) and `9382595946` (alternate) are authentic and belong to the stall.
2. **Tagline**: Confirmed as **"Taste of Himalayas"**.
3. **Exact Address**: `4A, Ashutosh Mukherjee Rd, Gaza Park, Bhowanipore, Kolkata, West Bengal 700020` (Landmark: Near Netaji Bhawan Metro).
4. **Hours**: Monday to Saturday, 2:00 PM – 8:00 PM. Closed on Sundays.
5. **Hero Video**: Supplied by client as `assets/hero.mp4` (~10s mobile street wok & cooking footage).
6. **Socials**: No dedicated handle yet; 3 viral Instagram Reels are embedded/linked as social proof.

## Working conventions for the agent

- Mobile-first. Design and test at 375px before widening.
- Real content only — no lorem ipsum, no placeholder reviews/ratings/testimonials that weren't provided.
- Keep the tone local and human — this is one guy and a cart, not a chain.
- Performance matters more than polish here: compress all images, lazy-load below-the-fold media, respect `prefers-reduced-motion`.
- Defer to `02-DESIGN-LAYOUT.md` for exact layout/section order and design tokens.
- When a fact isn't in this file's "Source-of-truth content" section, don't invent it — surface it as an open question instead.
