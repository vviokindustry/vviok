'use server';

/**
 * @fileOverview A Genkit flow for analyzing page content and suggesting SEO improvements based on target keywords.
 *
 * - analyzeAndSuggestSEO - A function that handles the SEO analysis and suggestion process.
 * - SEOInput - The input type for the analyzeAndSuggestSEO function.
 * - SEOOutput - The return type for the analyzeAndSuggestSEO function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SEOInputSchema = z.object({
  pageContent: z
    .string()
    .describe('The content of the page to be analyzed for SEO.'),
  targetKeywords: z
    .string()
    .describe('The target keywords for which the page should be optimized.'),
});
export type SEOInput = z.infer<typeof SEOInputSchema>;

const SEOOutputSchema = z.object({
  suggestions: z
    .string()
    .describe(
      'SEO improvement suggestions for the page content, including heading and copy improvements.'
    ),
});
export type SEOOutput = z.infer<typeof SEOOutputSchema>;

export async function analyzeAndSuggestSEO(input: SEOInput): Promise<SEOOutput> {
  return analyzeAndSuggestSEOFlow(input);
}

const prompt = ai.definePrompt({
  name: 'seoContentEnhancementPrompt',
  input: {schema: SEOInputSchema},
  output: {schema: SEOOutputSchema},
  prompt: `You are an SEO expert. Analyze the provided page content and suggest improvements based on the target keywords.

Page Content: {{{pageContent}}}
Target Keywords: {{{targetKeywords}}}

Provide SEO improvement suggestions, including specific recommendations for headings and copy, to optimize the page for better search engine rankings. Focus on making the content more relevant and appealing to both search engines and the target audience.`,
});

const analyzeAndSuggestSEOFlow = ai.defineFlow(
  {
    name: 'analyzeAndSuggestSEOFlow',
    inputSchema: SEOInputSchema,
    outputSchema: SEOOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
