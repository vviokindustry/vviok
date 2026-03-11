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
import { Mail, MapPin, Phone, Loader2 } from 'lucide-react';

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
    try {
      const result = await submitContactForm(values);
      if (result.success) {
        toast({
          title: 'Inquiry Sent!',
          description: result.message,
        });
        form.reset();
      } else {
        toast({
          variant: 'destructive',
          title: 'Submission Failed',
          description: result.message,
        });
      }
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Network Error',
        description: 'Could not connect to the server. Please check your internet and try again.',
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
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto font-medium">
            We're here to help. Reach out to us for inquiries, quotes, or any questions about our filtration solutions.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <Card className="border-2 shadow-xl rounded-[2rem] overflow-hidden">
                <CardHeader className="bg-slate-50 border-b py-8">
                  <CardTitle className="font-headline text-2xl font-black uppercase tracking-tight">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-bold uppercase text-[10px] tracking-widest text-slate-500">Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter your name" className="h-12 rounded-xl" {...field} />
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
                              <FormLabel className="font-bold uppercase text-[10px] tracking-widest text-slate-500">Email Address</FormLabel>
                              <FormControl>
                                <Input placeholder="email@example.com" className="h-12 rounded-xl" {...field} />
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
                            <FormLabel className="font-bold uppercase text-[10px] tracking-widest text-slate-500">Company Name (Optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="Your Company Ltd." className="h-12 rounded-xl" {...field} />
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
                            <FormLabel className="font-bold uppercase text-[10px] tracking-widest text-slate-500">Your Message / Inquiry (Min 10 chars)</FormLabel>
                            <FormControl>
                              <Textarea placeholder="Tell us about your requirements..." className="min-h-[150px] rounded-xl" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full h-14 rounded-xl font-black uppercase tracking-widest text-sm shadow-lg shadow-primary/20" 
                        disabled={form.formState.isSubmitting}
                      >
                        {form.formState.isSubmitting ? (
                          <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...</>
                        ) : (
                          'Send Inquiry'
                        )}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
            
            <div className="lg:col-span-2 space-y-8">
              <div className="p-8 bg-slate-50 rounded-[2rem] border-2 border-slate-100">
                <h3 className="font-headline text-2xl font-black uppercase tracking-tight mb-8">Contact Information</h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-slate-600 font-medium">45, Pushkar Cottage, Near Ramol Toll Plaza, Ahmedabad - 382415, Gujarat, India</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <a href="mailto:vviokindustry2021@gmail.com" className="text-slate-600 font-bold hover:text-primary transition-colors">vviokindustry2021@gmail.com</a>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <a href="tel:+919106472588" className="text-slate-600 font-bold hover:text-primary transition-colors">+91 91064 72588</a>
                  </li>
                </ul>
                
                <div className="mt-10">
                  <Button asChild className="w-full h-14 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-xl font-black uppercase tracking-widest text-xs">
                    <a href="https://wa.me/919106472588" target="_blank" rel="noopener noreferrer">
                      <WhatsappIcon className="mr-2 h-6 w-6 fill-current"/>
                      Inquire on WhatsApp
                    </a>
                  </Button>
                </div>
              </div>

              <div className="p-4 bg-white rounded-[2rem] border-2 border-slate-100 shadow-lg overflow-hidden">
                <div className="aspect-video rounded-[1.5rem] overflow-hidden">
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