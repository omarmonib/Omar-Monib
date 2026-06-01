import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import { ThemeProvider } from '@/lib/context/ThemeContext';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Footer from '@/components/layout/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Omar Monib | Frontend Developer',
    template: '%s | Omar Monib',
  },
  description:
    'Frontend Developer specializing in React.js and Next.js. Building high-performance web applications with a unique network engineering background.',
  keywords: ['Frontend Developer', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Egypt'],
  authors: [{ name: 'Omar Monib' }],
  creator: 'Omar Monib',
  openGraph: {
    title: 'Omar Monib | Frontend Developer',
    description: 'Building fast, production-grade web apps with React and Next.js.',
    url: 'https://omar-monib.vercel.app',
    siteName: 'Omar Monib Portfolio',
    images: [
      {
        url: 'https://omar-monib.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Omar Monib - Frontend Developer',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Omar Monib | Frontend Developer',
    description: 'Building fast, production-grade web apps with React and Next.js.',
    images: ['https://omar-monib.vercel.app/og-image.png'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html data-scroll-behavior="smooth" lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-md focus:shadow-lg"
        >
          Skip to main content
        </a>
        <ThemeProvider>
          <Navbar />
          <main id="main-content">
            {children}
          </main>
          <Footer />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}