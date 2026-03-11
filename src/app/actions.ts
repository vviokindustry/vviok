'use server';

import { z } from 'zod';
import { analyzeAndSuggestSEO, type SEOInput } from '@/ai/flows/seo-content-enhancement';
import { Resend } from 'resend';

const contactFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  company: z.string().optional(),
  message: z.string(),
});

export async function submitContactForm(values: z.infer<typeof contactFormSchema>) {
  try {
    const { name, email, company, message } = values;

    // Accessing the API key from environment variables
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error('re_KWw5KbaL_8z68wvuHTR93LMyBExwU5iyh');
      return { 
        success: false, 
        message: 'Server configuration error: Resend API Key is missing in .env file.' 
      };
    }

    // Initialize Resend with the provided key
    const resend = new Resend(apiKey);

    // Attempt to send the email
    // IMPORTANT: On Resend Free Tier, you can only send to the email you signed up with.
    const { data, error } = await resend.emails.send({
      from: 'VVIOK Website <onboarding@resend.dev>',
      to: ['sales.vviok@gmail.com'],
      replyTo: email,
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

    if (error) {
      console.error('Resend API Error:', error);
      return { 
        success: false, 
        message: `Resend API Error: ${error.message}` 
      };
    }

    return { success: true, message: 'Thank you! Your inquiry has been sent to our sales team.' };
  } catch (err: any) {
    console.error('Server Action Error:', err);
    return { success: false, message: err.message || 'A system error occurred while processing your request.' };
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
