'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface ProjectCardProps {
  project: {
    title: string;
    desc: string;
    link: string;
    tags: string[];
  };
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
      }}
      whileHover={{ y: -5 }}
    >
      <Link href={project.link} className="block h-full">
        <div className="h-full bg-background-secondary rounded-xl shadow-lg overflow-hidden border border-border-base transition">
          <div className="h-48 bg-accent flex items-center justify-center">
            <span className="text-4xl font-bold">{index + 1}</span>
          </div>

          <div className="p-6">
            <h3 className="text-xl font-bold text-accent mb-2">{project.title}</h3>
            <p className="text-muted mb-4">{project.desc}</p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-background text-muted shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
