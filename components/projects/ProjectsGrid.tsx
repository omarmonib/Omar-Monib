'use client';

import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { getAllProjects } from '@/constants/projects';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function ProjectsGrid() {
  const projects = getAllProjects();

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8"
    >
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
          className="h-full"
        >
          <ProjectCard project={project} priority={index === 0} />
        </motion.div>
      ))}
    </motion.div>
  );
}
