import type { Metadata } from 'next';
import { ProjectsSection } from '@/components/projects';

export const metadata: Metadata = {
  title: 'Projects | Omar Monib',
  description:
    'Explore my portfolio projects including e-commerce platforms, admin dashboards, and Islamic content platforms built with Next.js, TypeScript, and Tailwind CSS.',
};

export default function ProjectsPage() {
  return <ProjectsSection />;
}
