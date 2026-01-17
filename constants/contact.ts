/**
 * Social media and contact information
 */
export const CONTACT_INFO = {
  email: 'omar.monib91@gmail.com',
  phone: '+201010094107',
  location: 'Egypt',
} as const;

/**
 * Social media links
 */
export const SOCIAL_LINKS = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/omar-monib/',
    icon: 'linkedin',
    label: 'Connect with me on LinkedIn',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/omarmonib',
    icon: 'github',
    label: 'Check out my projects on GitHub',
  },
  {
    name: 'Twitter',
    url: 'https://x.com/omar_monib1',
    icon: 'twitter',
    label: 'Follow me on Twitter/X',
  },
] as const;

/**
 * Get all social links
 */
export const getAllSocialLinks = (): typeof SOCIAL_LINKS => {
  return SOCIAL_LINKS;
};

/**
 * Get contact information
 */
export const getContactInfo = (): typeof CONTACT_INFO => {
  return CONTACT_INFO;
};
