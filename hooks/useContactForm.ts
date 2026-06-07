'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import type { ContactApiResponse } from '@/types/contact';

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export function useContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const form = useForm<ContactFormData>();
  const {
    setError,
    reset,
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (data: ContactFormData) => {
    setServerError(null);

    const result = contactSchema.safeParse(data);
    if (!result.success) {
      result.error.errors.forEach((err) => {
        setError(err.path[0] as keyof ContactFormData, { message: err.message });
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

  return { form, onSubmit, submitted, serverError, isSubmitting };
}
