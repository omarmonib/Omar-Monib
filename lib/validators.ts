import type { Project } from '@/types/project';

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

  if (!requiredFields.every((field) => field in project)) return false;
  if (typeof project.id !== 'number') return false;
  if (typeof project.slug !== 'string') return false;
  if (typeof project.title !== 'string') return false;
  if (!Array.isArray(project.tags)) return false;
  if (!Array.isArray(project.techs)) return false;
  if (!Array.isArray(project.features)) return false;

  const image = project.image;
  if (typeof image === 'string') {
    if (!image.startsWith('/')) return false;
  } else if (typeof image === 'object' && image !== null) {
    const img = image as Record<string, unknown>;
    if (typeof img.light !== 'string' || !img.light.startsWith('/')) return false;
    if (typeof img.dark !== 'string' || !img.dark.startsWith('/')) return false;
  } else {
    return false;
  }

  return true;
};

export const validateProjects = (projects: unknown[]): projects is Project[] => {
  return Array.isArray(projects) && projects.every(isValidProject);
};

export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const validateProjectUrls = (project: Project): boolean => {
  const imageValid =
    typeof project.image === 'string'
      ? project.image.startsWith('/')
      : project.image.light.startsWith('/') && project.image.dark.startsWith('/');

  return isValidUrl(project.liveUrl) && isValidUrl(project.githubUrl) && imageValid;
};
