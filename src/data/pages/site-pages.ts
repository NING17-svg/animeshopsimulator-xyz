import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const sitePages: PageContent[] = [
  {
    id: "contact",
    translationKey: "contact",
    locale: "en-US",
    routeKind: "fixed",
    slug: "contact",
    url: "/contact/",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Contact",
    seoTitle: `Contact | ${site.name}`,
    metaDescription:
      "Contact page for corrections, official source updates, and site feedback for the Anime Shop Simulator ✨ fan guide.",
    summary:
      "A trust page for corrections, source updates, and site feedback.",
    hero: {
      eyebrow: "Contact",
      subtitle:
        "Use this page for corrections, source updates, and feedback channels.",
      ctas: [{ label: "About", href: "/about/" }],
    },
    quickAnswer:
      "Reach out via the support email listed in Cloudflare Email Routing for the project domain; corrections that include an official source link are welcome.",
    keyFacts: [
      { label: "Primary use", value: "Corrections and feedback" },
      { label: "Channel", value: "Email (support@animeshopsimulator.xyz)" },
    ],
    modules: [
      {
        id: "site-contact-method",
        type: "prose",
        heading: "Contact method",
        body:
          "The site exposes `support@animeshopsimulator.xyz` via Cloudflare Email Routing. Use that address for corrections, official source updates, or feedback. Do not request private account information or game credentials.",
      },
      {
        id: "site-contact-corrections",
        type: "prose",
        heading: "Corrections",
        body:
          "Invite readers to send official source links when facts change. Cite the Steam store page, SteamDB, or dated media coverage as the canonical source.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "privacy-policy", "terms"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-09-09",
  },
  {
    id: "privacy-policy",
    translationKey: "privacy-policy",
    locale: "en-US",
    routeKind: "fixed",
    slug: "privacy-policy",
    url: "/privacy-policy/",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Privacy Policy",
    seoTitle: `Privacy Policy | ${site.name}`,
    metaDescription:
      "Privacy policy for the Anime Shop Simulator ✨ fan guide site, covering GA4 analytics, Cloudflare hosting, and contact messages.",
    summary:
      "A privacy policy page for analytics, logs, and contact messages.",
    hero: {
      eyebrow: "Privacy",
      subtitle:
        "Explain what data the site collects, why it is used, and how visitors can make contact.",
      ctas: [{ label: "Terms", href: "/terms/" }],
    },
    quickAnswer:
      "This site does not include accounts, comments, or payments. If GA4 is configured, analytics may collect aggregate usage information according to Google Analytics settings. Cloudflare may process technical request data for hosting and routing.",
    keyFacts: [
      { label: "Analytics", value: "GA4 only when configured" },
      { label: "Hosting", value: "Cloudflare Workers + static assets" },
      { label: "Accounts", value: "No user accounts" },
      { label: "Ads", value: "Adsterra only when enabled" },
    ],
    modules: [
      {
        id: "site-privacy-data",
        type: "prose",
        heading: "Information we collect",
        body:
          "This site does not include accounts, comments, or payments. If GA4 is configured, analytics may collect aggregate usage information according to Google Analytics settings. Cloudflare may process technical request data for hosting, caching, and routing. If advertising is enabled, the third-party advertising provider may process technical request data and use cookies or similar technologies to deliver and measure ads.",
      },
      {
        id: "site-privacy-contact",
        type: "prose",
        heading: "Contact messages",
        body:
          "If a contact method is added, messages may include the information visitors choose to send. Do not request sensitive personal information.",
      },
      {
        id: "site-privacy-updates",
        type: "prose",
        heading: "Policy updates",
        body:
          "Update this policy when analytics, hosting, contact methods, advertising providers, or other data collection behavior changes.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "contact", "terms"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-09-09",
  },
  {
    id: "terms",
    translationKey: "terms",
    locale: "en-US",
    routeKind: "fixed",
    slug: "terms",
    url: "/terms/",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Terms of Use",
    seoTitle: `Terms of Use | ${site.name}`,
    metaDescription:
      "Terms of use for the unofficial Anime Shop Simulator ✨ fan guide site, including scope, disclaimers, and acceptable use.",
    summary:
      "A terms page for an unofficial guide site.",
    hero: {
      eyebrow: "Terms",
      subtitle:
        "Set clear expectations for unofficial status, informational use, and site changes.",
      ctas: [{ label: "Privacy Policy", href: "/privacy-policy/" }],
    },
    quickAnswer:
      "This site is an unofficial fan guide for Anime Shop Simulator ✨ and is not affiliated with the publisher, developer, or platform holders.",
    keyFacts: [
      { label: "Use", value: "Informational guide content" },
      { label: "Official status", value: "Unofficial fan site" },
    ],
    modules: [
      {
        id: "site-terms-unofficial",
        type: "prose",
        heading: "Unofficial site",
        body:
          "This site is not affiliated with the publisher, developer, platform holders, or trademark owners of Anime Shop Simulator ✨ unless explicitly stated.",
      },
      {
        id: "site-terms-accuracy",
        type: "prose",
        heading: "Information accuracy",
        body:
          "Guide information may change as official details are updated. Use official sources for final purchase, platform, and release decisions.",
      },
      {
        id: "site-terms-acceptable-use",
        type: "prose",
        heading: "Acceptable use",
        body:
          "Do not misuse the site, scrape aggressively, interfere with service availability, or submit harmful content through any future contact channel.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "contact", "privacy-policy"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-09-09",
  },
];
