'use client';

import { motion } from 'framer-motion';
import { SKILLS } from '../../constants/skills';

const SkillsList = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="bg-background-secondary p-8 rounded-xl"
    >
      <h3 className="text-2xl font-semibold mb-6">My Skills</h3>

      <div className="space-y-4">
        {SKILLS.map((skill) => (
          <div key={skill} className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span>{skill}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillsList;
