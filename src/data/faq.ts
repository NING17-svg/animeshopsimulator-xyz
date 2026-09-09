import type { FAQItem } from "@/types/content";

export const faqItems: FAQItem[] = [
  // Homepage FAQs
  {
    id: "home-when-release",
    question: "When does Anime Shop Simulator ✨ release on Steam?",
    answer:
      "The Steam release date is 2026-09-11 according to the game-check brief snapshot used during planning. Always re-confirm on the Steam store page on launch day, since storefront dates can shift in the final 48 hours.",
    pageIds: ["home"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "home-roblox-disambig",
    question:
      "Is Anime Shop Simulator ✨ the same as the Roblox `anime card shop simulator` franchise?",
    answer:
      "No. Anime Shop Simulator ✨ is the Steam release with AppID 3393280. The Roblox `anime card shop simulator` franchise is a separate family of Roblox experiences that share some vocabulary (restocking, customer queues, money loops) but lives on a different platform.",
    pageIds: ["home"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "home-store-page",
    question:
      "Where do I find the official Steam store page for Anime Shop Simulator ✨?",
    answer:
      "The official store page lives at `https://store.steampowered.com/app/3393280`. The SteamDB listing and the Steam community hub both link back to that AppID. The Steam store page summary on this site points at all three.",
    pageIds: ["home"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "home-demo-playtest",
    question:
      "Will there be a demo or playtest for Anime Shop Simulator ✨?",
    answer:
      "Autocomplete suggests that demo and playtest windows are part of the pre-launch plan, but the live availability on the Steam store page is the source of truth. The demo and playtest page lists the current status as of 2026-09-09.",
    pageIds: ["home"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // Identity overview FAQs
  {
    id: "identity-is-on-steam",
    question: "Is this game on Steam?",
    answer:
      "Yes. It is a Steam release with AppID 3393280 and a confirmed Steam store page at `https://store.steampowered.com/app/3393280`.",
    pageIds: ["identity-overview"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "identity-when-release",
    question: "When does it release?",
    answer:
      "The release date listed in the planning brief is 2026-09-11. Confirm the final launch date on the Steam store page on publication day.",
    pageIds: ["identity-overview"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "identity-roblox-diff",
    question:
      "How is this game different from the Roblox `anime card shop simulator` franchise?",
    answer:
      "The Roblox franchise lives on Roblox, uses a different economy, and has its own codes system. The Steam release is Steam-only with a single AppID and no codes roster; the two share vocabulary but not platform, developer, or progression.",
    pageIds: ["identity-overview"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "identity-consoles",
    question: "Will it come to consoles?",
    answer:
      "Console support is not announced as of 2026-09-09. Watch the Steam store page and SteamDB for any future platform additions.",
    pageIds: ["identity-overview"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // Release date FAQs
  {
    id: "release-when",
    question: "What is the Anime Shop Simulator release date?",
    answer:
      "The Steam release date is 2026-09-11 in the 2026-09-09 planning snapshot. Always re-confirm on the Steam store page for AppID 3393280 on launch day.",
    pageIds: ["release-date"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "release-platforms",
    question:
      "Which platforms are confirmed for the Anime Shop Simulator release?",
    answer:
      "Steam (Windows PC) is the only platform listed on the Steam store page as of 2026-09-09. Console ports are not announced as of 2026-09-09.",
    pageIds: ["release-date"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "release-demo",
    question:
      "Is there a demo or playtest for Anime Shop Simulator before release?",
    answer:
      "Demo and playtest variants appear in pre-launch search demand, but the live availability on the Steam store page is the source of truth. See the demo and playtest page for the current access status.",
    pageIds: ["release-date"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "release-preorder",
    question: "Can I pre-order Anime Shop Simulator?",
    answer:
      "Pre-order availability is determined by the Steam store page for AppID 3393280. Re-check the live store page on publication day before recommending pre-order to a reader.",
    pageIds: ["release-date"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // Steam store page FAQs
  {
    id: "steam-appid",
    question: "What is the Anime Shop Simulator Steam AppID?",
    answer:
      "The Steam AppID is 3393280. The store page URL `https://store.steampowered.com/app/3393280`, the SteamDB listing, and the community hub all point at this AppID.",
    pageIds: ["steam-store-page"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "steam-pricing",
    question: "Where can I see Anime Shop Simulator pricing?",
    answer:
      "Pricing is shown on the Steam store page for AppID 3393280. Re-open the live store page before quoting a price, since pre-order or launch pricing may change.",
    pageIds: ["steam-store-page"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "steam-deck",
    question: "Does Anime Shop Simulator work on Linux or Steam Deck?",
    answer:
      "ProtonDB at `https://www.protondb.com/app/3393280` lists community-reported compatibility for Linux and Steam Deck. Specific ratings beyond what ProtonDB lists are not confirmed in ProtonDB as of 2026-09-09.",
    pageIds: ["steam-store-page"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "steam-hub-active",
    question: "Is the Steam community hub for Anime Shop Simulator active?",
    answer:
      "The hub exists at `https://steamcommunity.com/app/3393280` and links back to the store page and SteamDB. Use hub content for demand signals only, not as a hard fact source for the launch-day state.",
    pageIds: ["steam-store-page"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // Gameplay overview FAQs
  {
    id: "gameplay-core-loop",
    question: "What is the core Anime Shop Simulator gameplay loop?",
    answer:
      "The core loop is open the shop, restock shelves, serve customers, close the day, and spend the day's revenue on upgrades or expansion. The upgrade step is what gives the loop its progression arc.",
    pageIds: ["gameplay-overview"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "gameplay-customers",
    question: "Who are the customers in Anime Shop Simulator?",
    answer:
      "Customers queue up at the counter to buy stock from the shelves. The queue is the visible pacing signal for the day. Exact per-customer satisfaction mechanics are not confirmed in Steam community or creator videos as of 2026-09-09.",
    pageIds: ["gameplay-overview"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "gameplay-inventory",
    question: "How does inventory work in Anime Shop Simulator?",
    answer:
      "Inventory is organized into SKUs that you stock on the shelves. When a SKU sells out, you reorder it and restock the shelf. Variety matters because a single-SKU shop stalls the queue.",
    pageIds: ["gameplay-overview"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "gameplay-money",
    question: "How does money flow in Anime Shop Simulator?",
    answer:
      "Money flows from sales revenue into the shop's bank, out again to suppliers when you restock, and into upgrades or expansion when you reinvest. Upgrades raise capacity or variety, which in turn raises the next day's revenue.",
    pageIds: ["gameplay-overview"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "gameplay-upgrades-change-loop",
    question: "Do upgrades change the daily loop?",
    answer:
      "Yes. Upgrades raise shelf capacity, shop size, decoration, or customer flow, which makes the daily loop faster or more profitable and feeds back into the next round of upgrades.",
    pageIds: ["gameplay-overview"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // Shop management FAQs
  {
    id: "shops-first-thing",
    question:
      "What is the first thing to do in the anime shop simulator shop?",
    answer:
      "Open every shelf, restock only the empty SKUs in a small batch, and price stock at a modest markup above restock cost. The Steam store page for AppID 3393280 frames this restock-then-serve cycle as the core loop, and the upgrades and money guide explains how to reinvest the first day's profit.",
    pageIds: ["shop-management"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "shops-pricing-how",
    question: "How do I price items in the anime shop simulator shop?",
    answer:
      "Start at a modest markup, watch how fast each SKU moves, and adjust one price tier at a time. The goal is steady turnover rather than maximum margin, because empty shelves cost more than slightly lower prices. Specific per-SKU pricing math beyond community coverage is not confirmed in Steam community or creator videos as of 2026-09-09.",
    pageIds: ["shop-management"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "shops-customer-flow-how",
    question:
      "How does customer flow work in the anime shop simulator shop?",
    answer:
      "Customer flow is the queue that forms at the counter. The queue grows when shelves are empty, prices are too high, or the counter bottlenecks, and it shrinks when those upstream issues clear. The gameplay overview describes the same loop at the macro level.",
    pageIds: ["shop-management"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "shops-decorate-or-upgrade",
    question:
      "Should I decorate or upgrade first in the anime shop simulator shop?",
    answer:
      "Upgrade first. The upgrades and money guide recommends reinvesting the day's profit in the cheapest shelf upgrade that unlocks a new SKU or shelf slot, then circling back to decoration once the core loop is profitable. Cosmetics do not move stock.",
    pageIds: ["shop-management"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "shops-learn-basics",
    question:
      "Where can I learn the basics before opening my first shop?",
    answer:
      "Read the beginner walkthrough for an onboarding checklist, then return to the upgrades and money guide once you have a day's revenue to reinvest.",
    pageIds: ["shop-management"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // Upgrades & money FAQs
  {
    id: "upgrades-fastest-money",
    question:
      "What is the fastest way to earn money in the anime shop simulator upgrades ladder?",
    answer:
      "Serve customers every in-game day, keep shelves stocked, and reinvest the day's cash in the next rung of the ladder instead of saving. The shop management guide walks through the restock and pricing habits that maximize each day's revenue.",
    pageIds: ["upgrades-money"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "upgrades-first-buy",
    question:
      "Which upgrade should I buy first in the anime shop simulator upgrades ladder?",
    answer:
      "Buy the cheapest shelf upgrade that unlocks a new SKU or shelf slot. Shelf upgrades directly grow revenue, while decoration does not, so the first cash should always go to a shelf rung rather than a cosmetic rung.",
    pageIds: ["upgrades-money"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "upgrades-hidden-thresholds",
    question:
      "Are there hidden unlock thresholds in the anime shop simulator upgrades ladder?",
    answer:
      "Exact upgrade prices or hidden unlock thresholds beyond community coverage are not confirmed in Steam community or creator videos as of 2026-09-09. Treat the four-category order as guidance and re-check the Steam store page or SteamDB for any new upgrade tiers that appear after launch.",
    pageIds: ["upgrades-money"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "upgrades-mods-add",
    question:
      "Do mods add new upgrades to the anime shop simulator upgrades ladder?",
    answer:
      "Mods are user-installed and are not part of the official Steam upgrade path. The official anime shop simulator upgrades ladder runs through the in-game upgrade menus on AppID 3393280; third-party mods sit outside that path and are not supported by the Steam store page or SteamDB.",
    pageIds: ["upgrades-money"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "upgrades-learn-basics",
    question:
      "Where can I learn the basics before unlocking my first anime shop simulator upgrades rung?",
    answer:
      "Start with the beginner walkthrough for an onboarding checklist, then read the gameplay overview for the macro shop-management loop. Return to this upgrades guide once you have a day's revenue to reinvest.",
    pageIds: ["upgrades-money"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // Demo / playtest FAQs
  {
    id: "demo-available-now",
    question: "Is the anime shop simulator demo available right now?",
    answer:
      "Demo availability is set by the live Steam store page for AppID 3393280. This page does not claim the demo is open or closed beyond the 2026-09-09 snapshot; re-check the store page before recommending access to a reader.",
    pageIds: ["demo-playtest"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "demo-join-playtest",
    question: "How do I join the anime shop simulator playtest?",
    answer:
      "Playtest signup runs through the Steam store page for AppID 3393280. If the playtest badge is missing, no public signup is open, and closed playtests do not accept new registrations through any other path.",
    pageIds: ["demo-playtest"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "demo-includes",
    question: "What does the anime shop simulator demo include?",
    answer:
      "Demo scope is described on the Steam store page. Demo content beyond what the Steam store page or SteamDB lists is not confirmed in Steam store or SteamDB as of 2026-09-09, so do not assume the demo covers any specific SKU, shelf, or upgrade tier.",
    pageIds: ["demo-playtest"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "demo-progress-transfer",
    question:
      "Does the anime shop simulator demo carry progress over to the full game?",
    answer:
      "Save transfer is determined by the Steam store page and the developer. This page does not claim progress transfers, because demo content beyond what the Steam store page or SteamDB lists is not confirmed in Steam store or SteamDB as of 2026-09-09.",
    pageIds: ["demo-playtest"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // Beginner walkthrough FAQs
  {
    id: "walkthrough-where-start",
    question: "Where do I start in the anime shop simulator walkthrough?",
    answer:
      "Start with the onboarding checklist above, then read the gameplay overview before opening the shop for the first time. The walkthrough hub is the entry point; the linked guides fill in the details.",
    pageIds: ["beginner-walkthrough"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "walkthrough-core-loop",
    question: "What is the core loop in the anime shop simulator walkthrough?",
    answer:
      "The core loop is restock empty shelves, serve customers, close the day, and reinvest the profit in the next rung of the upgrade ladder. The gameplay overview describes that loop at the macro level, and the shop management guide walks through the daily habits that keep it profitable.",
    pageIds: ["beginner-walkthrough"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "walkthrough-how-long",
    question:
      "How long is the anime shop simulator walkthrough from first day to first upgrade?",
    answer:
      "Multi-day progression timelines beyond community coverage are not confirmed in Steam community as of 2026-09-09, so this page does not quote a specific day count. In general, expect the first rung of the upgrade ladder to fall within the first day if the onboarding checklist above is followed.",
    pageIds: ["beginner-walkthrough"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "walkthrough-which-first",
    question:
      "Which guide should I read first in the anime shop simulator walkthrough?",
    answer:
      "The identity overview at `/about/` confirms you are on the right Steam AppID, and the release date page confirms the launch window. Read those two first, then move on to the gameplay overview and the shop management guide.",
    pageIds: ["beginner-walkthrough"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "walkthrough-demo-before-launch",
    question: "Can I try the anime shop simulator demo before launch?",
    answer:
      "Demo and playtest availability is set by the live Steam store page for AppID 3393280. Visit the demo and playtest page for the current access status before recommending a demo path to a reader.",
    pageIds: ["beginner-walkthrough"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
];
