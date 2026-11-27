import type { Metadata } from 'next';
import { HomeSection } from '@/components/home';

export const metadata: Metadata = {
  title: 'Omar Monib | Frontend Developer | Telecom Engineer',
  description:
    'Frontend Developer specializing in React.js and Next.js with 7+ years of telecom engineering experience on Vodafone projects. Building high-performance web applications.',
};

export default function HomePage() {
  return <HomeSection />;
}
