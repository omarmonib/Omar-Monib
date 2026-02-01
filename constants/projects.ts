import type { Project } from '@/types/project';

/**
 * Project data representing portfolio showcase projects
 * Each project contains metadata, descriptions, and links
 */
const PROJECTS_DATA: Record<string, Project> = {
  'omar-monib': {
    id: 5,
    slug: 'omar-monib',
    title: 'Omar Monib — Portfolio',
    techs: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    features: [
      '👨‍💻 Personal portfolio & projects showcase',
      '📄 Blog & technical case studies',
      '📱 Fully responsive and accessible UI',
    ],
    shortDescription:
      'A personal portfolio website built with Next.js to showcase projects, write technical articles, and present professional experience in a clean, modern interface.',
    fullDescription:
      'Omar Monib Portfolio is a personal website designed to present projects, technical blog posts, and professional background in a structured and elegant way. The site is built with Next.js and Tailwind CSS, focusing on clean architecture, fast page loads, accessibility best practices, and a responsive layout that works seamlessly across devices.',
    whyItMatters:
      'Serves as a professional online presence to highlight skills, experience, and projects, making it easier for recruiters and clients to evaluate work and get in touch.',
    image: '/projects/omar-monib.png',
    projectUrl: 'omar-monib',
    liveUrl: 'https://omar-monib.vercel.app/',
    githubUrl: 'https://github.com/omarmonib',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  'ecommerce-admin': {
    id: 1,
    slug: 'ecommerce-admin',
    title: 'E-Commerce Admin Dashboard',
    techs: [
      'Next.js 14',
      'React',
      'TypeScript',
      'shadcn/ui',
      'Tailwind CSS',
      'Framer Motion',
      'Charts',
    ],
    features: [
      '📦 Products Management',
      '👤 Users Management',
      '💳 Payments Management',
      '📊 Dashboard Analytics',
      '🎨 Modern UI (shadcn/ui + Dark/Light mode)',
      '🧱 Reusable & scalable architecture',
    ],
    shortDescription:
      'Admin dashboard for an E-Commerce platform built with Next.js (App Router), providing full control over products, users, and payments with a modern, responsive UI.',
    fullDescription:
      'This project is a fully functional E-Commerce Admin Dashboard designed to manage an online store efficiently. It allows administrators to manage products, users, and payments, view analytics through charts, and interact with structured data tables.',
    whyItMatters:
      'This project simulates a real production-level E-Commerce admin panel and demonstrates strong frontend architecture and UI management skills.',
    image: '/projects/e-commerce-dashboard.png',
    projectUrl: 'ecommerce-admin',
    liveUrl: 'https://admin-e-commerce-seven.vercel.app/',
    githubUrl: 'https://github.com/omarmonib/Admin-Dashboard-E-Commerce.git',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'shadcn/ui', 'Framer Motion'],
  },
  'monib-shop': {
    id: 2,
    slug: 'monib-shop',
    title: 'MonibShop – E-Commerce Website',
    techs: [
      'Next.js 14',
      'TypeScript',
      'Tailwind CSS',
      'Zustand',
      'React Hook Form',
      'Zod',
      'Lucide Icons',
      'shadcn/ui',
    ],
    features: [
      '🛍️ Product listing with categories & filters',
      '🎨 Product variations (size & color)',
      '🛒 Shopping cart with persistence',
      '🔍 URL-based filtering & sorting',
      '📱 Fully responsive design',
      '🔔 User feedback with toasts',
      '🧱 Clean & scalable frontend architecture',
    ],
    shortDescription:
      'Modern E-Commerce frontend application built with Next.js 14 (App Router), focused on performance, clean architecture, and a smooth shopping experience.',
    fullDescription:
      'MonibShop is a modern E-Commerce frontend that simulates a real online shopping experience. The project includes product browsing, filtering, and a fully functional shopping cart with persistent state. It is designed with scalability and maintainability in mind, following real-world frontend best practices.',
    whyItMatters:
      'This project demonstrates the ability to build a production-ready E-Commerce frontend, apply modern React and Next.js patterns, and create a smooth, user-focused shopping experience with clean and scalable code.',
    image: '/projects/e-commerce-monibshop.png',
    projectUrl: 'monib-shop',
    liveUrl: 'https://monibshop.vercel.app/',
    githubUrl: 'https://github.com/omarmonib/MonibShop-E-Commerce.git',
    tags: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Zustand', 'React Hook Form'],
  },
  'nur-al-iman': {
    id: 4,
    slug: 'nur-al-iman',
    title: 'Nur Al-Iman Website',
    techs: ['Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Vercel'],
    features: [
      '📖 Quran pages with Surah & Ayah navigation',
      '🎧 Audio player for Quran and Azkar',
      '📌 Highlight active Ayah during audio playback',
      '📰 Dynamic Islamic content (Quran, Azkar, Articles)',
      '🎨 Modern RTL-aware UI with Dark/Light mode',
      '♿ Accessibility improvements (ARIA + keyboard navigation)',
    ],
    shortDescription:
      'An Islamic content website that provides Quran, Azkar, and articles with an integrated audio listening experience and optimized Arabic RTL interface.',
    fullDescription:
      'Nur Al-Iman is a modern Islamic web platform focused on delivering Quran, Azkar, and educational content with a smooth reading and listening experience. The project includes dynamic Quran pages, a Mushaf-style view with audio playback, and locally managed Azkar audio files. Built with Next.js (App Router), TypeScript, and Tailwind CSS, the project emphasizes performance, accessibility, and Arabic-first RTL user experience.',
    whyItMatters:
      'Demonstrates building a content-heavy, RTL-focused web application with integrated audio, accessibility considerations, and performance optimization.',
    image: '/projects/nur-al-iman.png',
    projectUrl: 'nur-al-iman',
    liveUrl: 'https://noor-al-iman-web.vercel.app/',
    githubUrl: 'https://github.com/omarmonib/nur-iman-web',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Accessibility', 'Audio', 'RTL'],
  },
};

/**
 * Get all projects
 */
export const getAllProjects = (): Project[] => {
  return Object.values(PROJECTS_DATA);
};

/**
 * Get a project by slug
 */
export const getProjectBySlug = (slug: string): Project | undefined => {
  return PROJECTS_DATA[slug];
};

/**
 * Get projects as a record (for backwards compatibility)
 */
export const getProjectsData = (): Record<string, Project> => {
  return PROJECTS_DATA;
};

// Legacy export for backwards compatibility
export const ProjectsData = PROJECTS_DATA;
