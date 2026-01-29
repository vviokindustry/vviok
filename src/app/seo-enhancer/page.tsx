'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { getSeoSuggestions } from '@/app/actions';
import { Loader2, Sparkles } from 'lucide-react';
import type { SEOOutput } from '@/ai/flows/seo-content-enhancement';

const formSchema = z.object({
  pageContent: z.string().min(50, { message: 'Content must be at least 50 characters.' }),
  targetKeywords: z.string().min(3, { message: 'Please enter at least one keyword.' }),
});

export default function SeoEnhancerPage() {
  const { toast } = useToast();
  const [suggestions, setSuggestions] = useState<SEOOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { pageContent: '', targetKeywords: '' },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setSuggestions(null);

    const result = await getSeoSuggestions(values);

    if (result.success && result.data) {
      setSuggestions(result.data);
      toast({
        title: 'Suggestions Generated!',
        description: 'AI-powered SEO improvements are ready for review.',
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Error Generating Suggestions',
        description: result.message,
      });
    }
    setIsLoading(false);
  }

  return (
    <div>
      <section className="bg-primary/5 py-12 md:py-20 text-center">
        <div className="container">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">AI SEO Content Enhancer</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Leverage generative AI to analyze your content and get expert suggestions for improving search engine rankings.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-4xl">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Analyze Your Content</CardTitle>
              <CardDescription>
                Paste your page content and target keywords below to get started.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="pageContent"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Page Content</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Paste the full text content from your web page here..."
                            className="min-h-[200px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="targetKeywords"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Target Keywords</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., industrial air filters, hepa filter manufacturer" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <Sparkles className="mr-2 h-4 w-4" />
                        Generate Suggestions
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {suggestions && (
            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="font-headline text-2xl flex items-center">
                  <Sparkles className="mr-2 h-6 w-6 text-primary" />
                  AI-Powered SEO Suggestions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-lg max-w-none dark:prose-invert whitespace-pre-wrap font-body">
                  {suggestions.suggestions}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>
    </div>
  );
}
