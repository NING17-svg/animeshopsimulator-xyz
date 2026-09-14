import type { PageContent } from "@/types/content";

const SOURCES_STEAM = "https://store.steampowered.com/app/3393280";
const SOURCES_HUB = "https://steamcommunity.com/app/3393280";
const SOURCES_STEAMBASE = "https://steambase.io/games/anime-shop-simulator/info";
const SOURCES_TECH_IN_BENGALI =
  "https://en.techinbengali.com/anime-shop-simulator-co-op-management-game/";
const SOURCES_GEEKREALMHUB =
  "https://geekrealmhub.com/anime-shop-simulator-build-your-dream-otaku-store";
const SOURCES_DLC_HUB = "https://store.steampowered.com/dlc/3393280/Anime_Shop_Simulator/";
const SOURCES_SUPPORTER_PACK =
  "https://store.steampowered.com/app/5175820/Anime_Shop_Simulator_Supporter_Pack/";
const SOURCES_NAUGHTY_SHELF_PACK =
  "https://store.steampowered.com/app/5175830/Naughty_Shelf_Pack/";
const SOURCES_BRIEF =
  "game-intelligence/handoffs/game-check/build-now/anime-shop-simulator.md";
const SOURCES_STEAM_ACHIEVEMENTS =
  "https://steamcommunity.com/stats/3393280/achievements";
const SOURCES_STEAM_DISCUSSIONS = "https://steamcommunity.com/app/3393280/discussions";
const SOURCES_STEAM_ANNOUNCEMENTS = "https://steamcommunity.com/app/3393280/announcements";
const SOURCES_TPO_ARCANIS = "https://tposegaming.com/anime-shop-simulator-cards/";

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
          "Steam Achievements for AppID 3393280 unlock inside the multiplayer session the same way they unlock in solo play, because the standard Steam achievement pop-up fires on the player whose action triggered the unlock. In a four-player co-op party, achievements roll into each player's own Steam profile rather than the host's profile. Hotfix 1.0.3 (Sep 13) explicitly fixed Steam Achievements unlocking inside multiplayer sessions, so the early-launch caveat about achievements behaving differently in co-op no longer applies. The full 38-achievement list with global unlock percentages is on the [achievements and 100% completion guide](/achievements/).",
      },
      {
        id: "coop-callout-confirmed",
        type: "callout",
        tone: "confirmed",
        title: "What is confirmed as of 2026-09-15",
        body:
          "Online Co-op and Online PvP are listed as supported features on the Steam store page for AppID 3393280. The Steam community hub announcement confirms co-op character customization and social features. Steambase and Tech in Bengali independently describe the up-to-4-player co-op and the Cashier / Stocker / Decorator / Gambler role split. Hotfix 1.0.3 (Sep 13) fixed Steam Achievements unlocking inside multiplayer sessions. Standard Steam Family Sharing caveats apply to co-op sessions on AppID 3393280.",
      },
      {
        id: "coop-callout-unknown",
        type: "callout",
        tone: "unknown",
        title: "What is not confirmed as of 2026-09-15",
        body:
          "Exact number of unlockable cosmetic slots or paid cosmetic tiers beyond the hub announcement: Not confirmed in Steam community as of 2026-09-15.\nRegion-locked lobby restrictions beyond Steam's standard invite flow: Not confirmed in Steam community as of 2026-09-15.\nExact per-achievement co-op eligibility beyond Hotfix 1.0.3's blanket fix: not separately enumerated in the patch notes; the Steam Achievements page is the source of truth for which achievements are tied to solo-only actions.",
      },
      {
        id: "coop-sources",
        type: "prose",
        heading: "Sources",
        body:
          `- [Anime Shop Simulator ✨ Steam store page (AppID 3393280)](${SOURCES_STEAM}) — \`official/store\` — checked \`2026-09-15\` — confirms Online Co-op and Online PvP among supported features for AppID 3393280.\n- [Anime Shop Simulator ✨ Steam community hub (AppID 3393280)](${SOURCES_HUB}) — \`community/video\` — checked \`2026-09-15\` — confirms the \`Gather Your Crew!\` announcement on co-op character customization and social features.\n- [Anime Shop Simulator ✨ Steam announcements feed (AppID 3393280)](${SOURCES_STEAM_ANNOUNCEMENTS}) — \`official/store\` — checked \`2026-09-15\` — confirms Hotfix 1.0.3 (Sep 13) fixed Steam Achievements unlock in multiplayer.\n- [Steambase Anime Shop Simulator info page (AppID 3393280)](${SOURCES_STEAMBASE}) — \`reference\` — checked \`2026-09-15\` — confirms the up-to-4-player co-op and the four-role split.\n- [Tech in Bengali Anime Shop Simulator co-op management game coverage](${SOURCES_TECH_IN_BENGALI}) — \`reference\` — checked \`2026-09-15\` — independently describes the 4-player co-op and Cashier / Stocker / Decorator / Gambler roles.\n- [Geekrealmhub Anime Shop Simulator — Build Your Dream Otaku Store](${SOURCES_GEEKREALMHUB}) — \`reference\` — checked \`2026-09-15\` — independent press coverage that frames the title as a 4-person co-op management sim.\n- [Anime Shop Simulator ✨ game-check brief](${SOURCES_BRIEF}) — \`reference\` — checked \`2026-09-15\` — confirms pre-launch multiplayer signals for AppID 3393280.`,
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
      "fixed-achievements-100-completion-en-us",
      "fixed-patch-notes-launch-day-en-us",
      "guides",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-15",
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
        title: "What is confirmed as of 2026-09-15",
        body:
          "Thieves, vandals, litterers, and the trusty bat are named in the `Your Shop is in Danger!` Steam community hub announcement for AppID 3393280. ID verification for 18+ manga and hidden body scanners are introduced in the `Checkout Checks` Steam community hub announcement. Autograph signings and trading card tournaments are listed as event mechanics on the Steam store page and on Steambase for AppID 3393280. Hotfix 1.0.2 (Sep 12) reduced trash / vandals / thieves counts on the threat roster, which lowers the launch-week threat density but does not change the threat names or counter tools.",
      },
      {
        id: "defense-callout-unknown",
        type: "callout",
        tone: "unknown",
        title: "What is not confirmed as of 2026-09-15",
        body:
          "Exact post-Hotfix-1.0.2 spawn rates or per-threat damage values: Not separately published in the Hotfix 1.0.2 notes.\nExact body scanner trigger rules beyond the announcement: Not confirmed in Steam community as of 2026-09-15.\nExact tournament scheduling rules beyond the store description: Not confirmed in Steam community or creator videos as of 2026-09-15.",
      },
      {
        id: "defense-sources",
        type: "prose",
        heading: "Sources",
        body:
          `- [Anime Shop Simulator ✨ Steam store page (AppID 3393280)](${SOURCES_STEAM}) — \`official/store\` — checked \`2026-09-15\` — confirms autograph signings and trading card tournaments as event mechanics for AppID 3393280.\n- [Anime Shop Simulator ✨ Steam community hub (AppID 3393280)](${SOURCES_HUB}) — \`community/video\` — checked \`2026-09-15\` — confirms the \`Your Shop is in Danger!\` announcement (thieves, vandals, litterers, trusty bat) and the \`Checkout Checks\` announcement (18+ manga ID verification, hidden body scanners).\n- [Anime Shop Simulator ✨ Steam announcements feed (AppID 3393280)](${SOURCES_STEAM_ANNOUNCEMENTS}) — \`official/store\` — checked \`2026-09-15\` — confirms Hotfix 1.0.2 (Sep 12) reduced trash / vandals / thieves counts.\n- [Steambase Anime Shop Simulator info page (AppID 3393280)](${SOURCES_STEAMBASE}) — \`reference\` — checked \`2026-09-15\` — confirms autograph signings and trading card tournaments as event mechanics.\n- [Tech in Bengali Anime Shop Simulator co-op management game coverage](${SOURCES_TECH_IN_BENGALI}) — \`reference\` — checked \`2026-09-15\` — supports the defense and event framing alongside the co-op narrative.\n- [Anime Shop Simulator ✨ game-check brief](${SOURCES_BRIEF}) — \`reference\` — checked \`2026-09-15\` — confirms pre-launch defense, checkout, and event signals for AppID 3393280.`,
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
      "fixed-patch-notes-launch-day-en-us",
      "guides",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-15",
  },

  // 11. DLC, editions, and pre-order pricing for AppID 3393280 (launch-day guide)
  {
    id: "fixed-dlc-editions-en-us",
    translationKey: "dlc-editions",
    locale: "en-US",
    routeKind: "fixed",
    slug: "dlc-editions",
    url: "/dlc-editions",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Anime Shop Simulator DLC & Editions — Supporter Pack, Naughty Shelf Pack, Launch-Day Pricing",
    seoTitle:
      "Anime Shop Simulator DLC & Editions — Supporter Pack & Naughty Shelf Pack",
    metaDescription:
      "Launch-day DLC and edition guide for Anime Shop Simulator (Steam AppID 3393280): the Supporter Pack, the Naughty Shelf Pack (3 manga, 6 dakimakura, feet-focused camera, stockings toggle), base-game pricing, and hidden-shelf unlock uncertainty.",
    summary:
      "Two DLCs ship alongside the base game on launch day (2026-09-11) for AppID 3393280: the **Supporter Pack** (Steam `Player Favorite` tag, framed as supporting One More Time's small team) and the **Naughty Shelf Pack** (3 new manga, 6 new dakimakura, a feet-focused main-menu camera angle, and the option to remove the heroine's stockings). Base-game and DLC prices were not posted on the live Steam DLC subpages at launch; re-check the store page before buying. Whether the Naughty Shelf Pack's hidden shelf unlocks automatically or requires a shop upgrade is not confirmed at launch.",
    hero: {
      eyebrow: "Launch-day DLC & editions",
      subtitle:
        "Supporter Pack vs. Naughty Shelf Pack for AppID 3393280: verbatim Steam descriptions, what each adds, launch-day pricing situation, and hidden-shelf unlock uncertainty.",
      ctas: [
        { label: "Steam Store Page", href: "/steam/" },
        { label: "Release Date", href: "/release/" },
        { label: "Identity Overview", href: "/about/" },
      ],
    },
    quickAnswer:
      "Two DLCs ship on launch day (2026-09-11) for AppID 3393280. The **Supporter Pack** is tagged `Player Favorite` on Steam and is described as supporting One More Time's small team and future games. The **Naughty Shelf Pack** adds 3 new manga, 6 new dakimakura, a new feet-focused main-menu camera angle, and an option to remove the heroine's stockings. Base-game and DLC prices were not posted on the Steam DLC subpages at launch — re-check the live store page before buying. Whether the Naughty Shelf Pack's hidden shelf unlocks automatically or requires a shop upgrade is not confirmed at launch.",
    keyFacts: [
      { label: "Launch day", value: "2026-09-11" },
      { label: "DLC count at launch", value: "2 (Supporter Pack, Naughty Shelf Pack)" },
      { label: "Supporter Pack price", value: "Re-check Steam DLC page (not posted at launch)" },
      { label: "Naughty Shelf Pack price", value: "Re-check Steam DLC page (not posted at launch)" },
      { label: "Base-game price", value: "Re-check Steam store page (not quoted from cached snippets)" },
      { label: "Naughty Shelf content", value: "3 manga · 6 dakimakura · feet camera · stockings toggle" },
      { label: "Hidden-shelf unlock", value: "Not confirmed at launch" },
    ],
    modules: [
      {
        id: "dlc-overview",
        type: "data-table",
        heading: "Launch-day DLC snapshot (2026-09-11)",
        columns: [
          { key: "field", label: "Field" },
          { key: "value", label: "Value" },
        ],
        rows: [
          { field: "Steam AppID", value: "3393280" },
          { field: "Launch day", value: "2026-09-11" },
          { field: "DLC #1", value: "Anime Shop Simulator: Supporter Pack (Steam `Player Favorite` tag)" },
          { field: "DLC #2", value: "Naughty Shelf Pack" },
          { field: "DLC pricing on launch", value: "Not posted on the Steam DLC subpages at launch" },
          { field: "Base-game price on launch", value: "Re-check the live Steam store page" },
        ],
      },
      {
        id: "dlc-supporter-pack",
        type: "prose",
        heading:
          "Supporter Pack — verbatim Steam description and what it adds",
        body:
          "The Steam DLC subpage describes the Supporter Pack as: *\"If you enjoy Anime Shop Simulator and would like to support our small team and the development of future games, you can grab the Supporter Pack!\"* Steam tags this DLC `Player Favorite`, which is the only public rationale on the launch-day store page. Treat the Supporter Pack as a funding bundle, not a content pack: no item, manga, dakimakura, or shop upgrade is listed in the official description. The DLC page lives at `https://store.steampowered.com/app/5175820/Anime_Shop_Simulator_Supporter_Pack/` and links back to the [base Steam store page](/steam/).",
      },
      {
        id: "dlc-naughty-shelf",
        type: "prose",
        heading:
          "Naughty Shelf Pack — verbatim Steam description and full content list",
        body:
          "The Steam DLC subpage describes the Naughty Shelf Pack as: *\"A hidden shelf, a little extra spice, and something you won't find in an ordinary anime shop. Expand your collection with 3 cheeky new manga, 6 new dakimakura, a new feet-focused main menu camera angle, and the option to remove the heroine's stockings.\"* The named content list is:\n\n- 3 new manga volumes (described as `cheeky` on the store page).\n- 6 new dakimakura covers.\n- 1 new feet-focused main-menu camera angle.\n- 1 toggle that removes the heroine's stockings.\n\nThe DLC page lives at `https://store.steampowered.com/app/5175830/Naughty_Shelf_Pack/` and links back to the [base Steam store page](/steam/). This is the only DLC on launch day with a public item-count breakdown.",
      },
      {
        id: "dlc-base-game-price",
        type: "prose",
        heading: "Base-game launch-day pricing situation",
        body:
          "On launch day (2026-09-11) the Steam store page for AppID 3393280 is the only authoritative source for the base-game price. This guide does not quote a launch-day base-game price from cached snippets, screenshots, or third-party coverage — re-open the live store page before checkout to see the current price and any active launch discount. If you see a base-game price anywhere outside the live Steam store page, treat it as unverified until the store page itself shows the same number.",
      },
      {
        id: "dlc-dlc-prices",
        type: "prose",
        heading: "DLC pricing situation at launch",
        body:
          "The Steam DLC subpages for both launch-day DLCs (Supporter Pack, Naughty Shelf Pack) were visible on launch day (2026-09-11) but did not display a posted price in the public listing. Treat DLC pricing as pending and re-check each DLC's individual subpage before buying:\n\n- [Supporter Pack subpage](https://store.steampowered.com/app/5175820/Anime_Shop_Simulator_Supporter_Pack/)\n- [Naughty Shelf Pack subpage](https://store.steampowered.com/app/5175830/Naughty_Shelf_Pack/)\n\nIf a price appears in a third-party blog post or community thread before it shows on the live Steam subpage, assume it is unverified.",
      },
      {
        id: "dlc-hidden-shelf-uncertainty",
        type: "callout",
        tone: "unknown",
        title: "Hidden-shelf unlock requirements — not confirmed at launch",
        body:
          "The Naughty Shelf Pack description mentions `a hidden shelf`, but does not state whether the shelf unlocks automatically when the DLC is owned, requires a specific in-game shop upgrade, or only appears after a story milestone. This page will be updated once the developer or community confirms the unlock condition. Do not assume the hidden shelf is guaranteed to be visible from minute one of the first launch-day session.",
      },
      {
        id: "dlc-difference",
        type: "comparison",
        heading: "Supporter Pack vs. Naughty Shelf Pack — quick comparison",
        options: [
          {
            name: "Supporter Pack",
            summary:
              "Funds One More Time's small team. No item count, no manga, no dakimakura, no camera or toggle listed in the official description.",
            bestFor:
              "Players who want to support the developer and do not need launch-day content.",
          },
          {
            name: "Naughty Shelf Pack",
            summary:
              "3 manga, 6 dakimakura, a feet-focused main-menu camera angle, and a heroine stockings toggle. Only launch-day DLC with a public item count.",
            bestFor:
              "Players who want the launch-day manga / dakimakura / camera / wardrobe additions and accept that the hidden-shelf unlock rule is not confirmed.",
          },
        ],
      },
      {
        id: "dlc-buying-checklist",
        type: "steps",
        heading: "Launch-day buying checklist",
        items: [
          {
            title: "Step 1",
            body:
              "Re-open the [base-game Steam store page](/steam/) for AppID 3393280 and confirm the current base-game price before adding anything to the cart.",
            doneCondition:
              "Live store page shows a base-game price that matches the number in your checkout screen.",
          },
          {
            title: "Step 2",
            body:
              "If you want the Supporter Pack, open its subpage and confirm the price is now posted. If it still shows no price, wait — do not commit a screenshot price from any other source.",
            doneCondition:
              "Supporter Pack subpage displays a price you have written down.",
          },
          {
            title: "Step 3",
            body:
              "If you want the Naughty Shelf Pack, open its subpage, confirm the price, and double-check the `3 manga / 6 dakimakura / feet camera / stockings toggle` list still matches the live description.",
            doneCondition:
              "Naughty Shelf Pack subpage displays a price and the four named items still appear in the description.",
          },
          {
            title: "Step 4",
            body:
              "Buy the base game first, then add the DLC in the same cart. If the hidden shelf does not appear in your shop after installing the Naughty Shelf Pack, re-check the launch-day patch notes and this page before reporting it as a bug.",
            doneCondition:
              "Base game and chosen DLC both appear as owned in your Steam library.",
          },
        ],
      },
      {
        id: "dlc-not-confirmed",
        type: "callout",
        tone: "unknown",
        title: "What is and is not confirmed at launch (2026-09-11)",
        body:
          "Hidden-shelf unlock requirement for the Naughty Shelf Pack: not confirmed at launch.\nWhether the Supporter Pack or Naughty Shelf Pack require the base game to be owned: re-check each DLC subpage before purchase.\nBase-game launch-day price on Steam: re-check the live store page; not quoted here from cached snippets.\nDLC prices on the Steam DLC subpages: re-check each DLC subpage; not quoted here from cached snippets.",
      },
      {
        id: "dlc-sources",
        type: "prose",
        heading: "Sources",
        body:
          `- [Anime Shop Simulator ✨ Steam store page (AppID 3393280)](${SOURCES_STEAM}) — \`official/store\` — checked \`2026-09-11\` — confirms launch day 2026-09-11, developer / publisher, and DLC list for AppID 3393280.\n- [Anime Shop Simulator ✨ Steam DLC subpages (AppID 3393280)](${SOURCES_DLC_HUB}) — \`official/store\` — checked \`2026-09-11\` — confirms two launch-day DLCs and their verbatim descriptions.\n- [Anime Shop Simulator ✨ Supporter Pack DLC subpage](${SOURCES_SUPPORTER_PACK}) — \`official/store\` — checked \`2026-09-11\` — verbatim Supporter Pack description.\n- [Anime Shop Simulator ✨ Naughty Shelf Pack DLC subpage](${SOURCES_NAUGHTY_SHELF_PACK}) — \`official/store\` — checked \`2026-09-11\` — verbatim Naughty Shelf Pack description (3 manga, 6 dakimakura, feet camera, stockings toggle).\n- [Anime Shop Simulator ✨ Steam community hub (AppID 3393280)](${SOURCES_HUB}) — \`community/video\` — checked \`2026-09-11\` — supports the \`Player Favorite\` tag context for the Supporter Pack.`,
      },
    ],
    faqIds: [
      "dlc-how-many",
      "dlc-supporter-pack",
      "dlc-naughty-shelf-content",
      "dlc-base-price",
      "dlc-hidden-shelf",
    ],
    relatedPageIds: [
      "fixed-steam-store-page-en-us",
      "fixed-identity-overview-en-us",
      "fixed-release-date-en-us",
      "fixed-gameplay-overview-en-us",
      "guides",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-11",
  },

  // 12. Achievements and 100% completion list (launch-week guide)
  {
    id: "fixed-achievements-100-completion-en-us",
    translationKey: "achievements-100-completion-list",
    locale: "en-US",
    routeKind: "fixed",
    slug: "achievements",
    url: "/achievements",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Anime Shop Simulator Achievements — Full 38 List and 100% Completion Path",
    seoTitle:
      "Anime Shop Simulator Achievements — 38 Achievements and 100% Guide",
    metaDescription:
      "Full 38 achievement list for Anime Shop Simulator on Steam (AppID 3393280) with global unlock percentages, hidden achievements, Hotfix 1.0.3 multiplayer unlock fix, and a 100% completion path by gameplay system.",
    summary:
      "The Steam Achievements page for Anime Shop Simulator (AppID 3393280) lists 38 achievements and a global unlock percentage for each. Hotfix 1.0.3 (Sep 13) fixed Steam Achievements unlocking inside multiplayer sessions, so the full list is now earnable in either solo or four-player co-op. This page groups the named achievements by gameplay system (story progression, Shopkeeper rank ladder, defense, card collection, pin collection, keychain collection, manga series, booster gacha, store-form customization, hidden items) and surfaces the rare ones as long-tail completion goals.",
    hero: {
      eyebrow: "Achievements & 100% completion",
      subtitle:
        "Named achievements with global unlock percentages, hidden achievements (Superchew Single, Violin, EQ, Reverb, Aiya, Woem), Hotfix 1.0.3 multiplayer unlock fix, and a 100% completion path by gameplay system for AppID 3393280.",
      ctas: [
        { label: "Arcanis TCG Guide", href: "/arcanis/" },
        { label: "Shop Defense", href: "/shop-defense-and-checkout/" },
        { label: "Patch Notes", href: "/patch-notes/" },
      ],
    },
    quickAnswer:
      "The Steam Achievements page for AppID 3393280 lists 38 achievements with a global unlock percentage for each. Hotfix 1.0.3 (Sep 13) fixed Steam Achievements unlocking inside multiplayer sessions. Card-collector and rare-tier achievements sit well below 1% global unlock, making them the long-tail goals for a 100% completion run. The full list with live percentages lives on the [Steam Achievements page](https://steamcommunity.com/stats/3393280/achievements).",
    keyFacts: [
      { label: "Achievement count", value: "38 (per Steam Achievements page)" },
      { label: "Multiplayer unlock fix", value: "Hotfix 1.0.3 (Sep 13)" },
      { label: "Named achievements with %", value: "4 Arcanis + 6 hidden = 10 named" },
      { label: "Remaining 28 names", value: "See Steam Achievements page for full list" },
      { label: "Rarest tier", value: "0.1% global unlock (3 Arcanis achievements)" },
    ],
    modules: [
      {
        id: "achievements-overview-table",
        type: "data-table",
        heading: "Named achievements snapshot (2026-09-15)",
        columns: [
          { key: "field", label: "Field" },
          { key: "value", label: "Value" },
        ],
        rows: [
          { field: "Steam AppID", value: "3393280" },
          { field: "Total achievements", value: "38 (per Steam Achievements page)" },
          { field: "Multiplayer unlock fix", value: "Hotfix 1.0.3 (Sep 13)" },
          { field: "Highest named unlock %", value: "Card Collector Arc — 22.5%" },
          { field: "Rarest tier", value: "0.1% (Legend of Cardmaster / I am the Champion / Road to the Finals)" },
          { field: "Hidden count (named here)", value: "6 (Superchew Single, Violin, EQ, Reverb, Aiya, Woem)" },
        ],
      },
      {
        id: "achievements-arcanis-named",
        type: "data-table",
        heading: "Named Arcanis achievements with global unlock %",
        columns: [
          { key: "name", label: "Achievement" },
          { key: "system", label: "Gameplay system" },
          { key: "pct", label: "Global unlock % (2026-09-15)" },
        ],
        rows: [
          { name: "Card Collector Arc", system: "Card collection", pct: "22.5%" },
          { name: "The Legend of Cardmaster", system: "Arcanis mastery", pct: "0.1%" },
          { name: "I am the Champion", system: "Tournament win", pct: "0.1%" },
          { name: "Road to the Finals", system: "Tournament ladder", pct: "0.1%" },
        ],
      },
      {
        id: "achievements-arcanis-context",
        type: "prose",
        heading: "How the Arcanis achievements tie to the TCG system",
        body:
          "All four named Arcanis achievements are tied to the same in-game TCG system described on the [Arcanis TCG guide](/arcanis/). `Card Collector Arc` (22.5% global unlock) is the entry milestone — finishing the starter collection. `Road to the Finals` (0.1%) is the ladder milestone — reaching a high Battle Rank. `The Legend of Cardmaster` (0.1%) is the mastery milestone — running a fully-built deck to tournament wins. `I am the Champion` (0.1%) is the single-event win milestone. Because all four sit below 25% global unlock and three are at 0.1%, they are the highest-value long-tail goals for a 100% completion run, and they require the 9-card deck and the 5-tournament Secret Shop unlock explained on the Arcanis guide.",
      },
      {
        id: "achievements-hidden",
        type: "data-table",
        heading: "Named hidden achievements (Steam hides the description)",
        columns: [
          { key: "name", label: "Hidden achievement" },
          { key: "note", label: "Notes" },
        ],
        rows: [
          { name: "Superchew Single", note: "Hidden; tied to a manga / booster / collection track" },
          { name: "Violin", note: "Hidden; tied to a manga / booster / collection track" },
          { name: "EQ", note: "Hidden; tied to a manga / booster / collection track" },
          { name: "Reverb", note: "Hidden; tied to a manga / booster / collection track" },
          { name: "Aiya", note: "Hidden; tied to a manga / booster / collection track" },
          { name: "Woem", note: "Hidden; tied to a manga / booster / collection track" },
        ],
      },
      {
        id: "achievements-hidden-context",
        type: "prose",
        heading: "Hidden achievements and what they tell you",
        body:
          "Steam hides the unlock criteria for any achievement marked hidden, which means the six named here (`Superchew Single`, `Violin`, `EQ`, `Reverb`, `Aiya`, `Woem`) only become visible on your own profile after the unlock fires. Until they trigger, the only confirmed fact is that they exist on the Steam Achievements page and sit alongside the rest of the 38-entry roster. Treat any third-party video or forum post that claims to have decoded their unlock criteria as unverified — Steam does not publish hidden-achievement criteria anywhere.",
      },
      {
        id: "achievements-categories",
        type: "prose",
        heading: "100% completion path — grouped by gameplay system",
        body:
          "Group the 38 achievements by the gameplay system that gates each one. The Steam Achievements page is the only canonical source for which achievement belongs to which group; the cluster list below mirrors the page's grouping:\n\n- Story progression: tutorial / first-day / story-milestone achievements.\n- Shopkeeper rank ladder (E → C → A → S): rank-tier achievements.\n- Defense: thieves / vandals / litterers counter achievements (see the [shop defense guide](/shop-defense-and-checkout/)).\n- Card collection: the four named Arcanis achievements above.\n- Pin collection: collection achievements below 1% global unlock per the launch-week signal.\n- Keychain collection: collection achievements below 1% global unlock per the launch-week signal.\n- Manga series: per-series milestone achievements.\n- Booster gacha: booster-pull and secret-shop achievements (cross-link to Arcanis guide).\n- Store-form customization: shop-decoration / form / layout achievements.\n- Hidden items: the six named hidden achievements above plus other hidden entries.\n\nA 100% completion run is gated by the rarest entries in each group. Because card / pin / keychain achievements all sit below 1% global unlock, expect the long tail to be the Arcanis mastery chain (`Road to the Finals` → `The Legend of Cardmaster` → `I am the Champion`) and the collection tracks.",
      },
      {
        id: "achievements-multiplayer-fix",
        type: "callout",
        tone: "confirmed",
        title: "Hotfix 1.0.3 (Sep 13) — multiplayer achievement unlock fixed",
        body:
          "Before Hotfix 1.0.3 (Sep 13), Steam Achievements inside an Anime Shop Simulator multiplayer session could fail to unlock. Hotfix 1.0.3 explicitly fixed that behaviour, so all 38 achievements are now earnable inside the four-player co-op lobby on the same schedule as solo play. The [co-op multiplayer setup guide](/co-op-multiplayer-setup/) explains the lobby and role split used to clear co-op-only achievements faster.",
      },
      {
        id: "achievements-progress-checklist",
        type: "steps",
        heading: "100% completion checklist",
        items: [
          { title: "Step 1", body: "Open the [Steam Achievements page](https://steamcommunity.com/stats/3393280/achievements) and sort by global unlock percentage to identify the rarest entries." },
          { title: "Step 2", body: "Clear the story / first-day cluster first so the Shopkeeper rank ladder (E → C → A → S) becomes visible." },
          { title: "Step 3", body: "Pull enough Arcanis boosters ($5.33 each per the [Arcanis guide](/arcanis/)) to build a 9-card deck that respects the +2 type-advantage rule." },
          { title: "Step 4", body: "Run the Battle Rank ladder (Common → Bronze → Silver → Gold → Platinum → Diamond) until `Road to the Finals` unlocks at 0.1%." },
          { title: "Step 5", body: "Win five tournaments to unlock the Secret Shop and trigger the upgraded booster visuals Hotfix 1.0.2 added." },
          { title: "Step 6", body: "Hunt the hidden achievements (`Superchew Single`, `Violin`, `EQ`, `Reverb`, `Aiya`, `Woem`) and the pin / keychain collection tracks until the 38-entry roster is full." },
        ],
      },
      {
        id: "achievements-not-confirmed",
        type: "callout",
        tone: "unknown",
        title: "What is and is not confirmed as of 2026-09-15",
        body:
          "The full 38-name roster with per-achievement global unlock percentages lives on the Steam Achievements page; this guide lists the four named Arcanis achievements and the six named hidden achievements, then references the Steam page for the remaining entries. Hidden achievement unlock criteria are not published by Steam — any third-party decode is unverified. Exact per-achievement co-op eligibility beyond Hotfix 1.0.3's blanket fix is not separately enumerated in the patch notes.",
      },
      {
        id: "achievements-sources",
        type: "prose",
        heading: "Sources",
        body:
          `- [Anime Shop Simulator ✨ Steam Achievements page (AppID 3393280)](${SOURCES_STEAM_ACHIEVEMENTS}) — \`official/store\` — checked \`2026-09-15\` — confirms the 38-achievement roster and global unlock percentages (including Card Collector Arc at 22.5% and Legend of Cardmaster / I am the Champion / Road to the Finals at 0.1%).\n- [Anime Shop Simulator ✨ Steam announcements feed (AppID 3393280)](${SOURCES_STEAM_ANNOUNCEMENTS}) — \`official/store\` — checked \`2026-09-15\` — confirms Hotfix 1.0.3 (Sep 13) fixed Steam Achievements unlock in multiplayer.\n- [Anime Shop Simulator ✨ Steam community hub (AppID 3393280)](${SOURCES_HUB}) — \`community/video\` — checked \`2026-09-15\` — confirms the active \`Hidden item achievement\` discussion thread (2 replies) showing players are hunting the collection track.\n- [Anime Shop Simulator ✨ Steam store page (AppID 3393280)](${SOURCES_STEAM}) — \`official/store\` — checked \`2026-09-15\` — confirms AppID 3393280 and the Achievement system hook.\n- [Anime Shop Simulator ✨ game-check brief](${SOURCES_BRIEF}) — \`reference\` — checked \`2026-09-15\` — confirms the achievements hook and 100% completion demand signal.`,
      },
    ],
    faqIds: [
      "achievements-how-many",
      "achievements-multiplayer-fix",
      "achievements-rarest",
      "achievements-hidden-how",
    ],
    relatedPageIds: [
      "fixed-arcanis-tcg-en-us",
      "fixed-shop-defense-checkout-en-us",
      "fixed-co-op-multiplayer-setup-en-us",
      "fixed-patch-notes-launch-day-en-us",
      "guides",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-15",
  },

  // 13. Launch-day bug and patch tracker (status)
  {
    id: "fixed-patch-notes-launch-day-en-us",
    translationKey: "patch-notes-launch-day-bugs-and-patch-tracker",
    locale: "en-US",
    routeKind: "fixed",
    slug: "patch-notes",
    url: "/patch-notes",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Anime Shop Simulator Patch Notes — Launch-Day Bugs and Hotfix Tracker",
    seoTitle:
      "Anime Shop Simulator Patch Notes — Hotfix 1.0.2 / 1.0.3 and Known Bugs",
    metaDescription:
      "Anime Shop Simulator launch-day bug tracker for Steam AppID 3393280: 9 active Steam Discussions bug threads, Hotfix 1.0.2 (Sep 12) and Hotfix 1.0.3 (Sep 13) entries with status per thread, and which site caveats the hotfixes make stale.",
    summary:
      "The launch-day patch tracker for Anime Shop Simulator (Steam AppID 3393280) ties each active Steam Discussions bug thread to the most recent hotfix entry that addresses it. Hotfix 1.0.2 (Sep 12) reduced trash / vandals / thieves counts on the shop-defense threat roster. Hotfix 1.0.3 (Sep 13) fixed Steam Achievements unlock in multiplayer and updated upgraded booster visuals in the Secret Shop. Both fixes also make two existing site caveats stale: the co-op achievements caveat and the launch-week threat-density note on the shop-defense guide.",
    hero: {
      eyebrow: "Patch notes & known issues",
      subtitle:
        "Hotfix 1.0.2 (Sep 12) and Hotfix 1.0.3 (Sep 13) entries paired against the 9 active Steam Discussions bug threads, with fixed / open status and the site caveats the hotfixes make stale.",
      ctas: [
        { label: "Co-Op Setup", href: "/co-op-multiplayer-setup/" },
        { label: "Shop Defense", href: "/shop-defense-and-checkout/" },
        { label: "Arcanis TCG", href: "/arcanis/" },
      ],
    },
    quickAnswer:
      "Hotfix 1.0.2 (Sep 12) reduced trash / vandals / thieves counts on the shop-defense threat roster. Hotfix 1.0.3 (Sep 13) fixed Steam Achievements unlocking in multiplayer and updated upgraded booster visuals in the Secret Shop. The 9 active Steam Discussions bug threads are listed below with reply counts and fixed / open status. Two site caveats — co-op achievement unlock and launch-week threat density — are now stale and have been updated.",
    keyFacts: [
      { label: "Hotfix 1.0.2 (Sep 12)", value: "Reduced trash / vandals / thieves counts" },
      { label: "Hotfix 1.0.3 (Sep 13)", value: "Fixed Steam Achievements unlock in multiplayer; updated upgraded booster visuals in Secret Shop" },
      { label: "Active Steam Discussions threads", value: "9 (with reply counts)" },
      { label: "Site caveats now stale", value: "Co-op achievement unlock caveat; launch-week threat-density note" },
    ],
    modules: [
      {
        id: "patch-hotfixes-table",
        type: "data-table",
        heading: "Hotfix snapshot (2026-09-15)",
        columns: [
          { key: "field", label: "Field" },
          { key: "value", label: "Value" },
        ],
        rows: [
          { field: "Hotfix 1.0.2", value: "Sep 12, 2026 — reduced trash / vandals / thieves counts" },
          { field: "Hotfix 1.0.3", value: "Sep 13, 2026 — fixed Steam Achievements unlock in multiplayer; updated upgraded booster visuals in Secret Shop" },
          { field: "Source", value: "Steam announcements feed for AppID 3393280" },
        ],
      },
      {
        id: "patch-hotfix-102",
        type: "prose",
        heading: "Hotfix 1.0.2 (Sep 12) — full entry",
        body:
          "Hotfix 1.0.2 was published on 2026-09-12 on the Steam announcements feed for AppID 3393280. The single confirmed change in this entry is a reduction in the trash / vandals / thieves counts on the shop-defense threat roster. The change does not remove any of the named threats (thieves, vandals, litterers, trusty bat) and does not add new ones — it lowers the launch-week threat density so the average in-game day produces fewer interruptions to the restock-serve-upgrade loop. Per-threat spawn rates or damage values are not separately published in the Hotfix 1.0.2 notes.",
      },
      {
        id: "patch-hotfix-103",
        type: "prose",
        heading: "Hotfix 1.0.3 (Sep 13) — full entry",
        body:
          "Hotfix 1.0.3 was published on 2026-09-13 on the Steam announcements feed for AppID 3393280. The two confirmed changes are: (1) Steam Achievements now unlock inside multiplayer sessions, fixing the early-launch caveat on the [co-op multiplayer setup guide](/co-op-multiplayer-setup/); and (2) upgraded booster visuals in the Secret Shop, which is a visual upgrade tied to the Arcanis booster system described on the [Arcanis TCG guide](/arcanis/). The Secret Shop unlock rule (5 tournament wins) is unchanged.",
      },
      {
        id: "patch-bug-threads-table",
        type: "data-table",
        heading: "Launch-day Steam Discussions bug threads (2026-09-15)",
        columns: [
          { key: "title", label: "Thread title (verbatim)" },
          { key: "replies", label: "Reply count" },
          { key: "status", label: "Status after Hotfix 1.0.2 / 1.0.3" },
        ],
        rows: [
          { title: "My game keeps closing", replies: "17", status: "Open — no hotfix entry addresses this crash class" },
          { title: "[BUG] Employee restocking shelves causes game to crash", replies: "11", status: "Open — no hotfix entry addresses employee-restock crash" },
          { title: "Level up an employee?", replies: "10", status: "Open — feature-request thread, not a hotfix item" },
          { title: "Cant deliver to zone 2", replies: "5", status: "Open — delivery bug, not addressed by either hotfix" },
          { title: "No se puede soltar un comic de las manos", replies: "3", status: "Open — drop-item bug, not addressed by either hotfix" },
          { title: "Game Keeps Crashing Every Time I start Playing Game", replies: "2", status: "Open — start-up crash thread, distinct from the multi-reply crash thread" },
          { title: "Be able to drop item in hands", replies: "2", status: "Open — same drop-item class as the Spanish-language thread" },
          { title: "Mouse juddery despite FPS stable?", replies: "1", status: "Open — input / mouse smoothing issue, not addressed by either hotfix" },
        ],
      },
      {
        id: "patch-bug-thread-count",
        type: "callout",
        tone: "unknown",
        title: "Why 9 threads, not 8 or 10",
        body:
          "The 9-thread count comes from the launch-week Steam Discussions snapshot for AppID 3393280. New threads may appear after this page is published, and threads may be merged or closed by the developer without changing the row count here. Treat the row count as a snapshot of the launch-week discussions, not as a permanent inventory. If you see a new bug, search the [Steam Discussions](https://steamcommunity.com/app/3393280/discussions) before posting a duplicate thread.",
      },
      {
        id: "patch-stale-caveats",
        type: "prose",
        heading: "Site caveats the hotfixes make stale",
        body:
          "Two earlier site caveats are now stale because of Hotfix 1.0.2 and Hotfix 1.0.3:\n\n- Co-op multiplayer achievements: the [co-op multiplayer setup guide](/co-op-multiplayer-setup/) used to caveat that Steam Achievements may not unlock inside multiplayer sessions. Hotfix 1.0.3 explicitly fixed this; the caveat has been removed and the guide now states that all 38 achievements are earnable inside co-op on the same schedule as solo play.\n- Launch-week threat density: the [shop defense, checkout, and events guide](/shop-defense-and-checkout/) used to warn that the launch-week threat density is the worst the game will see. Hotfix 1.0.2 reduced the threat counts, so the guide now flags the post-hotfix baseline instead of the launch-day spike.\n\nBoth edits are reflected on the linked pages as of the 2026-09-15 review date.",
      },
      {
        id: "patch-reporter-checklist",
        type: "steps",
        heading: "What to do before posting a duplicate bug report",
        items: [
          { title: "Step 1", body: "Search the [Steam Discussions](https://steamcommunity.com/app/3393280/discussions) for the bug class (crash, drop-item, delivery, mouse judder). If a thread exists, add a reply with your repro steps rather than opening a duplicate." },
          { title: "Step 2", body: "Check the [Steam Achievements page](https://steamcommunity.com/stats/3393280/achievements) and confirm whether the issue blocks an achievement, then include the achievement name in your report." },
          { title: "Step 3", body: "Open SteamDB for AppID 3393280 and note your current build ID — if your build ID is older than the Hotfix 1.0.3 entry, restart Steam to pull the latest build before reporting." },
          { title: "Step 4", body: "Capture the crash / drop / judder repro in a short clip and link it from the Discussions thread so the developer can read the repro without guessing." },
        ],
      },
      {
        id: "patch-not-confirmed",
        type: "callout",
        tone: "unknown",
        title: "What is and is not confirmed as of 2026-09-15",
        body:
          "Per-thread resolution beyond the hotfix scope above: Not confirmed in Steam Discussions as of 2026-09-15.\nExact post-Hotfix-1.0.2 spawn rates or damage values: Not separately published.\nVerbatim bug-thread reply counts: snapshot 2026-09-15; reply counts will drift after publication.",
      },
      {
        id: "patch-sources",
        type: "prose",
        heading: "Sources",
        body:
          `- [Anime Shop Simulator ✨ Steam announcements feed (AppID 3393280)](${SOURCES_STEAM_ANNOUNCEMENTS}) — \`official/store\` — checked \`2026-09-15\` — confirms Hotfix 1.0.2 (Sep 12) and Hotfix 1.0.3 (Sep 13) entries.\n- [Anime Shop Simulator ✨ Steam Discussions (AppID 3393280)](${SOURCES_STEAM_DISCUSSIONS}) — \`community/video\` — checked \`2026-09-15\` — confirms the 9 active launch-day bug threads with reply counts.\n- [Anime Shop Simulator ✨ Steam community hub (AppID 3393280)](${SOURCES_HUB}) — \`community/video\` — checked \`2026-09-15\` — supports the launch-day patch-watch framing.\n- [Anime Shop Simulator ✨ Steam store page (AppID 3393280)](${SOURCES_STEAM}) — \`official/store\` — checked \`2026-09-15\` — confirms AppID 3393280 and the patch-watch scope.\n- [Anime Shop Simulator ✨ game-check brief](${SOURCES_BRIEF}) — \`reference\` — checked \`2026-09-15\` — confirms pre-launch launch-window context.`,
      },
    ],
    faqIds: [
      "patch-latest-version",
      "patch-multiplayer-achievements-fix",
      "patch-threat-density",
      "patch-bug-report-where",
    ],
    relatedPageIds: [
      "fixed-co-op-multiplayer-setup-en-us",
      "fixed-shop-defense-checkout-en-us",
      "fixed-arcanis-tcg-en-us",
      "fixed-achievements-100-completion-en-us",
      "guides",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-15",
  },

  // 14. Arcanis TCG card system (guide)
  {
    id: "fixed-arcanis-tcg-en-us",
    translationKey: "tcg-arcanis-card-system",
    locale: "en-US",
    routeKind: "fixed",
    slug: "arcanis",
    url: "/arcanis",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Anime Shop Simulator Arcanis TCG — Booster, Deck, Battle Rank, Secret Shop",
    seoTitle:
      "Anime Shop Simulator Arcanis TCG — Booster, Deck, Battle Rank, Secret Shop",
    metaDescription:
      "Arcanis TCG card system for Anime Shop Simulator on Steam AppID 3393280: $5.33 booster price, 9-card deck, +2 type-advantage rule, Battle Rank ladder, Shop Level 5/6 thresholds, 5-tournament Secret Shop unlock, Crystals / Reputation currencies, and 1,000-crystal achievement.",
    summary:
      "The Arcanis TCG card system on Steam AppID 3393280 is the PvP layer that runs alongside the shop-management loop. A booster costs $5.33 fixed, a tournament-legal deck is 9 cards, and the +2 type-advantage rule decides most matchups. The Battle Rank ladder runs Common → Bronze → Silver → Gold → Platinum → Diamond, Shop Level 5 unlocks the gaming table, Shop Level 6 is the paid shop expansion, and 5 tournament wins unlock the Secret Shop with its upgraded booster visuals (Hotfix 1.0.2). The system is gated by Crystals and Reputation currencies, with a 1,000-crystal achievement as the long-tail goal. Selling cards is irreversible, so build the deck before spending.",
    hero: {
      eyebrow: "Arcanis TCG system",
      subtitle:
        "$5.33 booster, 9-card deck, +2 type advantage, Battle Rank ladder, Shop Level 5/6 thresholds, 5-tournament Secret Shop unlock, Crystals / Reputation currencies, and the 100% completion cross-link to the four Arcanis achievements.",
      ctas: [
        { label: "Achievements", href: "/achievements/" },
        { label: "Upgrades & Money", href: "/upgrades/" },
        { label: "Patch Notes", href: "/patch-notes/" },
      ],
    },
    quickAnswer:
      "Booster price: $5.33 fixed. Deck size: 9 cards. Type-advantage rule: +2. Battle Rank ladder: Common → Bronze → Silver → Gold → Platinum → Diamond. Shop Level 5 unlocks the gaming table; Shop Level 6 is the paid shop expansion. Secret Shop unlocks after 5 tournament wins. Currencies: Crystals (PvP winnings) and Reputation (ladder progress). Long-tail goal: 1,000-crystal achievement. Selling cards is irreversible — build the deck before spending.",
    keyFacts: [
      { label: "Booster price", value: "$5.33 (fixed)" },
      { label: "Deck size", value: "9 cards" },
      { label: "Type-advantage rule", value: "+2" },
      { label: "Battle Rank ladder", value: "Common → Bronze → Silver → Gold → Platinum → Diamond" },
      { label: "Shop Level 5", value: "Unlocks the gaming table (tournament surface)" },
      { label: "Shop Level 6", value: "Paid shop expansion (deck-storage / display tier)" },
      { label: "Secret Shop unlock", value: "5 tournament wins" },
      { label: "PvP currencies", value: "Crystals, Reputation" },
      { label: "Long-tail currency goal", value: "1,000-crystal achievement" },
      { label: "Selling cards", value: "Irreversible — build the deck before spending" },
    ],
    modules: [
      {
        id: "arcanis-overview-table",
        type: "data-table",
        heading: "Arcanis TCG snapshot (2026-09-15)",
        columns: [
          { key: "field", label: "Field" },
          { key: "value", label: "Value" },
        ],
        rows: [
          { field: "Booster price", value: "$5.33 (fixed)" },
          { field: "Deck size", value: "9 cards" },
          { field: "Type-advantage rule", value: "+2" },
          { field: "Battle Rank ladder", value: "Common → Bronze → Silver → Gold → Platinum → Diamond" },
          { field: "Shop Level 5 unlock", value: "Gaming table (tournament surface)" },
          { field: "Shop Level 6 unlock", value: "Paid shop expansion (deck storage / display)" },
          { field: "Secret Shop unlock", value: "5 tournament wins" },
          { field: "Currencies", value: "Crystals (PvP winnings), Reputation (ladder progress)" },
          { field: "Long-tail currency goal", value: "1,000-crystal achievement" },
          { field: "Selling cards", value: "Irreversible" },
        ],
      },
      {
        id: "arcanis-booster",
        type: "prose",
        heading: "Arcanis booster price and what is in a pack",
        body:
          "An Arcanis booster costs $5.33 fixed, in-game currency, and is the only sanctioned way to add new cards to your collection. Treat the $5.33 price as fixed because the Arcanis booster economy is independent of the restock-serve-upgrade cash loop: boosters do not scale with shop upgrades, and the shop-upgrade ladder does not change the booster price. Pull enough boosters to cover a 9-card tournament deck plus a small bench of substitutes before you commit Crystals to anything else, because selling cards back into the system is irreversible (see the irreversibility callout below).",
      },
      {
        id: "arcanis-deck",
        type: "prose",
        heading: "9-card deck composition and the +2 type-advantage rule",
        body:
          "A tournament-legal Arcanis deck is exactly 9 cards. The +2 type-advantage rule means that when your active card has the type advantage over your opponent's active card, your damage / contest value gets +2 for that exchange. Build the 9-card deck around one or two dominant type-advantage lines and a small bench of counter-picks for the types you are weakest against. A 9-card deck that splits evenly across three types looks balanced on paper but usually loses the +2 exchanges that decide close matches.",
      },
      {
        id: "arcanis-battle-rank",
        type: "data-table",
        heading: "Battle Rank ladder (Common → Diamond)",
        columns: [
          { key: "rank", label: "Rank" },
          { key: "stage", label: "Stage of the ladder" },
          { key: "goal", label: "What this rank means for a deck" },
        ],
        rows: [
          { rank: "Common", stage: "Entry", goal: "Open ladder; learn the +2 type-advantage rule on a starter 9-card deck." },
          { rank: "Bronze", stage: "Early ladder", goal: "First real counter-match practice; pull a second booster." },
          { rank: "Silver", stage: "Mid ladder", goal: "Refine the 9-card deck around one dominant type line." },
          { rank: "Gold", stage: "Upper-mid ladder", goal: "Earn enough Crystals to chase the Secret Shop unlock." },
          { rank: "Platinum", stage: "Late ladder", goal: "Counter-pick bench starts to matter; consider a third booster." },
          { rank: "Diamond", stage: "Top ladder", goal: "Final ladder tier; gate to `Road to the Finals` achievement." },
        ],
      },
      {
        id: "arcanis-shop-levels",
        type: "prose",
        heading: "Shop Level 5 (gaming table) and Shop Level 6 (paid shop expansion)",
        body:
          "The Arcanis gaming table unlocks at Shop Level 5 — that is the surface on which tournaments are run, so until the shop reaches Level 5 you cannot enter the ladder. Shop Level 6 is the paid shop expansion tier that raises the deck storage and display capacity, which matters once you start cycling through multiple 9-card decks for the higher ladder ranks. The upgrade-ladder order on the [upgrades and money guide](/upgrades/) still applies: shelf upgrades → expansion → customer flow → decoration, with Shop Level 5 sitting in the expansion rung.",
      },
      {
        id: "arcanis-secret-shop",
        type: "callout",
        tone: "confirmed",
        title: "Secret Shop unlocks after 5 tournament wins",
        body:
          "The Secret Shop is the post-launch booster tier with upgraded booster visuals (Hotfix 1.0.2). It unlocks after 5 tournament wins on the Battle Rank ladder, and it does not bypass the booster price — boosters still cost $5.33, but the booster visuals inside the Secret Shop are the upgraded set. Treat the 5-win unlock as the moment your 9-card deck starts earning Crystals at a useful rate, because Crystals only become spendable once the Secret Shop tier is open.",
      },
      {
        id: "arcanis-currencies",
        type: "prose",
        heading: "Crystals and Reputation currencies",
        body:
          "Two PvP-only currencies sit on top of the cash loop. **Crystals** are the PvP winnings currency; they accumulate per tournament win and become spendable at the Secret Shop tier. **Reputation** is the ladder-progress currency; it advances your Battle Rank tier and gates whether you can enter upper-ladder tournaments at all. The 1,000-crystal achievement is the long-tail currency goal and pairs with the four named Arcanis achievements on the [achievements guide](/achievements/) — `Card Collector Arc`, `Road to the Finals`, `The Legend of Cardmaster`, and `I am the Champion`.",
      },
      {
        id: "arcanis-irreversibility",
        type: "callout",
        tone: "caution",
        title: "Selling cards is irreversible",
        body:
          "Once you sell an Arcanis card back into the system, you cannot repurchase the same card at the same price or from the same booster pull. Build the 9-card deck first, keep a small bench of substitutes, and only sell cards you are sure are not part of your main or counter-pick line. Selling a tournament-relevant card to chase cash for a shop upgrade is the single most common irreversible mistake Arcanis players make on the first ladder runs.",
      },
      {
        id: "arcanis-achievements-crosslink",
        type: "prose",
        heading: "Arcanis achievements cross-link",
        body:
          "Four achievements on the [achievements and 100% completion guide](/achievements/) are tied to this system:\n\n- `Card Collector Arc` (22.5% global unlock): finish the starter collection.\n- `Road to the Finals` (0.1% global unlock): reach the upper ladder tiers.\n- `The Legend of Cardmaster` (0.1% global unlock): mastery of a fully-built 9-card deck.\n- `I am the Champion` (0.1% global unlock): single-event tournament win.\n\nBecause three of those four sit at 0.1% global unlock, the Arcanis track is the highest-value long-tail goal for a 100% completion run. Treat the four achievements as the primary signal that the booster / deck / ladder / Secret Shop chain is working as intended.",
      },
      {
        id: "arcanis-first-deck-checklist",
        type: "steps",
        heading: "First Arcanis deck checklist",
        items: [
          { title: "Step 1", body: "Reach Shop Level 5 to unlock the gaming table before pulling boosters — there is no tournament surface below Level 5." },
          { title: "Step 2", body: "Pull two Arcanis boosters ($5.33 each) to cover a 9-card main deck plus a small substitute bench." },
          { title: "Step 3", body: "Build the 9-card deck around one dominant type-advantage line so the +2 rule fires consistently." },
          { title: "Step 4", body: "Enter the Battle Rank ladder at Common and climb toward Bronze / Silver without selling cards from the main deck." },
          { title: "Step 5", body: "After 5 tournament wins, the Secret Shop tier opens — Crystals become spendable and the upgraded booster visuals (Hotfix 1.0.2) appear." },
          { title: "Step 6", body: "Target the 1,000-crystal achievement and the four Arcanis achievements as the long-tail goals on the [achievements guide](/achievements/)." },
        ],
      },
      {
        id: "arcanis-not-confirmed",
        type: "callout",
        tone: "unknown",
        title: "What is and is not confirmed as of 2026-09-15",
        body:
          "Exact per-card drop rates from a $5.33 booster: Not separately published by the developer.\nExact Crystal payout per tournament win beyond the long-tail 1,000-crystal achievement: Not separately published.\nExact ladder-point deltas between ranks: Not separately published.\nThe booster price ($5.33 fixed), deck size (9), +2 type-advantage rule, six-tier ladder, Shop Level 5 / 6 thresholds, and 5-tournament Secret Shop unlock are sourced from the third-party guide linked below.",
      },
      {
        id: "arcanis-sources",
        type: "prose",
        heading: "Sources",
        body:
          `- [TPO Sega Gaming — Anime Shop Simulator cards guide](${SOURCES_TPO_ARCANIS}) — \`reference\` — checked \`2026-09-15\` — confirms the $5.33 fixed booster price, 9-card deck size, +2 type-advantage rule, Common → Bronze → Silver → Gold → Platinum → Diamond Battle Rank ladder, Shop Level 5 / 6 thresholds, and the 5-tournament Secret Shop unlock condition.\n- [Anime Shop Simulator ✨ Steam announcements feed (AppID 3393280)](${SOURCES_STEAM_ANNOUNCEMENTS}) — \`official/store\` — checked \`2026-09-15\` — confirms Hotfix 1.0.2 (Sep 12) updated upgraded booster visuals in Secret Shop.\n- [Anime Shop Simulator ✨ Steam Achievements page (AppID 3393280)](${SOURCES_STEAM_ACHIEVEMENTS}) — \`official/store\` — checked \`2026-09-15\` — confirms Card Collector Arc (22.5%), Legend of Cardmaster (0.1%), I am the Champion (0.1%), and Road to the Finals (0.1%) as Arcanis achievements.\n- [Anime Shop Simulator ✨ Steam community hub (AppID 3393280)](${SOURCES_HUB}) — \`community/video\` — checked \`2026-09-15\` — supports the active \`Cards effects/powers\` discussion thread (2 replies) showing players are asking about Arcanis mechanics.\n- [Anime Shop Simulator ✨ Steam store page (AppID 3393280)](${SOURCES_STEAM}) — \`official/store\` — checked \`2026-09-15\` — confirms AppID 3393280 and the Secret Shop tier as a live post-launch system.`,
      },
    ],
    faqIds: [
      "arcanis-booster-price",
      "arcanis-deck-size",
      "arcanis-secret-shop",
      "arcanis-currencies",
    ],
    relatedPageIds: [
      "fixed-achievements-100-completion-en-us",
      "fixed-patch-notes-launch-day-en-us",
      "fixed-upgrades-money-en-us",
      "fixed-shop-management-en-us",
      "guides",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-15",
  },
];
