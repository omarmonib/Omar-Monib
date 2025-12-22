'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const projects = [
  {
    title: 'E-commerce Platform',
    desc: 'A full-featured e-commerce platform with cart, checkout, and payment integration.',
    link: '/projects/1',
    tags: ['React', 'Next.js', 'Stripe', 'Tailwind CSS'],
  },
  {
    title: 'Task Management App',
    desc: 'A productivity application for managing tasks with drag-and-drop functionality.',
    link: '/projects/2',
    tags: ['React', 'TypeScript', 'Firebase', 'Material UI'],
  },
  {
    title: 'Portfolio Website',
    desc: 'A modern portfolio website with dark mode and smooth animations.',
    link: '/projects/3',
    tags: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
  },
  {
    title: 'Weather Dashboard',
    desc: 'Real-time weather information with 5-day forecast and location search.',
    link: '/projects/4',
    tags: ['React', 'OpenWeather API', 'Chart.js'],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Projects() {
  return (
    <section className="p-6 md:p-20 bg-linear-to-b from-black/20 to-black/40 dark:from-gray-900/20 dark:to-gray-900/40">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-500 to-cyan-400 mb-4">
            My Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was built to solve a specific problem or
            explore new technologies.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={item}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Link href={project.link} className="block h-full">
                <div className="h-full bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-2xl border border-gray-200 dark:border-gray-700">
                  <div className="h-48 bg-linear-to-r from-blue-500 to-cyan-400 flex items-center justify-center">
                    <span className="text-white text-4xl font-bold">{index + 1}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-500 dark:group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{project.desc}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
