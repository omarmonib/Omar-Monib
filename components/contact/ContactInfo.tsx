'use client';

import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone, FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi';
import { SOCIAL_LINKS, CONTACT_INFO } from '@/constants/contact';

const contactInfoItems = [
  { icon: FiMail, label: 'Email', value: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
  { icon: FiPhone, label: 'Phone', value: CONTACT_INFO.phone, href: `tel:${CONTACT_INFO.phone}` },
  { icon: FiMapPin, label: 'Location', value: CONTACT_INFO.location },
];

const iconMap: Record<string, React.FC<any>> = {
  linkedin: FiLinkedin,
  github: FiGithub,
  twitter: FiTwitter,
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4 },
  }),
};

const ContactInfo = () => {
  return (
    <div className="space-y-10">
      {/* Contact Information */}
      <div>
        <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-foreground">
          Contact Information
        </h3>
        <div className="space-y-5">
          {contactInfoItems.map((info, idx) => {
            const Icon = info.icon;
            const content = (
              <motion.div
                key={idx}
                custom={idx}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                className="flex items-start gap-4 group"
              >
                <div className="mt-1 flex-shrink-0 p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-foreground text-sm md:text-base">
                    {info.label}
                  </h4>
                  <p className="text-muted text-sm md:text-base break-words">{info.value}</p>
                </div>
              </motion.div>
            );
            return info.href ? (
              <a key={idx} href={info.href} className="block hover:opacity-80 transition-opacity">
                {content}
              </a>
            ) : (
              content
            );
          })}
        </div>
      </div>

      {/* Social Links */}
      <div>
        <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-foreground">Connect With Me</h3>
        <div className="flex flex-wrap gap-4">
          {SOCIAL_LINKS.map((link, idx) => {
            const Icon = iconMap[link.icon] || FiLinkedin;
            return (
              <motion.a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                title={link.label}
                custom={idx}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-accent/10 hover:bg-accent hover:text-background hover:shadow-lg transition-all duration-300 font-medium text-sm md:text-base"
              >
                <Icon className="w-5 h-5" />
                <span>{link.name}</span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
