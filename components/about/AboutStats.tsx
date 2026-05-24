'use client';

import { motion } from 'framer-motion';
import { ABOUT_STATS } from '@/constants/about';

const AboutStats = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
    >
      {ABOUT_STATS.map(({ value, label }, index) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 * index, duration: 0.3 }}
          className="flex flex-col items-center justify-center p-4 rounded-xl bg-card border border-border hover:border-accent/40 transition-colors duration-300 text-center"
        >
          <span className="text-3xl font-bold text-accent">{value}</span>
          <span className="text-xs text-muted-foreground mt-1">{label}</span>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AboutStats;
