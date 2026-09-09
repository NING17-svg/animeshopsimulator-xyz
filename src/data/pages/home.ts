import type { PageContent } from "@/types/content";

export const homePage: PageContent = {
  id: "home",
  translationKey: "home",
  locale: "en-US",
  routeKind: "home",
  slug: "",
  url: "/",
  pageType: "home",
  presentation: { shell: "home" },
  h1: "Anime Shop Simulator ✨ on Steam — Release, Gameplay, and Where to Start",
  seoTitle:
    "Anime Shop Simulator ✨ — Steam Release and Gameplay Hub",
  metaDescription:
    "Anime Shop Simulator ✨ releases on Steam on 2026-09-11. Find the Steam store page, gameplay overview, shop tips, and walkthrough for this anime shop sim.",
  summary:
    "Anime Shop Simulator ✨ is the anime-themed shop-management simulator releasing on Steam as AppID 3393280 on 2026-09-11. Start with the launch facts, the gameplay loop, and the beginner walkthrough.",
  hero: {
    eyebrow: "Steam launch hub",
    subtitle:
      "Anime Shop Simulator ✨ releases on Steam on 2026-09-11 (AppID 3393280) as an anime-themed shop-management simulator. Find the Steam store page, gameplay overview, shop tips, and walkthrough below.",
    ctas: [
      { label: "Beginner Walkthrough", href: "/walkthrough/" },
      { label: "Release Date", href: "/release/" },
      { label: "Steam Store Page", href: "/steam/" },
    ],
  },
  quickAnswer:
    "Anime Shop Simulator ✨ is an anime-themed shop-management simulator arriving on Steam as AppID 3393280, with a release date of 2026-09-11. As of the 2026-09-09 snapshot it sits at Steam popularity-coming-soon rank 6. Players run a shop, restock shelves, serve customers, and reinvest money into upgrades. This site is in pre-launch discovery mode, so pricing and upgrade data live on dedicated pages rather than inline here.",
  keyFacts: [
    { label: "Title", value: "Anime Shop Simulator ✨" },
    { label: "Steam AppID", value: "3393280" },
    { label: "Release date", value: "2026-09-11" },
    { label: "Platform", value: "Steam (Windows PC)" },
    { label: "Popularity-coming-soon rank", value: "6 (snapshot 2026-09-09)" },
    { label: "Theme", value: "Anime-themed shop-management simulator" },
  ],
  modules: [
    {
      id: "home-start-here",
      type: "prose",
      heading: "What is Anime Shop Simulator ✨ on Steam?",
      body:
        "Anime Shop Simulator ✨ is an anime-themed shop-management simulator arriving on Steam as AppID 3393280, with a release date of 2026-09-11. As of the 2026-09-09 snapshot it sits at Steam popularity-coming-soon rank 6. Players run a shop, restock shelves, serve customers, and reinvest money into upgrades. This site is in pre-launch discovery mode, so pricing and upgrade data live on dedicated pages rather than inline here.",
    },
    {
      id: "home-where-to-start",
      type: "prose",
      heading: "Where to start with Anime Shop Simulator ✨",
      body:
        "The fastest on-ramp is the [beginner walkthrough](/walkthrough/), which links into the gameplay, shop, and upgrade guides. If you only need the launch facts, head straight to the [release date](/release/) and the [Steam store page](/steam/) summaries.",
      links: [
        {
          label: "Beginner Walkthrough",
          href: "/walkthrough/",
          description: "Onboarding checklist for first-time players.",
        },
        {
          label: "Release Date",
          href: "/release/",
          description: "Launch window and supported-platform snapshot.",
        },
        {
          label: "Steam Store Page",
          href: "/steam/",
          description: "Canonical links to the store page, SteamDB, community hub, and ProtonDB.",
        },
      ],
    },
    {
      id: "home-page-map",
      type: "entity-grid",
      heading: "What you can find on this site",
      items: [
        {
          title: "Identity overview",
          summary:
            "Steam AppID 3393280, release date 2026-09-11, disambiguation from Roblox anime card shop sims.",
          href: "/about/",
        },
        {
          title: "Release date",
          summary:
            "Confirmed launch window and supported-platform snapshot from the Steam store page.",
          href: "/release/",
        },
        {
          title: "Steam store page",
          summary:
            "Links to the Steam store, SteamDB, community hub, and ProtonDB for AppID 3393280.",
          href: "/steam/",
        },
        {
          title: "Gameplay overview",
          summary:
            "Restock-serve-upgrade loop, customers, inventory, and money flow.",
          href: "/gameplay/",
        },
        {
          title: "Shop management guide",
          summary:
            "Restocking, pricing, layout, customer flow, and a first-day checklist.",
          href: "/shops/",
        },
        {
          title: "Upgrades and money",
          summary:
            "Upgrade ladder, priority list, and fast-growth checklist.",
          href: "/upgrades/",
        },
        {
          title: "Demo and playtest",
          summary:
            "Access path and demo scope as listed on the Steam store page.",
          href: "/demo/",
        },
        {
          title: "Beginner walkthrough",
          summary:
            "Onboarding hub linking every guide for first-time Steam players.",
          href: "/walkthrough/",
        },
        {
          title: "Co-op multiplayer setup",
          summary:
            "Invite up to four friends, split Cashier / Stocker / Decorator / Gambler roles, and run PvP card battles in the same lobby.",
          href: "/co-op-multiplayer-setup/",
        },
        {
          title: "Shop defense, checkout, and events",
          summary:
            "Defend against thieves and vandals with the trusty bat, run 18+ manga ID checks and body scanners, and host autograph signings and card tournaments.",
          href: "/shop-defense-and-checkout/",
        },
      ],
    },
    {
      id: "home-audience",
      type: "prose",
      heading: "Who this site is for",
      body:
        "This site targets US English Steam players who already know the shop-management genre and want to confirm that this Steam release is the right title, not the Roblox `anime card shop simulator` franchise or a browser idle game. Pricing, upgrade prices, and full edition breakdowns are not listed on this homepage by design; each topic is broken out into its own page so the latest Steam-listed data can be re-checked without rewriting the homepage.",
    },
  ],
  faqIds: ["home-when-release", "home-roblox-disambig", "home-store-page", "home-demo-playtest"],
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
    "guides",
  ],
  schemaTypes: ["WebSite", "CollectionPage", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-09",
};
