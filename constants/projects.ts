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
      '🎨 Modern UI (shadcn/ui + Dark/Light mode) — 88/100 Lighthouse accessibility score',
      '🧱 Reusable & scalable architecture — 40% less boilerplate vs class-based patterns',
    ],
    shortDescription:
      'Admin dashboard for an E-Commerce platform built with Next.js 14 App Router. Scores 91 on Lighthouse performance (mobile) with full product, user, and payment management in a responsive UI.',
    fullDescription:
      'A fully functional E-Commerce Admin Dashboard designed for managing an online store at scale. Administrators can manage products, users, and payments, view analytics through interactive charts, and interact with structured data tables. Built with Next.js 14 App Router, TypeScript, and shadcn/ui — achieving a 91/100 Lighthouse performance score and 96/100 Best Practices on mobile. The component architecture reduces feature development time by reusing 12+ shared UI primitives.',
    whyItMatters:
      'Demonstrates production-level frontend architecture: real-time data visualization, scalable component design, and a performance-first approach. A 91 Lighthouse performance score on a feature-rich admin dashboard shows that visual complexity and speed are not mutually exclusive.',
    image: '/projects/e-commerce-dashboard.png',
    liveUrl: 'https://admin-e-commerce-seven.vercel.app/',
    githubUrl: 'https://github.com/omarmonib/Admin-Dashboard-E-Commerce.git',
    tags: ['Next.js', 'TypeScript', 'shadcn/ui', 'Framer Motion'],
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
      'Modern E-Commerce frontend built with Next.js 14 App Router and Zustand. Scores 96 on Lighthouse performance (mobile). Cart state persists across sessions and URL-driven filters are fully shareable.',
    fullDescription:
      'MonibShop is a production-ready E-Commerce frontend that delivers a smooth, fast shopping experience. The cart uses Zustand with localStorage persistence — surviving full page refreshes without re-fetching. All filters and sorting are URL-encoded, making every product view shareable and SEO-indexable. Built with React Hook Form + Zod for type-safe checkout validation. Lighthouse scores (mobile): Performance 96, Best Practices 96, SEO 100.',
    whyItMatters:
      'Shows mastery of state management beyond useState: Zustand for global cart state, URL state for filters, and React Hook Form for validated forms. A 96 Lighthouse performance score on a fully interactive e-commerce frontend demonstrates that rich UX and fast load times go hand in hand.',
    image: '/projects/e-commerce-monibshop.png',
    liveUrl: 'https://monibshop.vercel.app/',
    githubUrl: 'https://github.com/omarmonib/MonibShop-E-Commerce.git',
    tags: ['Next.js 14', 'TypeScript', 'Zustand', 'React Hook Form'],
  },
  taqsak: {
    id: 6,
    slug: 'taqsak',
    icon: 'cloud',
    title: 'Taqsak — Weather App',
    techs: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Leaflet', 'OpenWeatherMap'],
    features: [
      '🌍 Multi-language support (Arabic, English, French, Spanish) with RTL/LTR',
      '🗺️ Interactive map with weather overlay layers',
      '📊 Temperature, wind, and humidity charts (Recharts)',
      '⏰ Hourly (24h) and 7-day forecast',
      '☀️ UV Index & Heat Index via Open-Meteo',
      '📍 Geolocation-based weather detection',
      '🆚 Compare up to 4 cities side by side',
      '📱 PWA — installable on mobile and desktop',
      '🎨 Weather-reactive animated backgrounds',
    ],
    shortDescription:
      'A bilingual Arabic/English weather forecast app with interactive maps, charts, city comparison, and PWA support — built with Next.js and OpenWeatherMap.',
    fullDescription:
      'Taqsak (طقسك) is a modern weather web application delivering real-time forecasts in four languages with full RTL support. It combines current conditions, hourly and 7-day forecasts, interactive Leaflet maps with precipitation and wind overlays, and Recharts-powered trend visualizations into a single polished experience. Users can detect their location, save favorites, compare multiple cities, and install the app as a PWA.',
    whyItMatters:
      'Demonstrates building a data-rich, internationalized application with third-party API integration, interactive maps, accessibility-aware RTL layout, and PWA capabilities — all in a production-deployed Next.js codebase.',
    image: {
      light: '/projects/taqsak-light.png',
      dark: '/projects/taqsak-dark.png',
    },
    liveUrl: 'https://taqsak.vercel.app',
    githubUrl: 'https://github.com/omarmonib/taqsak',
    tags: ['Next.js', 'TypeScript', 'Recharts', 'PWA'],
  },
  'nur-al-iman': {
    id: 4,
    slug: 'nur-al-iman',
    title: 'Masjid Noor Al-Iman — Official Website',
    icon: 'book-open',
    techs: [
      'Next.js 14',
      'TypeScript',
      'Tailwind CSS',
      'Prisma',
      'NextAuth.js',
      'next-intl',
      'Zustand',
      'TanStack Query',
      'Framer Motion',
    ],
    features: [
      '📖 Full Mushaf viewer with authentic Uthmanic Hafs fonts and word-by-word audio',
      '📚 Browse 11 major Hadith collections with full-text Arabic search',
      '🕌 Accurate daily prayer times with live countdown and monthly schedule',
      '🧭 Qibla compass with live device orientation and distance to Makkah',
      '📿 34 categorized Adhkar sections from Hisn Al-Muslim with interactive counter',
      '🗞️ Mosque news, announcements, and events with category filters',
      '🔐 Credential-based authentication with NextAuth.js and role-based user model',
      '🌍 Full Arabic/English support via next-intl with RTL/LTR routing',
    ],
    shortDescription:
      'Full-featured Islamic web platform for Masjid Noor Al-Iman — with Quran viewer, Hadith browser, prayer times, Qibla compass, Adhkar counter, and bilingual Arabic/English support.',
    fullDescription:
      'The official website for Masjid Noor Al-Iman in Belbeis, Egypt. Built with Next.js 14 App Router and next-intl for Arabic-first bilingual routing, the platform delivers a complete Islamic experience: a Uthmanic Hafs Mushaf viewer with word audio, 11 Hadith collections with cross-collection search, adhan-powered prayer times with live countdown and printable monthly schedule, a live Qibla compass, and 34 Adhkar sections from Hisn Al-Muslim. Authentication is handled by NextAuth.js with Prisma and bcrypt.',
    whyItMatters:
      'Demonstrates building a content-heavy, RTL-first bilingual application with third-party API integration, database-backed authentication, server-side data fetching, and complex UI features — all in a production-grade Next.js 14 codebase serving a real community.',
    image: '/projects/nur-al-iman.png',
    liveUrl: 'https://masjid-noor-aliman.vercel.app/ar',
    githubUrl: 'https://github.com/omarmonib/masjid-noor-aliman',
    tags: ['Next.js 14', 'TypeScript', 'Prisma', 'NextAuth.js', 'next-intl', 'RTL'],
  },
  'omar-monib': {
    id: 5,
    slug: 'omar-monib',
    icon: 'user',
    title: 'Omar Monib — Portfolio',
    techs: ['Next.js', 'TypeScript', 'Tailwind CSS v4', 'Framer Motion', 'Supabase', 'Resend'],
    features: [
      '🎨 Custom design system — CSS variables + Tailwind v4 theme tokens',
      '📧 Contact form — Resend email delivery + Supabase message storage',
      '🌗 Theme switching — dark/light with zero flash-of-unstyled-content',
      '♿ Accessible — skip-to-content, ARIA labels, keyboard navigation, route announcer',
      '📱 Fully responsive — mobile-first across all breakpoints',
      '⚡ 97/100 Lighthouse performance · 94 Accessibility · 100 Best Practices · 100 SEO',
    ],
    shortDescription:
      'Personal portfolio built with Next.js, Tailwind CSS v4, and Framer Motion. Scores 97/100 on Lighthouse performance (mobile), LCP 2.4s, CLS 0. Contact form delivers via Resend and stores in Supabase. 93 passing tests.',
    fullDescription:
      'This portfolio is itself a production-grade Next.js application — not a template. It features a custom Tailwind CSS v4 design system with CSS variable theming, a working contact form backed by Resend (email) and Supabase (storage), animated page transitions with Framer Motion, and a full test suite (93 passing tests). Lighthouse scores (mobile): Performance 97, Accessibility 94, Best Practices 100, SEO 100. LCP 2.4s, CLS 0, TBT near zero.',
    whyItMatters:
      'A portfolio that practices what it preaches: the same standards applied to client projects — testing, accessibility, performance, and real backend integration — are applied here. Perfect scores on Best Practices and SEO, 97 on Performance, and a working backend make this a demonstration of production engineering habits, not just a showcase.',
    image: {
      light: '/projects/omar-monib-light.png',
      dark: '/projects/omar-monib-dark.png',
    },
    liveUrl: 'https://omar-monib.vercel.app/',
    githubUrl: 'https://github.com/omarmonib/Omar-Monib',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Supabase'],
  },
  flux: {
    id: 7,
    slug: 'flux',
    icon: 'notebook',
    title: 'Flux — Modern Task Manager',
    techs: [
      'Next.js 16',
      'TypeScript',
      'Tailwind CSS v4',
      'Prisma 7',
      'PostgreSQL (Neon)',
      'NextAuth.js v5',
      'TanStack Query',
      'Framer Motion',
      'dnd-kit',
      'Upstash Redis',
    ],
    features: [
      '✅ Complete task management (CRUD) with optimistic UI updates',
      '📋 Kanban board with drag & drop powered by dnd-kit',
      '🏷️ Tags, subtasks, priorities, due dates, filtering, sorting, and bulk actions',
      '⚡ TanStack Query caching with instant optimistic updates and background refetching',
      '🔐 Secure authentication using NextAuth v5, Prisma, JWT sessions, and protected routes',
      '🚦 Rate limiting via Upstash Redis (30 requests/min) with custom error handling',
      '🌙 Responsive dark/light mode with Framer Motion animations and skeleton loading states',
      '🛡️ Production-ready architecture with Prisma 7, PostgreSQL (Neon), custom error boundaries, and App Router',
    ],
    shortDescription:
      'Production-ready task management application built with Next.js 16, Prisma 7, and PostgreSQL. Features Kanban drag & drop, optimistic updates, authentication, rate limiting, and a fully responsive modern UI.',

    fullDescription:
      'Flux is a full-stack productivity application designed with production-grade architecture in mind. Built on Next.js 16 App Router, Prisma 7, and PostgreSQL (Neon), it delivers complete task management including Kanban drag-and-drop, subtasks, priorities, tags, advanced filtering, bulk actions, and inline editing. Authentication is powered by NextAuth v5 with JWT sessions, while TanStack Query provides optimistic updates and intelligent caching. The application also integrates Upstash Redis for API rate limiting and Framer Motion for polished interactions, resulting in a fast, responsive, and scalable user experience.',

    whyItMatters:
      'Demonstrates modern full-stack engineering using the latest Next.js ecosystem. The project showcases authentication, database modeling, API design, optimistic UI patterns, drag-and-drop interactions, caching, rate limiting, and production-ready architecture—making it a strong example of building scalable SaaS-style applications.',

    image: {
      light: '/projects/flux-light.png',
      dark: '/projects/flux-dark.png',
    },

    liveUrl: 'https://flux-todo-list.vercel.app',

    githubUrl: 'https://github.com/omarmonib/Flux-todo-list',

    tags: ['Next.js 16', 'Prisma', 'PostgreSQL', 'NextAuth', 'TanStack Query', 'TypeScript'],
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
