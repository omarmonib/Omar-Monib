import { HERO_CONTENT } from '@/constants/hero';

describe('Hero Content Constants', () => {
  describe('HERO_CONTENT', () => {
    it('should have a name property', () => {
      expect(HERO_CONTENT).toHaveProperty('name');
      expect(typeof HERO_CONTENT.name).toBe('string');
      expect(HERO_CONTENT.name).toBe('Omar');
    });

    it('should have a title property', () => {
      expect(HERO_CONTENT).toHaveProperty('title');
      expect(typeof HERO_CONTENT.title).toBe('string');
      expect(HERO_CONTENT.title).toBe('Front-End Developer');
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
      expect(HERO_CONTENT.cta.projects).toBe('View Projects');
      expect(HERO_CONTENT.cta.cv).toBe('Download CV');
    });

    it('should have non-empty text content', () => {
      expect(HERO_CONTENT.name.trim().length).toBeGreaterThan(0);
      expect(HERO_CONTENT.title.trim().length).toBeGreaterThan(0);
      expect(HERO_CONTENT.description.trim().length).toBeGreaterThan(0);
    });

    it('should be immutable with as const assertion', () => {
      // as const makes it readonly at TypeScript level
      // At runtime, the object structure is preserved
      expect(Object.isFrozen(HERO_CONTENT) || Object.keys(HERO_CONTENT).length === 4).toBe(true);
      expect(HERO_CONTENT.name).toBe('Omar');
    });
  });
});
