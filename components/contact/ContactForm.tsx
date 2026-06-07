'use client';

import { motion } from 'framer-motion';
import { FiCheck, FiX } from 'react-icons/fi';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import  { useContactForm }  from '@/hooks/useContactForm';
const ContactForm = () => {
  const { form, onSubmit, submitted, serverError, isSubmitting } = useContactForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  return (
    <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-border-accent/20 hover:border-accent/50 bg-card p-10">
      <motion.form
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-foreground">
          Send Me a Message
        </h3>

        <div className="space-y-6">
          {/* NAME */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium">
              Full Name *
            </Label>
            <Input
              id="name"
              placeholder="Your name"
              aria-describedby={errors.name ? 'name-error' : undefined}
              aria-invalid={!!errors.name}
              disabled={isSubmitting}
              {...register('name')}
            />
            {errors.name && (
              <p id="name-error" role="alert" className="text-xs text-red-500">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* EMAIL */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">
              Email Address *
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              aria-describedby={errors.email ? 'email-error' : undefined}
              aria-invalid={!!errors.email}
              disabled={isSubmitting}
              {...register('email')}
            />
            {errors.email && (
              <p id="email-error" role="alert" className="text-xs text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* MESSAGE */}
          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium">
              Your Message *
            </Label>
            <Textarea
              id="message"
              placeholder="Tell me about your project or how I can help..."
              rows={5}
              aria-describedby={errors.message ? 'message-error' : undefined}
              aria-invalid={!!errors.message}
              disabled={isSubmitting}
              className="resize-none"
              {...register('message')}
            />
            {errors.message && (
              <p id="message-error" role="alert" className="text-xs text-red-500">
                {errors.message.message}
              </p>
            )}
          </div>

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
            I&apos;ll respond within 24–48 hours
          </p>
        </div>
      </motion.form>
    </div>
  );
};

export default ContactForm;
