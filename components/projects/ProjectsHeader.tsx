'use client';

import { motion } from 'framer-motion';

export default function ProjectsHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4">My Projects</h2>

      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Here are some of my recent projects. Each one was built to solve a specific problem or
        explore new technologies.
      </p>
    </motion.div>
  );
}
