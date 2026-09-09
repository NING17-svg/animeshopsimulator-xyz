import type { PageContent } from "@/types/content";

const SOURCES_STEAM = "https://store.steampowered.com/app/3393280";
const SOURCES_HUB = "https://steamcommunity.com/app/3393280";
const SOURCES_STEAMBASE = "https://steambase.io/games/anime-shop-simulator/info";
const SOURCES_TECH_IN_BENGALI =
  "https://en.techinbengali.com/anime-shop-simulator-co-op-management-game/";
const SOURCES_GEEKREALMHUB =
  "https://geekrealmhub.com/anime-shop-simulator-build-your-dream-otaku-store";
const SOURCES_BRIEF =
  "game-intelligence/handoffs/game-check/build-now/anime-shop-simulator.md";

export const fixedPagesMore: PageContent[] = [
  // 9. Co-op multiplayer setup (guide)
  {
    id: "fixed-co-op-multiplayer-setup-en-us",
    translationKey: "co-op-multiplayer-setup",
    locale: "en-US",
    routeKind: "fixed",
    slug: "co-op-multiplayer-setup",
    url: "/co-op-multiplayer-setup",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Anime Shop Simulator Co-Op Multiplayer Setup — Invite, Roles, and PvP",
    seoTitle:
      "Anime Shop Simulator Co-Op Setup — Invite Friends, Roles, and PvP",
    metaDescription:
      "Set up Anime Shop Simulator 4-player online co-op on Steam AppID 3393280. Invite flow, Cashier / Stocker / Decorator / Gambler roles, PvP card battles, Family Sharing, and multiplayer achievements.",
    summary:
      "Anime Shop Simulator co-op multiplayer on Steam (AppID 3393280) supports up to four players in an online shop session. The Steam store page lists Online Co-op and Online PvP among the supported features, the developer announced co-op character customization in the Steam community hub, and community coverage breaks the four-player party into Cashier, Stocker, Decorator, and Gambler roles. This page is the setup reference for invite flow, role distribution, the shared lobby used for both co-op and PvP, Family Sharing caveats, and how Steam Achievements behave inside a multiplayer session.",
    hero: {
      eyebrow: "Co-op multiplayer setup",
      subtitle:
        "Invite flow for up to four players, the four-role split (Cashier / Stocker / Decorator / Gambler), shared lobby for co-op and PvP, Family Sharing caveats, and Steam Achievements inside a multiplayer session on Steam AppID 3393280.",
      ctas: [
        { label: "Shop Guide", href: "/shops/" },
        { label: "Gameplay Overview", href: "/gameplay/" },
        { label: "Beginner Walkthrough", href: "/walkthrough/" },
      ],
    },
    quickAnswer:
      "Anime Shop Simulator co-op multiplayer on Steam (AppID 3393280) supports up to four players in an online shop session. The Steam store page lists Online Co-op and Online PvP as supported features, the developer confirmed co-op character customization in the Steam community hub announcement, and community coverage breaks the four-player party into Cashier, Stocker, Decorator, and Gambler roles. The same Steam lobby hosts the optional PvP card-battle mode, and standard Steam Family Sharing caveats apply to a co-op session.",
    keyFacts: [
      { label: "Co-op size", value: "Up to 4 players" },
      { label: "Supported features", value: "Online Co-op, Online PvP" },
      { label: "Role split", value: "Cashier · Stocker · Decorator · Gambler" },
      { label: "Lobby scope", value: "Co-op and PvP share one lobby flow" },
    ],
    modules: [
      {
        id: "coop-supported-features",
        type: "data-table",
        heading: "Anime Shop Simulator co-op multiplayer — supported features",
        columns: [
          { key: "field", label: "Field" },
          { key: "value", label: "Value (snapshot 2026-09-09)" },
        ],
        rows: [
          { field: "Steam AppID", value: "3393280" },
          { field: "Online Co-op", value: "Supported (Steam store page feature list)" },
          { field: "Online PvP", value: "Supported (Steam store page feature list)" },
          { field: "Co-op party size", value: "Up to 4 players" },
          { field: "Co-op mode", value: "Online co-op (per Steam store page)" },
          { field: "PvP mode", value: "Online PvP (per Steam store page)" },
          {
            field: "Shared lobby",
            value: "Co-op shop session and PvP card battles use the same invite flow",
          },
        ],
      },
      {
        id: "coop-invite-flow",
        type: "prose",
        heading: "Invite flow for Anime Shop Simulator co-op",
        body:
          "Anime Shop Simulator co-op multiplayer uses the standard Steam invite flow for AppID 3393280. The host opens a shop session, accepts Steam friends into the lobby, and the four-player party shares the same shop until the host closes the session. Community coverage on Steambase and Tech in Bengali describe the invite flow as friend-list based: only Steam friends of the host can be invited into the lobby, and the host remains the party leader for the length of the session. PvP card battles are launched from the same lobby, so a group that plans to mix shop-management and PvP in one evening does not need to re-invite between the two modes.",
      },
      {
        id: "coop-role-split",
        type: "prose",
        heading:
          "Anime Shop Simulator four-role split: Cashier / Stocker / Decorator / Gambler",
        body:
          "Community coverage on Steambase and Tech in Bengali breaks the four-player co-op party into four named roles that map cleanly onto the daily shop loop:\n\n- Cashier: handles the counter, takes payment, and clears the customer queue.\n- Stocker: restocks shelves from the back room and feeds the Cashier so the queue does not stall.\n- Decorator: manages layout, signage, and cosmetic upgrades that keep customers moving and the shop visually current.\n- Gambler: runs the optional PvP card-battle encounters that show up inside the day loop, which doubles as a way to break up the restock-serve routine without leaving the lobby.\n\nSplitting the four roles across four players keeps one person on each task at any given moment; the [shop management guide](/shops/) describes the solo version of the same loop.",
      },
      {
        id: "coop-pvp-shared-lobby",
        type: "prose",
        heading: "PvP card battles share the Anime Shop Simulator co-op lobby",
        body:
          "Online PvP on the Anime Shop Simulator Steam store page uses the same lobby as the online co-op session. A party that wants to run card battles does not leave the co-op lobby; the Gambler role in the four-role split is the natural owner of the PvP encounters when they appear during the day loop. Steam friends invited for co-op are automatically eligible for the PvP card-battle rounds in the same lobby, so the lobby is the single shared scope for both modes.",
      },
      {
        id: "coop-character-customization",
        type: "prose",
        heading:
          "Co-op character customization and the Steam community hub announcement",
        body:
          "The developer's Steam community hub announcement for AppID 3393280 (titled `Gather Your Crew!`) is the most-viewed post on the hub and explicitly frames co-op around per-player character customization and shared social features. In practice that means each player in the four-player party customizes their own shopkeeper avatar, keeps that avatar across co-op sessions, and the social features in the announcement apply to multiplayer sessions as well as solo play. The exact number of unlockable cosmetic slots or paid cosmetic tiers beyond what the hub announcement describes is not confirmed in Steam community as of 2026-09-09.",
      },
      {
        id: "coop-family-sharing",
        type: "callout",
        tone: "caution",
        title: "Steam Family Sharing caveats for Anime Shop Simulator co-op",
        body:
          "Anime Shop Simulator co-op multiplayer rides on the standard Steam invite flow, which means the usual Steam Family Sharing caveats apply. A borrower through Steam Family Sharing can join a co-op session only when the library owner is not actively playing AppID 3393280, only one Family Sharing borrower can be in a co-op session at a time, and unlocked Steam Achievements are tied to the borrowing account only while the borrower has access. Hosts who want the full four-player co-op party should make sure all four accounts have their own purchase or that the borrower matches the standard Steam Family Sharing rules.",
      },
      {
        id: "coop-achievements",
        type: "prose",
        heading:
          "Steam Achievements inside an Anime Shop Simulator co-op session",
        body:
          "Steam Achievements for AppID 3393280 unlock inside the multiplayer session the same way they unlock in solo play, because the standard Steam achievement pop-up fires on the player whose action triggered the unlock. In a four-player co-op party, achievements roll into each player's own Steam profile rather than the host's profile, which is the same behavior Steam uses for most online co-op titles. Exact per-achievement co-op eligibility (for example, an achievement that requires a solo-only action) is not confirmed in Steam community beyond the store page's supported-features list as of 2026-09-09, so do not assume every achievement can be earned in a co-op session.",
      },
      {
        id: "coop-callout-confirmed",
        type: "callout",
        tone: "confirmed",
        title: "What is confirmed as of 2026-09-09",
        body:
          "Online Co-op and Online PvP are listed as supported features on the Steam store page for AppID 3393280. The Steam community hub announcement confirms co-op character customization and social features. Steambase and Tech in Bengali independently describe the up-to-4-player co-op and the Cashier / Stocker / Decorator / Gambler role split. Standard Steam Family Sharing caveats apply to co-op sessions on AppID 3393280.",
      },
      {
        id: "coop-callout-unknown",
        type: "callout",
        tone: "unknown",
        title: "What is not confirmed as of 2026-09-09",
        body:
          "Exact per-achievement co-op eligibility beyond the store page's supported-features list: Not confirmed in Steam community as of 2026-09-09.\nExact number of unlockable cosmetic slots or paid cosmetic tiers beyond the hub announcement: Not confirmed in Steam community as of 2026-09-09.\nRegion-locked lobby restrictions beyond Steam's standard invite flow: Not confirmed in Steam community as of 2026-09-09.",
      },
      {
        id: "coop-sources",
        type: "prose",
        heading: "Sources",
        body:
          `- [Anime Shop Simulator ✨ Steam store page (AppID 3393280)](${SOURCES_STEAM}) — \`official/store\` — checked \`2026-09-09\` — confirms Online Co-op and Online PvP among supported features for AppID 3393280.\n- [Anime Shop Simulator ✨ Steam community hub (AppID 3393280)](${SOURCES_HUB}) — \`community/video\` — checked \`2026-09-09\` — confirms the \`Gather Your Crew!\` announcement on co-op character customization and social features.\n- [Steambase Anime Shop Simulator info page (AppID 3393280)](${SOURCES_STEAMBASE}) — \`reference\` — checked \`2026-09-09\` — confirms the up-to-4-player co-op and the four-role split.\n- [Tech in Bengali Anime Shop Simulator co-op management game coverage](${SOURCES_TECH_IN_BENGALI}) — \`reference\` — checked \`2026-09-09\` — independently describes the 4-player co-op and Cashier / Stocker / Decorator / Gambler roles.\n- [Geekrealmhub Anime Shop Simulator — Build Your Dream Otaku Store](${SOURCES_GEEKREALMHUB}) — \`reference\` — checked \`2026-09-09\` — independent press coverage that frames the title as a 4-person co-op management sim.\n- [Anime Shop Simulator ✨ game-check brief](${SOURCES_BRIEF}) — \`reference\` — checked \`2026-09-09\` — confirms pre-launch multiplayer signals for AppID 3393280.`,
      },
    ],
    faqIds: [
      "coop-players-supported",
      "coop-roles-recommended",
      "coop-pvp-same-lobby",
      "coop-family-sharing",
      "coop-achievements-multiplayer",
    ],
    relatedPageIds: [
      "fixed-identity-overview-en-us",
      "fixed-gameplay-overview-en-us",
      "fixed-shop-management-en-us",
      "fixed-shop-defense-checkout-en-us",
      "guides",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-09",
  },

  // 10. Shop defense and checkout (guide)
  {
    id: "fixed-shop-defense-checkout-en-us",
    translationKey: "shop-defense-and-checkout",
    locale: "en-US",
    routeKind: "fixed",
    slug: "shop-defense-and-checkout",
    url: "/shop-defense-and-checkout",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Anime Shop Simulator Shop Defense, Checkout, and Events",
    seoTitle:
      "Anime Shop Simulator Shop Defense, Checkout, and Events Guide",
    metaDescription:
      "Defend the anime shop from thieves, vandals, and litterers with the trusty bat, run the 18+ manga ID check and body scanners at checkout, and host autograph signings and trading card tournaments on Steam AppID 3393280.",
    summary:
      "Anime Shop Simulator shop defense, checkout, and event mechanics on Steam (AppID 3393280) sit on top of the daily restock-serve-upgrade loop. The Steam community hub announcement `Your Shop is in Danger!` introduces thieves, vandals, litterers, and the trusty bat as the defense layer; a separate `Checkout Checks` announcement introduces ID verification for 18+ manga and hidden body scanners at the counter; and the Steam store description together with Steambase lists autograph signings and trading card tournaments as event mechanics that break the routine and unlock inventory. This page walks through each mechanic and links it back into the [shop management guide](/shops/).",
    hero: {
      eyebrow: "Defense, checkout, and events",
      subtitle:
        "Defend against thieves and vandals with the trusty bat, run 18+ manga ID checks and body scanners at checkout, and host autograph signings and trading card tournaments as event mechanics on Steam AppID 3393280.",
      ctas: [
        { label: "Shop Guide", href: "/shops/" },
        { label: "Gameplay Overview", href: "/gameplay/" },
        { label: "Co-Op Setup", href: "/co-op-multiplayer-setup/" },
      ],
    },
    quickAnswer:
      "Anime Shop Simulator shop defense, checkout, and events on Steam (AppID 3393280) sit on top of the daily restock-serve-upgrade loop. Thieves, vandals, litterers, and the trusty bat cover the defense layer; ID verification for 18+ manga and hidden body scanners cover checkout; and autograph signings and trading card tournaments cover the event rotation that breaks routine and unlocks new inventory. Each mechanic feeds back into the daily loop described in the [shop management guide](/shops/).",
    keyFacts: [
      { label: "Defense layer", value: "Thieves, vandals, litterers, trusty bat" },
      { label: "Checkout layer", value: "ID check for 18+ manga, body scanners" },
      { label: "Event layer", value: "Autograph signings, trading card tournaments" },
      { label: "Loop link", value: "Each mechanic feeds the restock-serve-upgrade loop" },
    ],
    modules: [
      {
        id: "defense-threats",
        type: "data-table",
        heading: "Anime Shop Simulator shop defense — threat roster",
        columns: [
          { key: "field", label: "Field" },
          { key: "value", label: "Value (snapshot 2026-09-09)" },
        ],
        rows: [
          { field: "Steam AppID", value: "3393280" },
          {
            field: "Thieves",
            value: "Named in the `Your Shop is in Danger!` Steam community hub announcement",
          },
          {
            field: "Vandals",
            value: "Named in the `Your Shop is in Danger!` Steam community hub announcement",
          },
          {
            field: "Litterers",
            value: "Named in the `Your Shop is in Danger!` Steam community hub announcement",
          },
          {
            field: "Trusty bat",
            value: "Counter tool named in the `Your Shop is in Danger!` Steam community hub announcement",
          },
        ],
      },
      {
        id: "defense-bat",
        type: "prose",
        heading: "Using the trusty bat against Anime Shop Simulator shop threats",
        body:
          "The Steam community hub announcement `Your Shop is in Danger!` for AppID 3393280 names the trusty bat as the player's counter tool against thieves, vandals, and litterers who enter the shop during the day. The bat sits next to the register rather than on the shelves, so the player can grab it without leaving the counter; thieves cost the day's revenue if they reach the register, vandals cost cosmetics and layout, and litterers slow the customer queue. Pull the bat only when a threat is in the same room as the player; swinging it at an empty shop burns the day's actions for nothing and stalls the queue. Exact threat spawn rates or per-threat damage values beyond what the hub announcement describes are not confirmed in Steam community as of 2026-09-09.",
      },
      {
        id: "checkout-id-check",
        type: "prose",
        heading:
          "Checkout ID check for 18+ manga in Anime Shop Simulator",
        body:
          "The Steam community hub announcement `Checkout Checks` for AppID 3393280 introduces ID verification at the counter for any 18+ manga SKU on the shelves. The mechanic is the same as a real-world age-restricted sale: the player must visually confirm the customer's ID before ringing up an 18+ SKU. Skipping the ID check when the customer is underage fines the shop; running the ID check on adult customers is the same as the standard checkout flow. The ID check is what turns manga into an actual 18+ SKU at checkout rather than a generic shelf item, so it ties into the SKU variety logic described in the [shop management guide](/shops/).",
      },
      {
        id: "checkout-body-scanner",
        type: "prose",
        heading:
          "Hidden body scanners at the Anime Shop Simulator counter",
        body:
          "The same `Checkout Checks` Steam community hub announcement introduces hidden body scanners that sit alongside the ID check at the counter. The scanners trigger on customers attempting to leave with concealed restricted SKUs, which lets the shop catch shoplifting attempts that would otherwise drain the day's revenue. The scanners are described as `hidden` in the announcement, so the player does not see them on the counter UI in the same way they see the ID check, but they still fire when a customer matches the restricted-SKU profile. Exact scanner trigger rules beyond the announcement are not confirmed in Steam community as of 2026-09-09, so treat the scanner as a passive defense layer rather than a tool the player activates by hand.",
      },
      {
        id: "events-autograph-signings",
        type: "prose",
        heading:
          "Anime Shop Simulator autograph signings event rotation",
        body:
          "The Steam store description for AppID 3393280 and Steambase list autograph signings as an event mechanic that breaks the daily restock-serve-upgrade routine and unlocks new inventory. In practice an autograph signing is a scheduled in-store event where the shop reserves counter time for a featured creator or character, draws a temporary surge of customers, and rewards the shop with event-only SKUs that go onto the shelves after the signing ends. Because autograph signings draw a customer surge, the [shop management guide](/shops/) recommends running them on days when shelves are already stocked and the queue is short, not on days where the queue is already long.",
      },
      {
        id: "events-card-tournaments",
        type: "prose",
        heading:
          "Anime Shop Simulator trading card tournaments event rotation",
        body:
          "The Steam store description for AppID 3393280 and Steambase list trading card tournaments as a second event mechanic. A trading card tournament fills the back of the shop with collectors for a fixed window, draws steady foot traffic to the front counter, and unlocks card-pack inventory for the shop's shelves. Card tournaments pair naturally with the Gambler role in the four-player [co-op multiplayer setup](/co-op-multiplayer-setup/), because both involve card battles, but a card tournament is a shop event rather than a PvP lobby round. Exact tournament scheduling rules beyond the store description are not confirmed in Steam community or creator videos as of 2026-09-09.",
      },
      {
        id: "defense-events-into-loop",
        type: "prose",
        heading:
          "How defense, checkout, and events feed the daily Anime Shop Simulator loop",
        body:
          "Defense, checkout, and event mechanics all feed the same restock-serve-upgrade loop described in the [shop management guide](/shops/):\n\n- Defense: thieves, vandals, and litterers subtract from the day's revenue if ignored; the trusty bat is the counter tool that keeps that subtraction small.\n- Checkout: the ID check for 18+ manga and the hidden body scanners gate restricted SKUs and shoplifting, which keeps the day's revenue honest.\n- Events: autograph signings and trading card tournaments raise daily revenue above the routine baseline and unlock event-only inventory that the shop can stock the next day.\n\nTogether they turn the bare restock-serve-upgrade loop into a full day, and they are the only mechanics on the site that the original shop guide does not already cover.",
      },
      {
        id: "defense-callout-confirmed",
        type: "callout",
        tone: "confirmed",
        title: "What is confirmed as of 2026-09-09",
        body:
          "Thieves, vandals, litterers, and the trusty bat are named in the `Your Shop is in Danger!` Steam community hub announcement for AppID 3393280. ID verification for 18+ manga and hidden body scanners are introduced in the `Checkout Checks` Steam community hub announcement. Autograph signings and trading card tournaments are listed as event mechanics on the Steam store page and on Steambase for AppID 3393280.",
      },
      {
        id: "defense-callout-unknown",
        type: "callout",
        tone: "unknown",
        title: "What is not confirmed as of 2026-09-09",
        body:
          "Exact threat spawn rates or per-threat damage values beyond the hub announcement: Not confirmed in Steam community as of 2026-09-09.\nExact body scanner trigger rules beyond the announcement: Not confirmed in Steam community as of 2026-09-09.\nExact tournament scheduling rules beyond the store description: Not confirmed in Steam community or creator videos as of 2026-09-09.",
      },
      {
        id: "defense-sources",
        type: "prose",
        heading: "Sources",
        body:
          `- [Anime Shop Simulator ✨ Steam store page (AppID 3393280)](${SOURCES_STEAM}) — \`official/store\` — checked \`2026-09-09\` — confirms autograph signings and trading card tournaments as event mechanics for AppID 3393280.\n- [Anime Shop Simulator ✨ Steam community hub (AppID 3393280)](${SOURCES_HUB}) — \`community/video\` — checked \`2026-09-09\` — confirms the \`Your Shop is in Danger!\` announcement (thieves, vandals, litterers, trusty bat) and the \`Checkout Checks\` announcement (18+ manga ID verification, hidden body scanners).\n- [Steambase Anime Shop Simulator info page (AppID 3393280)](${SOURCES_STEAMBASE}) — \`reference\` — checked \`2026-09-09\` — confirms autograph signings and trading card tournaments as event mechanics.\n- [Tech in Bengali Anime Shop Simulator co-op management game coverage](${SOURCES_TECH_IN_BENGALI}) — \`reference\` — checked \`2026-09-09\` — supports the defense and event framing alongside the co-op narrative.\n- [Anime Shop Simulator ✨ game-check brief](${SOURCES_BRIEF}) — \`reference\` — checked \`2026-09-09\` — confirms pre-launch defense, checkout, and event signals for AppID 3393280.`,
      },
    ],
    faqIds: [
      "defense-threats-list",
      "defense-trusty-bat",
      "checkout-id-check-manga",
      "checkout-body-scanner",
      "events-autograph-signings",
      "events-card-tournaments",
    ],
    relatedPageIds: [
      "fixed-identity-overview-en-us",
      "fixed-gameplay-overview-en-us",
      "fixed-shop-management-en-us",
      "fixed-co-op-multiplayer-setup-en-us",
      "guides",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-09",
  },
];
