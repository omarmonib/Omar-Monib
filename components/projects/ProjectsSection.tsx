import { Suspense } from 'react';
import ProjectsHeader from '@/components/projects/ProjectsHeader';
import ProjectsCarousel from '@/components/projects/ProjectsCarousel';
import ProjectsGridSkeleton from '@/components/projects/ProjectsGridSkeleton';

export default function ProjectsSection() {
  return (
    <section className="p-6 md:p-20">
      <div className="max-w-7xl mx-auto">
        <ProjectsHeader />
        <Suspense fallback={<ProjectsGridSkeleton />}>
          <ProjectsCarousel />
        </Suspense>
      </div>
    </section>
  );
}
