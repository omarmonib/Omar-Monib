'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiCheck, FiX } from 'react-icons/fi';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError(true);
      return;
    }

    setIsLoading(true);
    console.log('Form submitted:', formData);

    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setIsLoading(false);
      setTimeout(() => setSubmitted(false), 4000);
    }, 800);
  };

  return (
    <motion.form
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      onSubmit={handleSubmit}
      className="bg-background-secondary/50 dark:bg-background/50 backdrop-blur-sm border border-accent/10 p-6 sm:p-8 md:p-10 rounded-xl md:rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
    >
      <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-foreground">Send Me a Message</h3>

      <div className="space-y-6">
        {/* NAME */}
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Label htmlFor="name" className="text-sm font-medium">
            Full Name *
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            className="transition-all duration-200"
            disabled={isLoading}
          />
        </motion.div>

        {/* EMAIL */}
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
        >
          <Label htmlFor="email" className="text-sm font-medium">
            Email Address *
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={handleChange}
            className="transition-all duration-200"
            disabled={isLoading}
          />
        </motion.div>

        {/* MESSAGE */}
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Label htmlFor="message" className="text-sm font-medium">
            Your Message *
          </Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell me about your project or how I can help..."
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="transition-all duration-200 resize-none"
            disabled={isLoading}
          />
        </motion.div>

        {/* ERROR MESSAGE */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-2 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-sm"
          >
            <FiX className="w-5 h-5 shrink-0" />
            <span>Please fill in all fields</span>
          </motion.div>
        )}

        {/* SUCCESS MESSAGE */}
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-2 p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-sm font-medium"
          >
            <FiCheck className="w-5 h-5 shrink-0" />
            <span>Message sent successfully! I&apos;ll get back to you soon.</span>
          </motion.div>
        )}

        {/* SUBMIT BUTTON */}
        <motion.div
          whileHover={!isLoading ? { scale: 1.02 } : {}}
          whileTap={!isLoading ? { scale: 0.98 } : {}}
        >
          <Button
            type="submit"
            size="lg"
            disabled={isLoading}
            className="w-full text-base font-semibold transition-all duration-300"
          >
            {isLoading ? (
              <motion.span
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                Sending...
              </motion.span>
            ) : (
              'Send Message'
            )}
          </Button>
        </motion.div>

        <p className="text-xs text-muted text-center pt-2">I&apos;ll respond within 24-48 hours</p>
      </div>
    </motion.form>
  );
};

export default ContactForm;
