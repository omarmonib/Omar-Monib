'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ProfileImg from '@/public/profile.jpg';

export default function Hero() {
  return (
    <section className="p-6 md:p-20 bg-linear-to-b from-black/20 to-black/40 text-black dark:text-white">
      <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="w-35 h-35 md:w-70 md:h-70 rounded-full overflow-hidden shadow-xl ring-2 md:ring-4 ring-white/60 ">
            <Image src={ProfileImg} alt="Profile" className="object-cover w-full h-full" priority />
          </div>
        </motion.div>

        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h1 className="text-3xl md:text-6xl font-bold mb-4 leading-tight ">
            Hi, I am <span className="text-blue-500">Omar</span>
          </h1>

          <h2 className="text-lg md:text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Front-End Developer
          </h2>
          <p className="text-base md:text-lg max-w-md mb-8 leading-relaxed">
            I build fast, modern, and visually pleasing web experiences using cutting-edge
            technologies.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 justify-center md:justify-start">
            <motion.a
              href="/projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="text-sm md:text-base py-3 md:py-3 px-4 md:px-6 bg-blue-800 text-white font-medium rounded-lg shadow-sm hover:bg-blue-700 transition-all"
            >
              View Projects
            </motion.a>

            <motion.a
              href="/cv.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="text-sm md:text-base px-6 py-3 rounded-lg border border-gray-500 text-gray-300 hover:bg-gray-700 transition-all font-medium"
            >
              Download CV
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
