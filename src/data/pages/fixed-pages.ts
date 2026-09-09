import type { PageContent } from "@/types/content";

const SOURCES_STEAM = "https://store.steampowered.com/app/3393280";
const SOURCES_STEAMDB = "https://steamdb.info/app/3393280/";
const SOURCES_HUB = "https://steamcommunity.com/app/3393280";
const SOURCES_PROTONDB = "https://www.protondb.com/app/3393280";
const SOURCES_BRIEF = "game-intelligence/handoffs/game-check/build-now/anime-shop-simulator.md";
const SOURCES_AUTOCOMPLETE =
  "site-launch/tasks/animeshopsimulator-xyz/planning/autocomplete.json";

export const fixedPages: PageContent[] = [
  // 1. Identity overview (status page)
  {
    id: "fixed-identity-overview-en-us",
    translationKey: "identity-overview",
    locale: "en-US",
    routeKind: "fixed",
    slug: "about",
    url: "/about",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "What Is Anime Shop Simulator ✨? Steam Identity and Disambiguation",
    seoTitle:
      "Anime Shop Simulator ✨ on Steam — Identity and Disambiguation",
    metaDescription:
      "Anime Shop Simulator ✨ is the Steam AppID 3393280 shop-management sim releasing 2026-09-11. See how it differs from Roblox anime card shop sims and more.",
    summary:
      "Anime Shop Simulator ✨ is the anime-themed shop-management simulator releasing on Steam as AppID 3393280 on 2026-09-11. It is not the Roblox `anime card shop simulator` franchise, a browser idle game, or a real-world retail store.",
    hero: {
      eyebrow: "Identity & disambiguation",
      subtitle:
        "Steam AppID 3393280, release date 2026-09-11, popularity-coming-soon rank 6 (snapshot 2026-09-09). Disambiguated from the Roblox `anime card shop simulator` franchise, browser anime-shop idle games, and real-world `anime store near me` retail intent.",
      ctas: [
        { label: "Release Date", href: "/release/" },
        { label: "Steam Store Page", href: "/steam/" },
        { label: "Gameplay Overview", href: "/gameplay/" },
      ],
    },
    quickAnswer:
      "Anime Shop Simulator ✨ is the anime-themed shop-management simulator releasing on Steam as AppID 3393280 on 2026-09-11. As of the 2026-09-09 snapshot it sits at Steam popularity-coming-soon rank 6, with a confirmed shop-management theme. It is not the Roblox `anime card shop simulator` franchise, a browser idle game, or a real-world retail store.",
    keyFacts: [
      { label: "Title", value: "Anime Shop Simulator ✨" },
      { label: "Platform", value: "Steam" },
      { label: "Steam AppID", value: "3393280" },
      { label: "Release date", value: "2026-09-11" },
      { label: "Theme", value: "Anime-themed shop-management simulator" },
      {
        label: "Popularity-coming-soon rank",
        value: "6 (snapshot 2026-09-09)",
      },
    ],
    modules: [
      {
        id: "identity-card-snapshot",
        type: "data-table",
        heading: "Identity card snapshot (2026-09-09)",
        columns: [
          { key: "field", label: "Field" },
          { key: "value", label: "Value (snapshot 2026-09-09)" },
        ],
        rows: [
          { field: "Title", value: "Anime Shop Simulator ✨" },
          { field: "Platform", value: "Steam" },
          { field: "Steam AppID", value: "3393280" },
          { field: "Release date", value: "2026-09-11" },
          { field: "Theme", value: "Anime-themed shop-management simulator" },
          {
            field: "Popularity-coming-soon rank",
            value: "6 (snapshot 2026-09-09)",
          },
        ],
      },
      {
        id: "identity-vs-roblox",
        type: "prose",
        heading:
          "How it differs from the Roblox `anime card shop simulator` franchise",
        body:
          "The Roblox `anime card shop simulator` franchise is a family of Roblox experiences that share anime-shop vocabulary (restocking shelves, customer queues, money loops) but live entirely on Roblox. The Steam release has its own AppID, store page, and SteamDB listing. If you arrived here searching for `anime card shop simulator codes`, those codes belong to the Roblox franchise and do not apply to this Steam title.",
      },
      {
        id: "identity-vs-browser",
        type: "prose",
        heading: "How it differs from browser anime shop idle games",
        body:
          "Browser anime-shop idle games and clicker experiences are typically web-only, free-to-play, and use a different economy model. The Steam release is paid and built around a persistent shop loop. Mechanics such as restocking, customer queues, and money loops may sound similar, but the Steam title is built around long-form progression on a single storefront.",
      },
      {
        id: "identity-vs-retail",
        type: "prose",
        heading: "How it differs from a real-world `anime store near me`",
        body:
          "`Anime store near me` is real-world retail intent for physical shops that sell anime merchandise. This site covers a video game, not a retail locator. The two intents share the word `anime store` but answer completely different questions, which is why this site is not a substitute for store-finding queries.",
      },
      {
        id: "identity-not-announced",
        type: "callout",
        tone: "unknown",
        title: "What is and is not announced as of 2026-09-09",
        body:
          "Console ports: Not announced as of 2026-09-09.\nConsole exclusivity: Not announced as of 2026-09-09.\nMultiplayer modes: Not announced as of 2026-09-09.\nMicrotransactions: Not announced as of 2026-09-09.",
      },
      {
        id: "identity-sources",
        type: "prose",
        heading: "Sources",
        body:
          `- [Anime Shop Simulator ✨ Steam store page (AppID 3393280)](${SOURCES_STEAM}) — \`official/store\` — checked \`2026-09-09\` — confirms AppID 3393280, release date 2026-09-11, and shop-management theme.\n- [Anime Shop Simulator ✨ SteamDB listing (AppID 3393280)](${SOURCES_STEAMDB}) — \`official/store\` — checked \`2026-09-09\` — confirms AppID 3393280 and store metadata.\n- [Anime Shop Simulator ✨ Steam community hub (AppID 3393280)](${SOURCES_HUB}) — \`community/video\` — checked \`2026-09-09\` — confirms the community hub exists for AppID 3393280.`,
      },
    ],
    faqIds: [
      "identity-is-on-steam",
      "identity-when-release",
      "identity-roblox-diff",
      "identity-consoles",
    ],
    relatedPageIds: [
      "fixed-release-date-en-us",
      "fixed-steam-store-page-en-us",
      "fixed-gameplay-overview-en-us",
      "fixed-shop-management-en-us",
      "fixed-upgrades-money-en-us",
      "fixed-demo-playtest-en-us",
      "guides",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-09",
  },

  // 2. Release date (status page)
  {
    id: "fixed-release-date-en-us",
    translationKey: "release-date",
    locale: "en-US",
    routeKind: "fixed",
    slug: "release",
    url: "/release",
    pageType: "release",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Anime Shop Simulator Release Date — Steam Launch Status",
    seoTitle: "Anime Shop Simulator Release Date — Steam Launch Status",
    metaDescription:
      "Anime Shop Simulator release date is 2026-09-11 on Steam (AppID 3393280). See supported platforms, demo, playtest, and pre-order status as of 2026-09-09.",
    summary:
      "The Anime Shop Simulator release date on Steam is 2026-09-11, taken from the 2026-09-09 planning snapshot for AppID 3393280. Steam is the only confirmed platform in the current snapshot. Demo, playtest, and pre-order status come straight from the Steam store page and may change before launch day.",
    hero: {
      eyebrow: "Steam launch status",
      subtitle:
        "Steam release date 2026-09-11 (snapshot 2026-09-09). Supported platforms, demo / playtest status, and pre-order status come straight from the Steam store page for AppID 3393280.",
      ctas: [
        { label: "Identity Overview", href: "/about/" },
        { label: "Steam Store Page", href: "/steam/" },
        { label: "Demo & Playtest", href: "/demo/" },
      ],
    },
    quickAnswer:
      "The Anime Shop Simulator release date on Steam is 2026-09-11, taken from the 2026-09-09 planning snapshot for AppID 3393280. Steam is the only confirmed platform in the current snapshot. Demo, playtest, and pre-order status come straight from the Steam store page and may change before launch day.",
    keyFacts: [
      { label: "Steam AppID", value: "3393280" },
      { label: "Release date", value: "2026-09-11" },
      { label: "Source", value: "Steam store page, game-check brief" },
      { label: "Platform (snapshot)", value: "Steam (Windows PC)" },
    ],
    modules: [
      {
        id: "release-block",
        type: "data-table",
        heading: "Steam release date block",
        columns: [
          { key: "field", label: "Field" },
          { key: "value", label: "Value (snapshot 2026-09-09)" },
        ],
        rows: [
          { field: "Steam AppID", value: "3393280" },
          { field: "Release date", value: "2026-09-11" },
          {
            field: "Source",
            value: "Steam store page for AppID 3393280, game-check brief",
          },
        ],
      },
      {
        id: "release-platforms-block",
        type: "prose",
        heading: "Supported platforms block (as of 2026-09-09)",
        body:
          "The Steam store page lists Steam (Windows PC) as the supported platform for AppID 3393280 as of 2026-09-09. Console versions are not announced as of 2026-09-09. Treat the platform block as a snapshot, not a long-term promise.",
      },
      {
        id: "release-demo-preorder",
        type: "prose",
        heading: "Demo, playtest, and pre-order status",
        body:
          "The Steam store page metadata is the source of truth for demo, playtest, and pre-order status. As of the 2026-09-09 snapshot the autocomplete record shows demo and playtest variants in the search demand, but the live availability on the store page may differ. Visit the [demo and playtest page](/demo/) for the current access window before assuming a demo or playtest is open.",
      },
      {
        id: "release-timezone",
        type: "prose",
        heading: "Time-zone notes",
        body:
          "Steam store page release dates are stored in the storefront's local convention, and US Steam traffic typically reads the date in the user's local time. If the store page shows 2026-09-11 with no specific hour, treat the date as a calendar-day release rather than a precise launch hour. Exact launch-hour times per region are not announced as of 2026-09-09.",
      },
      {
        id: "release-not-announced",
        type: "callout",
        tone: "unknown",
        title: "What is and is not announced as of 2026-09-09",
        body:
          "Exact launch-hour times per region: Not announced as of 2026-09-09.\nConsole release dates: Not announced as of 2026-09-09.\nFull edition breakdown: Not announced as of 2026-09-09.",
      },
      {
        id: "release-sources",
        type: "prose",
        heading: "Sources",
        body:
          `- [Anime Shop Simulator ✨ Steam store page (AppID 3393280)](${SOURCES_STEAM}) — \`official/store\` — checked \`2026-09-09\` — confirms AppID 3393280, release date 2026-09-11, and supported platforms.\n- [Anime Shop Simulator ✨ SteamDB listing (AppID 3393280)](${SOURCES_STEAMDB}) — \`official/store\` — checked \`2026-09-09\` — confirms AppID 3393280 and store metadata.\n- [Anime Shop Simulator ✨ game-check brief](${SOURCES_BRIEF}) — \`reference\` — checked \`2026-09-09\` — confirms release date 2026-09-11 and pre-launch platform signals.\n- [Google en-US autocomplete snapshot for \`anime shop simulator release date\`](${SOURCES_AUTOCOMPLETE}) — \`discovery-only\` — checked \`2026-09-09\` — confirms pre-launch demand for release date and platform variants.`,
      },
    ],
    faqIds: [
      "release-when",
      "release-platforms",
      "release-demo",
      "release-preorder",
    ],
    relatedPageIds: [
      "fixed-identity-overview-en-us",
      "fixed-steam-store-page-en-us",
      "fixed-demo-playtest-en-us",
      "guides",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-09",
  },

  // 3. Steam store page (status page)
  {
    id: "fixed-steam-store-page-en-us",
    translationKey: "steam-store-page",
    locale: "en-US",
    routeKind: "fixed",
    slug: "steam",
    url: "/steam",
    pageType: "release",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Anime Shop Simulator Steam — Store, SteamDB, and Community Hub",
    seoTitle: "Anime Shop Simulator Steam — Store, SteamDB, and Hub",
    metaDescription:
      "Find the Anime Shop Simulator Steam store page, SteamDB listing, community hub, and ProtonDB entry for AppID 3393280. Pricing and platform snapshot inside.",
    summary:
      "The official Anime Shop Simulator Steam store page lives at `https://store.steampowered.com/app/3393280` for AppID 3393280. SteamDB lists the same AppID, the Steam community hub sits at the corresponding URL, and ProtonDB covers Linux and Steam Deck compatibility. Pricing and supported platforms are snapshots as of 2026-09-09.",
    hero: {
      eyebrow: "Canonical Steam links",
      subtitle:
        "Official Steam store page, SteamDB listing, community hub, and ProtonDB entry for AppID 3393280. Pricing and supported-platform snapshot inside.",
      ctas: [
        { label: "Release Date", href: "/release/" },
        { label: "Identity Overview", href: "/about/" },
        { label: "Gameplay Overview", href: "/gameplay/" },
      ],
    },
    quickAnswer:
      "The official Anime Shop Simulator Steam store page lives at `https://store.steampowered.com/app/3393280` for AppID 3393280. SteamDB lists the same AppID at `https://steamdb.info/app/3393280/`, and the Steam community hub sits at `https://steamcommunity.com/app/3393280`. ProtonDB covers Linux and Steam Deck compatibility at `https://www.protondb.com/app/3393280`. Pricing and supported platforms are snapshots as of 2026-09-09.",
    keyFacts: [
      { label: "Steam AppID", value: "3393280" },
      { label: "Store URL", value: "store.steampowered.com/app/3393280" },
      { label: "SteamDB URL", value: "steamdb.info/app/3393280/" },
      { label: "Community hub URL", value: "steamcommunity.com/app/3393280" },
      { label: "ProtonDB URL", value: "protondb.com/app/3393280" },
    ],
    modules: [
      {
        id: "steam-store-summary",
        type: "data-table",
        heading: "Steam store page summary",
        columns: [
          { key: "field", label: "Field" },
          { key: "value", label: "Value (snapshot 2026-09-09)" },
        ],
        rows: [
          { field: "Store URL", value: SOURCES_STEAM },
          { field: "Steam AppID", value: "3393280" },
          {
            field: "What it shows",
            value:
              "Title, store description, screenshots, supported platforms, release date, pricing, demo / playtest status",
          },
        ],
      },
      {
        id: "steam-steamdb",
        type: "prose",
        heading: "SteamDB listing summary",
        body:
          "SteamDB mirrors the Steam store metadata for AppID 3393280 and adds historical tracking (price changes, depots, build updates). Use SteamDB when you want to verify a change over time or check whether a price has shifted before recommending a purchase.",
      },
      {
        id: "steam-hub",
        type: "prose",
        heading: "Steam community hub summary",
        body:
          "The Steam community hub at `https://steamcommunity.com/app/3393280` hosts discussions, screenshots, artwork, and links back to the store page and SteamDB. Treat hub content as community demand signals (e.g. shop-management, money, upgrades topics) rather than authoritative economy facts.",
      },
      {
        id: "steam-protondb",
        type: "prose",
        heading: "ProtonDB summary (Linux / Steam Deck compatibility)",
        body:
          "ProtonDB at `https://www.protondb.com/app/3393280` tracks community-reported Linux and Steam Deck compatibility. As of the 2026-09-09 snapshot the ProtonDB entry for AppID 3393280 is the only Linux / Steam Deck compatibility signal. Specific Linux / Steam Deck compatibility ratings beyond what ProtonDB lists are not confirmed in ProtonDB as of 2026-09-09.",
      },
      {
        id: "steam-pricing",
        type: "prose",
        heading: "Pricing summary as listed on the store page",
        body:
          "Pricing is listed on the Steam store page for AppID 3393280. As of the 2026-09-09 snapshot the title is in a pre-launch state, and any pre-order pricing or launch pricing should be re-checked on the live store page on publication day. Do not quote a price from memory or from a cached snippet when the store page itself is the source.",
      },
      {
        id: "steam-not-confirmed",
        type: "callout",
        tone: "unknown",
        title: "What is and is not confirmed as of 2026-09-09",
        body:
          "Specific Linux / Steam Deck compatibility ratings beyond what ProtonDB lists: Not confirmed in ProtonDB as of 2026-09-09.",
      },
      {
        id: "steam-sources",
        type: "prose",
        heading: "Sources",
        body:
          `- [Anime Shop Simulator ✨ Steam store page (AppID 3393280)](${SOURCES_STEAM}) — \`official/store\` — checked \`2026-09-09\` — confirms AppID 3393280, pricing snapshot, and supported platforms.\n- [Anime Shop Simulator ✨ SteamDB listing (AppID 3393280)](${SOURCES_STEAMDB}) — \`official/store\` — checked \`2026-09-09\` — confirms AppID 3393280 and historical store metadata.\n- [Anime Shop Simulator ✨ Steam community hub (AppID 3393280)](${SOURCES_HUB}) — \`community/video\` — checked \`2026-09-09\` — confirms the hub exists and links back to the store page and SteamDB.\n- [Anime Shop Simulator ✨ ProtonDB listing (AppID 3393280)](${SOURCES_PROTONDB}) — \`reference\` — checked \`2026-09-09\` — confirms Linux / Steam Deck compatibility entry exists for AppID 3393280.\n- [Google en-US autocomplete snapshot for \`anime shop simulator steam\`](${SOURCES_AUTOCOMPLETE}) — \`discovery-only\` — checked \`2026-09-09\` — confirms pre-launch Steam and SteamDB demand signals.`,
      },
    ],
    faqIds: ["steam-appid", "steam-pricing", "steam-deck", "steam-hub-active"],
    relatedPageIds: [
      "fixed-identity-overview-en-us",
      "fixed-release-date-en-us",
      "fixed-gameplay-overview-en-us",
      "guides",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-09",
  },

  // 4. Gameplay overview (explanation)
  {
    id: "fixed-gameplay-overview-en-us",
    translationKey: "gameplay-overview",
    locale: "en-US",
    routeKind: "fixed",
    slug: "gameplay",
    url: "/gameplay",
    pageType: "guides",
    presentation: { shell: "hub", variant: "card-grid" },
    h1: "Anime Shop Simulator Gameplay — Shop-Management Loop",
    seoTitle: "Anime Shop Simulator Gameplay — Shop-Management Loop",
    metaDescription:
      "Anime Shop Simulator gameplay is built around a daily shop-management loop: restock, serve customers, close the day, and reinvest in upgrades on Steam AppID 3393280.",
    summary:
      "Anime Shop Simulator gameplay is built around a daily shop-management loop. You open the shop, restock shelves, serve customers as they queue up, close the day, and spend the day's revenue on upgrades or expansion. Money flows back into the shop through sales, and upgrades feed back into the loop by raising capacity, customer throughput, or stock variety.",
    hero: {
      eyebrow: "Gameplay loop",
      subtitle:
        "The core Anime Shop Simulator gameplay loop is restock → serve → close → upgrade. Money, customers, inventory, and the upgrade ladder feed back into the same cycle every in-game day.",
      ctas: [
        { label: "Shop Guide", href: "/shops/" },
        { label: "Upgrades & Money", href: "/upgrades/" },
        { label: "Beginner Walkthrough", href: "/walkthrough/" },
      ],
    },
    quickAnswer:
      "Anime Shop Simulator gameplay is built around a daily shop-management loop. You open the shop, restock shelves, serve customers as they queue up, close the day, and spend the day's revenue on upgrades or expansion. Money flows back into the shop through sales, and upgrades feed back into the loop by raising capacity, customer throughput, or stock variety.",
    keyFacts: [
      { label: "Loop shape", value: "Restock → Serve → Close → Upgrade" },
      { label: "Pacing signal", value: "Customer queue at the counter" },
      { label: "Inventory unit", value: "SKU per shelf slot" },
      { label: "Money loop", value: "Sales revenue → restock + upgrades" },
    ],
    modules: [
      {
        id: "gameplay-loop-steps",
        type: "steps",
        heading: "The daily shop-management loop",
        items: [
          { title: "Step 1", body: "Open the shop and confirm the day's stock levels on the shelves." },
          { title: "Step 2", body: "Restock any SKUs that ran out or are running low before the customer queue builds." },
          { title: "Step 3", body: "Serve customers as they arrive at the counter, taking payment and clearing the queue." },
          { title: "Step 4", body: "Close the day to bank the day's revenue and reset the shop for the next session." },
          { title: "Step 5", body: "Spend money on upgrades, expansion, or decoration that feed back into the next day." }
        ],
      },
      {
        id: "gameplay-customers",
        type: "prose",
        heading: "Customers, queues, and satisfaction",
        body:
          "Customers arrive in a queue and walk up to the counter to buy stock. The store page and community coverage describe the queue as the visible pacing signal for the day — faster queues mean more sales per hour, slower queues give you time to restock between customers. Customer satisfaction is mentioned in community coverage as a factor in repeat visits, but the exact per-customer satisfaction math or hidden mechanics beyond community coverage are not confirmed in Steam community or creator videos as of 2026-09-09.",
      },
      {
        id: "gameplay-inventory",
        type: "prose",
        heading: "Inventory and SKUs",
        body:
          "Inventory in Anime Shop Simulator gameplay is organized into SKUs — individual items or product types that you stock on the shelves. When a SKU sells out, you reorder it from the supplier view and restock the shelf before the next customer arrives. Variety matters: a shop with only one SKU stalls the queue, while a shop with several SKUs lets different customers find what they want. Exact per-SKU pricing math or hidden layout bonuses beyond community coverage are not confirmed in Steam community or creator videos as of 2026-09-09.",
      },
      {
        id: "gameplay-money-flow",
        type: "prose",
        heading: "Money flow and the upgrade loop",
        body:
          "Money in Anime Shop Simulator gameplay flows in three directions:\n\n- Sales revenue from customers pays into the shop's daily total.\n- Restocking subtracts from that total, since you pay suppliers for each SKU you reorder.\n- Upgrades and expansion cost the largest chunks of money and are the main way to grow the shop long-term.\n\nThe upgrade loop feeds back into the daily loop: a bigger shelf capacity means fewer restock runs, a layout upgrade can speed up customer flow, and decoration upgrades can influence customer satisfaction. Money that stays in the shop's bank is safe; money that gets reinvested is what drives the next day's higher revenue.",
      },
      {
        id: "gameplay-upgrade-feedback",
        type: "prose",
        heading: "How upgrades feed back into the loop",
        body:
          "Upgrades are how the shop grows. The community coverage and the planning brief describe the upgrade ladder as shelf upgrades → shop expansion → decoration → customer flow, with each tier unlocking more capacity or more variety. Each upgrade makes the daily loop faster or more profitable, which in turn earns more money for the next round of upgrades. That feedback cycle is the long arc of Anime Shop Simulator gameplay.",
      },
      {
        id: "gameplay-not-confirmed",
        type: "callout",
        tone: "caution",
        title: "What is and is not confirmed as of 2026-09-09",
        body:
          "Exact per-customer satisfaction math or hidden mechanics beyond community coverage: Not confirmed in Steam community or creator videos as of 2026-09-09.\nPer-SKU pricing math or hidden layout bonuses: Not confirmed in Steam community or creator videos as of 2026-09-09.",
      },
      {
        id: "gameplay-sources",
        type: "prose",
        heading: "Sources",
        body:
          `- [Anime Shop Simulator ✨ Steam store page (AppID 3393280)](${SOURCES_STEAM}) — \`official/store\` — checked \`2026-09-09\` — confirms the shop-management theme and the restock → serve → close → upgrade loop vocabulary.\n- [Anime Shop Simulator ✨ SteamDB listing (AppID 3393280)](${SOURCES_STEAMDB}) — \`official/store\` — checked \`2026-09-09\` — confirms AppID 3393280 and store metadata.\n- [Anime Shop Simulator ✨ Steam community hub (AppID 3393280)](${SOURCES_HUB}) — \`community/video\` — checked \`2026-09-09\` — confirms shop-management, money, and upgrades demand signals.\n- [YouTube creator videos that explicitly cite the live store page for AppID 3393280](${SOURCES_STEAM}) — \`community/video\` — checked \`2026-09-09\` — supports the restock → serve → close → upgrade loop and upgrade ladder narrative.\n- [Anime Shop Simulator ✨ game-check brief](${SOURCES_BRIEF}) — \`reference\` — checked \`2026-09-09\` — confirms shop-management origin and upgrade ladder snapshot.`,
      },
    ],
    faqIds: [
      "gameplay-core-loop",
      "gameplay-customers",
      "gameplay-inventory",
      "gameplay-money",
      "gameplay-upgrades-change-loop",
    ],
    relatedPageIds: [
      "fixed-identity-overview-en-us",
      "fixed-shop-management-en-us",
      "fixed-upgrades-money-en-us",
      "guides",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-09",
  },
];
