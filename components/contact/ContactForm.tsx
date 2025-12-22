'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import InputField from './InputField';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <motion.form
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4 }}
      onSubmit={handleSubmit}
      className="bg-background-secondary dark:bg-background p-8 rounded-xl shadow-xl"
    >
      <div className="space-y-6">
        <InputField label="Full Name" name="name" value={formData.name} onChange={handleChange} />
        <InputField
          label="Email Address"
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
        />
        <InputField
          label="Your Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          type="textarea"
        />

        {submitted && (
          <p className="text-green-500 font-medium text-center">Message sent successfully!</p>
        )}

        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-accent hover:bg-accent/90 text-background font-medium py-2 px-4 rounded-lg transition duration-200"
        >
          Send Message
        </motion.button>
      </div>
    </motion.form>
  );
};

export default ContactForm;
