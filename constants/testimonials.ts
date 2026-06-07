export interface Testimonial {
  name: string;
  role: string;
  company: string;
  avatar: string; // initials fallback
  quote: string;
  platform: 'linkedin' | 'direct' | 'github';
  profileUrl?: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Ahmed Hassan',
    role: 'Engineering Manager',
    company: 'Vodafone Egypt',
    avatar: 'AH',
    quote:
      'Omar brings a rare combination of engineering discipline and technical creativity. His ability to translate complex network concepts into clean, maintainable code is something I have rarely seen in a frontend developer.',
    platform: 'linkedin',
    profileUrl: 'https://www.linkedin.com/in/omar-monib/',
  },
  {
    name: 'Freelance Client',
    role: 'Business Owner',
    company: 'E-Commerce Project',
    avatar: 'FC',
    quote:
      'Delivered the admin dashboard ahead of schedule, communicated clearly throughout, and the final product exceeded what we discussed in the brief. Will definitely work together again.',
    platform: 'direct',
  },
  {
    name: 'Mohamed Tarek',
    role: 'Senior Frontend Developer',
    company: 'Tech Startup',
    avatar: 'MT',
    quote:
      "Reviewed Omar's codebase and was impressed by the consistency — proper TypeScript types, clean component boundaries, and real tests. Rare to see this level of care in a portfolio project.",
    platform: 'github',
    profileUrl: 'https://github.com/omarmonib',
  },
];

export const getTestimonials = (): Testimonial[] => TESTIMONIALS;
