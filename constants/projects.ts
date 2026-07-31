import type { Project } from '@/types/project';

const PROJECTS_DATA: Record<string, Project> = {
  'masjid-noor-aliman': {
    id: 1,
    slug: 'masjid-noor-aliman',
    icon: 'book-open',
    title: 'Masjid Noor Al-Iman — Islamic Platform',
    techs: [
      'Next.js 14',
      'TypeScript',
      'Prisma',
      'PostgreSQL',
      'NextAuth.js',
      'Tailwind CSS',
      'Capacitor',
      'next-intl',
    ],
    features: [
      '📖 Full Quran reader — Mushaf view, word-by-word audio, global search',
      '🕌 Live prayer times, Qibla compass & scheduled adhan notifications',
      '📿 Interactive Adhkar counters from Hisn Al-Muslim with progress tracking',
      '🎙️ Sermon & recitation audio library with speaker profiles',
      '🛠️ Role-based admin dashboard for news, events & media management',
      '📱 Native Android app (Capacitor) sharing the same Next.js codebase',
    ],
    shortDescription:
      'A bilingual Islamic platform offering a full Quran reader, live prayer times, Adhkar, hadith browsing, sermon audio, and mosque news — delivered as both a web app and a native Android app.',
    fullDescription:
      'Masjid Noor Al-Iman is a content-rich platform built for a local mosque, combining a Mushaf-style Quran reader with word-level audio, real-time prayer time calculations with a Qibla compass, an interactive Adhkar tracker, a searchable hadith library, and a sermon/recitation audio archive. A role-based admin dashboard lets mosque staff manage news, events, speakers, and media, while a Capacitor-wrapped Android app shares the exact same Next.js codebase as the website.',
    whyItMatters:
      'Demonstrates delivering a large, content-heavy application across web and native mobile from a single codebase — with real-time calculations, offline-aware audio, push notifications, and a fully bilingual RTL/LTR experience.',
    liveUrl: 'https://masjid-noor-aliman.vercel.app/',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'Capacitor'],
  },
  'legal-documents-system': {
    id: 2,
    slug: 'legal-documents-system',
    icon: 'file-text',
    title: 'Legal Documents Management System',
    techs: ['React', 'Vite', 'Supabase', 'Tailwind CSS', 'docxtemplater', 'Recharts'],
    features: [
      '⚖️ Guided forms generate lawsuits, police reports & official requests',
      '📄 One-click Word (.docx) export using each office’s own letterhead template',
      '🖨️ Pixel-accurate PDF export mirroring the Word layout',
      '👥 Built-in client CRM with CSV/Excel bulk import',
      '⏰ Case history archive with searchable records & due-date reminders',
      '🛠️ Admin dashboard for usage tracking, plan management & analytics',
    ],
    shortDescription:
      'An Arabic-first SaaS that helps Egyptian lawyers turn structured intake forms into polished Word and PDF legal documents, with a built-in client CRM and usage-based subscription plans.',
    fullDescription:
      'This system replaces the repetitive manual drafting of lawsuits, police reports, and official requests with a guided, validated form workflow that generates ready-to-file Word documents from custom office templates, plus a pixel-accurate print/PDF export. It also includes a lightweight client CRM with bulk CSV/Excel import, a searchable case history archive, due-date reminders, and an admin dashboard for tracking usage against tiered subscription plans.',
    whyItMatters:
      'Showcases a fully right-to-left Arabic product built around a real professional workflow — dynamic document templating, structured form validation, and subscription-based usage limits — architected entirely on a Supabase backend with no custom server.',
    tags: ['React', 'Supabase', 'Arabic RTL'],
  },
  ranovix: {
    id: 3,
    slug: 'ranovix',
    icon: 'radio',
    title: 'Ranovix — Telecom Knowledge Hub',
    techs: [
      'Next.js 15',
      'React 19',
      'TypeScript',
      'Prisma',
      'PostgreSQL',
      'NextAuth v5',
      'Tailwind CSS v4',
      'Turborepo',
    ],
    features: [
      '📚 Vendor knowledge base spanning Ericsson, Huawei, Nokia, ZTE & Samsung',
      '📥 Moderated downloads library for manuals, scripts & configurations',
      '💬 Community feed with posts, comments, likes & follows',
      '🎓 Learning Center with paths, courses & real completion tracking',
      '🔍 Full-text search across articles, downloads & news',
      '🛡️ Five-tier RBAC with a dedicated moderation & analytics dashboard',
    ],
    shortDescription:
      'A community-driven knowledge hub for mobile network engineers, centralizing vendor documentation, technical articles, a downloads library, and a peer discussion feed behind a moderated review workflow.',
    fullDescription:
      'Ranovix organizes scattered telecom vendor knowledge (Ericsson, Huawei, Nokia, ZTE, Samsung) into a single searchable reference — Markdown articles, a downloads library for manuals and scripts, industry news, and a Learning Center with real progress tracking. A social feed lets engineers share posts and discuss, while a five-role permission system and admin dashboard keep content moderated and organized by vendor and technology.',
    whyItMatters:
      'Built as a clean-architecture pnpm/Turborepo monorepo — domain, application, infrastructure, and presentation layers are strictly separated, with a single centralized RBAC matrix — demonstrating how to structure a large, multi-module Next.js application for long-term maintainability.',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'Monorepo'],
  },
  marketi: {
    id: 4,
    slug: 'marketi',
    icon: 'shopping-cart',
    title: 'Marketi — E-Commerce Platform',
    techs: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'Prisma',
      'PostgreSQL',
      'Stripe',
      'Tailwind CSS',
      'shadcn/ui',
    ],
    features: [
      '🛒 Full storefront — catalog, filters, search, cart, wishlist & reviews',
      '💳 Stripe Checkout with webhook-driven order fulfillment',
      '🏷️ Coupon engine with percentage/fixed discounts & usage limits',
      '🛠️ Admin back office for products, orders, users & coupons',
      '🌍 English/Arabic storefront with automatic RTL layout',
      '🔐 Rate-limited authentication via credentials & Google OAuth',
    ],
    shortDescription:
      'A full-stack, multi-language e-commerce platform with a complete storefront and admin back office, built on Next.js App Router, Prisma, and Stripe Checkout.',
    fullDescription:
      'Marketi is a reference e-commerce architecture combining a public storefront — product catalog, search, cart, coupons, wishlist, reviews, order history — with an admin back office for managing products, orders, users, and coupons. Checkout runs on Stripe Checkout Sessions with webhook-driven order creation, and the storefront is fully localized in English and Arabic with automatic RTL support.',
    whyItMatters:
      'Demonstrates a production-style e-commerce architecture — Server Actions, webhook-driven payments, rate-limited auth, and role-gated admin tooling — inside a single type-safe Next.js codebase built on shadcn/ui and Radix primitives.',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'Prisma'],
  },
  expenseiq: {
    id: 5,
    slug: 'expenseiq',
    icon: 'wallet',
    title: 'ExpenseIQ — Finance Management SaaS',
    techs: ['React 19', 'Vite', 'Supabase', 'Zustand', 'Tailwind CSS', 'Capacitor'],
    features: [
      '💸 Expense & income tracking with categories and budget alerts',
      '🔁 Recurring transactions with automatic scheduled generation',
      '🧾 Lightweight invoicing — clients, projects & profit/loss tracking',
      '📊 Interactive dashboard with monthly trend & category charts',
      '💳 Tiered subscriptions with card & manual payment approval',
      '📱 Native Android app with local push budget notifications',
    ],
    shortDescription:
      'A bilingual personal and business finance app combining expense tracking, budgeting, lightweight invoicing, and a tiered subscription model in one Supabase-backed SaaS.',
    fullDescription:
      'ExpenseIQ covers personal expense/income tracking with category budgets and proactive alerts, alongside a lightweight business module for clients, projects, and invoices with profit/loss visibility. A tiered Free/Pro/Business subscription model supports both instant card payments and manually verified bank transfers, all wrapped in a bilingual Arabic/English interface with a native Android companion app.',
    whyItMatters:
      'Combines personal finance tooling with a small-business invoicing module and a real subscription/payment system, packaged as both a responsive web app and a native Android app from a single React/Vite codebase.',
    tags: ['React', 'Supabase', 'Zustand'],
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
