'use server';

import { z } from 'zod';
import { analyzeAndSuggestSEO, type SEOInput } from '@/ai/flows/seo-content-enhancement';
import { Resend } from 'resend';

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

const contactFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  company: z.string().optional(),
  message: z.string(),
});

export async function submitContactForm(values: z.infer<typeof contactFormSchema>) {
  try {
    const { name, email, company, message } = values;

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is missing');
      return { success: false, message: 'Server error: API Key missing. Please check .env file.' };
    }

    // Attempt to send the email
    // IMPORTANT: On the Resend free tier, you can only send to your own registered email.
    // If sales.vviok@gmail.com is not your Resend account email, this might fail unless domain is verified.
    const response = await resend.emails.send({
      from: 'VVIOK Website <onboarding@resend.dev>',
      to: ['sales.vviok@gmail.com'],
      subject: `New Lead: Business Inquiry from ${name}`,
      html: `
        <div style="font-family: sans-serif; color: #333; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
          <h2 style="color: #a5be1d; border-bottom: 2px solid #a5be1d; padding-bottom: 10px;">New Business Inquiry</h2>
          <p style="font-size: 16px;">You have received a new lead from the VVIOK Industry website.</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 30%;">Name:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Company:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${company || 'Not Provided'}</td>
            </tr>
          </table>

          <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-radius: 5px; border-left: 4px solid #a5be1d;">
            <p style="font-weight: bold; margin-bottom: 5px;">Message:</p>
            <p style="margin: 0; line-height: 1.6;">${message.replace(/\n/g, '<br/>')}</p>
          </div>

          <p style="font-size: 12px; color: #999; margin-top: 30px; text-align: center;">
            This email was sent automatically from the VVIOK Industry contact form.
          </p>
        </div>
      `,
    });

    if (response.error) {
      console.error('Resend Error:', response.error);
      return { 
        success: false, 
        message: response.error.message || 'Failed to send email. Ensure your Resend account is active.' 
      };
    }

    return { success: true, message: 'Thank you! Your inquiry has been sent to our sales team.' };
  } catch (error: any) {
    console.error('Unexpected error in submitContactForm:', error);
    return { success: false, message: error.message || 'An unexpected error occurred.' };
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
