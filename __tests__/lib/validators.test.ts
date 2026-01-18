import {
  isValidProject,
  validateProjects,
  isValidUrl,
  validateProjectUrls,
} from '@/lib/validators';
import type { Project } from '@/types/project';

describe('Validators', () => {
  describe('isValidProject', () => {
    const validProject: Project = {
      id: 1,
      slug: 'test-project',
      title: 'Test Project',
      shortDescription: 'A test project',
      fullDescription: 'This is a test project',
      whyItMatters: 'It demonstrates validation',
      image: '/test.png',
      projectUrl: 'test-project',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example/test',
      tags: ['test'],
      techs: ['TypeScript'],
      features: ['Feature 1'],
    };

    it('should validate a correct project object', () => {
      expect(isValidProject(validProject)).toBe(true);
    });

    it('should reject null', () => {
      expect(isValidProject(null)).toBe(false);
    });

    it('should reject undefined', () => {
      expect(isValidProject(undefined)).toBe(false);
    });

    it('should reject non-object types', () => {
      expect(isValidProject('string')).toBe(false);
      expect(isValidProject(123)).toBe(false);
      expect(isValidProject(true)).toBe(false);
    });

    it('should reject object with missing required fields', () => {
      const { id, ...incomplete } = validProject;
      void id;
      expect(isValidProject(incomplete)).toBe(false);
    });

    it('should reject object with wrong type for id', () => {
      expect(
        isValidProject({
          ...validProject,
          id: 'string-id',
        })
      ).toBe(false);
    });

    it('should reject object without tags array', () => {
      const projectWithoutTags = { ...validProject };
      // @ts-expect-error - intentionally invalid for testing
      delete projectWithoutTags.tags;
      expect(isValidProject(projectWithoutTags)).toBe(false);
    });

    it('should reject object without techs array', () => {
      const projectWithoutTechs = { ...validProject };
      // @ts-expect-error - testing invalid state
      delete projectWithoutTechs.techs;
      expect(isValidProject(projectWithoutTechs)).toBe(false);
    });

    it('should reject object without features array', () => {
      const projectWithoutFeatures = { ...validProject };
      // @ts-expect-error - testing invalid state
      delete projectWithoutFeatures.features;
      expect(isValidProject(projectWithoutFeatures)).toBe(false);
    });
  });

  describe('validateProjects', () => {
    const validProject: Project = {
      id: 1,
      slug: 'test',
      title: 'Test',
      shortDescription: 'Test',
      fullDescription: 'Test',
      whyItMatters: 'Test',
      image: '/test.png',
      projectUrl: 'test',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/test',
      tags: ['test'],
      techs: ['TypeScript'],
      features: ['Feature'],
    };

    it('should validate array of valid projects', () => {
      expect(validateProjects([validProject, validProject])).toBe(true);
    });

    it('should validate empty array', () => {
      expect(validateProjects([])).toBe(true);
    });

    it('should reject non-array input', () => {
      expect(validateProjects(null as unknown as unknown[])).toBe(false);
      expect(validateProjects('not an array' as unknown as unknown[])).toBe(false);
    });

    it('should reject array with invalid project', () => {
      const invalidProject = { id: 'invalid' };
      expect(validateProjects([validProject, invalidProject])).toBe(false);
    });
  });

  describe('isValidUrl', () => {
    it('should validate http URLs', () => {
      expect(isValidUrl('http://example.com')).toBe(true);
    });

    it('should validate https URLs', () => {
      expect(isValidUrl('https://example.com')).toBe(true);
    });

    it('should validate URLs with paths', () => {
      expect(isValidUrl('https://github.com/user/repo')).toBe(true);
    });

    it('should reject invalid URLs', () => {
      expect(isValidUrl('not-a-url')).toBe(false);
      expect(isValidUrl('example.com')).toBe(false);
    });

    it('should reject empty string', () => {
      expect(isValidUrl('')).toBe(false);
    });

    it('should validate complex URLs', () => {
      expect(isValidUrl('https://example.com/path?query=value&other=123#hash')).toBe(true);
    });
  });

  describe('validateProjectUrls', () => {
    const validProject: Project = {
      id: 1,
      slug: 'test',
      title: 'Test',
      shortDescription: 'Test',
      fullDescription: 'Test',
      whyItMatters: 'Test',
      image: '/test.png',
      projectUrl: 'test',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/test',
      tags: ['test'],
      techs: ['TypeScript'],
      features: ['Feature'],
    };

    it('should validate project with valid URLs', () => {
      expect(validateProjectUrls(validProject)).toBe(true);
    });

    it('should reject project with invalid liveUrl', () => {
      expect(
        validateProjectUrls({
          ...validProject,
          liveUrl: 'not-a-url',
        })
      ).toBe(false);
    });

    it('should reject project with invalid githubUrl', () => {
      expect(
        validateProjectUrls({
          ...validProject,
          githubUrl: 'invalid-url',
        })
      ).toBe(false);
    });

    it('should reject project with invalid image path', () => {
      expect(
        validateProjectUrls({
          ...validProject,
          image: 'relative/path/without/leading/slash.png',
        })
      ).toBe(false);
    });

    it('should validate local image paths', () => {
      expect(
        validateProjectUrls({
          ...validProject,
          image: '/projects/image.png',
        })
      ).toBe(true);
    });
  });
});
