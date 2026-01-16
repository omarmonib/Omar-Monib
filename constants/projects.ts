// constants/projects.ts
export const ProjectsData = {
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
    projectUrl: 'ecommerce-admin', // فقط slug
    liveUrl: 'https://ecommerce-demo.com',
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
    liveUrl: 'https://omar-portfolio.vercel.app',
    githubUrl: 'https://github.com/omarmonib/MonibShop-E-Commerce.git',
    tags: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Zustand', 'React Hook Form'],
  },
};
