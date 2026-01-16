export interface Project {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  whyItMatters: string;
  image: string;
  projectUrl: string;
  liveUrl: string;
  githubUrl: string;
  tags: string[];
  techs: string[];
  features: string[];
}
