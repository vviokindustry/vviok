'use server';

import { z } from 'zod';
import { analyzeAndSuggestSEO, type SEOInput } from '@/ai/flows/seo-content-enhancement';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const contactFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  company: z.string().optional(),
  message: z.string(),
});

export async function submitContactForm(values: z.infer<typeof contactFormSchema>) {
  try {
    console.log('New contact form submission:', values);

    const { name, email, company, message } = values;

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: 'VVIOK Inquiry <onboarding@resend.dev>', // Resend standard sender for testing
      to: ['sales.vviok@gmail.com'],
      subject: `New Business Inquiry from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not Provided'}</p>
        <p><strong>Message:</strong></p>
        <div style="padding: 15px; background-color: #f4f4f4; border-radius: 5px;">
          ${message.replace(/\n/g, '<br/>')}
        </div>
        <hr/>
        <p style="font-size: 12px; color: #666;">This inquiry was sent from the VVIOK Industry website contact form.</p>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      // Even if Resend fails (e.g. missing API key), we still have the console log for safety during prototype
      return { success: false, message: 'Could not send email. Please check API configuration.' };
    }

    return { success: true, message: 'Thank you! Your inquiry has been sent to sales.vviok@gmail.com' };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return { success: false, message: 'Failed to submit form. Please try again later.' };
  }
}

export async function getSeoSuggestions(input: SEOInput) {
  try {
    const result = await analyzeAndSuggestSEO(input);
    return { success: true, data: result };
  } catch (error) {
    console.error('Error getting SEO suggestions:', error);
    return { success: false, message: 'Failed to get SEO suggestions from AI.' };
  }
}