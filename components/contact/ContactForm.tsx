'use client';

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { FiCheck, FiX } from 'react-icons/fi';
import { useState } from 'react';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import type { ContactApiResponse } from '@/types/contact';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setServerError(null);

    // Manual Zod validation
    const result = contactSchema.safeParse(data);
    if (!result.success) {
      result.error.errors.forEach((err) => {
        setError(err.path[0] as keyof ContactFormData, {
          message: err.message,
        });
      });
      return;
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const response: ContactApiResponse = await res.json();

      if (!res.ok || !response.success) {
        setServerError(response.error ?? 'Something went wrong. Please try again.');
        return;
      }

      setSubmitted(true);
      reset();
      setTimeout(() => setSubmitted(false), 4000);
    } catch {
      setServerError('Something went wrong. Please try again.');
    }
  };
  return (
    <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-border hover:border-accent/40 bg-card p-10">
      <motion.form
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-foreground">
          Send Me a Message
        </h3>

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
              placeholder="Your name"
              {...register('name')}
              className="transition-all duration-200"
              disabled={isSubmitting}
            />
            {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
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
              type="email"
              placeholder="your.email@example.com"
              {...register('email')}
              className="transition-all duration-200"
              disabled={isSubmitting}
            />
            {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
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
              placeholder="Tell me about your project or how I can help..."
              rows={5}
              {...register('message')}
              className="transition-all duration-200 resize-none"
              disabled={isSubmitting}
            />
            {errors.message && <p className="text-xs text-red-500">{errors.message.message}</p>}
          </motion.div>

          {/* SERVER ERROR */}
          {serverError && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-sm"
            >
              <FiX className="w-5 h-5 shrink-0" />
              <span>{serverError}</span>
            </motion.div>
          )}

          {/* SUCCESS */}
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-sm font-medium"
            >
              <FiCheck className="w-5 h-5 shrink-0" />
              <span>Message sent successfully! I&apos;ll get back to you soon.</span>
            </motion.div>
          )}

          {/* SUBMIT */}
          <motion.div whileHover={!isSubmitting ? { scale: 1.02 } : {}}>
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full text-base font-semibold transition-all duration-300"
            >
              {isSubmitting ? (
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

          <p className="text-xs text-muted text-center pt-2">
            I&apos;ll respond within 24-48 hours
          </p>
        </div>
      </motion.form>
    </div>
  );
};

export default ContactForm;
