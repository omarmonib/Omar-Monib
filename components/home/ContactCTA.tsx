'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const ContactCTA = () => {
  return (
    <section className="py-24 px-6 md:px-20 bg-background-secondary">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
            Let&apos;s Work Together
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Looking for a junior frontend developer?
          </h2>
          <p className="text-base text-muted-foreground mb-8 max-w-xl mx-auto">
            I&apos;m open to junior frontend roles, remote or on-site. I can also use my telecom
            background on network-tools projects. Let&apos;s talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="custom">
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <Button asChild size="lg" variant="customOutline">
              <Link href="/projects">View My Work</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
