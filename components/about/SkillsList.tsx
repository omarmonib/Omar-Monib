'use client';

import { motion } from 'framer-motion';
import {
  Atom,
  FileCode,
  Paintbrush,
  Server,
  GitBranch,
  MonitorSmartphone,
  TestTube,
  Boxes,
  ClipboardList,
  Globe,
  Database,
  Brain,
} from 'lucide-react';

const SKILLS_WITH_ICONS = [
  { name: 'React.js / Next.js', icon: Atom },
  { name: 'TypeScript / JavaScript', icon: FileCode },
  { name: 'Tailwind CSS', icon: Paintbrush },
  { name: 'Node.js / Express', icon: Server },
  { name: 'Git & GitHub', icon: GitBranch },
  { name: 'Responsive Design', icon: MonitorSmartphone },
  { name: 'Jest & Testing', icon: TestTube },
  { name: 'Zustand', icon: Boxes },
  { name: 'React Hook Form', icon: ClipboardList },
  { name: 'API Integration & REST', icon: Globe },
  { name: 'Database Design (SQL)', icon: Database },
  { name: 'Problem Solving', icon: Brain },
];

const SkillsList = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="bg-background-secondary p-6 rounded-xl sticky top-24"
    >
      <h3 className="text-xl font-semibold mb-6 text-foreground">My Skills</h3>

      <div className="grid grid-cols-2 gap-3">
        {SKILLS_WITH_ICONS.map(({ name, icon: Icon }, index) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 * index, duration: 0.3 }}
            className="flex items-center gap-2 p-2 rounded-lg bg-card border border-border hover:border-accent/40 hover:bg-accent/5 transition-all duration-200 group"
          >
            <div className="shrink-0 w-7 h-7 rounded-md bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
              <Icon className="w-4 h-4 text-accent" />
            </div>
            <span className="text-xs font-medium text-foreground leading-tight">{name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillsList;
