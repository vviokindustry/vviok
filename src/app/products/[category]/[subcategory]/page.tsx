import { products, productCategories } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight, Home, Package, Share2, CheckCircle2 } from 'lucide-react';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { resolveImageSource } from '@/lib/utils';
import { ProductImageGallery } from '@/components/product-image-gallery';

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

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-slate-50 border-b">
        <div className="container py-6 flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-muted-foreground overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-primary flex items-center gap-2 transition-colors">
            <Home className="h-4 w-4" /> Home
          </Link>
          <ChevronRight className="h-4 w-4 opacity-30" />
          <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
          <ChevronRight className="h-4 w-4 opacity-30" />
          <Link href={`/products/${currentCategory.slug}`} className="hover:text-primary transition-colors">{currentCategory.name}</Link>
          <ChevronRight className="h-4 w-4 opacity-30" />
          <span className="text-primary">{currentSubcategory.name}</span>
        </div>
      </div>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <ProductImageGallery images={galleryImages} alt={product.name} />

            <div className="flex flex-col">
              <span className="text-primary font-black uppercase tracking-[0.4em] text-xs mb-6">Industrial Grade Excellence</span>
              <h1 className="font-headline text-5xl md:text-7xl font-black text-slate-900 leading-[0.9] mb-10 uppercase tracking-tighter">
                {product.name}
              </h1>
              
              <div className="space-y-12">
                <div className="prose prose-slate max-w-none">
                  <p className="text-slate-600 text-2xl md:text-3xl leading-relaxed font-medium">
                    {product.description || `High-performance industrial solution designed for ${product.application.toLowerCase()}. Engineered with premium materials to ensure durability and precision in demanding environments.`}
                  </p>
                </div>

                {product.features && (
                  <div className="space-y-4 pt-10 border-t">
                    <p className="font-black text-slate-900 uppercase text-sm tracking-widest mb-6">Core Performance Features</p>
                    <div className="grid gap-4">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-4 text-xl md:text-2xl text-slate-700 font-bold">
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                            <CheckCircle2 className="h-5 w-5 text-primary" />
                          </div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-6 mt-16 pt-12 border-t">
                <Button asChild size="lg" className="flex-1 bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest rounded-2xl h-20 shadow-2xl shadow-primary/20 text-base">
                  <Link href="/contact">
                    <Package className="mr-3 h-6 w-6" /> Send Quick Inquiry
                  </Link>
                </Button>
                <Button variant="outline" size="icon" className="h-20 w-20 rounded-2xl border-2 border-slate-100 hover:bg-slate-50 transition-colors">
                  <Share2 className="h-7 w-7 text-slate-400" />
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-32">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="w-full justify-start bg-transparent border-b-2 border-slate-100 rounded-none h-auto p-0 gap-16">
                <TabsTrigger value="description" className="rounded-none border-b-4 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none font-black uppercase tracking-[0.2em] text-xs py-8 px-0">Detailed Specs</TabsTrigger>
                <TabsTrigger value="info" className="rounded-none border-b-4 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none font-black uppercase tracking-[0.2em] text-xs py-8 px-0">Technical Info</TabsTrigger>
              </TabsList>
              <div className="py-16">
                <TabsContent value="description" className="mt-0 outline-none">
                  <div className="max-w-4xl space-y-10">
                    <p className="text-slate-600 text-2xl font-medium leading-relaxed">
                      The {product.name} is the pinnacle of engineering for {product.application.toLowerCase()}. 
                      Designed to withstand rigorous industrial cycles while maintaining absolute precision.
                    </p>
                    {product.features && (
                      <div className="bg-slate-50 p-12 rounded-[3rem] border-2 border-slate-100">
                        <h4 className="font-black text-slate-900 mb-8 uppercase tracking-tight text-3xl">Technical Advantages</h4>
                        <ul className="grid md:grid-cols-2 gap-6 list-none p-0">
                          {product.features.map((feature, idx) => (
                            <li key={idx} className="flex gap-3 text-xl font-bold text-slate-600">
                              <span className="text-primary">–</span> {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </TabsContent>
                <TabsContent value="info" className="mt-0 outline-none">
                  <div className="max-w-4xl">
                    <h4 className="font-black text-slate-900 mb-10 uppercase tracking-widest text-lg">Product Specifications Table</h4>
                    <div className="rounded-[2.5rem] shadow-2xl shadow-slate-200 border-2 border-slate-100 overflow-hidden bg-white">
                      <Table>
                        <TableBody>
                          {product.specifications ? (
                            Object.entries(product.specifications).map(([key, value]) => (
                              <TableRow key={key} className="hover:bg-slate-50 border-slate-100 transition-colors">
                                <TableCell className="font-black text-slate-900 bg-slate-50/50 w-2/5 py-8 px-10 text-xs uppercase tracking-widest border-r">{key}</TableCell>
                                <TableCell className="text-slate-700 py-8 px-10 text-xl font-bold">{value}</TableCell>
                              </TableRow>
                            ))
                          ) : (
                            <>
                              <TableRow className="hover:bg-slate-50 border-slate-100 transition-colors">
                                <TableCell className="font-black text-slate-900 bg-slate-50/50 w-2/5 py-8 px-10 text-xs uppercase tracking-widest border-r">Build Material</TableCell>
                                <TableCell className="text-slate-700 py-8 px-10 text-xl font-bold">Industrial Stainless Steel (SS304/SS316)</TableCell>
                              </TableRow>
                              <TableRow className="hover:bg-slate-50 border-slate-100 transition-colors">
                                <TableCell className="font-black text-slate-900 bg-slate-50/50 w-2/5 py-8 px-10 text-xs uppercase tracking-widest border-r">Standards</TableCell>
                                <TableCell className="text-slate-700 py-8 px-10 text-xl font-bold">ASME / CE International Compliance</TableCell>
                              </TableRow>
                            </>
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
    </div>
  );
}
