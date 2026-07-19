import { products, productCategories } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight, Home, Package, CheckCircle2, ArrowRight } from 'lucide-react';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { resolveImageSource } from '@/lib/utils';
import { ProductImageGallery } from '@/components/product-image-gallery';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ category: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: slug } = await params;
  
  const currentCategory = productCategories.find(cat => cat.slug === slug);
  if (currentCategory) {
    return {
      title: currentCategory.metaTitle || `${currentCategory.name} - VVIOK Industry`,
      description: currentCategory.metaDescription || currentCategory.description,
      keywords: currentCategory.metaKeywords,
      alternates: {
        canonical: `/products/${currentCategory.slug}`,
      },
    };
  }

  const product = products[slug]?.[0];
  if (product) {
    return {
      title: product.metaTitle || `${product.name} - VVIOK Industry`,
      description: product.metaDescription || product.description,
      keywords: product.metaKeywords,
      alternates: {
        canonical: `/products/${slug}`,
      },
    };
  }

  return {};
}

export async function generateStaticParams() {
  const categoryParams = productCategories.map((cat) => ({
    category: cat.slug,
  }));
  const subcategoryParams = productCategories.flatMap((cat) => 
    (cat.subcategories || []).map((sub) => ({
      category: sub.slug,
    }))
  );
  return [...categoryParams, ...subcategoryParams];
}

export default async function SlugPage({ params }: Props) {
  const { category: slug } = await params;
  
  const currentCategory = productCategories.find(cat => cat.slug === slug);
  if (currentCategory) {
    const subItems = currentCategory.subcategories || [];
    const displayProducts = products[slug] || [];

    return (
      <div className="bg-white min-h-screen">
        <div className="bg-slate-50 border-b">
          <div className="container py-3 flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-primary flex items-center gap-2 transition-colors">
              <Home className="h-3.5 w-3.5" /> Home
            </Link>
            <ChevronRight className="h-3 w-3 opacity-30" />
            <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
            <ChevronRight className="h-3 w-3 opacity-30" />
            <span className="text-primary">{currentCategory.name}</span>
          </div>
        </div>

        <section className="py-12 md:py-16">
          <div className="container">
            <div className="mb-10 border-l-8 border-primary pl-6">
              <h1 className="font-headline text-xl md:text-2xl font-black text-slate-900 tracking-tighter leading-tight">
                {currentCategory.pageH1 || currentCategory.name}
              </h1>
              <div className="text-sm md:text-base text-slate-500 mt-4 font-medium max-w-5xl whitespace-pre-wrap leading-relaxed">
                {currentCategory.description}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {subItems.length > 0 ? (
                subItems.map((sub) => {
                  const subProduct = products[sub.slug]?.[0];
                  const imageId = subProduct?.imageId || currentCategory.imageId;
                  const image = resolveImageSource(imageId, PlaceHolderImages);
                  
                  return (
                    <Link key={sub.slug} href={`/products/${sub.slug}`} className="group">
                      <Card className="relative h-full border-2 border-slate-100 shadow-xl shadow-slate-200/50 hover:border-primary/50 transition-all duration-500 flex flex-col items-center p-8 rounded-[3rem] bg-white overflow-hidden">
                        <div className="aspect-square relative w-full mb-8 flex items-center justify-center p-6 bg-slate-50 rounded-[2.5rem] group-hover:bg-white transition-colors duration-500">
                          {image && (
                            <Image
                              src={image.imageUrl}
                              alt={sub.name}
                              width={400}
                              height={400}
                              className="object-contain transition-transform duration-700 group-hover:scale-110"
                            />
                          )}
                        </div>
                        <div className="text-center mt-auto w-full">
                          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-2 block">Technical Series</span>
                          <h3 className="font-headline text-xl md:text-2xl font-black text-slate-900 group-hover:text-primary transition-colors leading-tight uppercase tracking-tight">
                            {sub.name}
                          </h3>
                          <div className="mt-6 pt-6 border-t border-slate-50 flex items-center justify-center gap-2 text-slate-400 group-hover:text-primary transition-colors font-black uppercase text-[10px] tracking-widest">
                            View Specifications <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
                      </Card>
                    </Link>
                  );
                })
              ) : (
                displayProducts.map((product) => {
                  const image = resolveImageSource(product.imageId, PlaceHolderImages);
                  return (
                    <Link key={product.name} href="/contact" className="group">
                      <Card className="relative h-full border-2 border-slate-100 shadow-xl shadow-slate-200/50 hover:border-primary/50 transition-all duration-500 flex flex-col items-center p-8 rounded-[3rem] bg-white overflow-hidden">
                        <div className="aspect-square relative w-full mb-8 flex items-center justify-center p-6 bg-slate-50 rounded-[2.5rem] group-hover:bg-white transition-colors duration-500">
                          {image && (
                            <Image
                              src={image.imageUrl}
                              alt={product.name}
                              width={400}
                              height={400}
                              className="object-contain transition-transform duration-700 group-hover:scale-110"
                            />
                          )}
                        </div>
                        <div className="text-center mt-auto w-full">
                          <h3 className="font-headline text-xl md:text-2xl font-black text-slate-900 group-hover:text-primary transition-colors leading-tight uppercase tracking-tight">
                            {product.name}
                          </h3>
                          <p className="text-xs font-black text-slate-400 mt-4 uppercase tracking-[0.2em]">Inquire for Details</p>
                        </div>
                      </Card>
                    </Link>
                  )
                })
              )}
            </div>
          </div>
        </section>
      </div>
    );
  }

  const product = products[slug]?.[0];
  if (product) {
    const parentCategory = productCategories.find(cat => cat.subcategories?.some(sub => sub.slug === slug));
    const primaryImage = resolveImageSource(product.imageId, PlaceHolderImages);
    const galleryImages = product.imageIds 
      ? product.imageIds.map(id => resolveImageSource(id, PlaceHolderImages))
      : [primaryImage];

    const relatedSubcategories = parentCategory?.subcategories?.filter(sub => sub.slug !== slug) || [];

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
            {parentCategory && (
              <>
                <Link href={`/products/${parentCategory.slug}`} className="hover:text-primary transition-colors">{parentCategory.name}</Link>
                <ChevronRight className="h-3 w-3 opacity-30" />
              </>
            )}
            <span className="text-primary">{product.name}</span>
          </div>
        </div>

        <section className="py-12 md:py-20">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <ProductImageGallery images={galleryImages} alt={product.name} />
              <div className="flex flex-col">
                <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-4">Industrial Grade Excellence</span>
                <h1 className="font-headline text-3xl md:text-5xl font-bold text-slate-900 leading-[1.1] mb-8 tracking-tighter">{product.name}</h1>
                <div className="prose prose-slate max-w-none">
                  <div className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium whitespace-pre-wrap">{product.description}</div>
                </div>
                {product.features && (
                  <div className="space-y-3 pt-8 border-t mt-8">
                    <p className="font-black text-slate-900 uppercase text-[10px] tracking-widest mb-4">Core Performance Features</p>
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-base md:text-lg text-slate-700 font-bold">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                )}
                <div className="flex flex-col sm:flex-row gap-4 mt-12 pt-10 border-t">
                  <Button asChild size="lg" className="flex-1 bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest rounded-xl h-16 shadow-lg shadow-primary/10 text-sm">
                    <Link href="/contact"><Package className="mr-2 h-5 w-5" /> Send Inquiry</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-20">
              <Tabs defaultValue="description" className="w-full">
                <TabsList className="w-full justify-start bg-transparent border-b-2 border-slate-100 rounded-none h-auto p-0 gap-10">
                  <TabsTrigger value="description" className="rounded-none border-b-4 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent font-black uppercase tracking-[0.2em] text-[10px] py-6 px-0">Detailed Specs</TabsTrigger>
                  <TabsTrigger value="info" className="rounded-none border-b-4 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent font-black uppercase tracking-[0.2em] text-[10px] py-6 px-0">Technical Info</TabsTrigger>
                </TabsList>
                <div className="py-12">
                  <TabsContent value="description" className="mt-0 outline-none">
                    <div className="text-slate-600 text-lg font-medium leading-relaxed whitespace-pre-wrap">{product.detailedSpecs}</div>
                  </TabsContent>
                  <TabsContent value="info" className="mt-0 outline-none">
                    <div className="max-w-4xl">
                      <div className="rounded-[1.5rem] shadow-xl border-2 border-slate-100 overflow-hidden bg-white">
                        <Table>
                          <TableBody>
                            {product.specifications && Object.entries(product.specifications).map(([key, value]) => (
                              <TableRow key={key} className="hover:bg-slate-50 border-slate-100 transition-colors">
                                <TableCell className="font-black text-slate-900 bg-slate-50/50 w-2/5 py-4 px-6 text-[10px] uppercase tracking-widest border-r">{key}</TableCell>
                                <TableCell className="text-slate-700 py-4 px-6 text-base font-bold">{value}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                  </TabsContent>
                </div>
              </Tabs>
            </div>

            {product.faqs && (
              <section className="py-20 bg-slate-50 -mx-4 md:-mx-8 lg:-mx-16 px-4 md:px-8 lg:px-16 mt-20">
                <div className="max-w-3xl mx-auto">
                  <h2 className="font-headline text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                  <Accordion type="single" collapsible className="w-full bg-white p-8 rounded-[3rem] border shadow-xl">
                    {product.faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`faq-${index}`} className="border-b last:border-0">
                        <AccordionTrigger className="text-left font-black tracking-tight text-slate-900">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-slate-600 text-base font-medium">{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </section>
            )}

            {relatedSubcategories.length > 0 && (
              <section className="py-20 border-t mt-20">
                <h2 className="font-headline text-3xl font-bold text-center mb-12">Related Solutions</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {relatedSubcategories.map((sub) => {
                    const subP = products[sub.slug]?.[0];
                    const img = resolveImageSource(subP?.imageId || '', PlaceHolderImages);
                    return (
                      <Link key={sub.slug} href={`/products/${sub.slug}`} className="group">
                        <Card className="h-full border-2 border-slate-100 shadow-lg hover:border-primary/50 transition-all p-8 rounded-[2.5rem] flex flex-col items-center text-center">
                          <div className="aspect-square relative w-full mb-6 bg-slate-50 rounded-[1.5rem] p-4 flex items-center justify-center">
                            <Image src={img.imageUrl} alt={sub.name} width={200} height={200} className="object-contain group-hover:scale-110 transition-transform" />
                          </div>
                          <h3 className="font-headline text-lg font-black uppercase">{sub.name}</h3>
                          <div className="mt-4 flex items-center gap-2 text-primary font-black uppercase text-[9px] opacity-0 group-hover:opacity-100 transition-opacity">
                            View Details <ArrowRight className="h-3 w-3" />
                          </div>
                        </Card>
                      </Link>
                    );
                  })}
                </div>
              </section>
            )}
          </div>
        </section>
      </div>
    );
  }

  return notFound();
}
