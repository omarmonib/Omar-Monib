import type { Metadata } from 'next';
import { HomeSection } from '@/components/home';

export const metadata: Metadata = {
  title: 'Omar Monib | Frontend Developer & Network Engineer',
  description:
    'Frontend Developer specializing in React.js and Next.js with 6+ years of network engineering experience at Vodafone. Building high-performance web applications.',
};

export default function HomePage() {
  return <HomeSection />;
}
