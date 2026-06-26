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
  const firstRow = projects.slice(0, 3);
  const secondRow = projects.slice(3);
  const isCentered = secondRow.length === 2;

  return (
    <div>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {firstRow.map((project) => (
          <motion.div
            key={project.id}
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="h-full w-full"
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
      >
        {isCentered && <div className="hidden lg:block" aria-hidden="true" />}
        {secondRow.map((project) => (
          <motion.div
            key={project.id}
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="h-full w-full"
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
