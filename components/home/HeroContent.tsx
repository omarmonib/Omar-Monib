'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface Props {
  name: string;
  title: string;
  description: string;
  cta: {
    projects: string;
    cv: string;
  };
}

const HeroContent = ({ name, title, description, cta }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 2 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="text-center md:text-left space-y-5"
    >
      <h1 className="text-3xl md:text-6xl font-bold leading-tight">
        Hi, I am <span className="text-accent">{name}</span>
      </h1>

      <h2 className="text-lg md:text-2xl font-semibold text-muted">{title}</h2>

      <p className="text-base md:text-lg max-w-md leading-relaxed text-muted">
        {description}{' '}
        <span className="text-accent/80 font-medium">focused on performance and usability.</span>
      </p>

      <div className="flex gap-4 justify-center md:justify-start pt-3">
        <Link href="/projects" className="px-6 py-3 rounded-lg bg-accent font-medium transition">
          {cta.projects}
        </Link>

        <a href="/cv.pdf" className="px-6 py-3 rounded-lg border font-medium transition">
          {cta.cv}
        </a>
      </div>
    </motion.div>
  );
};

export default HeroContent;
