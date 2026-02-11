
import { products, productCategories } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight, Home, Package, Share2, Facebook, Twitter, Linkedin, ChevronLeft, CheckCircle2 } from 'lucide-react';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';

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
  const product = subcategoryProducts[0]; // Display the primary product for this sub-category

  if (!product) {
    return notFound();
  }

  const primaryImage = PlaceHolderImages.find((img) => img.id === product.imageId);
  const galleryImages = product.imageIds 
    ? product.imageIds.map(id => PlaceHolderImages.find(img => img.id === id)).filter(Boolean)
    : [primaryImage];

  const relatedSubcategories = currentCategory.subcategories?.filter(sub => sub.slug !== subcategory).slice(0, 3) || [];

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-slate-50 border-b">
        <div className="container py-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-primary flex items-center gap-1 transition-colors">
            <Home className="h-3.3 w-3.3" /> Home
          </Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
          <ChevronRight className="h-3 w-3" />
          <Link href={`/products/${currentCategory.slug}`} className="hover:text-primary transition-colors">{currentCategory.name}</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-primary">{currentSubcategory.name}</span>
        </div>
      </div>

      <section className="py-12 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Product Image Section */}
            <div className="space-y-6">
              <div className="aspect-square relative bg-slate-50 rounded-sm border overflow-hidden flex items-center justify-center p-8 group">
                {primaryImage && (
                  <Image
                    src={primaryImage.imageUrl}
                    alt={product.name}
                    width={600}
                    height={600}
                    className="object-contain transition-transform duration-500 group-hover:scale-110"
                    priority
                  />
                )}
              </div>
              <div className="grid grid-cols-4 gap-4">
                 {galleryImages.map((img, idx) => (
                   <div key={idx} className="aspect-square relative bg-slate-50 border rounded-sm p-2 cursor-pointer hover:border-primary transition-colors">
                      {img && <Image src={img.imageUrl} alt={`thumbnail-${idx}`} fill className="object-contain p-1" />}
                   </div>
                 ))}
              </div>
            </div>

            {/* Product Details Section */}
            <div className="flex flex-col">
              <h1 className="font-headline text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-8 uppercase tracking-tight">
                {product.name}
              </h1>
              
              <div className="prose prose-slate mb-10 max-w-none">
                <p className="text-muted-foreground text-xl md:text-2xl leading-relaxed font-medium">
                  {product.description || `High-performance industrial solution designed for ${product.application.toLowerCase()}. Engineered with premium stainless steel components to ensure durability and precision in demanding environments.`}
                </p>
                {product.features && (
                  <div className="mt-8 space-y-3">
                    <p className="font-black text-slate-900 uppercase text-sm tracking-widest mb-4">Key Features:</p>
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-lg md:text-xl text-slate-700 font-medium">
                        <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-10 pt-8 border-t">
                <Button asChild size="lg" className="flex-1 bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest rounded-sm h-16 shadow-xl text-sm">
                  <Link href="/contact">
                    <Package className="mr-2 h-6 w-6" /> Inquire Now
                  </Link>
                </Button>
                <Button variant="outline" size="icon" className="h-16 w-16 rounded-sm border-slate-200">
                  <Share2 className="h-6 w-6 text-slate-400" />
                </Button>
              </div>

              <div className="space-y-4 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-black text-slate-900 uppercase tracking-widest min-w-[100px]">Categories:</span>
                  <span className="text-sm font-bold text-muted-foreground uppercase">{currentCategory.name}, {currentSubcategory.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-black text-slate-900 uppercase tracking-widest min-w-[100px]">Tags:</span>
                  <span className="text-sm font-bold text-muted-foreground uppercase">Industrial, Stainless Steel, Premium</span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Tabs Section */}
          <div className="mt-24">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="w-full justify-start bg-transparent border-b rounded-none h-auto p-0 gap-12">
                <TabsTrigger value="description" className="rounded-none border-b-4 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none font-black uppercase tracking-widest text-sm py-5 px-0">Description</TabsTrigger>
                <TabsTrigger value="info" className="rounded-none border-b-4 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none font-black uppercase tracking-widest text-sm py-5 px-0">Additional Information</TabsTrigger>
              </TabsList>
              <div className="py-12">
                <TabsContent value="description" className="mt-0">
                  <div className="prose prose-slate max-w-4xl text-slate-700 text-lg md:text-xl leading-relaxed">
                    <p className="mb-8 font-medium">
                      The {product.name} represents the pinnacle of industrial filtration technology. Specifically engineered for {product.application.toLowerCase()}, this system offers unparalleled reliability and efficiency. 
                    </p>
                    {product.features && (
                      <div className="mb-8 bg-slate-50 p-8 rounded-xl border">
                        <h4 className="font-black text-slate-900 mb-6 uppercase tracking-tight text-2xl">Key Advantages:</h4>
                        <ul className="list-disc pl-6 space-y-4 font-medium">
                          {product.features.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <p className="font-medium">
                      Each unit is manufactured using high-grade materials, ensuring long-term resistance to corrosion and wear. The precision-engineered design allows for quick maintenance and minimal downtime, making it an essential component for critical process environments.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="info" className="mt-0">
                  <div className="max-w-4xl">
                    <h4 className="font-black text-slate-900 mb-8 uppercase tracking-widest text-lg">Technical Specifications</h4>
                    <Card className="rounded-none shadow-xl border-slate-100 overflow-hidden">
                      <Table>
                        <TableBody>
                          {product.specifications ? (
                            Object.entries(product.specifications).map(([key, value]) => (
                              <TableRow key={key} className="hover:bg-transparent border-slate-100">
                                <TableCell className="font-black text-slate-900 bg-slate-50 w-1/3 py-5 px-8 text-sm uppercase tracking-wider">{key}</TableCell>
                                <TableCell className="text-slate-700 py-5 px-8 text-lg font-bold">{value}</TableCell>
                              </TableRow>
                            ))
                          ) : (
                            <>
                              <TableRow className="hover:bg-transparent border-slate-100">
                                <TableCell className="font-black text-slate-900 bg-slate-50 w-1/3 py-5 px-8 text-sm uppercase tracking-wider">Material</TableCell>
                                <TableCell className="text-slate-700 py-5 px-8 text-lg font-bold">High Grade Stainless Steel (SS304/SS316)</TableCell>
                              </TableRow>
                              <TableRow className="hover:bg-transparent border-slate-100">
                                <TableCell className="font-black text-slate-900 bg-slate-50 w-1/3 py-5 px-8 text-sm uppercase tracking-wider">Standard</TableCell>
                                <TableCell className="text-slate-700 py-5 px-8 text-lg font-bold">ASME / CE Compliant</TableCell>
                              </TableRow>
                            </>
                          )}
                        </TableBody>
                      </Table>
                    </Card>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>

          {/* Related Products Section */}
          {relatedSubcategories.length > 0 && (
            <div className="mt-32">
              <div className="flex items-center justify-between mb-12">
                <h2 className="font-headline text-3xl font-black text-slate-900 uppercase tracking-tighter">Related Products</h2>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="h-10 w-10 rounded-sm"><ChevronLeft className="h-5 w-5" /></Button>
                  <Button variant="outline" size="icon" className="h-10 w-10 rounded-sm bg-primary text-white border-primary"><ChevronRight className="h-5 w-5" /></Button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {relatedSubcategories.map((sub) => {
                  const subProduct = products[sub.slug]?.[0];
                  const subImage = subProduct ? PlaceHolderImages.find(img => img.id === subProduct.imageId) : null;
                  
                  return (
                    <Link key={sub.slug} href={`/products/${currentCategory.slug}/${sub.slug}`} className="group">
                      <Card className="h-full border-slate-100 shadow-lg hover:shadow-2xl hover:border-primary/50 transition-all duration-500 rounded-xl flex flex-col items-center p-10 overflow-hidden bg-white">
                        <div className="aspect-square relative w-full mb-10 flex items-center justify-center">
                          {subImage && (
                            <Image
                              src={subImage.imageUrl}
                              alt={sub.name}
                              width={300}
                              height={300}
                              className="object-contain transition-transform duration-700 group-hover:scale-110"
                            />
                          )}
                        </div>
                        <div className="text-center mt-auto w-full">
                          <h3 className="font-headline text-xl font-black text-slate-900 group-hover:text-primary transition-colors line-clamp-2 min-h-[50px] uppercase tracking-tight">
                            {sub.name}
                          </h3>
                          <p className="text-xs font-black text-primary mt-6 tracking-[0.2em] border-t pt-4">INQUIRE FOR DETAILS</p>
                        </div>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
