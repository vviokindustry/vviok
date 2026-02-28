
import { products, productCategories } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ChevronRight, Home, Package, Share2, CheckCircle2, ArrowRight, HelpCircle } from 'lucide-react';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { resolveImageSource } from '@/lib/utils';
import { ProductImageGallery } from '@/components/product-image-gallery';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ category: string; subcategory: string }> }): Promise<Metadata> {
  const { category, subcategory } = await params;
  const currentCategory = productCategories.find(cat => cat.slug === category);
  const currentSubcategory = currentCategory?.subcategories?.find(sub => sub.slug === subcategory);
  const subcategoryProducts = products[subcategory] || [];
  const product = subcategoryProducts[0];

  if (!product) return {};

  return {
    title: product.metaTitle || `${product.name} - VVIOK Industry`,
    description: product.metaDescription || product.description,
    keywords: product.metaKeywords,
  };
}

export async function generateStaticParams() {
  const params: { category: string; subcategory: string }[] = [];
  productCategories.forEach(cat => {
    if (cat.subcategories) {
      cat.subcategories.forEach(sub => {
        params.push({ category: cat.slug, subcategory: sub.slug });
      });
    }
  });
  return params;
}

export default async function SubcategoryPage({ params }: { params: Promise<{ category: string; subcategory: string }> }) {
  const { category, subcategory } = await params;
  const currentCategory = productCategories.find(cat => cat.slug === category);
  const currentSubcategory = currentCategory?.subcategories?.find(sub => sub.slug === subcategory);
  
  if (!currentCategory || !currentSubcategory) {
    return notFound();
  }

  const subcategoryProducts = products[subcategory] || [];
  const product = subcategoryProducts[0];

  if (!product) {
    return notFound();
  }

  const primaryImage = resolveImageSource(product.imageId, PlaceHolderImages);
  const galleryImages = product.imageIds 
    ? product.imageIds.map(id => resolveImageSource(id, PlaceHolderImages))
    : [primaryImage];

  const relatedSubcategories = currentCategory.subcategories?.filter(sub => sub.slug !== subcategory) || [];

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-slate-50 border-b">
        <div className="container py-4 flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-primary flex items-center gap-2 transition-colors">
            <Home className="h-3.5 w-3.5" /> Home
          </Link>
          <ChevronRight className="h-3 w-3 opacity-30" />
          <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
          <ChevronRight className="h-3 w-3 opacity-30" />
          <Link href={`/products/${currentCategory.slug}`} className="hover:text-primary transition-colors">{currentCategory.name}</Link>
          <ChevronRight className="h-3 w-3 opacity-30" />
          <span className="text-primary">{currentSubcategory.name}</span>
        </div>
      </div>

      <section className="py-12 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <ProductImageGallery images={galleryImages} alt={product.name} />

            <div className="flex flex-col">
              <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-4">Industrial Grade Excellence</span>
              <h1 className="font-headline text-3xl md:text-5xl font-bold text-slate-900 leading-[1.1] mb-8 tracking-tighter">
                {product.name}
              </h1>
              
              <div className="space-y-8">
                <div className="prose prose-slate max-w-none">
                  <div className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium whitespace-pre-wrap">
                    {product.description || `High-performance industrial solution designed for ${product.application.toLowerCase()}.`}
                  </div>
                </div>

                {product.features && (
                  <div className="space-y-3 pt-8 border-t">
                    <p className="font-black text-slate-900 uppercase text-[10px] tracking-widest mb-4">Core Performance Features</p>
                    <div className="grid gap-3">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-base md:text-lg text-slate-700 font-bold">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-12 pt-10 border-t">
                <Button asChild size="lg" className="flex-1 bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest rounded-xl h-16 shadow-lg shadow-primary/10 text-sm">
                  <Link href="/contact">
                    <Package className="mr-2 h-5 w-5" /> Send Inquiry
                  </Link>
                </Button>
                <Button variant="outline" size="icon" className="h-16 w-16 rounded-xl border-2 border-slate-100">
                  <Share2 className="h-6 w-6 text-slate-400" />
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="w-full justify-start bg-transparent border-b-2 border-slate-100 rounded-none h-auto p-0 gap-10">
                <TabsTrigger value="description" className="rounded-none border-b-4 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none font-black uppercase tracking-[0.2em] text-[10px] py-6 px-0">Detailed Specs</TabsTrigger>
                <TabsTrigger value="info" className="rounded-none border-b-4 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none font-black uppercase tracking-[0.2em] text-[10px] py-6 px-0">Technical Info</TabsTrigger>
              </TabsList>
              <div className="py-12">
                <TabsContent value="description" className="mt-0 outline-none">
                  <div className="max-w-4xl space-y-8">
                    <div className="text-slate-600 text-lg font-medium leading-relaxed whitespace-pre-wrap">
                      {product.detailedSpecs || `The ${product.name} is the pinnacle of engineering for ${product.application.toLowerCase()}.`}
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="info" className="mt-0 outline-none">
                  <div className="max-w-4xl">
                    <h4 className="font-black text-slate-900 mb-8 uppercase tracking-widest text-[10px]">Product Specifications</h4>
                    <div className="rounded-[1.5rem] shadow-xl shadow-slate-200 border-2 border-slate-100 overflow-hidden bg-white">
                      <Table>
                        <TableBody>
                          {product.specifications ? (
                            Object.entries(product.specifications).map(([key, value]) => (
                              <TableRow key={key} className="hover:bg-slate-50 border-slate-100 transition-colors">
                                <TableCell className="font-black text-slate-900 bg-slate-50/50 w-2/5 py-4 px-6 text-[10px] uppercase tracking-widest border-r">{key}</TableCell>
                                <TableCell className="text-slate-700 py-4 px-6 text-base font-bold">{value}</TableCell>
                              </TableRow>
                            ))
                          ) : (
                            <TableRow>
                              <TableCell className="text-center py-8 text-slate-400">Standard industrial specifications apply.</TableCell>
                            </TableRow>
                          )}
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {product.faqs && product.faqs.length > 0 && (
        <section className="py-20 bg-slate-50">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-primary/10 text-primary mb-4">
                  <HelpCircle className="h-8 w-8" />
                </div>
                <h2 className="font-headline text-3xl md:text-4xl font-bold text-slate-900 tracking-tighter">
                  Frequently Asked Questions
                </h2>
                <p className="mt-4 text-slate-500 font-medium">Find answers to common questions about our {product.name}.</p>
              </div>

              <div className="bg-white p-8 md:p-12 rounded-[3rem] border-2 border-slate-100 shadow-xl shadow-slate-200/50">
                <Accordion type="single" collapsible className="w-full">
                  {product.faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`faq-${index}`} className="border-b border-slate-100 last:border-0 py-2">
                      <AccordionTrigger className="text-left font-black tracking-tight text-slate-900 hover:text-primary transition-colors py-4">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-slate-600 text-base leading-relaxed font-medium pb-6">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Internal Linking Section - Related Products in same category */}
      {relatedSubcategories.length > 0 && (
        <section className="py-20 bg-white border-t">
          <div className="container">
            <div className="mb-12 text-center">
              <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-2 block">Related Solutions</span>
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-slate-900 tracking-tighter">
                Explore More in {currentCategory.name}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedSubcategories.map((sub) => {
                const subProduct = products[sub.slug]?.[0];
                const imageId = subProduct?.imageId || currentCategory.imageId;
                const image = resolveImageSource(imageId, PlaceHolderImages);
                
                return (
                  <Link key={sub.slug} href={`/products/${currentCategory.slug}/${sub.slug}`} className="group">
                    <Card className="h-full border-2 border-slate-100 shadow-lg shadow-slate-200/50 hover:border-primary/50 transition-all duration-500 p-8 rounded-[2.5rem] bg-white overflow-hidden">
                      <div className="aspect-square relative w-full mb-6 flex items-center justify-center p-4 bg-slate-50 rounded-[1.5rem] group-hover:bg-white transition-colors">
                        <Image 
                          src={image.imageUrl} 
                          alt={sub.name} 
                          width={250} 
                          height={250} 
                          className="object-contain transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="text-center">
                        <h3 className="font-headline text-lg font-black text-slate-900 group-hover:text-primary transition-colors leading-tight uppercase tracking-tight">
                          {sub.name}
                        </h3>
                        <div className="mt-4 flex items-center justify-center gap-2 text-primary font-black uppercase text-[9px] tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                          View Details <ArrowRight className="h-3 w-3" />
                        </div>
                      </div>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Cross-Category Internal Linking */}
      <section className="py-20 bg-slate-50 border-t">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-headline text-2xl font-black text-slate-900 tracking-tight mb-8">
              Discover Our Full Product Range
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {productCategories.filter(cat => cat.slug !== category).map((cat) => (
                <Button key={cat.slug} asChild variant="outline" className="rounded-xl font-bold uppercase tracking-widest text-[11px] h-12 px-8 border-slate-200 hover:border-primary hover:text-primary bg-white">
                  <Link href={`/products/${cat.slug}`}>{cat.name}</Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
