import type { Metadata } from 'next';
import { About } from '@/components/about';

export const metadata: Metadata = {
  title: 'About | Omar Monib',
  description:
    'Learn about Omar Monib — Frontend Developer and Electronics & Communications Engineer with 7+ years of experience at Vodafone and 3+ years of freelance development.',
};

export default function AboutPage() {
  return <About />;
}
