'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getProjectBySlug } from '@/constants/projects';
import ProjectCard from '@/components/projects/ProjectCard';

const FeaturedProjects = () => {
  const projects = [getProjectBySlug('masjid-noor-aliman'), getProjectBySlug('marketi')].filter(
    Boolean
  );

  return (
    <section className="py-20 px-6 md:px-20 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">
              Featured Work
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Projects I&apos;m proud of
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden md:inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all duration-200"
          >
            View all projects <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project!.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 * index, duration: 0.8, ease: 'easeOut' }}
            >
              <ProjectCard project={project!} />
            </motion.div>
          ))}
        </div>

        {/* Mobile view all */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-8 md:hidden"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-accent font-semibold"
          >
            View all projects <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
