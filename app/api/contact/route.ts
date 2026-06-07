import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { supabase } from '@/lib/supabase';
import type { ContactFormPayload, ContactApiResponse } from '@/types/contact';

export async function POST(req: NextRequest) {
  // Guard: catch missing env vars before they cause a cryptic 500
  if (
    !process.env.RESEND_API_KEY ||
    !process.env.RESEND_FROM_EMAIL ||
    !process.env.RESEND_TO_EMAIL
  ) {
    console.error('Contact API: missing Resend environment variables');
    return NextResponse.json<ContactApiResponse>(
      { success: false, error: 'Server configuration error. Please try again later.' },
      { status: 500 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body: ContactFormPayload = await req.json();
    const { name, email, message } = body;

    // Server-side validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json<ContactApiResponse>(
        { success: false, error: 'All fields are required.' },
        { status: 400 }
      );
    }

    // Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json<ContactApiResponse>(
        { success: false, error: 'Invalid email address.' },
        { status: 400 }
      );
    }

    // 1. Save to Supabase
    const { error: dbError } = await supabase
      .from('contact_messages')
      .insert({ name, email, message });

    if (dbError) {
      console.error('Supabase error:', dbError.message);
      // Don't block the user — attempt email anyway
    }

    // 2. Send email via Resend
    const { error: emailError } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: process.env.RESEND_TO_EMAIL,
      subject: `Portfolio contact from ${name}`,
      html: `
        <h2>New message from your portfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    });

    if (emailError) {
      console.error('Resend error:', emailError.message);
      return NextResponse.json<ContactApiResponse>(
        { success: false, error: 'Failed to send email. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json<ContactApiResponse>({ success: true }, { status: 200 });
  } catch (err) {
    console.error('Contact API unexpected error:', err);
    return NextResponse.json<ContactApiResponse>(
      { success: false, error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
