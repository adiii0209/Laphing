# Build Prompt — Laphing Food Centre Website

Paste this whole prompt into Antigravity as the initial instruction. It assumes `CLAUDE.md` and `02-DESIGN-LAYOUT.md` (from this same set) are placed in the project root/context so the agent can read them for details — but this prompt alone is enough to start the build.

---

## The ask

Build a single-page, mobile-first website for **Laphing Food Centre**, a Himalayan/momo streetside food stall in Bhuwanipur, Kolkata ("Test of Himalayas" is their own tagline). This is a one-cart, cash-and-UPI street business — the site's job is to make it look like a real, beloved local food spot, drive footfall/calls, and show off the food and the guy who makes it. It is NOT a corporate restaurant site — keep it warm, a little scrappy, street-food-authentic, not glossy-chain.

## Source material (already provided)

- `/Laphing/Reference/` — 5 photos: the printed menu card (2 near-duplicate shots), the chef cooking at the cart, a banner shot with the phone number, and a handwritten "Sunday off" note.
- 3 Instagram Reel links the business was featured in (listed below and in `CLAUDE.md`) — treat these as the "As Seen On" / featured-reels proof section.
- All menu items, prices, hours, location and phone number are to be taken **verbatim** from the reference photos — see `CLAUDE.md` for the transcribed source-of-truth data. Do not invent or guess menu items or prices.

## Hero section — build this first, exactly as specified

- Full-viewport (or near-full) **black** hero section.
- Background: a **looped, muted, lightweight autoplay video** of the food/cooking action (wok tossing, momo steaming, stuffing the Tipo, street cart energy). No video file exists yet — build the section to accept a `hero.mp4`/`hero.webm` (with a poster fallback to a still frame) so it's a drop-in slot once Aditya supplies footage cut from the Reels. Compress expectations: short loop (6–12s), no audio, `preload="metadata"`, poster image visible until video loads, and a static-image fallback on slow connections/reduced-motion.
- Over the video: a **dark gradient/scrim** (video dimmed under black, ~50–65% overlay) so text stays legible — this is the "black hero layover" Aditya asked for.
- On top of the scrim, in this stacking order top-to-bottom:
  1. Laphing branding (wordmark "LAPHING" + "FOOD CENTRE" + "Test of Himalayas" line, styled off the real logo's red/yellow palette but cleaned up for web)
  2. A short punchy line ("Good Food, Good Mood." — their own tagline — or similar)
  3. A **photo of the chef** (crop from the reference cooking photo, or ask Aditya for a cleaner portrait) — treat as the face of the brand, not a decorative background image
  4. Two CTAs: **Call to Order** (`tel:` link) and **See Menu** (anchor scroll)
- Keep this section lightweight: compressed video, `object-fit: cover`, and it must not block first paint — text and branding render immediately even before the video loads.

## Rest of the page, in order

1. **Hero** (above)
2. **About / The Story** — short section on the stall: Bhuwanipur, Kolkata; Himalayan/Nepali-Tibetan street food; one guy, one cart, real fire, hand-stuffed momos. Use the chef photo again or a second cart photo here if useful. Keep copy to 2–3 short sentences, human voice, not corporate.
3. **Signature Dish spotlight — Chicken Tipo** — a dedicated, visually prominent callout (not just a menu row) for their hero item: a large stuffed momo/dumpling packed with chicken and a whole boiled egg inside. This is the "wow" dish — give it its own card/section with a bigger image treatment (even if it's just a strong crop from the menu photo for now) and a short "what makes it special" line.
4. **As Seen On / Featured Reels** — embed or link out to the 3 Instagram Reels (see `CLAUDE.md` for URLs). If native Instagram embeds are too heavy/blocked, use styled cards with a play-button overlay that open the Reel in a new tab — do not fake video playback.
5. **Full Menu** — transcribed from the reference menu card, organized by the same numbering/grouping as the real card (Momos, Chowmin/Fried Rice, Lapping, Combos, Jhol Momo). Mobile-friendly menu list/grid, not a giant image dump. Prices and portion sizes exactly as sourced.
6. **Visit / Contact** — address (Bhuwanipur, Kolkata), hours (Mon–Sat, 1PM–9PM, Sunday off), phone/`tel:` and WhatsApp `wa.me` link, and a Google Maps embed or "Get Directions" link (exact map pin/address to be confirmed with Aditya — see open questions in `CLAUDE.md`).
7. **Footer** — small branding repeat, phone number, socials (Instagram handle if Aditya provides it), "Good Food, Good Mood!" sign-off.

## Tech & build constraints

- Mobile-first (most traffic will be someone standing near the cart or scrolling Instagram). Test at 375px width first.
- Fast load: this is a food-cart site, not an app — no heavy frameworks needed unless the project already has a stack preference (check `CLAUDE.md`). Static HTML/CSS/minimal JS is a perfectly good default; use whatever Antigravity's default stack is unless told otherwise.
- Respect `prefers-reduced-motion` — pause/hide the hero video and show the poster image instead.
- Real menu data, real hours, real phone number only — no filler/lorem ipsum, no invented reviews or star ratings.
- Follow `02-DESIGN-LAYOUT.md` for exact colors, type, spacing and component layout.
- Follow `CLAUDE.md` for all copy facts, asset paths and open questions — check it before inventing any content.

## Before you build, flag these to Aditya (do not silently guess)

1. **Phone number mismatch**: the printed banner shows `9832595946`; the handwritten note shows `9382595946`. Confirm which is correct before wiring up `tel:`/`wa.me` links.
2. **No hero video file exists yet** — only still photos were provided. Build the hero to accept a video but launch with the poster/still image if no video is supplied in time.
3. **Exact map location/pin** for Bhuwanipur isn't in the source photos — confirm the address or a Google Maps link.
4. **Instagram handle** for the footer/socials link — not in the source material, confirm with Aditya.
