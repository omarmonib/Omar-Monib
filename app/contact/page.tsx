import type { Metadata } from 'next';
import { ContactSection } from '@/components/contact';

export const metadata: Metadata = {
  title: 'Contact | Omar Monib',
  description:
    'Contact Omar Monib about junior frontend roles or web projects. Open to remote, hybrid and on-site work.',
};

export default function ContactPage() {
  return <ContactSection />;
}
