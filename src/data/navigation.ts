import { site } from "@/data/site";

export interface LocalizedNavigationItem {
  href: string;
  labels: Record<string, string>;
}

export const primaryNavigation: LocalizedNavigationItem[] = [
  { href: "/about/", labels: { "en-US": "About" } },
  { href: "/release/", labels: { "en-US": "Release" } },
  { href: "/gameplay/", labels: { "en-US": "Gameplay" } },
  { href: "/shops/", labels: { "en-US": "Shop Guide" } },
  { href: "/upgrades/", labels: { "en-US": "Upgrades" } },
  { href: "/walkthrough/", labels: { "en-US": "Walkthrough" } },
];

export const footerNavigation: LocalizedNavigationItem[] = [
  { href: "/about/", labels: { "en-US": "About" } },
  { href: "/contact/", labels: { "en-US": "Contact" } },
  { href: "/privacy-policy/", labels: { "en-US": "Privacy" } },
  { href: "/terms/", labels: { "en-US": "Terms" } },
];

export function navigationLabel(
  item: LocalizedNavigationItem,
  locale: string,
): string {
  return (
    item.labels[locale] ||
    item.labels[site.primaryLocale] ||
    Object.values(item.labels)[0]
  );
}
