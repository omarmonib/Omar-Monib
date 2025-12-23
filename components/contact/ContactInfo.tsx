'use client';

import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

const contactInfo = [
  { icon: FiMail, label: 'Email', value: 'omar.monib.03@gmail.com' },
  { icon: FiMapPin, label: 'Location', value: 'Alexandria, Egypt' },
  { icon: FiPhone, label: 'Phone', value: '+20 101 009 4107' },
];

const ContactInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h3 className="text-2xl font-semibold mb-6 text-foreground">Contact Information</h3>
      <div className="space-y-6">
        {contactInfo.map((info, idx) => {
          const Icon = info.icon;
          return (
            <div key={idx} className="flex items-start space-x-4">
              <div className="p-3 rounded-lg bg-accent/20 flex items-center justify-center bg-background-secondary shadow-md">
                <Icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="font-medium text-foreground">{info.label}</h4>
                <p className="text-muted">{info.value}</p>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ContactInfo;
