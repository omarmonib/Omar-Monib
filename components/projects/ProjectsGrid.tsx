'use client';

import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { ProjectsData } from '@/constants/projects';
import type { Project } from '@/types/project';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function ProjectsGrid() {
  const projects = Object.values(ProjectsData) as Project[];

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </motion.div>
  );
}
