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
        I'm a passionate Frontend Developer and Electronics & Communications Engineer with <strong>6+ years of professional experience in network engineering at Vodafone</strong>, combined with <strong>2+ years of active freelance development</strong>. This unique blend of network architecture and modern web development gives me a distinctive perspective on building scalable, robust applications.
      </p>

      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-2">Professional Background</h4>
        <p className="text-base leading-relaxed text-muted mb-3">
          <strong>Current & Past Experience:</strong> Electronics & Communications Engineer at Vodafone for 6+ years, specializing in network maintenance, architecture, and programming. Simultaneously developing production-grade web applications as a Freelance Developer for 2+ years, bringing full-stack capabilities to modern frontend development.
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
