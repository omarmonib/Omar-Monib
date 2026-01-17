/**
 * Navigation links for the main menu
 */
export const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
] as const;

export type NavLink = (typeof NAV_LINKS)[number];

/**
 * Get all navigation links
 */
export const getAllNavLinks = (): typeof NAV_LINKS => {
  return NAV_LINKS;
};

/**
 * Get navigation link by href
 */
export const getNavLinkByHref = (href: string): NavLink | undefined => {
  return NAV_LINKS.find((link) => link.href === href);
};
