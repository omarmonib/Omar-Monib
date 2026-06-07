'use client';

import { motion } from 'framer-motion';
import { FiLinkedin, FiGithub, FiMessageSquare } from 'react-icons/fi';
import { TESTIMONIALS } from '@/constants/testimonials';
import type { Testimonial } from '@/constants/testimonials';
import Link from 'next/link';

const platformIcon = {
  linkedin: FiLinkedin,
  github: FiGithub,
  direct: FiMessageSquare,
};

const platformLabel = {
  linkedin: 'LinkedIn',
  github: 'GitHub',
  direct: 'Direct',
};

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  const Icon = platformIcon[testimonial.platform];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.15 * index, duration: 0.5 }}
      className="flex flex-col gap-4 p-6 rounded-xl border border-border bg-card hover:border-accent/40 transition-colors duration-300"
    >
      {/* Quote mark */}
      <span className="text-4xl leading-none text-accent/30 font-serif select-none">&ldquo;</span>

      {/* Quote text */}
      <p className="text-sm md:text-base text-muted-foreground leading-relaxed flex-1 -mt-4">
        {testimonial.quote}
      </p>

      {/* Author */}
      <div className="flex items-center justify-between gap-3 pt-2 border-t border-border">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
            <span className="text-xs font-bold text-accent">{testimonial.avatar}</span>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
            <p className="text-xs text-muted-foreground">
              {testimonial.role} · {testimonial.company}
            </p>
          </div>
        </div>

        {/* Platform badge */}
        {testimonial.profileUrl ? (
          <Link
            href={testimonial.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium hover:bg-accent/20 transition-colors shrink-0"
            aria-label={`View on ${platformLabel[testimonial.platform]}`}
          >
            <Icon className="w-3.5 h-3.5" />
            {platformLabel[testimonial.platform]}
          </Link>
        ) : (
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium shrink-0">
            <Icon className="w-3.5 h-3.5" />
            {platformLabel[testimonial.platform]}
          </span>
        )}
      </div>
    </motion.div>
  );
}

const Testimonials = () => {
  const testimonials = TESTIMONIALS;

  return (
    <section className="py-20 px-6 md:px-20 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">
            Social Proof
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">What people say</h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
