'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { submitContactForm } from '@/app/actions';
import { WhatsappIcon } from '@/components/icons';
import { Mail, MapPin, Phone } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  company: z.string().optional(),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export default function ContactPage() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '', email: '', company: '', message: '' },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const result = await submitContactForm(values);
    if (result.success) {
      toast({
        title: 'Inquiry Sent!',
        description: "Thank you for your message. We'll get back to you shortly.",
      });
      form.reset();
    } else {
      toast({
        variant: 'destructive',
        title: 'Something went wrong.',
        description: result.message,
      });
    }
  }

  const encodedAddress = encodeURIComponent("45, Pushkar Cottage, Near Ramol Toll Plaza, Ahmedabad - 382415, Gujarat, India");
  const mapUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <div>
      <section className="bg-primary/5 py-12 md:py-20 text-center">
        <div className="container">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">Contact Us</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            We're here to help. Reach out to us for inquiries, quotes, or any questions about our filtration solutions.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address</FormLabel>
                              <FormControl>
                                <Input placeholder="john.doe@company.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company Name (Optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="Your Company Inc." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Message / Inquiry</FormLabel>
                            <FormControl>
                              <Textarea placeholder="Tell us about your requirements..." className="min-h-[120px]" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit" disabled={form.formState.isSubmitting}>
                        {form.formState.isSubmitting ? 'Sending...' : 'Send Inquiry'}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="font-headline text-2xl font-semibold">Contact Information</h3>
                <ul className="mt-4 space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">45, Pushkar Cottage, Near Ramol Toll Plaza, Ahmedabad - 382415, Gujarat, India</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                    <a href="mailto:vviokindustry2021@gmail.com" className="text-muted-foreground transition hover:text-primary">vviokindustry2021@gmail.com</a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                    <a href="tel:+919106472588" className="text-muted-foreground transition hover:text-primary">+91 91064 72588</a>
                  </li>
                </ul>
              </div>
               <div>
                  <Button asChild className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white">
                    <a href="https://wa.me/919106472588" target="_blank" rel="noopener noreferrer">
                      <WhatsappIcon className="mr-2 h-5 w-5"/>
                      Inquire on WhatsApp
                    </a>
                  </Button>
               </div>
              <div>
                <h3 className="font-headline text-2xl font-semibold">Our Location</h3>
                <div className="mt-4 aspect-video rounded-lg overflow-hidden shadow-md border bg-slate-50">
                  <iframe
                    src={mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="VVIOK Industry Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
