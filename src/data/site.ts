import type { SiteLocaleConfig } from "@/types/localization";

export interface SiteOfficialSource {
  label: string;
  href: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  brandMark?: string;
  gameName: string;
  domain: string;
  baseUrl: string;
  description: string;
  tagline: string;
  primaryLocale: string;
  locales: SiteLocaleConfig[];
  author: string;
  gaMeasurementId: string;
  bingSiteAuthCode: string;
  officialSources: SiteOfficialSource[];
  disclaimer: string;
}

export const site: SiteConfig = {
  name: "Anime Shop Simulator Wiki",
  brandMark: "AS",
  gameName: "Anime Shop Simulator ✨",
  domain: "animeshopsimulator.xyz",
  baseUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://animeshopsimulator.xyz").replace(/\/$/, ""),
  description:
    "Anime Shop Simulator ✨ releases on Steam on 2026-09-11 (AppID 3393280). Find the Steam store page, gameplay overview, shop tips, upgrades guide, and beginner walkthrough.",
  tagline:
    "Release, gameplay, shop tips, upgrades, and walkthrough for Anime Shop Simulator ✨ on Steam.",
  primaryLocale: "en-US",
  locales: [
    {
      code: "en-US",
      label: "English",
      pathPrefix: "",
      htmlLang: "en-US",
      openGraphLocale: "en_US",
      ui: {
        searchOpen: "Search",
        searchClose: "Close search",
        searchPlaceholder: "Search this guide",
        searchSubmit: "Search",
        searchLoading: "Loading search…",
        searchError: "Search is unavailable right now.",
        searchNoResults: "No matching pages found.",
        recentUpdates: "Recent updates",
        lastReviewed: "Last reviewed",
      },
    },
  ],
  author: "Anime Shop Simulator Wiki",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  bingSiteAuthCode: process.env.NEXT_PUBLIC_BING_SITE_AUTH_CODE || "",
  officialSources: [
    {
      label: "Steam store page",
      href: "https://store.steampowered.com/app/3393280",
      description:
        "Official Anime Shop Simulator ✨ Steam store page for AppID 3393280.",
    },
    {
      label: "SteamDB listing",
      href: "https://steamdb.info/app/3393280/",
      description: "SteamDB metadata and historical tracking for AppID 3393280.",
    },
    {
      label: "Steam community hub",
      href: "https://steamcommunity.com/app/3393280",
      description: "Community hub for AppID 3393280.",
    },
    {
      label: "ProtonDB entry",
      href: "https://www.protondb.com/app/3393280",
      description: "ProtonDB Linux / Steam Deck compatibility for AppID 3393280.",
    },
  ],
  disclaimer:
    "Anime Shop Simulator ✨ is an unofficial fan guide. All facts come from the cited Steam, SteamDB, and game-check brief sources as of 2026-09-09.",
};
