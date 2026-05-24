'use client';

import { motion } from 'framer-motion';
import { User, Briefcase, Code, Heart } from 'lucide-react';
import { ABOUT_CONTENT } from '@/constants/about';

const sections = [
  { icon: User, key: 'whoAmI' as const },
  { icon: Briefcase, key: 'background' as const },
  { icon: Code, key: 'skills' as const },
  { icon: Heart, key: 'passion' as const },
];

const AboutIntro = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="space-y-4"
    >
      {sections.map(({ icon: Icon, key }, index) => (
        <motion.div
          key={key}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 * index, duration: 0.4 }}
          className="flex gap-4 p-4 rounded-xl border border-border bg-card hover:border-accent/40 transition-colors duration-300"
        >
          <div className="shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
            <Icon className="w-5 h-5 text-accent" />
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-1">{ABOUT_CONTENT[key].heading}</h4>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {ABOUT_CONTENT[key].description}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AboutIntro;
