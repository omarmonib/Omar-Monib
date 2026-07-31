/// <reference types="jest" />

import {
  getAllProjects,
  getProjectBySlug,
  getProjectsData,
  ProjectsData,
} from '@/constants/projects';

describe('Projects Constants', () => {
  describe('getAllProjects', () => {
    it('should return an array of projects', () => {
      const projects = getAllProjects();
      expect(Array.isArray(projects)).toBe(true);
      expect(projects.length).toBeGreaterThan(0);
    });

    it('should return projects with required properties', () => {
      const projects = getAllProjects();
      projects.forEach((project) => {
        expect(project).toHaveProperty('id');
        expect(project).toHaveProperty('slug');
        expect(project).toHaveProperty('title');
        expect(project).toHaveProperty('shortDescription');
        expect(project).toHaveProperty('fullDescription');
        expect(project).toHaveProperty('tags');
        expect(project).toHaveProperty('techs');
        expect(project).toHaveProperty('features');
      });
    });

    it('should return projects with valid IDs', () => {
      const projects = getAllProjects();
      projects.forEach((project) => {
        expect(typeof project.id).toBe('number');
        expect(project.id).toBeGreaterThan(0);
      });
    });

    it('should return projects with non-empty slugs', () => {
      const projects = getAllProjects();
      projects.forEach((project) => {
        expect(project.slug).toBeTruthy();
        expect(typeof project.slug).toBe('string');
      });
    });

    it('should return projects with arrays for tags, techs, and features', () => {
      const projects = getAllProjects();
      projects.forEach((project) => {
        expect(Array.isArray(project.tags)).toBe(true);
        expect(Array.isArray(project.techs)).toBe(true);
        expect(Array.isArray(project.features)).toBe(true);
        expect(project.tags.length).toBeGreaterThan(0);
        expect(project.techs.length).toBeGreaterThan(0);
        expect(project.features.length).toBeGreaterThan(0);
      });
    });

    it('should only include liveUrl when it is a valid URL', () => {
      const projects = getAllProjects();
      projects.forEach((project) => {
        if (project.liveUrl) {
          expect(project.liveUrl).toMatch(/^https?:\/\//);
        }
      });
    });
  });

  describe('getProjectBySlug', () => {
    it('should return a project when slug exists', () => {
      const project = getProjectBySlug('masjid-noor-aliman');
      expect(project).toBeDefined();
      expect(project?.slug).toBe('masjid-noor-aliman');
      expect(project?.id).toBe(1);
    });

    it('should return undefined when slug does not exist', () => {
      const project = getProjectBySlug('non-existent-project');
      expect(project).toBeUndefined();
    });

    it('should return project with correct title', () => {
      const project = getProjectBySlug('marketi');
      expect(project?.title).toBe('Marketi — E-Commerce Platform');
    });

    it('should be case-sensitive', () => {
      const project = getProjectBySlug('MARKETI');
      expect(project).toBeUndefined();
    });
  });

  describe('getProjectsData', () => {
    it('should return an object with project data', () => {
      const data = getProjectsData();
      expect(typeof data).toBe('object');
      expect(data).not.toBeNull();
    });

    it('should have all five expected projects', () => {
      const data = getProjectsData();
      expect(data['masjid-noor-aliman']).toBeDefined();
      expect(data['legal-documents-system']).toBeDefined();
      expect(data['ranovix']).toBeDefined();
      expect(data['marketi']).toBeDefined();
      expect(data['expenseiq']).toBeDefined();
    });

    it('should return data with correct project count', () => {
      const data = getProjectsData();
      const projectCount = Object.keys(data).length;
      expect(projectCount).toBe(5);
    });
  });

  describe('ProjectsData (legacy export)', () => {
    it('should contain all five projects', () => {
      expect(ProjectsData['masjid-noor-aliman']).toBeDefined();
      expect(ProjectsData['legal-documents-system']).toBeDefined();
      expect(ProjectsData['ranovix']).toBeDefined();
      expect(ProjectsData['marketi']).toBeDefined();
      expect(ProjectsData['expenseiq']).toBeDefined();
    });
  });

  describe('Project data consistency', () => {
    it('should have unique IDs', () => {
      const projects = getAllProjects();
      const ids = projects.map((p) => p.id);
      const uniqueIds = new Set(ids);
      expect(uniqueIds.size).toBe(ids.length);
    });

    it('should have unique slugs', () => {
      const projects = getAllProjects();
      const slugs = projects.map((p) => p.slug);
      const uniqueSlugs = new Set(slugs);
      expect(uniqueSlugs.size).toBe(slugs.length);
    });
  });
});
