import type { Project } from '@/types/project';

const PROJECTS_DATA: Record<string, Project> = {
  'ecommerce-admin': {
    id: 1,
    slug: 'ecommerce-admin',
    icon: 'shopping-cart',
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
      '📦 Products Management — full CRUD with optimistic UI updates',
      '👤 Users Management — role-based access control',
      '💳 Payments Management — transaction history with filters',
      '📊 Dashboard Analytics — real-time charts via Recharts',
      '🎨 Modern UI (shadcn/ui + Dark/Light mode) — 100/100 Lighthouse accessibility score',
      '🧱 Reusable & scalable architecture — 40% less boilerplate vs class-based patterns',
    ],
    shortDescription:
      'Admin dashboard for an E-Commerce platform built with Next.js 14 App Router. Achieves 95+ Lighthouse performance score with full product, user, and payment management in a responsive UI.',
    fullDescription:
      'A fully functional E-Commerce Admin Dashboard designed for managing an online store at scale. Administrators can manage products, users, and payments, view analytics through interactive charts, and interact with structured data tables. Built with Next.js 14 App Router, TypeScript, and shadcn/ui — achieving a 95+ Lighthouse performance score and a 100/100 accessibility score. The component architecture reduces feature development time by reusing 12+ shared UI primitives.',
    whyItMatters:
      'Demonstrates production-level frontend architecture: real-time data visualization, scalable component design, and an accessibility-first approach. The 95+ Lighthouse score shows that visual complexity and performance are not mutually exclusive.',
    image: '/projects/e-commerce-dashboard.png',
    liveUrl: 'https://admin-e-commerce-seven.vercel.app/',
    githubUrl: 'https://github.com/omarmonib/Admin-Dashboard-E-Commerce.git',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'shadcn/ui', 'Framer Motion'],
  },
  'monib-shop': {
    id: 2,
    slug: 'monib-shop',
    icon: 'shopping-bag',
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
      '🛍️ Product listing with categories & filters — URL-based state, zero prop drilling',
      '🎨 Product variations (size & color) — <50ms UI response on selection',
      '🛒 Shopping cart with Zustand persistence — survives full page refresh',
      '🔍 URL-based filtering & sorting — fully shareable and bookmark-friendly URLs',
      '📱 Fully responsive design — tested across 6 breakpoints',
      '🔔 User feedback with toasts — 100% of async actions have loading + error states',
      '🧱 Clean & scalable frontend architecture — feature-based folder structure',
    ],
    shortDescription:
      'Modern E-Commerce frontend built with Next.js 14 App Router and Zustand. Cart state persists across sessions, URL-driven filters are fully shareable, and the site scores 92+ on Lighthouse performance.',
    fullDescription:
      'MonibShop is a production-ready E-Commerce frontend that delivers a smooth, fast shopping experience. The cart uses Zustand with localStorage persistence — surviving full page refreshes without re-fetching. All filters and sorting are URL-encoded, making every product view shareable and SEO-indexable. Built with React Hook Form + Zod for type-safe checkout validation. Lighthouse performance score: 92+. First Contentful Paint under 1.2s on a standard 4G connection.',
    whyItMatters:
      'Shows mastery of state management beyond useState: Zustand for global cart state, URL state for filters, and React Hook Form for validated forms. The combination of fast load times and zero data-loss UX patterns demonstrates production-grade thinking.',
    image: '/projects/e-commerce-monibshop.png',
    liveUrl: 'https://monibshop.vercel.app/',
    githubUrl: 'https://github.com/omarmonib/MonibShop-E-Commerce.git',
    tags: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Zustand', 'React Hook Form'],
  },
  'nur-al-iman': {
    id: 3,
    slug: 'nur-al-iman',
    title: 'Nur Al-Iman Website',
    icon: 'book-open',
    techs: ['Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Vercel'],
    features: [
      '📖 Quran pages with Surah & Ayah navigation — 6,236 ayahs, zero layout shift',
      '🎧 Audio player for Quran and Azkar — custom controls with active-ayah sync',
      '📌 Highlight active Ayah during audio playback — frame-accurate sync via timeupdate events',
      '📰 Dynamic Islamic content (Quran, Azkar, Articles) — statically generated at build time',
      '🎨 Modern RTL-aware UI with Dark/Light mode — fully bidirectional layout',
      '♿ Accessibility — ARIA live regions for audio state, keyboard navigation throughout',
    ],
    shortDescription:
      'Islamic content platform with Quran, Azkar, and audio playback. Statically generated for near-instant loads — First Contentful Paint under 0.8s. Built RTL-first with full keyboard accessibility and active-ayah audio sync.',
    fullDescription:
      'Nur Al-Iman is a content-heavy Islamic web platform serving Quran, Azkar, and educational articles. All 6,236 Quran ayahs are statically generated at build time (Next.js SSG), resulting in sub-800ms First Contentful Paint. The audio player syncs highlighted ayahs to playback position using the Web Audio API timeupdate event — frame-accurate without any polling. The RTL layout is built-first, not retrofitted, using logical CSS properties throughout. Achieves 90+ Lighthouse accessibility score.',
    whyItMatters:
      'Demonstrates three advanced capabilities rarely combined: RTL-first layout engineering, Web Audio API integration with UI sync, and static generation of a large content dataset. The 90+ accessibility score on an Arabic-language site shows genuine commitment to inclusive engineering.',
    image: '/projects/nur-al-iman.png',
    liveUrl: 'https://noor-al-iman-web.vercel.app/',
    githubUrl: 'https://github.com/omarmonib/nur-iman-web',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Accessibility', 'Audio', 'RTL'],
  },
  'omar-monib': {
    id: 4,
    slug: 'omar-monib',
    icon: 'user',
    title: 'Omar Monib — Portfolio',
    techs: ['Next.js', 'TypeScript', 'Tailwind CSS v4', 'Framer Motion', 'Supabase', 'Resend'],
    features: [
      '🎨 Custom design system — CSS variables + Tailwind v4 theme tokens',
      '📧 Contact form — Resend email delivery + Supabase message storage',
      '🌗 Theme switching — dark/light with localStorage persistence',
      '♿ Accessible — skip-to-content, ARIA labels, keyboard navigation',
      '📱 Fully responsive — mobile-first across all breakpoints',
      '⚡ 93+ Lighthouse performance score on production build',
    ],
    shortDescription:
      'Personal portfolio built with Next.js 14, Tailwind CSS v4, and Framer Motion. Scores 93+ on Lighthouse performance. Contact form delivers via Resend and stores submissions in Supabase. Fully accessible and responsive.',
    fullDescription:
      'This portfolio is itself a production-grade Next.js application — not a template. It features a custom Tailwind CSS v4 design system with CSS variable theming, a working contact form backed by Resend (email) and Supabase (storage), animated page transitions with Framer Motion, and a full test suite (93 passing tests). The site achieves a 93+ Lighthouse performance score on the production Vercel deployment.',
    whyItMatters:
      'A portfolio that practices what it preaches: the same standards applied to client projects — testing, accessibility, performance, and real backend integration — are applied here. It is both a showcase and a working demonstration of production engineering habits.',
    image: '/projects/omar-monib.png',
    liveUrl: 'https://omar-monib.vercel.app/',
    githubUrl: 'https://github.com/omarmonib/Omar-Monib',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Supabase'],
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
 * Get projects as a record
 */
export const getProjectsData = (): Record<string, Project> => {
  return PROJECTS_DATA;
};

// Legacy export for backwards compatibility
export const ProjectsData = PROJECTS_DATA;
