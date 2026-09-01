# Hero heading gets cut off after "See my work" — known bug + fix

**Hand this file to any agent if the bug comes back.**

## Symptom

After clicking the **"See my work"** button (which jumps to `#projects`) and then
scrolling back up to the top:

- The top of the hero is **clipped** — "Curious about how software works…" and the
  "CS Student · University of North Texas" line are cut off above the viewport.
- `window.scrollY` reads `0` but the hero content sits ~288px higher than the
  viewport top, so you cannot scroll up to reveal it.
- The floating navbar may also look like the heading is bleeding through it.

It tends to reappear after **adding a new project** to `data/index.ts`, because
that changes the page height and re-triggers the broken layout math.

## Root cause

`<main>` in [`app/page.tsx`](../app/page.tsx) was set to:

```
flex justify-center items-center flex-col overflow-hidden
```

The hero's spotlight / glow layers (`components/Hero.tsx`, `components/ui/Spotlight.tsx`)
are absolutely positioned with negative `top` values, so the flex content inside
`<main>` is ~288px taller than `<main>`'s box. `justify-center` centres that
overflow (pushing the top of the hero above the container) and `overflow-hidden`
clips it and makes it unreachable by scrolling.

## The fix

`<main>` must **not** vertically centre or vertically clip its content:

```diff
- <main className="... flex justify-center items-center flex-col overflow-hidden ...">
+ <main className="... flex justify-start  items-center flex-col overflow-x-clip ...">
```

- `justify-start` — content is anchored to the top, never centred, so nothing can
  be pushed above the viewport.
- `overflow-x-clip` — still prevents sideways scrollbars from the wide glow
  elements, but does **not** clip vertically (and doesn't turn `<main>` into a
  scroll container the way `overflow-x-hidden` can).

Never put `justify-center` or `overflow-hidden` / `overflow-y-hidden` back on that
`<main>`.

## Related navbar notes (`components/ui/FloatingNavbar.tsx`)

The navbar is a separate concern but was churned during the same investigation.
Current working setup:

- Rendered via `createPortal(nav, document.body)` so it lives in the root
  stacking context.
- `position: fixed`, `z-[9999]`, **solid** `backgroundColor: rgb(11, 15, 25)`
  (no `backdrop-filter` — Chrome mis-composites fixed elements that have one).
- `transform: translateZ(0)` + `willChange: "transform"` + `isolation: "isolate"`
  so it sits on its own GPU layer. The hero heading is animated by framer-motion
  and gets its own GPU layer; without this the text layer paints over the navbar
  even though `z-index` says otherwise.
- Animates `top` (a layout property), not a transform, so the static
  `translateZ(0)` is never overwritten.

## How to verify

```
npm run dev                       # note the port (usually 3001)
node scripts/check-hero-clipping.mjs          # headless pass/fail
node scripts/check-hero-clipping.mjs --headed # watch it in a real browser
```

First run only:
`npm i -D playwright && npx playwright install chromium`

The script loads the page, clicks "See my work", scrolls back, and fails if the
hero top is more than 8px away from the viewport top at `scrollY 0`, or if
`<main>` has `justify-content: center` / `overflow-y: hidden`, or if something is
painting over the navbar.
