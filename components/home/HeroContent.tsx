'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Props {
  name: string;
  title: string;
  subtitle?: string;
  description: string;
  tagline?: string;
  cta: {
    projects: string;
    contact?: string;
    cv?: string;
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
      {/* Availability badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-medium">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
        </span>
        Available for freelance &amp; full-time · Remote / Hybrid / On-site
      </div>

      {/* Name */}
      <h1 className="text-4xl md:text-7xl font-bold leading-tight">
        Hi, I am <br />
        <span className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
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

      {/* Tagline */}
      {tagline && tagline.length > 0 && (
        <p className="text-xs md:text-sm text-muted-foreground/50 font-medium italic">{tagline}</p>
      )}

      {/* Highlights — single fade-in, no per-badge animations */}
      {highlights && highlights.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="flex flex-wrap gap-2 justify-center md:justify-start pt-1"
        >
          {highlights.map((highlight) => (
            <span
              key={highlight}
              className="px-3 py-1 text-xs md:text-sm bg-accent/10 text-accent rounded-full border border-accent/20"
            >
              {highlight}
            </span>
          ))}
        </motion.div>
      )}

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row items-center md:items-start gap-3 justify-center md:justify-start pt-3 flex-wrap">
        <Button asChild size="lg" variant="custom">
          <Link href="/projects">{cta.projects}</Link>
        </Button>

        {cta.cv && (
          <Button asChild size="lg" variant="customOutline">
            <a href="/cv.pdf" download>
              <Download className="w-4 h-4" />
              {cta.cv}
            </a>
          </Button>
        )}

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
