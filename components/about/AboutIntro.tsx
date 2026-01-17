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
        I'm a passionate Frontend Developer and Electronics & Communications Engineer with <strong>2+ years of practical experience</strong> in freelance development and professional network engineering. I combine technical expertise with creative problem-solving to build scalable web applications.
      </p>

      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-2">Professional Background</h4>
        <p className="text-base leading-relaxed text-muted mb-3">
          <strong>Current Role:</strong> Electronics & Communications Engineer at Vodafone, specializing in network maintenance and programming, while actively working as a Freelance Developer building modern web applications.
        </p>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-2">Skills & Expertise</h4>
        <p className="text-base leading-relaxed text-muted">
          With a strong foundation in React, Next.js, and TypeScript, I create efficient, maintainable code that bridges the gap between design and functionality. I'm driven by the challenge of turning complex problems into elegant solutions.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-2">My Passion</h4>
        <p className="text-base leading-relaxed text-muted">
          I'm passionate about building digital experiences that matter. I believe great software comes from understanding both the technology and the people who use it. Every project is an opportunity to learn, innovate, and make a meaningful impact in the digital world.
        </p>
      </div>
    </motion.div>
  );
};

export default AboutIntro;
