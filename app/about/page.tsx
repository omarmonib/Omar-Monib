'use client'

import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-20 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8 text-center"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Who am I?</h3>
            <p className="text-lg leading-relaxed mb-6">
              I am a passionate Frontend Developer with expertise in modern web technologies. I love
              creating beautiful, responsive, and user-friendly web applications.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              With a strong foundation in React, Next.js, and modern JavaScript/TypeScript, I bring
              ideas to life through clean and efficient code.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-100 dark:bg-gray-800 p-8 rounded-xl"
          >
            <h3 className="text-2xl font-semibold mb-6">My Skills</h3>
            <div className="space-y-4">
              {[
                'React.js / Next.js',
                'TypeScript / JavaScript',
                'Tailwind CSS',
                'Node.js / Express',
                'Git & GitHub',
                'Responsive Design',
              ].map((skill, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
