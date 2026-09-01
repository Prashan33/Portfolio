/**
 * check-hero-clipping.mjs
 * ------------------------------------------------------------------
 * Regression check for the "hero heading gets cut off at the top after
 * clicking 'See my work' and scrolling back" bug.
 *
 * Root cause (fixed 2026): <main> in app/page.tsx used
 *   `justify-center` + `overflow-hidden`
 * The hero's spotlight/glow layers add ~288px of content above the normal
 * flow. `justify-center` centred that overflow and `overflow-hidden`
 * clipped the top of the hero off — permanently, unreachable by scrolling.
 * `window.scrollY` reads 0 but the hero content sits ~288px higher than
 * the viewport top.
 *
 * The fix: <main> must use `justify-start` + `overflow-x-clip`
 * (never `justify-center` / `overflow-hidden` on that element).
 *
 * This script drives a real browser through the exact repro and fails
 * loudly if the hero top is clipped again. Re-run it whenever you add a
 * project or touch the layout / navbar / hero.
 *
 * USAGE
 *   1. Start the dev server:      npm run dev       (note the port)
 *   2. In another terminal:       node scripts/check-hero-clipping.mjs
 *      or with a custom URL:      node scripts/check-hero-clipping.mjs http://localhost:3000
 *      to watch it happen:        node scripts/check-hero-clipping.mjs --headed
 *
 * First run needs Playwright (dev-only, not shipped):
 *   npm i -D playwright && npx playwright install chromium
 * ------------------------------------------------------------------
 */

const args = process.argv.slice(2);
const headed = args.includes("--headed");
const url = args.find((a) => a.startsWith("http")) || "http://localhost:3001";
const TOLERANCE = 8; // px – how far the hero top may drift from the viewport top

let chromium;
try {
  ({ chromium } = await import("playwright"));
} catch {
  console.error(
    "\n✗ Playwright is not installed.\n" +
      "  Run:  npm i -D playwright && npx playwright install chromium\n"
  );
  process.exit(2);
}

const log = (...a) => console.log(...a);
const fail = (msg) => {
  console.error(`\n✗ FAIL: ${msg}\n`);
  process.exitCode = 1;
};

const browser = await chromium.launch({
  headless: !headed,
  args: ["--enable-gpu-rasterization"],
});
const page = await browser.newPage({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2,
});

try {
  log(`→ loading ${url}`);
  await page.goto(url, { waitUntil: "networkidle", timeout: 30_000 });
  // let the hero text-generate animation and any lazy globe settle
  await page.waitForTimeout(6000);

  const readState = () =>
    page.evaluate(() => {
      const hero =
        document.querySelector('[class*="pt-36"]') ||
        document.querySelector("main > div > *:first-child");
      const main = document.querySelector("main");
      const mcs = main ? getComputedStyle(main) : {};
      const heroTop = hero
        ? Math.round(hero.getBoundingClientRect().top)
        : null;

      // what is actually painted where the navbar sits?
      const navLink = [...document.querySelectorAll("a")].find(
        (a) => a.textContent.trim() === "Projects"
      );
      const navEl = navLink ? navLink.closest("div") : null;
      let navOnTop = null;
      if (navEl) {
        const b = navEl.getBoundingClientRect();
        const hit = document.elementFromPoint(
          b.left + b.width / 2,
          b.top + b.height / 2
        );
        navOnTop = navEl.contains(hit);
      }

      return {
        scrollY: Math.round(window.scrollY),
        heroTop,
        mainJustify: mcs.justifyContent,
        mainOverflowY: mcs.overflowY,
        docHeight: document.documentElement.scrollHeight,
        navPresent: !!navEl,
        navOnTop,
      };
    });

  const scrollToTop = async () => {
    // wheel up like a user, then force to absolute top
    for (let i = 0; i < 100; i++) {
      await page.mouse.wheel(0, -70);
      await page.waitForTimeout(10);
    }
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(800);
  };

  await scrollToTop();
  const before = await readState();
  log("baseline (fresh):", JSON.stringify(before));

  log('→ clicking "See my work"');
  await page.click("text=See my work");
  await page.waitForTimeout(2500);

  log("→ scrolling back to the top");
  await scrollToTop();
  const after = await readState();
  log("after repro     :", JSON.stringify(after));

  // ---- assertions -------------------------------------------------
  log("\n--- results ---");

  if (after.scrollY !== 0) {
    fail(`scrollY is ${after.scrollY}, expected 0 (page won't return to top).`);
  } else {
    log("✓ page scrolls back to scrollY 0");
  }

  if (after.heroTop === null) {
    fail("could not find the hero element (.pt-36).");
  } else if (Math.abs(after.heroTop) > TOLERANCE) {
    fail(
      `hero top is at ${after.heroTop}px while scrollY is 0 — the top of the ` +
        `hero is clipped/offscreen by ~${Math.abs(after.heroTop)}px. ` +
        `Check <main> in app/page.tsx: it must use justify-start + ` +
        `overflow-x-clip, NOT justify-center / overflow-hidden.`
    );
  } else {
    log(`✓ hero top is flush with the viewport (${after.heroTop}px)`);
  }

  if (after.mainJustify === "center") {
    fail(
      "<main> computed justify-content is 'center' — this clips the hero. " +
        "Use 'justify-start' in app/page.tsx."
    );
  } else {
    log(`✓ <main> justify-content is '${after.mainJustify}'`);
  }

  if (after.mainOverflowY === "hidden") {
    fail(
      "<main> computed overflow-y is 'hidden' — this makes the clipped hero " +
        "unreachable. Use 'overflow-x-clip' in app/page.tsx."
    );
  } else {
    log(`✓ <main> overflow-y is '${after.mainOverflowY}'`);
  }

  if (after.navPresent && after.navOnTop === false) {
    fail(
      "the navbar is present but something is painting over it " +
        "(check components/ui/FloatingNavbar.tsx: solid background, " +
        "translateZ(0) + will-change:transform, portalled to <body>)."
    );
  } else if (after.navPresent) {
    log("✓ navbar is on top where it sits");
  }

  if (before.docHeight !== after.docHeight) {
    log(
      `• note: document height changed ${before.docHeight} → ${after.docHeight} ` +
        `(fine if you just added a project; suspicious otherwise).`
    );
  }

  if (process.exitCode === 1) {
    console.error("\n✗ Hero-clipping regression detected. See messages above.\n");
  } else {
    log("\n✓ ALL CHECKS PASSED — hero is not clipped, navbar is fine.\n");
  }
} catch (err) {
  fail(`script error: ${err.message}`);
} finally {
  if (headed) await page.waitForTimeout(2000);
  await browser.close();
}
