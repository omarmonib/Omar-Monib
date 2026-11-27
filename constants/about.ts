import { getAllProjects } from '@/constants/projects';
import { getSkillCount } from '@/constants/skills';

const experienceYears = 7;

export const ABOUT_CONTENT = {
  whoAmI: {
    heading: 'Who am I?',
    description: `Self-taught frontend developer and Electronics & Communications Engineer with ${experienceYears} years of telecom field and NOC work on Vodafone projects. I have been teaching myself frontend development since 2023, building full-stack web apps with React and Next.js, and I am looking for a junior frontend role.`,
  },
  background: {
    heading: 'Professional Background',
    description:
      'Telecom engineer on Vodafone projects (Ericsson RBS site work, then NOC L1), learning web development in parallel by building and shipping full projects.',
  },
  skills: {
    heading: 'Skills & Expertise',
    description:
      'Day to day I work with React, Next.js, TypeScript and Tailwind, plus Prisma, PostgreSQL and Supabase on the back end.',
  },
  passion: {
    heading: 'My Passion',
    description:
      'I like building tools for real workflows, such as telecom engineers, mosques and lawyers, and I learn most by shipping them.',
  },
} as const;

export const ABOUT_STATS = [
  {
    value: `${experienceYears}+`,
    label: 'Years in Telecom Engineering',
  },
  {
    value: '3',
    label: 'Years Self-Taught Frontend',
  },
  {
    value: `${getAllProjects().length}`,
    label: 'Projects Built',
  },
  {
    value: `${getSkillCount()}+`,
    label: 'Technologies Used',
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
      'Moved to NFM Maintenance & NOC L1 Engineer at Afro Egypt (Vodafone Project). Started teaching myself frontend development with React and Next.js in 2023, alongside the job.',
  },
  {
    year: '2023 - 2025',
    title: 'Launched Portfolio & Key Projects',
    description:
      'Built and deployed MonibShop, an e-commerce admin dashboard, the Nur Al-Iman platform and this portfolio, then larger full-stack projects: Marketi, Ranovix and the Masjid Noor Al-Iman platform.',
  },
  {
    year: 'Present',
    title: 'Open to Frontend Opportunities',
    description:
      'Looking for a junior frontend role, remote or on-site, where I can also use my telecom background.',
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