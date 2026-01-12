import ProjectsHeader from './ProjectsHeader';
import ProjectsGrid from './ProjectsGrid';


export default function ProjectsSection() {
  return (
    <section className="p-6 md:p-20">
      <div className="max-w-7xl mx-auto">
        <ProjectsHeader />
        <ProjectsGrid />
      </div>
    </section>
  );
}
