import type { Metadata } from 'next';
import { About } from '@/components/about';

export const metadata: Metadata = {
  title: 'About | Omar Monib',
  description:
    'Learn about Omar Monib — Self-taught frontend developer and Electronics & Communications Engineer with 7+ years of telecom experience on Vodafone projects.',
};

export default function AboutPage() {
  return <About />;
}
