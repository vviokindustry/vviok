'use server';

import { z } from 'zod';
import { analyzeAndSuggestSEO, type SEOInput } from '@/ai/flows/seo-content-enhancement';

const contactFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  company: z.string().optional(),
  message: z.string(),
});

export async function submitContactForm(values: z.infer<typeof contactFormSchema>) {
  try {
    // Here you would typically send an email, save to a database, etc.
    // For this example, we'll just log the data to the console.
    console.log('New contact form submission:', values);

    // Simulate a delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Check for a specific test case to simulate an error
    if (values.email.includes('fail')) {
        throw new Error('This is a simulated failure.');
    }

    return { success: true, message: 'Form submitted successfully.' };
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
