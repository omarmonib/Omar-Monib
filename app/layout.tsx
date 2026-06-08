import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import { ThemeProvider } from '@/lib/context/ThemeContext';
import Footer from '@/components/layout/Footer';
import ThemeScript from '@/components/layout/ThemeScript';
import RouteAnnouncer from '@/components/layout/RouteAnnouncer';
import SpeedInsightsLoader from '@/components/layout/SpeedInsightsLoader';


const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Omar Monib | React & Next.js Frontend Developer in Egypt',
    template: '%s | Omar Monib',
  },
  description:
    'Frontend Developer specializing in React.js and Next.js with 7+ years of network engineering experience at Vodafone. Available for freelance and full-time roles — remote, hybrid, or on-site.',
  keywords: [
    'Frontend Developer',
    'React Developer',
    'Next.js Developer',
    'TypeScript',
    'Tailwind CSS',
    'Egypt',
    'Remote Frontend Developer',
    'Omar Monib',
  ],
  authors: [{ name: 'Omar Monib' }],
  creator: 'Omar Monib',
  openGraph: {
    title: 'Omar Monib | React & Next.js Frontend Developer',
    description:
      'Frontend Developer with 7 years of engineering experience at Vodafone and 3 years building production-grade web apps with React, Next.js, and TypeScript.',
    url: 'https://omar-monib.vercel.app',
    siteName: 'Omar Monib Portfolio',
    images: [
      {
        url: 'https://omar-monib.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Omar Monib - React & Next.js Frontend Developer',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Omar Monib | React & Next.js Frontend Developer',
    description:
      'Frontend Developer with 7 years of engineering experience at Vodafone and 3 years building production-grade web apps with React, Next.js, and TypeScript.',
    images: ['https://omar-monib.vercel.app/og-image.png'],
    creator: '@omar_monib1',
  },
  alternates: {
    canonical: 'https://omar-monib.vercel.app',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Omar Monib',
  url: 'https://omar-monib.vercel.app',
  email: 'omar.monib91@gmail.com',
  jobTitle: 'Frontend Developer',
  description:
    'Frontend Developer specializing in React and Next.js with 7+ years of network engineering experience at Vodafone.',
  knowsAbout: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Network Engineering'],
  sameAs: [
    'https://www.linkedin.com/in/omar-monib/',
    'https://github.com/omarmonib',
    'https://x.com/omar_monib1',
  ],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'EG',
  },
  offers: {
    '@type': 'Offer',
    description: 'Available for freelance projects and full-time frontend developer roles',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html data-scroll-behavior="smooth" lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-md focus:shadow-lg"
        >
          Skip to main content
        </a>
        <ThemeProvider>
          <Navbar />
          <RouteAnnouncer />
          <main id="main-content">{children}</main>
          <Footer />
          <SpeedInsightsLoader />
        </ThemeProvider>
      </body>
    </html>
  );
}
