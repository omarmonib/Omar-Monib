import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { supabase } from '@/lib/supabase';
import type { ContactFormPayload, ContactApiResponse } from '@/types/contact';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body: ContactFormPayload = await req.json();
    const { name, email, message } = body;

    // Basic server-side validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json<ContactApiResponse>(
        { success: false, error: 'All fields are required.' },
        { status: 400 }
      );
    }

    // 1. Save to Supabase
    const { error: dbError } = await supabase
      .from('contact_messages')
      .insert({ name, email, message });

    if (dbError) {
      console.error('Supabase error:', dbError);
      return NextResponse.json<ContactApiResponse>(
        { success: false, error: 'Failed to save message.' },
        { status: 500 }
      );
    }

    // 2. Send email via Resend
    const { error: emailError } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: process.env.RESEND_TO_EMAIL!,
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
      console.error('Resend error:', emailError);
      // Message was saved — don't fail the whole request
      return NextResponse.json<ContactApiResponse>({ success: true }, { status: 200 });
    }

    return NextResponse.json<ContactApiResponse>({ success: true }, { status: 200 });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json<ContactApiResponse>(
      { success: false, error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
