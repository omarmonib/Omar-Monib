import type { Metadata } from 'next';
import { ContactSection } from '@/components/contact';

export const metadata: Metadata = {
  title: 'Contact | Omar Monib',
  description:
    'Get in touch with Omar Monib for freelance projects, full-time opportunities, or just to chat about tech. Available for on-site, hybrid, and remote roles.',
};

export default function ContactPage() {
  return <ContactSection />;
}
