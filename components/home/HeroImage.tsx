'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Avatar, AvatarFallback } from '@/components/ui/Avatar';
import ProfileImg from '@/public/profile.jpg';

const HeroImage = ({ name }: { name: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="flex justify-center relative"
    >
      <div className="absolute inset-0 rounded-full bg-linear-to-br from-indigo-500/30 to-purple-500/20 blur-3xl scale-75" />

      <Avatar className="relative z-10 w-48 h-48 md:w-72 md:h-72 ring-2 md:ring-4 ring-accent/40 shadow-[0_20px_40px_rgba(99,102,241,0.15)]">
        <Image
          src={ProfileImg}
          alt={`${name} — Frontend Developer and Network Engineer profile photo`}
          fill
          priority
          placeholder="blur"
          loading="eager"
          fetchPriority="high"
          sizes="(max-width: 640px) 192px, 288px"
          className="object-cover"
        />
        <AvatarFallback>{name[0]}</AvatarFallback>
      </Avatar>
    </motion.div>
  );
};

export default HeroImage;
