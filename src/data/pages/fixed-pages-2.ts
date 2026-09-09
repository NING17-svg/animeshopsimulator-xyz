import type { PageContent } from "@/types/content";

const SOURCES_STEAM = "https://store.steampowered.com/app/3393280";
const SOURCES_STEAMDB = "https://steamdb.info/app/3393280/";
const SOURCES_HUB = "https://steamcommunity.com/app/3393280";
const SOURCES_BRIEF = "game-intelligence/handoffs/game-check/build-now/anime-shop-simulator.md";
const SOURCES_AUTOCOMPLETE =
  "site-launch/tasks/animeshopsimulator-xyz/planning/autocomplete.json";

export const fixedPagesExtra: PageContent[] = [
  // 5. Shop management (guide)
  {
    id: "fixed-shop-management-en-us",
    translationKey: "shop-management",
    locale: "en-US",
    routeKind: "fixed",
    slug: "shops",
    url: "/shops",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Anime Shop Simulator Shop Management — Daily Guide",
    seoTitle: "Anime Shop Simulator Shop Guide — Daily Management Tips",
    metaDescription:
      "Run your anime shop simulator shop with restock, pricing, layout, and customer flow tips. Day-to-day shop guide for first-time Steam owners.",
    summary:
      "The anime shop simulator shop loop on Steam (AppID 3393280) opens each day with restocking, runs through serving customers and pricing items, then closes with reinvesting the day's revenue. Day-to-day management is built around three habits: keep shelves stocked before the rush, price stock to move, and spend the day's profit on upgrades that grow tomorrow's throughput.",
    hero: {
      eyebrow: "Shop management guide",
      subtitle:
        "Four daily habits — restocking, pricing, layout, customer flow — and a recommended first-day checklist for the anime shop simulator shop on Steam AppID 3393280.",
      ctas: [
        { label: "Gameplay Overview", href: "/gameplay/" },
        { label: "Upgrades & Money", href: "/upgrades/" },
        { label: "Beginner Walkthrough", href: "/walkthrough/" },
      ],
    },
    quickAnswer:
      "The anime shop simulator shop loop on Steam (AppID 3393280) opens each day with restocking, runs through serving customers and pricing items, then closes with reinvesting the day's revenue. Day-to-day management is built around three habits: keep shelves stocked before the rush, price stock to move, and spend the day's profit on upgrades that grow tomorrow's throughput.",
    keyFacts: [
      { label: "Daily habits", value: "Restock · Price · Layout · Customer flow" },
      { label: "First-day checklist", value: "6 steps before reinvesting" },
      { label: "Common pitfall", value: "Overstocking slow movers" },
    ],
    modules: [
      {
        id: "shops-restocking",
        type: "prose",
        heading: "Restocking walkthrough for the Anime Shop Simulator shop",
        body:
          "Restocking is the first habit of every Anime Shop Simulator shop day. Open the stock menu, check what is empty on each shelf, and reorder only the SKUs that are running low so cash is not tied up in slow movers. Early days usually mean buying in small batches to learn which items move fastest; later days can absorb larger restocks once you have a customer rhythm and a buffer of in-game cash on hand. The Steam community hub for AppID 3393280 and creator videos covering the shop loop describe restocking as the single biggest control on daily revenue, and the Steam store page frames the entire game around that loop.",
      },
      {
        id: "shops-pricing",
        type: "prose",
        heading: "Pricing tips for the Anime Shop Simulator shop",
        body:
          "Pricing is the second habit of any anime shop simulator shop. Mark items up to recover restock cost plus a margin, but stop before the price tag is high enough to drive customers away. A common approach is to test a small batch at one price, watch how fast it sells, then nudge the price up or down one tier at a time. The goal is steady turnover rather than squeezing the last coin out of every sale, because empty shelves lose more revenue than slightly lower margins. Specific per-SKU pricing math beyond community coverage is not confirmed in Steam community or creator videos as of 2026-09-09.",
      },
      {
        id: "shops-layout",
        type: "prose",
        heading: "Layout and counter tips for the anime shop simulator shop",
        body:
          "Layout is the third habit. A clear counter path, grouped SKUs, and visible signage keep customers from blocking each other, and a clean restock path behind the counter keeps restocking fast. Keep high-demand items closest to the register so a single grab fills the order; keep slow movers on a back shelf until you have data showing they actually move. Hidden layout bonuses beyond community coverage are not confirmed in Steam community or creator videos as of 2026-09-09, so treat layout tweaks as quality-of-life improvements rather than confirmed multipliers.",
      },
      {
        id: "shops-customer-flow",
        type: "prose",
        heading: "Customer flow tips for the anime shop simulator shop",
        body:
          "Customer flow is the fourth habit. A queue builds up when restocking lags, prices are too low to clear shelf space, or the layout bottlenecks near the register. Watch the queue length and react before customers walk out: restock the empty shelf, slow down price increases on whatever is causing the wait, or rearrange the counter so two customers can be served in parallel. The Steam community hub for AppID 3393280 treats customer flow as a downstream symptom of upstream habits — restocking, pricing, and layout — rather than a separate mechanic. Once the core loop is stable, the next queue risk is no longer empty shelves but thieves, vandals, and litterers in the shop, plus ID checks and body scanners at the counter; the [shop defense, checkout, and events guide](/shop-defense-and-checkout/) covers that layer.",
      },
      {
        id: "shops-pitfalls",
        type: "prose",
        heading: "Common day-to-day pitfalls in the anime shop simulator shop",
        body:
          "The most common day-to-day pitfalls in an anime shop simulator shop are overstocking slow movers, leaving the counter blocked, and spending every coin on decoration before unlocking the next shelf upgrade. Avoid the trap of buying the largest pack of every SKU on day one; cash tied up in unsold stock is cash that cannot fund tomorrow's growth. Avoid the trap of raising prices until the queue stops moving; the loss of throughput usually outweighs the gain per sale. Avoid the trap of decorating before the shop is stable; cosmetics come after the core loop is profitable.",
      },
      {
        id: "shops-first-day-checklist",
        type: "steps",
        heading: "Recommended first-day checklist for the anime Shop Simulator shop",
        items: [
          { title: "Step 1", body: "Open the shop, walk every shelf, and note which SKUs are empty." },
          { title: "Step 2", body: "Restock only the empty SKUs in the smallest viable batch." },
          { title: "Step 3", body: "Set initial prices at a modest markup above restock cost." },
          { title: "Step 4", body: "Serve the first wave of customers and watch the queue length." },
          { title: "Step 5", body: "At close, reinvest the day's profit in the cheapest shelf upgrade that unlocks a new SKU or a new shelf slot." },
          { title: "Step 6", body: "Repeat the same checklist the next day, raising prices only on items that sold out." }
        ],
      },
      {
        id: "shops-sources",
        type: "prose",
        heading: "Sources",
        body:
          `- [Anime Shop Simulator ✨ Steam store page (AppID 3393280)](${SOURCES_STEAM}) — \`official/store\` — checked \`2026-09-09\` — confirms AppID 3393280 and the shop-management theme.\n- [Anime Shop Simulator ✨ Steam community hub (AppID 3393280)](${SOURCES_HUB}) — \`community/video\` — checked \`2026-09-09\` — confirms community discussion of the shop-management loop.\n- [Anime Shop Simulator ✨ SteamDB listing (AppID 3393280)](${SOURCES_STEAMDB}) — \`official/store\` — checked \`2026-09-09\` — confirms AppID 3393280 and store metadata.\n- [Anime Shop Simulator ✨ game-check brief](${SOURCES_BRIEF}) — \`reference\` — checked \`2026-09-09\` — confirms the shop-management framing for AppID 3393280.\n- [Google en-US autocomplete snapshot for \`anime shop simulator\`](${SOURCES_AUTOCOMPLETE}) — \`discovery-only\` — checked \`2026-09-09\` — confirms pre-launch demand for shop, customer, and inventory topics.`,
      },
    ],
    faqIds: [
      "shops-first-thing",
      "shops-pricing-how",
      "shops-customer-flow-how",
      "shops-decorate-or-upgrade",
      "shops-learn-basics",
    ],
    relatedPageIds: [
      "fixed-identity-overview-en-us",
      "fixed-gameplay-overview-en-us",
      "fixed-upgrades-money-en-us",
      "fixed-co-op-multiplayer-setup-en-us",
      "fixed-shop-defense-checkout-en-us",
      "guides",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-09",
  },

  // 6. Upgrades and money (guide)
  {
    id: "fixed-upgrades-money-en-us",
    translationKey: "upgrades-money",
    locale: "en-US",
    routeKind: "fixed",
    slug: "upgrades",
    url: "/upgrades",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Anime Shop Simulator Upgrades — Money and Priority",
    seoTitle: "Anime Shop Simulator Upgrades and Money Guide",
    metaDescription:
      "Earn money fast in the anime shop simulator upgrades ladder. Shelf upgrades, shop expansion, decoration priority, and a fast-growth checklist for Steam owners.",
    summary:
      "The anime shop simulator upgrades ladder on Steam (AppID 3393280) runs from shelf upgrades into shop expansion, then decoration and customer flow. Money comes from serving customers every in-game day, and that money should be reinvested into the next rung of the upgrade ladder rather than spent on cosmetic decoration.",
    hero: {
      eyebrow: "Upgrades & money",
      subtitle:
        "Upgrade ladder (shelf → expansion → decoration → customer flow), recommended priority, and a fast-growth checklist for the anime shop simulator upgrades ladder on Steam AppID 3393280.",
      ctas: [
        { label: "Shop Guide", href: "/shops/" },
        { label: "Gameplay Overview", href: "/gameplay/" },
        { label: "Beginner Walkthrough", href: "/walkthrough/" },
      ],
    },
    quickAnswer:
      "The anime shop simulator upgrades ladder on Steam (AppID 3393280) runs from shelf upgrades into shop expansion, then decoration and customer flow. Money comes from serving customers every in-game day, and that money should be reinvested into the next rung of the upgrade ladder rather than spent on cosmetic decoration. The fastest growth comes from keeping the core restock-serve loop profitable and pulling each rung of the ladder the moment it is affordable.",
    keyFacts: [
      { label: "Ladder", value: "Shelf → Expansion → Decoration → Customer flow" },
      { label: "Money source", value: "Daily customer sales" },
      { label: "First upgrade", value: "Cheapest shelf rung" },
    ],
    modules: [
      {
        id: "upgrades-money-overview",
        type: "prose",
        heading: "Money-earning overview for the anime shop simulator upgrades ladder",
        body:
          "Daily revenue is the only reliable money source in the anime shop simulator upgrades loop. Each in-game day opens with restocking, runs through serving customers at the counter, and closes with a cash tally that becomes the day's upgrade budget. Customer tips and small customer bonuses add a thin margin on top of base sales; the bulk of the day's money still comes from moving stock. The Steam store page for AppID 3393280 frames the entire economy around this restock-serve-upgrade cycle, and the [shop management guide](/shops/) explains how to maximize each day's revenue.",
      },
      {
        id: "upgrades-categories",
        type: "prose",
        heading: "Upgrade categories in the anime shop simulator upgrades ladder",
        body:
          "The anime shop simulator upgrades ladder splits into four categories, in roughly this order:\n\n- Shelf upgrades: the cheapest rung, which adds new SKUs, new shelf slots, or extra capacity per SKU.\n- Shop expansion: a mid-tier rung that adds floor space, a second counter, or a new room for stock.\n- Decoration: cosmetic-only upgrades that improve the look of the shop without changing throughput.\n- Customer flow: upgrades that reduce queue length, speed up checkout, or raise the cap on simultaneous customers.\n\nThe first three rungs grow revenue; decoration only changes appearance and should be skipped until the loop is profitable. Exact upgrade prices or hidden unlock thresholds beyond community coverage are not confirmed in Steam community or creator videos as of 2026-09-09.",
      },
      {
        id: "upgrades-priority",
        type: "steps",
        heading: "Recommended anime shop simulator upgrades priority list",
        items: [
          { title: "Step 1", body: "Shelf upgrades that unlock a new SKU you can stock today." },
          { title: "Step 2", body: "Shop expansion that adds the shelf slots you need for the new SKU." },
          { title: "Step 3", body: "Customer-flow upgrades only after the shop has two or more counters running." },
          { title: "Step 4", body: "Decoration last, once the rest of the ladder is paid off." }
        ],
      },
      {
        id: "upgrades-fast-growth",
        type: "steps",
        heading: "Fast-growth checklist for the anime shop simulator upgrades ladder",
        items: [
          { title: "Step 1", body: "End every in-game day with an empty wallet, not a full one — reinvest in the cheapest next rung." },
          { title: "Step 2", body: "Avoid buying decoration before the rest of the ladder is paid off." },
          { title: "Step 3", body: "Skip SKUs that do not sell; upgrade capacity only for SKUs that already move." },
          { title: "Step 4", body: "Re-price slow movers downward rather than upgrading around them." },
          { title: "Step 5", body: "Pull the next shelf upgrade the moment it becomes affordable, even if it leaves little cash for tomorrow." },
          { title: "Step 6", body: "Once the shop has two or more counters, spend the next upgrade on customer flow rather than decoration." }
        ],
      },
      {
        id: "upgrades-vs-mods",
        type: "prose",
        heading: "Disambiguating anime shop simulator upgrades from mods",
        body:
          "Search demand around the phrase `anime shop simulator upgrades` overlaps with the `anime shop simulator mods` cluster from Google en-US autocomplete, but mods are user-installed and are not part of the official Steam upgrade path. The official anime shop simulator upgrades ladder runs through the in-game upgrade menus on AppID 3393280; any third-party mod that adds new SKUs or new shelves sits outside that path and is not supported by the Steam store page or SteamDB. Players who want the official ladder should ignore the mods cluster and follow the four-category order above.",
      },
      {
        id: "upgrades-sources",
        type: "prose",
        heading: "Sources",
        body:
          `- [Anime Shop Simulator ✨ Steam store page (AppID 3393280)](${SOURCES_STEAM}) — \`official/store\` — checked \`2026-09-09\` — confirms AppID 3393280 and the upgrade-driven shop loop.\n- [Anime Shop Simulator ✨ Steam community hub (AppID 3393280)](${SOURCES_HUB}) — \`community/video\` — checked \`2026-09-09\` — confirms community discussion of upgrades and money topics.\n- [Anime Shop Simulator ✨ SteamDB listing (AppID 3393280)](${SOURCES_STEAMDB}) — \`official/store\` — checked \`2026-09-09\` — confirms AppID 3393280 and store metadata.\n- [Google en-US autocomplete snapshot for \`anime shop simulator upgrades\`](${SOURCES_AUTOCOMPLETE}) — \`discovery-only\` — checked \`2026-09-09\` — confirms pre-launch demand for upgrades, money, and mods topics.`,
      },
    ],
    faqIds: [
      "upgrades-fastest-money",
      "upgrades-first-buy",
      "upgrades-hidden-thresholds",
      "upgrades-mods-add",
      "upgrades-learn-basics",
    ],
    relatedPageIds: [
      "fixed-identity-overview-en-us",
      "fixed-gameplay-overview-en-us",
      "fixed-shop-management-en-us",
      "guides",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-09",
  },

  // 7. Demo and playtest (status)
  {
    id: "fixed-demo-playtest-en-us",
    translationKey: "demo-playtest",
    locale: "en-US",
    routeKind: "fixed",
    slug: "demo",
    url: "/demo",
    pageType: "release",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Anime Shop Simulator Demo — Status and Playtest Access",
    seoTitle: "Anime Shop Simulator Demo and Playtest — Access Guide",
    metaDescription:
      "Anime shop simulator demo and playtest status on Steam AppID 3393280. Access steps, demo scope, and how the demo relates to the full game as of 2026-09-09.",
    summary:
      "The anime shop simulator demo and playtest status for Steam AppID 3393280 is determined by the live Steam store page and SteamDB listing. As of the 2026-09-09 snapshot the autocomplete record shows demo and playtest variants in pre-launch search demand, but the live availability of either is not confirmed beyond what the store page or SteamDB currently lists.",
    hero: {
      eyebrow: "Demo & playtest status",
      subtitle:
        "Demo and playtest status for AppID 3393280, access path, demo scope, and how the demo relates to the full launch. Re-check the live Steam store page before telling a reader the demo is open.",
      ctas: [
        { label: "Steam Store Page", href: "/steam/" },
        { label: "Release Date", href: "/release/" },
        { label: "Identity Overview", href: "/about/" },
      ],
    },
    quickAnswer:
      "The anime shop simulator demo and playtest status for Steam AppID 3393280 is determined by the live Steam store page and SteamDB listing. As of the 2026-09-09 snapshot the autocomplete record shows demo and playtest variants in pre-launch search demand, but the live availability of either is not confirmed beyond what the store page or SteamDB currently lists. Re-check the Steam store page on publication day for the current access window.",
    keyFacts: [
      { label: "Steam AppID", value: "3393280" },
      { label: "Source of truth", value: "Steam store page for AppID 3393280" },
      { label: "Demo status", value: "See live Steam store page" },
      { label: "Playtest status", value: "See live Steam store page" },
    ],
    modules: [
      {
        id: "demo-status-block",
        type: "data-table",
        heading:
          "Anime shop simulator demo status block (snapshot 2026-09-09)",
        columns: [
          { key: "field", label: "Field" },
          { key: "value", label: "Value (snapshot 2026-09-09)" },
        ],
        rows: [
          { field: "Steam AppID", value: "3393280" },
          {
            field: "Demo status",
            value: "See live Steam store page for AppID 3393280",
          },
          {
            field: "Playtest status",
            value: "See live Steam store page for AppID 3393280",
          },
          {
            field: "Source of truth",
            value:
              "Steam store page for AppID 3393280, SteamDB listing for AppID 3393280",
          },
        ],
      },
      {
        id: "demo-playtest-block",
        type: "prose",
        heading: "Anime shop simulator playtest status block",
        body:
          "The Steam store page is also the source of truth for any playtest window. Playtest availability is typically signalled by a Steam event page, a playtest badge on the store page, or a closed registration form. None of those signals can be confirmed beyond what the store page currently shows as of 2026-09-09, so this page does not claim a playtest is open, closed, or scheduled. Re-open the Steam store page for AppID 3393280 before telling a reader that a playtest is available.",
      },
      {
        id: "demo-access-steps",
        type: "steps",
        heading: "How to access the anime shop simulator demo",
        items: [
          { title: "Step 1", body: "Open the Steam store page at `https://store.steampowered.com/app/3393280`." },
          { title: "Step 2", body: "If the button is missing, the demo is not currently listed and Steam will not grant access through any other path." },
          { title: "Step 3", body: "If a playtest is open, follow the playtest signup flow on the same store page; closed playtests do not accept new registrations." }
        ],
      },
      {
        id: "demo-scope",
        type: "prose",
        heading: "What the anime shop simulator demo includes",
        body:
          "The Steam store page is the only authoritative source for demo scope. Typical Steam demos for shop-management simulators cover the first in-game day or two, one or two shelves, and the first rung of the upgrade ladder, but those scope details are not confirmed for AppID 3393280 beyond what the store page or SteamDB currently lists. Demo content beyond what the Steam store page or SteamDB lists is not confirmed in Steam store or SteamDB as of 2026-09-09, so do not assume the demo covers any specific SKU, shelf, or upgrade tier.",
      },
      {
        id: "demo-vs-full",
        type: "prose",
        heading: "How the anime shop simulator demo relates to the full game",
        body:
          "The full anime shop simulator shop-management loop on AppID 3393280 is the restock-serve-upgrade cycle described in the [gameplay overview](/gameplay/) and the [shop management guide](/shops/). A demo, if open, is expected to mirror the opening portion of that loop with a smaller scope, then save the rest for the full release. The Steam store page for AppID 3393280 is the source of truth for how the demo is positioned relative to the full launch, and that positioning may change between the 2026-09-09 snapshot and publication day.",
      },
      {
        id: "demo-not-confirmed",
        type: "callout",
        tone: "caution",
        title: "Fact boundary — 2026-09-09",
        body:
          "Demo content beyond what the Steam store page or SteamDB lists is not confirmed in Steam store or SteamDB as of 2026-09-09; this page records that as a dated status statement rather than as a fact. Demo and playtest availability is determined by the live Steam store page for AppID 3393280; the autocomplete snapshot is discovery-only and cannot confirm live availability. The page does not claim a demo or playtest is open, closed, or scheduled beyond what the Steam store page currently lists.",
      },
      {
        id: "demo-sources",
        type: "prose",
        heading: "Sources",
        body:
          `- [Anime Shop Simulator ✨ Steam store page (AppID 3393280)](${SOURCES_STEAM}) — \`official/store\` — checked \`2026-09-09\` — confirms AppID 3393280 and is the source of truth for demo / playtest availability.\n- [Anime Shop Simulator ✨ SteamDB listing (AppID 3393280)](${SOURCES_STEAMDB}) — \`official/store\` — checked \`2026-09-09\` — confirms AppID 3393280 and historical store metadata.\n- [Anime Shop Simulator ✨ Steam community hub (AppID 3393280)](${SOURCES_HUB}) — \`community/video\` — checked \`2026-09-09\` — confirms the hub exists for AppID 3393280.\n- [Anime Shop Simulator ✨ game-check brief](${SOURCES_BRIEF}) — \`reference\` — checked \`2026-09-09\` — confirms pre-launch demo and playtest signals for AppID 3393280.\n- [Google en-US autocomplete snapshot for \`anime shop simulator demo\`](${SOURCES_AUTOCOMPLETE}) — \`discovery-only\` — checked \`2026-09-09\` — confirms pre-launch demand for demo and playtest variants.`,
      },
    ],
    faqIds: [
      "demo-available-now",
      "demo-join-playtest",
      "demo-includes",
      "demo-progress-transfer",
    ],
    relatedPageIds: [
      "fixed-identity-overview-en-us",
      "fixed-release-date-en-us",
      "fixed-steam-store-page-en-us",
      "fixed-gameplay-overview-en-us",
      "guides",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-09",
  },

  // 8. Beginner walkthrough (hub)
  {
    id: "guides",
    translationKey: "guides",
    locale: "en-US",
    routeKind: "fixed",
    slug: "walkthrough",
    url: "/walkthrough",
    pageType: "guides",
    presentation: { shell: "hub", variant: "card-grid" },
    h1: "Anime Shop Simulator Walkthrough — Beginner Hub",
    seoTitle: "Anime Shop Simulator Walkthrough — Beginner's Hub",
    metaDescription:
      "anime shop simulator walkthrough covering onboarding, shop basics, money, upgrades, and demo access. Beginner hub for first-time Steam players on AppID 3393280.",
    summary:
      "The anime shop simulator walkthrough on Steam (AppID 3393280) starts with the restock-serve-upgrade loop described in the gameplay overview, then walks through the first day's shop-management checklist, the first upgrade purchase, and the demo or full-game access path. This hub is the entry point for first-time players; every guide on the site links back here.",
    hero: {
      eyebrow: "Beginner hub",
      subtitle:
        "First-session onboarding, shop basics, money loop, demo access, and a guide-by-guide map for the anime shop simulator walkthrough on Steam AppID 3393280.",
      ctas: [
        { label: "Identity Overview", href: "/about/" },
        { label: "Gameplay Overview", href: "/gameplay/" },
        { label: "Demo & Playtest", href: "/demo/" },
      ],
    },
    quickAnswer:
      "The anime shop simulator walkthrough on Steam (AppID 3393280) starts with the restock-serve-upgrade loop described in the [gameplay overview](/gameplay/), then walks through the first day's shop-management checklist, the first upgrade purchase, and the demo or full-game access path. This hub is the entry point for first-time players; every guide on the site links back here.",
    keyFacts: [
      { label: "Steam AppID", value: "3393280" },
      { label: "Entry point", value: "Onboarding checklist + guide map" },
      { label: "Spine", value: "Restock → Serve → Close → Upgrade" },
    ],
    modules: [
      {
        id: "walkthrough-onboarding",
        type: "steps",
        heading:
          "First-session onboarding checklist for the anime shop simulator walkthrough",
        items: [
          { title: "Step 1", body: "Confirm the title is `Anime Shop Simulator ✨` on Steam AppID 3393280 via the [identity overview](/about/)." },
          { title: "Step 2", body: "Confirm the release date and platform block on the [release date](/release/) page so you know whether you are playing the demo or the full launch." },
          { title: "Step 3", body: "Bookmark the [Steam store page summary](/steam/) so you can return to the live store page for pricing and supported platforms." },
          { title: "Step 4", body: "Read the [gameplay overview](/gameplay/) to anchor the restock-serve-upgrade cycle in your head before you click anything." },
          { title: "Step 5", body: "Open the shop, restock only the empty shelves in a small batch, and price stock at a modest markup above restock cost." },
          { title: "Step 6", body: "Close the day, reinvest the profit in the cheapest shelf upgrade, and repeat." }
        ],
      },
      {
        id: "walkthrough-shop-basics",
        type: "prose",
        heading:
          "Shop-management basics inside the anime shop simulator walkthrough",
        body:
          "Shop-management basics come down to three habits: restock before the rush, price to move, and keep the counter clear. The [shop management guide](/shops/) walks through each habit in detail, including the recommended first-day checklist and the common day-to-day pitfalls. Read that guide once you have finished onboarding, then return here for the money-earning loop.",
      },
      {
        id: "walkthrough-money-loop",
        type: "prose",
        heading: "Money-earning loop inside the anime shop simulator walkthrough",
        body:
          "The money-earning loop in the anime shop simulator walkthrough is short:\n\n- Restock empty shelves in the smallest viable batch.\n- Serve customers until the queue clears or the day ends.\n- Close the day with a cash tally that becomes the next upgrade budget.\n- Reinvest the day's profit in the next rung of the upgrade ladder.\n\nThis loop is the same loop the [upgrades and money guide](/upgrades/) expands on, and it is the only reliable money source described across this site. Multi-day progression timelines beyond community coverage are not confirmed in Steam community as of 2026-09-09, so treat any third-party \"day 5 unlocks X\" claim as a community signal rather than a confirmed schedule.",
      },
      {
        id: "walkthrough-guide-map",
        type: "prose",
        heading: "When to read each anime shop simulator walkthrough guide",
        body:
          "Every guide on this site has a specific moment in the onboarding flow when it is most useful. Use this map to decide what to read next:\n\n- **Identity overview** at `/about/`: read first, before launching the game, to confirm AppID 3393280 and to disambiguate the Steam release from the Roblox `anime card shop simulator` franchise.\n- **Release date** at `/release/`: read second, to confirm the release date 2026-09-11 and the supported-platforms block from the Steam store page as of 2026-09-09.\n- **Steam store page summary** at `/steam/`: read when you need the canonical links to the store page, SteamDB, the community hub, and ProtonDB for AppID 3393280.\n- **Gameplay overview** at `/gameplay/`: read once, to anchor the restock-serve-upgrade cycle before opening the shop.\n- **Shop management guide** at `/shops/`: read after the first day, when you are deciding how to price and restock.\n- **Upgrades and money guide** at `/upgrades/`: read once you have a day's revenue to reinvest, to plan the first upgrade purchase.\n- **Demo and playtest page** at `/demo/`: read if you want to try the demo before launch, to confirm access status on the Steam store page.",
      },
      {
        id: "walkthrough-demo",
        type: "prose",
        heading: "Demo access inside the anime shop simulator walkthrough",
        body:
          "If a demo or playtest is open as of 2026-09-09, the [demo and playtest page](/demo/) describes the access path through the Steam store page for AppID 3393280. The store page is the source of truth for whether the demo is currently listed, and the demo page is updated as soon as the store page status changes. Treat the demo as a way to rehearse the restock-serve-upgrade cycle from the gameplay overview before committing to the full launch.",
      },
      {
        id: "walkthrough-linkout",
        type: "prose",
        heading: "Link-out summary for the anime shop simulator walkthrough",
        body:
          "Every guide referenced above lives on this site, so the link-out map for the anime shop simulator walkthrough is:\n\n- [identity overview](/about/)\n- [release date](/release/)\n- [Steam store page summary](/steam/)\n- [gameplay overview](/gameplay/)\n- [shop management guide](/shops/)\n- [upgrades and money guide](/upgrades/)\n- [demo and playtest page](/demo/)\n- [co-op multiplayer setup](/co-op-multiplayer-setup/)\n- [shop defense, checkout, and events](/shop-defense-and-checkout/)\n\nEach of those guides is part of the launch scope declared in the Site Plan and is the only place this hub links out to.",
      },
      {
        id: "walkthrough-sources",
        type: "prose",
        heading: "Sources",
        body:
          `- [Anime Shop Simulator ✨ Steam store page (AppID 3393280)](${SOURCES_STEAM}) — \`official/store\` — checked \`2026-09-09\` — confirms AppID 3393280 and the restock-serve-upgrade loop framing.\n- [Anime Shop Simulator ✨ SteamDB listing (AppID 3393280)](${SOURCES_STEAMDB}) — \`official/store\` — checked \`2026-09-09\` — confirms AppID 3393280 and store metadata.\n- [Anime Shop Simulator ✨ Steam community hub (AppID 3393280)](${SOURCES_HUB}) — \`community/video\` — checked \`2026-09-09\` — confirms community discussion of shop, money, and upgrades topics.\n- [Anime Shop Simulator ✨ game-check brief](${SOURCES_BRIEF}) — \`reference\` — checked \`2026-09-09\` — confirms the shop-management framing and pre-launch signals for AppID 3393280.\n- [Google en-US autocomplete snapshot for \`anime shop simulator\`](${SOURCES_AUTOCOMPLETE}) — \`discovery-only\` — checked \`2026-09-09\` — confirms pre-launch demand for walkthrough, tips, and beginner-guide topics.`,
      },
    ],
    faqIds: [
      "walkthrough-where-start",
      "walkthrough-core-loop",
      "walkthrough-how-long",
      "walkthrough-which-first",
      "walkthrough-demo-before-launch",
    ],
    relatedPageIds: [
      "fixed-identity-overview-en-us",
      "fixed-release-date-en-us",
      "fixed-steam-store-page-en-us",
      "fixed-gameplay-overview-en-us",
      "fixed-shop-management-en-us",
      "fixed-upgrades-money-en-us",
      "fixed-demo-playtest-en-us",
      "fixed-co-op-multiplayer-setup-en-us",
      "fixed-shop-defense-checkout-en-us",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-09",
  },
];
