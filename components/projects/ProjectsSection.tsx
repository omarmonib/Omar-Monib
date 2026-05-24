import { Suspense } from 'react';
import ProjectsHeader from './ProjectsHeader';
import ProjectsGrid from './ProjectsGrid';
import ProjectsGridSkeleton from './ProjectsGridSkeleton';

export default function ProjectsSection() {
  return (
    <section className="p-6 md:p-20">
      <div className="max-w-7xl mx-auto">
        <ProjectsHeader />
        <Suspense fallback={<ProjectsGridSkeleton />}>
          <ProjectsGrid />
        </Suspense>
      </div>
    </section>
  );
}
