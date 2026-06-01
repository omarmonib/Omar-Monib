'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProfileImg from '@/public/profile.jpg';
import AboutIntro from '@/components/about/AboutIntro';
import SkillsList from '@/components/about/SkillsList';
import AboutStats from '@/components/about/AboutStats';
import AboutTimeline from '@/components/about/AboutTimeline';
import AvailabilityBadge from '@/components/about/AvailabilityBadge';
import AboutExtras from '@/components/about/AboutExtras';

const AboutSection = () => {
  return (
    <section className="py-20 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-accent"
        >
          About Me
        </motion.h2>

        <AboutStats />

        {/* Profile photo + name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-3 mb-12"
        >
          <div className="relative w-24 h-24 rounded-full overflow-hidden ring-2 ring-accent/40 shadow-lg shadow-accent/20">
            <Image src={ProfileImg} alt="Omar Monib" fill sizes="96px" className="object-cover" />
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-foreground">Omar Monib</h3>
            <p className="text-sm text-muted-foreground">Frontend Developer & Network Engineer</p>
          </div>
          <AvailabilityBadge />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <AboutIntro />
          <SkillsList />
        </div>

        {/* Download CV button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mt-12"
        >
          <Button asChild size="lg" variant="customOutline" className="gap-2">
            <a href="/cv.pdf" download>
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </Button>
        </motion.div>
        <AboutExtras />
        <AboutTimeline />
      </div>
    </section>
  );
};

export default AboutSection;
