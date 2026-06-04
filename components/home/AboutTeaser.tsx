'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ABOUT_STATS } from '@/constants/about';

const AboutTeaser = () => {
  return (
    <section className="py-20 px-6 md:px-20 border-t border-border bg-background-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">
              About Me
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Engineer by training.
              <br />
              Developer by passion.
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              I bring a reliability mindset from 7 years of network engineering at Vodafone to every
              line of frontend code I write. That unique background means I build apps that are not
              just beautiful — but production-grade and resilient.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-accent font-semibold group"
            >
              Learn more about me{' '}
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {[...ABOUT_STATS].map(({ value, label }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 * index, duration: 0.5, ease: 'easeOut' }}
                className="flex flex-col items-center justify-center p-6 rounded-xl bg-card border border-border hover:border-accent/40 transition-colors duration-300 text-center"
              >
                <span className="text-4xl font-bold text-accent">{value}</span>
                <span className="text-xs text-muted-foreground mt-2 leading-tight">{label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeaser;
