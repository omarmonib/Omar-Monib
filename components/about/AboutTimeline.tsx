'use client';

import { motion } from 'framer-motion';
import { ABOUT_TIMELINE } from '@/constants/about';

const AboutTimeline = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-16"
    >
      <h3 className="text-xl font-semibold text-foreground mb-8 text-center">My Journey</h3>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

        <div className="space-y-8">
          {ABOUT_TIMELINE.map(({ year, title, description }, index) => (
            <motion.div
              key={year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
              className={`relative flex gap-6 md:gap-0 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Content */}
              <div
                className={`flex-1 pl-12 md:pl-0 ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                }`}
              >
                <div className="p-4 rounded-xl border border-border bg-card hover:border-accent/40 transition-colors duration-300">
                  <span className="text-xs font-bold text-accent">{year}</span>
                  <h4 className="font-semibold text-foreground mt-1">{title}</h4>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>

              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 top-5 w-3 h-3 rounded-full bg-accent border-2 border-background md:-translate-x-1/2 -translate-x-1/2" />

              {/* Empty space for alternating layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default AboutTimeline;
