export interface Project {
  id: number;
  slug: string;
  title: string;
  icon?: string;
  shortDescription: string;
  fullDescription: string;
  whyItMatters: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
  tags: string[];
  techs: string[];
  features: string[];
}
