'use client';

import { motion } from 'framer-motion';
import AboutIntro from './AboutIntro';
import SkillsList from './SkillsList';

const AboutSection = () => {
  return (
    <section className="py-20 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center text-accent"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AboutIntro />
          <SkillsList />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
