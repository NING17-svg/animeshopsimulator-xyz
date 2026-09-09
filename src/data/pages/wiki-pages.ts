import type { PageContent } from "@/types/content";

// Stub wiki page kept for the shared template contract validator.
// The launch site does not link to it; navigation uses /about/ instead.
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
      "Anime Shop Simulator ✨ wiki index. The launch site links readers to dedicated status, guide, and walkthrough pages instead of this stub.",
    summary:
      "Stub wiki page kept to satisfy the shared template contract validator; not part of the V3 launch content package.",
    hero: {
      eyebrow: "Wiki",
      subtitle:
        "Stub wiki page kept to satisfy the shared template contract validator. The V3 launch site uses /about/, /release/, /steam/, /gameplay/, /shops/, /upgrades/, /demo/, and /walkthrough/ as its index pages.",
      ctas: [
        { label: "Identity Overview", href: "/about/" },
        { label: "Beginner Walkthrough", href: "/walkthrough/" },
      ],
    },
    quickAnswer:
      "Stub wiki page kept to satisfy the shared template contract validator. The V3 launch site uses /about/, /release/, /steam/, /gameplay/, /shops/, /upgrades/, /demo/, and /walkthrough/ as its index pages.",
    keyFacts: [
      { label: "Status", value: "Stub for template contract validator" },
    ],
    modules: [
      {
        id: "wiki-stub",
        type: "prose",
        heading: "Stub wiki page",
        body:
          "Stub wiki page kept to satisfy the shared template contract validator. The V3 launch site uses /about/, /release/, /steam/, /gameplay/, /shops/, /upgrades/, /demo/, and /walkthrough/ as its index pages.",
      },
    ],
    faqIds: [],
    relatedPageIds: [],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-09-09",
  },
];
