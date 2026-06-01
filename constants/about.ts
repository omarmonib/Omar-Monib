import { getAllProjects } from '@/constants/projects';
import { getSkillCount } from '@/constants/skills';

const EXPERIENCE_START_YEAR = 2019;

const FRONTEND_START_YEAR = 2023;

const currentYear = new Date().getFullYear();
const experienceYears = currentYear - EXPERIENCE_START_YEAR;
const frontendYears = currentYear - FRONTEND_START_YEAR;

export const ABOUT_CONTENT = {
  whoAmI: {
    heading: 'Who am I?',
    description: `Frontend Developer and Electronics & Communications Engineer with ${experienceYears} years at Vodafone and ${frontendYears} years of freelance development — bringing a unique blend of network architecture and modern web expertise.`,
  },
  background: {
    heading: 'Professional Background',
    description:
      'Network Engineer at Vodafone specializing in maintenance and architecture, while simultaneously building production-grade web applications as a freelance developer.',
  },
  skills: {
    heading: 'Skills & Expertise',
    description:
      'Specialized in React, Next.js, and TypeScript — writing clean, maintainable code that bridges design and functionality with a focus on performance and scalability.',
  },
  passion: {
    heading: 'My Passion',
    description:
      'Passionate about building digital experiences that matter — where great software meets real human needs. Every project is an opportunity to learn, innovate, and make a lasting impact.',
  },
} as const;

export const ABOUT_STATS = [
  {
    value: `${experienceYears}+`,
    label: 'Years Network & Engineering Experience',
  },
  {
    value: `${frontendYears}+`,
    label: 'Years Frontend Development',
  },
  {
    value: `${getAllProjects().length}`,
    label: 'Projects Built',
  },
  {
    value: `${getSkillCount()}+`,
    label: 'Skills Mastered',
  },
] as const;

export const ABOUT_TIMELINE = [
  {
    year: '2015',
    title: "Bachelor's Degree in Communications Engineering",
    description:
      'Graduated from Al-Safwa Institute of Engineering with a grade of Very Good — specializing in Electronics & Communications Engineering.',
  },
  {
    year: '2016',
    title: 'Reserve Officer — Air Defense Engineering',
    description:
      'Served as a Reserve Officer in the Egyptian Air Defense Forces, applying communications engineering expertise in a high-discipline military environment.',
  },
  {
    year: '2019',
    title: 'Field & Implementation Engineer — Vodafone',
    description:
      'Joined ECP (Vodafone Project) conducting site surveys, hardware installation, and software configuration for Ericsson RBS equipment across the Vodafone network rollout program.',
  },
  {
    year: '2021',
    title: 'Field Engineer — Land Mark (Vodafone)',
    description:
      'Performed field maintenance and troubleshooting for mobile sites, reducing unplanned downtime through systematic fault isolation and hardware replacement.',
  },
  {
    year: '2022',
    title: 'Implementation Engineer — CITIX (Vodafone)',
    description:
      "Managed installation, commissioning, and acceptance testing of Ericsson RBS cabinets. Supported Vodafone's LTE capacity rollout.",
  },
  {
    year: '2023',
    title: 'NOC L1 Engineer & Frontend Development',
    description:
      'Promoted to NFM Maintenance & NOC L1 Engineer at Afro Egypt (Vodafone Project). Simultaneously began frontend development — building production-grade React and Next.js applications as a freelance developer.',
  },
  {
    year: '2023 - 2025',
    title: 'Launched Portfolio & Key Projects',
    description:
      'Shipped MonibShop, E-Commerce Admin Dashboard, Nur Al-Iman Islamic Platform, and personal portfolio — demonstrating full-stack frontend capabilities with TypeScript, Zustand, and Next.js App Router.',
  },
  {
    year: 'Present',
    title: 'Open to Frontend Opportunities',
    description:
      'Actively seeking frontend roles locally and internationally. Open to on-site, hybrid, or remote positions — bringing engineering discipline and production mindset to modern web development.',
  },
] as const;

export const ABOUT_INTERESTS = [
  { emoji: '💻', label: 'Open Source' },
  { emoji: '📚', label: 'Tech Reading' },
  { emoji: '🎮', label: 'Gaming' },
  { emoji: '🌐', label: 'Web Performance' },
  { emoji: '🏋️', label: 'Fitness' },
  { emoji: '✈️', label: 'Travel' },
] as const;

export const ABOUT_LANGUAGES = [
  { language: 'Arabic', level: 'Native', flag: '🇪🇬' },
  { language: 'English', level: 'Professional Working', flag: '🇬🇧' },
]