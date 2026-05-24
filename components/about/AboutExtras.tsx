'use client';

import { motion } from 'framer-motion';
import { ABOUT_INTERESTS, ABOUT_LANGUAGES } from '@/constants/about';

const AboutExtras = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-16 grid md:grid-cols-2 gap-8"
    >
      {/* Interests */}
      <div className="p-6 rounded-xl border border-border bg-card">
        <h3 className="text-lg font-semibold text-foreground mb-4">Interests & Hobbies</h3>
        <div className="flex flex-wrap gap-2">
          {ABOUT_INTERESTS.map(({ emoji, label }) => (
            <span
              key={label}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-sm text-foreground hover:bg-accent/20 transition-colors"
            >
              <span>{emoji}</span>
              <span>{label}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Languages */}
      <div className="p-6 rounded-xl border border-border bg-card">
        <h3 className="text-lg font-semibold text-foreground mb-4">Languages</h3>
        <div className="space-y-3">
          {ABOUT_LANGUAGES.map(({ language, level, flag }) => (
            <div key={language} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xl">{flag}</span>
                <span className="font-medium text-foreground">{language}</span>
              </div>
              <span className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                {level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default AboutExtras;
