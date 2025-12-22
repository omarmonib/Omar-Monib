'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ProfileImg from '@/public/profile.jpg';
import { HERO_CONTENT } from '@/constants/hero';

export default function Hero() {
  const { name, title, description, cta } = HERO_CONTENT;

  return (
    <section className="min-h-[90vh] flex items-center bg-background-secondary text-foreground">
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto px-6">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="flex justify-center"
        >
          <div
            className="
              w-36 h-36 md:w-72 md:h-72
              rounded-full overflow-hidden
              ring-2 md:ring-4 ring-accent/40
              shadow-[0_20px_40px_rgba(0,0,0,0.08)]
            "
          >
            <Image
              src={ProfileImg}
              alt={`${name} profile picture`}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </motion.div>

        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center md:text-left space-y-5"
        >
          <h1 className="text-3xl md:text-6xl font-bold leading-tight">
            Hi, I am <span className="text-accent">{name}</span>
          </h1>

          <h2 className="text-lg md:text-2xl font-semibold text-muted">{title}</h2>

          <p className="text-base md:text-lg max-w-md leading-relaxed text-muted">
            {description}{' '}
            <span className="text-accent/80 font-medium">
              focused on performance and usability.
            </span>
          </p>

          {/* Buttons */}
          <div className="flex gap-4 justify-center md:justify-start pt-3">
            <Link
              href="/projects"
              className="
                px-6 py-3
                rounded-lg
                bg-accent text-white
                font-medium
                shadow-sm
                hover:opacity-90
                transition
              "
            >
              {cta.projects}
            </Link>

            <a
              href="/cv.pdf"
              className="
                px-6 py-3
                rounded-lg
                border border-base
                text-foreground
                hover:bg-background
                transition
                font-medium
              "
            >
              {cta.cv}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
