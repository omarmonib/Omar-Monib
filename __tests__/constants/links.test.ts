import { getAllNavLinks, getNavLinkByHref, NAV_LINKS } from '@/constants/links';

describe('Navigation Links Constants', () => {
  describe('NAV_LINKS constant', () => {
    it('should be a non-empty array', () => {
      expect(Array.isArray(NAV_LINKS)).toBe(true);
      expect(NAV_LINKS.length).toBeGreaterThan(0);
    });

    it('should contain links with name and href properties', () => {
      NAV_LINKS.forEach((link) => {
        expect(link).toHaveProperty('name');
        expect(link).toHaveProperty('href');
        expect(typeof link.name).toBe('string');
        expect(typeof link.href).toBe('string');
      });
    });

    it('should include main navigation links', () => {
      const linkHrefs = NAV_LINKS.map((link) => link.href);
      expect(linkHrefs).toContain('/');
      expect(linkHrefs).toContain('/projects');
      expect(linkHrefs).toContain('/about');
      expect(linkHrefs).toContain('/contact');
    });

    it('should have correct link names', () => {
      const homeLink = NAV_LINKS.find((link) => link.href === '/');
      expect(homeLink?.name).toBe('Home');
    });
  });

  describe('getAllNavLinks', () => {
    it('should return the navigation links array', () => {
      const links = getAllNavLinks();
      expect(Array.isArray(links)).toBe(true);
    });

    it('should return same links as NAV_LINKS constant', () => {
      const links = getAllNavLinks();
      expect(links.length).toBe(NAV_LINKS.length);
      links.forEach((link, index) => {
        expect(link).toEqual(NAV_LINKS[index]);
      });
    });
  });

  describe('getNavLinkByHref', () => {
    it('should return a link when href exists', () => {
      const link = getNavLinkByHref('/');
      expect(link).toBeDefined();
      expect(link?.href).toBe('/');
      expect(link?.name).toBe('Home');
    });

    it('should return undefined when href does not exist', () => {
      const link = getNavLinkByHref('/nonexistent');
      expect(link).toBeUndefined();
    });

    it('should find projects link by href', () => {
      const link = getNavLinkByHref('/projects');
      expect(link).toBeDefined();
      expect(link?.name).toBe('Projects');
    });

    it('should be case-sensitive', () => {
      const link = getNavLinkByHref('/PROJECTS');
      expect(link).toBeUndefined();
    });

    it('should find all navigation links', () => {
      const hrefs = ['/', '/projects', '/about', '/contact'];
      hrefs.forEach((href) => {
        const link = getNavLinkByHref(href);
        expect(link).toBeDefined();
      });
    });
  });
});
