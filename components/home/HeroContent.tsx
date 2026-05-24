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
  highlights?: readonly string[];
}

const HeroContent = ({ name, title, subtitle, description, tagline, cta, highlights }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="text-center md:text-left space-y-5"
    >
      {/* Name */}
      <h1 className="text-4xl md:text-7xl font-bold leading-tight">
        Hi, I am <br />
        <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          {name}
        </span>
      </h1>

      {/* Title & Subtitle */}
      <div>
        <h2 className="text-lg md:text-2xl font-semibold text-accent mb-1">{title}</h2>
        {subtitle && (
          <p className="text-sm md:text-base font-medium text-muted-foreground/70">{subtitle}</p>
        )}
      </div>

      {/* Description */}
      <p className="text-base md:text-lg max-w-2xl leading-relaxed text-muted-foreground">
        {description}
      </p>

      {/* Tagline — muted, smaller */}
      {tagline && (
        <p className="text-xs md:text-sm text-muted-foreground/50 font-medium italic">{tagline}</p>
      )}

      {/* Highlights */}
      {highlights && highlights.length > 0 && (
        <div className="flex flex-wrap gap-2 justify-center md:justify-start pt-1">
          {highlights.map((highlight, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="px-3 py-1 text-xs md:text-sm bg-accent/10 text-accent rounded-full border border-accent/20"
            >
              {highlight}
            </motion.span>
          ))}
        </div>
      )}

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row items-center md:items-start gap-3 justify-center md:justify-start pt-3">
        {/* Primary CTA */}
        <Button asChild size="lg" variant="custom">
          <Link href="/projects">{cta.projects}</Link>
        </Button>

        {/* Ghost text link */}
        {cta.contact && (
          <Link
            href="/contact"
            className="text-sm text-muted-foreground hover:text-accent underline-offset-4 hover:underline transition-colors self-center"
          >
            {cta.contact}
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default HeroContent;
