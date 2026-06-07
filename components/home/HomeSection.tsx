'use client';

import { motion } from 'framer-motion';
import { HERO_CONTENT } from '@/constants/hero';
import HeroImage from './HeroImage';
import HeroContent from './HeroContent';
import AboutTeaser from './AboutTeaser';
import FeaturedProjects from './FeaturedProjects';
import ContactCTA from './ContactCTA';
import Testimonials from './Testimonials';


const HomeSection = () => {
  const { name, title, subtitle, description, tagline, cta, highlights } = HERO_CONTENT;

  return (
    <>
      <section className="min-h-screen flex items-center relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto px-6 w-full">
          <HeroContent
            name={name}
            title={title}
            subtitle={subtitle}
            description={description}
            tagline={tagline}
            cta={cta}
            highlights={highlights}
          />
          <HeroImage name={name} />
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground/50 uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-5 h-8 rounded-full border border-muted-foreground/30 flex items-start justify-center pt-1.5"
          >
            <motion.div
              animate={{ opacity: [1, 0, 1], y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1 h-1.5 rounded-full bg-accent"
            />
          </motion.div>
        </motion.div>
      </section>
      <AboutTeaser />
      <FeaturedProjects />
      <Testimonials />
      <ContactCTA />
    </>
  );
};

export default HomeSection;
