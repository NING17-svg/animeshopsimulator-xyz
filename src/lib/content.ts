import type { FAQItem, PageContent, RouteKind } from "@/types/content";
import { entityFamilies } from "@/data/entities";
import { faqItems } from "@/data/faq";
import { fixedPages } from "@/data/pages/fixed-pages";
import { fixedPagesExtra } from "@/data/pages/fixed-pages-2";
import { fixedPagesMore } from "@/data/pages/fixed-pages-3";
import { homePage } from "@/data/pages/home";
import { sitePages } from "@/data/pages/site-pages";
import { wikiPages } from "@/data/pages/wiki-pages";
import { buildEntityPages } from "@/lib/entities";
import { normalizePath } from "@/lib/localization";

const fixedPagesBundle: PageContent[] = [
  homePage,
  ...wikiPages,
  ...fixedPages,
  ...fixedPagesExtra,
  ...fixedPagesMore,
  ...sitePages,
];

const pages: PageContent[] = [
  ...fixedPagesBundle,
  ...buildEntityPages(entityFamilies),
];

export interface FinalRouteManifestEntry {
  id: string;
  translationKey: string;
  locale: string;
  routeKind: RouteKind;
  url: string;
  alternates: Record<string, string>;
}

export function getAllPages(): PageContent[] {
  return pages;
}

export function getIndexablePages(): PageContent[] {
  return pages;
}

export function getPageByUrl(url: string): PageContent | undefined {
  const normalized = normalizePath(url);
  return pages.find((page) => page.url === normalized);
}

export function getPageBySlug(slug: string): PageContent | undefined {
  const normalizedSlug = slug.replace(/^\/+|\/+$/g, "");
  return pages.find((page) => page.slug === normalizedSlug);
}

export function getPageById(id: string): PageContent | undefined {
  return pages.find((page) => page.id === id);
}

export function getPageByTranslationKey(
  translationKey: string,
): PageContent | undefined {
  return pages.find((page) => page.translationKey === translationKey);
}

export function getLanguageAlternates(
  page: PageContent,
  sourcePages: PageContent[] = pages,
): Record<string, string> {
  return Object.fromEntries(
    sourcePages
      .filter((candidate) => candidate.translationKey === page.translationKey)
      .map((candidate) => [candidate.locale, candidate.url]),
  );
}

export function getFinalRouteManifest(
  sourcePages: PageContent[] = pages,
): FinalRouteManifestEntry[] {
  return sourcePages
    .map((page) => ({
      id: page.id,
      translationKey: page.translationKey,
      locale: page.locale,
      routeKind: page.routeKind,
      url: page.url,
      alternates: getLanguageAlternates(page, sourcePages),
    }))
    .sort((left, right) => left.url.localeCompare(right.url));
}

export function getFaqsForPage(page: PageContent): FAQItem[] {
  return page.faqIds
    .map((id) => faqItems.find((faq) => faq.id === id))
    .filter((faq): faq is FAQItem => Boolean(faq));
}

export function getRelatedPages(page: PageContent): PageContent[] {
  return page.relatedPageIds
    .map((id) => getPageById(id))
    .filter((related): related is PageContent => Boolean(related));
}

function compareUrls(left: PageContent, right: PageContent): number {
  if (left.url === right.url) return 0;
  return left.url < right.url ? -1 : 1;
}

/**
 * Returns a small, deterministic set of content pages for a locale's homepage.
 */
export function getHomepageRelatedPages(
  locale: string,
  limit = 6,
): PageContent[] {
  return pages
    .filter(
      (page) => page.locale === locale && page.routeKind === "fixed" && page.pageType !== "site",
    )
    .sort(compareUrls)
    .slice(0, limit);
}

/**
 * Returns a deterministic recent-updates feed for the locale's homepage.
 * Filters out the home page itself and trust/contact-style pages, then
 * sorts ascending by URL for a stable ordering.
 */
export function getRecentUpdates(
  locale: string,
  limit = 6,
  sourcePages: PageContent[] = pages,
): PageContent[] {
  return sourcePages
    .filter((page) => {
      if (page.locale !== locale) return false;
      if (page.routeKind === "home") return false;
      if (page.pageType === "site") return false;
      if (page.pageType === "faq") return false;
      if (/home/i.test(page.id)) return false;
      return true;
    })
    .sort(compareUrls)
    .slice(0, limit);
}
