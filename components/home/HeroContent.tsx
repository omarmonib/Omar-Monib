'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface Props {
  name: string;
  title: string;
  subtitle?: string;
  description: string;
  tagline?: string;
  cta: {
    projects: string;
    cv: string;
    contact?: string;
  };
  highlights?: string[];
}

const HeroContent = ({ name, title, subtitle, description, tagline, cta, highlights }: Props) => {
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

      <div>
        <h2 className="text-lg md:text-2xl font-semibold text-accent mb-1">{title}</h2>
        {subtitle && (
          <p className="text-sm md:text-base font-medium text-muted-foreground">{subtitle}</p>
        )}
      </div>

      <p className="text-base md:text-lg max-w-2xl leading-relaxed text-muted-foreground">
        {description}
      </p>

      {tagline && (
        <p className="text-sm md:text-base text-accent/70 font-medium italic">{tagline}</p>
      )}

      {highlights && highlights.length > 0 && (
        <div className="flex flex-wrap gap-2 justify-center md:justify-start pt-2">
          {highlights.map((highlight, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs md:text-sm bg-accent/10 text-accent rounded-full border border-accent/20"
            >
              {highlight}
            </span>
          ))}
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start pt-3">
        <Button asChild size="lg" variant="custom">
          <Link href="/projects">{cta.projects}</Link>
        </Button>

        <Button asChild size="lg" variant="customOutline">
          <a href="/cv.pdf">{cta.cv}</a>
        </Button>

        {cta.contact && (
          <Button asChild size="lg" variant="customOutline">
            <Link href="/contact">{cta.contact}</Link>
          </Button>
        )}
      </div>
    </motion.div>
  );
};

export default HeroContent;
