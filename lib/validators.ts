import type { Project } from '@/types/project';

/**
 * Validates if an object is a valid Project
 */
export const isValidProject = (data: unknown): data is Project => {
  if (!data || typeof data !== 'object') return false;

  const project = data as Record<string, unknown>;

  const requiredFields = [
    'id',
    'slug',
    'title',
    'shortDescription',
    'fullDescription',
    'whyItMatters',
    'image',
    'projectUrl',
    'liveUrl',
    'githubUrl',
  ];

  return (
    requiredFields.every((field) => field in project) &&
    typeof project.id === 'number' &&
    typeof project.slug === 'string' &&
    typeof project.title === 'string' &&
    Array.isArray(project.tags) &&
    Array.isArray(project.techs) &&
    Array.isArray(project.features)
  );
};

/**
 * Validates a list of projects
 */
export const validateProjects = (projects: unknown[]): projects is Project[] => {
  return Array.isArray(projects) && projects.every(isValidProject);
};

/**
 * Validates URLs
 */
export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * Validates project URLs
 */
export const validateProjectUrls = (project: Project): boolean => {
  return (
    isValidUrl(project.liveUrl) && isValidUrl(project.githubUrl) && project.image.startsWith('/') // Local image path
  );
};
