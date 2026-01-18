import { HERO_CONTENT } from '@/constants/hero';

describe('Hero Content Constants', () => {
  describe('HERO_CONTENT', () => {
    it('should have a name property', () => {
      expect(HERO_CONTENT).toHaveProperty('name');
      expect(typeof HERO_CONTENT.name).toBe('string');
      expect(HERO_CONTENT.name).toBe('Omar Monib');
    });

    it('should have a title property', () => {
      expect(HERO_CONTENT).toHaveProperty('title');
      expect(typeof HERO_CONTENT.title).toBe('string');
      expect(HERO_CONTENT.title).toBe('Frontend Developer & Network Engineer');
    });

    it('should have a description property', () => {
      expect(HERO_CONTENT).toHaveProperty('description');
      expect(typeof HERO_CONTENT.description).toBe('string');
      expect(HERO_CONTENT.description.length).toBeGreaterThan(0);
    });

    it('should have CTA (call-to-action) object', () => {
      expect(HERO_CONTENT).toHaveProperty('cta');
      expect(typeof HERO_CONTENT.cta).toBe('object');
      expect(HERO_CONTENT.cta).not.toBeNull();
    });

    it('should have correct CTA properties', () => {
      expect(HERO_CONTENT.cta).toHaveProperty('projects');
      expect(HERO_CONTENT.cta).toHaveProperty('cv');
      expect(HERO_CONTENT.cta.projects).toBe('View My Work');
      expect(HERO_CONTENT.cta.cv).toBe('Download CV');
    });

    it('should have non-empty text content', () => {
      expect(HERO_CONTENT.name.trim().length).toBeGreaterThan(0);
      expect(HERO_CONTENT.title.trim().length).toBeGreaterThan(0);
      expect(HERO_CONTENT.description.trim().length).toBeGreaterThan(0);
    });

    it('should have enhanced content structure', () => {
      // Check for new properties added in enhancement
      expect(HERO_CONTENT).toHaveProperty('subtitle');
      expect(HERO_CONTENT).toHaveProperty('tagline');
      expect(HERO_CONTENT).toHaveProperty('highlights');
      expect(Array.isArray(HERO_CONTENT.highlights)).toBe(true);
      expect(HERO_CONTENT.highlights.length).toBeGreaterThan(0);
    });

    it('should have subtitle and tagline with correct values', () => {
      expect(HERO_CONTENT.subtitle).toBe(
        '6+ Years Network Engineering • 2+ Years Frontend Development'
      );
      expect(HERO_CONTENT.tagline).toBe(
        'Electronics & Communications Engineer • Vodafone • Freelance Developer'
      );
    });

    it('should have highlights array with at least 4 items', () => {
      expect(HERO_CONTENT.highlights.length).toBe(4);
      expect(HERO_CONTENT.highlights[0]).toBe('React & Next.js Specialist');
      expect(HERO_CONTENT.highlights[1]).toBe('TypeScript Expert');
    });

    it('should have CTA contact property', () => {
      expect(HERO_CONTENT.cta).toHaveProperty('contact');
      expect(HERO_CONTENT.cta.contact).toBe('Get in Touch');
    });
  });
});
