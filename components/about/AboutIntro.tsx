'use client';

import { motion } from 'framer-motion';
import { ABOUT_CONTENT } from '@/constants/about';

const AboutIntro = () => {
  const { whoAmI, background, skills, passion } = ABOUT_CONTENT;

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
    >
      <h3 className="text-2xl font-semibold mb-4">{whoAmI.heading}</h3>
      <p className="text-lg leading-relaxed mb-6 text-muted">{whoAmI.description}</p>

      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-2">{background.heading}</h4>
        <p className="text-base leading-relaxed text-muted mb-3">{background.description}</p>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-2">{skills.heading}</h4>
        <p className="text-base leading-relaxed text-muted">{skills.description}</p>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-2">{passion.heading}</h4>
        <p className="text-base leading-relaxed text-muted">{passion.description}</p>
      </div>
    </motion.div>
  );
};

export default AboutIntro;
