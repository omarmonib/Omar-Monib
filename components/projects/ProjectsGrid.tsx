'use client';

import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '@/constants/projects';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const ProjectsGrid = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {PROJECTS.map((project, index) => (
        <ProjectCard key={project.title} project={project} index={index} />
      ))}
    </motion.div>
  );
};

export default ProjectsGrid;
