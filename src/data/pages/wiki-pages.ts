import type { PageContent } from "@/types/content";

// Lightweight wiki index page. The launch site uses /about/, /release/,
// /steam/, /dlc-editions/, /gameplay/, /shops/, /upgrades/, /demo/, and /walkthrough/
// as its primary indexes; this page acts as a thin backup hub.
export const wikiPages: PageContent[] = [
  {
    id: "wiki",
    translationKey: "wiki",
    locale: "en-US",
    routeKind: "fixed",
    slug: "wiki",
    url: "/wiki",
    pageType: "wiki",
    presentation: { shell: "hub", variant: "card-grid" },
    h1: "Anime Shop Simulator ✨ Wiki",
    seoTitle: "Anime Shop Simulator ✨ Wiki",
    metaDescription:
      "Anime Shop Simulator ✨ wiki index. The launch site links readers to dedicated status, guide, and walkthrough pages.",
    summary:
      "Anime Shop Simulator ✨ wiki hub. Browse status, gameplay, and walkthrough pages.",
    hero: {
      eyebrow: "Wiki",
      subtitle:
        "Anime Shop Simulator ✨ wiki hub. The launch site links readers to dedicated status, gameplay, and walkthrough pages.",
      ctas: [
        { label: "Identity Overview", href: "/about/" },
        { label: "Beginner Walkthrough", href: "/walkthrough/" },
      ],
    },
    quickAnswer:
      "The launch site uses /about/, /release/, /steam/, /dlc-editions/, /gameplay/, /shops/, /upgrades/, /demo/, and /walkthrough/ as its index pages.",
    keyFacts: [
      { label: "Status", value: "Unofficial fan guide" },
    ],
    modules: [
      {
        id: "wiki-stub",
        type: "prose",
        heading: "Wiki hub",
        body:
          "Browse the launch site by topic: identity overview at /about/, release date at /release/, Steam store page summary at /steam/, launch-day DLC & editions at /dlc-editions/, gameplay overview at /gameplay/, shop management guide at /shops/, upgrades and money guide at /upgrades/, demo and playtest status at /demo/, and the beginner walkthrough at /walkthrough/.",
      },
    ],
    faqIds: [],
    relatedPageIds: [],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-09-11",
  },
];
