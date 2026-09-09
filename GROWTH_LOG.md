# GROWTH_LOG.md

## How To Use This File

Record every growth-relevant edit here. Keep entries short, factual, and useful for future agents.

## Change Log

### 2026-08-12 - Static discovery and review freshness baseline added

- Task: Add locale-aware static search, automatic recent updates, visible review dates, and browser metadata/security defaults to the shared template.
- Files changed: Header/search components, content helpers, locale UI labels, homepage/page hero rendering, manifest/favicon metadata, Next.js security headers, and deterministic validators.
- URLs affected: No existing URLs changed; search results use the final route manifest URLs and recent updates use existing indexable pages.
- SEO/GEO changed: Last reviewed dates are public on every page; the homepage surfaces recent non-trust content by deterministic `lastReviewed` order; locale search never falls back across locales. Search indexes are emitted as per-locale force-static resources and lazy-loaded so full-site index data is not repeated in every page payload.
- Browser baseline: Neutral SVG favicon, web manifest, `X-Content-Type-Options`, `Referrer-Policy`, and `X-Frame-Options` are wired without adding a restrictive CSP.
- Verification: Typecheck, lint, template/content/SEO validation, and full verify are required before launch.

### 2026-07-21 - V3 locale and entity routing added

- Task: Upgrade the shared template for configuration-driven locale routes and programmatic entity pages.
- Files changed: Site/page/entity types, locale and entity generators, dynamic routes, metadata, sitemap, validators, and template documentation.
- URLs affected: Existing primary-locale URLs retain their paths; additional locale and entity routes are generated from configuration.
- SEO changed: Canonical, hreflang, x-default, Open Graph locale, multilingual sitemap alternates, and final route-manifest validation are now data-driven.
- Entity changed: Generic entity Hubs/details now render source links, relationships, and optional registered local images from one base fact package.
- Verification: Typecheck, template validation, content validation, rendered SEO validation, route-manifest generation, and multilingual entity fixtures.

### 2026-09-09 - Adsterra integration activated

- Task: Populate the fixed six Adsterra ad units (Native Banner, 728x90, 468x60, 320x50, 160x600, Smartlink) by replacing empty placeholders in `src/data/ads.ts` with real publisher codes.
- Files changed: `src/data/ads.ts`.
- URLs affected: No URL or layout changes; ad modules were already wired into the shell, hero, article body, right rail, and footer.
- Ads changed: Six fixed unit placeholders are now populated with publisher codes; values are gated by `adsterra-integrator` only and the page DOM container renders them directly (no sandboxed iframe).
- Verification: `npm run verify` is required before pushing.

### 2026-09-09 - Co-op multiplayer setup and shop defense, checkout, and events guides added

- Task: Add two new guides that close the multiplayer and shop-incident coverage gap on the Steam AppID 3393280 release, and correct the `/about/` callout that claimed multiplayer was unannounced.
- Files changed: `src/data/pages/fixed-pages-3.ts` (new), `src/data/pages/fixed-pages.ts` (callout correction and related links), `src/data/pages/fixed-pages-2.ts` (shops/walkthrough related links and walkthrough link-out map), `src/data/pages/home.ts` (page-map and related links), `src/data/faq.ts` (11 new FAQ entries for both pages), `src/lib/content.ts` (register the new fixed-pages bundle), and `CONTENT_INDEX.md`.
- URLs affected: `/co-op-multiplayer-setup` (new), `/shop-defense-and-checkout` (new), plus internal links from `/about/`, `/shops/`, `/walkthrough/`, and the homepage.
- SEO/GEO changed: Two new Article/BreadcrumbList/FAQPage pages now index the Online Co-op / Online PvP, four-role split (Cashier / Stocker / Decorator / Gambler), Family Sharing caveats, Steam Achievements behavior, thieves / vandals / litterers and the trusty bat, 18+ manga ID verification and body scanners, and autograph signings / trading card tournament event rotation.
- Content changed: `/about/` callout no longer claims multiplayer is unannounced; it now points readers at the new co-op guide.
- Verification: `npm run verify` is required before pushing.

### YYYY-MM-DD - Template baseline initialized
