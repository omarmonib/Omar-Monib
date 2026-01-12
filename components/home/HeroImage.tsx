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
      className="flex justify-center"
    >
      <Avatar className="w-36 h-36 md:w-72 md:h-72 ring-2 md:ring-4 ring-accent/40 shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
        <Image
          src={ProfileImg}
          alt={`${name} profile picture`}
          fill
          className="object-cover"
          priority
        />
        <AvatarFallback>{name[0]}</AvatarFallback>
      </Avatar>
    </motion.div>
  );
};

export default HeroImage;
