'use client';

import { motion } from 'framer-motion';

const AboutIntro = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
    >
      <h3 className="text-2xl font-semibold mb-4">Who am I?</h3>

      <p className="text-lg leading-relaxed mb-6 text-muted">
        I am a passionate Frontend Developer with expertise in modern web technologies.
      </p>

      <p className="text-lg leading-relaxed text-muted">
        With a strong foundation in React, Next.js, and TypeScript, I bring ideas to life through
        clean and efficient code.
      </p>
    </motion.div>
  );
};

export default AboutIntro;
